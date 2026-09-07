function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone') ? document.getElementById('phone').value : '';
  const message = document.getElementById('message').value;
  const statusEl = document.getElementById('form-status');

  // Direct client-side mailto / sms trigger fallback or webhook
  const bodyText = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
  
  statusEl.innerHTML = `<span style="color: #27ae60; font-weight: 600;">Opening your email client... Or text us directly at 949-386-3031!</span>`;
  
  setTimeout(() => {
    window.location.href = `mailto:busybeecleansoc@gmail.com?subject=Busy%20Bee%20Cleaning%20Inquiry%20from%20${encodeURIComponent(name)}&body=${bodyText}`;
  }, 400);
}
