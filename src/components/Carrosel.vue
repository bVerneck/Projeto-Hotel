<template>
    <div class="carousel" ref="carousel">
        <div class="carousel-item" v-for="item in items" :key="item.id" :class="{ 'active': item.id === currentSlide }">
            <img :src="require(`@/assets/img/${item.image}`)" :alt="item.title">
            <div class="carousel-caption">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
            </div>
        </div>
        <button class="carousel-control prev" @click="prevSlide">&#8249;</button>
        <button class="carousel-control next" @click="nextSlide">&#8250;</button>
    </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';

export default {
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: 'Ápice do luxo e tecnologia',
                    description: 'As maiores e melhores atrações do mundo a um click de distância.',
                    image: 'singapore-skyscrapers-marina-bay-sands-evening-4k-es.jpg'
                },
                {
                    id: 2,
                    title: 'Acomodações que excedem as 5* ',
                    description: 'Com tudo que você e sua família possam vir a precisar!',
                    image: 'db3e0180-15cf-4edf-abfc-2be0acc4d2ee.jpg'
                },
                {
                    id: 3,
                    title: 'Paraíso das águas',
                    description: 'Banhado por águas cristalinas e contando com piscinas abertas e fechadas para todos os públicos!',
                    image: 'f9848fd1-abf5-45bc-ba0e-33fbcd0111b8.jpg'
                },
            ],
            currentSlide: 1,
            interval: null
        }
    },
    methods: {
        nextSlide() {
            if (this.currentSlide < this.items.length) {
                this.currentSlide++;
            } else {
                this.currentSlide = 1;
            }
        },
        prevSlide() {
            if (this.currentSlide > 1) {
                this.currentSlide--;
            } else {
                this.currentSlide = this.items.length;
            }
        },
        startCarousel() {
            this.interval = setInterval(this.nextSlide, 4000);
        },
        stopCarousel() {
            clearInterval(this.interval);
        }
    },
    mounted() {
        this.startCarousel();
    },
    beforeUnmount() {
        this.stopCarousel();
    }
}
</script>

<style>
.carousel {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}

.carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
}

.carousel-item.active {
    opacity: 1;
}

.carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-caption {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 20px;
    color: #FFFFFF;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

}

.carousel-caption h3 {
    margin: 0 0 10px 0;
}

.carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    border: none;
    background-color: transparent;
    font-size: 50px;
    color: #FFFFFF;
    cursor: pointer;
}

.carousel-control.prev {
    left: 0;
    padding-left: 20px;
}

.carousel-control.next {
    right: 0;
    padding-right: 20px;
}
</style>