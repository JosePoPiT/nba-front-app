import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player-service/player.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-player-detail',
  standalone: true,
  imports: [HttpClientModule],
  providers: [PlayerService],
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.css',
})
export class PlayerDetailComponent implements OnInit {
  constructor(private readonly playerService: PlayerService) {}
  ngOnInit(): void {}


  
}
