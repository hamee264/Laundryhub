<template>
  <section class="hero">
    <div class="hero-content">
      <p class="subtext">Modern Machines, Faster Wash</p>
      <h1 class="title">
        FAST, EASY & RELIABLE <br />
        <span class="highlight">LAUNDRY!</span>
      </h1>
      <p class="description">
        Enjoy a hassle-free laundry experience with modern machines, free Wi-Fi, a cozy lounge, and easy payment
        options.
        Fresh, clean clothes—made simple!
      </p>
      <router-link class="pickup-btn" to="/contact">
        <i class="fas fa-truck"></i> Schedule A pickup
      </router-link>

      <div class="review">
        <div class="avatars">
          <img src="https://randomuser.me/api/portraits/women/1.jpg" />
          <img src="https://randomuser.me/api/portraits/women/2.jpg" />
          <img src="https://randomuser.me/api/portraits/women/3.jpg" />
        </div>
        <div class="rating">
          <strong>4.9+ ⭐ Rating</strong><br />
          <span>1200+ Reviews</span>
        </div>
      </div>
    </div>

    <div class="hero-image">
      <video src="/src/assets/laundry.mp4" autoplay muted loop></video>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* padding: 50px 10px; */
  background: #fff;
  gap: 40px;
  margin: auto;
  flex-wrap: nowrap;
  max-width: 1250px;
}

.hero-content,
.hero-image {
  flex: 1;
  padding: 20px;
}

.hero-content {
  max-width: none;
}

.subtext {
  font-weight: 500;
  color: #444;
  margin-bottom: 10px;
}

.title {
  font-size: 3rem;
  font-weight: 900;
  color: #132c1f;
  line-height: 1.2;
}

.title .highlight {
  color: #00bfa6;
}

.description {
  font-size: 1rem;
  color: #444;
  margin: 20px 0;
  line-height: 1.5;
}

.pickup-btn {
  background: #00bfa6;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s ease;
  max-width: 2500px;
}

.pickup-btn:hover {
  background: #009e8a;
}

.review {
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 15px;
}

.avatars {
  display: flex;
}

.avatars img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-left: -10px;
  box-shadow: 0 0 0 2px #00bfa6;
}

.avatars img:first-child {
  margin-left: 0;
}

.rating {
  font-size: 0.95rem;
  color: #333;
}

.hero-image video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  max-height: 600px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    flex-wrap: wrap;
    text-align: left;
  }

  .hero-content,
  .hero-image {
    padding: 10px;
  }

  .hero-image video {
    max-height: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .review {
    justify-content: left;
  }
}
</style>