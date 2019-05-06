// 专门存放发送异步请求后接受到的数据
import { axios } from "@/libs/api.request";


//获取登录信息
export const getLoginMessage = data => {
  return axios.request({
    // url: "/adminServiceZuul/User/login",
    // method: "post",
    // data: data
  });
};

export const loginTo=data=>{
  return axios.request({
    url: "/adminServiceZuul/User/login",
    method: "post",
    data: data
  })
}

export const emailCheck=data=>{
  return axios.request({
    url: "/adminServiceZuul/User/emailCheck",
    method: "post",
    data: data
  })
}
//验证此邮箱是否已被注册
export const emailVerify=data=>{
  return axios.request({
    url: "/adminServiceZuul/User/registVerify",
    method: "post",
    data: data
  })
}

//注册用户
export const registTo=data=>{
  return axios.request({
    url: "/adminServiceZuul/User/addOne",
    method: "post",
    data: data
  })
}

//通过token登录
export const tokenLogin=data=>{
  return axios.request({
    url: "/adminServiceZuul/User/tokenLogin",
    method: "post",
    data: data
  })
}

//退出操作,删除redis里的用户数据
export const userLogout=data=>{
  return axios.request({
    url: "/adminServiceZuul/User/logout",
    method: "post",
    data: data
  })
}

//修改用户信息
export const updateUser=data=>{
  return axios.request({
    url: "/adminServiceZuul/User/updateUser",
    method: "post",
    data: data
  })
}


//查询所有分类
export const selectManyStuType=data=>{
  return axios.request({
    url: "/adminServiceZuul/StuType/selectMany",
    method: "post",
    data: data
  })
}

//查询所有分类与分类下的资源
export const selectManyAndStu=data=>{
  return axios.request({
    url: "/adminServiceZuul/StuType/selectManyAndStu",
    method: "post",
    data: data
  })
}


//查询单个资源
export const selectOneStu=data=>{
  return axios.request({
    url: "/adminServiceZuul/Stu/selectOne",
    method: "post",
    data: data
  })
}

//模糊查询资源
export const selectByName=data=>{
  return axios.request({
    url: "/adminServiceZuul/Stu/selectByName",
    method: "post",
    data: data
  })
}
//查询资源
export const selectManyStu=data=>{
  return axios.request({
    url: "/adminServiceZuul/Stu/selectMany",
    method: "post",
    data: data
  })
}

//评论

//评论某个资源
export const  addOneComment=data=>{
  return axios.request({
    url: "/adminServiceZuul/Comment/addOne",
    method: "post",
    data: data
  })
}

export const selectManyComment=data=>{
  return axios.request({
    url: "/adminServiceZuul/Comment/selectMany",
    method: "post",
    data: data
  })
}






