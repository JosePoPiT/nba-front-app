import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../../interfaces/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {}

  getPlayers(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(`${this.apiUrl}players`);
  }

  getPlayerById(id: number): Observable<Player> {
    return this.httpClient.get<Player>(`${this.apiUrl}/player-detail/${id}`);
  }
}
