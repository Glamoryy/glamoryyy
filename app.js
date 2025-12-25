/* app.js - tüm etkileşimler */

// ---------- ÖRNEK ÜRÜN VERİSİ (isteğe göre genişlet) ----------
const PRODUCTS = [
  {id:1, title:"bb krem", category:"skincare", price:1899, oldPrice:2249, desc:"Yumuşak, besleyici bb krem — hızlı emilen formül.", img:"images/bbkrem.jpg", tags:["bb","krem","besleyici"], createdAt:"2025-08-10"},
  {id:2, title:"İpek Fondöten", category:"makeup", price:2199, oldPrice:2799, desc:"Orta kapatma, mat bitiş.", img:"images/fondoten.jpg", tags:["fondöten"], createdAt:"2025-10-01"},
  {id:3, title:"vanilyalı Parfüm", category:"perfume", price:3999, oldPrice:4999, desc:"Romantik ve kalıcı.", img:"images/parfum.jpg", tags:["vanilyalı"], createdAt:"2025-07-05"},
  {id:4, title:"Vitamin C Serumu", category:"skincare", price:2899, oldPrice:3499, desc:"Aydınlatıcı serum, C vitamini yoğun.", img:"images/serum.jpg", tags:["serum"], createdAt:"2025-11-12"},
  {id:5, title:"gloss sephora ", category:"makeup", price:1499, oldPrice:1999, desc:"Canlı ve uzun süreli renk.", img:"images/gloss.jpg", tags:["gloss"], createdAt:"2025-09-03"},
  {id:6, title:"Kaş waxı", category:"makeup", price:1599, oldPrice:1999, desc:"Doğal görünüm, uzun süreli formula.", img:"images/kaş.jpg", tags:["kaş","wax"], createdAt:"2025-12-01"},
  {id:7, title:"Kontür stick", category:"makeup", price:2799, oldPrice:3499, desc:"soğuk tonlu kontur stick 5 no — yapı kazandırıcı.", img:"images/kontür.jpg", tags:["kontür","stick"], createdAt:"2025-11-28"},
  {id:8, title:" eye Primer Base", category:"makeup", price:2199, oldPrice:2799, desc:" göz Makyajı sabitleyici primer — su geçirmez.", img:"images/primer.jpg", tags:["primer","base"], createdAt:"2025-11-20"},
  {id:9, title:"Pudra Set", category:"makeup", price:2499, oldPrice:2999, desc:"Işıltılı ve mat pudra kombinasyonu.", img:"images/pudraset.jpg", tags:["pudra","set"], createdAt:"2025-11-15"},
  {id:10, title:" fenty beauty Ruj ", category:"makeup", price:3299, oldPrice:4299, desc:"fenty yuj — parlak ve yumuşak.", img:"images/ruj.jpg", tags:["ruj","koleksiyon ürünü"], createdAt:"2025-11-10"},
  {id:11, title:"air brush makyaj sabitleyici", category:"skincare", price:1299, oldPrice:1599, desc:"makyajınıza son ışıltısını verin.", img:"images/352358-media_swatch.avif", tags:["swatch","renk","cilt"], createdAt:"2025-12-05"},
  {id:12, title:"sephora sizeup maskara", category:"makeup", price:4599, oldPrice:5999, desc:"ultra hacim ve uzunluk etkisi.", img:"images/51467-media_principal.avif", tags:["maskara","premium","kozmetik"], createdAt:"2025-12-03"},
  {id:13, title:"loreal paraside toz bronzer", category:"makeup", price:1999, oldPrice:2499, desc:"Güneş gibi parlayan bronzer pudra.", img:"images/bronzer.jpg", tags:["bronzer","pudra","parıltı"], createdAt:"2025-12-04"},
  {id:14, title:"rare beauty allık", category:"makeup", price:1899, oldPrice:2399, desc:"Pembe tonlu, doğal görünümlü allık.", img:"images/allıkpembe.jpg", tags:["allık","pembe","parlak"], createdAt:"2025-12-02"},
  {id:15, title:" parfümlü Saç Yağı", category:"hair", price:2299, oldPrice:2999, desc:"Besleyici ve güçlendirici saç yağı.", img:"images/hairoil.jpg", tags:["saç","yağı","besleyici"], createdAt:"2025-12-01"},
  {id:16, title:"Pink Glow Highlighter", category:"makeup", price:2799, oldPrice:3499, desc:"Pembe tonlu ışıltı — doğal radyans.", img:"images/pinkglow.jpg", tags:["highlighter","glow","pembe"], createdAt:"2025-11-30"}
];

