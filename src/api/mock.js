import Mock from "mockjs";
import homeApi from './mockServeData/home.js'
import user from "./mockServeData/user.js";
import permission from "./mockServeData/permission.js";
//定义mock请求拦截
Mock.mock('/api/home/getData',homeApi.getStatisticalData)

//用户列表数
Mock.mock('/api/user/add','post',user.createUser)
Mock.mock('/api/user/edit','post',user.updateUser)
Mock.mock('/api/user/del','post',user.deleteUser)
Mock.mock(/api\/user\/getUser/,'get',user.getUserList)

Mock.mock(/api\/permission\/getMenu/,'post',permission.getMenu)


