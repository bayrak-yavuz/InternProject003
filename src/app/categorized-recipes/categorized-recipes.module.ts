import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorizedRecipesPageRoutingModule } from './categorized-recipes-routing.module';

import { CategorizedRecipesPage } from './categorized-recipes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorizedRecipesPageRoutingModule
  ],
  declarations: [CategorizedRecipesPage]
})
export class CategorizedRecipesPageModule {}