// ---------- BLOG MAKALELERİ (tam metinler) ----------
const BLOG_ARTICLES = [
  {
    id: 1,
    title: "Cilt Bakım Rutini",
    fullText: `<h4>Günlük Cilt Bakım Rutini</h4>
      <p><strong>Sabah Rutini:</strong></p>
      <p>Sabah uyandığınızda ilk olarak ılık su ile yüzünüzü yıkayın. Ardından hafif bir tonik kullanarak ciltinizi dengeleyin. Vitamin C serumu uygulayarak cildinize parıltı ve aydınlanma kazandırın. Son olarak uygun SPF'li nemlendirici ve güneş koruyucu kremi kullanmayı unutmayın. Sabah rutini cilt sağlığının temelini oluşturur.</p>
      <p><strong>Akşam Rutini:</strong></p>
      <p>Akşam micellar su ile makyajınızı temizleyin. Sonra nazik bir temizleyici jel ile yüzünüzü tekrar yıkayın. Tonik uyguladıktan sonra, besleyici bir serum veya maske kullanın. Son aşamada krem eller ile masaj yaparak uygulanmalıdır. Gece rutini cildinizin onarım ve yenileme dönemine destek olur.</p>
      <p><strong>Haftalık Bakım:</strong></p>
      <p>Haftada 1-2 kez peeling yapmak cildinizi canlandıracaktır. Hafif bir chemical peeling veya physical exfoliator tercih edebilirsiniz. Bunun ardından besleyici bir maske uygulamak cilt bariyerinizi güçlendirecektir. İçerik olarak hyaluronik asit, niasinamid ve peptid içeren ürünleri seçin.</p>`
  },
  {
    id: 2,
    title: "Makyajda Kalıcılık Tüyoları",
    fullText: `<h4>Makyajı Uzun Süre Kalıcı Yapma Yöntemleri</h4>
      <p><strong>Primer Kullanımı:</strong></p>
      <p>Kalıcı makyajın sırrı, başlamadan önce cildini hazırlamaktır. İyi bir primer, gözeneklerinizi doldurur ve makyaj ürünlerinin adezyonunu sağlar. Silikon tabanlı primerler tüm cilt tipleri için uygun olmakla birlikte, kombine cilt için su tabanlı primerler daha iyi sonuç verebilir. Primer ile gözeneklerin kapatılması, makyajın daha pürüzsüz ve kalıcı görünmesini sağlar.</p>
      <p><strong>Fondöten Seçimi:</strong></p>
      <p>Dönemsel olarak fondöten tonunuzu güncelleyin. Uzun süreli (long-wear) formula seçerek makyajınız sağlamlaşacaktır. Fondöteni hafif setiyle mi yoksa fırçayla mı uygulayacağınız da kalıcılığı etkiler. Fırça ile uygulama daha düzgün ve kalıcı sonuç verir. İnce tabakalar halinde uygulamak önemli çünkü aşırı ürün kullanımı çatlamaya neden olabilir.</p>
      <p><strong>Setting Sprey ve Pudra:</strong></p>
      <p>Makyajınızı sabitle setting sprey kullanmayı unutmayın. Pudra, özellikle T-bölgesine odaklanarak uygulanmalıdır. Mat pudralar yağlı ciltleri kontrol ederken, ışıltılı pudralar daha çekici bir görünüm kazandırır. Son olarak, setting spray ile tüm makyajı sabitledikten sonra saç sprey gibi sprey seçmeyin — ciltte uyumlu, makyaj-özel sprey kullanın.</p>`
  },
  {
    id: 3,
    title: "Göz Makyajı Teknikleri",
    fullText: `<h4>Profesyonel Görünümlü Göz Makyajı Teknikleri</h4>
      <p><strong>Göz Farı Blendleme:</strong></p>
      <p>Göz farını birleştirmek, profesyonel görünüşün anahtarıdır. Her zaman daha açık bir renk ile başlayın ve karanlık renklere doğru ilerleyin. Kaliteli fırçalar kullanan ve ufak dairesel hareketler yapan makyöz, en iyi sonucu alır. Çok karanlık bir rengi doğrudan göze uygulamak yerine kademeli olarak katman katman ekleyin. Blending fırçanızı sık sık temizleyin ki renklerin keskin çizgileri kalmasın.</p>
      <p><strong>Eyeliner Tekniği:</strong></p>
      <p>Eyeliner, göze derinlik ve tanım verir. Sıvı eyeliner hassas ve duruş gerektirse de, kalem eyeliner kolay bir başlangıç noktasıdır. Kapalı gözlü makyajda, eyeliner tamamı kapatılırken açık gözle taşıyıcı makyajda sadece lash line'a uygulanır. Asimetrik gözler için farklı eyeliner stilleri denemeyi unutmayın. Eyeliner çizmeniz sırasında elinizi sabit tutun ve küçük hareketler yapın.</p>
      <p><strong>Rimel Uygulaması:</strong></p>
      <p>Rimel, göze hacim ve uzunluk kazandırır. İlk kat rimel uyguladıktan sonra birkaç saniye kurumasını bekleyin, sonra ikinci kat ekleyin. Rimel fırçasını kökten uça doğru hareket ettirerek tüm kirpiklere ulaştırın. Alt kirpiklere de hafifçe uygulayarak gözün açıklığı artırabilirsiniz.</p>`
  },
  {
    id: 4,
    title: "Cilt Sorunları ve Çözümleri",
    fullText: `<h4>Yaygın Cilt Sorunlarına Çözüm Bulma</h4>
      <p><strong>Sivilce ve Akne:</strong></p>
      <p>Akne tedavisinde sabır gerçekten gereklidir. Salisilik asit ve benzoyl peroksit içeren ürünler etkili olabilir. Fakat aşırı temizlik ve ovma sorunu daha da kötüleştirebilir. Dermatolog görmek, ciddi akne vakaları için en iyi seçenektir. Akne ürünü yıkamak yerine, sadece hafifçe ıslak elimizle kurulamalıdır. Akne bölgelerine ürün uygulamadan önce cildinizi iyice kurutun.</p>
      <p><strong>Kuru Cilt:</strong></p>
      <p>Kuru cilt, su eksikliğinden kaynaklanır. Hyaluronik asit, gliserin ve dimetikon içeren ürünler yardımcı olabilir. Çok sıcak su yerine ılık su ile yüz yıkamak önerilir. Nemlendirici serum ve kremi sabah akşam ve özellikle kuru bölgelere uygulamayı unutmayın. Kış aylarında ek besleyici maskeleri haftalık rutininize ekleyin.</p>
      <p><strong>Yağlı Cilt:</strong></p>
      <p>Yağlı cilt tipi, sebum üretiminin fazla olmasından kaynaklıdır. Niasinamid ve mattefying powderlar yağlanmayı kontrol eder. Yağlı cilti, aşırı temizleyerek veya kurutan ürünlerle dehydrate etmek problemi kötüleştiriyor. Hafif nemlendirici ve sebum-kontrol özellikli ürünler tercih edilmeli. Gün içinde yağ emici kağıtlarla cildi temizleyin.</p>`
  },
  {
    id: 5,
    title: "Dudak Makyajı İpuçları",
    fullText: `<h4>Dudak Bakımı ve Makyajı Rehberi</h4>
      <p><strong>Dudak Hazırlanması:</strong></p>
      <p>Dudaklar, vücut üzerinde en hassas bölgelerdendir. Uygun bir dudak balsamı ile dudaklarınızı nemlendirecek ve pürüzden uzak tutacaksınız. Yatış öncesi daha besleyici bir balm uygulamak, ertesi gün güzel duşlar sağlayacaktır. Dudak peelingi yaparken, çok yumuşak bir fırça veya yumuşak diş fırçası kullanın. Dudakları asla scrub ile ovmayın çünkü bu bölge çok hassastır.</p>
      <p><strong>Ruj Seçimi:</strong></p>
      <p>Ruj tonunuzu cilt tonunuz ve göz rengine göre seçin. Düşük cilt tonları, daha koyu ve soğuk tonları taşırken, açık cilt tonları sıcak ve açık renklerle daha güzel görünür. Mat ruj, daha resmi ve kalıcı görünmesini sağlarken, dudak parlağı daha genç ve eğlenceli bir etki yaratır. Ruj seçerken kendi stilinizi ve kişiliğinizi yansıtan renkler seçin.</p>
      <p><strong>Dudak Kontürü:</strong></p>
      <p>Dudak rengi, dudaklarınızı daha büyük görünsün istemiyorsanız az kullanılması gereken bir kontur kalemine ihtiyacınız vardır. Kontür rengi, tercih ettiğiniz ruj tonundan bir çok daha koyu olmalıdır. Dudakların doğal sınırının dışında hafifçe işaretleyerek, daha tanımlı ve şekilli bir görünüm elde edebilirsiniz.</p>`
  },
  {
    id: 6,
    title: "Kaş Tasarımı & Dolgu",
    fullText: `<h4>Mükemmel Kaş Şekli Bulma</h4>
      <p><strong>Kaş Şekli Belirleme:</strong></p>
      <p>Kaş şeklini belirlerken, yüz şeklini dikkate alın. Oval yüzlerde, doğal ve hafif yükseltilmiş kaşlar ideal. Geniş yüzlerde, daha yüksek ve keskin kaşlar yapı kazandırırken, dar yüzlerde daha düz kaşlar softa bir görünüm sağlar. Kaş boyu ve genişliği de kişisel tercih ve yüz oranlarına göre değişir. Profesyonel bir kaş tasarımcısına danışmak iyi bir başlangıç olabilir.</p>
      <p><strong>Kaş Kalemi ve Pudrası Kullanımı:</strong></p>
      <p>Kaş kalemleri, boş alanları doldurmak için kullanılırken, kaş pudrası genel renk ve bitiş için tercih edilir. Çoğu zaman her ikisini birleştirerek en iyi sonuç elde edilir. Açık cilt tonunda ışık kahverengileyi, koyu cilt tonunda koyu kahverengi veya siyahı seçin. Kaş kalemleri saç yönünde kullanılmalı, doğal bir görünüm için önemlidir.</p>
      <p><strong>Kaş Bakımı:</strong></p>
      <p>Kaliteli kaş başının üretimi ve uzunluğu 2-3 ay alır. Düzenli kaş masajı ve besleyici yağlar, kaş sağlığını iyileştirir. Eğer permatatolu kaş tercih ederseniz, profesyonel bir uzman seçmeyi unutmayın. Kaş epilasyonu yapılırken, irritasyon ve enfeksiyondan kaçınmak önemli. Yatış öncesi kaşları yumuşak bir fırça ile tarayın.</p>`
  }
];

