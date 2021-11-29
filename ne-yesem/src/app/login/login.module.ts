import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginPageModule {}
