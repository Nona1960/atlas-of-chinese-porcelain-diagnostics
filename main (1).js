/**
 * ATLAS OF DIAGNOSTIC FEATURES — CHINESE CERAMICS & PORCELAIN
 * main.js — Stage 3 Homepage Implementation
 * Minimal vanilla JS. No frameworks. No libraries.
 */

(function () {
  'use strict';

  /* ── Mobile navigation toggle ──────────────────────────── */
  const toggle = document.querySelector('.nav-toggle');
  const navItems = document.querySelector('.nav-bar__items');

  if (toggle && navItems) {
    toggle.addEventListener('click', function () {
      const isOpen = navItems.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.querySelectorAll('span').forEach(function (bar, i) {
        bar.style.opacity = isOpen && i === 1 ? '0' : '1';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !navItems.contains(e.target)) {
        navItems.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelectorAll('span').forEach(function (bar) {
          bar.style.opacity = '1';
        });
      }
    });
  }

  /* ── Search placeholder ────────────────────────────────── */
  const searchField = document.querySelector('.nav-search-field');
  const searchBtn   = document.querySelector('.nav-search-btn');

  if (searchField && searchBtn) {
    searchBtn.addEventListener('click', function () {
      const q = searchField.value.trim();
      if (q.length > 0) {
        // Placeholder — search page not yet implemented (Stage 6)
        alert('Search will be available in Stage 6.\nQuery: "' + q + '"');
      } else {
        searchField.focus();
      }
    });

    searchField.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        searchBtn.click();
      }
    });
  }

  /* ── Passive scroll: nav border visibility ─────────────── */
  const navBar = document.querySelector('.nav-bar');
  if (navBar) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      if (y > 4) {
        navBar.style.boxShadow = '0 1px 0 0 #ccc4b4';
      } else {
        navBar.style.boxShadow = 'none';
      }
      lastScroll = y;
    }, { passive: true });
  }

})();
