<template>
  <div id="select-house-form">
      <div class="row">
        <div class="col-md-12">
            <div class="card" id="profile">
            <h3 class="card-header">筛盘属性</h3>
            <div class="card-block">
                <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                    <label class="h6">房源URL前半段</label>
                    <input type="text" id="housePrefixUrl" class="form-control" :value="user.prefixUrl" />
                    </div>
                    <div class="form-group">
                    <label class="h6">房源URL后半段</label>
                    <input type="text" id="houseSuffixUrl" class="form-control" :value="user.suffixUrl" />
                    </div>
                    <div class="form-group">
                    <label class="h6">客户姓名</label>
                    <input type="email" id="name" class="form-control" :value="user.name" />
                    </div>
                    <div class="form-group">
                    <label class="h6">折扣率</label>
                    <input type="text" id="discount" class="form-control" :value="user.discount" />
                    </div>
                    <div class="form-group">
                    <label class="h6">定制选项</label>
                    <input type="text" id="option" class="form-control" :value="user.option" />
                    </div>
                    <div class="form-group">
                    <button class="btn btn-primary" @click="onSelectClick">筛盘</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'select-house-form',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user:{
          prefixUrl:"",
          suffixUrl:"",
          name:"",
          discount:0,
          option:""
      }
    }
  },
  methods:{
      onSelectClick:function(e){
        console.log("onSelectClick", e)
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
