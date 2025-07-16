<template>
  <section class="about-section">
    <div class="container">
      <div class="about-header">
        <h1 class="title">About <span>LaundryHub</span></h1>
        <p class="subtitle">
          At LaundryHub, we simplify laundry so you can focus on what matters. Clean clothes, delivered with care.
        </p>
      </div>

      <div class="about-content">
        <div class="image-box">
          <img src="/src/assets/service4.png" alt="About LaundryHub" />
        </div>

        <div class="text-box">
          <h2>Our Mission</h2>
          <p>
            We’re on a mission to revolutionize how people experience laundry. Whether you're a busy professional, student, or family, LaundryHub offers top-notch services—pickup, cleaning, folding, and delivery—with convenience and eco-conscious care.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li><i class="fas fa-check-circle"></i> Fast turnaround & same-day service</li>
            <li><i class="fas fa-check-circle"></i> Pickup & delivery at your doorstep</li>
            <li><i class="fas fa-check-circle"></i> Eco-friendly detergents & modern equipment</li>
            <li><i class="fas fa-check-circle"></i> Trusted by hundreds of customers</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import Footer from '../components/Footer.vue';
export default {
  name: 'AboutPage',
  components:{
    Footer
  }
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.about-section {
  padding: 100px 20px;
  background: #f9fdfd;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 60px;
}

.title {
  font-size: 2.8rem;
  font-weight: 800;
  color: #1a1a1a;
}

.title span {
  color: #00bfa6;
}

.subtitle {
  font-size: 1.1rem;
  color: #555;
  max-width: 700px;
  margin: 10px auto 0;
}

.about-content {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: center;
}

.image-box {
  flex: 1;
  min-width: 300px;
}

.image-box img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
}

.text-box {
  flex: 1.2;
  min-width: 300px;
}

.text-box h2 {
  color: #1a1a1a;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 700;
}

.text-box p {
  font-size: 1rem;
  color: #444;
  line-height: 1.7;
  margin-bottom: 20px;
}

.text-box ul {
  list-style: none;
  padding: 0;
}

.text-box li {
  font-size: 1rem;
  margin-bottom: 10px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
}

.text-box li i {
  color: #00bfa6;
}

/* Responsive */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }

  .title {
    font-size: 2.2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .text-box h2 {
    font-size: 1.3rem;
  }
}
</style>
