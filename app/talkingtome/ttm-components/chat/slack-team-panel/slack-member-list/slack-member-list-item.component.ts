import { Component, Input } from '@angular/core';

import { TtmSlackMemberListService } from '../../../../ttm-services/ttm-slack-member-list.service';

@Component({
    selector:'slack-member-list-item',
    styles:['.selected{background-color:gray;}'],
    template:`
        <div class="panel-member-item" (click)="onClick()" [class.selected]="selected"> {{ member.name }}</div><br/>
    `,
    styleUrls:['./slack-member-list-item.component.css']

})
export class SlackMemberListItemComponent{

    @Input() member;
    @Input() selected;
    
    private _ttmSlackMemberListService: TtmSlackMemberListService;
    
    constructor(ttmSlackMemberListService:TtmSlackMemberListService){
        this._ttmSlackMemberListService = ttmSlackMemberListService;
    }
    
    ngOnInit(){
        //this._ttmSlackMemberListService.getMemberChannel(this.member);
    }
    
    onClick(){
        this._ttmSlackMemberListService.setMemberChannel(this.member);
    }
}