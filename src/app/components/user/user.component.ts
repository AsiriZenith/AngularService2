import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  @Input() user: { name: string, status: string };
  @Input() id: number;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  onUpdateStatus(status: string) {
    this.userservice.updateStatus(this.id, status);
  }
}
