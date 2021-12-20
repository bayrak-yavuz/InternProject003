import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(    private afs:AngularFirestore,
    ) { }

     getCategoryId(name:string){
      return  this.afs.collection("kategoriler",ref=>ref.where("name","==",name)).snapshotChanges()

    }

    
}


