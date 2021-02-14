<template>
  <div class="hba-a-field">
      <div class="hba-a-field__title">{{ title }}:</div>
      <div class="hba-a-field__value">{{ value }}</div>   
  </div>
  
</template>

<script>
export default {
    name: 'Field',
    props: {
        title: {
            type: String,
            default: '<missing_title>',
        },
        value: {
            type: String,
            default: '<missing_value>',
        },
    },
}
</script>
