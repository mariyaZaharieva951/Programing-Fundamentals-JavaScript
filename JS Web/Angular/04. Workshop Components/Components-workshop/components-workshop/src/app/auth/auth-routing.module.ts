import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { LogoutComponent } from "./logout/logout.component";

const routes: Routes = [
    {path: 'auth/login', component: LoginComponent, canActivate: [UserActivation], data: {title: 'Login', required: false}},
    {path: 'auth/register', component: RegisterComponent, canActivate: [UserActivation], data: {title: 'Register', required: false}},
    {path: 'auth/profile', component: ProfileComponent, canActivate: [UserActivation], data: {title: 'Profile', required: true}},
    {path: 'auth/logout', component: LogoutComponent, canActivate: [UserActivation], data: {title: 'Logout', required: true}},
];

export const AuthRoutingModule = RouterModule.forChild(routes)