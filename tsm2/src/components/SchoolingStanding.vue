<template>
	<div>
		<div>
			<font class="ksjs1" style="font-size: 13px;">选择校区:</font>&nbsp;
			<el-select v-model="value" placeholder="请选择" style="width: 140px;" size="mini">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>&nbsp;
			<font class="ksjs1" style="font-size: 13px;">审核:</font>&nbsp;
			<el-select v-model="value" placeholder="请选择" style="width: 140px;" size="mini">
				<el-option v-for="item in optionss" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>&nbsp;
			<font class="ksjs1" style="font-size: 13px;">学员:</font>&nbsp;
			<el-input v-model="input" style="width: 140px;" size="mini"></el-input>&nbsp;
			<font class="ksjs1" style="font-size: 13px;">经办人:</font>&nbsp;
			<el-input v-model="input" style="width: 140px;" size="mini"></el-input>&nbsp;
		</div>&nbsp;
		<div class="db1">
			<font class="ksjs1" style="font-size: 13px;">补缴日期:</font>&nbsp;
			<el-date-picker v-model="value1" type="daterange" size="mini" style="width: 200px;" range-separator="至"
				start-placeholder="开始日期" end-placeholder="结束日期">
			</el-date-picker>&nbsp;
			<el-button style="background-color: #009688;color: white;" size="mini">查询</el-button>
			<el-button style="background-color: #5FB878;color: white;" size="mini">审核通过</el-button>
			<el-button style="background-color:  #FF5722;color: white;width: 50px;" size="mini" type="text"
				@click="open">删除</el-button>
			<el-button style="background-color: #009688;color: white;" size="mini">导出</el-button>
		</div>&nbsp;
		<div class="zxdj">
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column type="selection" width="55" align="center">
				</el-table-column>
				<el-table-column
				  label="停课编号"
				  prop="Suspend_Id">
				</el-table-column>
				<el-table-column
				  label="学号"
				  prop="Student_Id">
				</el-table-column>
				<el-table-column
				  label="课程名称"
				  prop="Classes_Id">
				</el-table-column>
				<el-table-column
				  label="已上课时"
				  prop="AlreadyOn">
				</el-table-column>
				<el-table-column
				  label="停课时间"
				  prop="Suspend_Time">
				</el-table-column>
				<el-table-column
				  label="停课理由"
				  prop="Suspend_Reason">
				</el-table-column>
				<el-table-column
				  label="停课办理人"
				  prop="Suspend_Handler">
				</el-table-column>
				<el-table-column
				  label="停课审批"
				  prop="Suspend_Handler">
				</el-table-column>
				<el-table-column
				  label="停课审批人"
				  prop="Suspend_SAppName">
				</el-table-column>
				<el-table-column
				  label="停课审批时间"
				  prop="Suspend_SAppTime">
				</el-table-column>
				<el-table-column fixed="right" label="操作" align="center">
					<template #default="scope">
					<el-button
					  size="mini"
					  type="info"
					  @click="showEdit2(scope.row)">详情</el-button>
					  <el-button
					    size="mini"
					    type="danger"
					    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>&nbsp;
			<el-pagination style="text-align: center;" background :page-size="5" layout="prev, pager, next" :total="50">
				<!-- 总条数 -->
			</el-pagination>
		</div>

	</div>

</template>

<script>
	import {
		ref
	} from 'vue'
	export default {
		 
		methods: {
			handleEdit(index, row) {
			    console.log(index, row);
			  },
			  handleDelete(index, row) {
			    console.log(index, row);
			  },
			  showEdit2(row){
				  this.form.Revoke_AppName=row.Revoke_AppName
				  this.form.Revoke_AppTime=row.Revoke_AppTime 
				  this.form.UpdateName=row.UpdateName
				  this.form.UpdateTime=row.UpdateTime
				  this.form.DeleteName=row.DeleteName
				  this.form.DeleteTime=row.DeleteTime
				  this.dialogFormVisible3=true
			}
			
		},
		data() {
			return {
				tableData: [{
					   Suspend_Id:'1',
					   Student_Id:'23',
					   Classes_Id:'21',
					   Course_Id:'21',
					   DetailCourse_Id:'321',
					   AlreadyOn:'32',
					   Suspend_Time:'123',
					   Suspend_Reason:'2133',
					   Suspend_Handler:'21323',
					   Suspend_Approval:'132',
					   Suspend_SAppName:'12',
					   Suspend_SAppTime:'12',
					   Revoke_AppName:'123',
					   Revoke_AppTime:'3123123',
					   UpdateName:'312312',
					   UpdateTime:'123123',
					   DeleteName:'312',
					   DeleteTime:'13123',
					   TimeLiness:'3123'
				    },{
					   Suspend_Id:'1',
					   Student_Id:'23',
					   Classes_Id:'21',
					   Course_Id:'21',
					   DetailCourse_Id:'321',
					   AlreadyOn:'32',
					   Suspend_Time:'123',
					   Suspend_Reason:'2133',
					   Suspend_Handler:'21323',
					   Suspend_Approval:'132',
					   Suspend_SAppName:'12',
					   Suspend_SAppTime:'12',
					   Revoke_AppName:'123',
					   Revoke_AppTime:'3123123',
					   UpdateName:'312312',
					   UpdateTime:'123123',
					   DeleteName:'312',
					   DeleteTime:'13123',
					   TimeLiness:'3123'
				    },{
					   Suspend_Id:'1',
					   Student_Id:'23',
					   Classes_Id:'21',
					   Course_Id:'21',
					   DetailCourse_Id:'321',
					   AlreadyOn:'32',
					   Suspend_Time:'123',
					   Suspend_Reason:'2133',
					   Suspend_Handler:'21323',
					   Suspend_Approval:'132',
					   Suspend_SAppName:'12',
					   Suspend_SAppTime:'12',
					   Revoke_AppName:'123',
					   Revoke_AppTime:'3123123',
					   UpdateName:'312312',
					   UpdateTime:'123123',
					   DeleteName:'312',
					   DeleteTime:'13123',
					   TimeLiness:'3123'
				    },{
					   Suspend_Id:'1',
					   Student_Id:'23',
					   Classes_Id:'21',
					   Course_Id:'21',
					   DetailCourse_Id:'321',
					   AlreadyOn:'32',
					   Suspend_Time:'123',
					   Suspend_Reason:'2133',
					   Suspend_Handler:'21323',
					   Suspend_Approval:'132',
					   Suspend_SAppName:'12',
					   Suspend_SAppTime:'12',
					   Revoke_AppName:'123',
					   Revoke_AppTime:'3123123',
					   UpdateName:'312312',
					   UpdateTime:'123123',
					   DeleteName:'312',
					   DeleteTime:'13123',
					   TimeLiness:'3123'
				    }],
				    search: '',
					dialogFormVisible3: false,
					        form: {
								Suspend_Id:'',
								Student_Id:'',
								Classes_Id:'',
								Course_Id:'',
								DetailCourse_Id:'',
								AlreadyOn:'',
								Suspend_Time:'',
								Suspend_Reason:'',
								Suspend_Handler:'',
								Suspend_Approval:'',
								Suspend_SAppName:'',
								Suspend_SAppTime:'',
								Revoke_AppName:'',
								Revoke_AppTime:'',
								UpdateName:'',
								UpdateTime:'',
								DeleteName:'',
								DeleteTime:'',
								TimeLiness:''
					        },
					        formLabelWidth: '120px'
				  }
				}
			}
</script>

<style>
</style>
