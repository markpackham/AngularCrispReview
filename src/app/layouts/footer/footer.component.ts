import { Component, OnInit } from '@angular/core';
import { Temporal } from '@js-temporal/polyfill';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  theCurrentYear = Temporal.Now.plainDateISO().year;
  yourTimeZone = Temporal.Now.zonedDateTimeISO().toPlainTime();

  ngOnInit(): void {
  }

}
