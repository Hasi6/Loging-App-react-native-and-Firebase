import { Posts } from './../../models/Posts';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  title: string;
  body: string;
  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
  }

  // addPost(title, body) {
  //   if (!title || !body) {
  //     alert("Please Add Post")
  //   } else {
  //     this.postsService.savePost({title, body} as Posts).subscribe((posts)=>{
  //       console.log(posts);
  //     });
  //   }
  // }
}
