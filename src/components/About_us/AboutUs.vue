<script setup>
import { inject, onMounted } from "vue";
import Footer from "../Main_page/footer/Footer.vue";
import header_line from "../Main_page/header/header_line.vue";
import Main_footer from "../Main_page/main/main_footer.vue";

onMounted(inject("scrollTo"));
</script>

<template>
  <header_line />
  <div class="aboutUs_cont">
    <h1 class="main_title">О нас</h1>
    <div class="subtext">
      Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
      Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала
      XVI века. В то время некий безымянный печатник создал большую коллекцию
      размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
      Lorem Ipsum не только успешно пережил без заметных изменений пять веков,
      но и перешагнул в электронный дизайн. Lorem Ipsum - это текст-"рыба",
      часто используемый в печати и вэб-дизайне. Lorem Ipsum является
      стандартной "рыбой" для текстов на латинице с начала XVI века. В то время
      некий безымянный печатник создал большую коллекцию размеров и форм
      шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
      только успешно пережил без заметных изменений пять веков, но и перешагнул
      в электронный дизайн.
    </div>
    <div class="logo">
      <img class="logo_img" src="./assets/Темный 1.svg" alt="" />
    </div>
  </div>
  <Main_footer />
  <Footer />
</template>

<style scoped lang="scss">
.aboutUs_cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10em 0;
  gap: 2em;
  .main_title {
    font-size: 72px;
  }
  .subtext {
    font-size: 24px;
    line-height: 2.2em;
  }
}
</style>
