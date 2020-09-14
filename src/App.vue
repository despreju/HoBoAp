<template>
  <div id="app">

      <Login v-if='isLog==false' v-bind:toggleLogin="toggleLogin" v-bind:isLog="isLog"/>

    <transition name="fade">
      <Profile v-if='isLog==true'/>
    </transition>
    <transition name="fade">
      <div class="actions" v-if='isLog==true'>
        <Action v-bind:msg="'Voir le planning'"/>
        <Action v-bind:msg="'Faire une réservation'"/>
        <Action v-bind:msg="'Informations et détails'"/>
      </div>
    </transition>
  </div>
</template>

<script> 
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import Action from './components/Action.vue'

export default {
    name: 'App',
    data() {
      return {
        user: "guest",
        isLog: false
      }
    },
    components: {
      Login, Profile, Action
    },
    methods: {
      toggleLogin: function () {
        this.isLog = !this.isLog;
      }
    }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%; 
}

#app {
  position: relative;
  display: flex;
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

.actions, .profile {
  margin-top: auto;
  margin-bottom: auto;
}

.profile {
  margin-left: auto;
  margin-right: 50px;
}

.actions {
  margin-left: 50px;
  margin-right: auto;
  width: 500px;
  height: 50%;
}

.action {
  margin-bottom: 20px;
}

</style>
