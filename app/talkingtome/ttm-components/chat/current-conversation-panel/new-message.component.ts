import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { TtmNewMessageService } from '../../../ttm-services/ttm-new-message.service';

import { HOVER_INPUT } from '../../../styles/forms';

@Component({
    selector:'new-message',
    templateUrl: './new-message.component.html',
    styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit{
    
    private _fb: FormBuilder;
    private _ttmNewMessageService: TtmNewMessageService;
    private _inputMessage;
    
    newMessageForm: FormGroup;
    
    constructor(fb: FormBuilder, ttmNewMessageService:TtmNewMessageService){
        this._fb = fb;
        this._ttmNewMessageService = ttmNewMessageService;
    }
    
    ngOnInit(){
        this.newMessageForm = this._fb.group({
           newMessage:['',Validators.required]
        });
    }
 
    public onSend(){
        
        this._sendMessage().then((res)=>{
            if (res.ok){
                this._cleanInput();
            }   
        });
        
    }
    
    private _sendMessage(){
        
        const message = this.newMessageForm.get('newMessage').value;

        return this._ttmNewMessageService.sendMessage(message);
        
    }
    
    private _cleanInput() {
        this.newMessageForm.get('newMessage').setValue('');
    }
    
    
}