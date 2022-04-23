import {Component, OnInit} from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {Router} from '@angular/router';
import {Category} from '../../../models/category.model';
import {QuizService} from '../../../services/quiz.service';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {
  category: Category;

  constructor(private router: Router, private quizService: QuizService) {
    this.quizService.categorySelected$.subscribe(category => this.category = category);
  }

  ngOnInit(): void {
  }

  quizSelected(quiz: Quiz): void {
    this.router.navigate(['/stats-user-page/' + quiz.id]);
  }
}
