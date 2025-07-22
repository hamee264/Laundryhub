<template>
  <section class="contact-section">
    <div class="container">
      <div class="contact-left">
        <h2 class="title">GET IN TOUCH WITH US</h2>
        <p class="subtitle">
          Reach out to us for inquiries, support, or partnership
          opportunities.<br />
          We're here to assist you!
        </p>

        <div
          class="contact-info-card"
          v-for="(item, index) in contactInfo"
          :key="index"
        >
          <div class="icon">
            <i :class="item.icon"></i>
          </div>
          <div class="text">
            <p class="label">{{ item.label }}</p>
            <p class="value">{{ item.value }}</p>
          </div>
          <div class="action">
            <i class="fas fa-arrow-up-right-from-square"></i>
          </div>
        </div>
      </div>

      <div class="contact-right">
        <h3 class="form-title">SEND US A MESSAGE</h3>
        <p class="form-subtitle">
          Use our convenient contact form to reach out with questions, feedback,
          or collaboration inquiries.
        </p>

        <form @submit.prevent="submitForm" action="mailto:olalekan30@gmail.com">
          <input type="text" v-model="form.name" placeholder="Name" required />
          <input
            type="email"
            v-model="form.email"
            placeholder="Email"
            required
          />
          <select v-model="form.location" required>
            <option value="" disabled>Select Location</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Port Harcourt</option>
          </select>
          <textarea
            v-model="form.message"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">
            <i class="fas fa-paper-plane"></i> Submit
          </button>
        </form>

        <!-- ✅ Adsense Ad Here -->
        <AdSlot />
      </div>
    </div>
  </section>

  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import AdSlot from "../components/AdSlot.vue";

export default {
  data() {
    return {
      contactInfo: [
        {
          label: "You can email us here",
          value: "olalekanhameed30@gmail.com",
          icon: "fas fa-envelope",
        },
        {
          label: "Locations",
          value: "Get Directions",
          icon: "fas fa-truck",
        },
        {
          label: "Fast & Easy Laundry Pickup",
          value: "Schedule A pickup",
          icon: "fas fa-map-marker-alt",
        },
      ],
      form: {
        name: "",
        email: "",
        location: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert("Message sent successfully!");
      this.form = {
        name: "",
        email: "",
        location: "",
        message: "",
      };
    },
  },
  components: {
    Footer,
    AdSlot,
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.contact-section {
  padding: 80px 20px;
  background: #fff;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  max-width: 1200px;
  margin: auto;
  align-items: flex-start;
}

.contact-left {
  flex: 1 1 45%;
}

.title {
  font-size: 2rem;
  font-weight: 800;
  color: #111;
  margin-bottom: 10px;
}

.subtitle {
  color: #555;
  font-size: 1rem;
  margin-bottom: 30px;
}

.contact-info-card {
  display: flex;
  align-items: center;
  background: #f9fafa;
  border-radius: 12px;
  padding: 15px 20px;
  margin-bottom: 15px;
  box-shadow: 0 0 0 1px #e3f2f2;
}

.icon {
  font-size: 1.5rem;
  color: #111;
  margin-right: 15px;
}

.text {
  flex: 1;
}

.text .label {
  font-weight: 600;
  color: #333;
}

.text .value {
  font-size: 0.95rem;
  color: #00bfa6;
}

.action {
  color: #00bfa6;
  font-size: 1rem;
}

.contact-right {
  flex: 1 1 50%;
}

.form-title {
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #111;
}

.form-subtitle {
  color: #555;
  font-size: 0.95rem;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input,
select,
textarea {
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 0.95rem;
  background: #f9fafa;
  outline: none;
}

textarea {
  resize: none;
  height: 120px;
}

button {
  background-color: #00bfa6;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s;
}

button:hover {
  background-color: #009e8e;
}

/* Responsive */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
</style>
