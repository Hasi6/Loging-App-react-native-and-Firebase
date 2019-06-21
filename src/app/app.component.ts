import { Post } from './posts/post';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-media';
  storedPosts: Post[] = [];

  onPostAdded(post) {
    this.storedPosts.unshift(post);
  }
}
