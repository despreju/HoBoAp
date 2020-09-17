<template>
    <div class="profile">
        <img class="profile_pic" src="../assets/profile_pic.png"/>
        <div class="user_infos">
            <h3>{{ user.firstname }}<strong>{{ user.name }}</strong></h3>
            <h4>{{ user.mail }}</h4>
            <h4>{{ user.phone }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    props: ['user'],    
    methods: {
        
    }
}
</script>

<style>
*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.profile {
    position: relative;
    width: 500px;
    padding: 25px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 1px 0 1px 0px #5260ad, -1px 0 1px 0px #5260ad;
}

.profile_pic {
    position: absolute;
    width: 200px;
    border-radius: 999px; 
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;   
    top: -100px;
    border: 10px solid #fff;
}

.profile > .user_infos {
    margin-top: 80px;
}
.profile > .user_infos h3 strong {
    color: #5260ad;
    font-weight: 900;
    margin-left: 10px;
}

.profile > .user_infos h3 {
    color: #666;
    font-size: 28px; 
    font-weight: 500;
    margin-bottom: 30px;
}

.profile > .user_infos h4 {
    font-style: italic;
    margin-bottom: 10px;
}
</style>