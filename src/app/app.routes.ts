import { Routes } from '@angular/router';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';

export const routes: Routes = [
  { path: 'players', component: PlayerListComponent },
  { path: 'player/:id', component: PlayerDetailComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'team/:id', component: TeamDetailComponent },
  { path: '', redirectTo: '/players', pathMatch: 'full' },
];
