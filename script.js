const message = document.getElementById('message'); // セリフの入力エリア
const playButton = document.getElementById('play'); // 再生ボタン

// 再生ボタンをクリックしたとき、デフォルトの音声で再生
playButton.addEventListener('click', () => {
  const uttr = new SpeechSynthesisUtterance(message.value);
  uttr.lang = 'ja-JP';
  speechSynthesis.speak(uttr);
});
