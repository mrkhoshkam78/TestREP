'use strict';

const games = [
  {id:'cyberpunk', title:'Cyberpunk 2077', subtitle:'در خیابان‌های نئون‌زده نایت‌سیتی', genre:'rpg', genreLabel:'نقش‌آفرینی', year:2020, image:'assets/cyberpunk.svg', description:'در نقش V وارد نایت‌سیتی شو؛ شهری عظیم و آینده‌نگر که انتخاب‌ها، شخصیت‌ها و مسیر داستانی تو در آن اهمیت دارند. ترکیبی از جهان‌باز، مبارزه و نقش‌آفرینی در فضایی سایبرپانکی.', tags:['جهان‌باز','علمی‌تخیلی','داستان‌محور'], platforms:'PC · WINDOWS'},
  {id:'elden-ring', title:'Elden Ring', subtitle:'سفری اسرارآمیز در سرزمین میانه', genre:'rpg', genreLabel:'نقش‌آفرینی', year:2022, image:'assets/elden-ring.svg', description:'جهانی فانتزی و گسترده را کاوش کن؛ با دشمنان قدرتمند روبه‌رو شو، رازهای پنهان را کشف کن و سبک مبارزه و شخصیت خودت را بساز.', tags:['فانتزی تاریک','جهان‌باز','چالش‌برانگیز'], platforms:'PC · WINDOWS'},
  {id:'red-dead', title:'Red Dead Redemption 2', subtitle:'زندگی در غرب وحشی', genre:'adventure', genreLabel:'ماجراجویی', year:2019, image:'assets/red-dead.svg', description:'در یک ماجراجویی داستانی و جهان‌باز، همراه گروهی از قانون‌گریزان در روزهای پایانی عصر غرب وحشی سفر کن؛ دنیایی زنده با شخصیت‌ها و جزئیات فراوان.', tags:['جهان‌باز','وسترن','داستانی'], platforms:'PC · WINDOWS'},
  {id:'baldurs-gate', title:"Baldur's Gate 3", subtitle:'ماجراجویی در سرزمین‌های فراموش‌شده', genre:'rpg', genreLabel:'نقش‌آفرینی', year:2023, image:'assets/baldurs-gate.svg', description:'یک نقش‌آفرینی فانتزی عمیق با تصمیم‌های اثرگذار، همراهان متنوع و نبردهای نوبتی. مسیر داستان را انتخاب‌ها و شیوه بازی تو شکل می‌دهند.', tags:['فانتزی','نوبتی','انتخاب‌محور'], platforms:'PC · WINDOWS'},
  {id:'forza', title:'Forza Horizon 5', subtitle:'جشنواره سرعت در مکزیک', genre:'racing', genreLabel:'مسابقه‌ای', year:2021, image:'assets/forza.svg', description:'در نقشه‌ای رنگارنگ و گسترده رانندگی کن، خودروهای مختلف را امتحان کن و در رویدادهای متنوع مسابقه‌ای شرکت داشته باش.', tags:['رانندگی','جهان‌باز','رقابتی'], platforms:'PC · WINDOWS'},
  {id:'alan-wake', title:'Alan Wake 2', subtitle:'مرز میان واقعیت و کابوس', genre:'adventure', genreLabel:'ماجراجویی', year:2023, image:'assets/alan-wake.svg', description:'یک تجربه معمایی و ترسناک با روایت چندلایه؛ در فضایی تاریک سرنخ‌ها را دنبال کن و قدم‌به‌قدم راز ماجرا را کنار بزن.', tags:['ترسناک','معمایی','روایت‌محور'], platforms:'PC · WINDOWS'},
  {id:'hades', title:'Hades II', subtitle:'نبردی اسطوره‌ای در جهان زیرین', genre:'action', genreLabel:'اکشن', year:2024, image:'assets/hades.svg', description:'در یک اکشن روگ‌لایک سریع و تکرارپذیر، با قدرت‌های اسطوره‌ای و ترکیب‌های گوناگون به دل نبردها بزن و هر بار مسیر تازه‌ای را تجربه کن.', tags:['روگ‌لایک','اسطوره‌ای','اکشن سریع'], platforms:'PC · WINDOWS'},
  {id:'black-myth', title:'Black Myth: Wukong', subtitle:'افسانه‌ای الهام‌گرفته از اساطیر چین', genre:'action', genreLabel:'اکشن', year:2024, image:'assets/black-myth.svg', description:'در نقش جنگجوی افسانه‌ای وارد سفری پر از موجودات اساطیری، مبارزه‌های سینمایی و محیط‌های چشم‌نواز شو.', tags:['اکشن','اساطیری','مبارزه‌ای'], platforms:'PC · WINDOWS'},
  {id:'hogwarts', title:'Hogwarts Legacy', subtitle:'زندگی جادویی در هاگوارتز', genre:'adventure', genreLabel:'ماجراجویی', year:2023, image:'assets/hogwarts.svg', description:'به دنیای جادوگری قدم بگذار، کلاس‌ها و محیط‌های جادویی را کشف کن و ماجراجویی مستقل خودت را در این جهان فانتزی بساز.', tags:['جادویی','جهان‌باز','فانتزی'], platforms:'PC · WINDOWS'},
  {id:'helldivers', title:'Helldivers 2', subtitle:'همکاری برای دفاع از کهکشان', genre:'action', genreLabel:'اکشن', year:2024, image:'assets/helldivers.svg', description:'در یک شوتر سوم‌شخص همکاری‌محور، همراه دوستانت مأموریت‌های پرآشوب انجام بده و برای زنده ماندن به هماهنگی تیمی تکیه کن.', tags:['شوتر','همکاری تیمی','آنلاین'], platforms:'PC · WINDOWS'},
  {id:'starfield', title:'Starfield', subtitle:'اکتشاف در پهنه بی‌کران فضا', genre:'rpg', genreLabel:'نقش‌آفرینی', year:2023, image:'assets/starfield.svg', description:'در یک نقش‌آفرینی علمی‌تخیلی، میان سیاره‌ها سفر کن، سفینه‌ات را توسعه بده و در دل منظومه‌های گوناگون ماجراجویی کن.', tags:['فضایی','اکتشاف','نقش‌آفرینی'], platforms:'PC · WINDOWS'},
  {id:'witcher', title:'The Witcher 3', subtitle:'شکار هیولا در قاره‌ای افسانه‌ای', genre:'rpg', genreLabel:'نقش‌آفرینی', year:2015, image:'assets/witcher.svg', description:'در نقش گرالت، شکارچی هیولا، وارد داستانی فانتزی و جهان‌باز شو؛ قراردادها را بپذیر، مسیرها را انتخاب کن و با پیامد تصمیم‌ها روبه‌رو شو.', tags:['فانتزی','جهان‌باز','داستانی'], platforms:'PC · WINDOWS'},
  {id:'age-of-empires', title:'Age of Empires IV', subtitle:'ساخت تمدن و فرماندهی ارتش‌ها', genre:'strategy', genreLabel:'استراتژی', year:2021, image:'assets/age-of-empires.svg', description:'تمدن خودت را از دل تاریخ رشد بده؛ منابع را مدیریت کن، پایگاه بساز و با تصمیم‌های تاکتیکی در میدان نبرد برتری به دست بیاور.', tags:['استراتژی','تاریخی','مدیریت منابع'], platforms:'PC · WINDOWS'}
];

