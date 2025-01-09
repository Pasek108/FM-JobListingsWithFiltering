import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-job-offer',
  imports: [],
  templateUrl: './job-offer.component.html',
  styleUrl: './job-offer.component.css',
})
export class JobOfferComponent {
  @Output() addFilter = new EventEmitter<string>;
  @Input() data!: {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  };

  addToFilters(value: string) {
    this.addFilter.emit(value);
  }
}
