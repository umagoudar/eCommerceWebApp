import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormControl, FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router:Router,private fb: FormBuilder) { 
	 
  }

  ngOnInit() {
  	this.loginForm = new FormGroup({
	    UserName:  new FormControl('', [Validators.required]),
	    Password: new FormControl('', [Validators.required])
	  });
  }
   

  LoginFunction(){
    this.router.navigate(['/navbar']);
  }
}
