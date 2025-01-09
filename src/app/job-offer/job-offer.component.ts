import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobData } from '../job-data';

@Component({
  selector: 'app-job-offer',
  imports: [],
  templateUrl: './job-offer.component.html',
  styleUrl: './job-offer.component.css',
})
export class JobOfferComponent {
  @Output() addFilter = new EventEmitter<string>;
  @Input() data!: JobData;

  addToFilters(value: string) {
    this.addFilter.emit(value);
  }
}
