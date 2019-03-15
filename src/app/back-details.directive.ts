import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[BackDetails]'
})
export class BackDetailsDirective {

  constructor(element:ElementRef) {
    element.nativeElement.style.color="hotpink";
    element.nativeElement.style.background="black";
  }
}