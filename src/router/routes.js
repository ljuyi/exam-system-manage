import home from 'views/home/home'
import manage from 'views/manage/manage'
export default [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/manage',
        name: 'manage',
        component: manage
    }
]
