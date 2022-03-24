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

const routes: Routes = [
    // PAGE
    {path: 'main-page', component: MainPageComponent},
    {path: 'play-page', component: PlayPageComponent},
    {path: 'play-quiz-page/quiz-id-:id/question-id-:id', component: PlayQuizPageComponent},
    {path: 'manage-page', component: ManagePageComponent},
    {path: 'guidelines-page', component: GuidelinesPageComponent},
    {path: 'about-page', component: AboutPageComponent},
    {path: 'account-page', component: AccountPageComponent},
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
