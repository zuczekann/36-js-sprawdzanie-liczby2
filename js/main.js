
let a = 45; 
let b = -25;


/* Funkcja ma zwracać true, jeśli jedna z liczb jest równa 20 
lub jeśli suma tych dwóch liczb jest mniejsza lub równa 20. */


function myFunction1(a, b) {
    let pWynik = ""

    if (a === 20) {
        pWynik = "True"}
    else if (b === 20) {
            pWynik = "True"}
    else if ((a+b) <= 20) {
        pWynik = "True"};

    // else {
    //     pWynik = "Liczby NIE spełniają warunku"};
    
    return pWynik; 

}

alert (myFunction1(a, b));


