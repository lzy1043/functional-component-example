<template>
  <div id="app">
    <TheTable :columns="columns" :data="data" />
    <!-- <Render02 id="Render02" @click="handleClick" >
    </Render02>
    <Render03 name="lzy" id="123" @click="handleClick" /> -->
  </div>
</template>

<script>
import TheTable from './TheTable/TheTable'
import Render02 from './TheTable/Render02'
import Render03 from './TheTable/Render03'
export default {
  name: 'app',
  data () {
    return {
      selected: '',
      columns: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'address',
          label: '地址'
        },
        {
          label: '操作',
          render: (h, params) => {
            return h('div', [
              h('el-button', {
                props: {
                  type: 'primary',
                  size: 'mini'
                },
                class: {
                  'edit-btn': true
                },
                on: {
                  click: () => {
                    this.handleClickEdit(params)
                  }
                }
              }, '编辑'),
              h('el-button', {
                props: {
                  type: 'danger',
                  size: 'mini'
                },
                class: {
                  'delete-btn': true
                },
                on: {
                  click: () => {
                    this.handleClickDelete(params)
                  }
                }
              }, '编辑'),
            ])
          }
        },
        {
          label: '分配人员',
          render: (h, params) => {
            const options = [
              {
                value: '1',
                name: '张三'
              },
              {
                value: '2',
                name: '李四'
              },
              {
                value: '3',
                name: '王五'
              },
              {
                value: '4',
                name: '马六'
              },
              {
                value: '5',
                name: '田七'
              }
            ]
            return h('el-select', {
              props: {
                value: this.selected
              }
            }, [
              options.map(item => {
                return h('el-option', {
                  props: {
                    value: item.value,
                    label: item.name
                  }
                })
              })
            ])
          }
        }
      ],
      data: [
        {
          name: '张三',
          age: '12',
          address: '地址一'
        },
        {
          name: '李四',
          age: '123',
          address: '地址二'
        },
        {
          name: '王五',
          age: '1234',
          address: '地址三'
        },
        {
          name: '马六',
          age: '12345',
          address: '地址四'
        },
        {
          name: '田七',
          age: '123456',
          address: '地址五'
        }
      ]
    }
  },
  methods: {
    handleClickEdit (row) {
      console.log(row)
    },
    handleClickDelete (row) {
      console.log(row)
    },
    handleClick () {
      console.log(123)
    }
  },
  components: {
    TheTable,
    Render02,
    Render03
  }
}
</script>
