import { Component } from '@angular/core';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
 
  constructor(private loginService:LoginService){}

  logout(){
    this.loginService.logout();
  }
}
