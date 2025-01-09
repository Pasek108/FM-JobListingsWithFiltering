import { Component } from '@angular/core';
import data from './data.json';
import { JobOfferComponent } from './job-offer/job-offer.component';

@Component({
  selector: 'app-root',
  imports: [JobOfferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'JobListingsWithFiltering';
  filters = ['Frontend', 'CSS', 'JavaScript'];
  jobData: {
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
  }[] = data;

  getFilteredJobs() {
    let filteredJobs: {
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
    }[] = [];

    this.jobData.forEach((job) => {
      let jobBadges = [job.role, job.level]
        .concat(job.languages)
        .concat(job.tools);

      const filters_not_found = this.filters.filter(
        (filter) => !jobBadges.includes(filter)
      );
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
