import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/category.model';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-stats-categories-page',
  templateUrl: './stats-categories-page.component.html',
  styleUrls: ['./stats-categories-page.component.scss']
})
export class StatsCategoriesPageComponent implements OnInit {

  category: Category;

  constructor(private router: Router, public categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  categorySelected(category: Category) {
    this.categoryService.setSelectedCategory(category);
    this.router.navigate(['/stats-page/']);
  }

}
