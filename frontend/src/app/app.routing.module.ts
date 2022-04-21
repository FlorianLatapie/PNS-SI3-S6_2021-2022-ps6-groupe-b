import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PlayPageComponent } from './pages/play-page/play-page.component';
import { PlayQuizPageStade4Component } from './pages/play-page/play-quiz-stade-pages/play-quiz-page-stade4/play-quiz-page-stade4.component';
import { PlayQuizPageStade5Component } from './pages/play-page/play-quiz-stade-pages/play-quiz-page-stade5/play-quiz-page-stade5.component';
import { PlayQuizPageStade6Component } from './pages/play-page/play-quiz-stade-pages/play-quiz-page-stade6/play-quiz-page-stade6.component';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';
import { GuidelinesPageComponent } from './pages/guidelines-page/guidelines-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {CreateQuizInformationComponent} from './pages/create-quiz-information/create-quiz-information.component';
import {CreateQuizPageComponent} from './pages/create-quiz-page/create-quiz-page.component';
import {UpdateQuizzesComponent} from './pages/update-quizzes/update-quizzes.component';
import {StatsPageComponent} from "./pages/stats-page/stats-page.component";
import {StatsQuizPageComponent} from "./pages/stats-quiz-page/stats-quiz-page.component";
import {UpdateCategoryQuizzesComponent} from "./pages/update-category-quizzes/update-category-quizzes.component";
import {StatsCategoriesPageComponent} from "./pages/stats-categories-page/stats-categories-page.component";
import {PlayCategoriesPageComponent} from "./pages/play-categories-page/play-categories-page.component";

const routes: Routes = [
    // PAGES
    {path: 'main-page', component: MainPageComponent},
    {path: 'play-page', component: PlayPageComponent},
    {path: 'play-quiz-page-stade4/:id', component: PlayQuizPageStade4Component},
    {path: 'play-quiz-page-stade5/:id', component: PlayQuizPageStade5Component},
    {path: 'play-quiz-page-stade6/:id', component: PlayQuizPageStade6Component},
    {path: 'manage-page', component: ManagePageComponent},
    {path: 'guidelines-page', component: GuidelinesPageComponent},
    {path: 'about-page', component: AboutPageComponent},
    {path: 'account-page', component: AccountPageComponent},
    {path: 'sign-in-page', component: SignInPageComponent},
    {path: 'stats-page', component: StatsPageComponent},
    {path: 'stats-categories-page', component: StatsCategoriesPageComponent},
    {path: 'stats-quiz-page/:id', component: StatsQuizPageComponent},
    {path: 'login-page', component: LoginPageComponent},
    {path: 'information-quiz-page', component: CreateQuizInformationComponent},
    {path: 'create-quiz-page', component: CreateQuizPageComponent},
    {path: 'update-quizzes', component: UpdateQuizzesComponent},
    {path: 'update-category-quizzes', component: UpdateCategoryQuizzesComponent},
    {path: 'play-categories-page', component: PlayCategoriesPageComponent},

    {path: '', redirectTo: '/main-page', pathMatch: 'full'},

    // QUIZ
    {path: 'user-list', component: UserListComponent},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'edit-quiz', component: EditQuizComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
