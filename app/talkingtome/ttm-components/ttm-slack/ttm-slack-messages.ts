import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { TtmSlackState } from './ttm-slack-state';

@Injectable()
export class TtmSlackMessages{
    
    private _http:Http;
    private _ttmSlackState: TtmSlackState;
    private _urlMessagesHistory;
    
    private _messages;
    
    get messages(){
        return this._messages;
    }
    
    constructor(http:Http, ttmSlackState:TtmSlackState){
        this._http = http;
        this._ttmSlackState = ttmSlackState;
    }
    
    setMessagesHistory(channel){
        
        let url = this._ttmSlackState.getHistoryUrl(channel);
        
        this._http.get(url)
            .map((res:any)=>{
                return res.json();
            })
            .subscribe((messages:any)=>this._messages = messages.messages);
    }
    
    sendMessage(message, channel){

        let url = this._ttmSlackState.getPostMessageUrl(message, channel);

        return this._http.get(url).map((res:any)=> {return res.json()});
    
    }
    
}