import { Component, OnInit } from '@angular/core';
import { TtmSlackMemberListService } from '../../../../ttm-services/ttm-slack-member-list.service';

@Component({
    selector:'slack-member-list',
    template: `
        <br/><div>Members:</div><br/>

        <slack-member-list-item 
            *ngFor="let member of members" 
            [member]="member"
            [selected]="member.id==currentConversation?.id"
            >
        </slack-member-list-item>
    `,
    styleUrls:['./slack-member-list.component.css']
})
export class SlackMemberListComponent implements OnInit{

    private _ttmSlackMemberListService:TtmSlackMemberListService;
    
    get members(){
        return this._ttmSlackMemberListService.members;
    }
    
    get currentConversation(){
        return this._ttmSlackMemberListService.currentConversation;
    }
    
    constructor(ttmSlackMemberListService: TtmSlackMemberListService){
        this._ttmSlackMemberListService = ttmSlackMemberListService;
    }
    
    ngOnInit(){
        this._ttmSlackMemberListService.getMembers();
    }
   
}