import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

const url: string = "https://jsonplaceholder.typicode.com/posts";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost():Observable<any> {
    return this.http.get(url);
  }
  getPostById():Observable<any>{
    let address = url+"/1";
    console.log(address);
    return this.http.get(address)
  }
}
