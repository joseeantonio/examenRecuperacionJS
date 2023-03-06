function isLeapYear(n1,n2){
    //Definimos un array donde vamos a introducir los años bisiestos
    let aniosBisiestos = []

    //Guardamos los dos valores introducidos en una variable cada uno.
    let anio1 = n1
    let anio2 = n2

    //Comprobamos si son un numero y devolvemos el error si no son un numero.
    if (isNaN(n1)){
        return `${anio1} no es un numero.`
    }else if (isNaN(n2)){
        return `${anio2} no es un numero.`
    }else{

        //Pasamos los años a un numero entero, por si tienen decimales.
        anio1= Math.round(anio1)
        anio2= Math.round(anio2)

        //Definimos estas variables para saber cual es el año mayor y menor y hacer las comprobaciones.
        let anioMayor
        let anioMenor

        //Compruebo cual es el mayor y el menor.
        if (anio1>anio2){
            anioMayor = anio1
            anioMenor = anio2
        }else{
            anioMayor = anio2
            anioMenor = anio1
        }

        //Compruebo que los numeros esten entre 2001 y 2500.
        if (anioMenor<2001){
            return `El año ${anioMenor} no es valido, es menor que 2001.`
        }else if (anioMayor>2500){
            return `El año ${anioMayor} no es valido, es mayor que 2500.`
        }else{
            for (let i=anioMenor;i<anioMayor;i++){
                //Si el año es bisiesto lo añade a el array
                if (i%4===0 || (i%100===0 && i%400===0)){
                    aniosBisiestos.push(i)
                }
            }
            //Devolvemos el array
            return aniosBisiestos
        }
    }
}

//Comprobacion
console.log(isLeapYear(2001,2500))