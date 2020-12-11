<template> 
    <button :class="[`hba-a-button -${size}`]" @click="$emit('click')">
      {{ text }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: 'medium',
            validator(value) {
                return ['small', 'medium', 'large'].indexOf(value) !== -1;
            },
        },
    }
}
</script>
