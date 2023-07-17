import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";
import { LogoutComponent } from "./logout/logout.component";
import { AuthActivate } from "../shared/guards/auth.activate";

const routes: Routes = [
    {path: 'auth/login', component: LoginComponent, data: {title: 'Login', required: false}},
    {path: 'auth/register', component: RegisterComponent, data: {title: 'Register', required: false}},
    {path: 'auth/profile', component: ProfileComponent, canActivate: [AuthActivate], data: {title: 'Profile', required: true}},
    {path: 'auth/logout', component: LogoutComponent, data: {title: 'Logout', required: true}},
];

export const AuthRoutingModule = RouterModule.forChild(routes)