// ---------- STATE (localStorage destekli) ----------
const state = {
  cart: JSON.parse(localStorage.getItem('cart_v1')) || [],
  wish: JSON.parse(localStorage.getItem('wish_v1')) || [],
  user: JSON.parse(localStorage.getItem('user_v1')) || null,
  reviews: JSON.parse(localStorage.getItem('reviews_v1')) || {}  // { productId: [ {name,stars,text,date} ] }
};

// ---------- HELPERS ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const saveState = () => {
  localStorage.setItem('cart_v1', JSON.stringify(state.cart));
  localStorage.setItem('wish_v1', JSON.stringify(state.wish));
  localStorage.setItem('user_v1', JSON.stringify(state.user));
  localStorage.setItem('reviews_v1', JSON.stringify(state.reviews));
};
const formatPrice = (n) => `${n}₺`;

// ---------- INIT ---------- 
document.addEventListener('DOMContentLoaded', ()=> {
  initUI();
  renderProducts(PRODUCTS);
  updateCartUI();
  updateWishUI();
  setupEvents();
  document.getElementById('year').textContent = new Date().getFullYear();
});

// ---------- RENDER ÜRÜNLER ----------
function renderProducts(list){
  const grid = $('#productGrid');
  grid.innerHTML = '';
  list.forEach(p=>{
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <div style="position:relative">
        <img src="${p.img}" alt="${p.title}" onerror="this.src='https://via.placeholder.com/400x300?text=Foto+Ekleyin'">
        <button class="btn icon fav-btn" data-id="${p.id}">${state.wish.includes(p.id)?'♥':'♡'}</button>
      </div>
      <h4>${p.title}</h4>
      <div class="meta">${capitalize(p.category)}</div>
      <div class="price">${formatPrice(p.price)} ${p.oldPrice?`<span class="old-price">${formatPrice(p.oldPrice)}</span>`:''}</div>
      <div class="card-actions">
        <button class="btn primary quickview" data-id="${p.id}">Detay</button>
        <button class="btn outline add-cart" data-id="${p.id}">Sepete Ekle</button>
      </div>
    `;
    grid.appendChild(el);
  });
}

// ---------- BASİT FONKSİYONLAR ----------
function capitalize(s){ return s.charAt(0).toUpperCase()+s.slice(1); }

// ---------- EVENT SETUP ----------
function setupEvents(){
  // Header buttons
  $('#cartBtn').addEventListener('click', ()=> $('#cartSidebar').classList.toggle('open'));
  $('#closeCart').addEventListener('click', ()=> $('#cartSidebar').classList.remove('open'));
  $('#wishlistBtn').addEventListener('click', ()=> $('#wishSidebar').classList.toggle('open'));
  $('#closeWish').addEventListener('click', ()=> $('#wishSidebar').classList.remove('open'));

  // Delegation for product actions
  document.body.addEventListener('click', (e)=>{
    const q = e.target.closest('.quickview');
    const add = e.target.closest('.add-cart');
    const fav = e.target.closest('.fav-btn');

    if(q){ openProductModal(parseInt(q.dataset.id)); }
    if(add){ addToCart(parseInt(add.dataset.id),1); }
    if(fav){ toggleWish(parseInt(fav.dataset.id)); fav.textContent = state.wish.includes(parseInt(fav.dataset.id)) ? '♥' : '♡'; updateWishUI(); updateCartUI(); }

    if(e.target.id === 'checkoutBtn'){ handleCheckout(); }
    if(e.target.id === 'applyCoupon'){ applyCoupon(); }
    if(e.target.id === 'openOffers'){ alert('Kampanyalar demo: %20 indirim kodu: GLAM20'); }

    if(e.target.id === 'profileBtn'){ openAuth(); }
    if(e.target.id === 'logoutBtn'){ state.user = null; saveState(); renderAuth(); updateCartUI(); updateWishUI(); }
  });

  // Modal close
  $('#closeModal').addEventListener('click', closeProductModal);
  $('#productModal').addEventListener('click', (ev)=>{
    if(ev.target === $('#productModal')) closeProductModal();
  });

  // Modal actions
  $('#modalAddBtn').addEventListener('click', ()=> {
    const id = parseInt($('#modalAddBtn').dataset.id);
    const qty = parseInt($('#modalQty').value) || 1;
    addToCart(id,qty);
    closeProductModal();
  });
  $('#modalBuyBtn').addEventListener('click', ()=> alert('Ödeme sayfasına yönlendirme (demo).'));

  // Review submit
  $('#reviewForm').addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const id = parseInt($('#modalAddBtn').dataset.id);
    const name = $('#reviewName').value.trim();
    const stars = parseInt($('#reviewStars').value);
    const text = $('#reviewText').value.trim();
    if(!name || !text) return alert('Ad ve yorum gerekli');
    const list = state.reviews[id] || [];
    list.unshift({name,stars,text,date: new Date().toISOString()});
    state.reviews[id] = list;
    saveState();
    renderReviews(id);
    $('#reviewForm').reset();
  });

  // Cart item changes (delegation)
  document.getElementById('cartItems').addEventListener('click', (ev)=>{
    const plus = ev.target.closest('.qty-plus');
    const minus = ev.target.closest('.qty-minus');
    const remove = ev.target.closest('.remove-item');
    if(plus){ changeCartQty(parseInt(plus.dataset.id), 1); }
    if(minus){ changeCartQty(parseInt(minus.dataset.id), -1); }
    if(remove){ removeFromCart(parseInt(remove.dataset.id)); }
  });

  // Filters & search
  $('#applyFilter').addEventListener('click', applyFilters);
  $('#searchInput').addEventListener('input', handleSearchInput);
  $('#searchSuggest').addEventListener('click', (ev)=>{
    if(ev.target.dataset.id) openProductModal(parseInt(ev.target.dataset.id));
  });

  // Auth modal
  $('#authSignup').addEventListener('click', ()=> {
    const name = $('#authName').value.trim(); const email = $('#authEmail').value.trim();
    if(!name || !email) return alert('İsim ve e-posta gerekli');
    state.user = {name,email}; saveState(); renderAuth(); closeAuth();
  });
  $('#closeAuth').addEventListener('click', closeAuth);
  $('#profileBtn').addEventListener('click', openAuth);

  // Blog modal - "Devamı" butonları
  document.addEventListener('click', (ev)=>{
    const readmore = ev.target.closest('.readmore');
    if(readmore){
      ev.preventDefault();
      const articleTitle = readmore.closest('.blog-card').querySelector('h3').textContent;
      const article = BLOG_ARTICLES.find(a => a.title === articleTitle);
      if(article) openBlogModal(article);
    }
  });

  // Blog modal kapatma
  if($('#closeBlogModal')){
    $('#closeBlogModal').addEventListener('click', closeBlogModal);
  }

  // Blog modal - dış tıklama kapatma
  const blogModal = $('#blogModal');
  if(blogModal){
    blogModal.addEventListener('click', (ev)=>{
      if(ev.target === blogModal) closeBlogModal();
    });
  }

  // Contact form
  $('#contactForm').addEventListener('submit', (ev)=> { ev.preventDefault(); alert('Mesajınız alındı — teşekkürler!'); ev.target.reset(); });

  // Theme toggle
  $('#themeToggle').addEventListener('click', ()=> {
    document.documentElement.classList.toggle('dark');
    // optional: save preference
  });

  // Coupon apply
  $('#applyCoupon').addEventListener('click', applyCoupon);

  // Wish / cart sidebars close handled above
}

// ---------- PRODUCT MODAL ----------
function openProductModal(id){
  const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
  $('#productModal').setAttribute('aria-hidden','false');
  $('#productModal').style.display = 'flex';
  $('#modalImg').src = p.img;
  $('#modalTitle').textContent = p.title;
  $('#modalDesc').textContent = p.desc;
  $('#modalPrice').textContent = formatPrice(p.price);
  $('#modalOldPrice').textContent = p.oldPrice ? formatPrice(p.oldPrice) : '';
  $('#modalQty').value = 1;
  $('#modalAddBtn').dataset.id = p.id;
  $('#modalFavBtn').dataset.id = p.id;
  
  // Average rating göster
  const reviews = state.reviews[p.id] || [];
  const avgRating = reviews.length > 0 ? Math.round(reviews.reduce((s,r)=>s+r.stars,0)/reviews.length) : 0;
  $('#modalRating').textContent = avgRating > 0 ? '★'.repeat(avgRating) + ' (' + reviews.length + ' yorum)' : 'Henüz yorum yok';
  
  renderReviews(p.id);
}

function closeProductModal(){
  $('#productModal').setAttribute('aria-hidden','true');
  $('#productModal').style.display = 'none';
}

// ---------- BLOG MODAL ----------
function openBlogModal(article){
  $('#blogModal').setAttribute('aria-hidden','false');
  $('#blogModal').style.display = 'flex';
  $('#blogModalTitle').textContent = article.title;
  $('#blogModalContent').innerHTML = article.fullText;
}

function closeBlogModal(){
  $('#blogModal').setAttribute('aria-hidden','true');
  $('#blogModal').style.display = 'none';
  $('#blogModalTitle').textContent = '';
  $('#blogModalContent').innerHTML = '';
}

// ---------- CART ----------
function addToCart(id, qty=1){
  const item = state.cart.find(i=>i.id===id);
  if(item) item.qty += qty; else state.cart.push({id, qty});
  saveState(); updateCartUI(); showToast('Sepete eklendi');
}

function changeCartQty(id, delta){
  const item = state.cart.find(i=>i.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) state.cart = state.cart.filter(i=>i.id!==id);
  saveState(); updateCartUI();
}

function removeFromCart(id){
  state.cart = state.cart.filter(i=>i.id!==id);
  saveState(); updateCartUI();
}

function updateCartUI(){
  const cartCount = state.cart.reduce((s,i)=>s+i.qty,0);
  $('#cartCount').textContent = cartCount;
  const cartItemsEl = $('#cartItems'); cartItemsEl.innerHTML = '';
  let total = 0;
  state.cart.forEach(ci=>{
    const p = PRODUCTS.find(x=>x.id===ci.id);
    if(!p) return;
    total += p.price * ci.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div style="flex:1">
        <div style="font-weight:800">${p.title}</div>
        <div style="color:var(--muted)">${formatPrice(p.price)}</div>
        <div style="margin-top:8px;display:flex;gap:8px;align-items:center">
          <button class="btn qty-minus" data-id="${p.id}">-</button>
          <div>${ci.qty}</div>
          <button class="btn qty-plus" data-id="${p.id}">+</button>
          <button class="btn remove-item" data-id="${p.id}">Kaldır</button>
        </div>
      </div>
    `;
    cartItemsEl.appendChild(div);
  });
  const shipping = $('#shippingSel') ? ($('#shippingSel').value === 'express' ? 30 : 15) : 15;
  const coupon = parseFloat(localStorage.getItem('applied_coupon_val') || 0);
  const final = Math.max(0, Math.round(total - (total * coupon) + shipping));
  $('#cartTotal').textContent = formatPrice(final);
}

