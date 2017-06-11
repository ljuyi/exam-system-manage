import Vue from 'vue';
import Router from 'vue-router/dist/vue-router.js';
import routes from './routes'

Vue.use(Router);

const router = new Router({
    // 关闭hash模式
    // hashbang: false, vue2.x不再支持
    // 开启html5history模式
    // history: true(vue1.x)
    mode: 'history',
    // v-link激活时添加的class，默认是v-link-active
    linkActiveClass: 'active',
    routes
})

// router.beforeEach(({to, next}) => {
//     // 每次调整路由时打印，便于调试
//     console.log(arguments[0].option)
//     console.log('------------->' + to.name);
//     next();
// })

export default router;
