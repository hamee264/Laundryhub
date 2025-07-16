<template>
  <section class="faq-section">
    <div class="faq-container">
      <p class="faq-subtitle subtitle">FAQs</p>
      <h2 class="faq-title">Frequently Asked Questions</h2>
      <p class="faq-description">
        At LaundryHub, we prioritize customer satisfaction. Thousands trust us for fresh, clean laundry daily. See their experiences!
      </p>

      <div class="faq-list">
        <div
          v-for="(item, index) in faqs"
          :key="index"
          class="faq-item"
        >
          <div class="faq-question-box" @click="toggle(index)">
            <h3 class="faq-question-text">{{ item.question }}</h3>
            <div class="faq-icon-box" :class="{ rotate: openIndex === index }">
              <i class="fas fa-plus faq-icon" v-if="openIndex !== index"></i>
              <i class="fas fa-minus faq-icon" v-else></i>
            </div>
          </div>
          <transition name="faq">
            <div v-if="openIndex === index" class="faq-answer-box">
              <p class="faq-answer-text">{{ item.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      openIndex: null,
      faqs: [
        {
          question: "How does LaundryHub’s service work?",
          answer: "You place an order, we pick up, clean, and deliver your laundry in 24–48 hours.",
        },
        {
          question: "Do you offer pick-up and delivery services?",
          answer: "Yes! We offer both free and premium pick-up/delivery options based on your location.",
        },
        {
          question: "What types of laundry can you clean?",
          answer: "We handle clothes, beddings, delicate fabrics, and more. We use safe, eco-friendly detergents.",
        },
        {
          question: "How long does the laundry process take?",
          answer: "Standard service takes 24–48 hours. Express delivery is available for same-day turnaround.",
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
  },
};
</script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.faq-section {
  padding: 80px 20px;
  background: #fff;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-subtitle {
  text-transform: uppercase;
  font-size: 0.85rem;
  color: #00aaff;
  font-weight: 600;
  margin-bottom: 10px;
}

.faq-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: #111;
}

.faq-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 40px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.faq-item {
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: box-shadow 0.2s ease;
}

.faq-item:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
}

.faq-question-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  cursor: pointer;
}

.faq-question-text {
  font-size: 1.05rem;
  font-weight: 600;
  color: #222;
  margin: 0;
  text-align: left;
}

.faq-icon-box {
  transition: transform 0.3s ease;
}

.faq-icon {
  font-size: 1rem;
  color: #222;
}

.rotate {
  transform: rotate(180deg);
}

.faq-answer-box {
  padding: 0 24px 20px;
  text-align: left;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Transitions */
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
}
.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.faq-enter-to,
.faq-leave-from {
  max-height: 500px;
  opacity: 1;
}

/* Responsive */
@media (max-width: 600px) {
  .faq-title {
    font-size: 1.8rem;
  }

  .faq-question-text {
    font-size: 1rem;
  }

  .faq-answer-box {
    font-size: 0.9rem;
  }
}
</style>
