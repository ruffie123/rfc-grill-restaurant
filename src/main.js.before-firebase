// RFC GRILL RESTAURANT - Pure Vanilla JavaScript
import { categories, menuItems, fastFoodDeals, pizzaDeals, familyDeal } from './data.js';

// SVG Icons (Lucide compatible inline SVGs)
const ICONS = {
  cart: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
  external: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14L21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  whatsapp: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`
};

const PHONE_NUMBER = "923247104014";

// State
let currentCategory = categories[0]; // "Shakes" by default
let searchQuery = "";

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initCategoryTabs();
  initSearch();
  renderMenuItems();
  renderDeals();
  initContactForm();
  initNavScroll();
});

// Mobile Navigation
function initMobileNav() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileNav = document.getElementById("mobile-nav");
  if (!hamburgerBtn || !mobileNav) return;

  hamburgerBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    const isOpen = mobileNav.classList.contains("open");
    hamburgerBtn.innerHTML = isOpen 
      ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  });

  const mobileLinks = mobileNav.querySelectorAll(".mobile-nav-link");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      hamburgerBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  });
}

// Category Tabs
function initCategoryTabs() {
  const tabsContainer = document.getElementById("category-tabs");
  if (!tabsContainer) return;

  tabsContainer.innerHTML = "";

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `category-tab ${cat === currentCategory ? "active" : ""}`;
    btn.textContent = cat;
    btn.dataset.category = cat;

    btn.addEventListener("click", () => {
      currentCategory = cat;
      // Clear search when switching tabs to show full category
      const searchInput = document.getElementById("menu-search");
      if (searchInput && searchQuery) {
        searchInput.value = "";
        searchQuery = "";
        document.getElementById("menu-search-clear").style.display = "none";
      }

      document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      
      // Auto-scroll the button into view in container
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

      renderMenuItems();
    });

    tabsContainer.appendChild(btn);
  });
}

// Search bar
function initSearch() {
  const searchInput = document.getElementById("menu-search");
  const clearBtn = document.getElementById("menu-search-clear");
  if (!searchInput) return;

  document.addEventListener("click", (e) => {
    const sug = document.getElementById("search-suggestions");
    if (sug && !e.target.closest(".menu-search-wrapper")) {
      sug.classList.remove("active");
      sug.innerHTML = "";
    }
  });

  function updateSuggestions(query) {
    const suggestions = document.getElementById("search-suggestions");
    if (!suggestions) return;
    if (!query || query.length < 1) {
      suggestions.classList.remove("active");
      suggestions.innerHTML = "";
      return;
    }
    const matches = menuItems
      .filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      )
      .slice(0, 8);
    if (matches.length === 0) {
      suggestions.classList.remove("active");
      suggestions.innerHTML = "";
      return;
    }
    suggestions.innerHTML = matches.map((item) => {
      const name = item.name;
      const idx = name.toLowerCase().indexOf(query);
      const highlighted = idx >= 0
        ? name.substring(0, idx) + '<span class="match">' + name.substring(idx, idx + query.length) + '</span>' + name.substring(idx + query.length)
        : name;
      return '<div class="search-suggestion-item" data-name="' + item.name + '">' +
        '<div><div class="search-suggestion-name">' + highlighted + '</div>' +
        '<div class="search-suggestion-category">' + item.category + '</div></div>' +
        '<div class="search-suggestion-price">Rs ' + (item.price || '') + '</div>' +
        '</div>';
    }).join('');
    suggestions.classList.add("active");
    suggestions.querySelectorAll(".search-suggestion-item").forEach(el => {
      el.addEventListener("click", () => {
        const nm = el.dataset.name;
        searchInput.value = nm;
        searchQuery = nm.toLowerCase();
        suggestions.classList.remove("active");
        suggestions.innerHTML = "";
        if (typeof renderMenuItems === 'function') renderMenuItems();
      });
    });
  }

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    updateSuggestions(searchQuery);
    if (clearBtn) {
      clearBtn.style.display = searchQuery ? "block" : "none";
    }
    renderMenuItems();
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearBtn.style.display = "none";
      renderMenuItems();
      searchInput.focus();
    });
  }
}

// WhatsApp URL builder
export function createWhatsAppOrderUrl(itemName, price) {
  const text = `Assalamualaikum RFC Grill, main order karna chahta hoon: ${itemName} - Rs ${price}`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Render Menu Items
function renderMenuItems() {
  const grid = document.getElementById("menu-grid");
  const activeTitle = document.getElementById("active-category-title");
  const itemCount = document.getElementById("menu-item-count");
  if (!grid) return;

  let items = [];

  if (searchQuery) {
    items = menuItems.filter(item => 
      item.name.toLowerCase().includes(searchQuery) || 
      item.category.toLowerCase().includes(searchQuery) ||
      (item.description && item.description.toLowerCase().includes(searchQuery))
    );
    if (activeTitle) activeTitle.textContent = `Search: "${searchQuery}"`;
  } else {
    items = menuItems.filter(item => item.category === currentCategory);
    if (activeTitle) activeTitle.textContent = currentCategory;
  }

  if (itemCount) {
    itemCount.textContent = `${items.length} ${items.length === 1 ? 'item' : 'items'}`;
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="no-items-found">
        <p style="font-size: 1.125rem; font-weight: 600; color: #FFF; margin-bottom: 6px;">No dishes found</p>
        <p>Try searching for another dish or browse our categories above.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = "";

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "menu-card";

    // Manage sizes
    let currentSelectedPrice = item.price;
    let currentSelectedLabel = "";

    const hasSizes = item.prices && typeof item.prices === 'object';
    const sizeKeys = hasSizes ? Object.keys(item.prices) : [];

    if (hasSizes && sizeKeys.length > 0) {
      currentSelectedLabel = sizeKeys[0];
      currentSelectedPrice = item.prices[currentSelectedLabel];
    }

    const cardId = `item-card-${index}`;

    card.innerHTML = `
      <div class="card-image-wrap">
        <img 
          src="${item.image}" 
          alt="${item.name} at RFC Grill Shakargarh" 
          class="card-img" 
          loading="lazy"
          referrerPolicy="no-referrer"
          onerror="this.src='/src/assets/images/bbq_platter_dish_1791207258326.jpg';"
        />
        <span class="card-category-tag">${item.category}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.name}</h3>
        ${item.description ? `<p class="card-desc">${item.description}</p>` : ''}
        
        ${hasSizes ? `
          <div class="size-selector" id="sizes-${cardId}">
            ${sizeKeys.map((size, idx) => `
              <button 
                type="button" 
                class="size-pill ${idx === 0 ? 'active' : ''}" 
                data-size="${size}" 
                data-price="${item.prices[size]}"
              >
                ${size}
              </button>
            `).join('')}
          </div>
        ` : ''}

        <div class="card-footer">
          <div class="card-price tabular">
            <span class="card-price-unit">Rs</span>
            <span class="price-val" id="price-${cardId}">${currentSelectedPrice}</span>
          </div>
          <a 
            href="${createWhatsAppOrderUrl(hasSizes ? `${item.name} (${currentSelectedLabel})` : item.name, currentSelectedPrice)}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn-card-order" 
            id="btn-${cardId}"
          >
            ${ICONS.cart}
            <span>Add to Order</span>
          </a>
        </div>
      </div>
    `;

    // Size toggle listeners
    if (hasSizes) {
      const sizeBtns = card.querySelectorAll(`#sizes-${cardId} .size-pill`);
      const priceElem = card.querySelector(`#price-${cardId}`);
      const orderBtn = card.querySelector(`#btn-${cardId}`);

      sizeBtns.forEach(sBtn => {
        sBtn.addEventListener("click", () => {
          sizeBtns.forEach(b => b.classList.remove("active"));
          sBtn.classList.add("active");
          const selectedSize = sBtn.dataset.size;
          const selectedPrice = sBtn.dataset.price;
          
          if (priceElem) priceElem.textContent = selectedPrice;
          if (orderBtn) {
            orderBtn.href = createWhatsAppOrderUrl(`${item.name} (${selectedSize})`, selectedPrice);
          }
        });
      });
    }

    grid.appendChild(card);
  });
}

