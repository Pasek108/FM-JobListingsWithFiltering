import { Component } from '@angular/core';
import data from './job-data.json';
import { JobOfferComponent } from './job-offer/job-offer.component';
import { JobData } from './job-data';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [JobOfferComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'JobListingsWithFiltering';
  filters: string[] = [];
  jobData: JobData[] = data;
  screenWith: number = 0;

  constructor() {
    this.screenWith = window.innerWidth;
    window.addEventListener('resize',() => (this.screenWith = window.innerWidth));
  }

  getFilteredJobs() {
    let filteredJobs: JobData[] = [];

    this.jobData.forEach((job) => {
      let jobBadges = [job.role, job.level];
      jobBadges = jobBadges.concat(job.languages)
      jobBadges = jobBadges.concat(job.tools);

      const filters_not_found = this.filters.filter((filter) => !jobBadges.includes(filter));
      if (filters_not_found.length == 0) filteredJobs.push(job);
    });

    return filteredJobs;
  }

  addFilter(filter: string) {
    if (this.filters.includes(filter)) return;
    this.filters.push(filter);
  }

  removeFilter(filter: string) {
    this.filters = this.filters.filter((name) => name != filter);
  }

  clearFilters() {
    this.filters = [];
  }
}
