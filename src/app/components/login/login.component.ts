import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../shared/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private loginService: LoginService) {
  }

  ngOnInit() {
    // this.loginForm = this.initLoginForm();
    this.loginForm = this.buildLoginForm();
  }

  private initLoginForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, {validators: [Validators.required, Validators.email]}),
      password: new FormControl(null, {validators: [Validators.required]})
    });
  }

  private buildLoginForm(): FormGroup {
    return this.fb.group({
      email: ['', {validators: [Validators.required, Validators.email], updateOn: 'blur'}],
      password: ['', {validators: [Validators.required]}]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      // TODO add login api request
    }
    console.log(this.loginForm.value);
  }
}
