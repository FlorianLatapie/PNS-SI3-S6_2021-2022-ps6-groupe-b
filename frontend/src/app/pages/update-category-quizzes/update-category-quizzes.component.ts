import { Component, OnInit } from '@angular/core';
import {Category} from "../../../models/category.model";
import {Router} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-update-category-quizzes',
  templateUrl: './update-category-quizzes.component.html',
  styleUrls: ['./update-category-quizzes.component.scss']
})
export class UpdateCategoryQuizzesComponent implements OnInit {

  categorie: Category;

  constructor(private router: Router, public quizService: QuizService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  categorySelected(categorie: Category) {
    this.quizService.setSelectedCategory(categorie);
    this.router.navigate(['/update-quizzes/']);
  }
}
