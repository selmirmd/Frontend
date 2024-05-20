import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLocalStorageAvailable = typeof localStorage !== 'undefined';
  constructor(private httpClient: HttpClient) { }
   
 
  /*authenticate(username:string, password:string) {
    if (username === "amine" && password === "1234") {
      
           sessionStorage.setItem('username', username) 
       
      return true;
    } else {
      return false;
    }
  }*/
  authenticate(username: any, password: any) {

    let userData:any = this.httpClient.post('http://ams.smart-it-partner.com:7006/api/auth/signin',
    {"username":username,"password":password}).pipe(
      map(
        (data:any) => {
          if (this.isLocalStorageAvailable)
            {
              sessionStorage.setItem('jwtToken', data.accessToken);
              sessionStorage.setItem('username', data.username);
              userData = data;
             // console.log(data);
            }


        }
      )
    );
    return userData;
  }



  isUserLoggedIn() {
    if (this.isLocalStorageAvailable)
    {
  let user = sessionStorage.getItem('username')
       return !(user === null)
    }
    return false
  }


  logOut() {
    sessionStorage.removeItem('jwtToken')
    sessionStorage.removeItem('username')
  }

}
