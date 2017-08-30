import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IframeViewer } from './iframe-viewer/iframe-viewer.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ 
    IframeViewer, 
    AppComponent 
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}