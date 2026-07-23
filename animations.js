document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const media = gsap.matchMedia();

  media.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.set(".hero-star", { display: "inline-block", transformOrigin: "50% 50%" });

    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from(".sidebar", { autoAlpha: 0, x: -16, duration: 0.55 })
      .from(".intro h1", { autoAlpha: 0, y: 24, duration: 0.7 }, "-=0.22")
      .from(".intro p", { autoAlpha: 0, y: 14, duration: 0.45, stagger: 0.1 }, "-=0.42")
      .from(".project", { autoAlpha: 0, y: 28, duration: 0.6, stagger: 0.12 }, "-=0.2");

    gsap.to(".hero-star", { rotation: 360, duration: 9, ease: "none", repeat: -1 });

    gsap.utils.toArray(".project").forEach((card) => {
      const artwork = card.querySelector(".art");

      card.addEventListener("pointerenter", () => {
        gsap.to(card, { y: -6, duration: 0.35, ease: "power3.out", overwrite: "auto" });
        gsap.to(artwork, { scale: 1.018, duration: 0.45, ease: "power2.out", overwrite: "auto" });
      });

      card.addEventListener("pointerleave", () => {
        gsap.to(card, { y: 0, duration: 0.45, ease: "power3.out", overwrite: "auto" });
        gsap.to(artwork, { scale: 1, duration: 0.45, ease: "power2.out", overwrite: "auto" });
      });
    });

    const footerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".site-footer",
        start: "top 78%",
        toggleActions: "play none none reverse"
      }
    });

    footerTimeline
      .from(".footer-note", { autoAlpha: 0, x: -34, rotation: -7, duration: 0.7, ease: "power3.out" })
      .from(".footer-links", { autoAlpha: 0, x: 26, duration: 0.55, ease: "power3.out" }, "-=0.45")
      .from(".footer-credit", { autoAlpha: 0, y: 12, duration: 0.45, ease: "power2.out" }, "-=0.18");

    gsap.set(".footer-star", { transformOrigin: "50% 50%" });
    gsap.to(".footer-star", { rotation: 360, duration: 8, ease: "none", repeat: -1 });

    gsap.utils.toArray(".footer-email, .icon-link").forEach((link) => {
      link.addEventListener("pointerenter", () => gsap.to(link, { y: -3, scale: 1.05, duration: 0.25, ease: "power2.out", overwrite: "auto" }));
      link.addEventListener("pointerleave", () => gsap.to(link, { y: 0, scale: 1, duration: 0.35, ease: "power2.out", overwrite: "auto" }));
    });

  });
});
