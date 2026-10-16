function loginBerhasil(){
    let pilihan = confirm("Apakah kamu yakin ingin login?");
    if (pilihan === true) {
        alert('Berhasil login!');
        window.location.href=`form.html`;
    } else {
        // Jika pengguna menekan tombol "Cancel" (false)
        alert('Login dibatalkan.');
    }
}