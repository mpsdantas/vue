<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Navbar</a>
        <button class="navbar-toggler" type="button" @click="toggle">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{show: isOpen}">
            <Nav></Nav>
        </div>
    </nav>
</template>

<script>
import Nav from './Nav'
export default {
  name: 'Navbar',
  data () {
    return {
        isOpen:true
    }
  },
  components:{Nav},
  methods:{
      toggle(){
          this.isOpen = !this.isOpen
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>