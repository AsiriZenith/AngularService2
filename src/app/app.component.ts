import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  users: { name: string; status: string }[] = [];

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.users = this.userservice.users;
  }
}
