import { Injectable } from '@angular/core';
import { Http } from'@angular/http';

import 'rxjs/add/operator/map';

import { TtmSlackState } from './ttm-slack-state';

@Injectable()
export class TtmSlackMembers{
   
    private _http:Http;
    
    private _ttmSlackState: TtmSlackState;
    private _slackMembers;
    
    currentMember;
    
    get slackMembers(){
        return this._slackMembers;
    }
    
    constructor (ttmSlackState:TtmSlackState, http:Http){
        this._ttmSlackState = ttmSlackState;
        this._http = http;
    }
    
    setSlackMembers(){
        const url = this._ttmSlackState.getMembersUrl();
        
        this._http.get(url)
            .map((res:any)=>res.json())
            .subscribe((members:any)=> {
                this._slackMembers = members.members;
                console.log(this._slackMembers)
            });
    }
    
    setCurrentMember(member){
        this.currentMember = member;
    }
     
    getMemberChannel(member){
        let url = this._ttmSlackState.getMemberConversation(member);

        return this._http.get(url)
            .map((res:any)=> {return res.json()});
    }

}