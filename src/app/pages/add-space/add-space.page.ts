import { Component, OnInit, ViewChild } from '@angular/core';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


import { ModalController } from '@ionic/angular';
import { OwnerServiceService } from 'src/app/services/owner.service';



export interface amenities {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-space',
  templateUrl: './add-space.page.html',
  styleUrls: ['./add-space.page.scss'],
})
export class AddSpacePage implements OnInit {
  form: FormGroup;
  profileUid:any
  amenityList:any=[];
  amenitie:any=[]
  amenitiesData: amenities[] = [
    { id: 0, name: 'cameras' },
    { id: 1, name: 'reception' },
    { id: 2, name: 'projector' },
    { id: 3, name: 'coffee'},
    { id: 4, name: 'wifi'},
    { id: 5, name: 'tv'},
    { id: 7, name: 'Aircon'}
  ];
  ret_arr: any[];
  ret_array:any = [];
  onChange(name: string, isChecked: boolean) {
    const cartoons = (this.addCoSpaceForm.controls.name as FormArray);
    
    if (isChecked) {
      cartoons.push(new FormControl(name));
      this.amenitie = cartoons;
      this.amenityList.push((name));
    } else {
      const index = cartoons.controls.findIndex(x => x.value === name);
      cartoons.removeAt(index);
    }
  }

  imageError: string;
  isImageSaved: boolean;
  EditIsImageSaved: boolean;
  cardImageBase64: string;

  ////update coworking space///
  viewSpace = 0; 
  spaces:any=[]
  spacesT:any=[]
  spacesTT:any=[]
  constructor(private formBuilder:FormBuilder,public ownerservice:OwnerServiceService,public account:SignInSignUpService) { 
    
    firebase.firestore().collection("profiles")
                        .doc(this.account.getUserSession())
                        .collection("profile")
                        .where("uid","==",this.account.getUserSession())
.get()
.then(doc => {

    doc.forEach(dat=>{
      // console.log("hh"+dat.id) 
      this.profileUid=dat.id;
    })
})
  }

  addCoSpaceForm = this.formBuilder.group({
    categories:[''],
    category_number: [''],
    address: [''],
    city: [''],
    province: [''],
    description:[''],
    price:[''],
    name: this.formBuilder.array([])
    
});
get description() {
  return this.addCoSpaceForm.get("description");
}
get price() {
  return this.addCoSpaceForm.get("price");
}

get categories() {
  return this.addCoSpaceForm.get("categories");
}
get category_number() {
  return this.addCoSpaceForm.get("category_number");
}

get address() {
  return this.addCoSpaceForm.get("address");
}
get city() {
  return this.addCoSpaceForm.get("city");
}
get province() {
  return this.addCoSpaceForm.get("province");
}
get name() {
  return this.addCoSpaceForm.get("name");
}


public errorMessages = {
  price: [
    { type: 'required', message: 'price is required' }
  ],
  description: [
    { type: 'required', message: 'description is required' }
  ],
  categories: [
    { type: 'required', message: 'categories is required' }
  ],
  category_number: [
    { type: 'required', message: 'category_number is required' }
  ],
  
  address:[
    { type: 'required', message: 'address is required' }
  ],
  city:[
    { type: 'required', message: 'city is required' }
  ],
  province:[
    { type: 'required', message: 'province is required' }
  ],
  name:[
    { type: 'required', message: 'name is required' }
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

  ngOnInit() {
    
  }

  submit() {
//console.log(this.addCoSpaceForm.value.name) 
  this.ownerservice. addcoworkingSpace(this.account.getUserSession(),this.profileUid,
                                       this.addCoSpaceForm.value.categories,
                                       this.addCoSpaceForm.value.category_number,
                                       this.addCoSpaceForm.value.address,
                                       this.addCoSpaceForm.value.city,
                                       this.addCoSpaceForm.value.province,
                                       this.addCoSpaceForm.value.name,
                                       this.cardImageBase64,
                                       this.addCoSpaceForm.value.price,
                                       this.addCoSpaceForm.value.description) 
  }


  workingSpaces(){
    firebase.firestore().collection("profiles")
    .doc(this.account.getUserSession())
    .collection("profile").doc(this.profileUid).collection("space")
    .where("uid","==",this.account.getUserSession())
    .get()
    .then(snap => {

      snap.forEach(doc => {
        var array:any=[]
    
      // array.push(Object.assign(doc.data(),{'cateuid':this.profileUid}) );
     array.push(doc.data().categories );
     this.ownerservice.setWorkSpaceUID(doc.data().workspace_uid)
  
  //  this.spaces.push(this.remove_duplicates(array))  

  this.unique(array)
 console.log(this.returnUniq()) 

      });
    });
   
  }

  unique(array){
    for(var i in array){
      if(this.ret_array.indexOf(array[i]) === -1){
        this.ret_array.push(array[i]);
        // console.log(this.ret_array) 
      }
  }
}

returnUniq(){
  return this.ret_array;
}

  view(){
     this.viewSpace =1;
     this.workingSpaces()
  }


}
