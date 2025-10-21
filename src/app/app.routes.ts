import { Routes } from '@angular/router';
import { Dashboard } from './Component/dashboard/dashboard';
import { Login } from './Component/login/login';
import { register } from 'module';
import { Register } from './Component/register/register';
import { Pagina1 } from './Component/pagina1/pagina1';
import { Pagina2 } from './Component/pagina2/pagina2';
import { Pagina3 } from './Component/pagina3/pagina3';

export const routes: Routes = [
    {path: '' ,  component: Dashboard, children:[
        {path: '' , redirectTo: 'pagina1' , pathMatch: 'full'},
        {path: 'pagina1' , component: Pagina1 },
        {path: 'pagina2' , component: Pagina2 },
        {path: 'pagina3' , component: Pagina3 },
]},
    {path: 'login' , component: Login},
    {path: 'register' , component: Register},
];
