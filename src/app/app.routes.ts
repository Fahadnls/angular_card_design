import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '', title: 'TPG', component: LayoutComponent,
        children: [
            { path: '', title: 'Home - TPG', component: HomeComponent},
         
            // We will remove the following route at the end
            { path: 'temp-menu', title: 'Temp Menu - TPG', loadComponent: () => import('./pages/temp-menu/temp-menu.component').then(c => c.TempMenuComponent) },
        ]
    },

];
