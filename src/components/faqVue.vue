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
    <main class="faq">
        <section class="faq_block">
            <h1 class="title">Частозадаваемые вопросы</h1>
            <div class="faqs">
                <details>
                    <summary>Зачем это приложение?</summary>
                    <p>Повседневная практика показывает, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Равным образом консультация с широким активом требуют определения и уточнения модели развития.</p>
                </details>
                <details>
                    <summary>Для кого это приложение?</summary>
                    <p>Повседневная практика показывает, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Равным образом консультация с широким активом требуют определения и уточнения модели развития.</p>
                </details>
                <details>
                    <summary>Наша команда</summary>
                    <p>Повседневная практика показывает, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Равным образом консультация с широким активом требуют определения и уточнения модели развития.</p>
                </details>
            </div>
        </section>
    </main>
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
.goals_block{width: 60vw;}
.filter_block{
  width: 20vw;
  background: rgba(196, 196, 196, 0.15);
border: 1px solid #FFA412;
border-radius: 15px;
padding: 24px;
}
.input{width: 90%;margin-bottom: 20px; background: rgba(196, 196, 196, 0.5);padding: 8px 10px; border: none;}
.type{width: 97%;}

details{
    display:block;
    background: #fff;
    width:100%;
    box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    overflow:hidden;
    margin-bottom: 1.5rem;
  }
  summary::-webkit-details-marker{display:none;}
  summary::-moz-list-bullet{list-style-type:none;}
  summary::marker{display:none;} 
  summary {
     display:block;
     padding: 10px 25px;
     border-bottom: 1px solid #e2e8f0;
     font-size:1.4em;
     cursor: pointer;
     position: relative;
     background-color:#C4C4C426;     ;
  }
  summary:before {  
    top: .4em;
    right: 1.5em;
    color: transparent;
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYuNTkgOC41OUwxMiAxMy4xNyA3LjQxIDguNTkgNiAxMGw2IDYgNi02eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=") no-repeat 50% 50% / 1em 1em;
    width: 1em;
    height: 1em;
    color: rgba(18, 235, 255, 0.75);  
    content: "";
    position: absolute;
    transition: transform .5s;
  }
  details[open] > summary:before {
    transform: scale(1,-1);
  }
  summary ~ * {
    padding: 20px 1.4em;
    line-height: 2;
  }
  details[open] summary ~ *{ 
    animation: sweep .5s ease-in-out;
  }
  @keyframes sweep {
    0%    {opacity: 0;}
    100%  {opacity: 1;}
  }
  summary:focus {
    outline:0;
    box-shadow: inset 0 0 1px rgba(0,0,0,0.3), inset 0 0 2px rgba(0,0,0,0.3);
  }
</style>
