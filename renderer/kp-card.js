/**
 * KP Card Renderer — 将结构化知识点数据渲染为 HTML 卡片
 * 
 * 用法：
 *   renderKP(knowledgePoint) → HTML string
 *   renderKPSections(sections) → HTML string
 */

function renderKP(kp) {
  return `
    <div class="slide-card kp-card" id="kp-${kp.id}">
      <div class="kicker">${kp.subject} · ${kp.chapter}</div>
      <h2>${kp.title}</h2>
      ${kp.tags ? `<div class="kp-tags">${kp.tags.map(t => `<span class="kp-tag">${t}</span>`).join('')}</div>` : ''}
      ${renderKPSections(kp.sections)}
      ${kp.related && kp.related.length ? `
        <div class="kp-related">
          <div class="kp-related-title">🔗 关联知识点</div>
          <div class="kp-related-list">${kp.related.map(id => `<span class="pill" onclick="scrollToKP('${id}')">${id}</span>`).join('')}</div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderKPSections(sections) {
  return sections.map(s => renderSection(s)).join('\n');
}

function renderSection(s) {
  switch (s.type) {
    case 'definition':
      return `<div class="kp-section kp-definition"><div class="kp-label">📖 定义</div><div class="kp-content">${renderText(s.content)}</div></div>`;
    
    case 'key-points':
      return `
        <div class="kp-section kp-keypoints">
          <div class="kp-label">📌 要点</div>
          <ul>${s.items.map(i => `<li>${renderText(i)}</li>`).join('')}</ul>
        </div>`;
    
    case 'code':
      return `
        <div class="kp-section">
          <div class="kp-label">💻 ${s.lang || '代码'}</div>
          <pre class="kp-code"><code class="lang-${s.lang || ''}">${escapeHtml(s.content)}</code></pre>
        </div>`;
    
    case 'comparison':
      return `
        <div class="kp-section">
          <div class="kp-label">📊 对比</div>
          <div class="table-scroll"><table class="kp-table">
            <tr>${s.headers.map(h => `<th>${h}</th>`).join('')}</tr>
            ${s.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}
          </table></div>
        </div>`;
    
    case 'tip':
      return `<div class="kp-section kp-tip"><span class="tip-icon">💡</span> ${renderText(s.content)}</div>`;
    
    case 'pitfall':
      return `<div class="kp-section kp-pitfall"><span class="tip-icon">⚠️</span> ${renderText(s.content)}</div>`;
    
    case 'example':
      return `
        <div class="kp-section kp-example">
          <div class="kp-label">📝 例题</div>
          <div class="kp-example-q"><strong>题目：</strong>${renderText(s.question)}</div>
          ${s.answer ? `<div class="kp-example-a" onclick="this.classList.toggle('show')"><strong>答案：</strong><span class="kp-answer-hidden">点击显示</span><span class="kp-answer-text">${renderText(s.answer)}</span></div>` : ''}
          ${s.solution ? `<div class="kp-example-s">${renderText(s.solution)}</div>` : ''}
        </div>`;
    
    case 'formula':
      return `<div class="kp-section kp-formula">${renderText(s.content)}</div>`;
    
    case 'memory-tip':
      return `<div class="kp-section kp-memory"><span class="tip-icon">🧠</span> ${renderText(s.content)}</div>`;
    
    case 'timeline':
      return `
        <div class="kp-section kp-timeline">
          ${s.steps.map((step, i) => `
            <div class="tl-step">
              <div class="tl-dot"></div>
              <div class="tl-text">${renderText(step)}</div>
            </div>
          `).join('<div class="tl-line"></div>')}
        </div>`;
    
    case 'note':
      return `<div class="kp-section kp-note">${renderText(s.content)}</div>`;
    
    default:
      return `<div class="kp-section">${renderText(s.content || '')}</div>`;
  }
}

function renderText(text) {
  if (!text) return '';
  // 支持 MathJax 公式 $...$
  return text;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 滚动到指定知识点（通过关联跳转）
function scrollToKP(id) {
  const el = document.getElementById('kp-' + id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
