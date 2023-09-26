import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


const TOKEN = 'jwttoken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  view: boolean = false;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  login(): void{

  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      UserName: ["", Validators.required],
      Password: ["", Validators.required],
    });
  }
}
