<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Logo & About -->
      <div class="footer-col">
        <img src="/src/assets/Logo.png" alt="LaundryHub Logo" class="footer-logo" />
        <p class="footer-about">
          LaundryHub offers top-tier laundry services with fast delivery, eco-friendly processes, and affordable pricing. Your clothes deserve the best care.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About Us</RouterLink></li>
          <li><RouterLink to="/Services">Services</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
          <li><router-link to="/privacy">Privacy Policy</router-link></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="footer-col">
        <h4>Contact Us</h4>
        <ul class="footer-contact">
          <li><i class="fas fa-phone-alt"></i>234 816 238 5122</li>
          <li><i class="fas fa-envelope"></i> info@laundryhub.com</li>
          <li><i class="fas fa-map-marker-alt"></i> egbe new site, Lagos, Nigeria</li>
        </ul>
        <div class="footer-socials">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} LaundryHub. All rights reserved.</p>
    </div>
  </footer>
</template>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.footer {
  color: #fff;
  padding: 60px 20px 20px;
  font-family: 'Segoe UI', sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
}

.footer-col {
  flex: 1;
  min-width: 250px;
}

.footer-logo {
  width: 140px;
  margin-bottom: 15px;
}

.footer-about {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
}

.footer-col h4 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  font-weight: 600;
  color: black;
}

.footer-links,
.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li,
.footer-contact li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #555;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #00aaff;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #555;
  font-size: 0.95rem;
}

.footer-socials {
  margin-top: 15px;
}

.footer-socials a {
  display: inline-block;
  margin-right: 12px;
  color: #ccc;
  font-size: 1.2rem;
  transition: color 0.3s;
}

.footer-socials a:hover {
  color: #00aaff;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 40px;
  text-align: center;
  padding-top: 20px;
  font-size: 0.9rem;
  color: #aaa;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }

  .footer-col {
    align-items: center;
  }

  .footer-contact li {
    justify-content: center;
  }
}
</style>
