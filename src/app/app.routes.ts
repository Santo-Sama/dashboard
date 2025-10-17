import { Routes } from '@angular/router';
import { Dashboard } from './Component/dashboard/dashboard';
import { Login } from './Component/login/login';
import { register } from 'module';
import { Register } from './Component/register/register';

export const routes: Routes = [
    {path: '' , component: Dashboard}
    {path: 'login' , component: Login}
    {path: 'register' , component: Register}
];
