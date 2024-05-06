import { Component, OnInit } from '@angular/core';
import { Catalogproduct } from '../../Interfaces/catalogproduct';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.scss'
})
export class CompComponent implements OnInit{
  catalogProduct: Catalogproduct[] = [];

  constructor(private crudService : AuthService) {}

  ngOnInit(): void {
    this.getAllProyekts();
  }

  getAllProyekts() {
    this.crudService.getAllCatalogProducts().subscribe({
      next: (data) => {
        this.catalogProduct = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
