import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from './Music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private apiKey = 'https://music-api-2022.herokuapp.com/documentation'

  constructor(private httpClient: HttpClient) { }
  getMusic():Observable<Music[]>{
    return this.httpClient.get<Music[]>(this.apiKey)
  }
}
