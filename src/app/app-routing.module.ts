import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'iniciar-sesion', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },

  {
    path: 'ropa',
    children: [
      { path: 'mujer', loadChildren: () => import('./pages/womens-clothing/womens-clothing.module').then(m => m.WomensClothingModule) },
    ]
  },
  {
    path: 'ropa',
    children: [
      { path: 'compras', loadChildren: () => import('./pages/buy-clothing/buy-clothing.module').then(m => m.BuyClothingModule) },
    ]
  },
  { path: '', redirectTo: '/iniciar-sesion', pathMatch: 'full' },
  { path: '**', redirectTo: '/iniciar-sesion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
