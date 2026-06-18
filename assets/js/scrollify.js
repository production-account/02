if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)){
	// スマホ・タブレット（iOS・Android）の場合の処理を記述
    $.scrollify({
        section:'', //対象要素を指定
        easing: '',
        // easing: 'easeOutExpo', // イージングを指定
        scrollSpeed: 1100, // スクロール時の速度
        updateHash: false,
        touchScroll: false,
        // standardScrollElements: '.section02,.section03', //通常スクロール要素
    });
}else{
	$.scrollify({
        section:'.scrollify', //対象要素を指定
        easing: 'easeInOutCirc',
        // easing: 'easeOutExpo', // イージングを指定
        scrollSpeed: 1100, // スクロール時の速度
        updateHash: false,
        touchScroll: true,
        standardScrollElements: '', 
    });
}





