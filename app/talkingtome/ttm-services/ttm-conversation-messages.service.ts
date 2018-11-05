import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { TtmSlackMessages } from '../ttm-components/ttm-slack/ttm-slack-messages';
import { TtmSlackChannels } from '../ttm-components/ttm-slack/ttm-slack-channels';


@Injectable() 
export class TtmConversationMessagesService{
    
    private _ttmSlackMessages: TtmSlackMessages;
    private _ttmSlackChannels: TtmSlackChannels;
    
    private _messages = [];
    private _currentConversation;
    
    get messages(){
        return this._ttmSlackMessages.messages;
    }
    
    get currentConversation(){
        return this._currentConversation;
    }
    
    constructor(ttmSlackMessages:TtmSlackMessages, ttmSlackChannels: TtmSlackChannels){
        this._ttmSlackMessages = ttmSlackMessages;
        this._ttmSlackChannels = ttmSlackChannels;
    }
    
    getMessagesHistory(ch?){
        
        const channel = ch? ch : '';

        this._ttmSlackMessages.setMessagesHistory(channel);
        this._ttmSlackChannels.setCurrentChannelId(channel.id);

    }
    
    setCurrentConversation(channelOrMember){
        this._currentConversation = channelOrMember;
    }
    
}