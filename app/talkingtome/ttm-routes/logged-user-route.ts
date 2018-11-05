import { Component, OnInit } from '@angular/core';

@Component ({
    selector:'logged-user-route',
    template: `
        <ttm-chat></ttm-chat>

    `
})
export class LoggedUserRoute implements OnInit{
    
    private _url = new URL(window.location.href);
    
    authCode: string;
    
    ngOnInit(){
        this.authCode = this._url.searchParams.get('code');
        //console.log(this._code);
    }
}