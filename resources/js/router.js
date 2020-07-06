import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/main/Home'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: Home
        }
    ]
})
