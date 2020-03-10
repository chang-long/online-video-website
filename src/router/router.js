import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/page/home/Home.vue"
import Login from "@/page/login/Login.vue"
import Video from "@/page/video/Video.vue"
import VideoList from "@/page/sports/VideoList.vue"

Vue.use(VueRouter)

const DEFAULT_PAGE = {
    path: "/",
    redirect: "/home"
}

const HOME = {
    path: "/home",
    component: Home
}

const LOGIN = {
    path: "/login",
    component: Login
}

const VIDEO = {
    path: "/video",
    component: Video
}

const VIDEO_LIST = {
    path:"/video_list",
    component:VideoList
}

const routes = [
    DEFAULT_PAGE,   // 默认页面
    HOME,           // 主页
    LOGIN,          // 登陆/注册页面
    VIDEO,          // 视频详情页面
    VIDEO_LIST,     // 视频列表页面，比如足球视频、排球视频等。

]

const router = new VueRouter({
    routes,
    mode: 'history',
})


export default router