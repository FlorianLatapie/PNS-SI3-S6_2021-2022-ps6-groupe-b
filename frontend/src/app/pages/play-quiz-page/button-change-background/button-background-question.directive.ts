import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonBackgroundQuestion]'
})
export class ButtonBackgroundQuestionDirective {
  @Input() correctAnswer : boolean = false;


  constructor(private elRef : ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onAnswered(){
    if(this.correctAnswer){
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    }
     else{
       this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#997387');
       this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
     }

  }
}
