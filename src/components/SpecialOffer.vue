<template>
    <section class="special-offer">
      <div class="offer-container">
        <div class="offer-text">
          <h3 class="tagline">SPECIAL OFFER –</h3>
          <h2 class="headline">FRESH LAUNDRY, BIG SAVINGS!</h2>
          <p class="description">
            Enjoy 20% OFF your first laundry service with LaundryHub! Experience professional cleaning,
            fast turnaround, and fresh clothes every time.
          </p>
  
          <ul class="benefits-list">
            <li>
              <i class="fas fa-check-circle"></i>
              Fast & Efficient – Quick service without compromising quality.
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              Eco-Friendly Cleaning – Gentle on fabrics, safe for the planet.
            </li>
            <li>
              <i class="fas fa-check-circle"></i>
              Expert Care – Fresh, clean, and neatly folded clothes every time.
            </li>
          </ul>
  
          <router-link class="cta-button" to="/contact">
            <i class="fas fa-percent"></i> Claim Your Discount
          </router-link >
        </div>
  
        <div class="offer-image">
          <img src="/src/assets/Table.png" alt="Folded Clothes on Table" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "SpecialOfferSection",
  };
  </script>
  
  <style scoped>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
  
  .special-offer {
    background: linear-gradient(to right, #eafcfb, #ffffff);
    border: 1px solid #cceeee;
    border-radius: 16px;
    padding: 60px 30px;
    margin: 40px auto;
    max-width: 1200px;
  }
  
  .offer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
  }
  
  .offer-text {
    flex: 1 1 500px;
  }
  
  .offer-image {
    flex: 1 1 400px;
    text-align: right;
  }
  
  .offer-image img {
    max-width: 100%;
    height: auto;
  }
  
  .tagline {
    color: #00bfa6;
    font-size: 1.1rem;
    font-weight: 800;
    margin-bottom: 5px;
  }
  
  .headline {
    font-size: 2rem;
    font-weight: 900;
    color: #111;
    margin-bottom: 20px;
  }
  
  .description {
    color: #444;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 20px;
    max-width: 600px;
  }
  
  .benefits-list {
    list-style: none;
    padding: 0;
    margin: 0 0 30px;
  }
  
  .benefits-list li {
    display: flex;
    align-items: center;
    font-size: 0.95rem;
    margin-bottom: 12px;
    color: #333;
  }
  
  .benefits-list i {
    color: #00bfa6;
    margin-right: 10px;
    font-size: 1.1rem;
  }
  
  .cta-button {
    background-color: #00bfa6;
    color: #fff;
    font-size: 1rem;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #00a896;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .offer-container {
      flex-direction: column;
      text-align: center;
    }
  
    .offer-image {
      text-align: center;
    }
  
    .cta-button {
      justify-content: center;
    }
  }
  </style>
  