<template>
<div id="housecomponent">
    <div class="row">
        <div class="col-md-12">
            <div class="card" id="profile">
              <h3 class="card-header">筛盘属性</h3>
            <div class="card-block">
              <div class="row">
                <div class="col-md-12">
                  
                  <div class = "row">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="h6">客户姓名</label>
                        <input type="email" id="name" class="form-control" v-model="user.name" placeholder="例如：张三"/>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="h6">折扣率</label>
                        <input type="text" id="discount" class="form-control" v-model="user.discount" placeholder="例如：0.98" />
                      </div>
                    </div>
                  </div>
                    <div class="form-group">
                    <label class="h6">定制选项</label>
                    <input type="text" id="option" class="form-control" v-model="user.option" />
                    </div>
                    <div class="form-group">
                    <label class="h6">房源URL前半段</label>
                    <input type="text" id="housePrefixUrl" class="form-control" v-model="user.prefixUrl" placeholder="例如：http://sh.lianjia.com/ershoufang/d"/>
                    </div>
                    <div class="form-group">
                    <label class="h6">房源URL后半段</label>
                    <input type="text" id="houseSuffixUrl" class="form-control" v-model="user.suffixUrl" placeholder="例如：e2ie2ie1y4l2l5l4l6p3p6/"/>
                    </div>
                    <div class="form-group">
                    <button class="btn btn-primary" @click="onSelectClick">筛盘</button>
                    </div>
                    <label v-show="errors">{{errors}}</label>
                </div>
                </div>
            </div>
            </div>
          </div>
  </div>

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
      :toolbar="toolbar"
      :excel="excel"
      :change="onChange"
      :excelExport="ExcelExport"
      :pdfExport="pdfExport"
      :save="onSave"
      :scrollable='true'
      :saveChanges="onSaveChanges"
      :pageable-items-per-page = "10"
      :pageable-refresh='true'
      :pageable-page-sizes='true'
      :pageable-button-count="5"
      :detail-template="detailTemplate"
      >
      <kendo-grid-column :selectable="true" :width="50"/>
      <kendo-grid-column field="H_flatName" title='小区名称' :width="200" template="
      <span><a href='#:H_flatName.hyperlink #' title='#:H_flatName.text #'>#: H_flatName.text #</a></span>"/>
      <kendo-grid-column field="H_Title" title="房源标题" :width="200"  template="
      <span><a href='#:H_Title.hyperlink #' title='#:H_Title.text #'>#: H_Title.text #</a></span>"/>
      <kendo-grid-column field="H_Node" title="行政区" :width="100"/>
      <kendo-grid-column field="H_District" title="板块" :width="100"/>
      <kendo-grid-column field="H_Plate" title="环线" :width="150" template="<span title='#:H_Plate #'>#:H_Plate #</span>"/>
      <kendo-grid-column field="H_ConstructionYear" title="竣工日期（年）" :width="150"/>
      <kendo-grid-column field="H_PricePerHouse" title="单价（元／平）" :width="150"/>
      <kendo-grid-column field="H_BaseAppraisal" title='小区基价' :width="100"/>
      <kendo-grid-column field="H_MarketDiscount" title="评估折扣" :width="100"/>
      <kendo-grid-column field="H_Area" title="建筑面积" :width="100" />
      <kendo-grid-column field="H_MarketPrice" title="总价（万）" :width="150" />
      <kendo-grid-column field="H_HouseDirection" title="房源朝向" :width="100"/>
      <kendo-grid-column field="H_HouseFloor" title="楼层描述" :width="150"/>
      <kendo-grid-column field="H_Rooms" title='房间数':width="100"/>
      <kendo-grid-column field="H_HouseDecor" title="装修情况" :width="100"/>
      <kendo-grid-column field="H_HouseYear" title="房屋年限" :width="100"/>
      <kendo-grid-column field="H_HasElevator"  title="是否配备电梯" :width="150"/>
      <kendo-grid-column field="H_Elevator" title="电梯-梯" :width="100"/>
      <kendo-grid-column field="H_Floor" title="电梯-户" :width="100" />
      <kendo-grid-column field="H_TypeOfConstruction" title='建筑类型' :width="100" />
      <kendo-grid-column field="H_MetroAround" title="周边地铁" :width="200" template="<span title='#:H_MetroAround #'>#:H_MetroAround #</span>"/>
      <kendo-grid-column field="H_MetorStation" title="总地铁站点"  :width="150" />
      <kendo-grid-column field="H_GoodMetro" title="优质地铁站点" :width="150" />
      <kendo-grid-column field="H_DistFromPP" title="距离人广(km)" :width="150" />
      <kendo-grid-column field="H_selfDefDist" title="距自定义(km)-漕河泾" :width="200" />
      <kendo-grid-column field="H_IsSchool" title="学区房" :width="100" />
      <kendo-grid-column field="H_TradeAuth" title="交易权属" :width="100" />
      <kendo-grid-column field="H_Fans" title="关注人数" :width="100" />
      <kendo-grid-column field="H_WatchCount" title="带看次数" :width="100" />
      <kendo-grid-column field="H_PublishTime" title="发布时间":width="100" template="<span title='#:H_PublishTime #'>#:H_PublishTime #</span>"/>
      <kendo-grid-column field="H_HouseDesc" title="房源描述" :width="100" template="<span title='#:H_HouseDesc #'>#:H_HouseDesc #</span>" />
    </kendo-grid>
  </div>
