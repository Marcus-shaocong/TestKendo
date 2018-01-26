<template>
    <div class="row">
        <div id="top-bar" class="top-bar col-xs-12 bg-inverse d-md-none"></div>
        <div id="nav"
            class="col-xs-3 bg-inverse text-white py-5 k-vbox"
            v-if="this.$route.path.toLowerCase() !== '/signin'"
            :class="{expand: navState}">
            <span id="nav-toggle" class="nav-toggle d-md-none" @click="navState = !navState">
                <span class="k-icon k-i-hamburger"></span>
            </span>
            <h1 id="app-title">新居氏</h1>
            <p id="app-subtitle">中国房屋买卖实践专家</p>
            <hr />
            <p class="h4 mt-5">Project</p>
            <ul class="nav nav-pills flex-column">
                <li class="nav-item" id="dashbaord">
                    <router-link to="/dashboard" class="nav-link">房产信息</router-link>
                </li>
                <li class="nav-item" id="issues">
                    <router-link to="/issues" class="nav-link">笋盘展示</router-link>
                </li>
                <li class="nav-item" id="houses">
                    <router-link to="/houses" class="nav-link">笋盘展示</router-link>
                </li>
            </ul>
            <p class="h4 mt-5">Account</p>
            <ul class="nav nav-pills flex-column">
                <li class="nav-item" id="profile">
                    <router-link to="/profile" class="nav-link">用户管理</router-link>
                </li>
                <li class="nav-item" id="signin">
                    <router-link to="/signin" class="nav-link">退出</router-link>
                </li>
            </ul>
            <hr class="k-flex" />
            <div id="copy">
                <p>&copy; {{year}},新居氏网站版权所有<br /><a href="http://www.progress.com">新居氏软件开发技术团队</a> </p>
                <p>侵权必究</p>
            </div>
        </div>
        <main class="col-xs p-4 py-5">
            <router-view></router-view>
        </main>
    </div>
  </template>

  <script>
  export default {
    name: 'main-menu',
    data () {
      return {
        year: '2017-2018',
        transformValue: 'translateX(0)',
        navState: false
      }
    }
  }
  </script>

