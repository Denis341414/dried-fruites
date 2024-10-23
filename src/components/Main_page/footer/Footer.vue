<script setup>

</script>

<template>
  <div class="footer">
    <div class="section section_cont1">
      <div class="section_title">Раздел 1</div>
      <div class="section_item1">---------</div>
      <div class="section_item2">Сухофрукты</div>
      <div class="section_item3">Орехи</div>
      <div class="section_item4">Ягоды сушеные</div>
      <div class="section_item5">Цукаты</div>
      <div class="section_item6">Экзотические сухофрукты</div>
    </div>
    <div class="section section_cont2">
      <div class="section_title">Раздел 2</div>
      <div class="section_item1">---------</div>
      <div class="section_item2">Восточные сладости</div>
      <div class="section_item3">Семена и бобовые</div>
      <div class="section_item4">Снеки</div>
      <div class="section_item5">Бакалея</div>
      <div class="section_item6">Специи</div>
    </div>
    <div class="section section_cont1">
      <div class="section_title">Раздел 1</div>
      <div class="section_item1">---------</div>
      <div class="section_item2">Сухофрукты</div>
      <div class="section_item3">Орехи</div>
      <div class="section_item4">Ягоды сушеные</div>
      <div class="section_item5">Цукаты</div>
      <div class="section_item6">Экзотические сухофрукты</div>
    </div>
    <div class="section section_cont4">
      <div class="section_title">Контакты</div>
      <div class="section_item1">---------</div>
      <div class="section_item_number1">8 993 313 31 33</div>
      <div class="section_item_number2">8 993 313 31 33</div>
      <div class="section_item_number3">Sychofrycti@Gmail.com</div>
      <div class="section_item_number4">Г. Москва улица кубано набережная 56 литер 2</div>
    </div>

  </div>
    
  
</template>

<style scoped lang="scss">
  .footer {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding-top: 50px;
    margin-top: 100px;

    .section_cont4 * {
      font-weight: 700;
    }

    .section {
      display: flex;
      flex-direction: column;
      gap: 1em;

      .section_title {
        font-size: 20px;
        font-weight: 700;
      }

      .section_item_number1::after {
        content: '';
        background-image: url('./assets/phone_image.svg');
      }
      .section_item_number2::before {
        content: '';
        background-image: url('./assets/phone_image.svg');
      }
      .section_item_number3::before {
        content: '';
        background-image: url('./assets/email_image.svg');
      }
      .section_item_number1::before {
        content: '';
        background-image: url('./assets/point_image.svg');
      }


    }
    .section_cont4 {
      display: flex;
      flex-direction: column;
      gap: 1.45em;
    }
  }
  .footer:after {
    content: '';
    width: 100vw;
    position: absolute;
    height: 0.5px;
    background-color: black;
    left: -120px;
    top: 0;
  }
</style>