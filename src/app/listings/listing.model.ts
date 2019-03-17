//  Creating the model for the data recipe using typescript 
export class Listing {
    public name: string;
    public description: string;
    public imagePath: string;
    
  //   This is the constructor for that will create the object every time it it instantiated 
    constructor(name: string, desc: string, imagePath: string) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
    }
  }
  