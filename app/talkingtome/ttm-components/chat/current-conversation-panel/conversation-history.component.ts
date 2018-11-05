import { Component, OnInit } from '@angular/core';

import { TtmConversationMessagesService } from '../../../ttm-services/ttm-conversation-messages.service';

@Component({
    selector:'conversation-history',
    templateUrl:'./conversation-history.component.html',
    styleUrls:['./conversation-history.component.css']
})
export class ConversationHistoryComponent implements OnInit{
         
    private _ttmConversationMessagesService: TtmConversationMessagesService;
    
    get messages(){
        return this._ttmConversationMessagesService.messages;
    }
    
    constructor (ttmConversationMessagesService: TtmConversationMessagesService){
        this._ttmConversationMessagesService = ttmConversationMessagesService;
    }
    
    ngOnInit(){
        this._ttmConversationMessagesService.getMessagesHistory();       
    }
    
}