// Render Deals Section
function renderDeals() {
  // 1. Family Deal Banner
  const familyContainer = document.getElementById("family-deal-container");
  if (familyContainer && familyDeal) {
    familyContainer.innerHTML = `
      <div class="family-deal-card">
        <div class="family-deal-content">
          <div>
            <div class="family-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span>Grand Feast Deal</span>
            </div>
            <h3 class="family-title">${familyDeal.name}</h3>
            <p class="family-items">${familyDeal.items}</p>
            <div class="family-footer">
              <div class="family-price tabular">
                <span style="font-size: 1.25rem; font-weight: 500; color: var(--text-muted); margin-right: 4px;">Rs</span>${familyDeal.price}
              </div>
              <a 
                href="${createWhatsAppOrderUrl(familyDeal.name, familyDeal.price)}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-primary"
              >
                ${ICONS.whatsapp}
                <span>Order Deal</span>
              </a>
            </div>
          </div>
          <div class="family-image-wrapper">
            <img 
              src="${familyDeal.image}" 
              alt="RFC Family Deal Shakargarh" 
              style="width: 100%; height: 260px; object-fit: cover;"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    `;
  }

  // 2. Fast Food Deals
  const ffContainer = document.getElementById("fast-food-deals-grid");
  if (ffContainer) {
    ffContainer.innerHTML = fastFoodDeals.map(deal => `
      <div class="deal-card">
        <div class="deal-card-img-wrap">
          <img 
            src="${deal.image}" 
            alt="${deal.name} RFC Grill" 
            class="deal-card-img" 
            loading="lazy"
            referrerPolicy="no-referrer"
            onerror="this.src='/src/assets/images/fastfood_deal_dish_1791207294480.jpg';"
          />
          <span class="deal-badge">Fast Food</span>
        </div>
        <div class="deal-card-body">
          <h4 class="deal-name">${deal.name}</h4>
          <p class="deal-items-list">${deal.items}</p>
          <div class="deal-card-footer">
            <div class="deal-price tabular">
              <span style="font-size: 0.8125rem; font-weight: 400; color: var(--text-muted); margin-right: 2px;">Rs</span>${deal.price}
            </div>
            <a 
              href="${createWhatsAppOrderUrl(deal.name, deal.price)}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-deal-order"
            >
              ${ICONS.whatsapp}
              <span>Order Deal</span>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 3. Pizza Deals
  const pizzaContainer = document.getElementById("pizza-deals-grid");
  if (pizzaContainer) {
    pizzaContainer.innerHTML = pizzaDeals.map(deal => `
      <div class="deal-card">
        <div class="deal-card-img-wrap">
          <img 
            src="${deal.image}" 
            alt="${deal.name} RFC Grill" 
            class="deal-card-img" 
            loading="lazy"
            referrerPolicy="no-referrer"
            onerror="this.src='/src/assets/images/special_pizza_dish_1791207282349.jpg';"
          />
          <span class="deal-badge" style="background: rgba(255, 215, 0, 0.9); color: #0A0A0F;">Pizza Combo</span>
        </div>
        <div class="deal-card-body">
          <h4 class="deal-name">${deal.name}</h4>
          <p class="deal-items-list">${deal.items}</p>
          <div class="deal-card-footer">
            <div class="deal-price tabular">
              <span style="font-size: 0.8125rem; font-weight: 400; color: var(--text-muted); margin-right: 2px;">Rs</span>${deal.price}
            </div>
            <a 
              href="${createWhatsAppOrderUrl(deal.name, deal.price)}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-deal-order"
            >
              ${ICONS.whatsapp}
              <span>Order Deal</span>
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !phone || !message) {
      alert("Please fill in your Name, Phone Number, and Message.");
      return;
    }

    // Save message to localStorage
    try {
      const messages = JSON.parse(localStorage.getItem("rfc_messages") || "[]");
      messages.push({ name: name, phone: phone, email: email, message: message, createdAt: new Date().toLocaleString() });
      localStorage.setItem("rfc_messages", JSON.stringify(messages));
    } catch(err) { console.error("Message save failed:", err); }

    const text = `Assalamualaikum RFC Grill, mera naam ${name} hai.\nPhone: ${phone}\nEmail: ${email || 'N/A'}\nMessage: ${message}`;
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  });
}

