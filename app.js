'use strict';

let activeScheduleIndex = 1;

function esc(text){
  return String(text)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;');
}

function keepNames(text){
  let out = esc(text);

  const phrases = [
    'Red Bull BC ONE',
    'Chill C',
    'UMI RAMi',
    'Lu-La',
    'wreath',
    'UL mio',
    'Yuna-X',
    'PB2 Vol.62',
    'MOB PARTY',
    'Realize',
    'Portal',
    'Syuri',
    'T-Pablow',
    "BREAKIN' Session",
    'Wonder UNITY',
    "BREAKIN' CUP"
  ];

  phrases.forEach(phrase => {
    const safe = esc(phrase);
    const fixed = safe.replaceAll(' ', '&nbsp;').replaceAll('-', '&#8209;');
    out = out.replaceAll(safe, `<span class="noBreak">${fixed}</span>`);
  });

  return out;
}

function renderScheduleTabs(){
  const tabs = document.getElementById('scheduleTabs');
  if(!tabs) return;

  tabs.innerHTML = SCHEDULE_MONTHS.map((month, index) => `
    <button class="scheduleTab ${index === activeScheduleIndex ? 'active' : ''}" type="button" data-schedule-index="${index}">
      ${keepNames(month.tab)}
    </button>
  `).join('');

  tabs.querySelectorAll('.scheduleTab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeScheduleIndex = Number(btn.dataset.scheduleIndex);
      renderScheduleTabs();
      renderSchedulePanel();
    });
  });
}

function renderSchedulePanel(){
  const root = document.getElementById('schedulePanel');
  if(!root) return;

  const month = SCHEDULE_MONTHS[activeScheduleIndex];

  root.innerHTML = `
    <div class="monthTitle">${keepNames(month.monthTitle)}</div>
    <div class="closedNotice">${keepNames(month.closedNotice)}</div>
    <div class="scheduleList">
      ${month.days.map(day => {
        const cls = day.type === 'closed' ? 'dayCard closedCard' : day.type === 'w' ? 'dayCard wCard' : 'dayCard';
        return `
          <div class="${cls}">
            <div class="dayLabel">${keepNames(day.day)}</div>
            <div class="lessonBox">
              ${day.lessons.map(item => `
                <div class="lessonItem">
                  <span class="time">${keepNames(item[0])}</span>
                  <span class="name">${keepNames(item[1])}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderEvents(){
  const root = document.getElementById('eventList');
  if(!root) return;

  root.innerHTML = EVENT_DATA.map(event => {
    const cls = event[3] === 'w' ? 'dayCard wCard' : 'dayCard';
    return `
      <div class="${cls}">
        <div class="dayLabel">${keepNames(event[0])}</div>
        <div class="lessonBox">
          <div class="lessonItem">
            <span class="name">${keepNames(event[1])}</span>
            <p>${keepNames(event[2])}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderWNews(){
  const root = document.getElementById('wNewsList');
  if(!root) return;

  root.innerHTML = W_NEWS_DATA.map(item => `
    <div class="newsItem">
      <div class="newsHead">${keepNames(item.title)}</div>
      <div class="newsBody">
        ${item.body.map(p => `<p>${keepNames(p)}</p>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderGuide(){
  const root = document.getElementById('lessonGuide');
  if(!root) return;

  root.innerHTML = LESSON_GUIDE_DATA.map(item => `
    <details class="guideBox ${item.className}">
      <summary>${keepNames(item.title)}</summary>
      <div class="guideContent">${item.html}</div>
    </details>
  `).join('');
}

function renderReports(){
  const root = document.getElementById('reportGrid');
  if(!root) return;

  root.innerHTML = REPORT_DATA.map(item => `
    <details class="reportMonth ${item[0]}">
      <summary>${keepNames(item[1])}</summary>
      <div class="reportBody">
        ${item[2].map(p => `<p>${p}</p>`).join('')}
      </div>
    </details>
  `).join('');
}

function renderMusic(){
  const root = document.getElementById('musicBlocks');
  if(!root) return;

  root.innerHTML = MUSIC_GROUPS.map(group => `
    <details class="musicBlock ${group.className}">
      <summary>${keepNames(group.title)} <span>(${group.songs.length}曲)</span></summary>
      <div class="musicBody">
        ${group.songs.map(song => `
          <div class="song">
            <h3>${keepNames(song[0])}</h3>
            <p>${keepNames(song[2])}</p>
            <a href="${esc(song[1])}" target="_blank" rel="noopener">YouTubeで聴く</a>
          </div>
        `).join('')}
      </div>
    </details>
  `).join('');
}

function setupFade(){
  const items = document.querySelectorAll('.fade');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  }, { threshold:0.14 });

  items.forEach(item => observer.observe(item));
}

renderScheduleTabs();
renderSchedulePanel();
renderEvents();
renderWNews();
renderGuide();
renderReports();
renderMusic();
setupFade();
