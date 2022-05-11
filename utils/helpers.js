module.exports = {

  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },

  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },

  // category validation
  category_1: (param) => {
    if (param === 1) {
      return true;
    } else {
      return false;
    }
  },
  category_2: (param) => {
    if (param === 2) {
      return true;
    } else {
      return false;
    }
  },
  category_3: (param) => {
    if (param === 3) {
      return true;
    } else {
      return false;
    }
  },
  category_4: (param) => {
    if (param === 4) {
      return true;
    } else {
      return false;
    }
  },
  category_5: (param) => {
    if (param === 5) {
      return true;
    } else {
      return false;
    }
  },
  category_6: (param) => {
    if (param === 6) {
      return true;
    } else {
      return false;
    }
  },
  category_7: (param) => {
    if (param === 7) {
      return true;
    } else {
      return false;
    }
  },
  category_8: (param) => {
    if (param === 8) {
      return true;
    } else {
      return false;
    }
  }

};
