import Vue from 'vue';
import Vuex from 'vuex/dist/vuex.js';
import login from './modules/login';
import library from './modules/library';
import dropselect from './modules/dropselect';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login,
        library,
        dropselect
    }
})
