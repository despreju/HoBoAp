<template>
    <Card class="hba-o-profile">
        <div class="hba-o-profile__picture"/>
        <div class="hba-o-profile__infos">
            <Field title="E-Mail" :value="user.mail"/>
            <Field title="Nom" :value="user.name"/>
            <Field title="Habilitation" :value="user.level"/>
        </div>
        <div class="hba-o-profile__logout"/>
    </Card>
</template>

<script>
import { mapGetters } from 'vuex';

import Card from '../atoms/Card'
import Field from '../atoms/Field'

export default {
    name: 'Profile',
    components: { Card, Field },
    data() {
        return { 
        }
    },
    computed: {
        ...mapGetters({
            user: 'credentials/user',
        }),
    },        
}
</script>

<style>
.hba-o-profile__picture {
    position: relative;
    width: 100px;
    height: 100px;
        margin-right: 50px;
}

.hba-o-profile__picture::after {      
    position:absolute;
    content: "";     
    left: 0;
    background-size: cover;
    background-image: url("../../assets/img/profile_pic.png");
    border-radius: 999px;

    width: 100px;
    height: 100px;
}
</style>