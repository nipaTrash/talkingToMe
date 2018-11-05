import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { NewMessageComponent } from './new-message.component';
import { TtmNewMessageService } from '../../../ttm-services/ttm-new-message.service';

class MockService{
    
    res = {'ok':true};

    sendMessage(){
        return Promise.resolve(this.res);
    }
    
}

describe('Component: NewMessageComponent',()=>{
    let component: NewMessageComponent;
    let fixture: ComponentFixture <NewMessageComponent>;
    
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [ ReactiveFormsModule ],
            declarations: [ NewMessageComponent ],
            providers: [{ provide:TtmNewMessageService, useClass:MockService }]
        });
        fixture = TestBed.createComponent(NewMessageComponent);
        component = fixture.componentInstance;
    });
    
    it('Should be required the newMessage input',()=>{
        component.ngOnInit();
        let newMessageInput = component.newMessageForm.get('newMessage');
        newMessageInput.setValue('');
        
        expect (newMessageInput.valid).toBeFalsy();
    });
    
    it('Should clean the newMessage input if the message is been sent',fakeAsync(()=>{
        component.ngOnInit();
        let newMessageInput = component.newMessageForm.get('newMessage');
        newMessageInput.setValue('message sent');
        
        component.onSend();
        tick();
        fixture.detectChanges();
        
        expect(newMessageInput.value).toEqual('');
        
    }));
    
})