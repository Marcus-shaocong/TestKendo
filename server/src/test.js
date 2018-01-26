  var   node_xj = require("xls-to-json");

  var exec = require('child_process').exec;


  var CronJob = require('cron').CronJob;
var fs = require('fs');

  var csv = require("fast-csv");
  var byline = require('byline');
  /*
  var stream = byline(fs.createReadStream("./src/test.xlsx", { encoding: 'utf8' }));
  stream.on('data', function(line) {
    line = line.replace(/\\\"/g, '""');
  
    csv.fromString(line)
      .on("data", function (data) {
        // data 
      })
      .on("end", function () {
  
      });
  });*/

  
  var Excel = require('exceljs');
  var workbook = new Excel.Workbook();

workbook.xlsx.readFile('./src/test.xlsx')
    .then(function(worksheet) {
      console.log(typeof worksheet);
        console.log(worksheet._worksheets.length);
        let body = [];
        let firstrow = 0;
        let header;
        worksheet._worksheets[16].eachRow({includeEmpty: false}, function(row, rowNumber){
          console.log("typeof row", typeof row);
          if(firstrow === 0){
              header = row.values.map(item=>{
              item = item.replace(/\r?\n/g, " ");
              return item;
            });
            header = header.splice(1,header.length);            
            console.log("header lenght", header.length);           
          }
          else{

            let eachItem = row.values;
            eachItem = eachItem.splice(1,eachItem.length);  
            console.log("firstrow", firstrow);
            console.log("second item", eachItem.length);
            body.push(eachItem);

          }

          firstrow += 1;

          //console.log('Row '  + rowNumber + ' = ' + JSON.stringify(row.values));
          });

          console.log(header);
          console.log(body.length);
          let houseInfos= body.map(item=>{
              let houseInfo={};
              for(i=0; i<header.length; i++){
                console.log(header[i]);
                console.log(item[i]);
                houseInfo[header[i]] = item[i];
              }
              return houseInfo
          });

          console.log(houseInfos);
    })
    .catch(function(err, res){
      console.log(err);
      console.log(res);
    });



function scheduleJob(param) {
    var job = new CronJob('*/5 * * * * *', function(){
      var date = new Date();
      console.log(date.toISOString());
      console.log(param);
      let command = `perl ./src/test.pl ${param.name} ${param.age}`
      console.log(command);
      exec(command, function(err, stdout, stderr){
          console.log(err);
          console.log(stdout);
          console.log(stderr);
        });
    }, true, 'America/Los_Angeles');

    return job;    
}

//scheduleJob({name: "this is a name", age: 93});



  /*
  var Excel = require('exceljs');

  var workbook = new Excel.Workbook();
workbook.csv.readFile('./src/housePrice.csv')
    .then(function(worksheet) {
        debugger
        var row = worksheet.getRow(1);
        console.log(row.values)
    });


  
  node_xj({
    input: "./src/housePrice.csv",  // input xls
    output: "output.json", // output json
    sheet: "a"  // specific sheetname
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log("--------result----");
      console.log(result);
    }
  });*/