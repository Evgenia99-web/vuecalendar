<template>
<div class="registrationVue">
    <main class="reg_main">
        <h1 class="title">Регистрация</h1>
        <form  method="post" class="reg_form" @submit.prevent="register">
            <div class="input_block">
                <label for="username">Имя</label>
                <input type="text" name="username" id="username" v-model="username">
            </div>
            <div class="input_block">
                <label for="birthday">Дата рождения</label>
                <input type="date" name="birthday" id="birthday" v-model="birthday">
            </div>
            <div class="input_block">
                <label for="email">Почта</label>
                <input type="email" name="email" id="email" v-model="email">
            </div>
            <div class="input_block">
                <label for="password">Пароль</label>
                <input type="password" name="password" id="password" v-model="password">
            </div>
            <div class="input_block">
                <label for="passwordConfirm">Повторите пароль</label>
                <input type="password" name="passwordConfirm" id="passwordConfirm" v-model="password_confirm">
            </div>
            <button type="submit" class="reg_btn">Зарегистрироваться</button>
        </form>

        {{info}}
    </main>
</div>
</template>

<script>

export default {
    name:'registrationVue',
    components:{},
    data(){
        return{
            username:"",
            birthday:"",
            email:"",
            password:"",
            password_confirm:""
        }
    },
    methods:{
        register: function () {
       this.$store.dispatch('register', {
          username: this.username,
          birthday:this.birthday,
          email: this.email,
          password: this.password
        })
       .then(() => this.$router.push('/profileVue'))
       .catch(err => console.log(err))
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{margin: 0;padding: 0;}
body{
    height: 100vh;
    font-family: 'Inter', sans-serif;
}
a{
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    color: #000;
}
ul{list-style: none;}
button{
    background: #f7d344;
    border: none;
    padding: 10px 25px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
}

header{
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #000;
}
.logo{max-width: 200px;}
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
</style>
