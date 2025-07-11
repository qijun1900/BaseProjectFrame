import Home from "@/views/Home/Home.vue"
import Center from "@/views/Center/Center.vue"
import Users  from "@/views/Users/Users.vue"    
import News from "@/views/News/News.vue"
import NotFound from "@/views/NotFound/NotFound.vue"

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
        path: '/users',
        component: Users,
    },
    {
        path: '/news',
        component: News,
    },
    {
        path:'/:patchMatch(.*)*',
        name:"NotFound",
        component:NotFound
    },

]
export default routes