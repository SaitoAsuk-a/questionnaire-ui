import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import List from "../components/List";
import questionnaireList from "../components/QuestionnaireList"
import questionnaireEdit from "../components/QuestionnaireEdit"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'questionnaireList',
      component: questionnaireList
    },
    {
      path: '/questionnaireEdit/:id',
      name: 'editQuestionnaire',
      component: questionnaireEdit
    }
  ]
})
