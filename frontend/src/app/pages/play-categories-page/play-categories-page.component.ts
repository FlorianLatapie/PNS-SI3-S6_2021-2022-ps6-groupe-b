import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/category.model';
import {Router} from '@angular/router';
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-play-categories-page',
  templateUrl: './play-categories-page.component.html',
  styleUrls: ['./play-categories-page.component.scss']
})
export class PlayCategoriesPageComponent implements OnInit {

  constructor(private router: Router, public quizService: QuizService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  categorySelected(category: Category) {
    this.quizService.setSelectedCategory(category);
    this.router.navigate(['/play-page/']);
  }
}