function handleCheckout(){
  if(state.cart.length === 0) return alert('Sepetiniz boş!');
  if(!state.user) return alert('Önce giriş yapın (demo).');
  alert('Ödeme akışı başlatıldı — demo.');
  state.cart = []; saveState(); updateCartUI(); $('#cartSidebar').classList.remove('open');
}

// ---------- WISHLIST ----------
function toggleWish(id){
  if(state.wish.includes(id)) state.wish = state.wish.filter(x=>x!==id);
  else state.wish.push(id);
  saveState(); updateWishUI();
}
function updateWishUI(){
  $('#wishCount').textContent = state.wish.length;
  const el = $('#wishItems'); if(!el) return;
  el.innerHTML = '';
  state.wish.forEach(id=>{
    const p = PRODUCTS.find(x=>x.id===id);
    if(!p) return;
    const d = document.createElement('div');
    d.className = 'cart-item';
    d.innerHTML = `<img src="${p.img}"><div style="flex:1"><div style="font-weight:800">${p.title}</div><div class="meta">${formatPrice(p.price)}</div><div style="margin-top:8px"><button class="btn primary add-wish-cart" data-id="${p.id}">Sepete Ekle</button> <button class="btn remove-wish" data-id="${p.id}">Kaldır</button></div></div>`;
    el.appendChild(d);
  });
  
  // Event listener for wish items
  $$('.add-wish-cart').forEach(b => b.addEventListener('click', (e) => addToCart(parseInt(e.target.dataset.id), 1)));
  $$('.remove-wish').forEach(b => b.addEventListener('click', (e) => {
    toggleWish(parseInt(e.target.dataset.id));
    updateWishUI();
  }));
  
  // update product cards fav icons
  $$('.fav-btn').forEach(b => {
    const id = parseInt(b.dataset.id);
    b.textContent = state.wish.includes(id)?'♥':'♡';
  });
}

