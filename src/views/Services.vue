<template>
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <h2 class="highlight">Our Services</h2>
        <h1 class="title">Exceptional Laundry Care for Every Need</h1>
        <p class="description">
          We offer a variety of professional laundry solutions tailored to fit your lifestyle. Fast, eco-friendly, and handled with care.
        </p>
      </div>

      <div class="services-grid">
        <div class="service-card" v-for="service in services" :key="service.title">
          <div class="icon-box">
            <i :class="service.icon"></i>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script setup>
import Footer from '../components/Footer.vue';
const services = [
  {
    title: "Wash & Fold",
    description: "Everyday laundry cleaned, folded, and returned fresh and ready to wear.",
    icon: "fas fa-tshirt",
  },
  {
    title: "Dry Cleaning",
    description: "Professional care for suits, dresses, and delicate fabrics.",
    icon: "fas fa-spray-can-sparkles",
  },
  {
    title: "Pickup & Delivery",
    description: "Free doorstep pickup and drop-off for your laundry convenience.",
    icon: "fas fa-truck",
  },
  {
    title: "Express Service",
    description: "Same-day or next-day turnaround for those urgent laundry days.",
    icon: "fas fa-stopwatch",
  },
  {
    title: "Ironing & Pressing",
    description: "Crisp, professionally ironed clothes delivered to your door.",
    icon: "fas fa-hands-bubbles",
  },
  {
    title: "Eco-Friendly Cleaning",
    description: "We use non-toxic detergents safe for your clothes and the planet.",
    icon: "fas fa-leaf",
  },
];
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.services-section {
  padding: 100px 20px;
  background: #f6fefe;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.highlight {
  color: #00bfa6;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 10px 0;
}

.description {
  font-size: 1rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 191, 166, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 191, 166, 0.1);
}

.icon-box {
  font-size: 2.5rem;
  color: #00bfa6;
  margin-bottom: 20px;
}

.service-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.service-desc {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 0.95rem;
  }

  .service-title {
    font-size: 1.15rem;
  }

  .service-desc {
    font-size: 0.9rem;
  }
}
</style>
