<template>
  <form class="create-post-panel" @submit.prevent="createNewPost"
        :class="{'--exceeded':newPostCharacterCount > 180}">
    <label for="newPost"><strong>New Post</strong> ({{ newPostCharacterCount }}/180)</label>
    <textarea name="" id="newPost" rows="4" v-model="newPostContent"></textarea>

    <div class="create-post-panel__submit">
      <div class="ccreate-post-type">
        <label for="newPostType"><strong>Type: </strong></label>
        <select name="" id="newPostType" v-model="selectedPostType">
          <option :value="option.value" v-for="(option, index) in postTypes" :key="index">
            {{ option.name }}
          </option>
        </select>
      </div>

      <button>Post</button>

    </div>
  </form>
</template>

<script>
export default {
  name: 'CreatePostPanel',
  data() {
    return {
      newPostContent: '',
      selectedPostType: 'instant',
      postTypes: [
        {value: 'draft', name: 'Draft'},
        {value: 'instant', name: 'Instant'}
      ],
    }
  },
  computed: {
    newPostCharacterCount() {
      return this.newPostContent.length;
    }
  },
  methods: {
    createNewPost() {
      if (this.newPostContent && this.selectedPostType !== 'draft') {
        this.user.posts.unshift({
          id: this.user.posts.length + 1,
          content: this.newPostContent
        })
      }
      this.newPostContent = ''
    }
  },
}
</script>

<style lang="scss" scoped>
.create-post-panel {
  margin-top: 10px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  textarea {
    border: 1px solid #DFE3E8;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .create-post-panel__submit {
    display: flex;
    justify-content: space-between;

    .create-post-type {
      padding: 10px 0;
    }

    button {
      padding: 5px 20px;
      margin: auto 0;
      border-radius: 5px;
      border: none;
      background-color: deeppink;
      color: white;
      font-weight: bold;
    }
  }

  &.--exceeded {
    color: red;
    border-color: red;

    .create-post-panel__submit {
      button {
        background-color: red;
        color: white;
      }
    }
  }
}
</style>
