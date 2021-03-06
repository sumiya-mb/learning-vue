<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ state.user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
        Admin
      </div>
      <div class="user-profile__follower-count">
        <strong>Followers: </strong>{{ followers }}
      </div>
      <CreatePostPanel @add-post="addPost" />
    </div>

    <div class="user-profile__posts-wrapper">
      <PostItem
        v-for="post in state.user.posts"
        :key="post.id"
        :username="state.user.username"
        :post="post"
        @favorite="toggleFavorite"
      />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { users } from '../assets/users'
import PostItem from '../components/Postitem'
import CreatePostPanel from '../components/CreatePostPanel'

export default {
  name: 'UserProfile',
  components: { CreatePostPanel, PostItem },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId)
console.log(userId.value);
    const state = reactive({
      followers: 0,
      user: users[userId.value - 1] || users[1]
    })

    function addPost(post) {
      state.user.posts.unshift({
        id: state.user.posts.length + 1,
        content: post
      })
    }
    return {
      state,
      addPost,
      userId
    }
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






