let currLang = 'eng';
let isCapsOn = false;
let isTrueShift = true;

function Backspace() {
  const textarea = getTextarea();
  textarea.value = textarea.value.substring(0, textarea.value.length - 1)
}

function Enter() {
  const textarea = getTextarea();
  textarea.value += '\r';
}

function Space() {
  const textarea = getTextarea();
  textarea.value += ' ';
}

function Tab() {
  const textarea = getTextarea();
  textarea.value += '\t';
}

function CapsLock() {
  const noShift = document.querySelectorAll('span.noShift');
  const leftShift = document.querySelectorAll('span.leftShift');
  noShift.forEach(e => { if (!e.classList.contains('noCaps')) e.classList.toggle('noVisible') });
  leftShift.forEach(e => { if (!e.classList.contains('noCaps')) e.classList.toggle('noVisible') });
  if (isCapsOn === false) isCapsOn = true
  else isCapsOn = false
}

function keyDown(...args) {
  let which;
  let code;
  let location;
  if (args[1] !== undefined) {
    which = Number(args[0]);
    code = args[1];
    location = args[2];
  }
  else{
    which = event.which;
    code = event.code;
    location = event.location;
  }

  const shift = document.querySelector('div.ShiftLeft');
  const alt = document.querySelector('div.AltLeft');
  const textarea = getTextarea();
  let key = document.querySelector(`[data-key="${which}"]`);
  if (currLang === 'eng' && code.length === 1 || location === 1) key = document.querySelectorAll(`[data-key="${which}"]`)[0];
  else if (currLang === 'ru' && code.length === 1 || location === 2) key = document.querySelectorAll(`[data-key="${which}"]`)[1];
  key.classList.add('active--key');
  if (code === 'ShiftLeft' && alt.classList.contains('active--key')) changeLang();
  else if (code === 'ShiftLeft') shiftLeft();
  else if (code === 'CapsLock') CapsLock();
  else if (code === 'Backspace') Backspace();
  else if (code === 'Space') Space();
  else if (code === 'Enter') Enter();
  else if (code === 'Tab') Tab();
  else {
    if (code.length === 1) {
      let keyValue;
      if (shift.classList.contains('active--key') && !isCapsOn) keyValue = key.querySelector('span.leftShift').innerHTML.toUpperCase();
      else if (!shift.classList.contains('active--key') && isCapsOn) keyValue = key.querySelector('span.noShift').innerHTML.toUpperCase();
      else if (shift.classList.contains('active--key') && isCapsOn) keyValue = key.querySelector('span.leftShift').innerHTML.toLowerCase();
      else keyValue = key.querySelector('span.noShift').innerHTML.toLowerCase();
      textarea.value += keyValue;
    }
  }
}

function keyUp(...args) {
  let which;
  let code;
  let location;
  if (args[1] !== undefined) {
    which = Number(args[0]);
    code = args[1];
    location = args[2];
  }
  else {
    which = event.which;
    code = event.code;
    location = event.location;
  }
  let key = document.querySelector(`[data-key="${which}"]`);
  if (currLang === 'eng' && code.length === 1 || location === 1) key = document.querySelectorAll(`[data-key="${which}"]`)[0];
  else if (currLang === 'ru' && code.length === 1 || location === 2) key = document.querySelectorAll(`[data-key="${which}"]`)[1];
  const alt = document.querySelector('div.AltLeft');
  const shift = document.querySelector('div.ShiftLeft');
  key.classList.remove('active--key');
  if (code === 'ShiftLeft' && !shift.classList.contains('active--key') && !alt.classList.contains('active--key')) {
    shiftLeft();
    isTrueShift = true;
  }
}

function addKeyEvents() {
  const allKeys = document.querySelectorAll('div.key');
  allKeys.forEach(e => { e.addEventListener('click', mouseClick); });
  window.addEventListener('keydown', keyDown)
  window.addEventListener('keyup', keyUp);
}

