import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from '../../../Models/provider';
import { ProviderService } from '../../../Services/provider.service';

@Component({
  selector: 'app-list-providers',
  templateUrl: './list-providers.component.html',
  styleUrl: './list-providers.component.css'
})
export class ListProvidersComponent implements OnInit {
providers:Provider[]=[];

//injection le service Providerservice et Router dans le constructeur du classe
constructor(private providerservice:ProviderService ,private router:Router){

}

  ngOnInit(): void {
     this.getAllProviders();
  }

  //recuperer tous les providers
  getAllProviders(){
    this.providerservice.getAllProviders().subscribe(
      (data: Provider[])=>
      {
        this.providers=data
      },error => console.log(error)
      
      );
  }
  
Add(){
  this.router.navigate(["addProvider"])
}
Edit(provider:Provider){
 
  this.router.navigate(["editProvider",provider.id]);
}
Delete(provider:Provider){
  
this.providerservice.deleteProvider(provider).subscribe(data=>{
  this.getAllProviders();
  
   
})
}




}
