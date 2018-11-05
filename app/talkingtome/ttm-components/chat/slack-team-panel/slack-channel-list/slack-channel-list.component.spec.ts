import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';

import { SlackChannelListComponent } from './slack-channel-list.component';
import { SlackChannelListItemComponent } from './slack-channel-list-item.component';
import { TtmSlackChannelListService } from '../../../../ttm-services/ttm-slack-channel-list.service';

class MockService{
    
    //getSlackChannels:Observable<any> = Observable.empty();
    
    private _channels;
    get channels(){
        return this._channels;
    }
}
const mockChannels = [
    {id:1,name:'tal'},
    {id:2,name:'taldos'}
]
describe('Component: SlackChannelListComponent',()=>{
    let component: SlackChannelListComponent;
    let fixture: ComponentFixture<SlackChannelListComponent>;
        
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpModule],
            declarations:[ SlackChannelListComponent, SlackChannelListItemComponent ],
            providers:[{
                provide: TtmSlackChannelListService,
                useClass: MockService 
            }]
        });
        fixture = TestBed.createComponent(SlackChannelListComponent);
        component = fixture.componentInstance;
    });
    
    it ('should get the channels from the controller',()=>{
        
        let service = TestBed.get(TtmSlackChannelListService);
        spyOnProperty (service, 'channels', 'get').and.returnValue(Observable.from([ mockChannels ]));
        fixture.detectChanges();
        
        expect(component.channels).toBe(mockChannels);
  
    });
    
})