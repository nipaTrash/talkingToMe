import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';

import { TalkingToMe } from './talkingtome';

describe('TalkingToMe component',()=>{
    
    let component: TalkingToMe;
    let fixture: ComponentFixture<TalkingToMe>
        
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule.withRoutes([]) ],
            declarations: [ TalkingToMe ]
        });
        fixture = TestBed.createComponent(TalkingToMe);
        component = fixture.componentInstance;
    });
    
    it('Should have router outlet',()=>{
       let de = fixture.debugElement.query(By.directive(RouterOutlet));
        
        expect(de).not.toBeNull();
    });
    
    
})