<script setup>
import { calculatingThePrice } from "../modelItemCard/calculatingThePrice";
import { getWeight } from "../modelItemCard/getWeight";
import { useItemCardStore } from "../stores/ItemCardStore";

const props = defineProps({
  weight: {
    type: Number,
    Required: true,
    default: 0,
  },
});

const ItemCardStore = useItemCardStore();
</script>

<template>
  <button
    @click="
      getWeight($event.target.textContent);
      calculatingThePrice(ItemCardStore.itemData, ItemCardStore.weight);
    "
    :class="
      ItemCardStore.weight == weight
        ? `weight_btn btn_${weight} weight_btn_active`
        : `weight_btn btn_${weight}`
    "
  >
    {{ weight }}
  </button>
</template>

<style scoped>
.weight_btn {
  border: none;
  height: 3em;
  width: 10em;
  background-color: #f4f4f4;
}
.weight_btn:hover {
  background-color: rgb(254, 225, 155);
}
.btn_300 {
  border-radius: 2em 0 0 2em;
}
.btn_1000 {
  border-radius: 0 2em 2em 0;
}
.weight_btn_active {
  background-color: rgb(247, 173, 0);
}
</style>
