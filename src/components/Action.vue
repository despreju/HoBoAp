<template>
    <div :class="['action', side]">  
        <p>{{ msg }}</p>      
        <i class="far fa-calendar-plus"></i>
    </div>
</template>

<script>
export default {
    name: 'Action',
    props: ['msg', 'side']
}
</script>

<style>
*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.action {
    position: relative;
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
    height: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 10px;
    padding-right: 80px;
    border-radius: 5px;
    background-color: #fff;
    color: #5260ad;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out;
    border: 1px solid grey;
}

.action:hover {    
    color: #fff;
    background-color: #5260ad;
}

.action p {
    white-space: nowrap;
}

.action.right {
    margin-left: calc(-100% + 75px);
}

.action.left {
    margin-left: calc(100% - 75px);

}
.action.right:hover {
    margin-left: 0px;
}

.action.left:hover {
    margin-left: 0px;
}

.action.right i {
    position: absolute;
    right: 20px;
    font-size: 40px;
}
    
</style>