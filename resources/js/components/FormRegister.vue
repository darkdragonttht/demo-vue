<template>
    <div class="form-register">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="text" class="form-control" placeholder="Vui lòng nhập tên đăng nhập" v-model="userName">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" placeholder="Vui lòng nhập mật khẩu" v-model="passWord">
        </div>
        <button class="btn btn-primary" @click="onRegister()" :disabled="disable">Register</button>
    </div>
</template>
<script>
export default {
    //khai báo tên component
    name: 'form-register',
    //set data cho component
    data() {
        return {
            disable: false
        }
    },
    //computed kiểm tra các props hoặc state có thay đổi hoặc set một giá trị 
    computed: {
        userName: {
            get() {
                return this.$store.state.register.userName
            },
            set(name) {
                this.$store.commit("register/setUserName", name);
            }
        },
        passWord: {
            get() {
                return this.$store.state.register.passWord
            },
            set(pass) {
                this.$store.commit("register/setPassWord", pass);
            }
        }
    },
    //watch: kiểm tra stage hoặc props thay đổi
    watch: {

    },
    //mouted: được gọi khi render component lần đầu tiên kết thúc, thường được sử dụng để set lại elements
    mounted() {

    },
    // chứa các hàm sử dụng cho component này
    methods: {
        async onRegister() {
            this.disable = true;
            console.log(this.userName, this.passWord)
            setTimeout(() => {
                this.disable = false;
            }, 3000)
        }
    }
}
</script>
<style lang="sass" scoped>
    // scoped mục đích style riêng cho component mà không làm ảnh hưởng đến component khác
    // lang là ngôn ngữ style muốn sử dụng ví dụ: sass, less, scss, css
    .form-register
        max-width: 1280px
        margin: 0 auto
</style>