<template>
    <div class="login">
        <form class="formBloc">
            <h3><strong>Identifiez</strong>-vous</h3>

            <div class="formGroup">
                <label for="user">Utilisateur</label>
                <input type="text" id ="user">
            </div>
 
            <div class="formGroup">
                <label for="password">Mot de passe</label>
                <input type="password" id ="password">
            </div>

            <div class="formGroup">
                <input type="submit" value="LOGIN" class="buttonSub" v-on:click="toggleLogin">                
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: ['isLog', 'toggleLogin'],
    mounted() { 
        buildEffect() 
    },
    methods: {
        login: function () {
            console.log('test');
        }
    }
}

const buildEffect = () => { 
    const inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length ; i++) {    
        let field = inputs[i];    
        field.addEventListener('input', function (e) {  
            console.log('test');  
            console.log(e);
            if (e.target.value != "") {
                console.log(e.target.parentNode.classList);
                e.target.parentNode.classList.add("fill");
            } else if (e.target.value == "") {
                console.log(e.target.parentNode.classList);
                e.target.parentNode.classList.remove("fill");
            }
        })
    }
}
</script>

<style>
*, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.login {
    width: 500px;
    height: auto;
    padding: 25px;
    background: #fff;
    border-radius: 3px;
}

.login h3 strong {
    color: #5260ad;
    font-weight: 900;
}

.formBloc h3 {
    color: #666;
    font-size: 28px; 
    font-weight: 500;
    margin-bottom: 45px;
}

.formBloc .formGroup {
    position: relative;
    display: flex;
    margin-bottom: 50px;
}

.formBloc .formGroup label {
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translateY(-50%);
    color: #aaa;
    font-size: 20px;
    transition: 0.2s ease-in-out;
}

.formBloc .formGroup input {
    display: block;
    width: 100%;
    padding: 10px 0px;
    border: none;
    outline: none;
    background: none;
    border-bottom: 2px solid #aaa;
    font-size: 20px;
    transition: 0.2s ease-in-out;
}

.formGroup:nth-child(4) {
    justify-content: center;
}

.formBloc .formGroup .buttonSub {
    display: block;
    width: auto;
    padding: 15px 60px;
    border: 3px solid #8b97d7;
    border-radius: 999px;
    background-image: linear-gradient(to right, transparent 50%, #5260ad 50%, #8b97d7);
    background-size: 200%;
    color: #8b97d7;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
}

.formBloc .formGroup .buttonSub:hover {
    color: #fff;
    background-position: 100%;
    border: 3px solid #fff;
}

.formBloc .formGroup:focus-within label, 
.formBloc .formGroup.fill label {
    top: 0px;
    transform: translateY(-100%);
    color:#8b97d7;
}

.formBloc .formGroup:focus-within input, 
.formBloc .formGroup.fill input {
    border-bottom-color: #8b97d7;
}

</style>