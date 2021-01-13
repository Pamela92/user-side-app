
import { Component, OnInit, ViewChild } from '@angular/core';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { OwnerServiceService } from 'src/app/services/owner.service';

export interface Cartoon {
  id: number;
  name: string;
}

@Component({
  selector: 'app-update-space',
  templateUrl: './update-space.page.html',
  styleUrls: ['./update-space.page.scss'],
})
export class UpdateSpacePage implements OnInit {
  arrayList:any=[]
  arrayEdit:any=[]
  category = this.route.snapshot.params.category;
  // cateuid = this.route.snapshot.params.cateuid;
  showFormvalue: number;
  spaceUid:any
  description_: any;
  address_: any;
  category_number_: any;
  price_: any;
  province_: any;
  amenities_: any=[];


  amenitiesEdit:any=[]
  cartoonsData: Cartoon[] = [
    { id: 0, name: 'cameras' },
    { id: 1, name: 'guards' },
    { id: 2, name: 'water' },
    { id: 3, name: 'electricity'},
    { id: 4, name: 'parking'},
    { id: 5, name: 'gardens'},
    { id: 6, name: 'bicycles'},
    { id: 7, name: 'cafeteria'},
    { id: 8, name: 'gym'},
    { id: 9, name: 'cleaners'}
  ];
  categories_: any;
  city_: any;


  imageError: string;
  isImageSaved: boolean;
  EditIsImageSaved: boolean;
  cardImageBase64: string;

  onChange(name: string, isChecked: boolean) {
    this.amenitiesEdit.push((name));
    console.log(this.amenitiesEdit)
  }
  fileChangeEvent(fileInput: any) {



    this. imageError = null;
    if(fileInput.target.files && fileInput.target.files[0]){
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;   
        if(fileInput.target.files[0].size > max_size){
          this.imageError = 'Maximum size allowed is ' + max_size / 1000 + 'Mb';
          return false;
        }
        if (!allowed_types.includes( fileInput.target.files[0].type)) {
          this.imageError = 'Only Images are allowed ( JPG | PNG )';
          return false;
        }
        const reader = new FileReader();
        reader.onload = (e:any)=>{
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs=> {
              const img_height = rs.currentTarget['height'];
              const img_width = rs.currentTarget['width'];
              console.log(img_height,img_width);
              if(img_height > max_height && img_width > max_width){
                this.imageError =
                'Maximum dimentions allowed ' +
                max_height +
                '*' +
                max_width +
                'px';
                return false;
              }else{
                const imgBase64Path = e.target.result;
                this.cardImageBase64 = imgBase64Path;
                this.isImageSaved = true;
               return this.cardImageBase64;
              }
            }
          }
        reader.readAsDataURL(fileInput.target.files[0])
    }
  
  }



  constructor(private route:ActivatedRoute,public ownerservice:OwnerServiceService,public account:SignInSignUpService) { 
    console.log(this.category)
    firebase.firestore().collection("profiles")
    .doc(this.account.getUserSession())
    .collection("profile").doc(this.ownerservice.getWorkSpaceUID()).collection("space")
    .where("uid","==",this.account.getUserSession()).where("categories","==",this.category)
.get()
.then(doc => {

doc.forEach(dat=>{
this.arrayList.push(Object.assign(dat.data(),{"spaceuid":dat.id}))
console.log(this.arrayList)
})
})
  }

  ngOnInit() {
  }
  EditForm(id){
    this.showFormvalue = 1;
    this.spaceUid=id;
    console.log(this.spaceUid)


    console.log(this.category)
    firebase.firestore().collection("profiles")
    .doc(this.account.getUserSession())
    .collection("profile").doc(this.ownerservice.getWorkSpaceUID()).collection("space").doc(this.spaceUid)
    
.get()
.then(doc => {
  this.description_ = doc.data().description;
  this.address_=doc.data().address;
  this.category_number_=doc.data().category_number;
  this.price_=doc.data().price;
  this.province_ =doc.data().province;
  this.amenities_  =(doc.data().amenities);
  this.categories_ =doc.data().categories
  this.city_=doc.data().city;
  console.log( this.amenities_)
})
}
updateSpace(){
 // console.log( this.description_+"/"+this.address_+"/"+this.category_number_+"/"+this.price_+"/"+this.province_+"/"+this.amenitiesEdit )
  this.ownerservice.updateCoworkingSpace(this.account.getUserSession(),this.ownerservice.getWorkSpaceUID(),this.spaceUid,this.categories_,this.category_number_,this.address_,this.price_,this.city_,this.province_,this.amenitiesEdit,this.description_) 
  
}
close(){
  this.showFormvalue = 0;
}
remove(id){
  this.ownerservice.deleteSpace(this.account.getUserSession(),this.ownerservice.getWorkSpaceUID(),id) 
}
changeImage(){
  this.ownerservice.changeImgSpace(this.account.getUserSession(), this.ownerservice.getWorkSpaceUID(), this.cardImageBase64,this.spaceUid)
}

}


