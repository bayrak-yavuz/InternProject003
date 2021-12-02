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
      return this.afs.doc('tarifler/' +id).get();
    }
}
