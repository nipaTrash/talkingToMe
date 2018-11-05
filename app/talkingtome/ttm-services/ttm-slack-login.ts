import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { TtmSlack } from '../ttm-components/index';

@Component({
    selector:'ttm-slack-login',
    template:`
        <!--<slack-login (loginClicked)="slackLogin($event)"></slack-login>-->
    `
})
export class TtmSlackLogin{
    
    private _ttmSlack: TtmSlack;
    
    constructor (ttmSlack: TtmSlack){
        this._ttmSlack = ttmSlack;
    }
    
    ngOnInit(){
        
    }
    slackLogin(event){
        //this._ttmSlack.login();
    }

}