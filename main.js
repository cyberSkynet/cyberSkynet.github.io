function szorzatSzam() {
    let listNumb = document.querySelector("select[name='darab']");
    let bevitel = document.querySelector("input[name='szamBevitel1']");
    let bevitel2 = document.querySelector("input[name='szamBevitel2']");
    
    /*let bevitt = parseInt (bevitel.value);
    let bevitt2 = parseInt (bevitel2.value);*/
    kiirVizsgal(listNumb,bevitel,bevitel2);
}
function kiirVizsgal(listNumb,bevitel,bevitel2) {
    if (bevitel.value <=0 || bevitel.value > 1000) {
        alert ('1 és 1000 közötti számokat kérek!');
    }
    else if (bevitel2.value <=0 || bevitel2.value > 1000) {
        alert ('1 és 1000 közötti számokat kérek!');
    }
    else {
        let showResult = document.querySelector("span.show-result");
        let result = parseInt(listNumb.value) * parseInt(bevitel.value) * parseInt(bevitel2.value);
    
        showResult.innerHTML = result;
    } 

}
let orderFrom = document.querySelector("#orderForm");
orderFrom.addEventListener("submit", function(ev) {
    ev.preventDefault();
    let bevitelek = this.querySelectorAll("input");
    let values = {};
    for (let j = 0; j < bevitelek.length; j++) {
        values[bevitelek[j].name] = bevitelek[j].value
    }  
    
    console.log(values);

});