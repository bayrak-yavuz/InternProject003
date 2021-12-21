import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private afs:AngularFirestore,
    ) 
    {
      this.afs.collection('tarifler').get().subscribe(res=> {res.docs.forEach(doc => {console.log(doc.id)})})
 
    }
    getRecipes() {
      
      return this.afs.collection('tarifler').valueChanges();
      
      
    }
    getRecipe(id:string){
      return this.afs.collection('tarifler').doc(id).get()

      }
    getRecipesWithCategory(categoryId:String){
      return this.afs.collection("tarifler",ref=>ref.where("categoryId","array-contains",categoryId)).snapshotChanges()
    }
     

    searchRecipe(name:String){
      console.log("search service calıstı " + name +" aranıyor...")
      return this.afs.collection("tarifler",ref=>ref.where("name","==",name)).snapshotChanges()
    }
    getSavedRecipes(id:String){
      return this.afs.collection("tarifler",ref=>ref.where("id","==",id)).snapshotChanges()
    }
}
  
 
    

