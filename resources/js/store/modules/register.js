export default {
    namespaced: true,
    //khởi tạo các stage
    state: {
        userName: null,
        passWord: null
    },
    //set các stage theo các params
    mutations: {
        setUserName(state, username) {
            state.userName = username
        },
        setPassWord(state, pass) {
            state.passWord = pass
        },
    },
    //get các stage ra bên ngoài component
    getters: {
        getUserName(state) {
            return state.userName
        },
        getPassWord(state) {
            return state.passWord
        }
    }
}