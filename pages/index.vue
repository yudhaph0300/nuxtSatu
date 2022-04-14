<template>
  <div class="home">
    <v-card
    v-for="(news, index) in newsGroup" :key="index"
    class="mx-auto my-10"
    max-width="80%"
    >
    
      <v-img
        height="500"
        :src="news.urlToImage"
      ></v-img>

      <v-card-title>{{ news.title }}</v-card-title>

      <v-card-text>
        <div
        v-if="newsGroup[index].author === null"
        class="my-1 text-subtitle-2">
          Author  : Anonymous
        </div>

        <div
        v-else
        class="my-1 text-subtitle-2">
          Author  : {{ news.author }}
        </div>

        <div>{{ news.publishedAt }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <v-btn
          class="px-5"
          color="deep-purple"
          dark large
          :to="'/detail/id' + index"
        >
          read this news          
          
        </v-btn>
      </v-card-actions>
    </v-card>


  </div>
</template>

<script>
export default {
  name: 'HomeView',
  
  computed: {
    newsGroup() {
      return this.$store.state.newsList
    }
  }
}
</script>