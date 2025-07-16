<template>
  <section class="pricing-section" id="pricing">
    <div class="container">
      <div class="title-box">
        <h2 class="section-title">
          Choose Your <span class="highlight">Laundry Plan</span>
        </h2>
        <p class="subtitle">Affordable pricing tailored for every lifestyle and laundry need.</p>
      </div>

      <div class="pricing-cards">
        <div class="pricing-card" v-for="(plan, index) in pricingPlans" :key="index">
          <h3 class="plan-name">{{ plan.name }}</h3>
          <p class="plan-price">₦{{ plan.price }}<span>/{{ plan.duration }}</span></p>
          <ul class="features">
            <li v-for="(feature, i) in plan.features" :key="i">
              <i class="fas fa-check-circle"></i> {{ feature }}
            </li>
          </ul>
          <router-link to="/Contact" class="select-btn">Get Started</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const pricingPlans = [
  {
    name: 'Basic',
    price: '2000',
    duration: 'load',
    features: [
      'Washing & Drying',
      'Same-day Service',
      'Self-dropoff',
    ],
  },
  {
    name: 'Standard',
    price: '3500',
    duration: 'load',
    features: [
      'Pickup & Delivery',
      'Washing & Folding',
      '24hr Turnaround',
    ],
  },
  {
    name: 'Premium',
    price: '5000',
    duration: 'load',
    features: [
      'Dry Cleaning Included',
      'Express Delivery',
      'Cloth Perfume & Packaging',
    ],
  },
];
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.pricing-section {
  background: #f7fdfd;
  padding: 100px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.title-box {
  margin-bottom: 50px;
}

.section-title {
  font-size: 2.4rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.highlight {
  color: #00bfa6;
}

.subtitle {
  font-size: 1rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}

.pricing-cards {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.pricing-card {
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 191, 166, 0.05);
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  transition: transform 0.3s;
}

.pricing-card:hover {
  transform: translateY(-6px);
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.plan-price {
  font-size: 2rem;
  font-weight: 800;
  color: #00bfa6;
  margin-bottom: 20px;
}

.plan-price span {
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
}

.features {
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
  text-align: left;
}

.features li {
  margin-bottom: 12px;
  font-size: 1rem;
  color: #444;
  display: flex;
  align-items: center;
  gap: 10px;
}

.features i {
  color: #00bfa6;
}

.select-btn {
  padding: 12px 24px;
  background: #00bfa6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: 0.3s;
}

.select-btn:hover {
  background: #009e91;
}

/* Responsive */
@media (max-width: 768px) {
  .pricing-card {
    max-width: 100%;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>
