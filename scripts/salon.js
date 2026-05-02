const salon = {
    name: "Tranquility Paws Pet Salon",
    hours: { open: "9:00 AM", close: "6:00 PM" },
    phone: "111-555-1234",
    address: { street: "123 Main Street", city: "San Diego", state: "CA", zip: "1234" }
};

function displaySalonInfo() {
    // Injecting the translation spans directly into the HTML string
    const infoText = `
        <span class="lang-en">Welcome to <strong>${salon.name}</strong>! We are located at <strong>${salon.address.street}, ${salon.address.city}, ${salon.address.state} ${salon.address.zip}</strong>. Our hours of operation are from <strong>${salon.hours.open}</strong> to <strong>${salon.hours.close}</strong>. You can contact us at <strong>${salon.phone}</strong>.</span>
        <span class="lang-es">¡Bienvenido a <strong>${salon.name}</strong>! Estamos ubicados en <strong>${salon.address.street}, ${salon.address.city}, ${salon.address.state} ${salon.address.zip}</strong>. Nuestro horario de atención es de <strong>${salon.hours.open}</strong> a <strong>${salon.hours.close}</strong>. Puede contactarnos al <strong>${salon.phone}</strong>.</span>
    `;

    $("#salon-info-container").html(`<p>${infoText}</p>`);
}

displaySalonInfo();