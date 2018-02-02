<template>
<div>
 
  <div class="grid">
    <!--
    <kendo-grid
      :dataSourceRef="'readData'"
      :excel:="excelData"
      :toolbar="toolbar"
      v-on:databinding="onDataBinding"
      v-on:databound="onDataBound"
      :groupable='true'
      :sortable='true'
      :scrollable='false'
      :pageable-refresh='true'
      :pageable-page-sizes='true'
      :pageable-button-count="5"
      :data-source="houseData">
      <kendo-grid-column field="GoodMetro" title="优质地铁站点"></kendo-grid-column>
      <kendo-grid-column field="OrgMetro" title='原地铁站点' :width="120"></kendo-grid-column>
      <kendo-grid-column field="MetroAround" title="周边地铁" :width="120" :format="'{0:c}'"></kendo-grid-column>
      <kendo-grid-column field="IsSchool" title="学区房" :width="120"></kendo-grid-column>
      <kendo-grid-column field="BaseAppraisal"  title="小区基价" :width="120"></kendo-grid-column>
      <kendo-grid-column field="MarketPrice" title="市场均价（元／平）" :width="120"></kendo-grid-column>
      <kendo-grid-column field="MetorStation" title="市场折扣" :width="40"></kendo-grid-column>
      <kendo-grid-column field="MetorStation" title='总地铁站点' :width="120"></kendo-grid-column>
      <kendo-grid-column field="PricePerHouse" title="房源单价和连接" :width="120" :format="'{0:c}'"></kendo-grid-column>
      <kendo-grid-column field="WholePrice" title="房源总价" :width="120"></kendo-grid-column>
      <kendo-grid-column field="Rooms"  title="房源房间" :width="120"></kendo-grid-column>
      <kendo-grid-column field="HouseDesc" title="房源描述(点开复制开来)" :width="120"></kendo-grid-column>
      <kendo-grid-column field="HouseDirection" title="房源朝向" :width="40"></kendo-grid-column>
      <kendo-grid-column field="HouseFloor" title='房源楼层' :width="120"></kendo-grid-column>
      <kendo-grid-column field="HouseTax" title="房源税费情况" :width="120" :format="'{0:c}'"></kendo-grid-column>
      <kendo-grid-column field="HouseDecor" title="房源装修" :width="120"></kendo-grid-column>
      <kendo-grid-column field="NewMetro"  title="新地铁站点" :width="120"></kendo-grid-column>
      <kendo-grid-column field="District" title="板块" :width="120"></kendo-grid-column>
      <kendo-grid-column field="Title" title="标题" :width="40"></kendo-grid-column>
      <kendo-grid-column field="Plate" title='环线' :width="120"></kendo-grid-column>
      <kendo-grid-column field="ConstructionYear" title="竣工日期" :width="120" :format="'{0:c}'"></kendo-grid-column>
      <kendo-grid-column field="Area" title="行政区" :width="120"></kendo-grid-column>
      <kendo-grid-column field="DiscountPresent"  title="评估折扣" :width="120"></kendo-grid-column>
      <kendo-grid-column field="DistFromPP" title="距离人广" :width="120"></kendo-grid-column>                  
    </kendo-grid>
    <kendo-button id="btnExport" v-on:change="onChange">导出至 Excel</kendo-button>
  </div>
  -->
<!--
      <kendo-grid
      :dataSourceRef="'readData'"
      :excel:="excel"
      :excelExport="excelExport"
      :toolbar="toolbar"
      v-on:databinding="onDataBinding"
      v-on:databound="onDataBound"
      :groupable='true'
      :sortable='true'
      :scrollable='false'
      :pageable-refresh='true'
      :pageable-page-sizes='true'
      :pageable-button-count="5"
      :data-source="localDataSource" v-once>
        <kendo-grid-column field="HouseName" title="小区" :width="40"></kendo-grid-column>
        <kendo-grid-column field="HousePrice" title='价格' :width="120"></kendo-grid-column>
        <kendo-grid-column field="Age" title="年份" :width="120" :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column field="Area" title="面积" :width="120"></kendo-grid-column>
        <kendo-grid-column field="IsSchool"  title="是否学区" :width="120"></kendo-grid-column>
        <kendo-grid-column field="Desc" title="其它描述" :width="120"></kendo-grid-column>
      </kendo-grid>

      <kendo-button id="btnExport" @click="onChange">导出至 Excel</kendo-button>
      -->
      <kendo-grid 
      :data-source="houseData" 
      :columns="newColumns"
      :toolbar="toolbar"
      :excel="excel"
      :change="onChange"
      :excelExport="ExcelExport"
      :pdfExport="pdfExport"
      :save="onSave"
      :saveChanges="onSaveChanges"
      >
      </kendo-grid>
  </div>
</div>
</template>

<script>

import axios from 'axios'
import kendoOoxml from '@progress/kendo-ui'
import kendo from '@progress/kendo-ui'
import JSZip from 'jszip'


//var $ = window.jQuery = require('jquery');

