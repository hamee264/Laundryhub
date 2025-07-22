
<template>
  <div class="ad-slot ad-container">
    <ins
      class="adsbygoogle"
      style="display:inline-block;width:320px;height:100px"
      data-ad-client="ca-pub-5327906141231735"
      data-ad-slot="9206388630"
      data-ad-format=""
    ></ins>
  </div>
</template>

<script>
export default {
  name: "AdSlot",
  mounted() {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  },
};
</script>

<style scoped>
.ad-slot {
  width: 100%;
  min-height: 90px;
  margin: 28px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafb;
  border: 1.5px dashed #e0e7ef;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 12px 0;
  text-align: center;
}
@media (max-width: 900px) {
  .ad-slot {
    min-height: 60px;
    font-size: 0.95rem;
    margin: 20px 0 0 0;
  }
}
</style>
