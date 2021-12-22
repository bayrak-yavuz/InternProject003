import { GlobalVariables } from './../global-var/global-variables';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Location } from '@angular/common';
import { User } from '../models/user';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  password: string;
 confirmpassword:string;
 photoUrl:string;
 confirmTerms:boolean;



 constructor(
    private afs: AngularFirestore,
    private afaut: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private loginService: LoginService,
    private location: Location,
    private alertCtrl:AlertController,


  ) { }
  goBack(): void {
    this.location.back();

  }

  signTerms() {
     let alert = this.alertCtrl.create({
       header:'KİŞİSEL VERİLERİN KORUNMASINA İLİŞKİN AYDINLATMA METİNİ',
      message: 'Hakkınızda her türlü bilgiyi toplayıp başka adamlara satıyoz veya kendimiz kullanıyoz ',
      buttons: [
        {
          text: 'Hayır',
          role: 'cancel',
          handler: () => {
            this.confirmTerms=false;
            console.log('Hayıra tıklandı');
          }
        },
        {
          text: 'Evet',
          handler: () => {
            this.confirmTerms=true;
            console.log('Sözleşmeyi Kabul ettiniz')
            console.log('https://www.youtube.com/watch?v=I0ld-0OKBLM');
          }
        }
      ]
    }).then(res => {res.present();});
  }

  ionViewWillEnter(){
  this.signTerms()
  
}


  ngOnInit() { }



  async register() {

     if (this.name && this.email && this.phone && this.password &&this.confirmTerms ) {
      const loading = await this.loadingCtrl.create({
        message: 'Yükleniyor...',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.afaut.createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.afs.collection('user').doc(data.user.uid).set({
            'userId': data.user.uid,
            'userName': this.name,
            'userEmail': this.email,
            'userPhone': this.phone,
            'createdAt': Date.now(),
          }).then(() => {
              loading.dismiss();
              this.toast('Kayıt başarılı lütfen e-postanızı kontrol edin!', 'success');
              this.router.navigate(['tabs/tab3']);
              GlobalVariables.log=false
            }) .catch(error => {
              loading.dismiss();
              this.toast(error.message, 'darger');
            })
        })
        
    }
    else {
      this.toast('Bilgileri tam  giriniz ve Aydınlatma metinin kabul ediniz', 'success');

    }
  }//end register

  checkPassword(){

  if(this.password== this.confirmpassword){
   
    this.toast('Şifreler Eşleşti', 'success');
  }
  else{
    this.toast('Şifreler Eşleşmiyor', 'success');

  }
}
  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000,
    });
    toast.present();
  }

}