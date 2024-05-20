import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from '../../../Models/provider';
import { ProviderService } from '../../../Services/provider.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrl: './add-provider.component.css'
})
export class AddProviderComponent   {
 

  constructor(private providerservice:ProviderService,private router:Router){

  }

  addProvider(providerForm:any)
  {

     let provider:Provider={
      name:providerForm.name,
      address:providerForm.address,
      email:providerForm.email
     };
   this.providerservice.addProvider(provider).subscribe(data=>{
    this.router.navigate(["listProviders"])
   })
  }



}
