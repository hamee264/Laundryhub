<template>
  <section class="how-it-works">
    <div class="container">
      <div class="left-container">
         <p class="subtitle"> Our Services</p>
        <p class="subtext">How it works</p>
        <h1 class="title">How Our Pick & Drop Service Works</h1>
        <p class="description">
          While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:
        </p>
        <router-link to="/contact" class="pickup-btn">
          <i class="fas fa-truck"></i> Schedule A Pickup
        </router-link>
      </div>

      <div class="right-container">
        <div class="step-card" v-for="(step, index) in steps" :key="step.title">
          <div class="step-info">
            <div class="step-number">Step {{ index + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HowItWorks",
  data() {
    return {
      steps: [
        {
          title: "Schedule Pickup",
          description: "Choose a convenient time for us to collect your laundry from your location.",
        },
        {
          title: "We Wash & Dry",
          description: "Our professionals clean your clothes using modern machines and quality detergents.",
        },
        {
          title: "Fold & Package",
          description: "Freshly cleaned clothes are folded neatly and packaged with care.",
        },
        {
          title: "Deliver to You",
          description: "We deliver your laundry back to you at the scheduled time.",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.how-it-works {
  padding: 100px 30px;
  /* background-color: #f3f7f6; */
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}

.left-container {
  flex: 1 1 460px;
}

.right-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  flex: 1 1 540px;
}

.subtext {
  font-weight: 600;
  color: #00bfa6;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 14px;
}

.title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #132c1f;
  line-height: 1.3;
}

.description {
  color: #455a64;
  margin: 20px 0 30px;
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 520px;
}

.pickup-btn {
  background: #00bfa6;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s;
}

.pickup-btn:hover {
  background: #009e8a;
}

.step-card {
  background: #f3f7f6;
  border-radius: 16px;
  padding: 24px 20px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  border: 1px solid #546e7a;
}

.step-card:hover {
  transform: translateY(-6px);
}

.step-info .step-number {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 700;
  background-color: #00bfa6;
  color: white;
  padding: 6px 14px;
  border-radius: 6px;
  margin-bottom: 12px;
}

.step-info h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.step-info p {
  color: #546e7a;
  font-size: 0.96rem;
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 900px) {
  .container {
    flex-direction: column;
  }

  .right-container {
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 2.2rem;
  }
}
</style>
