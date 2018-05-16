<template>
  <el-table :data="data">
    <template v-for="(c, i) in columns">
      
      <el-table-column v-if="c.render">
        <template slot-scope="scope">
          <Render :render="c.render" :params="scope.row" />
        </template>
      </el-table-column>

      <el-table-column
        :prop="c.prop"
        :label="c.label"
        v-else></el-table-column>
    </template>
  </el-table>
</template>
<script>
  import Render from './Render'
  export default {
    name: 'TheTable',
    props: {
      columns: Array,
      data: Array
    },
    components: {
      Render
    }
  }
</script>