import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../interfaces/posts';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  postsList: Post[] = [];

  constructor(private apiService: ApiService) {
      
  }

  ngOnInit(): void {
   this.apiService.getPosts().subscribe({
    next: (posts) => {
      console.log(posts);
    }
    });

  }
}
