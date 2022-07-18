import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { CuriositiesComponent } from './components/pages/curiosities/curiosities.component';
import { EmblemsComponent } from './components/pages/emblems/emblems.component';

import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RankingComponent } from './components/pages/ranking/ranking.component';
import { SearchComponent } from './components/pages/search/search.component';
import { NewUserComponent } from './components/pages/new-user/new-user.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { QuestionComponent } from './components/pages/question/question.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { UserComponent } from './components/pages/user/user.component';
import { AuthorComponent } from './components/pages/author/author.component';
import { QuizComponent } from './components/pages/quiz/quiz.component';
import { RegisterQuizComponent } from './components/pages/register-quiz/register-quiz.component';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'curiosities', component: CuriositiesComponent },
  { path: 'emblems', component: EmblemsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'search', component: SearchComponent },
  { path: 'users/new', component: NewUserComponent },

  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'question',
    component: QuestionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'author',
    component: AuthorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'quiz',
    component: QuizComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterQuizComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
