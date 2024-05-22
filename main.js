'use strict';


const {createApp} = Vue;

createApp({
    data(){
        return{
            // ARRAY IMMAGINI
            images:[
                "./img/01.webp",
                "./img/02.webp",
                "./img/03.webp",
                "./img/04.webp",
                "./img/05.webp",
            ],
            // INDICE IMMAGINE CORRENTE
            currentIndex:0,
            // VARIABILE MOUSE HOVER
            hover: false,
            isActive: true
            
        }
    },
    methods:{
        // FUNZIONE IMMAGINE SUCCESIVA
        nextImg(){
            // SE IL MOUSE NON È IN HOVER SOPRA L'IMMAGINE ALLORA PASSA ALLA SUCCESSIVA ALTRIMENTI  ֻ
            if(this.hover === false){
            // SE AL CLICK DEL BOTTONE L'INDICE DELL'IMMAGINEE MINORE DELLA L'UNGHEZZA DELL'ARRAY IMAGES ALLORA INCREMENTA
                if(this.currentIndex < this.images.length-1) {
                    this.currentIndex++;
                }// ALTRIMENTI IMPOSTA LA PRIMA IMMAGINE PRESENTE NELL'ARRAY
                else{
                    this.currentIndex = 0;
                }
            }
        },
        // FUNZIONE IMMAGINE PRECEDENTE
        prevImg(){
            // SE AL CLICK DEL BOTTONE L'INDICE DELL'IMMAGINEE MAGGIORE DI 0 ALLORA DECREMENTA 
            if(this.currentIndex > 0) {
                this.currentIndex--
            }// ALTRIMENTI IMPOSTA L'ULTIMA IMMAGINE PRESENTE NELL'ARRAY
            else{
                this.currentIndex = this.images.length-1;
            }
            
        },
        // FUNZIONE CLICK IMMAGINE THUMB
        imgClick(i){
            this.currentIndex = i;
            
        },
        
          
        
        

    },
    mounted(){
        
        // INTERVALLO IMMAGINE
        setInterval(this.nextImg, 3000);
        
    }
    
}).mount('#app');