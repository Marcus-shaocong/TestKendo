<template>
<div>
  <div class="grid">
    <kendo-grid
      :dataSourceRef="'readData'"
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
  </div>
      <!--
      <div v-for="item in columns"> 
      <kendo-grid-column field={{item.name}}" title={{item.value}} :width="40"></kendo-grid-column>
      </div>
      <div v-for="item in columns"> 
      <kendo-grid-column field={{item.value}}" title={{item.value}} :width="10%"></kendo-grid-column>
      </div>
        <kendo-grid-column field="HouseName" title="小区" :width="40"></kendo-grid-column>
        <kendo-grid-column field="HousePrice" title='价格' :width="120"></kendo-grid-column>
        <kendo-grid-column field="Age" title="年份" :width="120" :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column field="Area" title="面积" :width="120"></kendo-grid-column>
        <kendo-grid-column field="IsSchool"  title="是否学区" :width="120"></kendo-grid-column>
        <kendo-grid-column field="Desc" title="其它描述" :width="120"></kendo-grid-column>
      -->

  
</div>
</template>

<script>
import axios from 'axios'
import jQuery from 'jQuery'

const fields = {
        GoodMetro:'优质地铁站点',
        OrgMetro:'原地铁站点',
        MetroAround:'周边地铁',
        IsSchool:'学区房',
        BaseAppraisal: '小区基价',
        MarketPrice:'市场均价（元／平）',
        MarketDiscount:'市场折扣',
        MetorStation:'总地铁站点',
        PricePerHouse:'房源单价和连接',
        WholePrice:'房源总价',
        Rooms:'房源房间',
        HouseDesc:'房源描述(点开复制开来)',
        HouseDirection:'房源朝向',
        HouseFloor:'房源楼层',
        HouseTax:'房源税费情况',
        HouseDecor:'房源装修',
        NewMetro:'新地铁站点',
        District:'板块',
        Title:'标题',
        Plate:'环线',
        ConstructionYear:'竣工日期',
        Area:'行政区',
        DiscountPresent:'评估折扣',
        DistFromPP:'距离人广'
};

export default {

  data () {
    return {
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
    onDataBound:function(ev){
      console.log("Grid is now bound!");
    }
  },
  created(){
    var that = this;
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
    columns:function(){
    let setCols = [];
    for (let key in fields) {
        setCols.push({name:key, value:fields[key]});
    }
    console.log("setCols", setCols);
    return setCols;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .grid {
    padding: 10px;
  }
  
</style>
