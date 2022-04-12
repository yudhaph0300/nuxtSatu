<template>
  <div class="home">
    
    <v-app-bar tile dark elevation="2" color="#332e3f">
      <h3>News App</h3>
      <v-spacer></v-spacer>

      <div class="category">
        <v-btn class="mr-2" color="brown lighten-5" light rounded elevation="0" @click="setCategory('bitcoin')">bitcoin</v-btn>
        <v-btn class="mr-2" color="brown lighten-5" light rounded elevation="0" @click="setCategory('putin')">Putin</v-btn>
        <v-btn class="mr-2" color="brown lighten-5" light rounded elevation="0" @click="setCategory('games')">Games</v-btn>
      </div>
      
      <v-col cols="12" sm="6" md="4">
        <v-text-field class="mt-6 ml-2" filled rounded dense append-icon="mdi-magnify"/>
      </v-col>
    </v-app-bar>


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
          color="#332e3f"
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
  },
  mounted() {
    this.$store.dispatch("fetchNews")
  },
  methods: {
    setCategory(keyword) {
      this.$store.dispatch("fetchNews", keyword)
    }
  }
}
</script>