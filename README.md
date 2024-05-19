## Created a small SPA application.Using Angular 16,

You need two pages. Pages must have their own route. When you enter the page address in
the URL, it should open correctly.
1. Dashboard page (/)
2. List of loading elements (/list)
 
There are also 2 more components on the dashboard page:
   1. Button to go to the list page (/list).
   2. List of items (favorites) saved in the application state.
 
* When moving from the dashboard page to the list page, the list of elements from:
&quot;https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&amp;_limit=10&quot; is loaded.
When you scroll down, the list loads automatically.
* Each element displays id, title, image, add to favorites button (changes state if already in
favorites)
* The list page has its own “back” button to return to the dashboard (/). When we press the
back button, we return to the dashboard and see the updated data (favorites). If we go to the
list again, the list is in the state in which the list was the last time we visited (if we already
went to it and scrolled). Elements retain their state and, upon further scrolling down, continue
to be loaded, taking into account those already loaded.
  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
