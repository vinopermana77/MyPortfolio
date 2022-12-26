$(() => {
  $('.new-card').slice(0, 3).show();
  $('.load-more').click(function (e) {
    e.preventDefault();
    $('.new-card:hidden').slice(0, 4).slideDown();
  });
});

function sendEmail() {
  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceID = 'service_926i60o';
  const templateID = 'template_9jstit8';

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';

      console.log(res);
      alert('Your Message Sent Successfully');
    })
    .catch((err) => console.log(err));
}
