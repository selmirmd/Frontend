import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './components/article/add-article/add-article.component';
import { ListArticlesComponent } from './components/article/list-articles/list-articles.component';
import { UpdateArticleComponent } from './components/article/update-article/update-article.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AddProviderComponent } from './components/provider/add-provider/add-provider.component';
import { ListProvidersComponent } from './components/provider/list-providers/list-providers.component';
import { UpdateProviderComponent } from './components/provider/update-provider/update-provider.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGaurdService } from './Services/auth-gaurd.service';
 
 
const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar"  },
  {path:'listProviders',component:ListProvidersComponent,canActivate: [AuthGaurdService] },
  {path:'addProvider',component:AddProviderComponent,canActivate: [AuthGaurdService] },
  {path:'editProvider/:id',component:UpdateProviderComponent,canActivate: [AuthGaurdService] },
  {path:'listArticles',component:ListArticlesComponent,canActivate: [AuthGaurdService] },
  {path:'addArticle',component:AddArticleComponent,canActivate: [AuthGaurdService] },
  {path:'editArticle/:id',component:UpdateArticleComponent,canActivate: [AuthGaurdService] },
  {path:'contact',component:ContactComponent,canActivate: [AuthGaurdService] },
  { path: 'login', component: LoginComponent  },
  { path: 'logout', component: LogoutComponent,canActivate: [AuthGaurdService]  },
  { path: 'register', component: RegistrationComponent  },
  {
    path: 'dashbaordAdmin',
    loadChildren: () => import('./dashbord-admin/dashbord-admin.module').then(m => m.DashbordAdminModule)
  },
  {
    path: 'dashbaordMedecin',
    loadChildren: () => import('./dashbord-medecin/dashbord-medecin.module').then(m => m.DashbordMedecinModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
