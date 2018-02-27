<template>
  <div class="container">
    <h2>Confee [Auth]</h2>
    <Login/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Login from './Form/Login'
export default {
  name: 'auth',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Login
  },
  computed:{
    ...mapGetters(['isLogged'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
