<template>
	<div>
		<div>
			<input type="text" placeholder="输入关键字搜索" v-model="search" />
			<el-button style="background-color: #009688;color: white;" size="mini">查询</el-button>
			<el-button style="background-color: #5FB878;color: white;" size="mini">审核通过</el-button>
		</div>&nbsp;
		<div>
			<el-dialog title="退学详情信息" v-model="dialogFormVisible3">
				 <el-descriptions>
				    <el-descriptions-item>
				      <template #label>
				        <i></i>
				        教务部审批人
				      </template>
				      <el-tag size="smalla">kooriookami</el-tag>
				    </el-descriptions-item>
				    <el-descriptions-item>
				      <template #label>
				        <i></i>
				        教务部审批时间
				      </template>
				    <el-tag size="small">18100000000</el-tag> 
				    </el-descriptions-item>
				    <el-descriptions-item>
				      <template #label>
				        <i></i>
				        撤销审批人
				      </template>
				     <el-tag size="small">2131</el-tag>
				    </el-descriptions-item>
					<el-descriptions-item>
					  <template #label>
					    <i></i>
					    撤销审批时间
					  </template>
					 <el-tag size="small">2020-02-22</el-tag>  
					</el-descriptions-item>
				    <el-descriptions-item>
				      <template #label>
				        <i></i>
				        删除人
				      </template>
				      <el-tag size="small">就是玩儿</el-tag>
				    </el-descriptions-item>
					
				    <el-descriptions-item>
				      <template #label>
				        <i></i>
				        删除时间
				      </template>
				     <el-tag size="small">大道 1188 号</el-tag> 
				    </el-descriptions-item>
					
				  </el-descriptions>
				<template #footer>
					<span class="dialog-footer">
						<el-button @click="dialogFormVisible3 = false">取 消</el-button>
						<el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
					</span>
				</template>
			</el-dialog>
			<el-table
				:data="tableData.filter(data => !search || data.Course_Name.toLowerCase().includes(search.toLowerCase()))"
				border style="width: 100%">
				<el-table-column type="selection" width="55" align="center">
				</el-table-column>
				<el-table-column label="编号" prop="Suspend_Id" width="80" align="center">
				</el-table-column>
				<el-table-column label="学号" prop="Student_Id" width="120" align="center">
				</el-table-column>
				<el-table-column label="课程名称" prop="Classes_Id" width="120" align="center">
				</el-table-column>
				<el-table-column label="班级" prop="AlreadyOn" width="120" align="center">
				</el-table-column>
				<el-table-column label="退学时间" prop="Suspend_Time" width="150" align="center">
				</el-table-column>
				<el-table-column label="退学理由" prop="Suspend_Reason" width="120" align="center">
				</el-table-column>
				<el-table-column label="退学办理人" prop="Suspend_Handler" width="120" align="center">
				</el-table-column>
				<el-table-column label="退费状态" prop="Suspend_Handler" width="120" align="center">
				</el-table-column>
				<el-table-column label="教务部审批" prop="Suspend_SAppName" width="120" align="center">
				</el-table-column>
				<el-table-column label="教务部审批人" prop="Suspend_SAppTime" width="120" align="center">
				</el-table-column>
				<el-table-column label="教务部审批时间" prop="Suspend_SAppTime" width="120" align="center">
				</el-table-column>
				<el-table-column fixed="right" label="操作"  width="150" align="center">
					<template #default="scope">
						<el-button size="mini" type="info" @click="showEdit2(scope.row)">详情</el-button>
						<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
						</el-button>
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
	// import {
	// 	ref
	// } from 'vue'
	export default {
		name: "Suspend",
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			showEdit2(row) {
				this.form.Revoke_AppName = row.Revoke_AppName
				this.form.Revoke_AppTime = row.Revoke_AppTime
				this.form.UpdateName = row.UpdateName
				this.form.UpdateTime = row.UpdateTime
				this.form.DeleteName = row.DeleteName
				this.form.DeleteTime = row.DeleteTime
				this.dialogFormVisible3 = true
			}

		},
		data() {
			return {
				tableData: [{
					Suspend_Id: '1',
					Student_Id: '23',
					Classes_Id: '21',
					Course_Id: '21',
					DetailCourse_Id: '321',
					AlreadyOn: '32',
					Suspend_Time: '123',
					Suspend_Reason: '2133',
					Suspend_Handler: '21323',
					Suspend_Approval: '132',
					Suspend_SAppName: '12',
					Suspend_SAppTime: '12',
					Revoke_AppName: '123',
					Revoke_AppTime: '3123123',
					UpdateName: '312312',
					UpdateTime: '123123',
					DeleteName: '312',
					DeleteTime: '13123',
					TimeLiness: '3123'
				}, {
					Suspend_Id: '1',
					Student_Id: '23',
					Classes_Id: '21',
					Course_Id: '21',
					DetailCourse_Id: '321',
					AlreadyOn: '32',
					Suspend_Time: '123',
					Suspend_Reason: '2133',
					Suspend_Handler: '21323',
					Suspend_Approval: '132',
					Suspend_SAppName: '12',
					Suspend_SAppTime: '12',
					Revoke_AppName: '123',
					Revoke_AppTime: '3123123',
					UpdateName: '312312',
					UpdateTime: '123123',
					DeleteName: '312',
					DeleteTime: '13123',
					TimeLiness: '3123'
				}, {
					Suspend_Id: '1',
					Student_Id: '23',
					Classes_Id: '21',
					Course_Id: '21',
					DetailCourse_Id: '321',
					AlreadyOn: '32',
					Suspend_Time: '123',
					Suspend_Reason: '2133',
					Suspend_Handler: '21323',
					Suspend_Approval: '132',
					Suspend_SAppName: '12',
					Suspend_SAppTime: '12',
					Revoke_AppName: '123',
					Revoke_AppTime: '3123123',
					UpdateName: '312312',
					UpdateTime: '123123',
					DeleteName: '312',
					DeleteTime: '13123',
					TimeLiness: '3123'
				}, {
					Suspend_Id: '1',
					Student_Id: '23',
					Classes_Id: '21',
					Course_Id: '21',
					DetailCourse_Id: '321',
					AlreadyOn: '32',
					Suspend_Time: '123',
					Suspend_Reason: '2133',
					Suspend_Handler: '21323',
					Suspend_Approval: '132',
					Suspend_SAppName: '12',
					Suspend_SAppTime: '12',
					Revoke_AppName: '123',
					Revoke_AppTime: '3123123',
					UpdateName: '312312',
					UpdateTime: '123123',
					DeleteName: '312',
					DeleteTime: '13123',
					TimeLiness: '3123'
				}],
				search: '',
				dialogFormVisible3: false,
				form: {
					Suspend_Id: '',
					Student_Id: '',
					Classes_Id: '',
					Course_Id: '',
					DetailCourse_Id: '',
					AlreadyOn: '',
					Suspend_Time: '',
					Suspend_Reason: '',
					Suspend_Handler: '',
					Suspend_Approval: '',
					Suspend_SAppName: '',
					Suspend_SAppTime: '',
					Revoke_AppName: '',
					Revoke_AppTime: '',
					UpdateName: '',
					UpdateTime: '',
					DeleteName: '',
					DeleteTime: '',
					TimeLiness: ''
				},
				formLabelWidth: '120px'
			}
		}
	}
</script>

<style>
</style>
