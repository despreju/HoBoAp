<template>
    <div class="hba-m-profile">
        <Card>
            <Field title="E-Mail" :value="user.mail"/>
            <Field title="Nom" :value="user.name"/>
            <Field title="Habilitation" :value="user.level"/>
        </Card>
        
        <span style="margin-top: 500px; background-color: white;">
            <slot name='firstname' v-bind:userTest="userTest">
                {{ userTest.firstname }}
            </slot>
        </span>
        <span style="margin-top: 500px; background-color: white;">
            <slot name='name' v-bind:userTest="userTest">
                {{ userTest.name }}
            </slot>
        </span>
        <span style="margin-top: 500px; background-color: white;">
            <slot name='age' v-bind:userTest="userTest">
                {{ userTest.age }}
            </slot>
        </span>
    </div>
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
            userTest: {
                firstname: 'Julien',
                name: 'DESPREZ',
                age: '31',
            }
        }
    },
    computed: {
        ...mapGetters({
            user: 'credentials/user',
        }),
    },        
}
</script>