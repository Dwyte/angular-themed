import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
         MatButtonModule, 
         MatSidenavModule,
         MatIconModule, 
         MatListModule, 
         MatGridListModule, 
         MatCardModule, 
         MatMenuModule, 
         MatFormFieldModule, 
         MatInputModule,
         MatPaginatorModule,
         MatRadioModule,
         MatTableModule, } from '@angular/material';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { PresViceSecComponent } from './dashboardComponents/pres-vice-sec/pres-vice-sec.component';
import { LeaderboardGraphComponent } from './dashboardComponents/leaderboard-graph/leaderboard-graph.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Leaderboard2Graph2Component } from './dashboardComponents/leaderboard2-graph2/leaderboard2-graph2.component';
import { RepresentativesComponent } from './dashboardComponents/representatives/representatives.component';
import { TallyboardComponent } from './dashboardComponents/tallyboard/tallyboard.component';
import { UploadDatabaseComponent } from './dashboardComponents/upload-database/upload-database.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ActivateComponent } from './dashboardComponents/activate/activate.component';
import { BallotComponent } from './ballot/ballot.component';
import { NominateComponent } from './dashboardComponents/nominate/nominate.component';
import {BallotfetchService} from './ballotfetch.service';

const appRoute: Routes = [
  {path:'navbar', component:NavbarComponent},
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path: 'dashboard', 
   component:DashboardComponent, children: [    
      { path: '', component: PresViceSecComponent},
      { path: 'tallyboard', component:TallyboardComponent},
      {path: 'upload', component: UploadDatabaseComponent},
      {path: 'activate', component: ActivateComponent},
    ]
  },
  {path:'ballot', component:BallotComponent},

]

@NgModule({
  declarations: [
    AppComponent,
   NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    PresViceSecComponent,
    LeaderboardGraphComponent,
    Leaderboard2Graph2Component,
    RepresentativesComponent,
    TallyboardComponent,
    UploadDatabaseComponent,
    ActivateComponent,
    BallotComponent,
    NominateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    RouterModule.forRoot(appRoute),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule ,
    MatPaginatorModule,
    MatTableModule,
    NgxChartsModule,
     MatRadioModule,
    AngularFileUploaderModule
   
  ],
  providers: [BallotfetchService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
