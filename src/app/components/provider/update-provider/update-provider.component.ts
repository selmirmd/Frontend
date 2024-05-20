import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../../Services/provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from '../../../Models/provider';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrl: './update-provider.component.css'
})
export class UpdateProviderComponent implements  OnInit {
idprovider!:number;
name!:string;
address!:string;
email!:string;

constructor(private providerservice:ProviderService,private activateroute:ActivatedRoute,private router:Router){

}
  ngOnInit(): void {
     this.activateroute.params.subscribe(params=> 
      this.idprovider=params['id'] 
      )
      this.getProviderById(this.idprovider);
  }

  getProviderById(idprovider:number){
    
    this.providerservice.geProvidertbyId(this.idprovider).subscribe(data=>{
      
      this.name=data.name,
      this.address=data.address,
      this.email=data.email
    })
  }

  editProvider(){
    
    let provider:Provider={
      id:this.idprovider,
      name:this.name,
      address:this.address,
      email:this.email
    };
    this.providerservice.editProvider(provider).subscribe(
      data=>{
        this.router.navigate(["listProviders"])
      }
    )

  }

}
