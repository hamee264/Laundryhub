<template>
  <section class="services-section">
    <div class="container">
      <h2 class="section-title">
        OUR LAUNDRY <span class="highlight">SERVICES</span>
      </h2>
      <p class="subtitle">
        While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:
      </p>

      <div class="services-grid">
        <div
          class="service-card"
          v-for="(service, index) in services"
          :key="index"
        >
          <img :src="service.image" :alt="service.title" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.service }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LaundryServices",
  data() {
    return {
      services: [
        {
          title: "PICK & DROP SERVICE",
          image: "/src/assets/service2.png",
          service:
            "We offer a convenient pick-up and drop-off service, ensuring your laundry is done on time and with minimal hassle.",
        },
        {
          title: "LAUNDRY EXPRESS",
          image: "/src/assets/service3.png",
          service:
            "Fast and efficient wash-and-dry service for busy schedules and quick needs.",
        },
        {
          title: "IRONING SERVICE",
          image: "/src/assets/service4.png",
          service:
            "Get crisp, wrinkle-free clothes with professional ironing for a polished appearance.",
        },
        {
          title: "DRY CLEANING",
          image: "/src/assets/service5.png",
          service:
            "Specialized cleaning for delicate fabrics, suits, and premium garments with expert care.",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

.services-section {
  padding: 80px 0px;
  font-family: "Inter", sans-serif;
  text-align: center;
  width: 100%;
}

.container {
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  box-sizing: border-box;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.section-title .highlight {
  color: #00bfa6;
}

.subtitle {
  color: #444;
  font-size: 1.05rem;
  font-weight: 500;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
  padding: 0 8px;
}

.services-grid {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}

.service-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 360px;
  text-align: left;
  border: 1px solid #e0e0e0;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  padding: 16px;
  box-sizing: border-box;
}

.service-card:hover {
  transform: translateY(-4px);
}

.service-card img {
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;
}

.service-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
}

.service-card p {
  font-size: 0.95rem;
  font-weight: 500;
  color: #555;
  line-height: 1.5;
}

/* Responsive layout */
@media (max-width: 768px) {
  .services-section {
    padding: 60px 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
    margin-bottom: 24px;
  }

  .services-grid {
    flex-direction: column;
    align-items: center;
  }

  .service-card {
    max-width: 100%;
    width: 100%;
  }
}
</style>
