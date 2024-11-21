import { Component, OnInit } from '@angular/core';
import { Team } from '../../interfaces/team';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TeamService } from '../../services/team-service/team.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './team-detail.component.html',
  styleUrl: './team-detail.component.css',
  providers: [TeamService]
})
export class TeamDetailComponent implements OnInit {
  team: Team | undefined;
  teamColor: string = '';

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.getTeamInfo();
  }

  getTeamInfo() {
    const teamId = Number(this.route.snapshot.paramMap.get('id'));
    this.teamService.getTeams().subscribe((teams: Team[]) => {
      this.team = teams.find((team) => team.id === teamId);
      if (this.team && this.team.color) {
        this.teamColor = this.team.color;
      }
      console.log(this.team);
    });
  }
}
