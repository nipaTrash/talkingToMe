import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ChatModule } from './chat/chat.module';
import { TtmSlackModule } from './ttm-slack/ttm-slack.module';

import { SlackLoginComponent } from './slack-login/slack-login.component';
import { TtmState } from './ttm-state/ttm-state';

@NgModule({
    imports:[ ReactiveFormsModule, ChatModule, TtmSlackModule ],
    declarations:[ SlackLoginComponent ],
    providers:[ TtmState ],
    exports: [ SlackLoginComponent ]
})
export class TtmComponentsModule{
    
}