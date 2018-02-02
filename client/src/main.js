// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Datatable from 'vue2-datatable-component'
import Dashboard from './components/Dashboard.vue'
import Issues from './components/Issues.vue'
import Profile from './components/Profile.vue'
import Signin from './components/Signin.vue'
import Houses from './components/Houses.vue'
import Tables from './components/Tables.vue'
import Page from './components/Page.vue'
import HouseInfo from './components/HouseInfo.vue'
import JSZip from 'jszip'


import '@progress/kendo-ui'
import { KendoButtonGroup, KendoButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
import { KendoDataSource, KendoDataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
import { KendoGrid, KendoGridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { KendoChart, KendoChartInstaller } from '@progress/kendo-charts-vue-wrapper'
import { Validator } from '@progress/kendo-validator-vue-wrapper'
import { ValidatorInstaller } from '@progress/kendo-validator-vue-wrapper'
import { KendoWindowInstaller } from '@progress/kendo-window-vue-wrapper'

/*
"@progress/kendo-all-vue-wrapper": "^2018.1.117",
"@progress/kendo-barcodes-vue-wrapper": "^2018.1.117",
"@progress/kendo-base-components-vue-wrapper": "^2018.1.117",
"@progress/kendo-buttons-vue-wrapper": "2017.3.1026",
"@progress/kendo-charts-vue-wrapper": "^2017.3.1026",
"@progress/kendo-datasource-vue-wrapper": "2017.3.1026",
"@progress/kendo-dateinputs-vue-wrapper": "^2018.1.117",
"@progress/kendo-diagram-vue-wrapper": "^2018.1.117",
"@progress/kendo-dialog-vue-wrapper": "^2018.1.117",
"@progress/kendo-editor-vue-wrapper": "^2018.1.117",
"@progress/kendo-gantt-vue-wrapper": "^2018.1.117",
"@progress/kendo-gauges-vue-wrapper": "^2018.1.117",
"@progress/kendo-grid-vue-wrapper": "2017.3.1026",
"@progress/kendo-inputs-vue-wrapper": "^2017.3.1026",
"@progress/kendo-listbox-vue-wrapper": "^2018.1.117",
"@progress/kendo-listview-vue-wrapper": "^2018.1.117",
"@progress/kendo-map-vue-wrapper": "^2018.1.117",
"@progress/kendo-mediaplayer-vue-wrapper": "^2018.1.117",
"@progress/kendo-pivotgrid-vue-wrapper": "^2018.1.117",
"@progress/kendo-popups-vue-wrapper": "^2018.1.117",
"@progress/kendo-scheduler-vue-wrapper": "^2018.1.117",
"@progress/kendo-spreadsheet-vue-wrapper": "^2018.1.117",
"@progress/kendo-theme-bootstrap": "^2.8.0",
"@progress/kendo-theme-default": "^2.40.2",
"@progress/kendo-treelist-vue-wrapper": "^2018.1.117",
"@progress/kendo-treemap-vue-wrapper": "^2018.1.117",
"@progress/kendo-treeview-vue-wrapper": "^2018.1.117",
"@progress/kendo-ui": "^2017.3.1026",
"@progress/kendo-upload-vue-wrapper": "^2018.1.117",
"@progress/kendo-validator-vue-wrapper": "^2018.1.117",
"@progress/kendo-window-vue-wrapper": "2017.3.1026",
*/

Vue.use(Router)
Vue.use(KendoButtonsInstaller)
Vue.use(KendoGridInstaller)
Vue.use(KendoDataSourceInstaller)
Vue.use(KendoChartInstaller)
Vue.use(Datatable) 
Vue.use(ValidatorInstaller)
Vue.use(KendoWindowInstaller)


const routes = [
  { path: '/', component: Houses },
  { path: '/dashboard', component: Dashboard },
  { path: '/issues', component: Issues },
  { path: '/profile', component: Profile },
  { path: '/signin', component: Signin },
  { path: '/houses', component: Houses },
  { path: '/newpage', component: Page },
  { path: '/houseInfo', component: HouseInfo }
]

const router = new Router({
  routes,
  linkActiveClass: 'active'
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App),
  router,
  components: {
    KendoButtonGroup,
    KendoDataSource,
    KendoGrid,
    KendoChart,
    Validator,
    JSZip
  }
})
