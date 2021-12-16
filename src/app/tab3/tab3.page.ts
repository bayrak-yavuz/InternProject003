import { GlobalVariables } from './../global-var/global-variables';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';
export interface imageData{
  fileName:string;
  filePath:string;
  size:string;
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
user:any;
profileImage:any;
fileName:string;
fileSize:string;
isLoading:boolean;
isLoaded:boolean;
private imageCollection:AngularFirestoreCollection<imageData>;
  imagefile:Observable<imageData[]>;
  imageUpload:AngularFireUploadTask;

  constructor(
    private login:LoginService,
    private router:Router,
    private toastr:ToastController,
    private storage:AngularFireStorage,
    private database:AngularFirestore,
    private loading:LoadingController,
  ) {
    this.isLoaded=false;
    this.isLoading=false;
    this.imageCollection=this.database.collection<imageData>('users');
    this.imagefile=this.imageCollection.valueChanges();
  }

logout()
{
  GlobalVariables.log=true
  console.log(GlobalVariables.log)
  this.login.signOut();
  
}
async toast(message,status)
{
  const toast=await this.toastr.create({
    message:message,
    color:status,
    position:'top',
    duration:2000,
  }) ;
  toast.present();
}//end tas t

ngOnInit()
{
  this.login.user$.subscribe(user=>{
    this.user=user;
   })
}
async addImage(event){
  const load = await this.loading.create({
    message: 'Yükleniyor...',
    spinner: 'crescent',
    showBackdrop: true,
 
  })
  load.present();
  const file = event.target.files;
    var fileName=file[0];

  const path=`users/${this.user.userId}/${fileName.name}`;
  var fileRef=this.storage.ref(path);
  this.imageUpload=this.storage.upload(path,fileName);
  this.loading.dismiss();
  this.imageUpload.then(res=>{
    var imagefile=res.task.snapshot.ref.getDownloadURL();
    imagefile.then(downloadableUrl=>{
      console.log("URL:",downloadableUrl);
     })
  })
 if(this.user){
  const result=this.database.doc(`/user/${this.user.userId}`);
  var userprofile=result.valueChanges();
  userprofile.subscribe(user =>{
    console.log("PROFILE:::",user);
    this.user.photourl=user['photourl'];
  })
 }
}
}

