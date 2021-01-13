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
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
 favouriteArray:any=[];
  constructor(private router: Router,public userservice :UserService,private route:ActivatedRoute,public ownerservice:OwnerServiceService,public account:SignInSignUpService) { 
    this.getFavouritesuid()
  }

  ngOnInit() {
  }
  getFavouritesuid(){
    firebase.firestore().collectionGroup("favourite").where("useruid","==",this.account.getUserSession()).get().then(doc=>{
      doc.forEach(req=>{
        this.favouriteArray.push(Object.assign(req.data(),{'favouriteuid':req.id}) )
        console.log("We are here 3:"+ req.data())
      })
    })
  }

  back(){
    this.router.navigateByUrl('user-landing');
    this.userservice.setAllnull();
  }

}

