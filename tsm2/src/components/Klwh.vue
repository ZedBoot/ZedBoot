<template>
		<el-row>
		  <el-button type="primary">添加</el-button>
		</el-row>
  <el-table
    :data="tableData"
    border
    >
    <el-table-column
      prop="date"
      label="序号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="课类名称"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      width="100">
      <template #default="scope">
		  
        <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>
		 <el-button type="text" @click="open">删除</el-button>
		 <el-dialog title="新增课程类别" v-model="dialogFormVisible">
		   <el-form :model="form">
		     <el-form-item label="课类名称" :label-width="formLabelWidth">
		       <el-input v-model="form.name" autocomplete="off"></el-input>
		     </el-form-item>
		   </el-form>
		   <template #footer>
		     <span class="dialog-footer">
		       <el-button @click="dialogFormVisible = false">取 消</el-button>
		       <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		     </span>
		   </template>
		 </el-dialog>
		 <el-dialog title="修改课程类别" v-model="dialogFormVisible2">
		 	<el-form :model="form">
		 	  <el-form-item label="课类编号" :label-width="formLabelWidth2">
		 	    <el-input v-model="form.name" autocomplete="off"></el-input>
		 	  </el-form-item>
		   <el-form :model="form">
		     <el-form-item label="课类名称" :label-width="formLabelWidth2">
		       <el-input v-model="form.name" autocomplete="off"></el-input>
		     </el-form-item>
		   </el-form>
		   <template #footer>
		     <span class="dialog-footer">
		       <el-button @click="dialogFormVisible2 = false">取 消</el-button>
		       <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
		     </span>
		   </template>
		 </el-dialog>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
	name:"Klwh",
	methods:{
		open() {
		        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          this.$message({
		            type: 'success',
		            message: '删除成功!'
		          });
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消删除'
		          });
		        });
		      }
		   },
    data() {
      return {
        tableData: [{
          date: '1',
          name: 'CSGO',
        }, {
          date: '2',
          name: 'LOL',
        }, {
          date: '3',
          name: 'PUBG',

        }, {
          date: '4',
          name: 'CF',

        }],
        dialogFormVisible: false,
		dialogFormVisible2: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    }
  }
</script>

<style>
</style>