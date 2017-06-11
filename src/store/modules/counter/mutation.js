import {INCREASE, RESET} from 'store/types';

export default {
    [INCREASE](state, obj) {
        state.count ++;
    },
    [RESET](state, obj) {
        state.count = 0;
    }
}
