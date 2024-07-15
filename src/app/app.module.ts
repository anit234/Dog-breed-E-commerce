import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { BannerComponent } from './banner/banner.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { DogListComponent } from './container/dog-list/dog-list.component';
import { AllDogsComponent } from './container/dog-list/all-dogs/all-dogs.component';
import { FilterComponent } from './container/dog-list/filter/filter.component';
// import { DogListTableComponent } from './add-remove-dog/dog-details/dog-list-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    AppMenuComponent,
    BannerComponent,
    ContainerComponent,
    SearchComponent,
    DogListComponent,
    AllDogsComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
