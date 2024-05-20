import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article1 } from '../../../Models/article';
import { ArticleService } from '../../../Services/article.service';
import { ProviderService } from '../../../Services/provider.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent implements OnInit {
listproviders!:any;
idprov!:number;
constructor(private articleservice:ArticleService,private providerservice:ProviderService,private router:Router){}
  ngOnInit(): void {
     this.providerservice.getAllProviders().subscribe(data=>{
   
      this.listproviders=data;
     });
       
  }

  addArticle(articleForm:any){
  let article:Article1={
    label:articleForm.label,
    price:articleForm.price,
    picture:articleForm.picture
  };
 this.idprov=articleForm.provider;
 
 this.articleservice.postArticle(article,this.idprov).subscribe(data=>{
this.router.navigate(["listArticles"])
 })




  }
}
