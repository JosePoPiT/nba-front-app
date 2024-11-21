import { Component, OnDestroy, OnInit } from '@angular/core';
import { Team } from '../../interfaces/team';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TeamService } from '../../services/team-service/team.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css',
  providers: [TeamService],
})
export class TeamDetailComponent implements OnInit, OnDestroy {
  team: Team | undefined;
  teamColor: string = '';
  subs = new Subscription();
  hasError: boolean = false;
  errorMessage: string = '';
  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.getTeamInfo();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getTeamInfo() {
    const teamId = Number(this.route.snapshot.paramMap.get('id'));
    const obs$ = this.teamService.getTeams().subscribe({
      next: (teams: Team[]) => {
        this.team = teams.find((team) => team.id === teamId);
        if (this.team && this.team.color) {
          this.teamColor = this.team.color;
        }
      },
      error: (error) => {
        console.error(error);
        this.hasError = true;
        this.errorMessage =
          'No se pudo cargar el equipo. Intente nuevamente más tarde.';
      },
    });
    this.subs.add(obs$);
  }
}
