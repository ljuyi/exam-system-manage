import home from 'views/home/home'
import manage from 'views/manage/manage'
import examManage from 'views/examManage/examManage';
export default [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/manage',
        name: 'manage',
        component: manage,
        children: [
            {
                path: 'exam-manage',
                name: 'examSummary',
                component: examManage
            }
        ]
        //     {
        //         path: '/student-manage',
        //         name: 'studentManege',
        //         component: ''
        //     },
        //     {
        //         path: '/lesson-info',
        //         name: 'lessonInfo',
        //         component: ''
        //     },
        //     {
        //         path: '/subject-library',
        //         name: 'subjectLibary',
        //         component: ''
        //     },
        //     {
        //         path: '/exam-manage',
        //         name: 'examManage',
        //         component: ''
        //     },
        //     {
        //         path: '/member-manage',
        //         name: 'memeberManage',
        //         component: ''
        //     },
        //     {
        //         path: '/exam-grade',
        //         name: 'examGrade',
        //         component: ''
        //     },
        //     {
        //         path: '/grade-details',
        //         name: 'gradeDetails',
        //         component: ''
        //     }
        // ]
    }
]
