<template>
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
           <label>Username</label><br>
          <input type="text">
        </div>
        <div>
          <label>Password</label><br>
          <input type="password">
        </div>
        <div>
          <button @click="login">Submit</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
       credential: {
         userName: '',
         password: ''
       }
    }
  },
  methods: {
    login(){

    }
  }
}
</script>

<style scoped>

</style>