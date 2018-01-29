import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './sass.component.html',
  styleUrls: ['./sass.component.scss']
})
export class SassComponent implements OnInit {
  @Input() name: string
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false

  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean) {
    this.onVoted.emit(agreed);
    this.voted = true;
  }

}
