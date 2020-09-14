<template>
    <div class="action">  
        {{ msg }}      
    </div>
</template>

<script>
export default {
    name: 'Profile',
    props: ['msg']
}
</script>

<style>
*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.action {
    width: 500px;
    height: 50px;
    padding: 15px 60px;
    border-radius: 999px;
    background-color: #fff;
    background-image: linear-gradient(to right, transparent 50%, #5260ad 50%, #8b97d7);
    background-size: 200%;
    color: #8b97d7;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out;
}

.action:hover {
    color: #fff;
    background-position: 100%;
}
</style>