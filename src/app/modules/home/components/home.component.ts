import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Home';

  constructor(public auth: AuthService, public titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
