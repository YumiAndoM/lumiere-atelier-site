// アコーディオン機能のJavaScript
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