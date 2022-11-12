//首页
export default [
    {
        //首页
        path: "/",
        name: "home",
        component: () => import('@/pages/home/index'),
        children: []
    }
]