const genreNames = {action:'اکشن', rpg:'نقش‌آفرینی', adventure:'ماجراجویی', racing:'مسابقه‌ای', strategy:'استراتژی'};
const grid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('gameSearch');
const sortSelect = document.getElementById('sortSelect');
const visibleCount = document.getElementById('visibleCount');
const emptyState = document.getElementById('emptyState');
const favoritesFilter = document.getElementById('favoritesFilter');
const favoriteCount = document.getElementById('favoriteCount');
const modal = document.getElementById('gameModal');
const toast = document.getElementById('toast');
let activeGenre = 'all';
let onlyFavorites = false;
let currentModalGame = null;
let toastTimer = null;

function readFavorites(){
  try {
    const saved = JSON.parse(localStorage.getItem('pixelverse-favorites') || '[]');
    return new Set(Array.isArray(saved) ? saved.filter(id => games.some(game => game.id === id)) : []);
  } catch { return new Set(); }
}
let favorites = readFavorites();

function saveFavorites(){
  try { localStorage.setItem('pixelverse-favorites', JSON.stringify([...favorites])); }
  catch { showToast('ذخیره‌سازی در این مرورگر در دسترس نیست.'); }
  updateFavoriteCount();
}

function updateFavoriteCount(){
  favoriteCount.textContent = String(favorites.size);
  favoriteCount.setAttribute('aria-label', `${favorites.size} بازی در علاقه‌مندی‌ها`);
}

