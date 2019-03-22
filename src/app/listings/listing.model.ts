//  Creating the model for the data recipe using typescript 
export interface Listing {
   id: string;
   address: string;
   imagePath: string;
   description: string;
   state?: 'completed' | 'cancelled' | null;
  }
  