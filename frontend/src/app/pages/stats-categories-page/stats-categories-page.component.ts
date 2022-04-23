import {Component, OnInit} from '@angular/core';
import {Category} from '../../../models/category.model';
import {Router} from '@angular/router';
import {QuizService} from '../../../services/quiz.service';

@Component({
  selector: 'app-stats-categories-page',
  templateUrl: './stats-categories-page.component.html',
  styleUrls: ['./stats-categories-page.component.scss']
})
export class StatsCategoriesPageComponent implements OnInit {

  category: Category;

  constructor(private router: Router, public quizService: QuizService) {
  }

  ngOnInit(): void {
  }

  categorySelected(category: Category): void {
    this.quizService.setSelectedCategory(category);
    this.router.navigate(['/stats-page/']);
  }

}