// ---------- AUTH (basit mock) ----------
function openAuth(){ $('#authModal').setAttribute('aria-hidden','false'); $('#authModal').style.display='flex'; renderAuth(); }
function closeAuth(){ $('#authModal').setAttribute('aria-hidden','true'); $('#authModal').style.display='none'; }
function renderAuth(){
  if(state.user){
    $('#notLogged').hidden = true;
    $('#logged').hidden = false;
    $('#userNameShow').textContent = state.user.name;
  } else {
    $('#notLogged').hidden = false;
    $('#logged').hidden = true;
  }
}

// ---------- SEARCH SUGGESTIONS ----------
function handleSearchInput(e){
  const q = e.target.value.trim().toLowerCase();
  const sug = $('#searchSuggest');
  if(!q){ sug.hidden = true; sug.innerHTML=''; return; }
  const list = PRODUCTS.filter(p => p.title.toLowerCase().includes(q) || p.tags.some(t=>t.includes(q))).slice(0,6);
  sug.innerHTML = list.map(p=>`<div data-id="${p.id}">${p.title} • ${capitalize(p.category)}</div>`).join('');
  sug.hidden = list.length===0;
}

// ---------- FILTERS ----------
function applyFilters(){
  let filtered = [...PRODUCTS];
  const cat = $('#categoryFilter').value;
  const sort = $('#sortSelect').value;
  const min = parseFloat($('#priceMin').value) || 0;
  const max = parseFloat($('#priceMax').value) || Infinity;

  if(cat !== 'all') filtered = filtered.filter(p=>p.category === cat);
  filtered = filtered.filter(p => p.price >= min && p.price <= max);

  if(sort === 'price-asc') filtered.sort((a,b)=>a.price-b.price);
  if(sort === 'price-desc') filtered.sort((a,b)=>b.price-a.price);
  if(sort === 'newest') filtered.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt));
  // featured default

  renderProducts(filtered);
}

