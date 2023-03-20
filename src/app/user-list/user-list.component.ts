import { Component, OnInit } from '@angular/core';
import { User } from 'model/user';
import { UserService } from 'service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];

  constructor(private userService: UserService) {
    console.log('service layer injected in angular list users component constructor!!!!')
  }

  ngOnInit() {
    console.log('--------onInit is called--------')
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}

