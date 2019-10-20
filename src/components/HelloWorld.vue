<template>
  <div class="hello">
    <h1>vue app 1</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String
  }
});
</script>

<style scoped>
/*  */
</style>
