import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Posts } from '../../models/Posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Posts[];

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(posts);
    });
  }

}
