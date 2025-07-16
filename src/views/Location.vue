<template>
  <section class="location-section" id="location">
    <div class="container">
      <div class="location-content">
        <div class="text-content">
          <h2 class="section-title">
            <span class="highlight">Visit Us</span> at Egbe New Site, Ijebu-Ode
          </h2>
          <p class="description">
            We're located in the heart of Ijebu-Ode, offering quick access for
            all our customers. Drop by for a walk-in laundry service or schedule
            a pickup from anywhere in the area.
          </p>

          <div class="details">
            <p>
              <i class="fas fa-map-marker-alt"></i> Egbe New Site, Ijebu-Ode,
              Ogun State, Nigeria
            </p>
            <p><i class="fas fa-clock"></i> Mon - Sat: 8:00 AM – 8:00 PM</p>
            <p><i class="fas fa-phone-alt"></i> +234 800 123 4567</p>
          </div>
        </div>

        <div class="map-box">
          <iframe
            class="map"
            src="https://www.google.com/maps?q=Egbe+New+Site+Ijebu-Ode+Nigeria&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
    <script setup>
    import Footer from '../components/Footer.vue';
</script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.location-section {
  background: #f6fefe;
  padding: 100px 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.location-content {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
}

.text-content {
  flex: 1;
  min-width: 300px;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 20px;
}

.highlight {
  color: #00bfa6;
}

.description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
  max-width: 500px;
}

.details p {
  font-size: 0.95rem;
  color: #444;
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.map-box {
  flex: 1;
  min-width: 300px;
}

.map {
  width: 100%;
  height: 350px;
  border: none;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 191, 166, 0.08);
}

/* Responsive */
@media (max-width: 768px) {
  .location-content {
    flex-direction: column;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .description {
    font-size: 0.95rem;
  }
}
</style>
