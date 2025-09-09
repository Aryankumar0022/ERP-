function toggleTheme(){
  const body = document.body;
  const button = document.querySelector('.theme-toggle');
  
  if(body.getAttribute('data-theme') === 'dark'){
    body.removeAttribute('data-theme');
    button.textContent = '🌙 Dark Mode';
  } else {
    body.setAttribute('data-theme','dark');
    button.textContent = '☀️ Light Mode';
  }
}
