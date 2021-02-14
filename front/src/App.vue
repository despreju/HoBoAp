<template>
  <div id="app">

      
    <transition name="fade">
      <div class="home" v-if='isLog==true'>
        <div class="actions">
          <Action v-bind:msg="'Voir le planning'" v-bind:side="'left'"/>          
        </div>
        <Profile v-bind:user="user"/>
        <div class="actions">
          <Action v-bind:msg="'Texte court'" v-bind:side="'right'"/>
          <Action v-bind:msg="'Un texte pas très long'" v-bind:side="'right'"/>
          <Action v-bind:msg="'Une histoire abominablement longue'" v-bind:side="'right'"/>
        </div>
      </div>
    </transition>
    
  <transition name="fade" mode="out-in"><router-view></router-view></transition>

  </div>
</template>

<script> 
import store from './store/index';
import { mapActions } from 'vuex';

export default {    
    name: 'App',
    store,
    data() {
      return {
        user: {
          name: "Desprez",
          firstname: "Julien",
          mail: "juliendesprez1@gmail.com",
          age: 30,
          phone: "06 29 69 27 80"          
        },
        isLog: false
      }
    },
    methods: {
      ...mapActions({
          initProfile: 'credentials/initProfile',
      }),
    },
    created() {       
      this.initProfile();
    },
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%; 
}

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%; 
}

#app::after {
  content: "";
  width: 100%;
  height: 100%;
  background-image: url("./assets/fond.png");
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.login {
  margin: auto;
}

.home {
  position: relative;
  margin: auto;
  display: flex;
}

.profile {
  z-index: 2;
}

.actions {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

</style>
