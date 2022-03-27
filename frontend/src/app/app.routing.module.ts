import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { PlayQuizPageComponent } from './pages/play-quiz-page/play-quiz-page.component';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';
import { GuidelinesPageComponent } from './pages/guidelines-page/guidelines-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {CreateQuizInformationComponent} from './pages/create-quiz-information/create-quiz-information.component';
import {CreateQuizPageComponent} from './pages/create-quiz-page/create-quiz-page.component';
import {UpdateQuizzesComponent} from './pages/update-quizzes/update-quizzes.component';

const routes: Routes = [
    // PAGES
    {path: 'main-page', component: MainPageComponent},
    {path: 'play-page', component: PlayPageComponent},
    {path: 'play-quiz-page/:id', component: PlayQuizPageComponent},
    {path: 'manage-page', component: ManagePageComponent},
    {path: 'guidelines-page', component: GuidelinesPageComponent},
    {path: 'about-page', component: AboutPageComponent},
    {path: 'account-page', component: AccountPageComponent},
    {path: 'sign-in-page', component: SignInPageComponent},
    {path: 'login-page', component: LoginPageComponent},
    {path: 'information-quiz-page', component: CreateQuizInformationComponent},
    {path: 'create-quiz-page', component: CreateQuizPageComponent},
    {path: 'update-quizzes', component: UpdateQuizzesComponent},

    {path: '', redirectTo: '/main-page', pathMatch: 'full'},

    // QUIZ
    {path: 'user-list', component: UserListComponent},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
