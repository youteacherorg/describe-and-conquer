// UI rendering helpers
window.UI = {
  render(html) {
    document.getElementById('app').innerHTML = html;
  },

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('toast-show'), 10);
    setTimeout(() => {
      toast.classList.remove('toast-show');
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  },

  showConfirmModal(options) {
    const { title, subtitle, confirmText, cancelText, onConfirm, onCancel, dangerMode = false } = options;

    const modalId = 'confirm-modal-' + Math.random().toString(36).substr(2, 9);

    const confirmClass = dangerMode ? 'btn-danger' : 'btn-primary';
    const cancelClass = 'btn-secondary';

    const modalHtml = `
      <div id="${modalId}" class="modal-overlay">
        <div class="modal-content">
          <h2 class="modal-title">${title}</h2>
          ${subtitle ? `<p class="modal-subtitle">${subtitle}</p>` : ''}
          <div class="modal-buttons">
            <button id="${modalId}-confirm" class="${confirmClass}">${confirmText}</button>
            <button id="${modalId}-cancel" class="${cancelClass}">${cancelText}</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    const confirmBtn = document.getElementById(`${modalId}-confirm`);
    const cancelBtn = document.getElementById(`${modalId}-cancel`);

    const closeModal = () => {
      modal.classList.remove('modal-show');
      setTimeout(() => modal.remove(), 300);
    };

    confirmBtn.onclick = () => {
      closeModal();
      if (onConfirm) onConfirm();
    };

    cancelBtn.onclick = () => {
      closeModal();
      if (onCancel) onCancel();
    };

    modal.onclick = (e) => {
      if (e.target === modal) {
        closeModal();
        if (onCancel) onCancel();
      }
    };

    setTimeout(() => {
      modal.classList.add('modal-show');
      modalContent.classList.add('modal-shake');
      setTimeout(() => modalContent.classList.remove('modal-shake'), 500);
    }, 10);
  },

  button(text, onClick, className = 'btn-primary', disabled = false) {
    const id = 'btn_' + Math.random().toString(36).substr(2, 9);
    setTimeout(() => {
      const btn = document.getElementById(id);
      if (btn && !disabled && onClick) {
        btn.onclick = onClick;
      }
    }, 0);

    const disabledClass = disabled ? ' btn-disabled' : '';
    const disabledAttr = disabled ? ' disabled' : '';
    return `<button id="${id}" class="${className}${disabledClass}"${disabledAttr}>${text}</button>`;
  },

  screen(content) {
    return `<div class="screen">${content}</div>`;
  },

  formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  },
  
  addBrandingBadge() {
    // Do not render badge in PUBLIC mode
    if (typeof PUBLIC_MODE !== 'undefined' && PUBLIC_MODE) {
      return;
    }
    
    // Remove any existing badge first
    const existing = document.querySelector('.youteacher-brand');
    if (existing) existing.remove();
    
    // Add branding badge
    const badge = document.createElement('a');
    badge.className = 'youteacher-brand';
    badge.href = 'https://discord.gg/sHcsD8WsgC';
    badge.target = '_blank';
    badge.title = 'Get more free resources on YouTeacher Discord!';
    badge.innerHTML = `
      <img src="./yt_icon.png" alt="YT">
      <span>YouTeacher • Join Discord for more!</span>
    `;
    document.body.appendChild(badge);
  },

  renderHome() {
    // Copyright section changes based on mode
    let copyrightSection = '';
    if (PUBLIC_MODE) {
      // PUBLIC mode: minimal copyright, no links, no CTAs
      copyrightSection = `
      <div class="copyright-notice">
        © 2026 YouTeacher.org<br>
        Free educational game
      </div>`;
    } else {
      // CTA mode: full messaging with Discord links
      copyrightSection = `
      <div class="copyright-notice">
        © 2026 <a href="https://youteacher.org" target="_blank">YouTeacher.org</a> / Swagmat Ltd.<br>
        Created for the ESL teaching community.<br>
        <strong>100% FREE - Please share with other teachers!</strong><br>
        📚 Get more free resources in our Discord #teacher-resources channel!<br>
        <a href="https://discord.gg/sHcsD8WsgC" target="_blank" style="color: #7289da; font-weight: bold;">Join YouTeacher Discord →</a>
      </div>`;
    }
    
    const content = `
      <img src="./youteacher_logo.svg" alt="YouTeacher" class="home-logo">
      <h1>Describe & Conquer</h1>
      <h2 style="font-size: 28px; color: #7f8c8d; margin-top: -20px;">描述与征服</h2>
      <div class="button-group">
        ${this.button('Start', () => GAME.startRound())}
        ${this.button('Options', () => GAME.openOptions(), 'btn-secondary')}
      </div>
      ${copyrightSection}
    `;
    this.render(this.screen(content));
    
    // Add persistent branding badge
    this.addBrandingBadge();
  },

  renderOptions() {
    const showTeamCreator = window.GameState.gameMode !== 'individual';

    const teamCreatorHtml = showTeamCreator ? window.GameState.teams.map(team => `
      <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 15px;">
        <div style="display: flex; align-items: center; gap: 15px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 150px;">
            <label style="display: block; margin-bottom: 5px; color: #555; font-size: 14px;">Adjective</label>
            <select id="adj-${team.id}"
                    onchange="updateTeam(${team.id}, 'adjective', this.value)"
                    style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; background: white; cursor: pointer;">
              ${window.TEAM_ADJECTIVES.map(adj =>
                `<option value="${adj}" ${team.adjective === adj ? 'selected' : ''}>${adj}</option>`
              ).join('')}
            </select>
          </div>

          <div style="flex: 1; min-width: 150px;">
            <label style="display: block; margin-bottom: 5px; color: #555; font-size: 14px;">Animal</label>
            <select id="animal-${team.id}"
                    onchange="updateTeam(${team.id}, 'animal', this.value)"
                    style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; background: white; cursor: pointer;">
              ${window.TEAM_ANIMALS.map(animal =>
                `<option value="${animal}" ${team.animal === animal ? 'selected' : ''}>${animal}</option>`
              ).join('')}
            </select>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <button onclick="randomizeTeam(${team.id})"
                    class="btn-secondary"
                    style="padding: 10px 20px; white-space: nowrap;">
              🎲 Randomize
            </button>
            <div id="preview-${team.id}" style="font-size: 18px; font-weight: bold; color: #2c3e50; text-align: center;">
              ${team.name}
            </div>
          </div>
        </div>
      </div>
    `).join('') : '';

    const content = `
      <div class="stage-container">
        <h2>Options — Team Setup</h2>

        <div style="margin: 30px 0;">
          <label style="display: block; margin-bottom: 10px; font-size: 18px; font-weight: bold; color: #2c3e50;">Game Mode</label>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            ${this.button('Individual', () => setGameMode('individual'), window.GameState.gameMode === 'individual' ? 'btn-primary' : 'btn-secondary')}
            ${this.button('Teams of 2', () => setGameMode('teams2'), window.GameState.gameMode === 'teams2' ? 'btn-primary' : 'btn-secondary')}
            ${this.button('Teams of 3', () => setGameMode('teams3'), window.GameState.gameMode === 'teams3' ? 'btn-primary' : 'btn-secondary')}
            ${this.button('Teams of 4', () => setGameMode('teams4'), window.GameState.gameMode === 'teams4' ? 'btn-primary' : 'btn-secondary')}
          </div>
        </div>

        ${showTeamCreator ? `
          <div style="margin: 30px 0;">
            <h3 style="margin-bottom: 20px; color: #2c3e50;">Team Creator</h3>
            ${teamCreatorHtml}
          </div>
        ` : ''}

        <div class="stage-footer">
          ${this.button('Save & Back', () => GAME.saveTeams(), 'btn-secondary')}
          ${this.button('Start Game', () => GAME.startGame(), 'btn-primary')}
        </div>
      </div>
    `;
    this.render(content);
  },

  renderStage1() {
    const topic = window.TOPICS[window.GameState.topicIndex];
    const totalMs = window.GameState.elapsedMs + window.GameState.penaltiesMs;
    const timeDisplay = this.formatTime(totalMs);

    const currentTeam = window.GameState.teams[window.GameState.turnIndex];
    const teamHeader = currentTeam ? `
      <div class="team-badge" style="background: ${currentTeam.color?.bg || '#f0f0f0'};
           color: ${currentTeam.color?.text || '#2c3e50'};
           padding: 12px 24px;
           border-radius: 12px;
           display: inline-flex;
           align-items: center;
           gap: 12px;
           margin-bottom: 15px;
           box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <img src="${currentTeam.icon}"
             alt="${currentTeam.animal}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"
             style="width: 40px; height: 40px; object-fit: contain;">
        <span style="font-size: 28px; display: none;">${currentTeam.emoji}</span>
        <span style="font-size: 22px; font-weight: bold;">${currentTeam.name}</span>
      </div>
    ` : '';

    const cardsHtml = window.GameState.stage1Deck.map(item => {
      const isSelected = window.GameState.selectedCorrect.has(item.word);
      const classes = ['card'];
      if (isSelected && item.correct) classes.push('card--correct');

      const disabled = isSelected && item.correct ? 'disabled' : '';
      const onclick = (isSelected && item.correct) ? '' : `onclick="applyAdjectiveChoice('${item.word}')"`;

      return `<button class="${classes.join(' ')}" ${onclick} ${disabled}>${item.word}</button>`;
    }).join('');

    const content = `
      <div class="stage-container">
        <div class="timer"><span id="timer">${timeDisplay}</span></div>
        ${teamHeader}
        <h2>TOPIC: ${topic.topic}</h2>
        <p style="margin-bottom: 20px; color: #555;">Select 5 adjectives that describe the topic</p>
        <div class="card-grid">${cardsHtml}</div>
        <div class="stage-footer">
          ${this.button('Back', () => GAME.goHome(), 'btn-secondary')}
        </div>
      </div>
    `;
    this.render(content);
    this.addBrandingBadge();
  },

  renderStage2() {
    const topic = window.TOPICS[window.GameState.topicIndex];
    const totalMs = window.GameState.elapsedMs + window.GameState.penaltiesMs;
    const timeDisplay = this.formatTime(totalMs);
    const penaltySeconds = Math.floor(window.GameState.penaltiesMs / 1000);

    const currentTeam = window.GameState.teams[window.GameState.turnIndex];
    const teamHeader = currentTeam ? `
      <div class="team-badge" style="background: ${currentTeam.color?.bg || '#f0f0f0'};
           color: ${currentTeam.color?.text || '#2c3e50'};
           padding: 12px 24px;
           border-radius: 12px;
           display: inline-flex;
           align-items: center;
           gap: 12px;
           margin-bottom: 15px;
           box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <img src="${currentTeam.icon}"
             alt="${currentTeam.animal}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"
             style="width: 40px; height: 40px; object-fit: contain;">
        <span style="font-size: 28px; display: none;">${currentTeam.emoji}</span>
        <span style="font-size: 22px; font-weight: bold;">${currentTeam.name}</span>
      </div>
    ` : '';

    const sentencesHtml = window.GameState.sentenceOrder.map((sentenceIdx, displayIdx) => {
      const sentence = topic.sentences[sentenceIdx];
      const label = topic.sentenceLabels?.[sentenceIdx] || '';
      const hintHtml = window.GameState.showHint ? `<span class="hint-badge">${label}</span>` : '';

      // Check if this sentence is tapped
      const tappedPosition = window.GameState.tappedIndices.indexOf(displayIdx);
      const isTapped = tappedPosition !== -1;
      const tapBadge = isTapped ? `<span class="tap-badge">${tappedPosition + 1}</span>` : '';

      return `
        <div class="sentence-card ${isTapped ? 'sentence-card--tapped' : ''}"
             onclick="tapSentence(${displayIdx})">
          ${tapBadge}
          <span class="sentence-text">${sentence}</span>
          ${hintHtml}
        </div>
      `;
    }).join('');

    const hintButtonText = window.GameState.showHint ? 'Hide Hint' : 'Show Hint';
    const hintDisabled = !window.GameState.hintUnlocked;

    const content = `
      <div class="stage-container">
        <div class="timer"><span id="timer">${timeDisplay}</span></div>
        <div class="penalty-display">Penalties: +${penaltySeconds}s</div>
        ${teamHeader}
        <h2>Stage 2 — Sentence Order</h2>
        <p style="margin-bottom: 20px; color: #555;">Tap sentences in order (1→4)</p>
        <div class="sentence-list" id="sentenceList">${sentencesHtml}</div>
        <div class="stage-footer">
          ${this.button('Check Order', () => checkSentenceOrder(), 'btn-primary')}
          ${this.button('Undo Last', () => undoLastTap(), 'btn-secondary')}
          ${this.button('Clear', () => clearAllTaps(), 'btn-secondary')}
          ${this.button(hintButtonText, () => toggleHint(), 'btn-secondary', hintDisabled)}
          ${this.button('Back', () => GAME.goHome(), 'btn-secondary')}
        </div>
      </div>
    `;
    this.render(content);
  },

  shakeSentences() {
    setTimeout(() => {
      const list = document.getElementById('sentenceList');
      if (list) {
        list.classList.add('shake');
        setTimeout(() => list.classList.remove('shake'), 500);
      }
    }, 0);
  },

  renderScore() {
    const rawMs = window.GameState.elapsedMs;
    const penaltyMs = window.GameState.penaltiesMs;
    const finalMs = getFinalMs();

    const rawTime = this.formatTime(rawMs);
    const penaltySeconds = Math.floor(penaltyMs / 1000);
    const finalTime = this.formatTime(finalMs);

    const currentTeam = window.GameState.teams[window.GameState.turnIndex];
    const teamHeader = currentTeam ? `
      <div class="team-badge" style="background: ${currentTeam.color?.bg || '#f0f0f0'};
           color: ${currentTeam.color?.text || '#2c3e50'};
           padding: 12px 24px;
           border-radius: 12px;
           display: inline-flex;
           align-items: center;
           gap: 12px;
           margin-bottom: 15px;
           box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <img src="${currentTeam.icon}"
             alt="${currentTeam.animal}"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"
             style="width: 40px; height: 40px; object-fit: contain;">
        <span style="font-size: 28px; display: none;">${currentTeam.emoji}</span>
        <span style="font-size: 22px; font-weight: bold;">${currentTeam.name}</span>
      </div>
    ` : '';

    let status, statusColor;
    if (window.GameState.roundSuccess) {
      status = 'Success ✓';
      statusColor = '#27ae60';
    } else if (window.GameState.roundTimedOut) {
      status = 'Time up';
      statusColor = '#e67e22';
    } else {
      status = 'Failed at Stage 1';
      statusColor = '#e74c3c';
    }

    const showTeamButtons = window.GameState.teams.length > 0;

    const content = `
      <h2>Round Complete</h2>
      ${teamHeader}
      <div style="margin: 30px 0; padding: 20px; background: white; border-radius: 12px;">
        <p style="font-size: 32px; font-weight: bold; color: ${statusColor}; margin-bottom: 20px;">${status}</p>
        <p style="font-size: 24px; color: #2c3e50; margin: 10px 0;">Raw Time: ${rawTime}</p>
        <p style="font-size: 24px; color: #e74c3c; margin: 10px 0;">Penalties: +${penaltySeconds}s</p>
        <p style="font-size: 32px; font-weight: bold; color: #2c3e50; margin-top: 20px; padding-top: 20px; border-top: 2px solid #ddd;">Final Time: ${finalTime}</p>
        <p style="font-size: 18px; color: #95a5a6; margin-top: 10px;">Wrong Guesses: ${window.GameState.wrongCount}</p>
      </div>
      <div class="button-group">
        ${this.button('Review this round', () => GAME.startReview())}
        ${showTeamButtons ? this.button('Next Team', () => nextTeam(), 'btn-primary') : this.button('Start Next Round', () => GAME.startNextRound())}
        ${showTeamButtons ? this.button('End Game', () => confirmEndGame(), 'btn-secondary') : ''}
        ${this.button('Back to Home', () => GAME.goHome(), 'btn-secondary')}
      </div>
    `;
    this.render(this.screen(content));
  },

  renderReviewStage1() {
    const selectedCount = window.GameState.reviewSelected.size;

    const cardsHtml = window.GameState.stage1Deck.map(item => {
      const isSelected = window.GameState.reviewSelected.has(item.word);
      const classes = ['card'];
      if (isSelected) classes.push('card--correct');

      const onclick = `onclick="applyReviewChoice('${item.word}')"`;

      return `<button class="${classes.join(' ')}" ${onclick}>${item.word}</button>`;
    }).join('');

    const continueDisabled = selectedCount === 0;

    const content = `
      <div class="stage-container">
        <h2>Review — Step 1: Select Adjectives</h2>
        <p style="margin-bottom: 10px; color: #555;">Select any adjectives you want to review (${selectedCount} selected)</p>
        <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">${cardsHtml}</div>
        <div class="stage-footer">
          ${this.button('Continue to Pronunciation', () => GAME.startPronunciation(), 'btn-primary', continueDisabled)}
          <a href="#" onclick="event.preventDefault(); GAME.skipReview();" style="margin-left: 20px; color: #3498db; text-decoration: underline; font-size: 14px;">Skip Review</a>
        </div>
      </div>
    `;
    this.render(content);
  },

  renderPronunciation() {
    const wordObj = window.GameState.reviewWords[window.GameState.reviewWordIndex];
    const currentNum = window.GameState.reviewWordIndex + 1;
    const totalNum = window.GameState.reviewWords.length;
    const isFirst = window.GameState.reviewWordIndex === 0;
    const isLast = window.GameState.reviewWordIndex === window.GameState.reviewWords.length - 1;

    const content = `
      <div class="stage-container">
        <h2>Review — Step 2: Pronunciation</h2>
        <p style="margin-bottom: 20px; color: #555;">Word ${currentNum} of ${totalNum}</p>

        <div style="text-align: center; padding: 40px 20px;">
          <div style="font-size: 48px; font-weight: bold; color: #2c3e50; margin-bottom: 20px;">
            ${wordObj.word}
          </div>

          <div style="font-size: 20px; color: #7f8c8d; margin-bottom: 10px;">
            ${wordObj.ipa || ''}
          </div>

          <div style="font-size: 18px; color: #95a5a6; margin-bottom: 30px;">
            ${wordObj.stress || ''}
          </div>

          <div style="font-size: 32px; color: #34495e; margin-bottom: 10px;">
            ${wordObj.chinese || ''}
          </div>

          <div style="font-size: 20px; color: #7f8c8d; margin-bottom: 40px;">
            ${wordObj.pinyin || ''}
          </div>

          <div style="position: relative; display: inline-block;">
            <button id="playBtn" onclick="playAudioX3(${JSON.stringify(wordObj).replace(/"/g, '&quot;')})"
                    class="btn-primary" style="font-size: 20px; padding: 15px 40px;">
              🔊 Play ×3
            </button>
            <div id="playPulse" style="position: absolute; top: -10px; right: -10px; background: #27ae60; color: white;
                                       width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center;
                                       justify-content: center; font-weight: bold; font-size: 16px;"></div>
          </div>
        </div>

        <div class="stage-footer">
          ${this.button('Back', () => GAME.previousPronunciationWord(), 'btn-secondary', isFirst)}
          ${this.button(isLast ? 'Show Summary' : 'Next', () => GAME.nextPronunciationWord(), 'btn-primary')}
        </div>
      </div>
    `;
    this.render(content);
  },

  renderReviewSummary() {
    const topic = window.TOPICS[window.GameState.topicIndex];
    const reviewWords = Array.from(window.GameState.reviewSelected).map(word =>
      topic.correctAdjectives.find((a) => a.word === word) ||
      topic.falseAdjectives.find((a) => a.word === word) ||
      { word }
    );

    const wordsGrid = reviewWords.map(wordObj => `
      <div style="padding: 20px; background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <div style="font-size: 24px; font-weight: bold; color: #2c3e50; margin-bottom: 10px;">
          ${wordObj.word}
        </div>
        <div style="font-size: 20px; color: #34495e; margin-bottom: 5px;">
          ${wordObj.chinese || ''}
        </div>
        <div style="font-size: 16px; color: #7f8c8d;">
          ${wordObj.pinyin || ''}
        </div>
      </div>
    `).join('');

    const content = `
      <div class="stage-container">
        <h2>Review Complete — Summary</h2>
        <p style="margin-bottom: 30px; color: #555;">Here are the words you reviewed:</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px;">
          ${wordsGrid}
        </div>

        <div class="button-group">
          ${this.button('Continue', () => GAME.skipReview(), 'btn-primary')}
        </div>
      </div>
    `;
    this.render(this.screen(content));
  },

  renderStats() {
    const sortedTeams = [...window.GameState.teams].sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      return a.totalMs - b.totalMs;
    });

    const exportToCSV = () => {
      const headers = ['Team Name', 'Points', 'Total Time (mm:ss)', 'Avg Time per Round', 'Rounds Played'];
      const rows = sortedTeams.map(team => {
        const avgMs = team.roundsPlayed > 0 ? team.totalMs / team.roundsPlayed : 0;
        return [
          team.name,
          team.points,
          UI.formatTime(team.totalMs),
          UI.formatTime(avgMs),
          team.roundsPlayed
        ];
      });

      const csvContent = [
        headers.join(','),
        ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `leaderboard_${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    const handleEndClass = () => {
      if (confirm('Reset all stats and start fresh? This cannot be undone.')) {
        window.GameState.teams = window.GameState.teams.map(team => ({
          ...team,
          points: 0,
          totalMs: 0,
          roundsPlayed: 0
        }));
        GAME.goHome();
      }
    };

    const tableRows = sortedTeams.map((team, idx) => {
      const avgMs = team.roundsPlayed > 0 ? team.totalMs / team.roundsPlayed : 0;
      const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}.`;
      return `
        <tr style="border-bottom: 1px solid #e9ecef; background: ${idx === 0 ? '#fff9e6' : 'white'};">
          <td style="padding: 15px; font-weight: bold; color: #2c3e50;">${medal}</td>
          <td style="padding: 15px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="${team.icon}"
                   alt="${team.animal}"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"
                   style="width: 32px; height: 32px; object-fit: contain;">
              <span style="font-size: 24px; display: none;">${team.emoji}</span>
              <span style="font-weight: bold; color: #2c3e50;">${team.name}</span>
            </div>
          </td>
          <td style="padding: 15px; text-align: center; font-weight: bold; font-size: 18px; color: #27ae60;">${team.points}</td>
          <td style="padding: 15px; text-align: center; color: #555;">${this.formatTime(team.totalMs)}</td>
          <td style="padding: 15px; text-align: center; color: #555;">${this.formatTime(avgMs)}</td>
          <td style="padding: 15px; text-align: center; color: #555;">${team.roundsPlayed}</td>
        </tr>
      `;
    }).join('');

    const content = `
      <h2>📊 Leaderboard & Stats</h2>
      <div style="margin: 30px auto; max-width: 900px; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
        <table style="width: 100%; border-collapse: collapse; font-size: 16px;">
          <thead>
            <tr style="background: #f8f9fa; border-bottom: 2px solid #dee2e6;">
              <th style="padding: 15px; text-align: left; font-weight: bold; color: #2c3e50;">Rank</th>
              <th style="padding: 15px; text-align: left; font-weight: bold; color: #2c3e50;">Team</th>
              <th style="padding: 15px; text-align: center; font-weight: bold; color: #2c3e50;">Points</th>
              <th style="padding: 15px; text-align: center; font-weight: bold; color: #2c3e50;">Total Time</th>
              <th style="padding: 15px; text-align: center; font-weight: bold; color: #2c3e50;">Avg Time/Round</th>
              <th style="padding: 15px; text-align: center; font-weight: bold; color: #2c3e50;">Rounds</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>
      <div class="button-group">
        ${this.button('📥 Export CSV', exportToCSV)}
        ${this.button('Home', () => GAME.goHome(), 'btn-secondary')}
        ${this.button('New Game', () => GAME.openOptions(), 'btn-secondary')}
        ${this.button('End Class (Reset All)', handleEndClass, 'btn-secondary')}
      </div>
    `;
    this.render(this.screen(content));
  },

  renderWinner() {
    const winners = window.GameState.winners || [];
    const isTie = winners.length > 1;

    let winnerDisplay = '';
    if (isTie) {
      winnerDisplay = `
        <h1 class="winner-title">🎉 It's a tie!</h1>
        <div class="tied-teams">
          ${winners.map(team => `
            <div class="winner-team" style="background: ${team.color?.bg || '#f8f9fa'};
                 border: 3px solid ${team.color?.text || '#2c3e50'};">
              <img src="${team.icon}"
                   alt="${team.animal}"
                   onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"
                   style="width: 80px; height: 80px; object-fit: contain; margin: 0 auto;">
              <span style="font-size: 64px; display: none;">${team.emoji}</span>
              <div class="winner-name" style="color: ${team.color?.text || '#2c3e50'};">${team.name}</div>
              <div class="winner-stats" style="color: ${team.color?.text || '#666'};">Points: ${team.points} • Total time: ${UI.formatTime(team.totalMs)}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      const winner = winners[0];
      winnerDisplay = `
        <div class="winner-icon-container">
          <img src="${winner.icon}"
               alt="${winner.animal}"
               onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"
               class="winner-icon winner-icon-big"
               style="width: 150px; height: 150px; object-fit: contain;">
          <span style="font-size: 128px; display: none;" class="winner-icon winner-icon-big">${winner.emoji}</span>
        </div>
        <h1 class="winner-title">🎉 ${winner.name} win!</h1>
        <div class="winner-stats">Points: ${winner.points} • Total time: ${UI.formatTime(winner.totalMs)}</div>
      `;
    }

    const content = `
      <div class="screen winner-screen">
        <canvas id="confetti-canvas"></canvas>
        ${winnerDisplay}
        <div class="button-row">
          <button onclick="GAME.openStats()">View Stats</button>
          <button onclick="GAME.openOptions()">New Game</button>
          <button onclick="GAME.goHome()">Home</button>
        </div>
      </div>
    `;
    this.render(content);

    this.startConfetti();
  },

  startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe'];

    for (let i = 0; i < 100; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngleIncremental: Math.random() * 0.07 + 0.05,
        tiltAngle: 0
      });
    }

    let animationFrame;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pieces.forEach((p, i) => {
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
        ctx.stroke();

        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.tilt = Math.sin(p.tiltAngle - i / 3) * 15;

        if (p.y > canvas.height) {
          pieces[i] = {
            x: Math.random() * canvas.width,
            y: -20,
            r: p.r,
            d: p.d,
            color: p.color,
            tilt: p.tilt,
            tiltAngleIncremental: p.tiltAngleIncremental,
            tiltAngle: p.tiltAngle
          };
        }
      });

      animationFrame = requestAnimationFrame(draw);
    }

    draw();

    setTimeout(() => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    }, 10000);
  }
};

console.log('ui.js loaded');
