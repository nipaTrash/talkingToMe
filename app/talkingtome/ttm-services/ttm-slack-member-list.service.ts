import { Injectable } from '@angular/core';
import { TtmSlackMembers } from '../ttm-components/ttm-slack/ttm-slack-members';
import { TtmConversationMessagesService } from './ttm-conversation-messages.service';

@Injectable()
export class TtmSlackMemberListService{
    
    private _ttmSlackMembers: TtmSlackMembers;
    private _ttmConversationMessagesService: TtmConversationMessagesService;
    
    get members(){
        return this._ttmSlackMembers.slackMembers;
    }
    get currentConversation(){
        return this._ttmConversationMessagesService.currentConversation;
    }
   
    constructor(
        ttmSlackMembers:TtmSlackMembers, 
        ttmConversationMessagesService: TtmConversationMessagesService){
            
        this._ttmSlackMembers = ttmSlackMembers;
        this._ttmConversationMessagesService = ttmConversationMessagesService;
            
    }
    
    getMembers(){
        return this._ttmSlackMembers.setSlackMembers();
    }
    
    setMemberChannel(member){
        this.setCurrentConversation(member);
        this.changeChannel(member)
    }
    
    setCurrentConversation(member){
        this._ttmConversationMessagesService.setCurrentConversation(member);
    }
     
    changeChannel(member){
        
        this._ttmSlackMembers.getMemberChannel(member)
            .subscribe((res:any)=>{
                this._ttmConversationMessagesService.getMessagesHistory(res.channel);
                console.log(res);
            });

    }
    
    
}