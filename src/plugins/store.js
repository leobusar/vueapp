import Vue from 'vue'; 
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        favorites: [
            {
                name: 'Duke',
                breed: 'doberman',
                img: 'https://images.dog.ceo/breeds/doberman/n02107142_4653.jpg',
            },
            {
                name: 'Lily',
                breed: 'malamute',
                img: 'https://images.dog.ceo/breeds/malamute/n02110063_1104.jpg',
            },
            {
                name: 'Winston',
                breed: 'pug',
                img: 'https://images.dog.ceo/breeds/pug/n02110958_15626.jpg',
            },            
        ],
    }
});