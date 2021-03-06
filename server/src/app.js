console.log("helloworld");
const debug = require('debug-levels')('app')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const serveStatic = require('serve-static')
const app = express()
const path = require('path')
var Excel = require('exceljs');


app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res, next) => {
	var workbook = new Excel.Workbook();

	workbook.xlsx.readFile('./src/new_houses.xlsx')
	  .then(function(worksheet) {
		console.log(typeof worksheet);
		  //console.log(worksheet._worksheets.length);
		  let body = [];
		  let firstrow = 0;
			let header;
			let wsheet = workbook.getWorksheet(1)
		  wsheet.eachRow({includeEmpty: false}, function(row, rowNumber){
			//console.log("typeof row", typeof row);
			if(firstrow === 0){
				header = row.values.map(item=>{
				item = item.replace(/\r?\n/g, " ");
				return item;
			  });
			  header = header.splice(1,header.length);            
				console.log("header lenght", header.length);    
				console.log("header", header)       
			}
			else{
	
				let eachItem = row.values;
				// eachItem.map(item=>{
				// 	console.log('typeof item:', typeof item)
				// })
				eachItem = eachItem.splice(1,eachItem.length); 
				eachItem = eachItem.map(item=>{
						return item
				})
				//console.log("eachItem", eachItem) 
			  //console.log("firstrow", firstrow);
			  //console.log("second item", eachItem.length);
			  body.push(eachItem);
	
			}
	
			firstrow += 1;
	
			//console.log('Row '  + rowNumber + ' = ' + JSON.stringify(row.values));
			});
	
			//console.log(header);
			//console.log(body.length);
			let houseInfos= body.map(item=>{
				let houseInfo={};
				for(i=0; i<header.length; i++){
				  //console.log(header[i]);
				  //console.log(item[i]);
				  houseInfo[header[i]] = item[i];
				}
				return houseInfo
			});
	
			res.json(houseInfos);
	  })
	  .catch(function(err, res){
		console.log(err);
		console.log(res);
	  });
});

app.get('/:id', (req,res)=>{
	console.log(req.params.id)
	res.send({name: "billy",
			age:36})
});

app.post('/houses', function(req, res){
	console.log("req.body", req.body)
	res.json({name:'test',value:'test'});
});


//console.log(path);
debug.info(path.join(__dirname, '../assets'));
app.use(serveStatic(path.join(__dirname, '../assets')))
app.listen(process.env.PORT || 8000)


