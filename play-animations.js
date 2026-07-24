document.addEventListener("DOMContentLoaded", () => {
  if (!window.gsap) return;

  const media = gsap.matchMedia();
  media.add("(prefers-reduced-motion: no-preference)", () => {
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from(".sidebar", { autoAlpha: 0, x: -16, duration: 0.55 })
      .from(".eyebrow", { autoAlpha: 0, y: 14, duration: 0.45 }, "-=0.25")
      .from("h1", { autoAlpha: 0, y: 34, duration: 0.75 }, "-=0.18")
      .from(".play-hero > p, .scroll-cue", { autoAlpha: 0, y: 16, duration: 0.45, stagger: 0.1 }, "-=0.35");

    gsap.set(".word", { transformOrigin: "50% 50%" });
    gsap.to(".word-design .word-mark", { rotation: 14, y: -5, duration: 1.15, ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.to(".word-collaborate .word-mark", { rotation: 360, duration: 4.5, ease: "none", repeat: -1 });
    gsap.to(".word-build .word-mark", { rotation: 360, duration: 7, ease: "none", repeat: -1 });

    gsap.utils.toArray(".word").forEach((word) => {
      word.addEventListener("pointerenter", () => gsap.to(word, { y: -9, rotation: gsap.utils.random(-3, 3), scale: 1.04, duration: 0.3, ease: "back.out(2)", overwrite: "auto" }));
      word.addEventListener("pointerleave", () => gsap.to(word, { y: 0, rotation: 0, scale: 1, duration: 0.45, ease: "power3.out", overwrite: "auto" }));
    });
  });
});
