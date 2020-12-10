<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <calcite-button>Button</calcite-button>
    <calcite-icon icon="banana"></calcite-icon>
    <calcite-checkbox v-model="checked"></calcite-checkbox>
    <p>{{ checked }}</p>
  </div>
</template>

<script>
import { CalciteButton, CalciteCheckbox } from '@esri/calcite-components-vue';
export default {
  name: "HelloWorld",
  components: {
    CalciteButton,
    CalciteCheckbox
    // CalciteIcon
  },
  props: {
    msg: String
  }
};
</script>
