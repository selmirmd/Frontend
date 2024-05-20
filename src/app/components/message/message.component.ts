import { NodeWithI18n } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
@Input() message:string="";
@Input() message1:string="";

 

@Output() eventToSend = new EventEmitter();

sendEvent() { 
  this.eventToSend.emit(new Date() );
}

}
