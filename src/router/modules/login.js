//登录页
export default [
    {
        //登录页的首页
        path: "/login",
        name: "login",
        component: () => import('@/pages/login/index'),
        children: []
    }
]
