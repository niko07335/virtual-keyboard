render();
function render() {
  const main = document.createElement('main');
  document.body.appendChild(main);
  main.innerHTML = `
  <h1 class="title">RSS Виртуальная клавиатура</h1>
    <textarea class="textarea" name="textarea" id="textarea" disabled></textarea>
    <section class="keyboard">
      <div class="keyboard__row-eng">
        <div class="key" data-key="192"><span class='noShift'>\`</span><span class='leftShift noVisible'>~</span></div>
        <div class="key" data-key="49"><span class='noShift'>1</span><span class='leftShift noVisible'>!</span></div>
        <div class="key" data-key="50"><span class='noShift'>2</span><span class='leftShift noVisible'>@</span></div>
        <div class="key" data-key="51"><span class='noShift'>3</span><span class='leftShift noVisible'>#</span></div>
        <div class="key" data-key="52"><span class='noShift'>4</span><span class='leftShift noVisible'>$</span></div>
        <div class="key" data-key="53"><span class='noShift'>5</span><span class='leftShift noVisible'>%</span></div>
        <div class="key" data-key="54"><span class='noShift'>6</span><span class='leftShift noVisible'>^</span></div>
        <div class="key" data-key="55"><span class='noShift'>7</span><span class='leftShift noVisible'>&</span></div>
        <div class="key" data-key="56"><span class='noShift'>8</span><span class='leftShift noVisible'>*</span></div>
        <div class="key" data-key="57"><span class='noShift'>9</span><span class='leftShift noVisible'>(</span></div>
        <div class="key" data-key="48"><span class='noShift'>0</span><span class='leftShift noVisible'>)</span></div>
        <div class="key" data-key="173"><span class='noShift'>-</span><span class='leftShift noVisible'>_</span></div>
        <div class="key" data-key="61"><span class='noShift'>=</span><span class='leftShift noVisible'>+</span></div>
        <div class="key backspace" data-key="8">Backspace</div>
      </div>
      <div class="keyboard__row-ru noVisible">
      <div class="key" data-key="192"><span class='noShift'>ё</span><span class='leftShift noVisible'>Ё</span></div>
      <div class="key" data-key="49"><span class='noShift'>1</span><span class='leftShift noVisible'>!</span></div>
      <div class="key" data-key="50"><span class='noShift'>2</span><span class='leftShift noVisible'>"</span></div>
      <div class="key" data-key="51"><span class='noShift'>3</span><span class='leftShift noVisible'>№</span></div>
      <div class="key" data-key="52"><span class='noShift'>4</span><span class='leftShift noVisible'>;</span></div>
      <div class="key" data-key="53"><span class='noShift'>5</span><span class='leftShift noVisible'>%</span></div>
      <div class="key" data-key="54"><span class='noShift'>6</span><span class='leftShift noVisible'>:</span></div>
      <div class="key" data-key="55"><span class='noShift'>7</span><span class='leftShift noVisible'>?</span></div>
      <div class="key" data-key="56"><span class='noShift'>8</span><span class='leftShift noVisible'>*</span></div>
      <div class="key" data-key="57"><span class='noShift'>9</span><span class='leftShift noVisible'>(</span></div>
      <div class="key" data-key="48"><span class='noShift'>0</span><span class='leftShift noVisible'>)</span></div>
      <div class="key" data-key="173"><span class='noShift'>-</span><span class='leftShift noVisible'>_</span></div>
      <div class="key" data-key="61"><span class='noShift'>=</span><span class='leftShift noVisible'>+</span></div>
      <div class="key backspace" data-key="8">Backspace</div>
    </div>
      <div class="keyboard__row-eng">
        <div class="key tab" data-key="9">Tab</div>
        <div class="key" data-key="81"><span class='noShift'>q</span><span class='leftShift noVisible'>Q</span></div>
        <div class="key" data-key="87"><span class='noShift'>w</span><span class='leftShift noVisible'>W</span></div>
        <div class="key" data-key="69"><span class='noShift'>e</span><span class='leftShift noVisible'>E</span></div>
        <div class="key" data-key="82"><span class='noShift'>r</span><span class='leftShift noVisible'>R</span></div>
        <div class="key" data-key="84"><span class='noShift'>t</span><span class='leftShift noVisible'>T</span></div>
        <div class="key" data-key="89"><span class='noShift'>y</span><span class='leftShift noVisible'>Y</span></div>
        <div class="key" data-key="85"><span class='noShift'>u</span><span class='leftShift noVisible'>U</span></div>
        <div class="key" data-key="73"><span class='noShift'>i</span><span class='leftShift noVisible'>I</span></div>
        <div class="key" data-key="79"><span class='noShift'>o</span><span class='leftShift noVisible'>O</span></div>
        <div class="key" data-key="80"><span class='noShift'>p</span><span class='leftShift noVisible'>P</span></div>
        <div class="key" data-key="219"><span class='noShift'>[</span><span class='leftShift noVisible'>{</span></div>
        <div class="key" data-key="221"><span class='noShift'>]</span><span class='leftShift noVisible'>}</span></div>
        <div class="key" data-key="220"><span class='noShift'>\\</span><span class='leftShift noVisible'>|</span></div>
      </div>
      <div class="keyboard__row-ru noVisible">
      <div class="key tab" data-key="9">Tab</div>
      <div class="key" data-key="81"><span class='noShift'>й</span><span class='leftShift noVisible'>Й</span></div>
      <div class="key" data-key="87"><span class='noShift'>ц</span><span class='leftShift noVisible'>Ц</span></div>
      <div class="key" data-key="69"><span class='noShift'>у</span><span class='leftShift noVisible'>У</span></div>
      <div class="key" data-key="82"><span class='noShift'>к</span><span class='leftShift noVisible'>К</span></div>
      <div class="key" data-key="84"><span class='noShift'>е</span><span class='leftShift noVisible'>Е</span></div>
      <div class="key" data-key="89"><span class='noShift'>н</span><span class='leftShift noVisible'>Н</span></div>
      <div class="key" data-key="85"><span class='noShift'>г</span><span class='leftShift noVisible'>Г</span></div>
      <div class="key" data-key="73"><span class='noShift'>ш</span><span class='leftShift noVisible'>Ш</span></div>
      <div class="key" data-key="79"><span class='noShift'>щ</span><span class='leftShift noVisible'>Щ</span></div>
      <div class="key" data-key="80"><span class='noShift'>з</span><span class='leftShift noVisible'>З</span></div>
      <div class="key" data-key="219"><span class='noShift'>х</span><span class='leftShift noVisible'>Х</span></div>
      <div class="key" data-key="221"><span class='noShift'>ъ</span><span class='leftShift noVisible'>Ъ</span></div>
      <div class="key" data-key="220"><span class='noShift'>\\</span><span class='leftShift noVisible'>/</span></div>
    </div>
      <div class="keyboard__row-eng" >
        <div class="key capsLock" data-key="20" data-caps="0">Caps Lock</div>
        <div class="key" data-key="65"><span class='noShift'>a</span><span class='leftShift noVisible'>A</span></div>
        <div class="key" data-key="83"><span class='noShift'>s</span><span class='leftShift noVisible'>S</span></div>
        <div class="key" data-key="68"><span class='noShift'>d</span><span class='leftShift noVisible'>D</span></div>
        <div class="key" data-key="70"><span class='noShift'>f</span><span class='leftShift noVisible'>F</span></div>
        <div class="key" data-key="71"><span class='noShift'>g</span><span class='leftShift noVisible'>G</span></div>
        <div class="key" data-key="72"><span class='noShift'>h</span><span class='leftShift noVisible'>H</span></div>
        <div class="key" data-key="74"><span class='noShift'>j</span><span class='leftShift noVisible'>J</span></div>
        <div class="key" data-key="75"><span class='noShift'>k</span><span class='leftShift noVisible'>K</span></div>
        <div class="key" data-key="76"><span class='noShift'>l</span><span class='leftShift noVisible'>L</span></div>
        <div class="key" data-key="59"><span class='noShift'>;</span><span class='leftShift noVisible'>:</span></div>
        <div class="key" data-key="222"><span class='noShift'>'</span><span class='leftShift noVisible'>"</span></div>
        <div class="key enter" data-key="13">Enter</div>
      </div>
      <div class="keyboard__row-ru noVisible" >
      <div class="key capsLock" data-key="20" data-caps="0">Caps Lock</div>
      <div class="key" data-key="65"><span class='noShift'>ф</span><span class='leftShift noVisible'>Ф</span></div>
      <div class="key" data-key="83"><span class='noShift'>ы</span><span class='leftShift noVisible'>Ы</span></div>
      <div class="key" data-key="68"><span class='noShift'>в</span><span class='leftShift noVisible'>В</span></div>
      <div class="key" data-key="70"><span class='noShift'>а</span><span class='leftShift noVisible'>А</span></div>
      <div class="key" data-key="71"><span class='noShift'>п</span><span class='leftShift noVisible'>П</span></div>
      <div class="key" data-key="72"><span class='noShift'>р</span><span class='leftShift noVisible'>Р</span></div>
      <div class="key" data-key="74"><span class='noShift'>о</span><span class='leftShift noVisible'>О</span></div>
      <div class="key" data-key="75"><span class='noShift'>л</span><span class='leftShift noVisible'>Л</span></div>
      <div class="key" data-key="76"><span class='noShift'>д</span><span class='leftShift noVisible'>Д</span></div>
      <div class="key" data-key="59"><span class='noShift'>ж</span><span class='leftShift noVisible'>Ж</span></div>
      <div class="key" data-key="222"><span class='noShift'>э</span><span class='leftShift noVisible'>Э</span></div>
      <div class="key enter" data-key="13">Enter</div>
    </div>
      <div class="keyboard__row-eng" >
        <div class="key shiftLeft" data-key="16">Shift</div>
        <div class="key" data-key="90"><span class='noShift'>z</span><span class='leftShift noVisible'>Z</span></div>
        <div class="key" data-key="88"><span class='noShift'>x</span><span class='leftShift noVisible'>X</span></div>
        <div class="key" data-key="67"><span class='noShift'>c</span><span class='leftShift noVisible'>C</span></div>
        <div class="key" data-key="86"><span class='noShift'>v</span><span class='leftShift noVisible'>V</span></div>
        <div class="key" data-key="66"><span class='noShift'>b</span><span class='leftShift noVisible'>B</span></div>
        <div class="key" data-key="78"><span class='noShift'>n</span><span class='leftShift noVisible'>N</span></div>
        <div class="key" data-key="77"><span class='noShift'>m</span><span class='leftShift noVisible'>M</span></div>
        <div class="key" data-key="188"><span class='noShift'>,</span><span class='leftShift noVisible'>\<</span></div>
        <div class="key" data-key="190"><span class='noShift'>.</span><span class='leftShift noVisible'>\></span></div>
        <div class="key" data-key="191"><span class='noShift'>\/</span><span class='leftShift noVisible'>?</span></div>
        <div class="key" data-key="38">▲</div>
        <div class="key shiftRight" data-key="16">Shift</div>
      </div>
      <div class="keyboard__row-ru noVisible" >
      <div class="key shiftLeft" data-key="16">Shift</div>
      <div class="key" data-key="90"><span class='noShift'>я</span><span class='leftShift noVisible'>Я</span></div>
      <div class="key" data-key="88"><span class='noShift'>ч</span><span class='leftShift noVisible'>Ч</span></div>
      <div class="key" data-key="67"><span class='noShift'>с</span><span class='leftShift noVisible'>С</span></div>
      <div class="key" data-key="86"><span class='noShift'>м</span><span class='leftShift noVisible'>М</span></div>
      <div class="key" data-key="66"><span class='noShift'>и</span><span class='leftShift noVisible'>И</span></div>
      <div class="key" data-key="78"><span class='noShift'>т</span><span class='leftShift noVisible'>Т</span></div>
      <div class="key" data-key="77"><span class='noShift'>ь</span><span class='leftShift noVisible'>Ь</span></div>
      <div class="key" data-key="188"><span class='noShift'>б</span><span class='leftShift noVisible'>Б</span></div>
      <div class="key" data-key="190"><span class='noShift'>ю</span><span class='leftShift noVisible'>Ю</span></div>
      <div class="key" data-key="191"><span class='noShift'>.</span><span class='leftShift noVisible'>,</span></div>
      <div class="key" data-key="38">▲</div>
      <div class="key shiftRight" data-key="16">Shift</div>
    </div>
      <div class="keyboard__row">
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

function getTextarea() {
  return document.querySelector('textarea');
}
function addKeyEvents() {
  const allKeys = document.querySelectorAll('div.key');
  allKeys.forEach(e => {
    e.addEventListener('click', mouseClick);
  });
  window.addEventListener('keydown', keyDown)
  window.addEventListener('keyup', keyUp);
}

function mouseClick() {
  console.log('mouse');
}

function keyDown() {
  const shift = document.querySelector('div.shiftLeft');
  if (event.code === 'ShiftLeft' && !shift.classList.contains('active--key')) shiftLeft();
  else if (event.code === 'CapsLock') CapsLock();

  const textarea = getTextarea();
  const key = document.querySelector(`[data-key="${event.which}"]`);
  key.classList.add('active--key');
  if (event.key.length === 1) textarea.value += event.key;
}

function keyUp() {
  const key = document.querySelector(`[data-key="${event.which}"]`);
  const alt = document.querySelector('div.altLeft');
  key.classList.remove('active--key');
  if (event.code === 'ShiftLeft' && alt.classList.contains('active--key')) shiftLeft();
}

function changeLang() {
  const ru = document.querySelectorAll('div.keyboard__row-ru')
  const eng = document.querySelectorAll('div.keyboard__row-eng')
  ru.forEach(e => { e.classList.toggle('noVisible') });
  eng.forEach(e => { e.classList.toggle('noVisible') });
}

function shiftLeft() {
  const noShift = document.querySelectorAll('span.noShift');
  const leftShift = document.querySelectorAll('span.leftShift');
  noShift.forEach(e => { e.classList.toggle('noVisible') });
  leftShift.forEach(e => { e.classList.toggle('noVisible') });
  const alt = document.querySelector('div.altLeft');
  // if (alt.classList.contains('active--key')) changeLang();
};

function CapsLock() {
  const noShift = document.querySelectorAll('span.noShift');
  const leftShift = document.querySelectorAll('span.leftShift');

  noShift.forEach(e => { e.classList.toggle('noVisible') });
  leftShift.forEach(e => { e.classList.toggle('noVisible') });
}
