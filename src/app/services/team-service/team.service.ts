import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../../interfaces/team';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private apiUrl: string = 'http://localhost:8080/teams';
  constructor(private readonly http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }
}
