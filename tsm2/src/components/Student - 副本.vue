<template>
	<div>
		<el-button size="mini" @click="dialogFormVisible = true">新增</el-button>
		<el-button size="mini">审批通过</el-button>
	</div>

	<el-dialog title="查看学员信息" v-model="dialogFormVisible3">
		<el-form :model="form">
			<el-form-item label="学生名称" :label-width="formLabelWidth">
				<el-input v-model="form.Student_Name" autocomplete="off" style="width: 370px;"></el-input>
			</el-form-item>
			<el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="150"
				style="position: absolute;left: 550px;bottom: 480px;"></el-avatar>
			<el-form-item label="性别" :label-width="formLabelWidth" style="margin-top: -200px;">
				<el-select v-model="form.Sex" placeholder="请选择性别" style="width: 370px;">
					<el-option label="男" value="男"></el-option>
					<el-option label="女" value="女"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="就读时间" :label-width="formLabelWidth">
				<el-input v-model="form.StudyTime" autocomplete="off" style="width: 370px;"></el-input>
			</el-form-item>
			<el-form-item label="联系电话" :label-width="formLabelWidth">
				<el-input v-model="form.Student_Phone" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="居住地址" :label-width="formLabelWidth">
				<el-input v-model="form.Address" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="家长姓名" :label-width="formLabelWidth">
				<el-input v-model="form.ParentName" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="家长电话" :label-width="formLabelWidth">
				<el-input v-model="form.ParentPhone" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="入学备注" :label-width="formLabelWidth">
				<textarea v-model="form.Entrance" autocomplete="off" cols="40" rows="3"></textarea>
			</el-form-item>
			<!-- <el-form-item label="修改人:" :label-width="formLabelWidth">
			  <el-input v-model="form.UpdateName" autocomplete="off" disabled></el-input>
			</el-form-item>
			<el-form-item label="修改人:" :label-width="formLabelWidth">
			  <el-input v-model="form.UpdateName" autocomplete="off" disabled></el-input>
			</el-form-item>
			<el-form-item label="最后修改时间:" :label-width="formLabelWidth">
			  <el-input v-model="form.UpdateTime" autocomplete="off" disabled></el-input>
			</el-form-item>
		  <el-form-item label="删除人:" :label-width="formLabelWidth">
		    <el-input v-model="form.DeleteName" autocomplete="off" disabled></el-input>
		  </el-form-item>
		  <el-form-item label="删除时间:" :label-width="formLabelWidth">
		    <el-input v-model="form.DeleteTime" autocomplete="off" disabled></el-input>
		  </el-form-item> -->
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogFormVisible3 = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
			</span>
		</template>
	</el-dialog>
	<el-dialog title="新增学员" v-model="dialogFormVisible">
		<el-form :model="form">
			<el-form-item label="学生名称" :label-width="formLabelWidth">
				<el-input v-model="form.Student_Name" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="就读时间" :label-width="formLabelWidth">
				<el-input v-model="form.StudyTime" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="入学备注" :label-width="formLabelWidth">
				<el-input v-model="form.Entrance" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="性别" :label-width="formLabelWidth">
				<el-select v-model="form.Sex" placeholder="请选择性别">
					<el-option label="男" value="男"></el-option>
					<el-option label="女" value="女"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="联系电话" :label-width="formLabelWidth">
				<el-input v-model="form.Student_Phone" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="居住地址" :label-width="formLabelWidth">
				<el-input v-model="form.Address" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="家长姓名" :label-width="formLabelWidth">
				<el-input v-model="form.ParentName" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="家长电话" :label-width="formLabelWidth">
				<el-input v-model="form.ParentPhone" autocomplete="off"></el-input>
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</span>
		</template>
	</el-dialog>
	<el-dialog title="学员编辑" v-model="dialogFormVisible2">
		<el-form :model="form">
			<el-form-item label="学生名称" :label-width="formLabelWidth">
				<el-input v-model="form.Student_Name" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="就读时间" :label-width="formLabelWidth">
				<el-input v-model="form.StudyTime" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="入学备注" :label-width="formLabelWidth">
				<el-input v-model="form.Entrance" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="性别" :label-width="formLabelWidth">
				<el-select v-model="form.Sex" placeholder="请选择性别">
					<el-option label="男" value="男"></el-option>
					<el-option label="女" value="女"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="联系电话" :label-width="formLabelWidth">
				<el-input v-model="form.Student_Phone" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="居住地址" :label-width="formLabelWidth">
				<el-input v-model="form.Address" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="家长姓名" :label-width="formLabelWidth">
				<el-input v-model="form.ParentName" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="家长电话" :label-width="formLabelWidth">
				<el-input v-model="form.ParentPhone" autocomplete="off"></el-input>
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogFormVisible2 = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
			</span>
		</template>
	</el-dialog>
	<el-table :data="tableData.filter(data => !search || data.Course_Name.toLowerCase().includes(search.toLowerCase()))"
		style="width: 100%">
		<el-table-column fixed type="selection" width="55">
		</el-table-column>
		<el-table-column label="编号" prop="Student_Id" width="80" align="center">
		</el-table-column>

		<el-table-column label="学生名称" prop="Student_Name" width="120" align="center">
		</el-table-column>
		<el-table-column label="性别" prop="Sex" width="100" align="center">
		</el-table-column>
		<el-table-column label="学号" prop="Student_Number" width="120" align="center">
		</el-table-column>

		<el-table-column label="班级" prop="Classes_Id" width="120" align="center">
		</el-table-column>

		<el-table-column label="就读时间" prop="StudyTime" width="150" align="center">
		</el-table-column>
		<el-table-column label="生源渠道" prop="Source_Id" width="120" align="center">
		</el-table-column>

		<el-table-column label="咨询登记人" prop="Register_Id" width="120" align="center">
		</el-table-column>

		<el-table-column label="入学备注" prop="Entrance" width="200" align="center">
		</el-table-column>
		<el-table-column label="联系电话" prop="Student_Phone" width="120" align="center">
		</el-table-column>
		<el-table-column label="居住地址" prop="Address" width="200" align="center">
		</el-table-column>
		<el-table-column label="家长地址" prop="ParentName" width="200" align="center">
		</el-table-column>
		<el-table-column label="家长电话" prop="ParentPhone" width="120" align="center">
		</el-table-column>
		<el-table-column label="联系电话" prop="Student_Phone" width="120" align="center">
		</el-table-column>
		<el-table-column fixed="right" width="150" label="操作" align="center">
			<template #default="scope">
				<el-button type="text" @click="showEdit2(scope.row)">查看</el-button>
				<el-button type="text" @click="showEdit(scope.row)">编辑</el-button>
				<el-button type="text" @click="dialogFormVisible4=true">拍照</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		name: "Student",
		data() {
			return {
				imageUrl: '',
				tableData: [{
					Student_Id: '1',
					Classes_Id: 'TR01904',
					Source_Id: '河西',
					Register_Id: '12321',
					Student_Number: '2088',
					Student_Name: '狂拽酷炫',
					StudyTime: '2019-08-12',
					Entrance: '毫无办法可言',
					Sex: '男',
					Student_Phone: '13232323214',
					Address: '中国',
					ImgAddress: '',
					ParentName: '狂拽酷炫他爹',
					ParentPhone: '213123123123',
					UpdateName: '稳定',
					UpdateTime: '2020-12-22',
					DeleteName: '懂得',
					DeleteTime: '2020-12-23',
					TimeLiness: '未过期'
				}, ],
				search: '',
				dialogFormVisible: false,
				dialogFormVisible2: false,
				dialogFormVisible3: false,
				dialogFormVisible4: false,
				form: {
					Student_Id: '',
					Classes_Id: '',
					Source_Id: '',
					Register_Id: '',
					Student_Number: '',
					Student_Name: '',
					StudyTime: '',
					Entrance: '',
					Sex: '',
					Student_Phone: '',
					Address: '',
					ImgAddress: '',
					ParentName: '',
					ParentPhone: '',
					UpdateName: '',
					UpdateTime: '',
					DeleteName: '',
					DeleteTime: '',
					TimeLiness: ''
				},
				formLabelWidth: '120px'
			}
		},
		methods: {
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;

			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			showEdit2(row) {
				this.form.Student_Id = row.Student_Id
				this.form.Classes_Id = row.Classes_Id
				this.form.Source_Id = row.Source_Id
				this.form.Register_Id = row.Register_Id
				this.form.Student_Number = row.Student_Number
				this.form.Student_Name = row.Student_Name
				this.form.StudyTime = row.StudyTime
				this.form.Entrance = row.Entrance
				this.form.Sex = row.Sex
				this.form.Student_Phone = row.Student_Phone
				this.form.Address = row.Address
				this.form.ImgAddress = row.ImgAddress
				this.form.ParentName = row.ParentName
				this.form.ParentPhone = row.ParentPhone
				this.form.UpdateName = row.UpdateName
				this.form.UpdateTime = row.UpdateTime
				this.form.DeleteName = row.DeleteName
				this.form.DeleteTime = row.DeleteTime
				this.dialogFormVisible3 = true
			},
			showEdit(row) {
				this.form.Student_Id = row.Student_Id
				this.form.Classes_Id = row.Classes_Id
				this.form.Source_Id = row.Source_Id
				this.form.Register_Id = row.Register_Id
				this.form.Student_Number = row.Student_Number
				this.form.Student_Name = row.Student_Name
				this.form.StudyTime = row.StudyTime
				this.form.Entrance = row.Entrance
				this.form.Sex = row.Sex
				this.form.Student_Phone = row.Student_Phone
				this.form.Address = row.Address
				this.form.ImgAddress = row.ImgAddress
				this.form.ParentName = row.ParentName
				this.form.ParentPhone = row.ParentPhone
				this.dialogFormVisible2 = true
			}
		}
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>
