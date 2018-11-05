import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ttmRoutes } from './ttm-routes';

import { LoggedGuard } from './logged-guard.service';

@NgModule({
    imports:[
        RouterModule.forRoot(ttmRoutes)
    ],
    providers: [ LoggedGuard ],
    exports:[
        RouterModule
    ]
})
export class TtmRoutesModule{
    
}