import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../../models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input()
  category: Category;

  @Output()
  categorySelected: EventEmitter<Category> = new EventEmitter<Category>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(): void{
    this.categorySelected.emit(this.category);
  }
}