</div>
</template>

<script>

import axios from 'axios'
import kendoOoxml from '@progress/kendo-ui'
import kendo from '@progress/kendo-ui'
import JSZip from 'jszip'
import SelectHouseForm from './SelectHouseForm.vue'
import localData from '../configure/testData'


//var $ = window.jQuery = require('jquery');

const fields = {
        H_Title:'房源标题',
        H_flatName:'小区名称',
        H_Node:'行政区',
        H_District:'板块',
        H_Plate:'环线',
        H_ConstructionYear:'竣工日期(年)',
        H_PricePerHouse:'单价(元/平)',
        H_BaseAppraisal: '小区基价',
        H_MarketDiscount:'评估折扣',
        H_Area:"建筑面积",
        H_MarketPrice:'总价(万)',
        H_HouseDirection:'房屋朝向',
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
        H_DistFromPP:'距人广(km)',
        H_selfDefDist:"距自定义(km)-漕河泾",
        H_IsSchool:'学区房',
        H_TradeAuth:"交易权属",
        H_Fans:"关注人数",
        H_WatchCount:"带看次数",
        H_PublishTime:"发布时间",
        H_HouseDesc:'房源描述'     
};


  const DETAIL_TEMPLATE = `
        <div class="row my-4">
            <div class="col-sm-4">
                <p>
                    <span class="text-muted"><b>小区: </b><a href='#:H_flatName.hyperlink #'>#: H_flatName.text #</a></span></br>
                    <span class="text-muted"><b>板块: </b>#: H_District #</span></br>
                    <span class="text-muted"><b>面积: </b>#: H_Area #</span></br>
                    <span class="text-muted"><b>小区基价: </b>#: H_PricePerHouse #</span></br>
                    <span class="text-muted"><b>总价（万）: </b>#: H_MarketPrice #</span></br>
                    <span class="text-muted"><b>评估折扣: </b>#: H_MarketDiscount #</span></br>
                    <span class="text-muted"><b>楼层描述: </b>#: H_HouseFloor #</span></br>
                    <span class="text-muted"><b>周边地铁: </b>#: H_MetroAround #</span></br>
                    <span class="text-muted"><b>带看次数: </b>#: H_WatchCount #</span></br>
                </p>
            </div>
        </div>`

export default {

  data () {
    return {
      errors:"",
      user:{
          prefixUrl:"",
          suffixUrl:"",
          name:"",
          discount:0,
          option:""
      },
      toolbar:["excel"],
      excel:{
          fileName: "Test.xlsx",
          filterable: true,
          proxyURL: "http://localhost:8000"
      },
      components:{
        'select-house-form': SelectHouseForm
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
      localDataSource: localData
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

    ExcelExport:function(e){
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
    },
    
    isValid: function () {
      var validData = this.validation
      console.log("validation");
      return Object.keys(validData).every(function (key) {
        console.log("isVaild key", key)
        console.log("isVaild", validData[key])
        return validData[key]
      })
    },
    onSelectClick:function(ev){
      console.log("onSelectClick", ev)
      console.log("this.User", this.user)
      if(this.isValid()){
          axios(
            {
              method: 'post',
              url:'http://localhost:8000/houses',
              data:this.user
            }
          ).then(function(res){
          console.log("res body",res.data);
          });
      }
      else{
        console.log("not valid")
        //this.errors = "something is wrong"
      }
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
    that.detailTemplate = DETAIL_TEMPLATE;
  },


  computed:{
    newColumns:function(){
    //set columns
      let propLength = Object.keys(fields).length;
      let setCols = [];
      setCols.push({selectable:true, width:"50px"})
      for (let key in fields) {
          setCols.push({field:key, title:fields[key], width:"120px"})
      }
      console.log("setCols", setCols);
      return setCols;
    },
    validation:function(){
      return{
        name: !!this.user.name.trim(),
        discount:  this.user.discount !== 0,
        prefixUrl: !!this.user.prefixUrl.trim(),
        suffixUrl: !!this.user.suffixUrl.trim()
      }
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
