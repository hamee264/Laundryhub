<template>
    <div class="top-wrapper">
      <!-- Top Contact Bar -->
      <div class="topbar">
        <div class="top-contact">
          <a href="tel:+2348001234567">
            <i class="fas fa-phone-alt"></i> +234 816 238 5122
          </a>
          <a href="mailto:info@yourplumbing.com">
            <i class="fas fa-envelope"></i> info@yourplumbing.com
          </a>
        </div>
      </div>
  
      <!-- Overlay -->
      <!-- <div class="overlay" v-if="isMenuOpen" @click="toggleMenu"></div> -->
  
      <!-- Main Header -->
      <header>
        <div class="logo">
          <img src="../assets/Logo.png" alt="Logo" />
        </div>
  
        <nav :class="{ open: isMenuOpen }">
  <router-link to="/#services" @click="handleLinkClick">Home</router-link>
  <router-link to="/Location" @click="handleLinkClick">Location</router-link>
  <router-link to="/Services" @click="handleLinkClick">Services</router-link>
  <router-link to="/About" @click="handleLinkClick">About Us</router-link>
  <router-link to="/Pricing" @click="handleLinkClick">Pricing</router-link>
</nav>

  
        <div class="contact">
          <router-link to="/contact" class="btn">Contact</router-link>
        </div>
  
        <div class="menubtn" :class="{ open: isMenuOpen }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      handleLinkClick() {
        this.isMenuOpen = false;
      },
    },
    mounted() {
      document.documentElement.style.scrollBehavior = "smooth";
    },
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap");
  
  * {
    font-family: "Inter", sans-serif;
    box-sizing: border-box;
  }
  
  .topbar {
    background: #1bb2b1;
    padding: 6px 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.9rem;
    color: white;
    font-weight: 500;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .top-contact {
    display: flex;
    gap: 20px;
  }
  
  .top-contact a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 20px 30px;
    width: 100%;
    top: 0;
    z-index: 9999;
    position: relative;
  }
  
  .logo img {
    width: 120px;
    height: auto;
  }
  
  nav {
    display: flex;
    align-items: center;
    gap: 30px;
    transition: all 0.3s ease-in-out;
  }
  
  nav a {
    position: relative;
    font-weight: 600;
    font-size: 1rem;
    color: #1a1a1a;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  nav a::after {
    content: "";
    width: 0;
    position: absolute;
    height: 2px;
    background: #1bb2b1;
    top: 100%;
    left: 0;
    transition: 0.3s ease;
  }
  
  nav a:hover {
    color: #1bb2b1;
  }
  
  nav a:hover::after {
    width: 100%;
  }
  
  .contact .btn{
    background: #1bb2b1;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 2px 10px rgba(30, 144, 255, 0.2);
  }
  
  .contact .btn:hover {
    opacity: 0.85;
  }
  
  .menubtn {
    width: 30px;
    height: 20px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 10001;
    position: relative;
  }
  
  .menubtn span {
    display: block;
    height: 2px;
    background: #1a1a1a;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  .menubtn.open span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }
  
  .menubtn.open span:nth-child(2) {
    opacity: 0;
  }
  
  .menubtn.open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
  
  /* Overlay */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 9990;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    nav {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      flex-direction: column;
      background: #fff;
      padding: 20px;
      border-top: 1px solid #eee;
      display: none !important;
      z-index: 10000;
    }
  
    nav.open {
      display: flex !important;
      animation: slideIn 0.3s ease forwards;
    }
  
    @keyframes slideIn {
      from {
        transform: translateY(-10px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  
    nav router-link{
      font-size: 1rem;
      width: 100%;
      padding: 10px 0;
      border-bottom: 1px solid #f2f2f2;
      text-align: left;
    }
  
    .contact {
      display: none;
    }
  
    .menubtn {
      display: flex;
    }
  
    .topbar {
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
  
    .top-contact {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }
  }
  
  @media (max-width: 480px) {
    header {
      padding: 15px 20px;
    }
  
    .logo img {
      width: 100px;
    }
  
    nav router-link {
      font-size: 0.95rem;
    }
  
    .top-contact a {
      font-size: 0.85rem;
    }
  }
  </style>
  