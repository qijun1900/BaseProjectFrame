import Home from "@/views/Home/Home.vue"
import Center from "@/views/Center/Center.vue"
import UserAdd from "@/views/Users/UserAdd.vue"
import UserList from "@/views/Users/UserList.vue"
import NewsAdd from "@/views/News/NewsAdd.vue"
import NewsList from "@/views/News/NewsList.vue"
const routes= [
    {
        path:'/' ,
        redirect:'index'
    },
    {
        path: '/index',
        component: Home,
    },
    {
        path: '/center',
        component: Center,
    } ,
    {
        path: '/user/adduser',
        component: UserAdd,
        requireAdmin: true,
    },
    {
        path:'/user/userlist',
        component: UserList,
    },
    {
        path:'/news/addnews',
        component: NewsAdd,

    },
    {
        path:'/news/newslist',
        component: NewsList,
    },

]

export default routes