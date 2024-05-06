import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../Services/auth.service';
import { Contact } from '../../../../Interfaces/contact';

@Component({
  selector: 'app-d-i-a-main-page',
  templateUrl: './d-i-a-main-page.component.html',
  styleUrl: './d-i-a-main-page.component.scss'
})
export class DIAMainPageComponent implements OnInit{
  constructor(private crudService : AuthService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  resultData!: Contact;

  setValue : Contact = {
    name: "",
    phoneNumber: 0,
    email: "",
    message: ""
  };

  createContact(data: Contact) {
    this.crudService.createContact(data).subscribe({
      next: (result) => {
        this.resultData = result;
        console.log(result);
        this.setValue.name = "";
        this.setValue.phoneNumber = 0;
        this.setValue.email = "";
        this.setValue.message = "";
      },
      error: (err) => {
        console.log(`Error ketti: ${err}`);
      }
    });
  }

  setContact(){
    this.createContact(this.setValue);
  }
}
