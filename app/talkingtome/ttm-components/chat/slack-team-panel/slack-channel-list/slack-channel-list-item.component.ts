import { Component, Input } from '@angular/core';

import { TtmSlackChannelListService } from '../../../../ttm-services/ttm-slack-channel-list.service';

@Component({
    selector:'slack-channel-list-item',
    styleUrls:['./slack-channel-list-item.component.css'],
    template:`
        <div (click)="onClick()" class="panel-channel-item" [class.selected]="selected"># {{channel.name}}</div><br/>
    `
})
export class SlackChannelListItemComponent{
    
    @Input() channel;
    @Input() selected;
    
    private _ttmSlackChannelListService: TtmSlackChannelListService;
        
    constructor(ttmSlackChannelListService:TtmSlackChannelListService){
        this._ttmSlackChannelListService = ttmSlackChannelListService;
    }
    
    onClick(){     
        this._ttmSlackChannelListService.changeChannel(this.channel)     
    }
}