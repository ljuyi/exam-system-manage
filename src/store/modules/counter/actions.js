import { INCREASE, RESET } from 'store/types';

export default {
    [INCREASE]: (({ commit }) => {
        commit('INCREASE')  // 调用type为INCREASE的mutation
    }),
    [RESET]: (({ commit }) => {
        commit('RESET')   // 调用type为RESET的mutation
    })
}
