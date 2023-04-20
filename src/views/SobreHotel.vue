<template>
    
    <header class="header">
      <unifiedHeader />
    </header>
    <main>

        <div class="first-box">
            <h1>O Hotel</h1>
            <article>

                <ul>
                    <li>
                        <img src="@/assets/img/getting-to-marinabaysands-t.webp" class="img-left">
                        <p class="p-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus mollitia doloribus
                            sapiente officia? Quis distinctio incidunt illo natus qui aliquam ab debitis assumenda
                            eveniet quaerat fuga, necessitatibus quasi totam, nihil minus deleniti nam odit placeat!
                        </p>
                    </li>

                    <li>
                        <img src="@/assets/img/quartoDeluxeRoom.jpg" class="img-left">
                        <p class="p-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quis voluptate
                            quaerat beatae ipsum dolore dolorem nemo aliquam eius veniam pariatur perspiciatis, iure
                            nobis consectetur eaque nam asperiores recusandae optio odit neque ratione praesentium.
                            Quibusdam.
                        </p>
                        </li>


                    <li>
                        <img src="@/assets/img/RISE_Australian_Stanbroke_Beef_Ribeye_600x450.webp" class="img-left">
                        <p class="p-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus mollitia doloribus
                            sapiente officia? Quis distinctio incidunt illo natus qui aliquam ab debitis assumenda
                            eveniet quaerat fuga, necessitatibus quasi totam, nihil minus deleniti nam odit placeat!
                        </p>
                    </li>
                </ul>

            </article>
        </div>
    </main>
    <unifiedFooter />
</template>

<script>
import UnifiedHeader from '@/components/UnifiedHeader.vue';
import UnifiedFooter from '@/components/UnifiedFooter.vue';
export default{
    name: "SobreHotel",
    components: {UnifiedHeader, 
    UnifiedFooter
    }
}
</script>


<style scoped>
@font-face {
  font-family: "Mont";
  src: url("../assets/fonts/Montserrat-Regular.otf");
}

@font-face {
  font-family: "Mont-bold";
  src: url("../assets/fonts/Montserrat-Bold.otf");
}

@font-face {
  font-family: "Garamond";
  src: url("../assets/fonts/AGaramondPro-Bold.otf");
}

body {
  margin: 0%;
}

main {
  padding-top: 2rem;
  margin-bottom: 0.6rem;
}

h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Mont", "Garamond";
  text-transform: uppercase;
  padding-top: 1rem;
  padding-bottom: 2rem;
}

.first-view {
  background-image: url("../assets/img/singapore-skyscrapers-marina-bay-sands-evening-4k-es.jpg");
  background-size: cover;
  width: 100%;
  height: 8rem;
  position: absolute;
  z-index: -1;
}

.first-box {
  display: flex;
  border-radius: 1rem;
  padding: 4rem;
  padding-top: 0rem;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  flex-direction: column;
}

.p-right {
  float: right;
  text-align: justify;
  font-size: 1.3rem;
  width: 55%;
  font-family: "Mont", "Garamond";
  font-size: larger;
}

.img-left {
  display: inline;
  margin-right: auto;
  width: 40%;
  border-radius: 1rem;
  position: static;
  margin-bottom: 10rem;
}

a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  text-transform: uppercase;
}

a:hover {
  color: rgba(255, 255, 255, 0.625);
}

@media screen and (max-width: 780px) {
  .first-box {
    padding: 0;
    background-color: white;
  }

  .img-left {
    width: 100%;
    margin-bottom: 0rem;
  }

  .p-right {
    width: 100%;
    margin-bottom: 2rem;
  }
}

/*# sourceMappingURL=hotel.css.map */
</style>