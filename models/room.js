const room =
{

    featuredDB : [],
    listingDB : [],
    init()
    {

        this.featuredDB.push({image:`/img/room7.jpg`,title:'COZY ROOM | BAZAR, BALI',description:`Cozy room with lakeview
        `,price:`$40 CAD/night`});
    
        this.featuredDB.push({image:`/img/room8.jpg`,title:'VERIFIED | CASINO BLUE, BANGKOK',description:`secret property inside Casino`,price:`$110 CAD/night`});
    
        this. featuredDB.push({image:`/img/room9.jpg`,title:'ENTIRE VILLA | MELBOURNE',description:`Villa to hide out`,price:`$120 CAD/night`});


        this. featuredDB.push({image:`/img/room10.jpg`,title:'BEST STAY | FIJIWI, HAVANA',description:`Spice up your weekend stay`,price:`$180 CAD/night`});

        this.featuredDB.push({image:`/img/room11.jpg`,title:'PREMIUM HOUSE | MAIN STREET, VERDE',description:`A house to hide out from urban sky
        `,price:`$110 CAD/night`});
    
        this.featuredDB.push({image:`/img/room12.jpg`,title:'EXCLUSIVE | ENTIRE HOUSE, HYDERABAD',description:`Lots and loads can happen here`,price:`$189 CAD/night`});

        this.listingDB.push(
            {
              imgURL:`/img/room1.jpg`,
              title:`ENTIRE VILLA. 2 BEDS | Modern Branyan Guest Villa`,
              price:100,
              rating:5
            });
            this.listingDB.push(
              {
                imgURL:`/img/room2.jpg`,
                title:`ENTIRE HOUSE · 8 BEDS | Spacious Coastal Retreat`,
                price:120,
                rating:4.1
        
              });
              this.listingDB.push(
                {
                  imgURL:`/img/room3.jpg`,
                  title:`ENTIRE BUNGALOW · 3 BEDS | Point Boston Beach House`,
                  price:200,
                  rating:5
          
                });
              
                this.listingDB.push(
                  {
                    imgURL:`/img/room4.jpg`,
                    title:`ENTIRE BUNGALOW · 4 BEDS | Beach Front Holiday Home `,
                    price:140,
                    rating:4.5
            
                  });
              
                  this.listingDB.push(
                    {
                      imgURL:`/img/room5.jpg`,
                      title:`ENTIRE APARTMENT · 2 BEDS | The Loft - Crackenback`,
                      price:1270,
                      rating:4.4
              
                    });
              
                    this.listingDB.push(
                      {
                        imgURL:`/img/room6.jpg`,
                        title:`ENTIRE APARTMENT · 4 BEDS |The Beach Apartment `,
                        price:190,
                        rating:4.3
                
                      });

    },
    getallFeaturedRooms()
    {
        return this.featuredDB;
    },
    
    getallListingRoom(){
        return this.listingDB;
    },

}


room.init();
module.exports=room;