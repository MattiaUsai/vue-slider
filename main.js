'use strict';


const {createApp} = Vue;

createApp({
    data(){
        return{
            images:[
                "./img/01.webp",
                "./img/02.webp",
                "./img/03.webp",
                "./img/04.webp",
                "./img/05.webp",
            ],
            currentIndex:2
            
            
        }
    },
    methods:{
        nextImg(){
            if(this.currentIndex < this.images.length-1) {
                this.currentIndex++;
            }else{
                this.currentIndex = 0;
            }
        },
        prevImg(){
            if(this.currentIndex > 0) {
                this.currentIndex--
            }else{
                this.currentIndex = this.images.length-1;
            }
            
        }

    }
    
}).mount('#app');