function render() {
  const main = document.createElement('main');
  document.body.appendChild(main);
  main.innerHTML = `
  <h1 class="title">RSS Виртуальная клавиатура</h1>
    <textarea class="textarea" name="textarea" id="textarea" disabled></textarea>
    <section class="keyboard">
      <div class="keyboard__row-eng">
        <div class="key" data-key="192"><span class='noShift noCaps'>\`</span><span class='leftShift noVisible noCaps'>~</span></div>
        <div class="key" data-key="49"><span class='noShift noCaps'>1</span><span class='leftShift noVisible noCaps'>!</span></div>
        <div class="key" data-key="50"><span class='noShift noCaps'>2</span><span class='leftShift noVisible noCaps'>@</span></div>
        <div class="key" data-key="51"><span class='noShift noCaps'>3</span><span class='leftShift noVisible noCaps'>#</span></div>
        <div class="key" data-key="52"><span class='noShift noCaps'>4</span><span class='leftShift noVisible noCaps'>$</span></div>
        <div class="key" data-key="53"><span class='noShift noCaps'>5</span><span class='leftShift noVisible noCaps'>%</span></div>
        <div class="key" data-key="54"><span class='noShift noCaps'>6</span><span class='leftShift noVisible noCaps'>^</span></div>
        <div class="key" data-key="55"><span class='noShift noCaps'>7</span><span class='leftShift noVisible noCaps'>&</span></div>
        <div class="key" data-key="56"><span class='noShift noCaps'>8</span><span class='leftShift noVisible noCaps'>*</span></div>
        <div class="key" data-key="57"><span class='noShift noCaps'>9</span><span class='leftShift noVisible noCaps'>(</span></div>
        <div class="key" data-key="48"><span class='noShift noCaps'>0</span><span class='leftShift noVisible noCaps'>)</span></div>
        <div class="key" data-key="173"><span class='noShift noCaps'>-</span><span class='leftShift noVisible noCaps'>_</span></div>
        <div class="key" data-key="61"><span class='noShift noCaps'>=</span><span class='leftShift noVisible noCaps'>+</span></div>
        <div class="key Backspace" data-key="8">Backspace</div>
      </div>
      <div class="keyboard__row-ru noVisible">
      <div class="key" data-key="192"><span class='noShift'>ё</span><span class='leftShift noVisible'>Ё</span></div>
      <div class="key" data-key="49"><span class='noShift noCaps'>1</span><span class='leftShift noVisible noCaps'>!</span></div>
      <div class="key" data-key="50"><span class='noShift noCaps'>2</span><span class='leftShift noVisible noCaps'>"</span></div>
      <div class="key" data-key="51"><span class='noShift noCaps'>3</span><span class='leftShift noVisible noCaps'>№</span></div>
      <div class="key" data-key="52"><span class='noShift noCaps'>4</span><span class='leftShift noVisible noCaps'>;</span></div>
      <div class="key" data-key="53"><span class='noShift noCaps'>5</span><span class='leftShift noVisible noCaps'>%</span></div>
      <div class="key" data-key="54"><span class='noShift noCaps'>6</span><span class='leftShift noVisible noCaps'>:</span></div>
      <div class="key" data-key="55"><span class='noShift noCaps'>7</span><span class='leftShift noVisible noCaps'>?</span></div>
      <div class="key" data-key="56"><span class='noShift noCaps'>8</span><span class='leftShift noVisible noCaps'>*</span></div>
      <div class="key" data-key="57"><span class='noShift noCaps'>9</span><span class='leftShift noVisible noCaps'>(</span></div>
      <div class="key" data-key="48"><span class='noShift noCaps'>0</span><span class='leftShift noVisible noCaps'>)</span></div>
      <div class="key" data-key="189"><span class='noShift noCaps'>-</span><span class='leftShift noVisible noCaps'>_</span></div>
      <div class="key" data-key="187"><span class='noShift noCaps'>=</span><span class='leftShift noVisible noCaps'>+</span></div>
      <div class="key Backspace" data-key="8">Backspace</div>
    </div>
      <div class="keyboard__row-eng">
        <div class="key Tab" data-key="9">Tab</div>
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
        <div class="key" data-key="219"><span class='noShift noCaps'>[</span><span class='leftShift noVisible noCaps'>{</span></div>
        <div class="key" data-key="221"><span class='noShift noCaps'>]</span><span class='leftShift noVisible noCaps'>}</span></div>
        <div class="key" data-key="220"><span class='noShift noCaps'>\\</span><span class='leftShift noVisible noCaps'>|</span></div>
      </div>
      <div class="keyboard__row-ru noVisible">
      <div class="key Tab" data-key="9">Tab</div>
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
      <div class="key" data-key="220"><span class='noShift noCaps'>\\</span><span class='leftShift noVisible noCaps'>/</span></div>
    </div>
      <div class="keyboard__row-eng" >
        <div class="key CapsLock" data-key="20" data-caps="0">Caps Lock</div>
        <div class="key" data-key="65"><span class='noShift'>a</span><span class='leftShift noVisible'>A</span></div>
        <div class="key" data-key="83"><span class='noShift'>s</span><span class='leftShift noVisible'>S</span></div>
        <div class="key" data-key="68"><span class='noShift'>d</span><span class='leftShift noVisible'>D</span></div>
        <div class="key" data-key="70"><span class='noShift'>f</span><span class='leftShift noVisible'>F</span></div>
        <div class="key" data-key="71"><span class='noShift'>g</span><span class='leftShift noVisible'>G</span></div>
        <div class="key" data-key="72"><span class='noShift'>h</span><span class='leftShift noVisible'>H</span></div>
        <div class="key" data-key="74"><span class='noShift'>j</span><span class='leftShift noVisible'>J</span></div>
        <div class="key" data-key="75"><span class='noShift'>k</span><span class='leftShift noVisible'>K</span></div>
        <div class="key" data-key="76"><span class='noShift'>l</span><span class='leftShift noVisible'>L</span></div>
        <div class="key" data-key="59"><span class='noShift noCaps'>;</span><span class='leftShift noVisible noCaps'>:</span></div>
        <div class="key" data-key="222"><span class='noShift noCaps'>'</span><span class='leftShift noVisible noCaps'>"</span></div>
        <div class="key Enter" data-key="13">Enter</div>
      </div>
      <div class="keyboard__row-ru noVisible" >
      <div class="key CapsLock" data-key="20" data-caps="0">Caps Lock</div>
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
      <div class="key Enter" data-key="13">Enter</div>
    </div>
      <div class="keyboard__row-eng" >
        <div class="key ShiftLeft" data-key="16">Shift</div>
        <div class="key" data-key="90"><span class='noShift'>z</span><span class='leftShift noVisible'>Z</span></div>
        <div class="key" data-key="88"><span class='noShift'>x</span><span class='leftShift noVisible'>X</span></div>
        <div class="key" data-key="67"><span class='noShift'>c</span><span class='leftShift noVisible'>C</span></div>
        <div class="key" data-key="86"><span class='noShift'>v</span><span class='leftShift noVisible'>V</span></div>
        <div class="key" data-key="66"><span class='noShift'>b</span><span class='leftShift noVisible'>B</span></div>
        <div class="key" data-key="78"><span class='noShift'>n</span><span class='leftShift noVisible'>N</span></div>
        <div class="key" data-key="77"><span class='noShift'>m</span><span class='leftShift noVisible'>M</span></div>
        <div class="key" data-key="188"><span class='noShift noCaps'>,</span><span class='leftShift noVisible noCaps'>\<</span></div>
        <div class="key" data-key="190"><span class='noShift noCaps'>.</span><span class='leftShift noVisible noCaps'>\></span></div>
        <div class="key" data-key="191"><span class='noShift noCaps'>\/</span><span class='leftShift noVisible noCaps'>?</span></div>
        <div class="key" data-key="38">▲</div>
        <div class="key ShiftRight" data-key="16">Shift</div>
      </div>
      <div class="keyboard__row-ru noVisible" >
      <div class="key ShiftLeft" data-key="16">Shift</div>
      <div class="key" data-key="90"><span class='noShift'>я</span><span class='leftShift noVisible'>Я</span></div>
      <div class="key" data-key="88"><span class='noShift'>ч</span><span class='leftShift noVisible'>Ч</span></div>
      <div class="key" data-key="67"><span class='noShift'>с</span><span class='leftShift noVisible'>С</span></div>
      <div class="key" data-key="86"><span class='noShift'>м</span><span class='leftShift noVisible'>М</span></div>
      <div class="key" data-key="66"><span class='noShift'>и</span><span class='leftShift noVisible'>И</span></div>
      <div class="key" data-key="78"><span class='noShift'>т</span><span class='leftShift noVisible'>Т</span></div>
      <div class="key" data-key="77"><span class='noShift'>ь</span><span class='leftShift noVisible'>Ь</span></div>
      <div class="key" data-key="188"><span class='noShift'>б</span><span class='leftShift noVisible'>Б</span></div>
      <div class="key" data-key="190"><span class='noShift'>ю</span><span class='leftShift noVisible'>Ю</span></div>
      <div class="key" data-key="191"><span class='noShift noCaps'>.</span><span class='leftShift noVisible noCaps'>,</span></div>
      <div class="key" data-key="38">▲</div>
      <div class="key ShiftRight" data-key="16">Shift</div>
    </div>
      <div class="keyboard__row">
        <div class="key CntrlLeft" data-key="17">Ctrl</div>
        <div class="key WinLeft" data-key="91">Windows</div>
        <div class="key AltLeft" data-key="18">Alt</div>
        <div class="key Space" data-key="32">Space</div>
        <div class="key AltRight" data-key="18">Alt</div>
        <div class="key leftArrow" data-key="37">◄</div>
        <div class="key downArrow" data-key="40">▼</div>
        <div class="key rightArrow" data-key="39">►</div>
        <div class="key CntrlRight" data-key="17">Ctrl</div>
      </div>
    </section>
    <p class="description">переключение языка левые Shift + Alt</p>
  `
  addKeyEvents()
}
render();

