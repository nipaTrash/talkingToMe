import { Component, OnInit } from '@angular/core';
import { TtmSlackChannelListService } from '../../../../ttm-services/ttm-slack-channel-list.service';

@Component({
    selector: 'slack-channel-list',
    styles:['.selected{background-color:gray;}'],
    template: `
    <div style="color:white;height:20px;padding:10px;">{{currentConversation?.name}}</div><br/>

    <div>Channels:</div><br/>
    
    <slack-channel-list-item 
        *ngFor="let channel of channels" [channel]="channel"
        [selected]="channel.id===currentConversation?.id"
    >
    </slack-channel-list-item><br/>
    `
})
export class SlackChannelListComponent implements OnInit{

    private _ttmSlackChannelListService: TtmSlackChannelListService;
    
    get channels(){
        return this._ttmSlackChannelListService.channels;
    }
    
    
    get currentConversation(){
        return this._ttmSlackChannelListService.currentConversation;
    }
    
    constructor (ttmSlackChannelListService:TtmSlackChannelListService){
        this._ttmSlackChannelListService = ttmSlackChannelListService;
    }
    
    ngOnInit(){
        this._ttmSlackChannelListService.getChannels(); 
    }
    
}