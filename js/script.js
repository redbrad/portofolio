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

// parallax
$(window).scroll(function(){

  let scroll = $(this).scrollTop(); // jarak antar atap body dan window yg sedang dilihat

  // jumbotron
  $('.jumbotron img').css({
    'transform' : 'translate(0,'+scroll/10+'%)'
  });
  $('.jumbotron h1','.jumbotron p').css({
    'transform' : 'translate(0,'+scroll/20+'%)'
  });

  // portofolio
  if(scroll>$('.portofolio').offset().top - 150) {
    $('.thumb').each(function(i) {
      setTimeout(function() {
        $('.thumb').eq(i).addClass('muncul');
      }, 200*(i+1));
    });
  }

  if(scroll>$('.about').offset().top - 150) {
    $('.kiri').addClass('muncul');
    $('.kanan').addClass('muncul');
  }

});
