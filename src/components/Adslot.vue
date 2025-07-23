<template>
  <div class="ad-slot">
    <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-5327906141231735"
      data-ad-slot="9206388630"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  </div>
</template>

<script>
export default {
  name: "AdSlot",
  mounted() {
    try {
      if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  },
};
</script>

<style scoped>
.ad-slot {
  width: 100%;
  margin: 12px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
