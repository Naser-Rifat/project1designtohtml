  // JavaScript to toggle mobile menu visibility
  // JavaScript to toggle mobile menu visibility
  document.getElementById('menu-btn').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});