import { Component } from '@angular/core';

@Component({
  selector: 'app-number-pipe',
  templateUrl: './number-pipe.component.html',
  styleUrls: ['./number-pipe.component.css']
})
export class NumberPipeComponent {

  pi: number = 3.141592;
  e: number = 2.718281828459045;

}
