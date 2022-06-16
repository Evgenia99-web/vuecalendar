<template>
  <div class="authVue" id="">
    <main class="reg_main authVue">
        <h1 class="title">Авторизация</h1>
        <form  method="post" class="reg_form" @submit="handleLogin">
            <div class="input_block">
                <label for="login">Логин</label>
                <input type="email" v-model="userlogin" name="login" id="login">
            </div>
            <div class="input_block">
                <label for="password">Пароль</label>
                <input type="password" v-model="password" name="password" id="password">
            </div>
            
            <button type="submit" class="auth_btn">Войти</button>

            <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
                {{ message }}
            </div>
            </div>
        </form>
    </main>
 </div>
</template>

<script>
export default {
    name:'authVue',
    components:{},
    props:{},
    data(){},
    computed:{
        loggedIn() {
        return this.$store.state.auth.status.loggedIn;
        },
    },
    created() {
        if (this.loggedIn) {
        this.$router.push("/profileVue");
        }
    },
    methods:{
        handleLogin(user) {
        this.loading = true;
        this.$store.dispatch("auth/login", user).then(
            () => {
            this.$router.push("/profileVue");
            },
            (error) => {
            this.loading = false;
            this.message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            }
        );
        },
    },
    watch:{},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

main{padding: 30px 100px;}
.reg_main p{text-align: center;margin-top: 20px;}
main{padding: 30px 100px;}
.reg_main p{text-align: center;margin-top: 20px;}
.title{
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    margin-bottom: 40px;
}
.reg_form{
    max-width: 550px;
    margin: 0 auto;
}
.input_block input{
    width: 95%;
    background: rgba(196, 196, 196, 0.3);
    border: 1px solid #000000;
    margin: 10px 0;
    padding: 10px;
}
.reg_btn{
    max-width: 250px;
    margin-left: 33%;
    cursor: pointer;
}
.auth_btn{
    margin-left: 43%;
    cursor: pointer;
}
.authVue{padding-top: 150px;}
.forgot_btn{margin-left: 35%;}
</style>
