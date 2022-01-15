import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model';
import { ArticleService } from './article-service.service';
import { findIndex } from 'rxjs';
import { HttpserviceService } from './httpservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]

})
export class AppComponent  implements OnInit{
articles:Article[]=[];
  title = 'tp2redit';
  //articles: Article[];
//pour chaque article qu'il recoit, il va mettre a jour
//le composant enfant qui est article.component
  constructor(private service:HttpserviceService){

  }

  getArticles(){
    this.service.getArticles().subscribe(restArticles=>this.articles=restArticles);
  }

  ngOnInit(){
    //this.articles= this.service.getarticles();
   this.getArticles();
   console.log(this.getArticles());
   }

  addArticle(Title:HTMLInputElement, link:HTMLInputElement){
    //ajout l'element la ou on veut en fonction des valeurs entrées
   // this.articles.splice(0,0, new Article(Title.value, link.value));
    //ajoute par defaut au bout du tableau
    this.articles.push(new Article(Title.value, link.value));
    //remet les champs à zero apres avoir cliquer sur le bouton
   Title.value='';
    link.value='';
   return false;
  }


  sortedArticles(): Article[]{
    //trie du plus petit au plus grand
    return this.articles.sort((a,b)=>b.votes-a.votes);
  }


  delete(id: number){
    //trouver l'index de l'article
    let index=this.articles.findIndex( a=>a.id==id);
    //supprimer l'article par son index
    this.articles.splice(index,1);
  }




}
