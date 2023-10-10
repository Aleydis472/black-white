import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },

  {
    path: 'iniciar-sesion', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },

  {
    path: 'carro', loadChildren: () => import('./pages/carrito/carrito.module').then(m => m.carritoModule)
  },
  {
    path: 'detalle', loadChildren: () => import('./pages/buy-clothing/buy-clothing.module').then(m => m.BuyClothingModule)
  },

  {
    path: 'ropa',
    children: [
      { path: 'mujer', loadChildren: () => import('./pages/womens-clothing/womens-clothing.module').then(m => m.WomensClothingModule) },
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
