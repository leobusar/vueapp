<template>
  <div class="myform">
      <div class="text-xs-center" v-if="submitted">
          <h2>Thank you  for you interest</h2>
          <div class="details">
              <h3>Customer details</h3>
              <p><strong>Name:</strong> {{name}} </p>
              <p><strong>Email:</strong> {{email}} </p>
              <p><strong>Phone:</strong> {{phone}} </p>
          </div>
      </div>
      <v-form v-else v-model="valid">
          <v-text-field label="Name" :rules="nameRules" v-model="name"></v-text-field>
          <v-text-field label="Email" v-model="email"></v-text-field>
          <v-text-field label="Phone" v-mask="'(###) ###-####'" :rules="phoneRules" v-model="phone"></v-text-field>
          <v-btn @click="submit" :disabled="!valid">Submit</v-btn>
      </v-form>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'; 

export default {
    directives: {
        mask
    },
    data() {
        return {
            name: "", 
            email: "", 
            phone: "", 
            submitted: false, 
            valid: true, 
            nameRules: [
                name => !!name || "Name is required", 
                name => name.length > 2 || "Name must be longer than 2 chars"
            ],
            emailRules: [
                (email) => !!email || 'Email is required',
                (email) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) || 'Email must be valid',
            ],
            phoneRules : [
                phone => !!phone || "phone is required", 
                phone => phone.length >= 7 || "phone must be at least 7 digits"                
            ]
        }
    }, 
    methods: {
        submit(){
            //console.log(this.name, this.phone, this.email);
            this.submitted = true;
        }
    }

}
</script>

<style>
 .myform {
     padding: 40px; 
     text-align: center;
 }
 .details {
     padding-top: 30px;
 }
</style>