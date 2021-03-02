<template>
  <div>
      <v-list>
          <v-subheader v-if="!favorites.length">Your favorites list is empty</v-subheader>
          <div v-else>
            <v-subheader>My Favorites</v-subheader>
            <v-list-item v-for="(dog, index) in favorites" :key="index">
                <v-list-item-avatar>
                    <img :src="dog.img" alt="samoyed">
                </v-list-item-avatar>
                <v-list-item-content>{{dog.name}}</v-list-item-content>
                <v-list-item-action>
                    <v-icon @click="removeFavorite">delete</v-icon>
                </v-list-item-action>
            </v-list-item> 
            <v-btn to="/form">Adopt</v-btn>         
          </div>

      </v-list>
  </div>
</template>

<script>
export default {
    computed: {
        favorites() {
            return this.$store.state.favorites;
        }
    }, 
    methods: {
        removeFavorite(){}
    }
}
</script>

<style>

</style>