import { RouterModule, Routes } from '@angular/router';
import { AboutSerieComponent } from './about-serie/about-serie.component';
import { HomeChartersComponent } from "./home-charters/home-charters.component";
import { NgModule } from '@angular/core';

 

export const routes: Routes = [
    {path:'', redirectTo:'charters', pathMatch:'full'},
    {path:'charters', component:HomeChartersComponent},
    {path:'about', component: AboutSerieComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
   })
   export class AppRoutingModule { }