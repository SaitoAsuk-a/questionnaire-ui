<template>
  <el-table
    :data="questionnaireList"
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="id"
      label="id"
      width="190">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="130">
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述"
      width="200">
    </el-table-column>
    <el-table-column
      prop="statusName"
      label="状态"
      width="120">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间"
      width="300">
    </el-table-column>
    <el-table-column
      prop="startTime"
      label="开始时间"
      width="100">
    </el-table-column>
    <el-table-column
      prop="endTime"
      label="结束时间"
      width="100">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    import {getRequest} from "../utils/request";

    export default {
        name: 'questionnaireList',
        created() {
            getRequest('/questionnaire/queryQuestionnaire').then(resp => {
                if (resp.status == 200) {
                    this.questionnaireList = resp.data.data;
                    this.questionnaireList.forEach((item) => {
                        if (item.status == 1) {
                            item.statusName = '草稿';
                        } else {
                            item.statusName = '已发布';
                        }
                    })
                } else {
                    alert("获取问卷列表失败");
                }
            }, resp => {
                alert("找不到服务器⊙﹏⊙∥!'")
            });

        },
        data() {
            return {
                questionnaireList: [{
                    id: '',
                    title: '',
                    description: '',
                    statusName: '',
                    createTime: '',
                    startTime: '',
                    endTime: '',
                    status: ''
                }]
            }
        },
        methods: {
            handleClick(row) {
                console.log(row);
            }
        }
    }
</script>
