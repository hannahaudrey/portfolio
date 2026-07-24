document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.querySelector(".image-lightbox");
  const lightboxImage = lightbox?.querySelector("img");
  const closeLightbox = lightbox?.querySelector(".lightbox-close");
  let lastImageTrigger;

  const closePreview = () => {
    if (!lightbox) return;
    lightbox.hidden = true;
    lastImageTrigger?.focus();
  };

  document.querySelectorAll(".project-image").forEach((image) => {
    image.addEventListener("click", () => {
      lastImageTrigger = image;
      lightboxImage.src = image.dataset.previewFull;
      lightboxImage.alt = image.dataset.previewAlt;
      lightbox.hidden = false;
      closeLightbox.focus();
    });
  });
  closeLightbox?.addEventListener("click", closePreview);
  lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) closePreview(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !lightbox?.hidden) closePreview(); });

  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  const media = gsap.matchMedia();
  media.add("(prefers-reduced-motion: no-preference)", () => {
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from(".sidebar", { autoAlpha: 0, x: -16, duration: 0.55 })
      .from(".about-hero", { autoAlpha: 0, y: 22, duration: 0.7 }, "-=0.22")
      .from(".about-intro", { autoAlpha: 0, y: 16, duration: 0.55 }, "-=0.38");

    gsap.utils.toArray("main > section:not(.about-intro)").forEach((section) => {
      gsap.from(section, {
        autoAlpha: 0,
        y: 26,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
          toggleActions: "play none none reverse"
        }
      });
    });

    gsap.utils.toArray(".image-placeholder, .project-image").forEach((image) => {
      image.addEventListener("pointerenter", () => {
        gsap.to(image, { y: -4, scale: 1.02, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      });
      image.addEventListener("pointerleave", () => {
        gsap.to(image, { y: 0, scale: 1, duration: 0.35, ease: "power2.out", overwrite: "auto" });
      });
    });
  });
});
