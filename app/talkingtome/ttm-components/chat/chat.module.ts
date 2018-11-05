import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ChatComponent } from './index';

import { SlackTeamPanelComponent } from './slack-team-panel/slack-team-panel.component';
import { SlackChannelListComponent } from './slack-team-panel/slack-channel-list/slack-channel-list.component';
import { SlackChannelListItemComponent } from './slack-team-panel/slack-channel-list/slack-channel-list-item.component';
import { SlackMemberListComponent } from './slack-team-panel/slack-member-list/slack-member-list.component';
import { SlackMemberListItemComponent } from './slack-team-panel/slack-member-list/slack-member-list-item.component';

import  { CurrentConversationPanelComponent } from './index';
import  { ConversationHistoryComponent } from './index';
import  { ConversationMessageComponent } from './index';
import  { NewMessageComponent } from './index';

//import { ChatService } from './chat.service';

@NgModule({
    imports:[
        ReactiveFormsModule,
        CommonModule
    ],
    declarations:[ 
        ChatComponent, 
        SlackTeamPanelComponent,
        SlackChannelListComponent,
        SlackChannelListItemComponent,
        SlackMemberListComponent,
        SlackMemberListItemComponent,
        CurrentConversationPanelComponent,
        ConversationHistoryComponent,
        ConversationMessageComponent,
        NewMessageComponent
    ],
    providers: [  ],
    exports: [ ChatComponent, SlackChannelListComponent ]
})
export class ChatModule {
    
}