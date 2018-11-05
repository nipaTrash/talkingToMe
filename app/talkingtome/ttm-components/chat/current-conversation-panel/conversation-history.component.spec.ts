import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { ConversationHistoryComponent } from './conversation-history.component';
import { TtmConversationMessagesService } from '../../../ttm-services/ttm-conversation-messages.service';


class MockService{
    getMessagesHistory: Observable<any> = Observable.empty();
    
    private _messages;
    get messages(){
        return this._messages;
    }
}
const mockMessages = [
    {id:1,message:'loquesea'},
    {id:2,message:'loqueseados'}
]
describe('Component: ConversationHistoryComponent',()=>{
    
    let component: ConversationHistoryComponent;
    let fixture: ComponentFixture<ConversationHistoryComponent>;
    
    beforeEach(()=>{
        
        TestBed.configureTestingModule({
            declarations: [ ConversationHistoryComponent ],
            providers:[ {provide:TtmConversationMessagesService, useClass: MockService}]
        });
        
        fixture = TestBed.createComponent(ConversationHistoryComponent);
        component = fixture.componentInstance;
    });
    
    it ('Should get the messages history from controller',()=>{
        let service = TestBed.get(TtmConversationMessagesService);
       
        spyOnProperty (service, 'messages', 'get').and.returnValue(Observable.from([ mockMessages]));
        fixture.detectChanges();
        
        expect (component.messages).toBe(mockMessages);
    });

})