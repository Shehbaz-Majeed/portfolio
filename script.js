(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const menuPanel = document.querySelector('[data-menu-panel]');

  if (menuButton && menuPanel) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuPanel.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-is-open', !isOpen);
    });

    menuPanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuPanel.classList.remove('is-open');
        document.body.classList.remove('menu-is-open');
      });
    });
  }

})();
