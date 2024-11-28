import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FriendshipcircleComponent } from './pages/friendshipcircle/friendshipcircle.component';
import { DevotionsComponent } from './pages/devotions/devotions.component';
import { AccessleadersComponent } from './pages/accessleaders/accessleaders.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'friendshipcircle', component: FriendshipcircleComponent },
  { path: 'devotions', component: DevotionsComponent },
  { path: 'accessleaders', component: AccessleadersComponent },
];

export const appRouterProviders = provideRouter(routes);
