let routes=[
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/login/login.vue')
    },
    {
        path:'/regist',
        name:'regist',
        component:()=>import('@/views/regist/regist.vue')
    },
    {
        path:'/clientMain',
        name:'clientMain',
        component:()=>import('@/views/client/clientMain.vue'),
        children:[{
            path:'/uploadpage',
            name:'uploadpage',
            component:()=>import('@/views/client/uploadpage.vue'),
        },
        {
            path:'/clienthome',
            name:'clienthome',
            component:()=>import('@/views/client/client-home.vue'),
        },
        {
            path:'/userhome',
            name:'userhome',
            component:()=>import('@/views/client/user-home.vue'),
        },
        {
            path:'/memberhome',
            name:'memberhome',
            component:()=>import('@/views/client/member-home.vue'),
        },
        {
            path:'/commentpage',
            name:'commentpage',
            component:()=>import('@/views/client/comment-page.vue')
        }          
        ]

    },
    {
        path:'/adminMain',
        name:'adminMain',
        component:()=>import('@/views/manage/admin-main.vue'),
        children:[
            
        ] 
    }

];
export default routes;