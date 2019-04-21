import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'anal',
    loadChildren: './anal/anal.module#AnalPageModule'
  },
  {
    path: 'detail',
    loadChildren: './detail/detail.module#DetailPageModule'
  },
  {
    path: 'state',
    loadChildren: './state/state.module#StatePageModule'
  },
  {
    path: 'type',
    loadChildren: './type/type.module#TypePageModule'
  },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
