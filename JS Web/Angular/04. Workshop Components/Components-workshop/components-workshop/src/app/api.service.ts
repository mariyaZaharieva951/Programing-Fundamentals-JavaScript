import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
import { Post } from './interfaces/posts';
import { Theme } from './interfaces/themes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTheme(id: string) {
    const {appUrl} = environment;
    return this.http.get<Theme>(`${appUrl}/themes/${id}`)
  }


  getThemes() {
    const {appUrl} = environment;
    return this.http.get<Theme[]>(`${appUrl}/themes`)
  }

  getPosts(limit?: number) {
    const {appUrl} = environment;
    const limitFilter = limit ? `?limit=${limit}` : '';
    return this.http.get<Post[]>(`${appUrl}/posts/${limitFilter}`)
  }
}
