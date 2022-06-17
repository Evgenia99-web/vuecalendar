<template>

 <div id="app">
    <header class="reg_head">
            <a href="#" class="logo_link"><img src="/img/logo1.bmp" alt="logo" class="logo"></a>
            
            <div class="choose" v-if="isLoggedIn">
                <!-- <div class="radio_btn"> -->
                    <input type="radio" id="btn1" v-model="activeComponent" value="calendarVue" /> 
                    <label class="hidden" for="btn1">Календарь</label>
                <!-- </div> -->
                
                <!-- <div class="radio_btn"> -->
                    <input type="radio" id="btn2" v-model="activeComponent" value="goalsVue" /> 
                    <label class="hidden" id="btn2">Достижения</label>
                <!-- </div> -->
                
                <!-- <div class="radio_btn"> -->
                    <input type="radio" id="btn3" v-model="activeComponent" value="faqVue" /> 
                    <label class="hidden" id="btn3">FAQ</label>
                <!-- </div> -->  
                <!-- <div class="radio_btn"> -->
                    <input type="radio" id="btn3" v-model="activeComponent" value="profileVue" /> 
                    <label class="hidden" id="btn3">Профиль</label>
                <!-- </div> --> 
            </div>
            <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
            <div class="choose" v-else>
                <!-- <div class="radio_btn"> -->
                    <input type="radio" id="btn1" v-model="activeComponent" value="authVue" /> 
                    <label class="hidden" for="btn1">Авторизация</label>
                <!-- </div> -->
                
                <!-- <div class="radio_btn"> -->
                    <input type="radio" id="btn2" v-model="activeComponent" value="registrationVue" /> 
                    <label class="hidden" id="btn2">Регистрация</label>
                <!-- </div> -->
                
                <!-- <div class="radio_btn"> -->
                    <input type="radio" id="btn3" v-model="activeComponent" value="forgotVue" /> 
                    <label class="hidden" id="btn3">Забыли пароль</label>
                <!-- </div> -->  
            </div>
            

            
    </header>
    
    <transition name="translate" mode="out-in">
      <component :is="activeComponent"></component>
    </transition>
    <br />
    
 </div>
  
</template>


<script>
import registrationVue from './components/registrationVue.vue'
import authVue from './components/authVue.vue'
import forgotVue from './components/forgotVue.vue';
import calendarVue from './components/calendarVue.vue';
import faqVue from './components/faqVue.vue';
import goalsVue from './components/goalsVue.vue';
import profileVue from './components/profileVue.vue';
export default {
    name: 'app',
    data(){
        return{activeComponent:"authVue",};
    },
    components:{registrationVue,authVue,forgotVue,calendarVue,faqVue,goalsVue,profileVue},
//     created: function () {
//     this.$http.interceptors.response.use(undefined, function (err) {
//       return new Promise(function (resolve, reject) {
//         if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
//           this.$store.dispatch("logout")
//         }
//         throw err;
//       });
//     });
//   }
    // computed : {
    //   isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    // },
    // methods: {
    //   logout: function () {
    //     this.$store.dispatch('logout')
    //     .then(() => {
    //       this.$router.push('/login')
    //     })
    //   }
    // },
};

</script>

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
.choose{display: flex; align-items: center;}
.radio_btn {
	display: inline-block;
	margin-right: 10px;
}
input[type=radio] {
	height: 25px;
}
label {
	display: inline-block;
	cursor: pointer;
	padding: 0px 15px;
	line-height: 34px;
	border: 1px solid #999;
	border-radius: 6px;
	user-select: none;
}
 
/* Checked */
 input[type=radio]:checked + label {
	background: #ffe0a6;
}
 
/* Hover */
 label:hover {
	color: #666;
}
.translate-enter-active,
  .translate-leave-active {
    transition: all 0.5s ease;
  }
  
  .translate-enter-from,
  .translate-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }

</style>
