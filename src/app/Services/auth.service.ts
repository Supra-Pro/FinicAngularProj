import { Injectable } from '@angular/core';
import { LoginRequest } from '../Interfaces/login-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import { LoginResponse } from '../Interfaces/login-response';
import { Router } from '@angular/router';
import { RegisterRequest } from '../Interfaces/register-request';
import { RegisterResponse } from '../Interfaces/register-response'; 
import { UpdateUser } from '../Interfaces/update-request';
import { Email } from '../Interfaces/email';
import { Proyekt } from '../Interfaces/proyekt';
import { Catigory } from '../Interfaces/catigory';
import { Portfolio } from '../Interfaces/portfolio';
import { ProyektDTO } from '../Interfaces/proyekt-dto';
import { Contact } from '../Interfaces/contact';
import { Catalogproduct } from '../Interfaces/catalogproduct';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient, private router: Router) { }
  
  apiUrl = environment.apiUrl;
  tokenKey: string = 'token';

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}User/Login`, data).pipe(
      map((response) => {
        if (response.isSuccessful) {
          localStorage.setItem(this.tokenKey, response.token);
        } else {
          this.router.navigate(['/register']); // Navigate to register if login is unsuccessful
        }
        return response; 
      })
    );
  }

  register(data1:RegisterRequest): Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(this.apiUrl+'User/Register', data1);
  }


  update(id: number, data: UpdateUser): Observable<UpdateUser> {
    return this.http.put<UpdateUser>(this.apiUrl + `UpdateUser?id=${id}`, data)
  }


  getById(id: number): Observable<UpdateUser> {
    return this.http.get<UpdateUser>(this.apiUrl + `UserGetById?id=${id}`)
  }

  sendEmail(email: string): Observable<any> {
    const apiUrl = 'https://localhost:7162/api'; 
    const emailParam = encodeURIComponent(email); 
    const url = `${apiUrl}/User/Email?email=${emailParam}`; 
    return this.http.post<any>(url, null); 
  }
  


  logout(){
    localStorage.setItem(this.tokenKey, '');
  }


  checkRouting(data: string[]): boolean {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if(element == 'Admin'){
        this.router.navigate(['/admin-profile']);
        return true;
      } else if(element == 'User'){
        this.router.navigate(['/user-profile']);
        return true;
      }
    }
    this.router.navigate(['/login'])
    return false;
  }

  // ulaaaaash =================>>>>  proyekts

  proyektUrl: string = "https://localhost:7052/api/";

  proyekt?:Proyekt;

  getAllProyekts(): Observable<Proyekt[]> {
    return this.http.get<Proyekt[]>(this.proyektUrl + 'Projects/GetAllProjects');
  }
  getAllCatigories(): Observable<string[]> { 
    return this.http.get<string[]>(this.proyektUrl + 'Projects/GetAllCategories');
  }

  createProyekt(data: ProyektDTO): Observable<ProyektDTO> { 
    return this.http.post<ProyektDTO>(this.proyektUrl + 'Projects/CreateProject', data);
  }

  // getByIdProyekt(id: number): Observable<CreateUser> {
  //   return this.http.get<CreateUser>(this.baseUrl + `GetIdPerson?id=${id}`)
  // }

  // updateProyekt(id: number, data: CreateUser): Observable<CreateUser> {
  //   return this.http.put<CreateUser>(this.baseUrl + `UpdatePerson?id=${id}`, data)
  // }

  // deleteProyekt(id: number): Observable<number> {
  //   return this.http.delete<number>(this.baseUrl + `DeletePerson?id=${id}`)
  // }



  // ulaaaaash =================>>>>  portfolios
  portfolioUrl: string = "https://localhost:7163/api/";

  portfolio?:Portfolio;

  getAllPortfolios(): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.portfolioUrl + 'Portfolio/GetAllPortfolios');
  }


  // ulaaaaash =================>>>>  contacts


  contactUrl: string = "https://localhost:7217/api/";

  contact?:Contact;

  createContact(data: Contact): Observable<Contact> { 
    return this.http.post<Contact>(this.contactUrl + 'ContactPageRequests/CreateUserRequest', data);
  }

  // ulaaaaash =================>>>>  catalogs


  catalogUrl: string = "https://localhost:7239/api/";

  catalogProduct?:Catalogproduct;

  getAllCatalogProducts(): Observable<Catalogproduct[]> {
    return this.http.get<Catalogproduct[]>(this.catalogUrl + 'Product/GetAllProducts');
  }
}