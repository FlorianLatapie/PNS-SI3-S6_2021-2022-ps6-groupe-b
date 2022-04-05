import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from '../../../models/category.model';
import {Quiz} from "../../../models/quiz.model";
import {Router} from "@angular/router";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryList: Category[];

  @Output()
  categorySelectedFromChild: EventEmitter<Category> = new EventEmitter<Category>();

  constructor(private router: Router, public categoryService: CategoryService) {
    this.categoryService.categories$.subscribe((categories: Category[]) => {
      this.categoryList = categories;
    });
  }

  ngOnInit(): void {
  }

  categorySelected(selected: Category): void {
    // console.log(selected);
    this.categorySelectedFromChild.emit(selected);
  }

}
