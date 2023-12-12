import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/Services/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  login : Login;
  constructor(private loginService : LoginService , private router:Router) { }

  ngOnInit(): void {
    this.login= new Login();
  }

  save(){
    this.loginService.addadmin(this.login).subscribe(res=>{
      console.log('taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
      
    });
    
  }

}
