<template>
  <div class="hba-a-field">
      <div class="hba-a-field__title">{{ title }} :</div>
      <div class="hba-a-field__value">{{ value }}</div>   
      <div style="background-color: white;" @click="list.push(9)"> {{list }}</div>     
      <div style="background-color: white;" @click="bool = !bool"> {{ bool }}</div>  
  </div>
  
</template>

<script>
export default {
    name: 'Field',
    props: {
        title: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
    },
    inject: ['list', 'bool'],
}
</script>
