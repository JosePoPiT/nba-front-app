import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { Team } from '../../interfaces/team';
import { TeamService } from '../../services/team-service/team.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [MatCardModule, NgFor, MatPaginatorModule, RouterLink, CommonModule, HttpClientModule],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css',
  providers: [TeamService]
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];
  displayedTeams: Team[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private teamService: TeamService, private router: Router) {}

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams() {
    this.teamService.getTeams().subscribe((teams: Team[]) => {
      this.teams = teams;
      this.displayedTeams = teams.slice(0, 10);
    });
  }

  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.displayedTeams = this.teams.slice(startIndex, endIndex);
  }

  goToTeamDetail(teamId: number) {
    this.router.navigate(['/team', teamId]);
  }
}
