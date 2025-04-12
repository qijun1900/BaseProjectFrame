import Home from '../views/Home/home.vue'
import Center from '../views/Center/center.vue'
import Useradd from '../views/Users/useradd.vue'
import Userlist from '../views/Users/userlist.vue'
import Newsadd from '../views/News/newsadd.vue'
import Newslist from '../views/News/newslist.vue'
import Productadd from '../views/Products/productadd.vue'
import Productlist from '../views/Products/productlist.vue'
import NotFound from '../views/NotFound/NotFound.vue'
import  NewsEdit from '../views/News/NewsEdit.vue'
import  ProductEdit from "../views/Products/editproduct.vue"
const routes = [
    {
        path:'/index',
        component:Home,
    },
    {
        path:'/center',
        component:Center,
    },
    {
        path:'/user/adduser',
        component:Useradd,
        requireAdmin:true,
    },
    {
        path:'/user/userlist',
        component:Userlist,
        requireAdmin:true,
    },
    {
        path:'/new/addnews',
        component:Newsadd,
    },
    {
        path:'/new/newslist',
        component:Newslist,
    },
    {
        path:'/product/productadd',
        component:Productadd,
    },
    {
        path:'/product/productlist',
        component:Productlist,
    },
    {
        path:'/' ,
        redirect:'index'
    },
    {
        path:'/:patchMatch(.*)*',
        name:"NotFound",
        component:NotFound
    },
    {
        path:'/news/editnews/:id',
        component:NewsEdit,
    },
    {
        path:'/product/editproduct/:id',
        component:ProductEdit,
    },
]
export default routes