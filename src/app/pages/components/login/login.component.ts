import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertBannerComponent } from '../../../shared/reusableComponents/alert-banner/alert-banner.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, AlertBannerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fromLayout: string = 'New Alert notificed in Login Page';
  loginObj: Login;
  constructor() {
    this.loginObj = new Login();
  }
  http = inject(HttpClient)

  onLogin(): any {
    const setHeaders = {
      'accept': 'application/json',
      'Content-Type': 'application/json-patch+json'
    }
    this.http.post(`https://freeapi.miniprojectideas.com/api/User/Login`, this.loginObj, { headers:  setHeaders})
      .subscribe(
        (response:any) => {
          if (response.result === true) {
            alert(response.message)
          } else {
            console.log(response.message);
          }
        }
      )
  }
}
export class Login {
  EmailId: string;
  Password: string;
  constructor() {
    this.EmailId = '';
    this.Password = '';
  }

}

