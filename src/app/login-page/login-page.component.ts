import { Component, OnInit } from '@angular/core';
import { LoginDataService } from '../services/login-data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  email = '';
  password = '';

  constructor(public loginDataService: LoginDataService) { }

  ngOnInit() { }

}
