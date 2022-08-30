export default function smartSpeedk() {
  const boradcast = new SpeechSynthesisUtterance();
  boradcast.text = '能说一下React的Fiber架构吗?';
  boradcast.lang = 'zh';
  boradcast.volume = 1;
  boradcast.rate = 1;
  boradcast.pitch = 1;

  speechSynthesis.speak(boradcast)

  return (
    <div>语音提示</div>
  )
}
