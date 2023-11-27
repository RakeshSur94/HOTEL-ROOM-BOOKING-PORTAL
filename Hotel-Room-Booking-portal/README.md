# HotelRoomBookingPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

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
## FIRST create a project in angular cli
 1. install angular material
 -> It's a UI library that provides a variety of prebuilt elements that can be easily integrated into a web app. As a result, a web development team spends less time on building a product which can save a lot of money for a client.
 [main qustion is what is component and what is module in angular????
 Ans->
 Component: In Angular, a Component is a piece of code that represents a view. It is responsible for rendering the content and handling user interactions with the view. A Module is a container for a group of related components and directives. 

Component:
 is a class with an associated template that defines a view. A component controls a part of the screen called a view, which is defined by a class that controls the view through its template. The component class interacts with the view through an API of properties and methods exposed by the component. It is the most basic building block of an Angular application & they are the smallest standalone unit of an Angular application. These components will interact with the most when building the application. Components are defined using a class that controls the view through its template. The Component class is the logic behind the view, and it is responsible for handling user interactions, updating the data model, and interacting with other components or services.
Module:
 Modules are a way to group related components and directives, along with the services, pipes, and other codes that they rely on, into a single cohesive unit. Modules provide a way to keep the code organized and make it easier to reuse components and directives across different parts of the application. Modules are defined using the Angular NgModule decorator, which takes an object that specifies the components, directives, and other code that the module contains. 
 ]