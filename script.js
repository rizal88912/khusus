// Efek ketik dengan teks ucapan panjang kamu
const text = `good morning my lovee  💕, semangatt yaa buat hari ini yaa, jangan lupa buat sarapan sama mandi biar ga bauu, kalau nanti hari kamu buruk jangan sedih yaa kamu bisa cerita sama aku, don't be sad, I'm here. sekarang kamu punya aku, kamu bisa ceritain semua hari kamu ke aku dan aku bakal dengerin semua cerita kamu okeee? ohhhh yaa, don't forget to brush your teeth, biar gigi kamu bersih dan wangii oke?? jangan lupa berdoa selalu sama tuhan kamu apapun yang mau kamu lakukan oke? kamu juga harus inget sama tuhan kamu, I wanna tell you something, I'm so lucky to have you, I'm so lucky to know you, because kamu selalu selalu ngertiin aku dan selalu ada buat aku, aku udah jatuh cinta sama kamu. kamu selalu ada disaat aku butuh kamu disaat senang maupun sedih kamu selalu ada buat aku, seberuntung itu aku bisa kenal dan milikin kamu, aku gamau kamu pergi dari hidup aku, kamu udah jadi rumah kedua buat aku kalau kamu pergi aku sama siapa? janji sama aku kalau kamu ga akan pergi dari aku ya? terimakasih atas semua yang pernah kamu lakuin buat aku, walaupun itu hal sepele tapi aku sangat menghargai itu, terimakasih sudah hadir dalam hidupku, semoga hari hari kamu selalu indah ya? semangat buat hari ini, i love you more than anything lovee`;
const el = document.getElementById("typewriter");
let i = 0;
function ketik() {
  if(i < text.length){
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(ketik, 30); // kecepatan ketik bisa disesuaikan
  }
}
ketik();
