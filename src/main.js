function render() {
  const main = document.createElement('main');
  document.body.appendChild(main);
  main.innerHTML = `
  <h1 class="title">RSS Виртуальная клавиатура</h1>
    <textarea class="textarea" name="textarea" id="textarea"></textarea>
    <section class="keyboard">
      <div class="keyboard__row">
        <div class="key" data-key="192"></div>
        <div class="key" data-key="49"></div>
        <div class="key" data-key="50"></div>
        <div class="key" data-key="51"></div>
        <div class="key" data-key="52"></div>
        <div class="key" data-key="53"></div>
        <div class="key" data-key="54"></div>
        <div class="key" data-key="55"></div>
        <div class="key" data-key="56"></div>
        <div class="key" data-key="57"></div>
        <div class="key" data-key="48"></div>
        <div class="key" data-key="173"></div>
        <div class="key" data-key="61"></div>
        <div class="key backspace" data-key="8">Backspace</div>
      </div>
      <div class="keyboard__row">
        <div class="key tab" data-key="9">Tab</div>
        <div class="key" data-key="81">q</div>
        <div class="key" data-key="87">w</div>
        <div class="key" data-key="69">e</div>
        <div class="key" data-key="82"></div>
        <div class="key" data-key="84"></div>
        <div class="key" data-key="89"></div>
        <div class="key" data-key="85"></div>
        <div class="key" data-key="73"></div>
        <div class="key" data-key="79"></div>
        <div class="key" data-key="80"></div>
        <div class="key" data-key="219"></div>
        <div class="key" data-key="221"></div>
        <div class="key" data-key="220"></div>
      </div>
      <div class="keyboard__row" >
        <div class="key capsLock" data-key="20">Caps Lock</div>
        <div class="key" data-key="65"></div>
        <div class="key" data-key="83"></div>
        <div class="key" data-key="68"></div>
        <div class="key" data-key="70"></div>
        <div class="key" data-key="71"></div>
        <div class="key" data-key="72"></div>
        <div class="key" data-key="74"></div>
        <div class="key" data-key="75"></div>
        <div class="key" data-key="76"></div>
        <div class="key" data-key="59"></div>
        <div class="key" data-key="222"></div>
        <div class="key enter" data-key="13">Enter</div>

      </div>
      <div class="keyboard__row" >
        <div class="key shiftLeft" data-key="16">Shift</div>
        <div class="key " data-key="90"></div>
        <div class="key" data-key="88"></div>
        <div class="key" data-key="67"></div>
        <div class="key" data-key="86"></div>
        <div class="key" data-key="66"></div>
        <div class="key" data-key="78"></div>
        <div class="key" data-key="77"></div>
        <div class="key" data-key="188"></div>
        <div class="key" data-key="190"></div>
        <div class="key" data-key="191"></div>
        <div class="key" data-key="38">▲</div>
        <div class="key shiftRight" data-key="16">Shift</div>
      </div>
      <div class="keyboard__row" >
        <div class="key cntrlLeft" data-key="17">Ctrl</div>
        <div class="key winLeft" data-key="91">Windows</div>
        <div class="key altLeft" data-key="18">Alt</div>
        <div class="key space" data-key="32">Space</div>
        <div class="key altRight" data-key="18">Alt</div>
        <div class="key leftarrow" data-key="37">◄</div>
        <div class="key downArrow" data-key="40">▼</div>
        <div class="key rightArrow" data-key="39">►</div>
        <div class="key cntrlRight" data-key="17">Ctrl</div>
      </div>
    </section>
    <p class="description">переключение языка левые Shift + Alt</p>
  `
addKeyEvents()
}

render()
function getTextarea(){
  return document.querySelector('textarea');
}
function addKeyEvents(){
  const allKeys = document.querySelectorAll('div.key');
  allKeys.forEach(e => {
    e.addEventListener('click', mouseClick);
  });
  window.addEventListener('keydown', keyDown)
  window.addEventListener('keyup', keyUp);
}

function mouseClick(){
console.log(event.target.getAttribute('data-key'));
}

function keyDown(){
  console.log(event.code, event.ctrlKey, event.key, event.which);
  const textarea = getTextarea();
  const key = document.querySelector(`[data-key="${event.which}"]`);
  key.classList.add('active--key');
  if (event.key.length === 1) textarea.value += event.key;
  else {
    console.log('asd')
  }
}

function keyUp(){
  const key = document.querySelector(`[data-key="${event.which}"]`);
  key.classList.remove('active--key');
  console.log(event.code, event.ctrlKey, event.key);

}