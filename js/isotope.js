// js/isotope.js

// windowの'load'イベントで、画像・CSS・Webフォントなど全てのリソース読み込みを待つ
window.addEventListener('load', function() {
  
  const grid = document.querySelector('.lesson-card-list');

  if (grid) {
    // Isotopeを初期化
    const iso = new Isotope(grid, {
      itemSelector: '.lesson-card-item',
      layoutMode: 'fitRows',
      transitionDuration: '0.6s'
    });

    // ★★★ これが最終手段のコード ★★★
    // フォント適用後の僅かなズレを修正するため、少しだけ遅れて再計算を命令する
    setTimeout(function() {
      iso.layout();
    }, 100); // 100ミリ秒後（0.1秒後）に実行

    // フィルターボタンの処理（ここは変更なし）
    const filterButtons = document.querySelector('.filter-btn-list');
    if (filterButtons) {
      filterButtons.addEventListener('click', (event) => {
        if (!event.target.matches('.filter-btn')) {
          return;
        }
        filterButtons.querySelector('.is-active').classList.remove('is-active');
        event.target.classList.add('is-active');
        const filterValue = event.target.dataset.filter;
        iso.arrange({ filter: filterValue });
      });
    }
  }
});