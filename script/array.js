
let stockShoe = [
    // objects inside an array
    {
      shoeImage:'converse-black-chuck-70',
      designer: 'CONVERSE',
      name:'BLACK CHUCK 70 LOW',
      price: '$ 70.40'
    },

    {
      shoeImage:'converse-black-lucky-high-top',
      designer: 'CONVERSE',
      name:'BLACK LUCKY HIGH',
      price: '$ 85'
    },

    {
      shoeImage:'koio-capri-castagna',
      designer: 'KOIO',
      name:'CAPRI CASTAGNA',
      price: '$ 55'
    },

    {
      shoeImage:'koio-gavia-bianco',
      designer: 'KOIO',
      name:'GAVIA BIANCO',
      price: '$ 70.40'
    },

    {
      shoeImage:'adidas-original-superstar',
      designer: 'ADIDAS',
      name:'ORIGINAL SUPERSTAR',
      price: '$ 150.45'
    },

    {
      shoeImage:'adidas-ultraboost-21',
      designer: 'ADIDAS',
      name:'ULTRA BOOST 21',
      price: '$ 120.40'
    },

    {
      shoeImage:'nike-air-jordan-1',
      designer: 'NIKE',
      name:'AIR JORDAN 1',
      price: '$ 90.40'
    },

    {
      shoeImage:'nike-air-max-270',
      designer: 'NIKE',
      name:'AIR MAX 270 BLACK',
      price: '$ 110.46'
    },

    {
      shoeImage:'balenciaga-dad-2',
      designer: 'BALENCIAGA',
      name:'DAD 2',
      price: '$ 78.30'
    },

    {
      shoeImage:'balenciaga-black-speed',
      designer: 'BALENCIAGA',
      name:'BLACK SPEED',
      price: '$ 150.40'
    },

    {
      shoeImage:'tom-ford-midnight-blue',
      designer: 'TOM FORD',
      name:'MIDNIGHT BLUE',
      price: '$ 120.40'
    },

    {
      shoeImage:'vans-low-top',
      designer: 'VANS',
      name:'LOW TOP',
      price: '$ 49'
    },


  ]
  
  
  let section2cols = document.getElementById('newest');
  let html = ' ';
  stockShoe.forEach(e => {
      html += `
        <div class="col">
          <div class="card h-100 bg-white box rounded-top pe-0 text-dark">
            <div class="card-img">
              <img
                src="./images/${e.shoeImage}.jpg"
                class="card-img-top"
                alt="shoe"
              />
            </div>
            <div class="card-body">
              <h3 class="card-title fw-bold">${e.designer}</h3>
              <h4 class="fst-italic">${e.name}</h4>

              <p class="fw-bold mt-3">${e.price}</p>

              <a href="#" class="btn btn-lg bg-bluey fw-bold text-white"
                >Add to Cart</a
              >
            </div>
          </div>
        </div>
      `
  
    console.log(e);
  
    section2cols.innerHTML =html
  })
  
  
  