import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataTablesModule} from 'angular-datatables';
  
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdateProviderComponent } from './components/provider/update-provider/update-provider.component';
import { AddProviderComponent } from './components/provider/add-provider/add-provider.component';
import { ListProvidersComponent } from './components/provider/list-providers/list-providers.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListArticlesComponent } from './components/article/list-articles/list-articles.component';
import { AddArticleComponent } from './components/article/add-article/add-article.component';
import { UpdateArticleComponent } from './components/article/update-article/update-article.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { AproposComponent } from './components/apropos/apropos.component';
import { MessageComponent } from './components/message/message.component';
import { RegistrationComponent } from './components/registration/registration.component';

 
@NgModule({
  declarations: [
    AppComponent,
  
 
    NavbarComponent,
           UpdateProviderComponent,
           AddProviderComponent,
           ListProvidersComponent,
           ContactComponent,
           ListArticlesComponent,
           AddArticleComponent,
           UpdateArticleComponent,
           LoginComponent,
           LogoutComponent,
           AproposComponent,
           MessageComponent,
           RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
