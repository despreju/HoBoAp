<template>
    <div class="hba-t-home">
        <Button class="hba-t-home__logoutButton" text='Se déconnecter' size="large" @click='_logout'/>
        <Profile>
            <template v-slot:age="{ userTest }">
                {{ userTest.name }}
            </template>
            <template v-slot:name="{ userTest }">
                {{ userTest.age }}
            </template>
        </Profile>
    </div>
</template> 

<script>
import { mapActions } from 'vuex';

import Button from '../atoms/Button.vue';
import Profile from '../organisms/Profile';

export default {
    name: 'Home',
    components: { Profile, Button },    
    data() {
        return {            
            bool: false
        }
    },

    methods: {
        ...mapActions({
            logout: 'credentials/logout',
        }),
        _logout() {
            this.logout();
            this.$router.push('/login');
        }
    },
}
</script>