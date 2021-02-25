<template>
  <v-container>
      <v-layout wrap>
        <v-flex xs12 sm4 md3 v-for= "pet in dogs" :key="pet.breed">
          <app-dog :pet="pet"></app-dog>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import { Dogs } from  "../data/dogs";
import Dog from '../components/Dog';

export default {
  name: "Pets",
  components: {
    appDog: Dog, 
  }, 
  data () {
    return {
      dogs: Dogs
    }
  }, 


}
</script>

<style>

</style>