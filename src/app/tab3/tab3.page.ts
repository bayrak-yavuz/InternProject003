import { GlobalVariables } from './../global-var/global-variables';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
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
addImage(event){
  const file = event.target.files;
  console.log(file);
   var fileName=file[0];
  console.log(fileName);
  console.log(this.user.userId)

  const path=`users/${this.user.userId}/${fileName.name}`;
  var fileRef=this.storage.ref(path);
  this.imageUpload=this.storage.upload(path,fileName);
}
}

