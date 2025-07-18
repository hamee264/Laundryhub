<template>
    <section class="benefits-section">
      <div class="container">
        <div class="title-con">
           <p class="subtitle"> Our Benefits</p>
          <h2 class="section-title">
            WHY CHOOSE <span class="highlight">LAUNDRYHUB?</span>
          </h2>
          <p class="subtitle">
            We provide exceptional service that combines efficiency, convenience, and care.
          </p>
        </div>
  
        <div class="benefits-layout">
          <!-- Left Column -->
          <div class="benefits-column">
            <div class="benefit-card" v-for="(benefit, index) in benefits" :key="index">
              <div class="icon-title">
                <i :class="benefit.icon"></i>
                <h3>{{ benefit.title }}</h3>
              </div>
              <p class="desc">{{ benefit.description }}</p>
            </div>
          </div>
  
          <!-- Center Image -->
          <div class="benefits-image">
            <img src="/src/assets/benefitimg.png" alt="LaundryHub Benefits" />
          </div>
  
          <!-- Right Column -->
          <div class="benefits-column">
            <div class="benefit-card" v-for="(benefit, index) in benefits2" :key="index">
              <div class="icon-title">
                <i :class="benefit.icon"></i>
                <h3>{{ benefit.title }}</h3>
              </div>
              <p class="desc">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "WhyChooseLaundryHub",
    data() {
      return {
        benefits: [
          {
            title: "Time‑Saving Solutions",
            description: "Streamlined laundry process for quick turnaround and minimal effort.",
            icon: "fas fa-clock"
          },
          {
            title: "Fast & Efficient Machines",
            description: "High‑capacity washers and dryers for quick, smooth, and hassle‑free laundry.",
            icon: "fas fa-cogs"
          },
          {
            title: "Entertainment & Free Wi‑Fi",
            description: "Enjoy seamless connectivity and entertainment while waiting for your laundry.",
            icon: "fas fa-wifi"
          }
        ],
        benefits2: [
          {
            title: "Eco‑Friendly Cleaning",
            description: "We use environmentally safe methods that are tough on stains yet gentle on fabrics.",
            icon: "fas fa-leaf"
          },
          {
            title: "Trusted Expertise",
            description: "Our experienced team ensures reliable service with consistently great results.",
            icon: "fas fa-award"
          },
          {
            title: "Friendly & Helpful Staff",
            description: "Our team ensures a smooth experience with always clean facilities.",
            icon: "fas fa-users"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
  
  .benefits-section {
    padding: 80px 30px;
    max-width: 1250px;
    margin: auto;
    /* background-color: #f8f9fa; */
  }
  
  .title-con {
    text-align: center;
    margin-bottom: 60px;
  }
  
  .section-title {
    font-size: 2.6rem;
    font-weight: 800;
    color: #132c1f;
  }
  
  .section-title .highlight {
    color: #00bfa6;
  }
  
  .subtitle {
    font-size: 1.1rem;
    color: #555;
    max-width: 700px;
    margin: 20px auto 0;
    line-height: 1.6;
  }
  
  .benefits-layout {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .benefits-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
    min-width: 280px;
  }
  
  .benefit-card {
    background: #f3f7f6;
    padding: 24px;
    border-radius: 16px;
    /* box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05); */
    transition: 0.3s ease;
    border: #546e7a solid 1px;
  }
  
  .benefit-card:hover {
    transform: translateY(-6px);
  }
  
  .icon-title {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
  }
  
  .icon-title i {
    font-size: 1.5rem;
    color: #00bfa6;
  }
  
  .icon-title h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: #132c1f;
    margin: 0;
  }
  
  .desc {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.6;
  }
  
  .benefits-image {
    flex: 1;
    max-width: 400px;
  }
  
  .benefits-image img {
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  }
  
  /* Responsive */
  @media (max-width: 960px) {
    .benefits-layout {
      flex-direction: column;
      text-align: center;
    }
  
    .benefits-image {
      max-width: 300px;
      margin: 30px auto;
    }
  
    .icon-title {
      justify-content: center;
    }
  }
  </style>
  