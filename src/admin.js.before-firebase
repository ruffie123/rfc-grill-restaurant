import { menuItems } from './data.js';

const ADMIN_PASSWORD = "rfcadmin2026";
const STORAGE_KEY = "rfc_admin_auth";
const BOOKINGS_KEY = "rfc_bookings";
const MESSAGES_KEY = "rfc_messages";
const SETTINGS_KEY = "rfc_settings";

// ===== LOGIN =====
const loginScreen = document.getElementById("login-screen");
const dashboard = document.getElementById("admin-dashboard");
const loginForm = document.getElementById("admin-login-form");
const loginError = document.getElementById("login-error");

function checkAuth() {
  if (localStorage.getItem(STORAGE_KEY) === "true") {
    loginScreen.style.display = "none";
    dashboard.style.display = "block";
    initDashboard();
  }
}

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const pwd = document.getElementById("admin-password").value;
    if (pwd === ADMIN_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      loginScreen.style.display = "none";
      dashboard.style.display = "block";
      initDashboard();
      loginError.textContent = "";
    } else {
      loginError.textContent = "❌ Wrong password. Try again.";
    }
  });
}

document.getElementById("admin-logout")?.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
});

// ===== DASHBOARD =====
let allItems = [...menuItems];

function initDashboard() {
  updateStats();
  renderMenuList(allItems);
  renderBookings();
  renderMessages();
  loadSettings();
  initTabs();
  initSearch();
  initClearButtons();
  initSettingsSave();
}

function updateStats() {
  document.getElementById("stat-items").textContent = allItems.length;
  const cats = new Set(allItems.map(i => i.category));
  document.getElementById("stat-categories").textContent = cats.size;
  document.getElementById("stat-bookings").textContent = getBookings().length;
  document.getElementById("stat-messages").textContent = getMessages().length;
}

// ===== TABS =====
function initTabs() {
  document.querySelectorAll(".admin-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".admin-tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById("tab-" + tab.dataset.tab)?.classList.add("active");
    });
  });
}

// ===== MENU =====
function renderMenuList(items) {
  const list = document.getElementById("admin-menu-list");
  if (!list) return;
  if (items.length === 0) {
    list.innerHTML = '<p class="admin-empty">No items found.</p>';
    return;
  }
  list.innerHTML = items.slice(0, 100).map(item => `
    <div class="admin-menu-item">
      <img src="${item.image}" alt="${item.name}" class="admin-menu-img" onerror="this.style.display='none'" />
      <div class="admin-menu-info">
        <div class="admin-menu-name">${item.name}</div>
        <div class="admin-menu-cat">${item.category}</div>
      </div>
      <div class="admin-menu-price">Rs ${item.price || '-'}</div>
      <button class="admin-btn-delete" data-name="${item.name}">×</button>
    </div>
  `).join('');

  list.querySelectorAll(".admin-btn-delete").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      if (confirm(`Delete "${name}"?`)) {
        allItems = allItems.filter(i => i.name !== name);
        renderMenuList(allItems);
        updateStats();
        saveMenuToStorage();
      }
    });
  });
}

function saveMenuToStorage() {
  localStorage.setItem("rfc_menu_modified", JSON.stringify(allItems));
}

function initSearch() {
  const s = document.getElementById("menu-search-admin");
  if (!s) return;
  s.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    const filtered = q ? allItems.filter(i => i.name.toLowerCase().includes(q) || i.category.toLowerCase().includes(q)) : allItems;
    renderMenuList(filtered);
  });
}

// ===== BOOKINGS =====
function getBookings() {
  try { return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]"); } catch { return []; }
}

function renderBookings() {
  const list = document.getElementById("admin-bookings-list");
  if (!list) return;
  const bookings = getBookings();
  if (bookings.length === 0) {
    list.innerHTML = '<p class="admin-empty">No bookings yet.</p>';
    return;
  }
  list.innerHTML = bookings.reverse().map(b => `
    <div class="admin-list-item">
      <div class="admin-list-row"><strong>${b.name}</strong> <span class="admin-badge">${b.persons} ppl</span></div>
      <div class="admin-list-row">📞 ${b.phone}</div>
      <div class="admin-list-row">📅 ${b.date} at ${b.time}</div>
      ${b.notes ? '<div class="admin-list-row">📝 ' + b.notes + '</div>' : ''}
      <div class="admin-list-date">${b.createdAt}</div>
    </div>
  `).join('');
}

// ===== MESSAGES =====
function getMessages() {
  try { return JSON.parse(localStorage.getItem(MESSAGES_KEY) || "[]"); } catch { return []; }
}

function renderMessages() {
  const list = document.getElementById("admin-messages-list");
  if (!list) return;
  const msgs = getMessages();
  if (msgs.length === 0) {
    list.innerHTML = '<p class="admin-empty">No messages yet.</p>';
    return;
  }
  list.innerHTML = msgs.reverse().map(m => `
    <div class="admin-list-item">
      <div class="admin-list-row"><strong>${m.name}</strong></div>
      <div class="admin-list-row">📞 ${m.phone}</div>
      ${m.email ? '<div class="admin-list-row">✉️ ' + m.email + '</div>' : ''}
      <div class="admin-list-row">💬 ${m.message}</div>
      <div class="admin-list-date">${m.createdAt}</div>
    </div>
  `).join('');
}

// ===== CLEAR =====
function initClearButtons() {
  document.getElementById("clear-bookings")?.addEventListener("click", () => {
    if (confirm("Clear all bookings?")) {
      localStorage.setItem(BOOKINGS_KEY, "[]");
      renderBookings();
      updateStats();
    }
  });
  document.getElementById("clear-messages")?.addEventListener("click", () => {
    if (confirm("Clear all messages?")) {
      localStorage.setItem(MESSAGES_KEY, "[]");
      renderMessages();
      updateStats();
    }
  });
}

// ===== SETTINGS =====
function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
    document.getElementById("setting-phone").value = s.phone || "923247104014";
    document.getElementById("setting-name").value = s.name || "RFC Grill Restaurant";
    document.getElementById("setting-hours").value = s.hours || "12:00 PM - 03:00 AM";
    document.getElementById("setting-address").value = s.address || "Gamtala Chowk, Shakargarh";
  } catch {}
}

function initSettingsSave() {
  document.getElementById("save-settings")?.addEventListener("click", () => {
    const settings = {
      phone: document.getElementById("setting-phone").value,
      name: document.getElementById("setting-name").value,
      hours: document.getElementById("setting-hours").value,
      address: document.getElementById("setting-address").value,
    };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    const status = document.getElementById("settings-status");
    status.textContent = "✓ Settings saved!";
    setTimeout(() => { status.textContent = ""; }, 3000);
  });
}

// ===== INIT =====
checkAuth();
