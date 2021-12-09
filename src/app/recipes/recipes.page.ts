import { GlobalVariables } from './../global-var/global-variables';
import { LoginGuard } from './../guards/login.guard';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Location } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  photo = "https://firebasestorage.googleapis.com/v0/b/ionicneyesem.appspot.com/o/kobu-agency-TWIRIAizZFU-unsplash.jpg?alt=media&token=80a4eecc-608b-44d9-8097-9c0c9f8a4dd3"
  resText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur quibusdam explicabo maiores eaque perspiciatis repellat harum dignissimos, accusantium nesciunt sequi odio ad aliquid repudiandae, quis unde quos! Incidunt, voluptates."
  items = [
    {
      line: " bardak"
    },
    {
      line: " bir şişe su"
    },
  ]
  name = "Bir bardak su"
  data: any
  id=""
  dataIndex: any
  recipe:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    // private globals: GlobalVariables,
    private auth: AngularFireAuth,
    private recipeService: RecipesService,
    private loginGuard: LoginGuard,
    private afsg: AngularFireAuthGuard) {

    // console.log(globals.recipesIndex);
  }


  //index = this.globals.recipesIndex
  ionViewWillEnter() {
    this.getRecipes0()


    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        this.id = res.url
        console.log(this.id)
      }
      if (this.id == this.data.find(res => res.id == this.id)) {
        this.dataIndex = this.data.indexOf(this.id)
        this.name = this.data[this.dataIndex].name
        this.photo = this.data[this.dataIndex].photo
      }
      else {
        this.id = "fni7PJXwZk5GANFBHp4V"
      }
    })

    //this.getRecipe("fni7PJXwZk5GANFBHp4V")


  }
  ngOnInit() {


  }


  // async getRecipe(id:string) {

  //   await this.recipeService.getRecipe(id).subscribe(res => {
  //     this.recipe = res;
  //     console.log(this.recipe);
  //   });

  // }
  
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
