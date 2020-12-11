<template>
    <div class="hba-t-login">
        <Card>
            <h3 class="hba-t-login__title"><strong>Identifiez</strong>-vous</h3>  
            <form @submit="login">          
                <Input class="hba-t-login__userInput" id='user' text='Utilisateur' :error="error"/>
                <Input class="hba-t-login__passwordInput" id='password' text='Mot de passe' :error="error"/>
                <Button type="submit" class="hba-t-login__loginButton" text='Se connecter' size="large" @click="login"/>
            </form>
            <div class="hba-t-login__registerLink">Vous n'avez pas encore de compte ? Cliquez ici</div>
        </Card>
    </div>
</template> 

<script>
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
        login() {
            this.error = "Mot de passe incorrect"; 
        }
    },
}
</script>