import { Component, OnInit } from '@angular/core';
import {Category} from "../../../models/category.model";
import {Router} from "@angular/router";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-update-category-quizzes',
  templateUrl: './update-category-quizzes.component.html',
  styleUrls: ['./update-category-quizzes.component.scss']
})
export class UpdateCategoryQuizzesComponent implements OnInit {

  categorie: Category;

  constructor(private router: Router, public categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  categorySelected(categorie: Category) {
    this.categoryService.setSelectedCategory(categorie);
    this.router.navigate(['/update-quizzes/']);
  }
}
