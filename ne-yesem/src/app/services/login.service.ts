import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { User } from '../models/user';
import{AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import{switchMap} from'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

   user$:Observable<User>;
   user:User;
  constructor(
    public afs:AngularFirestore,
    public auth: AngularFireAuth,
    public router:Router,
    public loadingCtrl:LoadingController,
    public toast:ToastController,
    ) { }

loginFirelogin(value){
return new Promise<any> ((resolve, reject)=>{
  firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
    res=> resolve(res),
    error => reject(error)
  )
})   
}
async loginNew(email:string, password:string){
  return await this.auth.signInWithEmailAndPassword(email,password).then(
    res=>{
      //başarılı
    },err=>{
      //başarısız
    }
  )
}

async getUser(){
  return await (await this.auth.currentUser).uid //kullanıcı idsi
  //angularfireauthguard routing de kullan
}


}
