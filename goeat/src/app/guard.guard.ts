import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  constructor(private router: Router, private authService: AuthService, private navCtrl: NavController){}

  userEmail: string;


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user: firebase.User) => {
        if (user) {
          resolve(true);
        } 
        else {
          console.log('User is not logged in');
          this.router.navigate(['/login']);
          resolve(false);
        } 
      });
    });
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user: firebase.User) => {
          if (user) {
            console.log('User is already logged in');
            this.router.navigate(['/inicio/home']);
            resolve(false);
          } 
          else {
            resolve(true);
          } 
        });
      });
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        
      });
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
