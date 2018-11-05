import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TalkingToMeModule } from './talkingtome/talkingtome.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TalkingToMeModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
