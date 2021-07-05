import { Post } from './interfaces/post';
import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [];
  article: Post = { userId: 1, id: 1, title: "", body: ""};
  constructor(private post:PostService){}
  ngOnInit(): void {
    this.post.getPost().subscribe((s:Post[]) => {this.posts = s} );
    this.post.getPostById().subscribe((a:Post) => {this.article = a})
  }

  };

// initNumber = -2;
// sizeFile = 1024;
// title: string = 'myApp';
// user: User = {
//   id: 1,
//   name: 'Alexander',
//   y: 10,
