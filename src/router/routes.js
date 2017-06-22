import home from 'views/home/home'
import manage from 'views/manage/manage'
import libraryInfo from 'views/library_info/library_info'
import lessonInfo from 'views/lesson_info/lesson_info'
import examSummary from 'views/exam_summary/exam_summary'
import studentManage from 'views/student_manage/student_manage'
import examManage from 'views/exam_manage/exam_manage'
import gradeDetail from 'views/grade_details/grade_details'
import superManage from 'views/super_manage/super_manage'
export default [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/manage',
        name: 'manage',
        redirect: '/manage/exam-summary',
        component: manage,
        children: [
            {
                path: 'library-info',
                name: 'libraryInfo',
                component: libraryInfo
            },
            {
                path: 'exam-manage',
                name: 'examManage',
                component: examManage
            },
            {
                path: 'student-manage',
                name: 'studentManege',
                component: studentManage
            },
            {
                path: 'exam-summary',
                name: 'examSummary',
                component: examSummary
            },
            {
                path: 'lesson-info',
                name: 'lessonInfo',
                component: lessonInfo
            },
            {
                path: 'grade-details',
                name: 'gradeDetails',
                component: gradeDetail
            },
            //     {
            //         path: '/subject-library',
            //         name: 'subjectLibary',
            //         component: ''
            //     },
            //     ,
            {
                path: 'super-manage',
                name: 'memeberManage',
                component: superManage
            }
            //     {
            //         path: '/exam-grade',
            //         name: 'examGrade',
            //         component: ''
            //     },

        ]
    }
]
