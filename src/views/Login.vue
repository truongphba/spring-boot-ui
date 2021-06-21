<template>
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
           <label>Username</label><br>
          <input type="text" v-model="credential.userName">
        </div>
        <div>
          <label>Password</label><br>
          <input type="password" v-model="credential.password">
        </div>
        <div>
          <button type="button" @click="login">Submit</button>
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
      fetch('http://127.0.0.1:8081/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.credential)
      })
    }
  }
}
</script>

<style scoped>

</style>