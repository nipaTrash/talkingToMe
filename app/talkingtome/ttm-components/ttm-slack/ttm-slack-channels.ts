import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { TtmSlackState } from './ttm-slack-state';

import 'rxjs/add/operator/map';

@Injectable()
export class TtmSlackChannels{
    
    private _ttmSlackState: TtmSlackState;
    private _http: Http;
    
    private _slackChannels = [];
    private _currentChannelId = '';
    //currentChannel; 
    
    constructor (ttmSlackState: TtmSlackState, http: Http){
        this._ttmSlackState = ttmSlackState;
        this._http = http;
    }
    
    get slackChannels(){
        return this._slackChannels;
    }
    get currentChannelId(){
        return this._currentChannelId;
    }
    setCurrentChannelId(channelId){
        this._currentChannelId = channelId;
        //this.currentChannel = channel;
    }
    
    setSlackChannels(){

        const channelsUrl = this._ttmSlackState.getChannelsUrl();
    
        this._http.get(channelsUrl)
                .map((res:any)=> res.json())
                .subscribe((channels:any)=>this._slackChannels = channels.channels);
        
    }
}