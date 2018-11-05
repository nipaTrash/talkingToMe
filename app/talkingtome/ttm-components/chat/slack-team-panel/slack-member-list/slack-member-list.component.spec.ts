import { TestBed, ComponentFixture } from '@angular/core/testing';

import { SlackMemberListComponent } from './slack-member-list.component';
import { SlackMemberListItemComponent } from './slack-member-list-item.component';
import { TtmSlackMemberListService } from '../../../../ttm-services/ttm-slack-member-list.service';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';

class MockService{
    
    private _members;
    
    get members(){
        return this._members;
    }
    
}

const mockMembers = [
    {id:1,name:'nombre'},
    {id:2,name:'nombre'}
]

describe('SlackMemberListComponent component',()=>{
    
    let component: SlackMemberListComponent;
    let fixture: ComponentFixture<SlackMemberListComponent>;
    
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [ SlackMemberListComponent, SlackMemberListItemComponent ],
            providers: [ {provide:TtmSlackMemberListService, useClass:MockService}]
        });
        
        fixture = TestBed.createComponent(SlackMemberListComponent);
        component = fixture.componentInstance;
    });
     
    it('Should get the members through the controllers',()=>{
        let service = TestBed.get(TtmSlackMemberListService);
        spyOnProperty(service,'members','get').and.returnValue(Observable.from([ mockMembers ]))
        fixture.detectChanges();
        
        expect(component.members).toEqual(mockMembers);
    });
    
})