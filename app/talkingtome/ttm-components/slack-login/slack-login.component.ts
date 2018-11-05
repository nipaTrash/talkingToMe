import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector:'slack-login',
    templateUrl:'./slack-login.component.html'
})
export class SlackLoginComponent implements OnInit{
    
 
    form: FormGroup;

    @Output() loginClicked = new EventEmitter();
    
    constructor (private fb:FormBuilder){
        
    }
    
    ngOnInit(){
        this.form = this.fb.group({
            name:['', Validators.required],
            email:['']
        })
    }
    
    onSubmit(){
        this.loginClicked.emit();
    }
}