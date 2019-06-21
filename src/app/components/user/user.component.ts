import { Component, OnInit } from '@angular/core';

// user interface
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    
    user: User;
    constructor() {
        this.user = {
            firstName: 'Hasi',
            lastName: 'Chandu',
            email: 'hasi@gmail.com'
        };
    }

    ngOnInit() {
    }

}

