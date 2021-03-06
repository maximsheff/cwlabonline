import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/services/auth.service';
import {SharedModule} from '../shared.module';
import {AuthGuard} from './shared/services/auth.guard';
import {CreateNewsComponent} from './create-news/create-news.component';
import {SearchPipe} from './shared/search.pipe';
import {NewsDashboardComponent} from './news-dashboard/news-dashboard.component';
import {NewsEditComponent} from './news-edit/news-edit.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    CreatePageComponent,
    CreateNewsComponent,
    NewsEditComponent,
    NewsDashboardComponent,
    DashboardPageComponent,
    EditPageComponent,
    SearchPipe
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path:'', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'create', component: CreatePageComponent,canActivate:[AuthGuard]},
          {path: 'create-news', component: CreateNewsComponent, canActivate: [AuthGuard]},
          {path: 'dashboard', component: DashboardPageComponent,canActivate:[AuthGuard]},
          {path: 'news-dashboard', component: NewsDashboardComponent,canActivate:[AuthGuard]},
          {path: 'document/:id/edit', component: EditPageComponent,canActivate:[AuthGuard]},
          {path: 'news/:id/edit', component: NewsEditComponent,canActivate:[AuthGuard]},
        ]
      }
    ])
  ],
  exports: [RouterModule, SearchPipe],
  providers:[AuthService,
              AuthGuard,]
})
export class AdminModule {

}
