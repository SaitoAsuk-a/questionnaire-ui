<template>
  <el-input v-model="questionnaireTitle" placeholder="请输入问卷标题"></el-input>
</template>


<script>
    export default {
        name: "questionnaireEdit",
        data() {
            return {
                questionnaireTitle:'',
                questionnaireDescription:'',
                startTime:null,
                endTime:null,
                status:1,
                questionList:[
                    {
                        title:""
                    }
                ]
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>


<style scoped>

</style>
