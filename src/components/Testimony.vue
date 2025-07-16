<template>
    <section class="testimonials-section">
      <div class="container">
        <div class="title-box">
          <p class="subtitle"> Our Testimonials</p>
          <h2 class="section-title">
            WHAT OUR <span class="highlight">CUSTOMERS SAY</span>
          </h2>
          <p class="subtitle">
            Trusted by hundreds of users who love the LaundryHub experience.
          </p>
        </div>
  
        <div class="loop-container">
          <div class="loop" v-for="testimonial in testimonials" :key="testimonial.name">
            <div class="avatar">
              <img :src="testimonial.image" alt="User Photo" />
            </div>
            <div class="content">
              <div class="top">
                <i class="fas fa-quote-left quote-icon"></i>
                <p>{{ testimonial.message }}</p>
              </div>
              <div class="bottom">
                <h4>{{ testimonial.name }}</h4>
                <p class="role">{{ testimonial.role }}</p>
                <div class="stars">
                  <i v-for="n in 5" :key="n" class="fas fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script>
  export default {
    data() {
      return {
        testimonials: [
          {
            name: "Emily R.",
            message: "LaundryHub provides excellent service! My clothes are always fresh, neatly folded, and delivered on time.",
            image: "/src/assets/testimonial1.avif",
            role: "Marketing Manager",
          },
          {
            name: "Mark T.",
            message: "The best laundromat in town! Modern machines, friendly staff, and a smooth experience every time.",
            image: "/src/assets/testimonial2.avif",
            role: "Business Owner",
          },
          {
            name: "David W.",
            message: "LaundryHub’s pickup and delivery service is a lifesaver! Super convenient and reliable.",
            image: "/src/assets/testimonial3.avif",
            role: "Software Engineer",
          },
          {
            name: "Sophia L.",
            message: "Impressed with their stain removal and care. LaundryHub saved my favorite outfit!",
            image: "/src/assets/testimonial4.avif",
            role: "Fashion Designer",
          },
        ],
      };
    },
  };
  </script>
  <style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.testimonials-section {
  padding: 80px 30px;
  /* background: #f7fdfd; */
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
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.section-title .highlight {
  color: #00bfa6;
}

.subtitle {
  font-size: 1rem;
  color: #555;
  max-width: 700px;
  margin: 0 auto;
}

.loop-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  
}

.loop {
  /* background: #fff; */
  padding: 10px;
  border-radius: 16px;
  width: 48%;
  display: flex;
  /* align-items: flex-start; */
  /* box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08); */
  border: 2px solid #546e7a;

  transition: 0.3s;
}

.loop:hover {
  transform: translateY(-5px);
}

.avatar {
  flex-shrink: 0;
  width: 150px;
  height: 100%;
  margin-right: 20px;
  overflow: hidden;
  border-radius: 12px;
  border: 2px solid #546e7a;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
}

.content {
  text-align: left;
  flex: 1;
  border: 2px solid #546e7a;
    height: 100%;
    padding: 20px;
    border-radius: 12px;
}

.top {
  margin-bottom: 15px;
}

.quote-icon {
  color: #00bfa6;
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.content p {
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 600;
  color: #444;
}

.bottom h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 4px;
}

.bottom .role {
  font-size: 0.9rem;
  color: #888;
}

.stars {
  margin-top: 6px;
}

.stars i {
  color: #ffc107;
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 991px) {
  .loop {
    width: 100%;
    flex-direction: column;
    text-align: center;
  }

  .avatar {
    width: 100%;
    height: auto;
    margin: 0 0 15px;
    border-radius: 8px;
  }

  .avatar img {
    width: 100%;
    height: auto;
  }

  .content {
    text-align: center;
  }

  .bottom h4,
  .bottom .role {
    text-align: center;
  }
}
</style>