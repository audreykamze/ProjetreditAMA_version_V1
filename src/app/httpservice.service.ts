import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article/article.model';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private client:HttpClient) { }



  getArticles():Observable<Article[]>{
    console.log(this.client.get<Article[]>('http://localhost:8080/articles'));
    return this.client.get<Article[]>('http://localhost:8080/articles');







  }
}
