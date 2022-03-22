import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';
import { GuidelinesPageComponent } from './pages/guidelines-page/guidelines-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {CreateQuizInformationComponent} from './pages/create-quiz-information/create-quiz-information.component';

const routes: Routes = [
    {path: 'main-page', component: MainPageComponent},
    {path: 'play-page', component: PlayPageComponent},
    {path: 'manage-page', component: ManagePageComponent},
    {path: 'guidelines-page', component: GuidelinesPageComponent},
    {path: 'about-page', component: AboutPageComponent},
    {path: 'account-page', component: AccountPageComponent},
    {path: 'sign-in-page', component: SignInPageComponent},
    {path: 'login-page', component: LoginPageComponent},
    {path: 'information-quiz-page', component: CreateQuizInformationComponent},


    {path: 'user-list', component: UserListComponent},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    { path: '', redirectTo: '/main-page', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
