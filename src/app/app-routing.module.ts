import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { UserProfileComponent } from './Visitor/User/user-profile/user-profile.component';
import { AdminProfileComponent } from './Visitor/Admin/admin-profile/admin-profile.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import { catalogGuard, companyGuard, contactGuard, loginGuard, logoutGuard, novostiGuard, proyektGuard, proyektdetailsGuard, registerGuard, shoppingGuard, studentGuard, userGuard, uslogiGuard, zashitaproektiGuard } from './auth.guard';
import { CompanyComponent } from './Pages/company/company.component';
import { NovostiComponent } from './Pages/novosti/novosti.component';
import { KontaktComponent } from './Pages/kontakt/kontakt.component';
import { UslugiComponent } from './Pages/uslugi/uslugi.component';
import { ZashitaProektiComponent } from './Pages/zashita-proekti/zashita-proekti.component';
import { ProyektComponent } from './Pages/proyekt/proyekt.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { EmailRequestComponent } from './Pages/email-request/email-request.component';
import { GdeKupitComponent } from './Pages/gde-kupit/gde-kupit.component';
import { ProyektAdminComponent } from './Pages/proyekt-admin/proyekt-admin.component';
import { KartochkaComponent } from './Pages/kartochka/kartochka.component';
import { ProyektDetailComponent } from './Pages/proyekt-detail/proyekt-detail.component';
import { DostavkaComponent } from './Pages/dostavka/dostavka.component';
import { GarantiyaComponent } from './Pages/garantiya/garantiya.component';
import { DIAComponent } from './Pages/d-i-a/d-i-a.component';
import { DileramComponent } from './Pages/dileram/dileram.component';
import { MainNavbarComponent } from './Components/main-navbar/main-navbar.component';
import { CompComponent } from './Pages/comp/comp.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [loginGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [logoutGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [registerGuard]},
  {path: 'reset', component: ResetPasswordComponent},
  {path: 'main-navbar', component: MainNavbarComponent},
  {path: 'comp',  component: CompComponent},
  {path: 'emailRequest', component: EmailRequestComponent}, 
  {path: 'user-profile', component: UserProfileComponent, canActivate: [userGuard]}, // guard needed
  {path: 'admin-profile', component: AdminProfileComponent, canActivate: [loginGuard]},
  {path: 'catalog', component: ProyektAdminComponent, canActivate: [catalogGuard]}, // to be fixed
  {path: 'company', component: CompanyComponent, canActivate: [companyGuard]},
  {path: 'shopping', component: GdeKupitComponent, canActivate: [shoppingGuard]}, // to be fixed
  {path: 'novosti', component: NovostiComponent, canActivate: [novostiGuard]},
  {path: 'dostavka', component: DostavkaComponent, canActivate: [novostiGuard]},
  {path: 'gorant', component: GarantiyaComponent, canActivate: [novostiGuard]},
  // {path: 'novosti-in', component: , canActivate: [novostiGuard]},
  {path: 'contact', component: KontaktComponent, canActivate: [contactGuard]},
  {path: 'd-i-a', component: DIAComponent, canActivate: [contactGuard]},
  {path: 'dileram', component: DileramComponent, canActivate: [contactGuard]},
  {path: 'uslogi', component: UslugiComponent, canActivate: [uslogiGuard]},
  {path: 'zashita-proekti', component: ZashitaProektiComponent, canActivate: [zashitaproektiGuard]},
  {path: 'proyekt', component: ProyektComponent, canActivate: [proyektGuard]},
  {path: 'proyekt-admin', component: ProyektAdminComponent, canActivate: [proyektGuard]},
  {path: 'proyekt-detail', component: ProyektDetailComponent, canActivate: [proyektdetailsGuard]},
  {path: 'kartochka', component: KartochkaComponent},
  {path: '**', component: HomeComponent, canActivate: []}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