const fields = {
        H_Title:'房源标题',
        H_flatName:'小区名称',
        H_Node:'行政区',
        H_District:'板块',
        H_Plate:'环线',
        H_ConstructionYear:'竣工日期（年）',
        H_PricePerHouse:'单价（元／平）',
        H_BaseAppraisal: '小区基价',
        H_MarketDiscount:'评估折扣',
        H_Area:"建筑面积",
        H_MarketPrice:'总价（万）',
        H_HouseDirection:'房源朝向',
        H_HouseFloor:'楼层描述',
        H_Rooms:'房间数',
        H_HouseDecor:'装修情况',
        H_HouseYear:"房屋年限",
        H_HasElevator:"是否配备电梯",
        H_Elevator:"电梯-梯",
        H_Floor:"电梯-户",
        H_TypeOfConstruction: "建筑类型",
        H_MetroAround:'周边地铁',
        H_MetorStation:'总地铁站点',
        H_GoodMetro:'优质地铁站点',
        H_DistFromPP:'距离人广(km)',
        H_selfDefDist:"距自定义(km)-漕河泾",
        H_IsSchool:'学区房',
        H_TradeAuth:"交易权属",
        H_Fans:"关注人数",
        H_WatchCount:"带看次数",
        H_PublishTime:"发布时间",
        H_HouseDesc:'房源描述'     
};

export default {

  data () {
    return {
      toolbar:["excel"],
      excel:{
          fileName: "Test.xlsx",
          filterable: true,
          proxyURL: "http://localhost:8000"
      },
      columns:[
        {field:"HouseName", title:"标题", width:"120px"},
        {field:"HousePrice", title:"房源价格", width:"120px"},
        {field:"Age", title:"房龄", width:"120px"},
        {field:"Area", title:"面积", width:"120px"},
        {field:"Dist", title:"区域", width:"120px"},
        {field:"IsSchool", title:"学区", width:"120px"},
        {field:"Desc", title:"描述", width:"120px"}
      ],
      name: 'houses info',
      houseData:[],
      localDataSource: [
        {
          'HouseName': '同济新村',
          'HousePrice': '330万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '杨浦新村',
          'HousePrice': '90万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '杨浦新村',
          'HousePrice': '330万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '杨浦新村',
          'HousePrice': '330万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '杨浦新村',
          'HousePrice': '90万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '杨浦新村',
          'HousePrice': '330万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '同济新村',
          'HousePrice': '330万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '同济新村',
          'HousePrice': '330万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '同济新村',
          'HousePrice': '90万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '同济新村',
          'HousePrice': '330万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '同济新村',
          'HousePrice': '330万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '同济新村',
          'HousePrice': '330万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '同济新村',
          'HousePrice': '330万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': '同济新村',
          'HousePrice': '330万',
          'Age': '1986',
          'Area': '84平',
          'Dist': '杨浦',
          'IsSchool': '学区',
          'Desc': '两室一厅'
        },
        {
          'HouseName': 'xincun',
          'HousePrice': '330',
          'Age': '1986',
          'Area': '84',
          'Dist': 'yangpu',
          'IsSchool': 'No',
          'Desc': 'two houses'
        }

      ]
    }
  },


  methods:{
    readData(){
      console.log('reading Data');
    },

    onDataBinding:function(ev){
      console.log("Grid is about to be bond!");
      /*
      var grid = jQuery("#grid").data("kendoGrid");
      for (var i = 0; i < grid.columns.length; i++) {
        grid.autoFitColumn(i);
      }*/
    },

    excelExport:function(e){
      console.log("excelExport");
      console.log(e);
      // Prevent the default behavior which will prompt the user to save the generated file.
      debugger
      e.preventDefault();
      // Get the Excel file as a data URL.
       /*
      let workbook = new kendo.ooxml.Workbook(e.workbook);
      workbook.toDataURLAsync().then(function(dataURI) {
        dataURI:dataURI,
        fileName:"Test.xlsx"
      });
     
      let dataUrl = workbook.toDataURL();
      kendo.saveAs({dataURI:dataUrl, fileName:"Test.xlsx"})
      
      // Strip the data URL prologue.
      var base64 = dataURL.split(";base64,")[1];
      debugger
      // Post the base64 encoded content to the server which can save it.
      $.post("/server/save", {
          base64: base64,
          fileName: "ExcelExport.xlsx"
      });      
      $("#grid").data("kendoGrid").saveAsExcel()*/
      
  },

    onDataBound:function(ev){
      console.log("Grid is now bound!");
    },

    onClick:function(ev){
      console.log("onClick")
      let grid = $("#grid").data("kendoGrid");
      debugger
      grid.saveAsExcel();
    },

    onChange:function(ev){
      console.log("onChange", ev);
    },

    onSave:function(ev){
      console.log("onSave",ev);
    },

    onSaveChanges:function(ev){
      console.log("onSavechanges",ev);
    },

    pdfExport: function(ev){
      console.log("pdfExport", ev);
    }
  },


  created(){
    var that = this;  
    //Get data from server
    console.log("Enter created:", this.$route.path);
    axios.get('http://localhost:8000').then(function(res){
      console.log("res body",res.data);
      let data = res.data.map(item=>{
        let newItem = {};
        for (let key in fields) {
          if(item[fields[key]]!== undefined){
            newItem[key] = item[fields[key]];
          }
        }
        return newItem;
      });
      that.houseData = data;
      console.log("house data", data);
    });
  },


  computed:{
    newColumns:function(){
    //set columns
      let propLength = Object.keys(fields).length;
      let setCols = [];
      for (let key in fields) {
          setCols.push({field:key, title:fields[key], width:"120px"})
      }
      console.log("setCols", setCols);
      return setCols;
    }
  },


  mounted:function(){
    console.log("Enter mounted");
    /*
      $("#btnExport").kendoButton({
      click: function()
        {
          console.log("mountedonclick")
          $("#grid").data("kendoGrid").saveAsExcel()
        }
      });*/
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .grid {
    padding: 10px;
  }
  
</style>
