<template>
	<el-button
	  size="mini"
	  @click="dialogFormVisible = true">新增</el-button>
	  <el-dialog title="课类操作详情" v-model="dialogFormVisible3">
	    <el-form :model="form">
	      <el-form-item label="增加人:" :label-width="formLabelWidth">
	        <el-input v-model="form.AddName" autocomplete="off" disabled></el-input>
	      </el-form-item>
		  <el-form-item label="增加时间" :label-width="formLabelWidth">
		    <el-input v-model="form.AddTime" autocomplete="off" disabled></el-input>
		  </el-form-item>
		  <el-form-item label="删除人" :label-width="formLabelWidth">
		    <el-input v-model="form.DeleteName" autocomplete="off" disabled></el-input>
		  </el-form-item>
		  <el-form-item label="删除时间" :label-width="formLabelWidth">
		    <el-input v-model="form.DeleteTime" autocomplete="off" disabled></el-input>
		  </el-form-item>
		  <el-form-item label="修改人" :label-width="formLabelWidth">
		    <el-input v-model="form.UpdateName" autocomplete="off" disabled></el-input>
		  </el-form-item>
		  <el-form-item label="最后修改时间" :label-width="formLabelWidth">
		    <el-input v-model="form.UpdateTime" autocomplete="off" disabled></el-input>
		  </el-form-item>
	    </el-form>
	    <template #footer>
	      <span class="dialog-footer">
	        <el-button @click="dialogFormVisible3 = false">取 消</el-button>
	        <el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
	      </span>
	    </template>
	  </el-dialog>
	<el-dialog title="新增课类名称" v-model="dialogFormVisible">
	  <el-form :model="form">
	    <el-form-item label="课类名称" :label-width="formLabelWidth">
	      <el-input v-model="form.ClassType_Name" autocomplete="off"></el-input>
	    </el-form-item>
	  </el-form>
	  <template #footer>
	    <span class="dialog-footer">
	      <el-button @click="dialogFormVisible = false">取 消</el-button>
	      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
	    </span>
	  </template>
	</el-dialog>
	<el-dialog title="编辑课类名称" v-model="dialogFormVisible2">
	  <el-form :model="form">
		  <el-form-item label="课类编号" :label-width="formLabelWidth">
		    <el-input v-model="form.ClassType_Id" autocomplete="off" disabled></el-input>
		  </el-form-item>
	    <el-form-item label="课类名称" :label-width="formLabelWidth">
	      <el-input v-model="form.ClassType_Name" autocomplete="off"></el-input>
	    </el-form-item>
	  </el-form>
	  <template #footer>
	    <span class="dialog-footer">
	      <el-button @click="dialogFormVisible2 = false">取 消</el-button>
	      <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
	    </span>
	  </template>
	</el-dialog>
  <el-table
    :data="tableData.filter(data => !search || data.ClassType_Name.toLowerCase().includes(search.toLowerCase()))"
    >
    <el-table-column
      label="编号"
      prop="ClassType_Id">
    </el-table-column>
    <el-table-column
      label="课类名称"
      prop="ClassType_Name">
    </el-table-column>
	<el-table-column
	  label="时效性"
	  prop="TimeLiness">
	</el-table-column>
    <el-table-column
      align="right">  
      <template #header>
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入课类名称搜索"/>
      </template>
      <template #default="scope"> 
	  <el-button
	    size="mini"
	    type="info"
	    @click="showEdit2(scope.row)">详情</el-button>
        <el-button
          size="mini"
		  type="info"
          @click="showEdit(scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
	  name:"ClassType",
    data() {
      return {
        tableData: [{
          ClassType_Id: '',
          ClassType_Name: '',
		  TimeLiness:'',
		  AddName:"",
		  AddTime:"",
		  UpdateName:"",
		  UpdateTime:"",
		  DeleteName:"",
		  DeleteTime:""  
        }],
        search: '',
		dialogFormVisible: false,
		dialogFormVisible2: false,
		dialogFormVisible3: false,
		        form: {
					ClassType_Id: '',
		            ClassType_Name: '',
				    AddName:"",
				    AddTime:"",
				    UpdateName:"",
					UpdateTime:"",
					DeleteName:"",
					DeleteTime:"",
					TimeLiness:""
		        },
		        formLabelWidth: '120px'
      }
    },
		created(){
			const _this=this
			this.axios.get("http://localhost:8089/tsm/selectClasstypes")
				.then(function(response){
					console.log(response)
					_this.deptData=response.data
				}).catch(function(error){
					console.log(error)
				})
		},
    methods: {
          handleEdit(index, row) {
            console.log(index, row);
          },
          handleDelete(index, row) {
            console.log(index, row);
          },
		  showEdit2(row){
			  this.form.AddName=row.AddName
			  this.form.AddTime=row.AddTime
			  this.form.UpdateName=row.UpdateName
			  this.form.UpdateTime=row.UpdateTime
			  this.form.DeleteName=row.DeleteName
			  this.form.DeleteTime=row.DeleteTime
			  this.dialogFormVisible3=true
        }, showEdit(row){
			  this.form.ClassType_Id=row.ClassType_Id
			  this.form.ClassType_Name=row.ClassType_Name
			  this.dialogFormVisible2=true
        }
		}
 }
</script>
