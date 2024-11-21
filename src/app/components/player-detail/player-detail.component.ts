import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PlayerService } from '../../services/player-service/player.service';
import { HttpClientModule } from '@angular/common/http';
import { Player, PlayerDetail } from '../../interfaces/player';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [HttpClientModule, RouterLink, CommonModule],
  providers: [PlayerService],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css',
})
export class PlayerDetailComponent implements OnDestroy {
  player!: Player;
  detail = signal<PlayerDetail | null>(null);
  subs = new Subscription();
  hasError: boolean = false;
  errorMessage: string = '';
  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getDataPlayer();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getDataPlayer() {
    const navigation = this.router.getCurrentNavigation();
    this.player = navigation?.extras.state?.['player'];

    if (!this.player) {
      this.router.navigate(['/players']);
      return;
    }

    const playerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getPlayerDetail(playerId);
  }

  getPlayerDetail(playerId: number) {
    const obs$ = this.playerService.getPlayerById(playerId).subscribe({
      next: (detail: PlayerDetail) => {
        this.detail.set(detail);
      },
      error: (error) => {
        console.error(error);
        this.hasError = true;
        this.errorMessage =
          'No se pudo cargar el jugador. Intente nuevamente más tarde.';
      },
    });
    this.subs.add(obs$);
  }
}
