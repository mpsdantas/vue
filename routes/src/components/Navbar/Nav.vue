<template>
    <ul class="navbar-nav ml-auto">
        <router-link :to="{name: 'dashboard.main'}" tag="li" class="nav-item" exact>
            <a class="nav-link">Home</a>
        </router-link>
        <router-link to="/auth" tag="li" class="nav-item">
            <a class="nav-link">Entrar</a>
        </router-link>
    </ul>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
