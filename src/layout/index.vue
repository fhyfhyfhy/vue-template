<template>
  <div :class="classObj" class="app-wrapper"></div>
</template>

<script>
export default {
  name: "Layout",
  computed: {
    classObj() {
      return {};
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
