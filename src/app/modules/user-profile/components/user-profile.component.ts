import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  title = 'User Profile';

  constructor(public auth: AuthService, public titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('User Profile');
  }

}
