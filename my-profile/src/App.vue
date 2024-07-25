<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0; /* Adjust margin to ensure it doesn't cut off content */
  padding: 0; /* Add padding if necessary */
  min-height: 150vh; /* Ensure the app container takes at least the full viewport height */

}
</style>


