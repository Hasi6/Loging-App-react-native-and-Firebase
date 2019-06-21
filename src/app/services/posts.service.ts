import { Posts } from './../models/Posts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
posts: Posts[];
  constructor(
    private http: HttpClient
  ) { }

  getPosts():Observable<Posts[]>{
    return this.http.get<Posts[]>(this.postsUrl);
  }

  savePost(){

  }
}
