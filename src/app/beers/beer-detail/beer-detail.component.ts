import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit {
  @Input() beer
  public result = null;
  constructor() { }

  ngOnInit() {
  }
  gravityDifference(originalGravity, targetGravity) {
    return this.result = originalGravity - targetGravity;
  }
}
