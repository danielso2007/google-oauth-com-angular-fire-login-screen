import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/security/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login';

  constructor(public auth: AuthService, public titleService: Title, private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

  async onGoogleSignin() {
    await this.auth.googleSignin()
    const redirect: string = this.auth.redirectUrl || environment.defaultRouteAfterLogout;
    console.log(redirect);
    this.auth.redirectUrl = null;
    this.router.navigate([redirect]);
  }

}
