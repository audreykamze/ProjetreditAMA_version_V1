import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { findIndex } from 'rxjs';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']

})
export class ArticleComponent implements OnInit {

//intance de notre classe article
@Output()
deleteEvent=new EventEmitter()
@Input()
article:Article=new Article('tmp','link');
updatebp: boolean=false;
//contructeur vide
  constructor() {
   }

   //boolean pour arreter la propagation de l'evenement.
   votesUp():boolean{

     this.article.voteUp();
     return false;
   }

   votesDown():boolean{
     this.article.voteDown();
     return false;
   }

  delete(id:number){
      this.deleteEvent.emit(id);
  }
  ngOnInit(): void {

  }

  update(){
    this.updatebp=true;
  }

  updateA(title: HTMLInputElement,link:HTMLInputElement,id:number){
      this.article.title=title.value;
      this.article.link=link.value;
      return false;
  }

}
