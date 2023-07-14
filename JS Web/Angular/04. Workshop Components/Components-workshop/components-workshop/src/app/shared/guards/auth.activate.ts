import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "src/app/auth/user.service";
import { Observable } from "rxjs"




@Injectable({
    providedIn: 'root'
})

export class AuthActivate implements CanActivate {
    constructor(private userService: UserService, private router: Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       
    const required = route.data['required'];
    
        if(required == undefined || this.userService.isLogged == required) {
            return true;
        }
        const returnUrl = route.url.map(u => u.path).join('/');
        return this.router.createUrlTree([`/auth/login`], {queryParams: {returnUrl}});
    }

}