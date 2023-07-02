import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../interfaces/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postsList: Post[] = [];

  constructor(private apiService: ApiService) {
      
  }

  ngOnInit(): void {
   this.apiService.getPosts(5).subscribe({
    next: (posts) => {
     this.postsList = posts;
    }
    });

  }
}
