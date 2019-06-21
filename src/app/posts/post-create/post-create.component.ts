import { Post } from './../post';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  
  @Output() postCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  onAddPost(posts: NgForm) {
    if(posts.invalid){
      return;
    }
    const post: Post = {
      title: posts.value.title,
      body: posts.value.body
    }
    this.postCreated.emit(post);
  }

  getErrorMessage(error){
    if(error.value == ''){
      return `${error.name} is required`;
    }
    else if(error.name == 'title'){
      return `${error.name} must between 3 and 10 charectors`;
    }
    else if(error.name == 'body'){
      return `${error.name} must between 3 and 100 charectors`;
    }
  }

}
