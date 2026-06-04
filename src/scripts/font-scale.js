function applyFontScale(value) {
  document.documentElement.style.fontSize = (value / 100) + 'rem';
}

const saved = localStorage.getItem('font-scale') ?? '100';
applyFontScale(saved);