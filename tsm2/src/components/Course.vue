<template>
	<el-button
	  size="mini"
	  @click="dialogFormVisible = true">新增</el-button>
	  <el-button
	    size="mini"
	   >开设/停止</el-button>
	  <el-dialog title="课程操作详情" v-model="dialogFormVisible3">
	    <el-form :model="form">
	      <el-form-item label="增加人:" :label-width="formLabelWidth">
	        <el-input v-model="form.AddName" autocomplete="off" disabled></el-input>
	      </el-form-item>
		  <el-form-item label="增加时间:" :label-width="formLabelWidth">
		    <el-input v-model="form.AddTime" autocomplete="off" disabled></el-input>
		  </el-form-item>
		  <el-form-item label="删除人:" :label-width="formLabelWidth">
		    <el-input v-model="form.DeleteName" autocomplete="off" disabled></el-input>
		  </el-form-item>
		  <el-form-item label="删除时间:" :label-width="formLabelWidth">
		    <el-input v-model="form.DeleteTime" autocomplete="off" disabled></el-input>
		  </el-form-item>
		  <el-form-item label="修改人:" :label-width="formLabelWidth">
		    <el-input v-model="form.UpdateName" autocomplete="off" disabled></el-input>
		  </el-form-item>
		  <el-form-item label="最后修改时间:" :label-width="formLabelWidth">
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
	<el-dialog title="开设课程" v-model="dialogFormVisible">
	  <el-form :model="form">
	    <el-form-item label="课程名称" :label-width="formLabelWidth">
	      <el-input v-model="form.Course_Name" autocomplete="off"></el-input>
	    </el-form-item>
		<el-form-item label="课时量" :label-width="formLabelWidth">
		  <el-input v-model="form.Classhours" autocomplete="off"></el-input>
		</el-form-item>
		<el-form-item label="课程费用" :label-width="formLabelWidth">
		  <el-input v-model="form.Course_Money" autocomplete="off"></el-input>
		</el-form-item>
		<el-form-item label="课程类型" :label-width="formLabelWidth">
		  <el-input v-model="form.ClassType_Id" autocomplete="off"></el-input>
		</el-form-item>
	  </el-form>
	  <template #footer>
	    <span class="dialog-footer">
	      <el-button @click="dialogFormVisible = false">取 消</el-button>
	      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
	    </span>
	  </template>
	</el-dialog>
	<el-dialog title="编辑课程" v-model="dialogFormVisible2">
	  <el-form :model="form">
	    <el-form-item label="课程名称" :label-width="formLabelWidth">
	      <el-input v-model="form.Course_Name" autocomplete="off"></el-input>
	    </el-form-item>
	  		<el-form-item label="课时量" :label-width="formLabelWidth">
	  		  <el-input v-model="form.Classhours" autocomplete="off"></el-input>
	  		</el-form-item>
	  		<el-form-item label="课程费用" :label-width="formLabelWidth">
	  		  <el-input v-model="form.Course_Money" autocomplete="off"></el-input>
	  		</el-form-item>
	  		<el-form-item label="课程类型" :label-width="formLabelWidth">
	  		  <el-input v-model="form.ClassType_Id" autocomplete="off"></el-input>
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
    :data="tableData.filter(data => !search || data.Course_Name.toLowerCase().includes(search.toLowerCase()))"
    >
	<el-table-column
	      type="selection"
	      width="55">
	</el-table-column>
    <el-table-column
      label="编号"
      prop="Course_Id">
    </el-table-column>
    <el-table-column
      label="课程名称"
      prop="Course_Name">
    </el-table-column>
	<el-table-column
	  label="课程状态"
	  prop="Course_State">
	</el-table-column>
	<el-table-column
	  label="课程费用"
	  prop="Course_Money">
	</el-table-column>
	<el-table-column
	  label="课程类型"
	  prop="ClassType_Id">
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
	  name:"Course",
    data() {
      return {
        tableData: [{
		   Course_Id:"1",
		   Course_Name:"跆拳道黑带基本功",
		   Course_State:"开报",
		   Classhours:"20",
		   Course_Money:"2000",
		   ClassType_Id:"体育",
		   AddName:"毒奎",
		   AddTime:"2021-05-21",
		   UpdateName:"GPW",
		   UpdateTime:"2021-05-21",
		   StopName:"EZ2",
		   StopTime:"2021-05-22",
		   BeginName:"巴金斯",
		   BeginTime:"2021-05-23",
		   DeleteName:"弗罗多",
		   DeleteTime:"2021-05-24",
		   TimeLiness:"未过期"
        }, {
          Course_Id:"2",
          Course_Name:"英语如何过8级",
          Course_State:"开报",
          Classhours:"20",
          Course_Money:"2000",
          ClassType_Id:"英语",
          AddName:"Tony",
          AddTime:"2021-05-21",
          UpdateName:"GPW",
          UpdateTime:"2021-05-21",
          StopName:"EZ2",
          StopTime:"2021-03-22",
          BeginName:"巴金斯2",
          BeginTime:"2021-02-23",
          DeleteName:"弗罗多2",
          DeleteTime:"2021-05-24",
          TimeLiness:"已过期"
        }, {
          Course_Id:"3",
          Course_Name:"跆拳道黑带基本功3",
          Course_State:"开报",
          Classhours:"20",
          Course_Money:"2000",
          ClassType_Id:"体育3",
          AddName:"毒奎3",
          AddTime:"2021-05-21",
          UpdateName:"GPW3",
          UpdateTime:"2021-05-21",
          StopName:"EZ23",
          StopTime:"2021-05-22",
          BeginName:'巴金斯3',
          BeginTime:"2021-05-23",
          DeleteName:'弗罗多3',
          DeleteTime:"2021-05-24",
          TimeLiness:'未过期'
        }],
        search: '',
		dialogFormVisible: false,
		dialogFormVisible2: false,
		dialogFormVisible3: false,
		        form: {
					Course_Id:"",
					Course_Name:"",
					Course_State:"",
					Classhours:"",
					Course_Money:"",
					ClassType_Id:"",
					AddName:"",
					AddTime:"",
					UpdateName:"",
					UpdateTime:"",
					StopName:"",
					StopTime:"",
					BeginName:'',
					BeginTime:"",
					DeleteName:'',
					DeleteTime:"",
					TimeLiness:''
		        },
		        formLabelWidth: '120px'
      }
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
			  this.form.Course_Id=row.Course_Id
			  this.form.Course_Name=row.Course_Name
			  this.form.Course_State=row.Course_State
			  this.form.Classhours=row.Classhours
			  this.form.Course_Money=row.Course_Money
			  this.form.ClassType_Id=row.ClassType_Id
			  this.dialogFormVisible2=true
        }
		}
 }
</script>
