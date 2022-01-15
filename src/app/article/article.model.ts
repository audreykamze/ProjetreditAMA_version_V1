export class Article {
  title: string;
  link: string;
  votes: number;
  id:number;
  static ID=0;

  constructor(title:string, link:string, votes?:number){
    this.title=title;
    this.link=link;
    this.votes=votes || 0;
    this.id=Article.ID++;


  }

  //ces methodes ne retourne rien donc on n'est pas obliger de mettre un void
  voteUp(): void{
    this.votes+=1;

  }
  voteDown(): void{
    this.votes-=1;

  }



}
