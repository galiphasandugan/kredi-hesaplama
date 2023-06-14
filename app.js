const select = document.querySelector("#select");
const vade = document.querySelector("#vade");
const tutar = document.querySelector("#tutar");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");

let taksit = 0;
let faizOran = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if(confirm("emin miziniz")){
    if(select.value ==="Konut Kredisi"){
        faizOran=1.29;
    }
    else if(select.value ==="Ihtiyac Kredisi"){
        faizOran=1.99;
    }
    else if(select.value ==="Arac Kredisi"){
        faizOran=1.59;
    }

    const  faiz = faizOran / 100 //! 
    
    taksitTutarı =  (tutar.value * faiz * ( 1 + faiz) ** vade.value)/ 
     ((1 + faiz) ** vade.value - 1)
     console.log(taksitTutarı);

    
    //!  Kredi Tutarı * Faiz * (1+Faiz)**Taksit Sayısı / (1+Faiz)**Taksit Sayısı-1] 


  }


});
