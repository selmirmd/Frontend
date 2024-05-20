import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Article, Article1 } from '../Models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  
  constructor(private http:HttpClient) { }

  getAllArticles(){
   return this.http.get<Article[]>(environment.baseUrl+"/articles");
  }

  postArticle(article:Article1,idprov:number){
    return this.http.post<Article1>(environment.baseUrl+"/articles/"+idprov,article)
  }


}
