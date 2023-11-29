$(document).on('click', '.send', function() {
    /* Form Input */
    var input_name = $("#name").val(),
        input_phone = $("#phone").val(),
        input_pembayaran = $("#pembayaran").val(),
        input_ukuran = $("#ukuran").val(),
        input_description = $("#description").val();

    /* Whatsapp Setting */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6285710786069',
        text = 'Hi admin Saya Ambil Promo Jas Hujannya. Berikut data ordernya',
        text_yes = 'Your order was successfully sent.',
        text_no = 'Anda belum mengisi semua data formulir, Silahkan di isi dengan lengkap';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        walink = 'whatsapp://send';
    }

    // Validation: Check if input_phone contains only numbers
    if (!/^\d+$/.test(input_phone)) {
        var errorMessage = '<div class="alert alert-danger">Invalid phone number format</div>';
        document.getElementById("text-info").innerHTML = errorMessage;
        return; // Stop further execution
    }

    if (input_name !== "" && input_phone !== "" && input_pembayaran !== "" && input_ukuran !== "" && input_description !== "") {
        /* Whatsapp URL */
        var checkout_whatsapp = `${walink}?phone=${phone}&text=${encodeURIComponent(text)}%0A%0A` +
            `*Nama Lengkap Penerima* : ${encodeURIComponent(input_name)}%0A` +
            `*No. Whatsapp* : ${encodeURIComponent(input_phone)}%0A` +
            `*Alamat Lengkap* : ${encodeURIComponent(input_description)}%0A` +
            `*Ukuran* : ${encodeURIComponent(input_ukuran)}%0A` +
            `*Pembayaran* : ${encodeURIComponent(input_pembayaran)}%0A`;

        /* Open Whatsapp link directly */
        window.location.href = checkout_whatsapp;

        var successMessage = `<div class="alert alert-success">${text_yes}</div>`;
        document.getElementById("text-info").innerHTML = successMessage;
    } else {
        var errorMessage = `<div class="alert alert-danger">${text_no}</div>`;
        document.getElementById("text-info").innerHTML = errorMessage;
    }
});
