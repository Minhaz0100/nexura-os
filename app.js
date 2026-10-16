/**
 * NEXURA COMMERCE OS (v3.0) - Interactive Application Logic
 * Founded & Architected by Md Minhazul- Islam
 * Features: Fraud Scanner Simulator, Courier Consignment Generator,
 * ROI Calculator, Dual-Language (Bangla/English) Engine & Live Stream Mock
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLanguageSwitcher();
  initStickyHeader();
  initDashboardTabs();
  initRoiCalculator();
  initFraudSimulator();
  initCourierBookingSimulator();
  initPricingToggle();
  initFaqAccordion();
  initModals();
  initLiveSocialProofToast();
  initMobileMenu();
});

// 1. Theme Toggle (Dark / Light)
function initThemeToggle() {
  const themeBtn = document.getElementById('themeSwitchBtn');
  if (!themeBtn) return;

  const currentTheme = localStorage.getItem('nexura_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(themeBtn, currentTheme);

  themeBtn.addEventListener('click', () => {
    const active = document.documentElement.getAttribute('data-theme');
    const newTheme = active === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('nexura_theme', newTheme);
    updateThemeIcon(themeBtn, newTheme);
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === 'light') {
    btn.innerHTML = '<i class="fa-solid fa-moon"></i> <span>Dark</span>';
  } else {
    btn.innerHTML = '<i class="fa-solid fa-sun"></i> <span>Light</span>';
  }
}

// 2. Language Engine (Bangla & English)
const i18nData = {
  en: {
    announcement: "⚡ Nexura OS 3.0 Live: Automated Pathao & Steadfast Courier API + Meta CAPI Server Tracking Enabled",
    hero_pill: "Founded by Md Minhazul- Islam • The #1 Commerce OS for Bangladesh",
    hero_title: "Build Faster. Eliminate Fake Orders. <span class='text-gradient'>Automate Your Entire Commerce Empire.</span>",
    hero_sub: "From high-converting 0.8s landing pages and Meta Server-Side CAPI to automated courier dispatch (Pathao, Steadfast, RedX) and AI fraud defense — Nexura OS eliminates 90% of manual chaos.",
    cta_trial: "Start 7-Day Free Trial",
    cta_demo: "Explore Live Demo",
    badge_merchants: "5,200+ Active Brands",
    badge_fraud: "99.4% Fake Order Shield",
    badge_speed: "0.8s Ultra-Fast Funnel",
    calc_title: "Calculate Your Monthly Profit Saved",
    calc_orders_label: "Monthly Order Volume",
    calc_return_label: "Current Cancellation / Return Rate",
    calc_savings_title: "Estimated Monthly Savings With Nexura OS",
    calc_savings_sub: "Recovered from courier RTS fees, fake phone numbers, and automated order verification.",
    plan_monthly: "Monthly",
    plan_annual: "Yearly (Save 25%)",
  },
  bn: {
    announcement: "⚡ নেক্সুরা ওএস ৩.০: অটোমেটেড পাঠাও/স্টেডফাস্ট কুরিয়ার এপিআই এবং মেটা সার্ভার ট্র্যাকিং সক্রিয়",
    hero_pill: "প্রতিষ্ঠাতা: মো: মিনহাজুল ইসলাম • বাংলাদেশের শীর্ষস্থানীয় কমার্স অপারেটিং সিস্টেম",
    hero_title: "ওয়েবসাইট বানান সহজে। ফেক অর্ডার রোধ করুন। <span class='text-gradient'>পুরো অনলাইন ব্যবসা এক ড্যাশবোর্ডে অটোমেট করুন।</span>",
    hero_sub: "০.৮ সেকেন্ড গতির সেলস ফানেল, মেটা পিক্সেল ও কনভার্সন এপিআই (CAPI) থেকে শুরু করে পাঠাও-স্টেডফাস্ট অটো বুকিং এবং এআই ফ্রড শিল্ড — নেক্সুরা ওএস বাঁচাবে আপনার সময় ও অযথা লস।",
    cta_trial: "৭ দিনের ফ্রি ট্রায়াল শুরু করুন",
    cta_demo: "লাইভ ডেমো দেখুন",
    badge_merchants: "৫,২০০+ সফল মার্চেন্ট",
    badge_fraud: "৯৯.৪% ফেক অর্ডার প্রতিরোধ",
    badge_speed: "০.৮ সেকেন্ড সুপারফাস্ট স্পিড",
    calc_title: "হিসাব করুন প্রতিমাসে কত টাকা বাঁচবে",
    calc_orders_label: "প্রতি মাসের মোট অর্ডার সংখ্যা",
    calc_return_label: "বর্তমান ক্যানসেল বা রিটার্ন (RTS) হার",
    calc_savings_title: "নেক্সুরা ওএস ব্যবহারে আনুমানিক মাসিক সাশ্রয়",
    calc_savings_sub: "অযথা কুরিয়ার জরিমানা, ফেক কাস্টমার এবং ভুয়া ফোন নাম্বার আটকে নিশ্চিত লাভ।",
    plan_monthly: "মাসিক",
    plan_annual: "বাৎসরিক (২৫% ছাড়)",
  }
};

let currentLang = 'en';

function initLanguageSwitcher() {
  const langBtn = document.getElementById('langSwitchBtn');
  if (!langBtn) return;

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'bn' : 'en';
    langBtn.innerHTML = currentLang === 'en' 
      ? '<i class="fa-solid fa-language"></i> <span>বাংলা</span>' 
      : '<i class="fa-solid fa-language"></i> <span>English</span>';
    
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  const strings = i18nData[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key]) {
      el.innerHTML = strings[key];
    }
  });
}

// 3. Sticky Header
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// 4. Interactive Dashboard Mockup Tabs
function initDashboardTabs() {
  const tabs = document.querySelectorAll('.dash-tab-btn');
  const panelTitle = document.getElementById('dashPanelTitle');
  const tableBody = document.getElementById('dashOrdersTableBody');
  if (!tabs.length || !tableBody) return;

  const tabData = {
    overview: {
      title: "Real-time Verified Orders Stream",
      orders: [
        { id: "#NX-9482", customer: "Rafiqul Islam (Dhaka)", amount: "৳2,450", courier: "Pathao", status: "Verified & Packed", class: "status-verified" },
        { id: "#NX-9481", customer: "Farzana Akter (Chittagong)", amount: "৳1,890", courier: "Steadfast", status: "Consignment Created", class: "status-steadfast" },
        { id: "#NX-9480", customer: "Fake Order (Blocked)", amount: "৳3,600", courier: "None", status: "Fraud Shield Blocked", class: "status-fraud-blocked" },
        { id: "#NX-9479", customer: "Mehedi Hasan (Sylhet)", amount: "৳4,200", courier: "Pathao", status: "Auto Dispatched", class: "status-pathao" },
      ]
    },
    fraud: {
      title: "FraudShield™ AI Real-time Inspection",
      orders: [
        { id: "#NX-9480", customer: "01788-XXXX42 (Mirpur)", amount: "৳3,600", courier: "Blocked", status: "Serial Returner (84% Return History)", class: "status-fraud-blocked" },
        { id: "#NX-9477", customer: "01811-XXXX19 (Comilla)", amount: "৳1,200", courier: "OTP Passed", status: "OTP Verified (Safe)", class: "status-verified" },
        { id: "#NX-9475", customer: "01923-XXXX90 (Gazipur)", amount: "৳5,400", courier: "Blocked", status: "Device Spammer (5 fake orders/10min)", class: "status-fraud-blocked" },
      ]
    },
    courier: {
      title: "1-Click Courier Direct Sync Console",
      orders: [
        { id: "#NX-9482", customer: "Consignment: PT-903841", amount: "৳2,450", courier: "Pathao Express", status: "Rider Picked Up", class: "status-pathao" },
        { id: "#NX-9481", customer: "Consignment: ST-882012", amount: "৳1,890", courier: "Steadfast Hub", status: "Hub In Transit", class: "status-steadfast" },
        { id: "#NX-9479", customer: "Consignment: PT-903838", amount: "৳4,200", courier: "Pathao Express", status: "Out for Delivery", class: "status-verified" },
      ]
    },
    tracking: {
      title: "Pixel Pilot™ Meta CAPI Server-Side Diagnostics",
      orders: [
        { id: "Event: Purchase", customer: "fbp + fbc Verified", amount: "৳2,450", courier: "CAPI Match: 9.6/10", status: "100% Deduplicated", class: "status-verified" },
        { id: "Event: InitiateCheckout", customer: "Client + Server Sync", amount: "৳1,890", courier: "CAPI Match: 9.8/10", status: "Zero iOS14 Drop", class: "status-verified" },
        { id: "Event: ViewContent", customer: "TikTok Pixel Sync", amount: "Page View", courier: "GTM Server Tag", status: "Live 0.1s latency", class: "status-steadfast" },
      ]
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const view = tab.getAttribute('data-view');
      const data = tabData[view] || tabData.overview;

      panelTitle.textContent = data.title;
      renderTableRows(tableBody, data.orders);
    });
  });
}

function renderTableRows(tbody, orders) {
  tbody.innerHTML = orders.map(ord => `
    <tr>
      <td style="font-family: var(--font-mono); font-weight: 700; color: #818CF8;">${ord.id}</td>
      <td><strong>${ord.customer}</strong></td>
      <td style="font-weight: 700;">${ord.amount}</td>
      <td><span class="badge-status ${ord.class}">${ord.status}</span></td>
    </tr>
  `).join('');
}

// 5. Interactive ROI & Fraud Loss Prevention Calculator
function initRoiCalculator() {
  const ordersSlider = document.getElementById('roiOrdersSlider');
  const returnSlider = document.getElementById('roiReturnSlider');
  const ordersVal = document.getElementById('roiOrdersVal');
  const returnVal = document.getElementById('roiReturnVal');
  const savingsNumber = document.getElementById('roiSavingsNumber');
  const rtsLossVal = document.getElementById('roiRtsLossVal');
  const savedOrdersCount = document.getElementById('roiSavedOrdersCount');

  if (!ordersSlider || !returnSlider) return;

  function calculate() {
    const orders = parseInt(ordersSlider.value, 10);
    const returnRate = parseInt(returnSlider.value, 10) / 100;

    ordersVal.textContent = orders.toLocaleString() + " Orders/mo";
    returnVal.textContent = (returnRate * 100).toFixed(0) + "%";

    const currentFailedOrders = Math.round(orders * returnRate);
    const currentLostMoney = currentFailedOrders * 160;

    const preventedFakeOrders = Math.round(currentFailedOrders * 0.68);
    const netSavings = preventedFakeOrders * 160 + (preventedFakeOrders * 120);

    savingsNumber.textContent = "৳" + netSavings.toLocaleString();
    if (rtsLossVal) rtsLossVal.textContent = "৳" + currentLostMoney.toLocaleString();
    if (savedOrdersCount) savedOrdersCount.textContent = preventedFakeOrders.toLocaleString() + " Bad Orders Slashed";
  }

  ordersSlider.addEventListener('input', calculate);
  returnSlider.addEventListener('input', calculate);
  calculate();
}

// 6. Interactive Fraud Scanner Simulator
function initFraudSimulator() {
  const phoneInput = document.getElementById('fraudPhoneInput');
  const scanBtn = document.getElementById('fraudScanBtn');
  const resultCard = document.getElementById('fraudResultCard');
  const chips = document.querySelectorAll('.chip-sample');

  if (!phoneInput || !scanBtn || !resultCard) return;

  const mockDb = {
    "01711000111": {
      status: "SAFE",
      score: "98/100 (Trusted Buyer)",
      class: "risk-safe",
      deliveryRate: "96.4% Delivery Success",
      history: "14 Successful Deliveries across Pathao & Steadfast. 0 Cancellations.",
      icon: "fa-shield-check"
    },
    "01999888777": {
      status: "CRITICAL FRAUD RISK",
      score: "14/100 (Serial Refuser / Fake)",
      class: "risk-danger",
      deliveryRate: "12.5% Delivery Success",
      history: "7 Return-To-Shield (RTS) in last 30 days. Multiple cancelled orders at doorstep.",
      icon: "fa-triangle-exclamation"
    },
    "01812345678": {
      status: "MODERATE RISK",
      score: "65/100 (Unverified Device)",
      class: "risk-safe",
      deliveryRate: "70.0% Delivery Success",
      history: "First-time visitor. Automated SMS OTP Challenge recommended.",
      icon: "fa-circle-question"
    }
  };

  function runScan(number) {
    const cleanNum = number.replace(/\D/g, '');
    scanBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Checking...';

    setTimeout(() => {
      scanBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> Scan Phone Number';
      const data = mockDb[cleanNum] || {
        status: "SAFE (Verified Customer)",
        score: "94/100",
        class: "risk-safe",
        deliveryRate: "92% Delivery Success Rate",
        history: "No fraud records detected in Bangladesh Courier Network (Steadfast, Pathao, RedX).",
        icon: "fa-circle-check"
      };

      resultCard.innerHTML = `
        <div class="risk-meter ${data.class}">
          <div>
            <span style="font-size: 11px; font-weight: 800; text-transform: uppercase;">FraudShield™ Assessment</span>
            <h4 style="font-size: 18px; font-weight: 900; margin-top: 4px;">${data.status}</h4>
          </div>
          <div style="font-size: 22px; font-weight: 900; font-family: var(--font-mono);">${data.score}</div>
        </div>
        <p style="font-size: 13.5px; margin-bottom: 12px; color: var(--text-main);"><strong>Delivery History:</strong> ${data.deliveryRate}</p>
        <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6;">${data.history}</p>
      `;
    }, 400);
  }

  scanBtn.addEventListener('click', () => {
    if (phoneInput.value.trim().length >= 10) {
      runScan(phoneInput.value.trim());
    } else {
      alert("Please enter a valid 11-digit mobile number.");
    }
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const num = chip.getAttribute('data-phone');
      phoneInput.value = num;
      runScan(num);
    });
  });
}

// 7. Interactive Courier Booking Simulator
function initCourierBookingSimulator() {
  const bookBtn = document.getElementById('simCourierBookBtn');
  const resultBox = document.getElementById('simCourierResultBox');
  if (!bookBtn || !resultBox) return;

  bookBtn.addEventListener('click', () => {
    const courierSelect = document.getElementById('simCourierSelect').value;
    const recipient = document.getElementById('simRecipientName').value || "Nazmul Karim";
    const phone = document.getElementById('simRecipientPhone').value || "01722-998811";
    const amount = document.getElementById('simOrderAmount').value || "৳2,450";

    bookBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Communicating with Courier API...';

    setTimeout(() => {
      const randomConsignment = (courierSelect === 'pathao' ? 'NX-PT-' : 'NX-ST-') + Math.floor(100000 + Math.random() * 900000);
      bookBtn.innerHTML = '<i class="fa-solid fa-check"></i> Booked Successfully!';
      bookBtn.classList.add('btn-emerald');

      resultBox.style.display = 'block';
      resultBox.innerHTML = `
        <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.4); border-radius: var(--radius-md); padding: 18px; margin-top: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="font-size: 12px; font-weight: 800; color: var(--emerald); text-transform: uppercase;">
              <i class="fa-solid fa-circle-check"></i> API Success: Consignment Generated
            </span>
            <span style="font-family: var(--font-mono); font-weight: 800; color: #FFF; font-size: 15px;">${randomConsignment}</span>
          </div>
          <p style="font-size: 13.5px; color: var(--text-main); margin-bottom: 6px;">
            Courier: <strong>${courierSelect.toUpperCase()} Express</strong> | Recipient: <strong>${recipient} (${phone})</strong>
          </p>
          <p style="font-size: 12.5px; color: var(--text-secondary);">
            COD Amount: <strong>${amount}</strong> | Auto-Slip Ready for Thermal Barcode Printer
          </p>
          <div style="margin-top: 12px; display: flex; gap: 8px;">
            <button class="btn-secondary" style="padding: 6px 14px; font-size: 12px;" onclick="alert('Printing 4x6 Thermal Barcode Shipping Slip...')">
              <i class="fa-solid fa-print"></i> Print POS Slip
            </button>
            <button class="btn-secondary" style="padding: 6px 14px; font-size: 12px;" onclick="alert('Tracking SMS sent to customer!')">
              <i class="fa-solid fa-comment-sms"></i> Send SMS Tracking
            </button>
          </div>
        </div>
      `;

      setTimeout(() => {
        bookBtn.innerHTML = '<i class="fa-solid fa-truck-fast"></i> 1-Click Auto Dispatch';
        bookBtn.classList.remove('btn-emerald');
      }, 4000);
    }, 600);
  });
}

// 8. Pricing Toggle (Monthly / Annual)
function initPricingToggle() {
  const switchBtns = document.querySelectorAll('.switch-btn');
  const priceElements = document.querySelectorAll('.plan-price');
  if (!switchBtns.length) return;

  const pricingValues = {
    monthly: ["৳0", "৳1,490", "৳2,990", "৳5,990"],
    annual: ["৳0", "৳1,110", "৳2,240", "৳4,490"]
  };

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const billing = btn.getAttribute('data-billing');
      const prices = pricingValues[billing];

      priceElements.forEach((el, index) => {
        if (prices[index]) {
          el.textContent = prices[index];
        }
      });
    });
  });
}

// 9. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// 10. Modals (Trial Signup & Video Demo)
function initModals() {
  const modalOverlay = document.getElementById('signupModal');
  const openBtns = document.querySelectorAll('.trigger-signup-modal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (!modalOverlay) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });

  const trialForm = document.getElementById('trialSignupForm');
  if (trialForm) {
    trialForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = document.getElementById('modalPhoneInput').value;
      const step1 = document.getElementById('modalStep1');
      const step2 = document.getElementById('modalStep2');

      step1.style.display = 'none';
      step2.style.display = 'block';
      document.getElementById('otpPhoneDisplay').textContent = phone;
    });
  }
}

// 11. Social Proof Live Notification Toaster
function initLiveSocialProofToast() {
  const toast = document.getElementById('liveToast');
  if (!toast) return;

  const mockPurchases = [
    { city: "Dhanmondi, Dhaka", item: "Smart Wireless Earbuds", amount: "৳2,450", courier: "Pathao Auto-Booked" },
    { city: "Agrabad, Chittagong", item: "Premium Linen Panjabi", amount: "৳3,800", courier: "Steadfast Verified" },
    { city: "Uttara, Dhaka", item: "Organic Saffron Serum", amount: "৳1,890", courier: "FraudShield Passed" },
    { city: "Zindabazar, Sylhet", item: "Mechanical Gaming Keyboard", amount: "৳4,200", courier: "Auto-Invoice Printed" },
    { city: "Rajshahi Sadar", item: "Leather Crossbody Bag", amount: "৳2,950", courier: "CAPI Deduplicated" }
  ];

  let index = 0;

  function showNextToast() {
    const item = mockPurchases[index % mockPurchases.length];
    index++;

    toast.innerHTML = `
      <div class="toast-dot"></div>
      <div>
        <div style="font-weight: 800; color: #FFF; font-size: 13px;">New Order in ${item.city}</div>
        <div style="color: var(--text-secondary); font-size: 12px;">${item.item} (${item.amount}) • <span style="color: var(--emerald); font-weight: 700;">${item.courier}</span></div>
      </div>
    `;

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  setTimeout(showNextToast, 4000);
  setInterval(showNextToast, 12000);
}

// 12. Mobile Menu Drawer
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('closeMobileDrawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.add('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('active');
    });
  }
}
