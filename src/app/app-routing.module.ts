import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CityhighComponent } from "./cityhigh/cityhigh.component";
import { SportsComponent } from "./sports/sports.component";
import { HomeComponent } from './home/home.component';
import { FactsComponent } from './facts/facts.component';


const routes: Routes = [

  {path:"", component: HomeComponent},
  {path:'Sports_Centers', component: SportsComponent},
  {path:'City_Highlights', component: CityhighComponent},
  {path:'Ageing_Facts ', component: FactsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

