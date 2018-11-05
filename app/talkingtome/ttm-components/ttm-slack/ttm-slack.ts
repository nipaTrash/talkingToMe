import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { TtmSlackState } from './ttm-slack-state';
import { TtmState } from '../ttm-state/ttm-state';

import 'rxjs/add/operator/map';

@Injectable()
export class TtmSlack{
    
    private _ttmSlackState: TtmSlackState;
    private _ttmState: TtmState;
    private _http: Http;
    
    constructor(
        ttmSlackState: TtmSlackState,
        ttmState: TtmState, 
        http: Http,
    ){
        this._ttmSlackState = ttmSlackState;
        this._ttmState = ttmState;
        this._http = http;
    };
    
    /*JSONP_CALLBACK(){
        console.log('yyyyyyyyy');
    }
    login():void{
        //console.log(this._ttmSlackState.accessToken);
        this._jsonp.get('https://slack.com/oauth/authorize?scope=identity.basic&client_id=242800904082.242306321777&callback=JSONP_CALLBACK')
            .subscribe(
                (res:any)=>{console.log(res)},
                (error)=>{console.log(error)}
            );
    }*/
    
    setAccessToken(code:string){
     
        const url = this._ttmState.url+'&code='+code;
     
        console.log(url);
        
        return this._http.get(url)
            .map((res:any)=>{return res.json()});
    }
    
}