
// Firebase helpers (loaded via CDN in admin.html)
const fb = () => window.firebaseFns;
const getDB = () => window.firebaseDB;
const getAuth = () => window.firebaseAuth;


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
  // handled by onAuthStateChanged
}

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = "rfcadmin@gmail.com";
    const pwd = document.getElementById("admin-password").value;
    try {
      await fb().signInWithEmailAndPassword(getAuth(), email, pwd);
      loginError.textContent = "";
    } catch (err) {
      loginError.textContent = "Wrong password. Try again.";
      console.error(err);
    }
  });
}

// Auth state listener
fb().onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    if (loginScreen) loginScreen.style.display = "none";
    if (dashboard) dashboard.style.display = "block";
    initDashboard();
  } else {
    if (loginScreen) loginScreen.style.display = "flex";
    if (dashboard) dashboard.style.display = "none";
  }
});

document.getElementById("admin-logout")?.addEventListener("click", async () => {
  try {
    await fb().signOut(getAuth());
    location.reload();
  } catch(err) {
    console.error(err);
  }
});

// ===== DASHBOARD =====
let allItems = [...menuItems];

async function initDashboard() {
  await updateStats();
  renderMenuList(allItems);
  await renderBookings();
  await renderMessages();
  loadSettings();
  initTabs();
  initSearch();
  initClearButtons();
  initSettingsSave();
}

async function updateStats() {
  document.getElementById("stat-items").textContent = allItems.length;
  const cats = new Set(allItems.map(i => i.category));
  document.getElementById("stat-categories").textContent = cats.size;
  try {
    const bookings = await getBookings();
    document.getElementById("stat-bookings").textContent = bookings.length;
    const messages = await getMessages();
    document.getElementById("stat-messages").textContent = messages.length;
  } catch(err) {
    console.error("Stats update failed:", err);
  }
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
async function getBookings() {
  try {
    const q = fb().query(fb().collection(getDB(), "bookings"), fb().orderBy("createdAt", "desc"));
    const snap = await fb().getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch(err) {
    console.error("Firestore read failed:", err);
    return [];
  }
}

async function renderBookings() {
  const list = document.getElementById("admin-bookings-list");
  if (!list) return;
  const bookings = await getBookings();
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
async function getMessages() {
  try {
    const q = fb().query(fb().collection(getDB(), "messages"), fb().orderBy("createdAt", "desc"));
    const snap = await fb().getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch(err) {
    console.error("Firestore read failed:", err);
    return [];
  }
}

async function renderMessages() {
  const list = document.getElementById("admin-messages-list");
  if (!list) return;
  const msgs = await getMessages();
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
  document.getElementById("clear-bookings")?.addEventListener("click", async () => {
    if (confirm("Clear all bookings?")) {
      try {
        const { collection, getDocs, deleteDoc, doc } = window.firebaseFns;
        const snap = await getDocs(collection(getDB(), "bookings"));
        let count = 0;
        for (const d of snap.docs) {
          await deleteDoc(doc(getDB(), "bookings", d.id));
          count++;
        }
        console.log("Deleted " + count + " bookings");
        localStorage.setItem(BOOKINGS_KEY, "[]");
        await renderBookings();
        await updateStats();
      } catch(err) {
        console.error("Delete failed:", err);
        alert("Delete failed: " + err.message);
      }
    }
  });
  
  document.getElementById("clear-messages")?.addEventListener("click", async () => {
    if (confirm("Clear all messages?")) {
      try {
        const { collection, getDocs, deleteDoc, doc } = window.firebaseFns;
        const snap = await getDocs(collection(getDB(), "messages"));
        let count = 0;
        for (const d of snap.docs) {
          await deleteDoc(doc(getDB(), "messages", d.id));
          count++;
        }
        console.log("Deleted " + count + " messages");
        localStorage.setItem(MESSAGES_KEY, "[]");
        await renderMessages();
        await updateStats();
      } catch(err) {
        console.error("Delete failed:", err);
        alert("Delete failed: " + err.message);
      }
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
  document.getElementById("save-settings")?.addEventListener("click", async () => {
    const settings = {
      phone: document.getElementById("setting-phone").value,
      name: document.getElementById("setting-name").value,
      hours: document.getElementById("setting-hours").value,
      address: document.getElementById("setting-address").value,
    };
    const status = document.getElementById("settings-status");
    try {
      const { doc, setDoc } = window.firebaseFns;
      await setDoc(doc(getDB(), "settings", "main"), settings);
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      status.textContent = "✓ Settings saved! (Live on website)";
      status.style.color = "#4ade80";
      setTimeout(() => { status.textContent = ""; }, 4000);
    } catch(err) {
      console.error("Settings save failed:", err);
      status.textContent = "❌ Save failed: " + err.message;
      status.style.color = "#ff4444";
    }
  });
}

// ===== INIT =====
checkAuth();