// ---------- REVIEWS ----------
function renderReviews(productId){
  const list = state.reviews[productId] || [];
  const out = list.map(r=>`<div style="padding:6px;border-bottom:1px solid rgba(255,255,255,0.02)"><strong>${r.name}</strong> • ${'★'.repeat(r.stars)}<div style="color:var(--muted);font-size:13px">${r.text}</div><div style="color:var(--muted);font-size:12px">${new Date(r.date).toLocaleString()}</div></div>`).join('');
  $('#reviewsList').innerHTML = out || '<div style="color:var(--muted)">Henüz yorum yok.</div>';
}

// ---------- COUPON ----------
function applyCoupon(){
  const code = $('#couponInput').value.trim().toUpperCase();
  if(!code) return alert('Kupon girin');
  // demo: GLAM20 => %20
  if(code === 'GLAM20'){ localStorage.setItem('applied_coupon_val', '0.20'); alert('%20 indirim uygulandı'); }
  else { localStorage.setItem('applied_coupon_val', '0'); alert('Geçersiz kupon'); }
  updateCartUI();
}

// ---------- TOAST ----------
function showToast(text, ms=1600){
  const t = document.createElement('div'); t.textContent = text;
  t.style = 'position:fixed;left:50%;transform:translateX(-50%);bottom:22px;background:#111;padding:10px 16px;border-radius:10px;z-index:9999;opacity:0;transition:opacity .2s';
  document.body.appendChild(t);
  requestAnimationFrame(()=> t.style.opacity = 1);
  setTimeout(()=>{ t.style.opacity = 0; setTimeout(()=> t.remove(),300); }, ms);
}

// ---------- INIT UI ----------
function initUI(){
  // render minimal UI based on state
  renderAuth();
  updateWishUI();
  updateCartUI();
}
