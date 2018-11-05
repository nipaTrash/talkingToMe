import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { TtmSlackState } from '../ttm-components/index';


@Injectable()
export class LoggedGuard implements CanActivate{
    
    private _ttmSlackState: TtmSlackState;
    private _router: Router;
    
    constructor (ttmSlackState:TtmSlackState, router:Router){
        this._ttmSlackState = ttmSlackState;
        this._router = router;
    }
    
    canActivate (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        if (this._ttmSlackState.isUserLogged()){
            return true;
        }else{
            this._router.navigate(['/signin']);
        }

    }
}