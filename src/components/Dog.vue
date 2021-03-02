<template>
    <v-card color="grey lighten-2">
        <v-img  :src="pet.img" height="170px"  crossorigin="anonymous"> </v-img>
        <v-card-title>
            <div>
            <h3>{{pet.name}}</h3>
            <p>{{pet.breed}}</p>
            </div>
        </v-card-title>
        <v-btn @click="addFavorites(pet)" >Add To Favorites</v-btn>
    </v-card>
</template>

<script>
import axios from "../plugins/axios";
import { mapActions } from "vuex";

export default {
    name: "Dog",

    props: {
        pet: {
            type: Object 
        }
    },
    created(){
        axios.get("/breed/"+this.pet.breed+"/images/random")
            .then (res => {
                this.pet.img = res.data.message;
                //console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }, 
    methods: {
        onClickFavorite() {
            //this.$store.dispatch('addFavorites', this.pet);
            //this.$store.commit('addToFavorites', this.pet);
        },
        ... mapActions(['addFavorites'])
    }

}
</script>

<style>

</style>