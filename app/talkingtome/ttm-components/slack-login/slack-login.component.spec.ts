/*import { FormBuilder } from '@angular/forms';

import { SlackLoginComponent } from './slack-login.component';

describe('SlackLoginComponent',()=>{
    
    let slackLogin: SlackLoginComponent;
    
    beforeEach(()=>{
        slackLogin = new SlackLoginComponent(new FormBuilder());
    })
    it('should create form with two controls',()=>{
        
        slackLogin.ngOnInit();
        
        expect (slackLogin.form.contains('name')).toBeTruthy();
    });
    it ('should be name required', ()=>{
        
        slackLogin.ngOnInit();
        
        let control = slackLogin.form.get('name');
        control.setValue('');
        expect (control.valid).toBeFalsy();
    });
    
    it ('should emit an event',()=>{
        let value = null;
        slackLogin.loginClicked.subscribe(res => value = res);
        
        slackLogin.onSubmit();
        
        expect (value).toBe(1);
    });
})*/