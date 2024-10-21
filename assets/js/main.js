console.log('its works');
/* 
CONSEGNA
Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
Milestone 2
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
Buon divertimento e confermate lettura come al solito


*/
const btnClose = document.getElementById('btn-close')
const cardEl = document.querySelector('.row')
const imgOverlayEl = document.querySelector('.img-overlay')
const overlayEl = document.querySelector('.overlay')
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
      const listAxios = response.data;
      console.log(listAxios);
      let array = []
      console.log(array);
      
      
      
      for (let i = 0; i < listAxios.length; i++){
        let listMarkup = listAxios[i]
        let {title,url} = listMarkup
        
        let markup = `
       
              <div id="card-hover" class="col-sm-12 col-md-6 col-lg-4 g-3 ">
                    <div class="card rounded-0 mb-5 mt-5">
                        
                       <button class="btn-ul border-0"> <img style="height: 350px;"  class="card-img-top p-2" src="${url}"></button>
                        <img id="pin-hover" class="card-img-top p-2" style="height: 40px;" src="./assets/img/pin.svg" >
                        <div class="card-body">
                        <p style="min-height: 80px;"  class="card-text">${title}</p>
                        </div>
                   </div>          
                
            </div>
         
        `
       
        
      cardEl.innerHTML += markup
      array.push(url)
      const btnOpenEl = document.querySelector('.btn-ul')
      
      
     
      
      btnOpenEl.addEventListener('click', () => {
        const overlay = overlayEl.classList;
        overlay.add('d-inline');
        
       
    })

    
      }

      
      
    
    }).catch(err => console.log(err));

    
  
 
    
    btnClose.addEventListener('click', () => {
      const overlay = overlayEl.classList;
      overlay.toggle('d-none');
  })
    
    
    

 


  
  