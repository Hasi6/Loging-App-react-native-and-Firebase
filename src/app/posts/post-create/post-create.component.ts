import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  title: string;
  body: string;
  @Output() postCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddPost() {
    const post = {
      title: this.title,
      body: this.body
    }
    this.postCreated.emit(post);
    this.title = '';
    this.body = '';
  }

}
