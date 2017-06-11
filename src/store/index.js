import Vue from 'vue';
import Vuex from 'vuex/dist/vuex.js';
import login from './modules/login';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login
    }
})
