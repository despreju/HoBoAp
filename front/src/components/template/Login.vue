<template>
    <div class="hba-t-login">
        <Card>
            <h3 class="hba-t-login__title"><strong>Identifiez</strong>-vous</h3>         
            <Input class="hba-t-login__mailInput" id='mail' text='Mail' :error="error"/>
            <Input class="hba-t-login__passwordInput" id='password' text='Mot de passe' :error="error"/>
            <Button class="hba-t-login__loginButton" text='Se connecter' size="large" @click='_login'/>
            <router-link class="hba-t-login__registerLink" :to="{ name: 'Registration' }">Vous n'avez pas encore de compte ? Cliquez ici</router-link>
        </Card>
    </div>
</template> 

<script>
import { mapActions } from 'vuex';

import Card from '../atoms/Card';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

export default {
    name: 'Login',
    components: { Card, Button, Input },    
    data() {
        return {            
            error: "",
        }
    },
    methods: {
        ...mapActions({
            login: 'credentials/login',
        }),
        _login() {
            this.login();
            this.$router.push('/');
        }
    },
}
</script>