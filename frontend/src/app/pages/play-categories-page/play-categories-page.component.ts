import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/category.model';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-play-categories-page',
  templateUrl: './play-categories-page.component.html',
  styleUrls: ['./play-categories-page.component.scss']
})
export class PlayCategoriesPageComponent implements OnInit {

  constructor(private router: Router, public categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  categorySelected(category: Category) {
    this.categoryService.setSelectedCategory(category);
    this.router.navigate(['/play-page/']);
  }
}
