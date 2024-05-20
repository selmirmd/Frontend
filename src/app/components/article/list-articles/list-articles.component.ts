import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../../Models/article';
import { ArticleService } from '../../../Services/article.service';
 
@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.css'
})
export class ListArticlesComponent implements OnInit{
  dtOptions!: any;
  articles:Article[]=[];

  constructor(private articleservice:ArticleService,private router:Router){}
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
      // Add more options as needed
    };
    this.getAllArticles();
    //console.log(this.articles);
  }

getAllArticles(){
  this.articleservice.getAllArticles().subscribe(data=>this.articles=data)
}

Add(){
 
  this.router.navigate(["addArticle"]);
}

Edit(article:Article){
this.router.navigate(["editArticle",article.id])
}
Delete(article:Article){

}


}
