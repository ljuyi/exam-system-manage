export default {
    'setLibrary': (({commit}, obj) => {
        commit('setLibrary', obj)
    }),
    'resetLibrary': (({commit}) => {
        commit('resetLibrary')
    })
}
