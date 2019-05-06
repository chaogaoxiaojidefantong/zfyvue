import {setToken,getToken} from "@/libs/util";
import Cookies from 'js-cookie';
import {loginTo,tokenLogin,userLogout,updateUser} from "@/api/api.js";
let user={
    state:{userEmail:'',userPwd:'',userName:'',token:'',userStatus:'',userId:''},
    mutations:{
        setuserEmail(state,userEmail){
            state.userEmail=userEmail;
        },
        setuserPwd(state,userPwd){
            state.userPwd=userPwd;
        },
        setuserName(state,userName){
            state.userName=userName;
        },
        setToken(state,token){
            state.token=token;
        },
        setuser(state,user){
            state.userEmail=user.userEmail;
            state.userPwd=user.userPwd;          
            state.userName=user.userName;
            state.token=user.token;
            state.userStatus=user.userStatus;
            state.userId=user.userId;           
        }
    },
    actions:{
        login({commit},user){
            return new Promise((resolve,reject)=>{
                loginTo(user).then(res=>{
                    let result= res.data.data
                    setToken(result.token);
                    localStorage.setItem('user',JSON.stringify(result.user));
                    commit('setuser',result.user);
                    resolve(result.user);
                },err=>{
                    reject("登录失败");
                })
            })
        },
        loginByToken({commit}){
            let oneToken=getToken()
            let data={token:oneToken}
            return new Promise((resolve,reject)=>{
                tokenLogin(data).then(res=>{
                    let result= res.data.data
                    localStorage.setItem('user',JSON.stringify(result));
                    commit('setuser',result);
                    resolve(result);
                },err=>{
                    reject('服务器出错')
                })
            })            
        },
        logout({commit}){
            let oneToken=getToken();
            let data={token:oneToken}
            return new Promise((resolve,reject)=>{
                userLogout(data).then(res=>{
                    if(res.data.status=200){
                        localStorage.clear()
                        Cookies.remove('token')
                        resolve('退出成功')                       
                    }
                },err=>{
                    reject('服务器出错')
                })
            })

        },
        updateUserOne({commit},user){
            return new Promise((resolve,reject)=>{
                updateUser(user).then(res=>{
                    let result= res.data.data
                    setToken(result.token);
                    localStorage.setItem('user',JSON.stringify(result.user));
                    commit('setuser',result.user);
                    resolve(result.user);
                })
            },err=>{
                reject("登录失败");
            })
        }


}
}
export default user;
