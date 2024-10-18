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

const cardEl = document.querySelector('.row')

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
      const listAxios = response.data;
  
      console.log(listAxios);
      
      for (let i = 0; i < listAxios.length; i++){
        let listMarkup = listAxios[i]
        let {title} = listMarkup
        let markup = `
        <div class=" col-sm-12 col-md-6 col-lg-4 mt-5">
                 <div class="card rounded-0" style="width: 18rem;">
                    <img class="card-img-top p-2" src="./assets/img/01.jpg" alt="Card image cap">
                    <div class="card-body">
                    <p class="card-text">${title}</p>
                    </div>
                </div>
         </div>
      
                      
        
        `
      
        
      cardEl.innerHTML += markup
      
      }
  
    
    }).catch(err => console.log(err));

    