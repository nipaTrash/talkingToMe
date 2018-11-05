import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { TtmSlack } from '../ttm-components/index';
import { TtmSlackState } from '../ttm-components/index';
import { LoggedUserRoute } from '../index';


@Component({
    selector:'ttm-chat',
    template:``
})
export class TtmChat implements OnInit{
        
    private _ttmSlack: TtmSlack;
    private _ttmSlackState: TtmSlackState;
    private _loggedUserRoute: LoggedUserRoute;
    private _router: Router;
    
    getAccessToken: Observable<any>;
    
    constructor(ttmSlack:TtmSlack, ttmSlackState:TtmSlackState, loggedUserRoute:LoggedUserRoute, router:Router){
        this._ttmSlack = ttmSlack;
        this._ttmSlackState = ttmSlackState;
        this._loggedUserRoute = loggedUserRoute;
        this._router = router;
    }
    
    ngOnInit(){
        const authCode = this._loggedUserRoute.authCode;

        this._ttmSlack.setAccessToken(authCode)
            .subscribe((res:any)=>{

                this._ttmSlackState.accessToken = res.access_token;
                
                this._router.navigate(['/chat']);
            
            });

    }
}