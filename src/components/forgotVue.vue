<template>
<div class="forgotVue">
    <main class="reg_main auth">
        <h1 class="title">Восстановление пароля</h1>
        <form  method="post" class="reg_form">
            <div class="input_block">
                <label for="login">Почта</label>
                <input type="email" name="login" id="login">
            </div>
            <div class="input_block">
                <label for="password">Новый пароль</label>
                <input type="password" name="password" id="password">
            </div>
            <div class="input_block">
                <label for="passwordConfirm">Повторите пароль</label>
                <input type="password" name="passwordConfirm" id="passwordConfirm">
            </div>
            
            <button type="submit" class="auth_btn forgot_btn">Сменить пароль</button>
        </form>
    </main>
    </div>
</template>

<script>
export default {
    name:'forgotVue'
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
.main_menu, .profile_block{display: flex;}
.profile_block{justify-content: space-around;align-items: center;}
.menu_item{margin-right: 30px;}
.profile{padding: 100px; }
.avatar{max-width: 250px;}
.smalltitle{margin-bottom: 30px; font-size: 20px;}
.profile_text p {margin-bottom: 20px;}
.edit_btn{margin-top: 40px; cursor: pointer;}
</style>
