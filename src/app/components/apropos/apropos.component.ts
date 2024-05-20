import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent {

  @Input() campany:string="";
  @Output() eventToSend = new EventEmitter();

   phone:string ="29650145";
  email:string="selmi.rmd@gmail.com";
  
  sendEvent() { 
    this.eventToSend.emit("Message du fils vers le pere");
  }


  
}
