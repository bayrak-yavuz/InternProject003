import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'
 import * as firebase from 'firebase/compat/app';
 
@Injectable()
export class LoginService {

  user$: Observable<User>;
  user: User;
  constructor(
    public afs: AngularFirestore,
    public auth: AngularFireAuth,
    public router: Router,
    public loadingCtrl: LoadingController,
    public toastr: ToastController,
  )
   {
    this.user$ = this.auth.authState
      .pipe(
        switchMap(user => {
          
          if (user) {
            return this.afs.doc<User>(`yeni/${user.uid}`).valueChanges();
          }
          else {
            return of(null);
          }
        })
      )
  }// end constructor

  async signIn(email, password) 
  {
    const loading = await this.loadingCtrl.create({
      message: 'Kimlik Doğrulanıyor',
      spinner: 'crescent',
      showBackdrop: true,
    });
    loading.present();

    this.auth.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL)
    .then(()=>{
    this.auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
      if (!res.user.email) {
        loading.dismiss();
        this.toast('Lütfen mail adresini giriniz!!', 'warning');
        this.auth.signOut();
      }
      else {
        loading.dismiss();
        this.router.navigate(['/tabs/tab3'])
      }
    })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    })
    .catch(error => {
      loading.dismiss();
      this.toast(error.message,'danger')
    })
  }//end sıgnın

  async signOut()
{
  
  const loading=await this.loadingCtrl.create({
    message: 'Çıkış Yapılyor',
    spinner:'crescent',
    showBackdrop:true,
    
  });
  loading.present();
  
  this.auth.signOut()
  .then(() =>{
    loading.dismiss();
    this.router.navigate(['/tabs/login'])
  }
  )
  } // end signout

  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  } // endtoast

// async createUser(email: string, password: string){
//   return await this.auth.signInWithEmailAndPassword(email, password).then(
//     res => {
//       console.log(res.user())
//     }, err => {
//       //başarısız
//     }
//   )
// }
  
  }

// loginFirelogin(value) {
  //   return new Promise<any>((resolve, reject) => {
  //    this.auth().signInWithEmailAndPassword(value.email, value.password).then(
  //       res => resolve(res),
  //       error => reject(error)
  //     )
  //   })
  // }
  // async loginNew(email: string, password: string) {
  //   return await this.auth.signInWithEmailAndPassword(email, password).then(
  //     res => {
  //       //başarılı
  //     }, err => {
  //       //başarısız
  //     }
  //   )
  // }
 
  // async getUser() {
  //   return await (await this.auth.currentUser).uid //kullanıcı idsi
  //   //angularfireauthguard routing de kullan
  // }