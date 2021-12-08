import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { GlobalVariables } from '../global-var/global-variables';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  photo = "https://firebasestorage.googleapis.com/v0/b/ionicneyesem.appspot.com/o/kobu-agency-TWIRIAizZFU-unsplash.jpg?alt=media&token=80a4eecc-608b-44d9-8097-9c0c9f8a4dd3"
  resText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur quibusdam explicabo maiores eaque perspiciatis repellat harum dignissimos, accusantium nesciunt sequi odio ad aliquid repudiandae, quis unde quos! Incidunt, voluptates."
  items=[
    {
      line:" bardak"
    },
    {
      line:" bir şişe su"
    },
  ]
  name="Bir bardak su"
  data: any
  constructor(
    private location: Location,
    private globals: GlobalVariables,
    private recipeService: RecipesService) {

    console.log(this.items)
    console.log(globals.recipesIndex);
  }


  index = this.globals.recipesIndex
  ionViewWillEnter() {
    this.getRecipes0()
  }
  ngOnInit() {
  }

  async getRecipes0() {

    await this.recipeService.getRecipes().subscribe(res => {
      this.data = res;
      console.log(this.data);
    });

  }
  back() {
    this.location.back();
  }
}
