import { Routes } from '@angular/router';
import { Login } from './signup/login/login';
import { Signup } from './signup/signup/signup';

import { Class } from './class/class';
import { ClassCode } from './signup/class-code/class-code';
import { Sidebar } from './Student-dashobard/sidebar/sidebar';
import { AddNotes } from './Student-dashobard/add-notes/add-notes';
import { AllClassess } from './Student-dashobard/all-classess/all-classess';
import { ViewStudents } from './Student-dashobard/view-students/view-students';
import { GetMyNotes } from './Student-dashobard/get-my-notes/get-my-notes';
import { GetAllStudents } from './Student-dashobard/get-all-students/get-all-students';
import { AdminSidebar } from './admin-dashboard/admin-sidebar/admin-sidebar';
import { AllAdminClassess } from './admin-dashboard/all-admin-classess/all-admin-classess';
import { ViewStudentAdmin } from './admin-dashboard/view-student-admin/view-student-admin';
import { AllAdminStudentNotess } from './admin-dashboard/all-admin-student-notess/all-admin-student-notess';

export const routes: Routes = [
  {
    path: 'signup',
    component: Signup,
  },
  {
    path: '',
    component: Login,
  },

  // {
  //   path: 'class',
  //   component: Class,
  // },

  // {
  //   path: 'admin',
  //   component: Data,
  //   children: [
  //     {
  //       path: '',
  //       component: Data,
  //     },
  //     {
  //       path: 'messages-detials/:id',
  //       component: UserDetails,
  //     },
  //   ],
  // },

  {
    path: 'admin',
    component: Sidebar,
    children: [
      {
        path: 'Add-Notes',
        component: AddNotes,
      },
      {
        path: 'All-classess',
        component: AllClassess,
      },
      {
        path: 'class-code',
        component: ClassCode,
      },
      {
        path: 'view-student/:classId',
        component: ViewStudents,
      },
      {
        path: 'GetMyNotes',
        component: GetMyNotes,
      },
      {
        path: 'get-all-student/:studentId',
        component: GetAllStudents,
      },
    ],
  },

  {
    path: 'class',
    component: AdminSidebar,
    children: [
      {
        path: 'class',
        component: Class,
      },
      {
        path: 'get-admin-classess',
        component: AllAdminClassess,
      },
      {
        path: 'view-student-admin/:id',
        component: ViewStudentAdmin,
      },
      {
        path: 'AllAdminStudentNotess/:studentId/:classId',
        component: AllAdminStudentNotess,
      },
    ],
  },
];
