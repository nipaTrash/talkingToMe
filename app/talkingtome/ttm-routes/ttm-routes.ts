import { Routes } from '@angular/router';

import { SigninRouteComponent } from '../index';

import { LoggedUserRoute } from '../index';

import { LoggedGuard } from './logged-guard.service';

import { ChatComponent } from '../ttm-components/chat/chat.component';

export const ttmRoutes: Routes = [
    {path:'',component:SigninRouteComponent},
    {path:'signin',component:SigninRouteComponent},
    {path:'logged-user', component:LoggedUserRoute},
    {path:'chat', component: ChatComponent, canActivate: [ LoggedGuard]}
]