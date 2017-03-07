# Build a Random Quote Machine

## Objective

Build an app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/ONjoLe/.

## Requirements

* User Story: I can click a button to show me a new random quote.

* User Story: I can press a button to tweet out a quote.

## Notes

Issue resolutions:

* to make the favicon work for both dev and production, put it in /assets
* to make Karma tests work when using Angular material, import material into the test spec, thusly:

```javascript
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material'; // add this line
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MaterialModule.forRoot()], // and this line
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));
});
```

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
