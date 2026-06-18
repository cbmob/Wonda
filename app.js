'use strict';

function esc(text){
  return String(text)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;');
}

function renderSchedule(){
  const root = document.getElementById('scheduleList');
  if(!root) return;

  root.innerHTML = SCHEDULE_DATA.map(day => {
    const cls = day.type === 'closed' ? 'dayCard closedCard' : day.type === 'w' ? 'dayCard wCard' : 'dayCard';
    return `
      <div class="${cls}">
        <div class="dayLabel">${esc(day.day)}</div>
        <div class="lessonBox">
          ${day.lessons.map(item => `
            <div class="lessonItem">
              <span class="time">${esc(item[0])}</span>
              <span class="name">${esc(item[1])}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderEvents(){
  const root = document.getElementById('eventList');
  if(!root) return;

  root.innerHTML = EVENT_DATA.map(event => {
    const cls = event[3] === 'w' ? 'dayCard wCard' : 'dayCard';
    return `
      <div class="${cls}">
        <div class="dayLabel">${esc(event[0])}</div>
        <div class="lessonBox">
          <div class="lessonItem">
            <span class="name">${esc(event[1])}</span>
            <p>${esc(event[2])}</p>
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
      <div class="newsHead">${esc(item.title)}</div>
      <div class="newsBody">
        ${item.body.map(p => `<p>${esc(p)}</p>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderGuide(){
  const root = document.getElementById('lessonGuide');
  if(!root) return;

  root.innerHTML = LESSON_GUIDE_DATA.map(item => `
    <details class="guideBox ${item.className}">
      <summary>${esc(item.title)}</summary>
      <div class="guideContent">${item.html}</div>
    </details>
  `).join('');
}

function renderReports(){
  const root = document.getElementById('reportGrid');
  if(!root) return;

  root.innerHTML = REPORT_DATA.map(item => `
    <details class="reportMonth ${item[0]}">
      <summary>${esc(item[1])}</summary>
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
      <summary>${esc(group.title)} <span>(${group.songs.length}曲)</span></summary>
      <div class="musicBody">
        ${group.songs.map(song => `
          <div class="song">
            <h3>${esc(song[0])}</h3>
            <p>${esc(song[2])}</p>
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

renderSchedule();
renderEvents();
renderWNews();
renderGuide();
renderReports();
renderMusic();
setupFade();
