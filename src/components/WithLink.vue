<template>
  <template v-if="to !== undefined">
    <router-link :to="to">
      <slot />
    </router-link>
  </template>
  <template v-else>
    <slot />
  </template>
</template>

<script>
export default {
  name: "WithLink",
  props: ["to"],
};
</script>
