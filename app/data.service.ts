import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
    export class DataService {
        
        private messageSource = new BehaviorSubject<string>("Fala Mano");
        currentMessage = this.messageSource.asObservable();
        
        constructor() { 

        }
        
        changeMessage(message: string) {
            this.messageSource.next(message)
        }
}