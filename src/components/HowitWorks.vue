<template>
  <section class="how-it-works">
    <div class="container">
      <div class="left-container">
        <p class="subtitle">Our Services</p>
        <p class="subtext">How it works</p>
        <h1 class="title">How Our Pick & Drop Service Works</h1>
        <p class="description">
          While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:
        </p>
        <router-link to="/contact" class="pickup-btn">
          <i class="fas fa-truck"></i> Schedule A Pickup
        </router-link>

        <!-- ✅ Ad appears only under the button -->
        <AdSlot />
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
import AdSlot from "./Adslot.vue";
export default {
  name: "HowItWorks",
  components: { AdSlot },
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
  font-weight: 500;
  color: #009e8a;
  font-size: 1.05rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-bottom: 18px;
  font-family: 'Segoe UI', Arial, sans-serif;
}

.title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #132c1f;
  line-height: 1.18;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  font-family: 'Segoe UI', Arial, sans-serif;
}

.description {
  color: #455a64;
  margin: 18px 0 32px;
  font-size: 1.13rem;
  line-height: 1.7;
  max-width: 540px;
  font-family: 'Segoe UI', Arial, sans-serif;
  letter-spacing: 0.1px;
}

.pickup-btn {
  background: #00bfa6;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 1.08rem;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s;
  font-family: 'Segoe UI', Arial, sans-serif;
  letter-spacing: 0.2px;
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
  font-family: 'Segoe UI', Arial, sans-serif;
}

.step-card:hover {
  transform: translateY(-6px);
}

.step-info .step-number {
  display: inline-block;
  font-size: 1.02rem;
  font-weight: 700;
  background-color: #00bfa6;
  color: white;
  padding: 7px 16px;
  border-radius: 7px;
  margin-bottom: 14px;
  letter-spacing: 0.2px;
  font-family: 'Segoe UI', Arial, sans-serif;
}

.step-info h3 {
  font-size: 1.18rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 8px;
  letter-spacing: 0.1px;
  font-family: 'Segoe UI', Arial, sans-serif;
}

.step-info p {
  color: #546e7a;
  font-size: 1.05rem;
  line-height: 1.65;
  font-family: 'Segoe UI', Arial, sans-serif;
  letter-spacing: 0.05px;
}

/* Ad Slot Styling */
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
}
@media (max-width: 900px) {
  .ad-slot {
    min-height: 60px;
    font-size: 0.95rem;
    margin: 20px 0 0 0;
  }
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
