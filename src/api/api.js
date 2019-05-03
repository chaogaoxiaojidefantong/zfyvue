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