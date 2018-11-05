import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SlackChannelListItemComponent } from './slack-channel-list-item.component';
import { SlackChannelListComponent } from './slack-channel-list.component';
import { TtmSlackChannelListService } from '../../../../ttm-services/ttm-slack-channel-list.service';

class MockService{
    
}
describe('Component: SlackChannelListItemComponent',()=>{
    let component: SlackChannelListItemComponent;
    let fixture: ComponentFixture<SlackChannelListItemComponent>;
    
    beforeEach(()=>{
       TestBed.configureTestingModule({
           declarations:[ SlackChannelListItemComponent, SlackChannelListComponent ],
           providers:[ {provide:TtmSlackChannelListService, useClass: MockService} ]
       });
        
        fixture = TestBed.createComponent(SlackChannelListItemComponent);
        component = fixture.componentInstance;
    });
   
    it ('Shouldnt be empty the channel Input',()=>{
        let channel = component.channel; 
        fixture.detectChanges();
        
        expect (channel).not.toBeNull();
    });
    
    it ('Should the channel clicked to the currentConversation in parent component',()=>{
        let parentComponent = TestBed.createComponent(SlackChannelListComponent).componentInstance;
        let channelLink = fixture.debugElement.query(By.css('.panel-channel-item'));
        channelLink.triggerEventHandler('click',null);
        fixture.detectChanges();
        
        expect (parentComponent.currentConversation).toEqual(component.channel);
    })

})