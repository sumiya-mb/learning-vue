<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
      <div class="user-profile__follower-count">
        <strong>Followers: </strong>{{ followers }}
      </div>
      <CreatePostPanel @add-post="addPost" />
    </div>

    <div class="user-profile__posts-wrapper">
      <PostItem
        v-for="post in user.posts"
        :key="post.id"
        :username="user.username"
        :post="post"
        @favorite="toggleFavorite"
      />
    </div>
  </div>
</template>

<script>
import PostItem from '@/components/Postitem'
import CreatePostPanel from '@/components/CreatePostPanel'

export default {
  name: 'UserProfile',
  components: { CreatePostPanel, PostItem },
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: '_AaaaaBbbbb',
        firstName: 'Aaaaa',
        lastName: 'Bbbbb',
        email: 'aaaaabbbbb@gmail.com',
        isAdmin: true,
        posts: [
          { id: 1, content: 'Here is first post.' },
          { id: 2, content: 'Second post here we go.' }
        ]
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
  methods: {
    addPost(post) {
      this.user.posts.unshift({
        id: this.user.posts.length + 1,
        content: post
      })
    }
  },
  mounted() {
    console.log('Page mounted')
    this.followUser()
  }
}
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    margin-bottom: auto;

    h1 {
      margin: 0;
    }

    .user-profile__admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
  }

  .user-profile__posts-wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom: auto;
  }
}
</style>






