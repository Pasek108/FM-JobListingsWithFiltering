<h1 align="center">FM-JobListingsWithFiltering - Readme</h1>
<p align="center">
  <strong>
    My solution to the <a href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt" target="_blank">Frontend Mentor "Job listings with filtering" challenge</a>
  </strong>
</p>
<div align="center">
  <a href="https://www.frontendmentor.io/home">
    <img src="_for_readme/banner.jpg?">
  </a>
</div>

<br>

> [!CAUTION]  
> <h4>Please, don't look at my solutions until you have completed it yourself.</h4>
> Challenges like these are an opportunity to improve by coming up with your own solutions. Take your time and think about your approach.  
> If you can't complete a challenge, skip it and come back to it later. Only look at someone else's solutions as a last resort, and treat it as a defeat.

<br>

# Table of Contents
* [FrontendMentor :thinking:](#frontendmentor-thinking)
  * [What is it](#what-is-it)
  * [Is it worth doing](#is-it-worth-doing)
* [Overview :sparkles:](#overview-sparkles)
  * [About](#about)
  * [Features](#features)
  * [Technologies](#technologies)
  * [Setup](#setup)
  * [Copyright](#copyright-copyright)
* [Details :scroll:](#details-scroll)
  * [User interface](#user-interface)
  * [Performance](#performance)

<br>

# FrontendMentor :thinking:

## What is it
[FrontendMentor](https://www.frontendmentor.io/home) is a platform that provides real-world front-end coding challenges to help developers improve their skills. It offers projects ranging from simple layouts to complex web applications, allowing users to practice HTML, CSS, and JavaScript by building solutions that closely resemble professional work.  

## Is it worth doing
Frontend Mentor is a great resource for developers looking to gain hands-on experience by working on practical projects. The challenges help reinforce best practices, improve design implementation skills, and build a portfolio. However, since there is no automated grading system, feedback depends on community reviews, making it essential to engage with others for constructive criticism.  

<br>

# Overview :sparkles:

## About
My solution to the [Frontend Mentor "Job listings with filtering" challenge](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). The project was created using Angular 19 and TypeScript. It was my first project using Angular. The challenge gave me an opportunity to practice Angular basics, especially state management and communication between components.

Check out the [live version](https://pasek108.github.io/FM-JobListingsWithFiltering/) of this project, as well as my [Frontend Mentor profile](https://www.frontendmentor.io/profile/Pasek108).

<br>

![preview](/_for_readme/preview.png)

## Technologies
Languages:
- JavaScript
- TypeScript
- CSS
- HTML

Libraries and frameworks:
- [Angular](https://angular.dev) 19.0.0
- [GoogleFonts](https://fonts.google.com)
  
Programs:
- [VSCode](https://code.visualstudio.com)
- [PowerToys](https://learn.microsoft.com/en-us/windows/powertoys/)
- [ShareX](https://getsharex.com)
- [GIMP](https://www.gimp.org)

## Features
### Challenge requirements
- ✅ Complete each step of the sequence
- ✅ Go back to a previous step to update their selections
- ✅ See a summary of their selections on the final step and confirm their order
- ✅ View the optimal layout for the interface depending on their device's screen size
- ✅ See hover and focus states for all interactive elements on the page
- ✅ Receive form validation messages if:
  - ✅ A field has been missed
  - ✅ The email address is not formatted correctly
  - ✅ A step is submitted, but no selection has been made

### Additions
- Phone number validation 

## Setup
- Use [live version](https://pasek108.github.io/FM-MultiStepForm/).

- Download this repository and:
  - Open project in VSCode
  - Run `npm install`
  - Run `npm run dev`
  - Open generated address in the browser

- Deployment for GitHub:
  - Add `base: '/repo-name/'` in `vite.config.ts`
  - Run `npm run build`
  - Rename `/dist` folder to `/docs`

## Copyright :copyright:
I do not own the rights to the content of the challenges. All challenge data was downloaded and included only to provide context for the solutions.

<br>


# Details :scroll:

## User interface
### Step 1
![step 1](/_for_readme/UI/step-1.png)
The first step requires the user to input their name, email, and phone number. The provided values are properly validated before proceeding to the next step. 

### Step 2
![step 2](/_for_readme/UI/step-2.png)
In the second step, the user can select a plan and change the billing period.

### Step 3
![step 3](/_for_readme/UI/step-3.png)
The third step allows the user to pick additional options, with pricing dependent on the previously selected billing period.

### Step 4
![step 4](/_for_readme/UI/step-4.png)
The fourth step is a summary of the user’s choices. It displays the selected options and the total price. The user can still go back and make changes.

### Step 5
![step 5](/_for_readme/UI/step-5.png)
A simple thank-you message.


## Performance
### Desktop
![desktop performance](/_for_readme/desktop-performance.png)
Accessibility score is lower due to colors contrast of the design.

### Mobile
![mobile performance](/_for_readme/mobile-performance.png)

