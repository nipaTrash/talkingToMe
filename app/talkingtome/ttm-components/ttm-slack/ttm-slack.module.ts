import { NgModule } from '@angular/core';

import { TtmSlack } from './ttm-slack';
import { TtmSlackState } from './ttm-slack-state';
import { TtmSlackChannels } from './ttm-slack-channels';
import { TtmSlackMembers } from './ttm-slack-members';
import { TtmSlackMessages } from './ttm-slack-messages';


@NgModule({
    imports:[ ],
    providers:[ 
        TtmSlack, 
        TtmSlackState, 
        TtmSlackChannels, 
        TtmSlackMembers, 
        TtmSlackMessages 
    ]
})
export class TtmSlackModule{
    
}