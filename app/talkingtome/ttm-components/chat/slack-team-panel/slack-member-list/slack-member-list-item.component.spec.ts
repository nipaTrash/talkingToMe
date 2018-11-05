import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SlackMemberListComponent } from './slack-member-list.component';
import { SlackMemberListItemComponent } from './slack-member-list-item.component';
import { TtmSlackMemberListService } from '../../../../ttm-services/ttm-slack-member-list.service';

class MockService{
    
}
describe('Component: SlackMemberListItemComponent',()=>{
    
    let component: SlackMemberListItemComponent;
    let fixture: ComponentFixture<SlackMemberListItemComponent>;
    
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[ SlackMemberListItemComponent, SlackMemberListComponent ],
            providers:[ {provide:TtmSlackMemberListService, useClass:MockService} ]
        });
        fixture = TestBed.createComponent(SlackMemberListItemComponent);
        component = fixture.componentInstance;
    });
    
    it('Should have a member as input',()=>{
       
        expect(component.member).not.toBeNull();
        
    });
    
    it ('Should add the channel id to the member info',()=>{
        fixture.detectChanges();
        
        expect (component.member.channel.id.length).toBeGreaterThan(5);
    });
    
    it('Shoul pass the current member to SlackMemberListComponent current conversation',()=>{
        let parentComponent = TestBed.createComponent(SlackMemberListComponent).componentInstance;
        
        let memberLink = fixture.debugElement.query(By.css('.panel-member-item'));
        memberLink.triggerEventHandler('click',null);
        fixture.detectChanges();
        
        expect(parentComponent.currentConversation).toBe(component.member);
        
    });
    
    
});