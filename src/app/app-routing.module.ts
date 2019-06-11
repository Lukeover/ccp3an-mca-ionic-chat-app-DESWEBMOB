import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cinema', loadChildren: './cinema/cinema.module#CinemaPageModule' },
  { path: 'curiosidades', loadChildren: './curiosidades/curiosidades.module#CuriosidadesPageModule' },
  { path: 'esportes', loadChildren: './esportes/esportes.module#EsportesPageModule' },
  { path: 'sala', loadChildren: './sala/sala.module#SalaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
