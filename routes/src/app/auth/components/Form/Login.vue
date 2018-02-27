<template>
  <div class="container">
    <div class="row">
      <div class="offset-md-2 col-md-8">
        <form>
          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="user.email" class="form-control" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Senha</label>
            <input type="password" v-model="user.password" class="form-control" placeholder="Password">
          </div>
          <button @click="doLogin" :disabled="!isValid" type="submit" class="btn btn-primary btn-block">Cadastrar</button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import {isEmpty} from 'lodash'
export default {
  name: 'LoginForm',
  data () {
    return {
      user:{
        email:'',
        password:''
      }
    }
  },
  computed:{
    isValid(){
      const user = this.user
      return !isEmpty(user.email) && !isEmpty(user.password)
    }
  },
  methods: {
    doLogin() {
      //this.$router.push('/')
      const user = this.user
      this.$store.dispatch('attemptLogin',{...user})
    }
  }
}
</script>

<style>
</style>
