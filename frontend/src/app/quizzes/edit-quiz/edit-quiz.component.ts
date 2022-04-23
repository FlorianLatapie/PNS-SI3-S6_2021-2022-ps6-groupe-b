import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  public quiz: Quiz;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id).subscribe( q => {
      this.quiz = q;
      this.quizService.setSelectedCategory(q.category);
    });
  }

  ngOnInit(): void {}

}
