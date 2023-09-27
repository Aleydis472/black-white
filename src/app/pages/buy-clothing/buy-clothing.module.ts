import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyClothingComponent } from './buy-clothing.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from 'src/app/core/componets/header/header.module';
import { FooterModule } from 'src/app/core/componets/footer/footer.module';
import { MenuModule } from 'src/app/core/componets/menu/menu.module';

const routes: Routes = [{ path: '', component: BuyClothingComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],

})
export class BuyClothingRoutingModule { }

@NgModule({
    declarations: [BuyClothingComponent],
    imports: [
        CommonModule,
        BuyClothingRoutingModule,
        HeaderModule,
        FooterModule,
        MenuModule
    ]
})
export class BuyClothingModule { }