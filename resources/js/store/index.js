//nơi quản lý toàn bộ store của project
import Vue from 'vue'
import Vuex from 'vuex'

import register from '@/store/modules/register'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        register
    }
})
