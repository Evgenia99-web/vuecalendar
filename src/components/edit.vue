<template>
<div class="edit">
    <header class="reg_head">
            <a href="#" class="logo_link"><img src="img/logo1.bmp" alt="logo" class="logo"></a>
            <ul class="main_menu">
                <li class="menu_item"><a href="calendar.html" class="menu_link">Календарь</a></li>
                <li class="menu_item"><a href="goals.html" class="menu_link">Достижения</a></li>
                <li class="menu_item"><a href="faq.html" class="menu_link">FAQ</a></li>
            </ul>
            <a href="profile.html" class="profile_link">Профиль</a>
    </header>
    <main class="edit_profile">
        <h1 class="title">Редактирование данных</h1>
        <div class="profile_block">
            <img src="img/avatar.jpg" alt="avatar" class="avatar">
            <div class="profile_info">
                <form  method="post" class="edit_form">
                    <div class="input_block">
                        <label for="username">Имя</label>
                        <input type="text" name="username" id="username">
                    </div>
                    <div class="input_block">
                        <label for="birthday">Дата рождения</label>
                        <input type="date" name="birthday" id="birthday">
                    </div>
                    <div class="input_block">
                        <label for="email">Почта</label>
                        <input type="email" name="email" id="email">
                    </div>
                    <div class="input_block">
                        <label for="password">Пароль</label>
                        <input type="password" name="password" id="password">
                    </div>
                    <div class="input_block">
                        <label for="passwordConfirm">Повторите пароль</label>
                        <input type="password" name="passwordConfirm" id="passwordConfirm">
                    </div>
                </form>
                <button class="save_btn"><a href="#">Сохранить</a></button>
            </div>
        </div>
    </main>
    </div>
</template>

<script>
export default {
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
