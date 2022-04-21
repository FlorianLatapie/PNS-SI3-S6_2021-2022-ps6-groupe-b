import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from '../../../models/category.model';
import {Quiz} from '../../../models/quiz.model';
import {Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';
import {QuizService} from '../../../services/quiz.service';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  user: User;
  categoryList: Category[];

  constructor(private router: Router, public categoryService: CategoryService, private quizService: QuizService, private userService: UserService) {
    this.categoryService.categories$.subscribe((categories: Category[]) => {
      this.categoryList = categories;
    });
  }

  @Output()
  categorySelectedFromChild: EventEmitter<Category> = new EventEmitter<Category>();

  ngOnInit(): void {
    this.userService.userSelected$.subscribe((user) => {
      this.user = user;
    });
  }

  categorySelected(selected: Category): void {
    // console.log(selected);
    this.categorySelectedFromChild.emit(selected);
  }

  getNbQuizzesWithCategory(category: Category): number {
    return this.quizService.getQuizByCategory(category).length;
  }

  getNbQuizzes(): number {
    let nb: number;
    this.quizService.quizzes$.subscribe(quiz => nb = quiz.length);
    return nb;
  }

}
