const pool = require("./db");


  try {

   

    //add product 
    const addproduct1 = 'INSERT INTO public.product(prod_name,sup_ID) VALUES ($1,$2) RETURNING prod_ID';
    const supidprodname = ['Home Depo','2'];
  
    client.query('SELECT * FROM public.supplier WHERE sup_ID=2', (err, res) => {
      try {

         
          console.log(pool.query(addproduct1,supidprodname),'nag add product na')
          console.log(addproduct1)
          console.log(supidprodname)
        
      } catch (err) {
        console.error('mao ning error');
      }
    })
    pool.query('COMMIT')
  } catch (e) {
    pool.query('ROLLBACK')





  }