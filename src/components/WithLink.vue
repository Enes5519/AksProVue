<template>
  <template v-if="to !== undefined">
    <template v-if="useRouter">
      <router-link :to="to">
        <slot />
      </router-link>
    </template>
    <template v-else>
      <a :href="to" target="_blank">
        <slot />
      </a>
    </template>
  </template>
  <template v-else>
    <slot />
  </template>
</template>

<script>
export default {
  name: "WithLink",
  props: ["to", "useRouter"],
};
</script>
