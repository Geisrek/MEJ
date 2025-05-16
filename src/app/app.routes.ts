import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ServicesComponent } from './component/services/services.component';

export const routes: Routes = [
    {
        path:'',
        
    loadComponent(){
        return import('./component/home/home.component').then((m)=>m.HomeComponent)}
    },
   {
    path:'services',
    component:ServicesComponent
   }
];

  
