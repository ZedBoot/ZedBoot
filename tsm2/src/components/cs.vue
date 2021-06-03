<template>
	<el-row>
	  <el-button type="primary">添加</el-button>
	</el-row>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
	<el-table-column
	  prop="id"
	  label=""
	  width="40">
	</el-table-column>
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="课程名称"
      width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="课程类型"
      width="120">
    </el-table-column>
	<el-table-column
	  prop="name"
	  label="课时量"
	  width="120">
	</el-table-column>
	<el-table-column
	  prop="name"
	  label="费用"
	  width="120">
	</el-table-column>
    <el-table-column
      prop="address"
      label="课程状态"
      show-overflow-tooltip>
    </el-table-column>
	<el-table-column
	  label="操作"
	  width="100">
	  <template #default="scope">
	    <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>
		<el-button type="text" @click="delete1">删除</el-button>
		<el-dialog title="收货地址" v-model="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="活动名称" :label-width="formLabelWidth">
		      <el-input v-model="form.name" autocomplete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="活动区域" :label-width="formLabelWidth">
		      <el-select v-model="form.region" placeholder="请选择活动区域">
		        <el-option label="区域一" value="shanghai"></el-option>
		        <el-option label="区域二" value="beijing"></el-option>
		      </el-select>
		    </el-form-item>
		  </el-form>
		  <template #footer>
		    <span class="dialog-footer">
		      <el-button @click="dialogFormVisible = false">取 消</el-button>
		      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		    </span>
		  </template>
		</el-dialog>
	  </template>
	</el-table-column>
  </el-table>
 
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
		  id: '1',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
			id: '2',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
			id: '3',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
			id: '4',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
			id: '5',
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
			id: '6',
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
			id: '7',
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
		dialogFormVisible: false,
		form: {
		  name: '',
		  region: '',
		  date1: '',
		  date2: '',
		  delivery: false,
		  type: [],
		  resource: '',
		  desc: ''
		}	
      }
    },
    methods: {
		delete1() {
		  this.$alert('删除', '是否删除', {
		    confirmButtonText: '确定',
		    callback: action => {
		      this.$message({
		        type: 'info',
		        message: `action: ${ action }`
		      });
		    }
		  });
		  formLabelWidth: '120px'
		},
		  handleSelectionChange(val) {
		        this.multipleSelection = val;
		  }
      }
  }
</script>
