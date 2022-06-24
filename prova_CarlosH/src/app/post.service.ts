import { Categoria } from './category/categorias';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'https://music-api-2022.herokuapp.com/documentation';

  constructor(private http:HttpClient) { }

  createCategory(category: Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(this.baseUrl, category)
  }
}
