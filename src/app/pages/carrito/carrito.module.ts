import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './carrito.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from 'src/app/core/componets/header/header.module';
import { FooterModule } from 'src/app/core/componets/footer/footer.module';
import { MenuModule } from 'src/app/core/componets/menu/menu.module';


const routes: Routes = [{ path: '', component: CarritoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class CarritoRoutingModule { }

@NgModule({
  declarations: [CarritoComponent],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    HeaderModule,
    FooterModule,
    MenuModule
  ]
})
export class carritoModule { }
