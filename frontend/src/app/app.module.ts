import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { AppRoutingModule } from './app.routing.module';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionComponent } from './questions/question/question.component';
import { UserComponent } from './users/user/user.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { GuidelinesPageComponent } from './pages/guidelines-page/guidelines-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateQuizInformationComponent } from './pages/create-quiz-information/create-quiz-information.component';
import { CreateQuizPageComponent } from './pages/create-quiz-page/create-quiz-page.component';
import { UpdateQuizzesComponent } from './pages/update-quizzes/update-quizzes.component';
import { PlayQuizPageStade4Component } from './pages/play-page/play-quiz-stade-pages/play-quiz-page-stade4/play-quiz-page-stade4.component';
import { PlayQuizPageStade5Component } from './pages/play-page/play-quiz-stade-pages/play-quiz-page-stade5/play-quiz-page-stade5.component';
import { PlayQuizPageStade6Component } from './pages/play-page/play-quiz-stade-pages/play-quiz-page-stade6/play-quiz-page-stade6.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { StatsQuizPageComponent } from './pages/stats-quiz-page/stats-quiz-page.component';
import { UpdateCategoryQuizzesComponent } from './pages/update-category-quizzes/update-category-quizzes.component';
import { CategoryComponent } from './categories/category/category.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { StatsCategoriesPageComponent } from './pages/stats-categories-page/stats-categories-page.component';
import { PlayCategoriesPageComponent } from './pages/play-categories-page/play-categories-page.component';
import { StatsUserPageComponent } from './pages/stats-user-page/stats-user-page.component';
import { StatsInstancesPageComponent } from './pages/stats-instances-page/stats-instances-page.component';
import { InstanceComponent } from './instances/instance/instance.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionComponent,
    UserComponent,
    UserFormComponent,
    UserListComponent,
    MainPageComponent,
    ManagePageComponent,
    PlayPageComponent,
    GuidelinesPageComponent,
    AboutPageComponent,
    AccountPageComponent,
    SignInPageComponent,
    LoginPageComponent,
    CreateQuizInformationComponent,
    CreateQuizPageComponent,
    UpdateQuizzesComponent,
    PlayQuizPageStade4Component,
    PlayQuizPageStade5Component,
    PlayQuizPageStade6Component,
    StatsPageComponent,
    StatsQuizPageComponent,
    UpdateCategoryQuizzesComponent,
    CategoryComponent,
    CategoryListComponent,
    StatsCategoriesPageComponent,
    PlayCategoriesPageComponent,
    StatsUserPageComponent,
    StatsInstancesPageComponent,
    InstanceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
