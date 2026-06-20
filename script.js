/* ============================================================
   Meriç Erler — portfolio interactions
   No dependencies. Progressive enhancement only.
   ============================================================ */

(function () {
  "use strict";

  const root = document.documentElement;

  /* ---- Theme: respect saved choice, else system preference ---- */
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  /* ---- Sticky nav shadow on scroll ---- */
  const nav = document.getElementById("nav");
  const onScroll = function () {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile menu ---- */
  const burger = document.getElementById("navBurger");
  const links = document.querySelector(".nav__links");
  if (burger && links) {
    const closeMenu = function () {
      links.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    };
    burger.addEventListener("click", function () {
      const open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    /* Close on Escape, and on a click/tap outside the menu */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("is-open")) {
        closeMenu();
        burger.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (
        links.classList.contains("is-open") &&
        !links.contains(e.target) &&
        !burger.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  /* ---- Reveal on scroll ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Dashboard placeholder: don't navigate until a real link is set ---- */
  document.querySelectorAll(".dash__cta.is-placeholder").forEach(function (el) {
    el.addEventListener("click", function (e) { e.preventDefault(); });
  });

  /* ---- Footer year ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- A small hello for anyone who opens the console ---- */
  try {
    console.log(
      "%cHi — you opened the console.",
      "font:600 13px/1.5 system-ui;color:#2f6b4f"
    );
    console.log(
      "%cBuilt by hand — plain HTML, CSS and JS, no framework.\n" +
      "If you're hiring an analyst who also ships, say hello: mericerler@gmail.com",
      "color:#6b6b76;line-height:1.6"
    );
  } catch (e) {}
})();
