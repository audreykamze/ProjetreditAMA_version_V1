import { Injectable } from '@angular/core';
import { Article } from './article/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(){}
  getarticles(): Article[]{
  //pour chaque article qu'il recoit, il va mettre a jour
  //le composant enfant qui est article.component
      return[
        new Article('article1','link1',2),
        new Article('article2','link2',1),
        new Article('article3','link3',5),
        new Article('article4','link4',1),
      ];
    }
}
