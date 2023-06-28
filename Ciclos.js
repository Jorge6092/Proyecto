function ciclos(){
    let contador = 1;
    let suma = 1;
    
    do{
        console.log(suma);
        suma+=contador;
        contador++;
    }while(suma <= 52)
}

ciclos();