function gameCard(game){
  const saved = favorites.has(game.id);
  return `
    <article class="game-card" data-id="${game.id}" tabindex="0" role="button" aria-label="نمایش جزئیات ${game.title}">
      <div class="game-poster">
        <img src="${game.image}" alt="پوستر گرافیکی ${game.title}" loading="lazy" decoding="async">
        <div class="poster-shade"></div>
        <span class="genre-badge">${game.genreLabel}</span>
        <span class="game-year">${game.year}</span>
        <button class="card-save ${saved ? 'saved' : ''}" type="button" data-save="${game.id}" aria-label="${saved ? 'حذف از' : 'افزودن به'} علاقه‌مندی‌ها" aria-pressed="${saved}">${saved ? '♥' : '♡'}</button>
      </div>
      <div class="game-info">
        <div class="game-title-row"><strong class="game-title">${game.title}</strong><span class="game-platform">PC</span></div>
        <div class="game-subtitle">${game.subtitle}</div>
        <div class="game-card-bottom"><span>معرفی بازی</span><span class="card-open">مشاهده جزئیات <b>←</b></span></div>
      </div>
    </article>`;
}

function visibleGames(){
  const query = searchInput.value.trim().toLocaleLowerCase('fa');
  let list = games.filter(game => {
    const matchesGenre = activeGenre === 'all' || game.genre === activeGenre;
    const matchesFavorite = !onlyFavorites || favorites.has(game.id);
    const searchable = `${game.title} ${game.subtitle} ${game.genreLabel} ${game.description} ${game.tags.join(' ')}`.toLocaleLowerCase('fa');
    return matchesGenre && matchesFavorite && (!query || searchable.includes(query));
  });
  if (sortSelect.value === 'az') list.sort((a,b) => a.title.localeCompare(b.title));
  if (sortSelect.value === 'year') list.sort((a,b) => b.year - a.year || a.title.localeCompare(b.title));
  return list;
}

function renderGames(){
  const list = visibleGames();
  grid.innerHTML = list.map(gameCard).join('');
  visibleCount.textContent = String(list.length).padStart(2,'0');
  emptyState.hidden = list.length !== 0;
  grid.hidden = list.length === 0;
  updateGenreCount();
}

function updateGenreCount(){
  const allButton = document.querySelector('[data-genre="all"] span');
  if (allButton) allButton.textContent = String(games.length);
  document.querySelectorAll('[data-genre]').forEach(button => {
    button.classList.toggle('active', button.dataset.genre === activeGenre);
    button.setAttribute('aria-pressed', String(button.dataset.genre === activeGenre));
  });
  favoritesFilter.classList.toggle('active', onlyFavorites);
  favoritesFilter.setAttribute('aria-pressed', String(onlyFavorites));
}

function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function toggleFavorite(id){
  const game = games.find(item => item.id === id);
  if (!game) return;
  const wasSaved = favorites.has(id);
  if (wasSaved) favorites.delete(id); else favorites.add(id);
  saveFavorites();
  renderGames();
  if (currentModalGame && currentModalGame.id === id) updateModalFavorite();
  showToast(wasSaved ? 'از علاقه‌مندی‌ها حذف شد.' : 'به علاقه‌مندی‌ها اضافه شد ♥');
}

