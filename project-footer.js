(() => {
  if (!document.querySelector('link[href="footer.css"]')) {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'footer.css';
    document.head.append(stylesheet);
  }

  document.body.insertAdjacentHTML('beforeend', `
    <footer id="contact" class="site-footer">
      <section class="footer-note"><small>NOTE FROM HANNAH</small><span class="footer-star" aria-hidden="true">✳</span><p>Hi, thank you for being here &lt;3</p><p>Design, to me, is care and intentionality.</p><p>If something here stayed with you,<br>say <a class="footer-email" href="mailto:hannahaudreyc@gmail.com">hannahaudreyc@gmail.com!</a></p></section>
      <section class="footer-links" aria-label="Contact links"><small>LET'S CONNECT</small><div class="connect-icons"><a class="icon-link" href="https://www.linkedin.com/in/hannahaudrey/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span aria-hidden="true">in</span></a><a class="icon-link footer-email" href="mailto:hannahaudreyc@gmail.com" aria-label="Email Hannah"><span aria-hidden="true">✉</span></a></div></section>
      <p class="footer-credit">2026 · Passionately designed and developed by Hannah + lots of Iced Matcha</p>
    </footer>
  `);
})();
