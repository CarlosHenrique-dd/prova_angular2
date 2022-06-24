import { Categoria } from './categorias';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiKey = 'https://music-api-2022.herokuapp.com/documentation'

  constructor(private httpClient: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.apiKey)}

  createCategorias(categoria: Categoria):Observable<Categoria>{
    return this.httpClient.post<Categoria>(this.apiKey, categoria)}

}
