import axios from 'axios'
import i18n from '../../i18n/index'
console.log("i18n,i18n", i18n)
const state = {
    curVersion: '2',
    tableData: [
        // {
        //     version: 'v1.1.5',
        //     date: '2022-03-25',
        //     description: '1.说什么什么什么什么 2.啦啦啦啦啦啦啊啦啦啦拉拉 3.是呀是呀是呀是呀是呀是呀,',
        //     operations: i18n.global.t('versionUpdate.upgrade')
        // }, {
        //     version: 'v1.1.4',
        //     date: '2022-03-24',
        //     description: '1.说什么什么什么什么 2.啦啦啦啦啦啦啊啦啦啦拉拉 3.是呀是呀是呀是呀是呀是呀',
        //     operations: ''
        // }, {
        //     version: 'v1.1.3',
        //     date: '2022-03-22',
        //     description: '1.说什么什么什么什么 2.啦啦啦啦啦啦啊啦啦啦拉拉 3.是呀是呀是呀是呀是呀是呀',
        //     operations: i18n.global.t('versionUpdate.rollback')
        // },
        // {
        //     version: 'v1.1.3',
        //     date: '2022-03-22',
        //     description: '1.说什么什么什么什么 2.啦啦啦啦啦啦啊啦啦啦拉拉 3.是呀是呀是呀是呀是呀是呀',
        //     operations: i18n.global.t('versionUpdate.rollback')
        // },
        // {
        //     version: 'v1.1.3',
        //     date: '2022-03-22',
        //     description: '1.说什么什么什么什么 2.啦啦啦啦啦啦啊啦啦啦拉拉 3.是呀是呀是呀是呀是呀是呀',
        //     operations: i18n.global.t('versionUpdate.rollback')
        // }
    ]
}
const mutations = {
    initTableData(state, payload) {
        state.tableData = payload.list
        console.log('state.tableData', state.tableData)
    }
}
const getters = {}
const actions = {
    // http://registry-dev.dmetasoul.com/api/api/alphaide/listVersions 
    getVersionsList({ dispatch, commit, state }) {
        console.log("获取版本记录")
        axios({
            method: "get",
            // url: "/api/alphaide/listVersions"
            url: 'https://registry-dev.dmetasoul.com/api/api/alphaide/listVersions'
        }).then((res) => {
            if (res.data.code == 200) {
                console.log('1111res', res.data)
                commit('initTableData', res.data)
            }
        }).catch((error) => {
            console.log(error)
        })
    },
    versionUpgrade({ dispatch, commit, state }, payload) {
        console.log("payloadup", payload)
        // axios({
        //     method: "get",
        //     url: ""
        // }).then((res) => {
        //     if (res.data.code == 200) {
        //         commit('initTableData', res.data)
        //     }
        // }).catch((error) => {
        //     console.log("")
        // })
    },
    versionRollback({ dispatch, commit, state }, payload) {
        console.log("payloadup", payload)

    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}