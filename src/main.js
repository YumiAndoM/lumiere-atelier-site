// ===============================================
// 1. SCSSファイルをインポート (一番上)
// ===============================================
import '../sass/style.scss'



// // import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))








// ===============================================
// 2. ページ遷移時のフェードイン処理 (init.jsの中身)
// ===============================================
window.addEventListener('load', () => {
  document.body.classList.add('is-loaded');
});





// ===============================================
// headerのハンバーガーメニュー1050px以下
// ===============================================



const openBtn = document.querySelector('.openbtn');
const gNav = document.querySelector('#g-nav');
const overlay = document.querySelector('#js-overlay');

// 3つの要素がすべて存在する場合のみ処理を実行
if (openBtn && gNav && overlay) {
  // ボタンをクリックした時の処理
  openBtn.addEventListener('click', () => {
    openBtn.classList.toggle('active');
    gNav.classList.toggle('panelactive');
    overlay.classList.toggle('active');
  });

  // オーバーレイをクリックした時の処理
  overlay.addEventListener('click', () => {
    openBtn.classList.remove('active');
    gNav.classList.remove('panelactive');
    overlay.classList.remove('active');
  });
}


// ===============================================
// 3. lessonページの並び変え(isotope)
// ===============================================
window.addEventListener('load', function() {
  
  const grid = document.querySelector('.lesson-card-list');
  const filterButtons = document.querySelector('.filter-btn-list'); // ボタンも取得

  if (grid && filterButtons) { // 両方が存在するか確認
    
    const iso = new Isotope(grid, {
      itemSelector: '.lesson-card-item',
      layoutMode: 'fitRows',
      transitionDuration: '0.4s'
    });

    // ★ Isotopeの準備が完了したことをCSSに伝える
    grid.classList.add('is-ready');
    filterButtons.classList.add('is-ready');

    // フィルターボタンの処理（ここは変更なし）
    filterButtons.addEventListener('click', (event) => {
      // ...
    });
  }
});



// ===============================================
// 4. pricingnのアコーディオン設定(accordion)
// ===============================================
const accordionItems = document.querySelectorAll('.pricing-faq li');

  accordionItems.forEach(item => {
      const button = item.querySelector('button');
      const answer = item.querySelector('.faq-answer');

      button.addEventListener('click', () => {
          // クリックされたアイテムの開閉状態を切り替える
          const isOpen = item.classList.contains('is-open');

          // まず、すべてのアコーディオンを閉じる（一つだけ開くようにする場合）
          // accordionItems.forEach(otherItem => {
          //     otherItem.classList.remove('is-open');
          //     otherItem.querySelector('.faq-answer').style.maxHeight = null;
          // });

          // クリックされたアイテムが閉じていたら開く
          if (!isOpen) {
              item.classList.add('is-open');
              // ★コンテンツの実際の高さ分だけmax-heightを設定
              answer.style.maxHeight = answer.scrollHeight + 'px';
          } else {
              // 開いていたら閉じる
              item.classList.remove('is-open');
              answer.style.maxHeight = null;
          }
      });
  });



// ===============================================
// 5. fade-up
// ===============================================


  // 1. アニメーションさせたい要素をすべて取得
  const targets = document.querySelectorAll('.fade-up-trigger');

  // 2. オプションを設定
  const options = {
      root: null, // ビューポートを基準にする
      rootMargin: '0px',
      threshold: 0.5 // 要素が10%見えたらトリガー
  };

  // 3. Intersection Observerのインスタンスを作成
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          // 要素が画面内に入ったかどうかをチェック
          if (entry.isIntersecting) {
              // is-activeクラスを付与してアニメーションを実行
              entry.target.classList.add('is-active');
              // 一度表示されたら、監視を解除してパフォーマンスを向上
              observer.unobserve(entry.target);
          }
      });
  }, options);

  // 4. すべてのターゲット要素の監視を開始
  targets.forEach(target => {
      observer.observe(target);
  });




  // ===============================================
// Price　SP時料金表真ん中を自動で真ん中に
// ===============================================


  window.addEventListener('load', function() {

  // 画面幅が750px以下（mサイズ）かどうかを判断する
  if (window.matchMedia('(max-width: 750px)').matches) {
    
    // スクロールさせたい親コンテナを取得
    const scrollContainer = document.querySelector('.pricing-list-block');
    // 中央に表示したいターゲット要素を取得
    const recommendPlan = document.querySelector('.is-recommend');

    // 両方の要素が存在する場合のみ処理を実行
    if (scrollContainer && recommendPlan) {

      // --- スクロール位置を計算 ---
      const containerWidth = scrollContainer.offsetWidth;
      const targetWidth = recommendPlan.offsetWidth;
      const targetLeft = recommendPlan.offsetLeft;

      // ターゲットを中央に配置するためのスクロール量を計算
      const scrollTo = targetLeft - (containerWidth / 2) + (targetWidth / 2);

      // 計算した位置に、コンテナの水平スクロールを直接設定する
      scrollContainer.scrollLeft = scrollTo;
    }
  }
});