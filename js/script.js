// event pada saat link diklik
$('.scroll').on('click',function(){

  // ambil isi href
  let tujuan = $(this).attr('href');

  // tangkap elemen ybs
  let elemenTujuan = $(tujuan);

  // utk mengetahui jarak elemenTujuan dg atap body
  // console.log(elemenTujuan.offset().top);

  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 50
  });
  // e.preventDefault();
});
