import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs:AngularFirestore,
    private auth:AngularFireAuth,
    ) { }

    listSaved(userId:String){
      return this.afs.collection("user/"+userId+"/saved").valueChanges()
    }
   async addSaved(recipeId:string){
    this.afs.collection("user/"+((await this.auth.currentUser).uid)+"/saved").doc(recipeId).set({ 
      'recipeId':recipeId,

    })
   
   }
  }

