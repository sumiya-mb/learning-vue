<template>
  <div id="app">
    @{{ user.username }} - {{ fullName }}
    <strong>Followers</strong>{{ followers }}
    <button @click="followUser">Follow</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  // State
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: '_AaaaaBbbbb',
        firstName: 'Aaaaa',
        lastName: 'Bbbbb',
        email: 'aaaaabbbbb@gmail.com',
        isAdmin: true
      }
    }
  },
  watch: {
    followers(newValue, oldValue) {
      if (oldValue < newValue) {
        console.log(`${this.user.username} has gained a follower!`)
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`
    }
  },
  // A method is just a function bound to the Vue instance. It will only be evaluated when you explicitly call it. You use methods to react to events which happen in the DOM, or you can call them from elsewhere within your component
  methods: {
    followUser() {
      this.followers++;
    }
  },
  // Run once when the component is mounted
  mounted() {
    console.log('Page mounted')
    this.followUser();
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
