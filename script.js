document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let mailtoLink =
        "mailto:kyawlinhtet004@gmail.com" +
        "?subject=Portfolio Contact from " + encodeURIComponent(name) +
        "&body=Email: " + encodeURIComponent(email) + "%0D%0A%0D%0A" + encodeURIComponent(message);

    window.location.href = mailtoLink;
});
