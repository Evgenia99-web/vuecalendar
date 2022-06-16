<template>
<div class="calendar">
    <header class="reg_head">
            <a href="#" class="logo_link"><img src="img/logo1.bmp" alt="logo" class="logo"></a>
            <ul class="main_menu">
                <li class="menu_item"><a href="calendar.html" class="menu_link">Календарь</a></li>
                <li class="menu_item"><a href="goals.html" class="menu_link">Достижения</a></li>
                <li class="menu_item"><a href="faq.html" class="menu_link">FAQ</a></li>
            </ul>
            <a href="profile.html" class="profile_link">Профиль</a>
    </header>
    <main class="calendar">
        <h1 class="title">Календарь жизни</h1>
        <div class="calendar_block">

        </div>
        <div class="fixed-overlay fixed-overlay__modal" id="addModal">
            <div class="modal">
                <div class="modal_container">  
                    <div class="modal_head"><p class="modal_title">Добавление достижения / задачи</p><a href="" class="modal_close">Х</a></div>
                    <div class="modal_body">
                        <div class="tabs">
                            <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked>
                            <label for="tab-btn-1">Достижение</label>
                            <input type="radio" name="tab-btn" id="tab-btn-2" value="">
                            <label for="tab-btn-2">Цель</label>
                        
                            <div id="content-1">
                              <form method="post">
                                  <textarea name="achiv" id="achiv" cols="41" rows="10" placeholder="Добавьте достижение"></textarea>
                                  <button type="submit" class="save">Сохранить</button>
                              </form>
                            </div>
                            <div id="content-2">
                                <form method="post">
                                    <textarea name="goal" id="goal" cols="41" rows="10" placeholder="Добавьте цель"></textarea>
                                    <button type="submit" class="save">Сохранить</button>
                                </form>
                            </div>
                        </div>
                    </div>  
                </div>
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

  .calendar_block{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
  }
  .year{
      width: 50px;height: 30px;
      background-color: #f7d344;
      text-align: center;vertical-align: middle;
      margin-bottom: 25px;margin-right: 25px; padding-top: 15px;
      
  }

  .fixed-overlay {
    display: none;
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}
.fixed-overlay:target{
  display: block; pointer-events: auto;
}

.fixed-overlay__modal {
  text-align: center;
  white-space: nowrap;
}

.fixed-overlay__modal::after {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 100%;
  content: '';
}
.modal_close:hover{color: #f7d344; cursor: pointer;}

.modal {
  display: inline-block;
  vertical-align: middle;
}

.modal_container {
  margin: 50px;
  padding: 20px;
  min-width: 400px;
  text-align: left;
  white-space: normal;
  background-color: #fff;    
  color: #000;
  border: 2px solid #f7d344;
}
.save{
  background-color: #f7d344;
  margin-left: 30%;
  cursor:pointer;
}
.modal_head{display: flex;justify-content: space-between;align-items: center;margin-bottom: 30px;}

.tabs {
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
}

.tabs>input[type="radio"] {
  display: none;
}

.tabs>input[type="radio"]:checked+label {
  background-color: #f7d344;
}

.tabs>div {
  /* скрыть контент по умолчанию */
  display: none;
  padding: 0px 15px;
  border-radius: 4px;
}

/* отобразить контент, связанный с вабранной радиокнопкой (input type="radio") */
#tab-btn-1:checked~#content-1,
#tab-btn-2:checked~#content-2{
  display: block;
}

.tabs>label {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #eee;
  border: 1px solid transparent;
  padding: 2px 8px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 4px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  margin-left: 6px;
  cursor: pointer;
  margin-bottom: 10px;
}

.tabs>label:first-of-type {
  margin-left: 0;
}
</style>
