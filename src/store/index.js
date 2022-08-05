// vue3中创建store实例对象的方法createStore()按需引入
import { createStore } from 'vuex'
import VersionUpgrade from './Modules/VersionUpgrade.js'

export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    },
    modules: {
        VersionUpgrade
    }
})

