import { Injectable } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs:AngularFirestore,
    ) { }

    listSaved(userId:String){
      return this.afs.collection("user/"+userId+"/saved").valueChanges()
    }
}
