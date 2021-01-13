import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  
  {
    path: 'add-space',
    loadChildren: () => import('./pages/add-space/add-space.module').then( m => m.AddSpacePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile-add',
    loadChildren: () => import('./pages/profile-add/profile-add.module').then( m => m.ProfileAddPageModule)
  },
  {
    path: 'user-group',
    loadChildren: () => import('./pages/user-group/user-group.module').then( m => m.UserGroupPageModule)
  },
  {
    path: 'update-space/:category',
    loadChildren: () => import('./pages/update-space/update-space.module').then( m => m.UpdateSpacePageModule)
  },
  {
    path: 'working-spaces',
    loadChildren: () => import('./pages/homepages/working-spaces/working-spaces.module').then( m => m.WorkingSpacesPageModule)
  },
  
  {
    path: 'view-space/:spaceuid/:profuid/:spaceId',
    loadChildren: () => import('./pages/homepages/view-space/view-space.module').then( m => m.ViewSpacePageModule)
  },
  {
    path: 'view-space',
    loadChildren: () => import('./pages/homepages/view-space/view-space.module').then( m => m.ViewSpacePageModule)
  },
  {
    path: 'viewcomments/:getProfuid/:getSpaceuid/:getSpaceId',
    loadChildren: () => import('./pages/homepages/viewcomments/viewcomments.module').then( m => m.ViewcommentsPageModule)
  },
  {
    path: 'user-landing',
    loadChildren: () => import('./pages/user-pages/user-landing/user-landing.module').then( m => m.UserLandingPageModule)
  },
  {
    path: 'booking-history/:reservuid/:profilesuid/:profileuid/:spaceuid/:useruid',
    loadChildren: () => import('./pages/user-pages/booking-history/booking-history.module').then( m => m.BookingHistoryPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./pages/user-pages/favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'favourite-space/:spaceuid/:profilesuid/:profileuid/:favouriteuid',
    loadChildren: () => import('./pages/user-pages/favourite-space/favourite-space.module').then( m => m.FavouriteSpacePageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./feedback/messages/messages.module').then( m => m.MessagesPageModule)
  },
 
  {
    path: 'view-gallary/:spaceid',
    loadChildren: () => import('./pages/view-gallary/view-gallary.module').then( m => m.ViewGallaryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
