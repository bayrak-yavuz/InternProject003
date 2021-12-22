import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from './../services/user.service';
import { RecipesService } from './../services/recipes.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalVariables } from '../global-var/global-variables';
@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent implements OnInit {

  constructor(private location: Location,
              private recipesService:RecipesService,
              private userService:UserService,
              private auth:AngularFireAuth,) { }

  ngOnInit() {
    
  }
  goBack(): void {
    this.location.back();

  }
  ionViewWillEnter(){
    this.getSaveds()
    
  }

  data2:any
  data:any[]=[]
  async getSaveds(){
    this.userService.listSaved(((await this.auth.currentUser).uid)).subscribe((res:any[])=> {
     this.data2=res.map(r=>r.recipeId),
 
      this.data2.forEach(recipeId => {
        this.recipesService.getRecipe(recipeId).subscribe(res=>{
                      this.data.push(res.data());
          console.log(this.data)
         });

      });
    })
  }
  Index(Isim:string){
    window.localStorage.setItem('myId',Isim)
    console.log(window.localStorage.getItem('myId'))
    
    // console.log(Isim)
    // this.idies=Isim
    // console.log(this.idies)
  }
}
