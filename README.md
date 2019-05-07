 # Client Management 
 
 This app was built in effort to learn angular development. 


 link to app  
 https://client-management-111c5.firebaseapp.com/
 
 # Dev Notes 
- Build attractive card for displaying the list component data 
- Start creating CRUD methods for admin  ... data manipulation 
- Start learning reactive and template forms in Angular .... 
- Clean up data on listing cards and add more info 


Think about using this code below in this app and other apps 
- this function can be used as a utility function to convert the snapshots for you 
- Good practice so not to repeat your self 

```javascript
export function convertSnaps<T>(snaps) {
        return <T[]> snaps.map(snap => {
            return {
                id: snap.payload.doc.id,
                ...snap.payload.doc.data()
            };
        });
    }
```
#Next step 1

One click of read more button ... 
1. Built single listing member
2. Must pass data to detail component 
3. Detail component must have own url 
4. Route to the detail component on click 
5. Back button will take user to listings component 
6. Also must have more data about listing on the detail component page .... 
7. Use Angluar resolve ???? 
8. Will Learn More

#Finished step 1 using angluar router >>> see below 


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
