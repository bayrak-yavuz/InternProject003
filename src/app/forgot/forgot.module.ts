import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgotComponent } from './forgot.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotRoutingModule } from './forgot-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ForgotRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ForgotComponent]
})
export class RegisterPageModule {}