function updateModalFavorite(){
  if (!currentModalGame) return;
  const saved = favorites.has(currentModalGame.id);
  document.getElementById('modalFavorite').textContent = saved ? '♥ حذف از علاقه‌مندی‌ها' : '♡ افزودن به علاقه‌مندی‌ها';
  document.getElementById('modalFavorite').classList.toggle('is-saved', saved);
}

function openModal(id){
  const game = games.find(item => item.id === id);
  if (!game) return;
  currentModalGame = game;
  document.getElementById('modalCover').innerHTML = `<img src="${game.image}" alt="پوستر گرافیکی ${game.title}">`;
  document.getElementById('modalKicker').textContent = `${game.platforms}  /  GAME PROFILE`;
  document.getElementById('modalTitle').textContent = game.title;
  document.getElementById('modalDescription').textContent = game.description;
  document.getElementById('modalTags').innerHTML = game.tags.map(tag => `<span>${tag}</span>`).join('');
  document.getElementById('modalYear').textContent = `${game.year}  ·  ${game.genreLabel}`;
  updateModalFavorite();
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').focus();
}

function closeModal(){
  modal.hidden = true;
  document.body.style.overflow = '';
  currentModalGame = null;
}

// Search, filters and sorting
searchInput.addEventListener('input', renderGames);
sortSelect.addEventListener('change', renderGames);
document.getElementById('genreFilters').addEventListener('click', event => {
  const button = event.target.closest('[data-genre]');
  if (!button) return;
  activeGenre = button.dataset.genre;
  renderGames();
});
favoritesFilter.addEventListener('click', () => { onlyFavorites = !onlyFavorites; renderGames(); });
document.getElementById('favoritesShortcut').addEventListener('click', () => {
  onlyFavorites = !onlyFavorites;
  renderGames();
  document.getElementById('games').scrollIntoView({behavior:'smooth'});
  showToast(onlyFavorites ? 'نمایش بازی‌های موردعلاقه' : 'نمایش همه بازی‌ها');
});
document.getElementById('resetFilters').addEventListener('click', () => {
  activeGenre = 'all'; onlyFavorites = false; searchInput.value = ''; sortSelect.value = 'featured'; renderGames();
});

// Delegate card actions so the grid can be safely re-rendered.
grid.addEventListener('click', event => {
  const saveButton = event.target.closest('[data-save]');
  if (saveButton) { event.stopPropagation(); toggleFavorite(saveButton.dataset.save); return; }
  const card = event.target.closest('.game-card');
  if (card) openModal(card.dataset.id);
});
grid.addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('game-card')) {
    event.preventDefault(); openModal(event.target.dataset.id);
  }
});

// Surprise me: pick from the current result set, or from the full library if filters are empty.
document.getElementById('randomGame').addEventListener('click', () => {
  const pool = visibleGames().length ? visibleGames() : games;
  const picked = pool[Math.floor(Math.random() * pool.length)];
  openModal(picked.id);
});

document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
document.getElementById('modalFavorite').addEventListener('click', () => {
  if (currentModalGame) toggleFavorite(currentModalGame.id);
});
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });

// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.addEventListener('click', event => {
  if (event.target.closest('a')) { mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); }
});

// Subtle 3D tilt: restrained on desktop, disabled for touch/reduced-motion devices.
const heroTilt = document.getElementById('heroTilt');
if (heroTilt && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const heroVisual = heroTilt.closest('.hero-visual');
  heroVisual.addEventListener('pointermove', event => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    heroTilt.style.transform = `rotateY(${-14 + x * 13}deg) rotateX(${5 - y * 9}deg) rotateZ(${1 + x * 1.5}deg)`;
  });
  heroVisual.addEventListener('pointerleave', () => { heroTilt.style.transform = ''; });
  grid.addEventListener('pointermove', event => {
    const card = event.target.closest('.game-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 6}deg) translateY(-3px)`;
  });
  grid.addEventListener('pointerout', event => {
    const card = event.target.closest('.game-card');
    if (card && !card.contains(event.relatedTarget)) card.style.transform = '';
  });
}

updateFavoriteCount();
renderGames();
