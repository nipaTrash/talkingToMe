import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TtmRoutesModule } from './ttm-routes/ttm-routes.module';
//import { TtmSlackModule } from './ttm-components/ttm-slack/ttm-slack.module';
import { TtmComponentsModule } from './ttm-components/ttm-components.module';


import { TalkingToMe } from './talkingtome';
import { SigninRouteComponent } from './index';
import { LoggedUserRoute } from './index';
//import { SlackLoginComponent } from './index';

import { TtmSlackLogin } from './index';
import { TtmNewMessageService } from './index';
import { TtmChat } from './ttm-services/ttm-chat';


import { TtmSlackChannelListService } from './ttm-services/ttm-slack-channel-list.service';
import { TtmSlackMemberListService } from './ttm-services/ttm-slack-member-list.service';
import { TtmConversationMessagesService } from './ttm-services/ttm-conversation-messages.service';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
    imports:[
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        TtmRoutesModule,
        TtmComponentsModule
    ],
    declarations:[
        TalkingToMe,
        SigninRouteComponent,
        LoggedUserRoute,
        TtmSlackLogin,
        TtmChat
    ],
    providers: [ 
        TtmSlackChannelListService, 
        TtmSlackMemberListService, 
        TtmConversationMessagesService, 
        TtmNewMessageService 
    ],
    exports:[
        TalkingToMe
    ]
})
export class TalkingToMeModule{
    
}