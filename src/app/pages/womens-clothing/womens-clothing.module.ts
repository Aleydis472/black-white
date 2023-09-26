import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomensClothingComponent } from './womens-clothing.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from 'src/app/core/componets/header/header.module';
import { FooterModule } from 'src/app/core/componets/footer/footer.module';
import { MenuModule } from 'src/app/core/componets/menu/menu.module';


const routes: Routes = [{ path: '', component: WomensClothingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class WomensClothingRoutingModule { }

@NgModule({
  declarations: [WomensClothingComponent],
  imports: [
    CommonModule,
    WomensClothingRoutingModule,
    HeaderModule,
    FooterModule,
    MenuModule
  ]
})
export class WomensClothingModule { }
