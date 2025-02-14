import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobData } from '../job-data';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-job-offer',
  imports: [NgOptimizedImage],
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