// Smooth active nav highlighting on scroll
function initNavScroll() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}


// Booking Form Handler
function initBookingForm() {
  const form = document.getElementById("booking-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("booking-name").value.trim();
    const phone = document.getElementById("booking-phone").value.trim();
    const date = document.getElementById("booking-date").value;
    const time = document.getElementById("booking-time").value;
    const persons = document.getElementById("booking-persons").value;
    const notes = document.getElementById("booking-notes").value.trim();

    if (!name || !phone || !date || !time || !persons) {
      alert("Please fill in all required fields (Name, Phone, Date, Time, Persons).");
      return;
    }

    // Save to localStorage for admin panel
    try {
      const bookings = JSON.parse(localStorage.getItem("rfc_bookings") || "[]");
      bookings.push({
        name: name,
        phone: phone,
        date: date,
        time: time,
        persons: persons,
        notes: notes,
        createdAt: new Date().toLocaleString()
      });
      localStorage.setItem("rfc_bookings", JSON.stringify(bookings));
    } catch (err) {
      console.error("Booking save failed:", err);
    }

    const text = `🍽 *TABLE RESERVATION REQUEST*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Date:* ${date}\n` +
      `*Time:* ${time}\n` +
      `*Persons:* ${persons}\n` +
      (notes ? `*Special Request:* ${notes}\n` : '') +
      `\nPlease confirm my reservation. Shukriya!`;

    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  });
}

// Call it when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initBookingForm();
      if (typeof initContactForm === 'function') initContactForm();
    });
  } else {
    setTimeout(() => {
      initBookingForm();
      if (typeof initContactForm === 'function') initContactForm();
    }, 100);
  }
}

// ===== Admin Settings Button =====
(function() {
  if (typeof document === 'undefined') return;
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("admin-settings-btn");
    if (btn && !btn.dataset.hooked) {
      btn.dataset.hooked = "1";
      btn.addEventListener("click", () => {
        window.location.href = "/admin.html";
      });
    }
  });
})();
