//Creamos dos objetos que van a ser os dos jugadores.
const jugador1 = {
    //ATRIBUTOS
    Nombre: 'jose Antonio',
    Apellidos: 'Gonzalez Perez',
    Nivel:1,
    Puntuacion:1,
    //METODOS
    //sumamos 1 a la puntuacion y al llevar 10 puntos sumados ,el nivel subira 1.
    sumarPuntuacion(){
        this.Puntuacion+=1
        if (this.Puntuacion%10===0){
            this.Nivel+=1
        }
    },
    //restamos 1 a la puntuacion y al llevar 10 puntos restados ,el nivel bajara 1.
    restarPuntuacion(){
        this.Puntuacion-=1
        if (this.Puntuacion%10===0){
            this.Nivel-=1
        }if (this.Puntuacion===0){
            this.resetearPuntuacion()
        }
    },
    //Reseteamos los valores por defecto poniendo el nivel y la puntucion a 1 e indicamos con una alerta que el jugador ha sido reseteado.
    resetearPuntuacion(){
        window.alert(`El jugador ${this.Nombre} ${this.Apellidos} se ha reseteado`)
        this.Puntuacion=1
        this.Nivel=1
    }
}
//Hacemos lo mismo con el 2 jugador.
const jugador2 = {
    Nombre: 'Sergio',
    Apellidos: 'Patiño Rodriguez',
    Nivel:1,
    Puntuacion:1,
    sumarPuntuacion(){
        this.Puntuacion+=1
        if (this.Puntuacion%10===0){
            this.Nivel+=1
        }
    },
    restarPuntuacion(){
        this.Puntuacion-=1
        if (this.Puntuacion%10===0){
            this.Nivel-=1
        }if (this.Puntuacion===0){
            this.resetearPuntuacion()
        }
    },
    resetearPuntuacion(){
        window.alert(`El jugador ${this.Nombre} ${this.Apellidos} se ha reseteado`)
        this.Puntuacion=1
        this.Nivel=1
    }
}

//Definimos la lista con dos jugadores por defecto.
const listaJugadores = [jugador1,jugador2]

//COMPROBACIONES
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
jugador1.sumarPuntuacion()
console.log(listaJugadores)
jugador1.resetearPuntuacion()