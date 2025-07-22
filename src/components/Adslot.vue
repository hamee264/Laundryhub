<template>
  <div class="ad-container">
    <ins
      class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-5327906141231735"
      data-ad-slot="9206388630"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
</template>

<script>
export default {
  name: "AdBanner",
  mounted() {
    // Initialize adsbygoogle script when component mounts
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  },
};
</script>

<style scoped>
.ad-container {
  margin: 20px 0;
  text-align: center;
}
</style>
