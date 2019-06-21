import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;
 

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
     this.userService.getUsers().subscribe((users)=>{
       this.users = users;
     });

     this.userService.getData().subscribe((data)=>{
       console.log(data);
     })
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registerd = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //   lastName: '',
  //   email: '',
  //   }
  // }

  showAndHide() {
    this.showExtended = !this.showExtended;
  }

  toggleHide(user: User){
    user.hide = !user.hide;
  }

  onSubmit({value, valid}: {value: User, valid:boolean}){
    if(!valid){
      console.log('Form is not valid');
    }else{
      value.isActive = false;
      value.registerd = new Date();
      value.hide = false;
      this.userService.addUser(value);

      this.form.reset();
    }
  }


  }
