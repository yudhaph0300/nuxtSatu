<template>
  <v-app dark>
    <v-app-bar tile dark elevation="2" >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <h3 class="ml-4">News App</h3>
      <v-spacer></v-spacer>
      
      <v-col cols="12" sm="6" md="4">
        <v-text-field class="mt-6 ml-2" filled rounded dense append-icon="mdi-magnify"/>
      </v-col>
    </v-app-bar>

     <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
      <v-list-item class="my-2">
          <v-list-item-title>
            <h1>Category</h1>
          </v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item> 
            <v-list-item-title @click="setCategory('games')">Games</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="setCategory('bitcoin')">Bitcoin</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="setCategory('putin')">Vladimir Putin</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => ({
      drawer: false,
      group: null,
  }),
  watch: {
      group () {
        this.drawer = false
      },
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