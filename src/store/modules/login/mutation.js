// import { LOGIN, LOGOUT } from 'store/types';

export default {
    'LOGIN'(state, obj) {
        state.name = obj.name;
        state.psd = obj.psd;
        state.type = obj.type;
    },
    'LOGOUT'(state, obj) {
        state.name = '';
        state.psd = '';
        state.type = '';
    }
}
