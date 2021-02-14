<template>
    <div class="hba-t-registration">
        <Card>
            <h3 class="hba-t-registration__title"><strong>Nouveau</strong>compte</h3>      
            <div class="hba-t-registration__form">
                <Input class="hba-t-registration__form__mailInput" id='mail' text='Mail' :error="error"/>
                <Input class="hba-t-registration__form__passwordInput" id='password' text='Mot de passe' :error="error"/>
                <Input class="hba-t-registration__form__confirmPasswordInput" id='confirm_password' text='Confirmez le mot de passe' :error="error"/>
                <Input class="hba-t-registration__form__nameInput" id='name' text='Prénom' :error="error"/>
            </div>
            <Button class="hba-t-registration__registrationButton" text='Créer mon compte' size="large" @click='register'/>
        </Card>
    </div>
</template>

<script>
import Card from '../atoms/Card';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

export default {    
    name: 'Registration',
    components: { Card, Button, Input },    
    data() {
        return {
            error: "",
        }
    },
    methods: {
        register() {
            this.$router.push('login');
        },
    },
}
</script>