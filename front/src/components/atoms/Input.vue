<template>
     <div :class="['hba-a-input', {'-fill': model !== ''}, {'-error': error !== ''}]">
        <label :for="id"> {{ text }} </label>
        <input ref="input" type="text" :id="id" v-model="model">
    </div>
</template>

<script>
export default {
    name: 'Input',
    data() {
        return {
            model: '',
        }
    },
    props: {
        text: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
        error: {
            type: String,
            default: '',
        },
    },    
}
</script>