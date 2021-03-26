<template>
  <div id="large-image" :data-active="active ? 1 : 0" @click="active = 0">
    <img :src="path" :alt="alt" />
  </div>
</template>

<script>
export default {
  name: "ZoomImage",
  props: {
    path: String,
    alt: String,
  },
  data() {
    return {
      active: false,
    };
  },
  watch: {
    path(newPath) {
      this.active = newPath !== "";
    },
  },
};
</script>

<style lang="scss">
#large-image {
  display: none;
}

#large-image[data-active="1"] {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  & > img {
    height: 80%;
    align-self: center;
    background-color: #fff;
  }
}
img[data-can-large] {
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}
</style>
