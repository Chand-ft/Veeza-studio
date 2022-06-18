import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-footerComponent
import { footerComponent } from '../components/footer.component';
//CORE_REFERENCE_IMPORT-page_4Component
import { page_4Component } from '../components/page_4.component';
//CORE_REFERENCE_IMPORT-page_3Component
import { page_3Component } from '../components/page_3.component';
//CORE_REFERENCE_IMPORT-page_2Component
import { page_2Component } from '../components/page_2.component';
//CORE_REFERENCE_IMPORT-bottomBodyComponent
import { bottomBodyComponent } from '../components/bottomBody.component';
//CORE_REFERENCE_IMPORT-searchBarComponent
import { searchBarComponent } from '../components/searchBar.component';
//CORE_REFERENCE_IMPORT-page_1_bodyComponent
import { page_1_bodyComponent } from '../components/page_1_body.component';
//CORE_REFERENCE_IMPORT-navBarComponent
import { navBarComponent } from '../components/navBar.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-footerComponent
  footerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-page_4Component
  page_4Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-page_3Component
  page_3Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-page_2Component
  page_2Component,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-bottomBodyComponent
  bottomBodyComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-searchBarComponent
  searchBarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-page_1_bodyComponent
  page_1_bodyComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-navBarComponent
  navBarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'home', component: homeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
