import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerService } from '../../services/player-service/player.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { Player } from '../../interfaces/player';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [
    HttpClientModule,
    MatCardModule,
    NgFor,
    MatPaginatorModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css',
  providers: [PlayerService],
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  displayedPlayers: Player[] = [];
  hasError: boolean = false;
  errorMessage: string = '';
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe({
      next: (players: Player[]) => {
        this.players = players;
        this.displayedPlayers = players.slice(0, 10);
        this.hasError = false;
      },
      error: (error) => {
        console.error(error);
        this.hasError = true;
        this.errorMessage = 'No se pudo cargar la lista de jugadores. Intente nuevamente más tarde.';
      },
    }
    );
  }

  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.displayedPlayers = this.players.slice(startIndex, endIndex);
  }
}
