import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { TtmSlackMessages } from '../ttm-components/ttm-slack/ttm-slack-messages';
import { TtmSlackChannels } from '../ttm-components/ttm-slack/ttm-slack-channels';

@Injectable()
export class TtmNewMessageService{
    
    private _ttmSlackMessages: TtmSlackMessages;
    private _ttmSlackChannels: TtmSlackChannels;
    
    get currentChannelId(){
        return this._ttmSlackChannels.currentChannelId; 
    }
    
    constructor (
        ttmSlackMessages: TtmSlackMessages,
        ttmSlackChannels: TtmSlackChannels
    ){
        this._ttmSlackMessages = ttmSlackMessages;
        this._ttmSlackChannels = ttmSlackChannels;
    }
    
    sendMessage(message){

        return this._ttmSlackMessages.sendMessage(message, this.currentChannelId)
            .toPromise();
    
    }
}