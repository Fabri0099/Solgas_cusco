// Función para manejar la búsqueda
const searchInput = document.querySelector('input[type="search"]');

searchInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    alert(`Buscando: ${searchInput.value}`);
  }
});

// Botones de contacto
const btnCall = document.querySelector('.contact-call');
const btnWpp = document.querySelector('.contact-wpp');

btnCall.addEventListener('click', () => {
  window.location.href = 'tel:+0116133333'; // Número de teléfono
});

btnWpp.addEventListener('click', () => {
  const phone = '51999999999'; // Cambia por tu número WhatsApp con código país sin + ni espacios
  const url = `https://wa.me/${phone}`;
  window.open(url, '_blank');
});

// Botón menú hamburguesa
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Botón Central de pedidos WhatsApp
const btnPedido = document.getElementById('btn-pedido');

btnPedido.addEventListener('click', () => {
  const url = 'https://api.whatsapp.com/send?phone=51922662994&text=Enlace%3A%0Ahttps%3A%2F%2Ffb.me%2F3akRW2n58%0A%0A¡Hola%21+Podrías+darme+más+información+de...&source_url=https%3A%2F%2Ffb.me%2F3akRW2n58&icebreaker=¡Hola%21+Podrías+darme+más+información+de...&app=facebook&entry_point=post_cta&jid=51922662994%40s.whatsapp.net&lid=41816019734744%40lid&show_ad_attribution=1&source=FB_Post&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3NDc4OTIwODAsInBob25lIjoiNTE5MjI2NjI5OTQiLCJ0ZXh0IjoiRW5sYWNlOlxuaHR0cHM6XC9cL2ZiLm1lXC8zYWtSVzJuNThcblxuXHUwMGExSG9sYSEgUG9kclx1MDBlZGFzIGRhcm1lIG1cdTAwZTFzIGluZm9ybWFjaVx1MDBmM24gZGUuLi4iLCJzb3VyY2VfdXJsIjoiaHR0cHM6XC9cL2ZiLm1lXC8zYWtSVzJuNTgiLCJpY2VicmVha2VyIjoiXHUwMGExSG9sYSEgUG9kclx1MDBlZGFzIGRhcm1lIG1cdTAwZTFzIGluZm9ybWFjaVx1MDBmM24gZGUuLi4iLCJhcHAiOiJmYWNlYm9vayIsImVudHJ5X3BvaW50IjoicG9zdF9jdGEiLCJqaWQiOiI1MTkyMjY2Mjk5NFx1MDA0MHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDE4MTYwMTk3MzQ3NDRcdTAwNDBsaWQiLCJzaG93X2FkX2F0dHJpYnV0aW9uIjoxLCJzb3VyY2UiOiJGQl9Qb3N0Iiwic291cmNlX2lkIjoiMTIyMDk5MzkzOTYwMDk4MjQ2IiwiY29udGV4dCI6IkFmZWEyQXppTXdMN0pWbkNkQjZVMDFiNlRFajdrT09EZnVHQkVDOWExU0tnbndRbFJJQTZiNEpFSm52TjJmel9IYWpNVDZVTWJDejUtaEdWZl81NkhGYWVuRWMyMkRuLS13V2UzZ01ZNERjZW9aZ2huZ19rWTFkZ1BjYmZqblZ2U041bjlodnZESm9IMmkydGd3MjhheVJfZ3ZJN3ZoYy16R2tZNTF4bFZQejdqNkc1N2VOWEVGVnNBaHh4OWtjUXJrdjhadUdrMFVoMU9kdk9NdmRicnI0QlpnVG9tdXRIVEh0VkdxdllSbjdpdEtVakVxd3pLNW11MHNmdnJhaTMwVFQtR1hTZUlaUGQtSHZpU2VXajZONmJoX1YtbEdwSloxTnE1M3hjTXNuQ3hHUlVDUk1lazJubVV2Tnh1OVdQRzVqcVlsQk5wbHg2dHRDSlQ5Ym5TREhGdnlWYTVLeVplWXBwd3J3eWhyOWNxVVdENzFZMy1raDZ6MkZadlpMeUdNU3c2bE43MERuUnN3In0.PKQAcHWv6HSbFpILnTpX2v9R6XRvw29c831d5PPzJXoDmYehh6BgZnp5upmbYk_Bq0043769_p4EFq6oJ1gKmg&fbclid=IwY2xjawKaRU1leHRuA2FlbQIxMABicmlkETFwNXFkdUhHWTJ0M3NDdkhJAR6m8L1ijjS0szq07Ky8S3baDa50mFxaFkWHYyUCY2ET-MKXayj_vqOj5T4AOw_aem_H7PN1qCBPytgf0fQ1QA6xQ';
  window.open(url, '_blank');
});


