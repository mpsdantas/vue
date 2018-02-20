<template>
  <div class="container">
    <h2>Confee</h2>
    <!--<pre>{{}}</pre>-->
  </div>
</template>

<script>
import http from '@/http'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  mounted(){
    http.get('https://pokeapi.co/api/v2/pokemon/1/ ')
      .then(response => response.data)
      .then(data =>{
        console.log(data)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
