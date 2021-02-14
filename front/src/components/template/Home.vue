<template>
    <div class="hba-t-home">
        <Button class="hba-t-home__logoutButton" text='Se déconnecter' size="large" @click='logout()'/>
        <Profile/>
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
            logoutAction: 'credentials/logout',
        }),
        logout() {
            this.logoutAction();
            this.$router.push('/login');
        }
    },
}
</script>