import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from './Services/auth.service';


const userRouter = false;
const adminRouter = true;
var tokenKey = 'token';
var tokenDecoded: any | null;

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

export const loginGuard: CanActivateFn = (route, state) => {
  console.log('state & route are HERE')
  return true;
};

export const registerGuard: CanActivateFn = (route, state) => {
  return true;
};

export const logoutGuard: CanActivateFn = (route, state) => {
  return true;
};

export const studentGuard: CanActivateFn = (route, state) => {
  return false;
};

export const shoppingGuard: CanActivateFn = (route, state) => {
  return true;
};

export const novostiGuard: CanActivateFn = (route, state) => {
  return true;
};

export const contactGuard: CanActivateFn = (route, state) => {
  return true;
};

export const uslogiGuard: CanActivateFn = (route, state) => {
  return true;
};

export const zashitaproektiGuard: CanActivateFn = (route, state) => {
  return true;
};

export const companyGuard: CanActivateFn = (route, state) => {
  return true;
};

export const catalogGuard: CanActivateFn = (route, state) => {
  return true;
};

export const proyektGuard: CanActivateFn = (route, state) => {
  return true;
};


export const proyektdetailsGuard: CanActivateFn = (route, state) => {
  return true;
};

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  

 if(localStorage.getItem(tokenKey) != null) {
  const tokenDecoded: any = jwtDecode(localStorage.getItem(tokenKey)!)

  const data = tokenDecoded.role;

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if(element == 'Admin') {
      console.log('Navigated to users');
      router.navigate(['/admin-profile'])
      return true
    } else if(element == 'User') {
      console.log('user profilega navigate');
      router.navigate(['/user-profile'])
      return true
    }
  }
 }
  
  console.log('navigate boldi');
  router.navigate(['/login'])
  return false;
};