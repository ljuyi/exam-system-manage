import Vue from 'vue';
import Vuex from 'vuex/dist/vuex.js';
import counter from './modules/counter';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        counter
    }
})
