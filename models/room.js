const featuredRooms =
{

    places: [],

    init()
    {

    this.places.push(
      {
        imgURL:`/img/room1.jpg`,
        title:`ENTIRE VILLA. 2 BEDS | Modern Branyan Guest Villa`,
        price:100,
        rating:5
      });
      this.places.push(
        {
          imgURL:`/img/room2.jpg`,
          title:`ENTIRE HOUSE · 8 BEDS | Spacious Coastal Retreat`,
          price:120,
          rating:4.1
  
        });
        this.places.push(
          {
            imgURL:`/img/room3.jpg`,
            title:`ENTIRE BUNGALOW · 3 BEDS | Point Boston Beach House`,
            price:200,
            rating:5
    
          });
        
          this.places.push(
            {
              imgURL:`/img/room4.jpg`,
              title:`ENTIRE BUNGALOW · 4 BEDS | Beach Front Holiday Home `,
              price:140,
              rating:4.5
      
            });
        
            this.places.push(
              {
                imgURL:`/img/room5.jpg`,
                title:`ENTIRE APARTMENT · 2 BEDS | The Loft - Crackenback`,
                price:1270,
                rating:4.4
        
              });
        
              this.places.push(
                {
                  imgURL:`/img/room6.jpg`,
                  title:`ENTIRE APARTMENT · 4 BEDS |The Beach Apartment `,
                  price:190,
                  rating:4.3
          
                });
            },
            getallRooms()
            {
                return this.places;
            }
        
        }
        
        
        featuredRooms.init();
        module.exports=featuredRooms;