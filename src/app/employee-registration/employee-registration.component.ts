import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { EmployeeRegistrationService } from '../employee-registration.service';


@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  user: User = new User("", "", "", "", "", "", "", "", "");
  message: any;

  constructor(private service: EmployeeRegistrationService) {

  }

  ngOnInit() {

  }
  

  public addTheRecord() {
    let response = this.service.doRegistration(this.user);
    response.subscribe(data => this.message = data);
  }

}
