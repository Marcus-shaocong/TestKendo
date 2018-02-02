<template>
<div id="signin" class="signin">
  <div class="signin-form p-5">
	<h1 id="app-title">新居室</h1>
	<p id="app-subtitle">中国房屋买卖实践专家</p>

	<div class="form-group mt-4">
		<input type="text" class="form-control" placeholder="Email or Username" />
	</div>
	<div class="form-group mb-4">
		<input type="password" class="form-control" placeholder="Password" />
		<p class="text-xs-right small">
			<a href="#">忘记密码?</a>
		</p>
	</div>
	<div class="form-group">
		<button class="btn btn-primary btn-block" @click="onLoginClick">登录</button>
	</div>

	</div>
 </div>
</template>

<script>
  export default {
    name: 'signin',
    methods: {
      onLoginClick() {
        this.$router.push('Houses')
      }
    }
  }
</script>