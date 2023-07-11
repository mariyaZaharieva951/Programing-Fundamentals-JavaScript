import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "src/app/auth/user.service";




Injectable({
    providedIn: 'root'
});

export class AuthActivate implements CanActivate {
    constructor(private authServive: UserService) {
        
    }
    
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        const required = router.data['required'];
        if(required == undefined) {
            return true;
        }
        if(this.authServive.isLogged == required) {
            return true;
        }
    }

}