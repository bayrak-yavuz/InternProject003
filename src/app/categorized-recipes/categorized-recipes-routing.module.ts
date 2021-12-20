import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorizedRecipesPage } from './categorized-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: CategorizedRecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorizedRecipesPageRoutingModule {}
