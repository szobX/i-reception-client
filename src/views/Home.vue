<template>
  <div class="home">
    eloo
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      value: "",
      context: null,
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
  },
};
</script>
