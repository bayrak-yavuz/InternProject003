import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RegisterRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterPageModule {}
