import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { QuizListSelectComponent } from './quizzes/quiz-list-select/quiz-list-select.component';
import { PlayQuizPageComponent } from './pages/play-quiz-page/play-quiz-page.component';

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
    QuizListSelectComponent,
    PlayQuizPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
