import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from 'src/app/core/componets/header/header.module';
import { FooterModule } from 'src/app/core/componets/footer/footer.module';
import { MenuModule } from 'src/app/core/componets/menu/menu.module';


const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class HomeRoutingModule { }

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    FooterModule,
    MenuModule
  ]
})
export class HomeModule { }
