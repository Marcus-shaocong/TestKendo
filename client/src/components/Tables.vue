<template>
  <div>
    <datatable v-bind="$data" />
  </div>
</template>
<script>
import mockData from '../_mockData'

export default {
  data: () => ({
    columns: [
      { title: 'HouseName', field: 'HouseNameuid', sortable: true },
      { title: 'HousePrice', field: 'HousePrice' },
      { title: 'Age', field: 'Age', sortable: true },
      { title: 'Area', field: 'Area' },
      { title: 'Dist', field: 'Dist' },
      { title: 'IsSchool', field: 'IsSchool' },
      { title: 'Desc', field: 'Desc' }
    ],
    data: [
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

      ],
    total: 0,
    query: {}
  }),
  watch: {
    query: {
      handler (query) {
        mockData(query).then(({ rows, total }) => {
          this.data = rows
          this.total = total
        })
      },
      deep: true
    }
  }
}
</script>