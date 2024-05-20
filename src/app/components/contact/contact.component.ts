import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

ourcampany:string="Hopital Militaire";
message:string="Tous les champs sont obligatoires!"
message1:string="*"


processEvent(message :any) { 

  alert("Message du fils est : " + message);
}

processEvent1(message :any) { 

  alert("Date jour est : " + message);
}


}
