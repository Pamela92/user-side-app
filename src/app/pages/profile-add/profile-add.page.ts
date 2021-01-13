import { Component, OnInit, ViewChild } from '@angular/core';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


import { ModalController } from '@ionic/angular';
import { OwnerServiceService } from 'src/app/services/owner.service';

import {  PopoverController } from '@ionic/angular';
import { MessagesPage } from 'src/app/feedback/messages/messages.page';

export interface Cartoon {
  id: number;
  name: string;
}

@Component({
  selector: 'app-profile-add',
  templateUrl: './profile-add.page.html',
  styleUrls: ['./profile-add.page.scss'],
})
export class ProfileAddPage implements OnInit {

  form: FormGroup;
  array:Array<any>=[];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  useruid:any
  status:boolean = false;
  show:any
  
  imageError: string;
  isImageSaved: boolean;
  EditIsImageSaved: boolean;
  cardImageBase64: string;

name_:any;
  surname_:any;
  email_:any;
 phone_:any;
  // aboutus_:any;
  // company_tel_:any;
  // company_address_:any;
  editForm:boolean=false;
  // outside_features:any=[]



  // amenitie:any=[];
  // amenitiesEdit:any=[]
  // cartoonsData: Cartoon[] = [
  //   { id: 0, name: 'cameras' },
  //   { id: 1, name: 'guards' },
  //   { id: 2, name: 'water' },
  //   { id: 3, name: 'electricity'},
  //   { id: 4, name: 'parking'},
  //   { id: 5, name: 'gardens'},
  //   { id: 6, name: 'bicycles'},
  //   { id: 7, name: 'cafeteria'},
  //   { id: 8, name: 'gym'},
  //   { id: 9, name: 'cleaners'}
  // ];

  // onChange(name: string, isChecked: boolean) {
  //   const cartoons = (this.updateForm.controls.name as FormArray);
    
  //   if (isChecked) {
  //     cartoons.push(new FormControl(name));
  //     this.amenitie = cartoons;
  //     this.amenitiesEdit.push((name));
  //   } else {
  //     const index = cartoons.controls.findIndex(x => x.value === name);
  //     cartoons.removeAt(index);
  //   }
  // }

  constructor(private popover:PopoverController,private formBuilder:FormBuilder,public ownerservice:OwnerServiceService,public account:SignInSignUpService) {
    firebase.firestore().collectionGroup("user-profile")
    .where("uid", "==", this.account.getUserSession())
    .get()
    .then(snap => {

      snap.forEach(doc => {
      this.array.push(Object.assign(doc.data(),{"profile_uid":doc.id}) )
      this.name_ = doc.data().company_name;
      this.surname_=doc.data().company_tel;
      this.phone_=doc.data().company_address;
      this.email_=doc.data().company_website;





      this.useruid=doc.id
      });
    });
   }

  updateForm = this.formBuilder.group({
    name:['', [Validators.required,Validators.maxLength(20),Validators.minLength(2),Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
    surname: ['', [Validators.required,Validators.maxLength(20),Validators.minLength(2),Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    phone:  ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
    address: ['', [Validators.required]]
});






isValidInput(fieldName): boolean {
  return this.updateForm.controls[fieldName].invalid &&
    (this.updateForm.controls[fieldName].dirty || this.updateForm.controls[fieldName].touched);
}

get surname() {
  return this.updateForm.get("surname");
}
get name() {
  return this.updateForm.get("name");
}

get email() {
  return this.updateForm.get("email");
}
get phone() {
  return this.updateForm.get("phone");
}
get address() {
  return this.updateForm.get("address");
}



public errorMessages = {
  name: [
    { type: 'required', message: 'name is required' }
  ],
  surname: [
    { type: 'required', message: 'surname is required' }
  ],
  
  email: [ 
    { type: 'required', message: 'email is required' },
    { type: 'pattern', message: 'Please enter a valid email address' }
  ],
  phone:[
    { type: 'required', message: 'phone is required' }
  ],
  address:[
    { type: 'required', message: 'phone is required' }
  ]
};

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

 submit() {
    console.log( this.updateForm.value.name
                )
   this.ownerservice.updateUserProfile(this.useruid, this.account.getUserSession(),
                   this.updateForm.value.name,
                   this.updateForm.value.surname,
                    this.updateForm.value.address,
                    this.updateForm.value.email,
                    this.updateForm.value.phone,
                    this.cardImageBase64)
                    this.  CreatePopover();
     }
     editForms(){


      this.ownerservice.updateUserProfile(this.useruid, this.account.getUserSession(),
      this.updateForm.value.name,
      this.updateForm.value.surname,
       this.updateForm.value.address,
       this.updateForm.value.email,
       this.updateForm.value.phone,
       this.cardImageBase64)
       this.  CreatePopover()
     }
   
     changeImage(){
      this.ownerservice.changeImg(this.useruid, this.account.getUserSession(),this.cardImageBase64) 
      this.CreatePopover()
     } 


    update(){
      this.editForm = true;
    } 
    editAll(){
      this.editForm = false;
    } 


  ngOnInit() {
  }
  CreatePopover()
{
  this.popover.create({component:MessagesPage,
  showBackdrop:false}).then((popoverElement)=>{
    popoverElement.present();
  })
}

}
