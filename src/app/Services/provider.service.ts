import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Provider } from '../Models/provider';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {


  constructor(private http: HttpClient) {
   }
  // token:any = sessionStorage.getItem('jwtToken');
   
  getAllProviders() {
    //const headers = new HttpHeaders({ Authorization: 'Bearer '+this.token});
   // return this.http.get<Provider[]>(environment.baseUrl+"/providers",{headers});
    return this.http.get<Provider[]>(environment.baseUrl+"/providers");
  }
 
  addProvider(provider: Provider) {
    //const headers=new HttpHeaders({Authorization:'Bearer'+this.token});
   // return this.http.post<Provider>(environment.baseUrl+"/providers",provider,{headers})

   
    return this.http.post<Provider>(environment.baseUrl+"/providers",provider )
  }

  deleteProvider(provider: Provider) {
     
    //console.log(provider.id);
    return this.http.delete(environment.baseUrl+"/providers/"+provider.id )
  }

  editProvider(provider: Provider) {
    
    return this.http.put<Provider>(environment.baseUrl+"/providers/"+provider.id, provider )
  }
  geProvidertbyId(idprovider: number) {
     
    return this.http.get<Provider>(environment.baseUrl+"/providers/"+idprovider )
  } 
}
