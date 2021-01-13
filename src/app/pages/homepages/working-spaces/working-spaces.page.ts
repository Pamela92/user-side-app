import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { OwnerServiceService } from 'src/app/services/owner.service';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-working-spaces',
  templateUrl: './working-spaces.page.html',
  styleUrls: ['./working-spaces.page.scss'],
})
export class WorkingSpacesPage implements OnInit {
  workingSpaces:any[]=[];
 
  userprofileuid: string;
  constructor(public userservice :UserService,private route:ActivatedRoute,public ownerservice:OwnerServiceService,public account:SignInSignUpService) { 
  
  if(this.account.getUserSession()!='undefined'){
    
  }
  

    firebase.firestore().collectionGroup("space")
    
    .get()
    .then(snap => {
      snap.forEach(dat=>{
        this.workingSpaces.push( Object.assign(dat.data(),{'spaceId':dat.id}) )
      
      })
    })

  }

  ngOnInit() {
   
  }
 
  addToFavourites(profilesuid ,profileuid,spaceuid,namespace,price){
  console.log(spaceuid)
  
   this.userservice.favourite(profilesuid,this.account.getUserSession(),this.account.getUserProfileUid(), profileuid, spaceuid,namespace,price) 
  }
  
  
  getFavouritesuid(){
    firebase.firestore().collection("profiles")
    .doc(this.account.getUserSession())
    .collection("user-profile").doc("25NNJ05mquUnaA7N9mgA").get().then(doc=>{
      // doc.forEach(favUid=>{
        
        this.userprofileuid= doc.id; 
        console.log("We are here 3:"+ doc.id)
      // })
    })
  }
  

}


