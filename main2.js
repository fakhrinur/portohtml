function berhasilSimpan(){
    let pilihan = confirm("Apakah kamu yakin ingin simpan?");
    if (pilihan === true) {
        alert('Berhasil disimpan!');
        window.location.href=`form.html`;
    } else {
        // Jika pengguna menekan tombol "Cancel" (false)
        alert('simpan dibatalkan.');
    }
}