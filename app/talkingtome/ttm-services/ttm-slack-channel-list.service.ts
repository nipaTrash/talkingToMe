import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { TtmSlackChannels } from '../ttm-components/ttm-slack/ttm-slack-channels';
import { TtmConversationMessagesService } from './ttm-conversation-messages.service';

@Injectable()
export class TtmSlackChannelListService{
    
    private _ttmSlackChannels: TtmSlackChannels;
    private _ttmConversationMessagesService: TtmConversationMessagesService;
    
    
    get currentConversation(){    
        return this._ttmConversationMessagesService.currentConversation;    
    }
    
    
    get channels(){
        return this._ttmSlackChannels.slackChannels;
    }
    
    constructor(
        ttmSlackChannels: TtmSlackChannels, 
        ttmConversationMessagesService: TtmConversationMessagesService){
            
            this._ttmSlackChannels = ttmSlackChannels;
            this._ttmConversationMessagesService = ttmConversationMessagesService;
            
    }

    getChannels(){      
        return this._ttmSlackChannels.setSlackChannels();    
    }
    
    changeChannel(channel){
        
        this.setCurrentConversation(channel);
        this.getMessagesHistory(channel);
        
    }
  
    setCurrentConversation(channel){
        this._ttmConversationMessagesService.setCurrentConversation(channel);
    }
    
    getMessagesHistory(channel){
        this._ttmConversationMessagesService.getMessagesHistory(channel);
    }
    
    

}