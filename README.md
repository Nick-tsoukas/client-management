#Next step 

One click of read more button ... 
1. Built single listing member
2. Must pass data to detail component 
3. Detail component must have own url 
4. Route to the detail component on click 
5. Back button will take user to listings component 
6. Also must have more data about listing on the detail component page .... 
7. Use Angluar resolve ???? 
8. Will Learn More


### Using a angluar router to pass data to list component
1. The listResolver will pass data to the list component before it is rendered improving User exp 
2. ListResolver is just a service

#Notes about working with firestore and the rxjs lib 

It is important to note that you are working with an Observable so ...
In order to get the data that you need you must subscribe to the observable and then get data >> assign 
create a temp variable 'const data '  in the the subscribe and then assign it the the member to the component

will not use this code in app ... 
```javascript
 this.testDoc = this.db.doc('availableListings/D16VnZm2UAkUTDEXomEL');
    this.testDocData = this.testDoc.valueChanges();
    this.testDocData.subscribe(val => {
      const data =  {
        id: 'string',
        streetAddress: 'string',
        cityZip: 'string',
        image: 'string',
        price: 34343434
      }
      this.oneListing = data;
    })
     

  }
```

# ClientManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
