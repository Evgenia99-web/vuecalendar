<template>
    <header class="reg_head">
            <a href="#" class="logo_link"><img src="img/logo1.bmp" alt="logo" class="logo"></a>
            <ul class="main_menu">
                <li class="menu_item"><a href="calendar.html" class="menu_link">Календарь</a></li>
                <li class="menu_item"><a href="goals.html" class="menu_link">Достижения</a></li>
                <li class="menu_item"><a href="faq.html" class="menu_link">FAQ</a></li>
            </ul>
            <a href="profile.html" class="profile_link">Профиль</a>
    </header>
    <main class="profile">
        <h1 class="title">Личный кабинет</h1>
        <div class="profile_block">
            <img src="img/avatar.jpg" alt="avatar" class="avatar">
            <div class="profile_info">
                <h3 class="smalltitle">Информация пользователя</h3>
                <div class="profile_text" v-for="user in users.items" :key="user.id">
                    <p class="name">Имя: {{user.name}}</p>
                    <p class="birthday">Дата рождения: {{user.birthDate}}</p>
                    <p><router-link to="/login">Выйти</router-link></p>
                </div>
                <button class="edit_btn"><a href="edit.html">Редактировать данные</a></button>
            </div>
        </div>
    </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    background: #f7d344;;
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
.main_menu, .profile_block{display: flex;}
.profile_block{justify-content: space-around;align-items: center;}
.menu_item{margin-right: 30px;}
.profile{padding: 100px; }
.avatar{max-width: 250px;}
.smalltitle{margin-bottom: 30px; font-size: 20px;}
.profile_text p {margin-bottom: 20px;}
.edit_btn{margin-top: 40px; cursor: pointer;}
</style>
