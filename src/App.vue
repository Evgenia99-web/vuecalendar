<template>

 <div id="app">
    <label>
        <input type="radio" v-model="activeComponent" value="authVue" /> Авторизация
    </label>
    <label>
        <input type="radio" v-model="activeComponent" value="registrationVue" /> Регистрация
    </label>
    <transition name="translate" mode="out-in">
      <component :is="activeComponent"></component>
    </transition>
    <br />
    
 </div>
  
</template>


<script>
import registrationVue from './components/registrationVue.vue'
import authVue from './components/authVue.vue'
export default {
    name: 'app',
    data(){
        return{activeComponent:"authVue",};
    },
    components:{registrationVue,authVue},
};

</script>

<style scoped>
*{margin: 0;padding: 0;}
body{
    height: 100vh;
    font-family: 'Inter', sans-serif;
}
.translate-enter-active,
  .translate-leave-active {
    transition: all 0.5s ease;
  }
  
  .translate-enter-from,
  .translate-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

</style>
