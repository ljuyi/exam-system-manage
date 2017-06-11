// import { LOGIN, LOGOUT } from 'store/types'

export default {
    'LOGIN': (({commit}, obj) => {
        commit('LOGIN', obj);
    }),
    'LOGOUT': (({commit}) => {
        commit('LOGOUT');
    })
}
