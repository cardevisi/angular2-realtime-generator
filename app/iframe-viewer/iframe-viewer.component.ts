import { Component } from '@angular/core';


@Component({
    selector :'iframe-viewer',
    templateUrl : './iframe-viewer.component.html'
})

export class IframeViewer {
    iframeWidth:string = '100%';
    iframeHeight:string = '100%';
    message:string = "Hello";
}