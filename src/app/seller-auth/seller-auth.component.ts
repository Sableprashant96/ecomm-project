import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{

  showLogin=false;

  constructor( private Seller : SellerService, private router: Router){

  }

  ngOnInit(): void {}

  signUp(data:SignUp):void{

    console.warn(data)
    this.Seller.userSignUp(data).subscribe((result)=>{
      console.warn(result)
      if (result){
        this.router.navigate(['seller-home'])
      }

    });

  }

  ShowLogin(){
    if (this.showLogin){
      this.showLogin=false;
    } else {
      this.showLogin=true;
    }
    
  }



  LogIn(data:SignUp):void{

    //api calling
    // console.warn(data)
    // this.Seller.userSignUp(data).subscribe((result)=>{
    //   console.warn(result)
    //   if (result){
    //     this.router.navigate(['seller-home'])
    //   }

    // });


}
