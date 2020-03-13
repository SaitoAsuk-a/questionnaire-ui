<template>
  <el-table
    :data="questionnaireList"
    style="width: 100%"
    fit:false
  >
    <el-table-column
      fixed
      prop="id"
      label="id"
      width="200">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="150">
    </el-table-column>
    <el-table-column
      prop="description"
      label="描述"
      width="150">
    </el-table-column>
    <el-table-column
      prop="statusName"
      label="状态"
      width="150">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="startTime"
      label="开始时间"
      width="150">
    </el-table-column>
    <el-table-column
      prop="endTime"
      label="结束时间"
      width="150">
    </el-table-column>
    <el-table-column
      fixed="right"
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看
        </el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
    import {getRequest} from "../utils/request";
    import {dateToString} from "../utils/dateFormate";

    export default {
        name: 'questionnaireList',
        created() {
            getRequest('/questionnaire/queryQuestionnaire').then(resp => {
                if (resp.status == 200) {
                    this.questionnaireList = resp.data.data;
                    this.questionnaireList.forEach((item) => {
                        item.createTime=item.createTime.replace("T"," ");
                        item.startTime=item.startTime.replace("T"," ");
                        item.endTime=item.endTime.replace("T"," ");

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
                search:'',
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
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>
