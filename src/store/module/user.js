import {setToken,getToken} from "@/libs/util";
import Cookies from 'js-cookie';
import {loginTo} from "@/api/api.js";
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
                    localStorage.setItem('user',JSON.stringify(result));
                    resolve(result.user);
                },err=>{
                    reject("登录失败");
                })
            })
        }
    //     login({commit},user){ 
    //         return new Promise((resolve,reject)=>{
    //             getLoginMessage(user).then(res=>{
    //                     let result= res.data.data                
    //                     commit('setuser',result.user);
    //                     setToken(result.token);
    //                     localStorage.setItem('user',JSON.stringify(result));
    //                     resolve(result.user);
    //             },err=>{
    //                 reject("登录失败");
    //             })
    //         });
    // }
}
}
export default user;