function getTextarea() {
  return document.querySelector('textarea');
}

function mouseClick() {
  let key = event.target;
  let value = event.target.firstChild.innerHTML;
  let location = 0;
  if (event.target.nodeName === "SPAN") {
    value = event.target.innerHTML
    key = event.target.parentElement;
  }
  else if (event.target.firstElementChild === null) {
    value = event.target.innerHTML;
    location = 1;
  }
  if (key.classList[1]) value = key.classList[1]
  const attr = key.getAttribute('data-key');
  if (value == 'ShiftRight' || value == 'AltRight' || value == 'CntrlRight') location = 2;

  console.log(attr, value, location);
  keyDown(attr, value, location);
  // keyUp(attr, value, location);
  setTimeout(keyUp, 10, attr, value, location)
}

function changeLang() {
  if (event.repeat) return;
  else {
    const ruKeys = document.querySelectorAll('div.keyboard__row-ru')
    const engKeys = document.querySelectorAll('div.keyboard__row-eng')
    ruKeys.forEach(e => { e.classList.toggle('noVisible') });
    engKeys.forEach(e => { e.classList.toggle('noVisible') });
    if (currLang === 'eng') currLang = 'ru';
    else currLang = 'eng';
    isTrueShift = false
  }
}

function shiftLeft() {
  if (!event.repeat && isTrueShift) {
    const noShift = document.querySelectorAll('span.noShift');
    const leftShift = document.querySelectorAll('span.leftShift');
    noShift.forEach(e => { e.classList.toggle('noVisible') });
    leftShift.forEach(e => { e.classList.toggle('noVisible') });
  }
};

