import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
    selector:'signin-route',
    template:`
        <slack-login></slack-login>
        <!--<ttm-slack-login></ttm-slack-login>-->
    `
})
export class SigninRouteComponent{
    
    
    slackLogin(event){
        console.log('recibe');
        console.log(event);
    }
}