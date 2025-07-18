<template>
    <section class="find-laundry">
      <div class="find-container">
        <!-- Text Content -->
        <div class="find-text">
          <p class="subheading">Affordable cleaning solutions</p>
          <h2 class="heading">
            FIND A LAUNDRY <br />
            NEAR YOU
          </h2>
          <p class="description">
            We make doing laundry easy with modern machines, a comfortable space, and multiple locations. Whether you're washing a few items or a big load, we’ve got everything you need for a quick and hassle-free laundry experience.
          </p>
  
          <router-link class="location-btn" to="/Location">
            <i class="fas fa-map-marker-alt"></i> Find Your Nearest Location
          </router-link>
        </div>
  
        <!-- Image -->
        <div class="find-image">
          <img src="/src/assets/map.png" alt="Laundry Map" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "FindLaundry",
  };
  </script>
  
  <style scoped>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
  
  .find-laundry {
    background: #f9fafa;
    padding: 60px 30px;
    display: flex;
    justify-content: center;
  }
  
  .find-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    gap: 40px;
    flex-wrap: wrap;
  }
  
  .find-text {
    flex: 1;
    min-width: 300px;
  }
  
  .subheading {
    color: #333;
    font-weight: 500;
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
  
  .heading {
    font-size: 2.4rem;
    font-weight: 900;
    color: #132c1f;
    line-height: 1.3;
    margin-bottom: 20px;
  }
  
  .description {
    font-size: 1rem;
    color: #555;
    margin-bottom: 25px;
    line-height: 1.6;
  }
  
  .location-btn {
    background-color: #00bfa6;
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: background 0.3s;
  }
  
  .location-btn:hover {
    background-color: #009e8a;
  }
  
  .find-image {
    flex: 1;
    min-width: 300px;
    text-align: center;
  }
  
  .find-image img {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    object-fit: contain;
  }
  @media (max-width: 900px) {
    .find-container {
      flex-direction: column;
    }
  }
  </style>
  