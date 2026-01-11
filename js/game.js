// Distribution mode flag
// true = PUBLIC mode (Reddit-safe, no CTAs)
// false = CTA mode (Discord links, community messaging)
const PUBLIC_MODE = true;

// Game state
window.GameState = {
  screen: 'home',
  topicIndex: 0,
  usedTopicIndices: new Set(),
  teamId: 'A',
  startedAtMs: null,
  elapsedMs: 0,
  penaltiesMs: 0,
  wrongCount: 0,
  selectedCorrect: new Set(),
  roundFailed: false,
  timerInterval: null,
  sentenceOrder: [],
  initialSentenceOrder: [],
  tappedIndices: [],
  roundSuccess: false,
  roundTimedOut: false,
  stage1Deck: [],
  showHint: false,
  hintUnlocked: false,
  reviewSelected: new Set(),
  reviewWords: [],
  reviewWordIndex: 0,
  isPlayingAudio: false,
  nudgeShown: false,
  timeoutTriggered: false,
  gameMode: 'individual',
  teams: [],
  turnIndex: 0
};

// Team name options
window.TEAM_ADJECTIVES = ['Flying', 'Clever', 'Brave', 'Lucky', 'Silly', 'Golden', 'Thunder', 'Sneaky'];
window.TEAM_ANIMALS = ['Panda', 'Rabbit', 'Pig', 'Squirrel', 'Cat', 'Wolf', 'Tiger', 'Kangaroo'];

// Animal emoji fallbacks
window.ANIMAL_EMOJI = {
  'Panda': '🐼',
  'Rabbit': '🐰',
  'Pig': '🐷',
  'Squirrel': '🐿️',
  'Cat': '🐱',
  'Wolf': '🐺',
  'Tiger': '🐯',
  'Kangaroo': '🦘'
};

// Team colors (soft pastel backgrounds with contrasting text)
window.TEAM_COLORS = [
  { bg: '#FFE5E5', text: '#C41E3A' },  // Soft red
  { bg: '#E5F3FF', text: '#0066CC' },  // Soft blue
  { bg: '#E8F5E9', text: '#2E7D32' },  // Soft green
  { bg: '#FFF3E0', text: '#E65100' },  // Soft orange
  { bg: '#F3E5F5', text: '#6A1B9A' },  // Soft purple
  { bg: '#FFF9C4', text: '#F57F17' },  // Soft yellow
  { bg: '#E0F2F1', text: '#00695C' },  // Soft teal
  { bg: '#FCE4EC', text: '#C2185B' }   // Soft pink
];

// Shuffle helper
function shuffle(a) {
  return a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(p => p[1]);
}

// Timer update
window.updateTimer = function() {
  if (!GameState.startedAtMs) return;
  GameState.elapsedMs = Date.now() - GameState.startedAtMs;
  const totalMs = GameState.elapsedMs + GameState.penaltiesMs;

  const el = document.getElementById('timer');
  if (el) el.textContent = UI.formatTime(totalMs);

  // Stage 2 timer rules
  if (GameState.screen === 'stage2') {
    // 30s nudge
    if (!GameState.nudgeShown && totalMs >= 30000) {
      GameState.nudgeShown = true;
      UI.showToast('⏳ 30s — keep moving!');
    }

    // 2:00 hard stop
    if (!GameState.timeoutTriggered && totalMs >= 120000) {
      GameState.timeoutTriggered = true;
      if (GameState.timerInterval) clearInterval(GameState.timerInterval);
      GameState.roundSuccess = false;
      GameState.roundTimedOut = true;
      setTimeout(() => {
        GameState.screen = 'score';
        UI.renderScore();
      }, 100);
    }
  }
};

// Game controller
window.GAME = {
  goHome: function() {
    if (GameState.timerInterval) clearInterval(GameState.timerInterval);
    GameState.screen = 'home';
    GameState.roundSuccess = false;
    UI.renderHome();
  },

  openOptions: function() {
    GameState.screen = 'options';
    UI.renderOptions();
  },

  openStats: function() {
    GameState.screen = 'stats';
    UI.renderStats();
  },

  saveTeams: function() {
    GameState.screen = 'home';
    UI.renderHome();
  },

  startGame: function() {
    GameState.turnIndex = 0;
    GameState.usedTopicIndices.clear(); // Reset used topics for new game
    GAME.startRound();
  },

  startRound: function() {
    // Find a random unused topic
    const availableIndices = Array.from({ length: window.TOPICS.length }, (_, i) => i)
      .filter(i => !GameState.usedTopicIndices.has(i));

    // If no topics available, show message and return
    if (availableIndices.length === 0) {
      UI.showToast("✅ All topics done! You've completed all available topics!");
      return;
    }

    // Pick a random unused topic
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    GameState.topicIndex = randomIndex;
    GameState.usedTopicIndices.add(randomIndex);

    const topic = window.TOPICS[GameState.topicIndex];

    // Reset
    if (GameState.timerInterval) clearInterval(GameState.timerInterval);
    GameState.screen = 'stage1';
    GameState.startedAtMs = null;
    GameState.elapsedMs = 0;
    GameState.penaltiesMs = 0;
    GameState.wrongCount = 0;
    GameState.roundFailed = false;
    GameState.roundSuccess = false;
    GameState.roundTimedOut = false;
    GameState.selectedCorrect = new Set();
    GameState.showHint = false;
    GameState.hintUnlocked = false;
    GameState.nudgeShown = false;
    GameState.timeoutTriggered = false;
    GameState.tappedIndices = [];
    // Build deck ONCE
    const correct = topic.correctAdjectives.map(a => ({
      word: a.word,
      correct: true,
      chinese: a.chinese,
      ipa: a.ipa,
      stress: a.stress,
      pinyin: a.pinyin,
      audio: a.audio
    }));
    const falses = topic.falseAdjectives.slice(0, 15).map(w => ({
      word: w.word,
      correct: false,
      chinese: w.chinese
    }));
    GameState.stage1Deck = shuffle([...correct, ...falses]);
    UI.renderStage1();

    // Start timer immediately
    GameState.startedAtMs = Date.now();
    GameState.timerInterval = setInterval(updateTimer, 100);
  },

  init: function() {
    console.log('Game initialized');
    UI.renderHome();
  },

  startNextRound: function() {
    GAME.startRound();
  },

  startReview: function() {
    GameState.screen = 'reviewStage1';
    GameState.reviewSelected = new Set();
    UI.renderReviewStage1();
  },

  skipReview: function() {
    GameState.screen = 'score';
    UI.renderScore();
  },

  startPronunciation: function() {
    const topic = window.TOPICS[GameState.topicIndex];
    // Build array of word objects
    GameState.reviewWords = Array.from(GameState.reviewSelected).map(word => {
      // Find in stage1Deck which has all properties
      const deckItem = GameState.stage1Deck.find(item => item.word === word);
      if (deckItem) return deckItem;
      // Fallback to correctAdjectives
      return topic.correctAdjectives.find(a => a.word === word) || { word };
    });
    GameState.reviewWordIndex = 0;
    GameState.screen = 'reviewPronunciation';
    UI.renderPronunciation();
  },

  nextPronunciationWord: function() {
    if (GameState.reviewWordIndex < GameState.reviewWords.length - 1) {
      GameState.reviewWordIndex++;
      UI.renderPronunciation();
    } else {
      GameState.screen = 'reviewSummary';
      UI.renderReviewSummary();
    }
  },

  previousPronunciationWord: function() {
    if (GameState.reviewWordIndex > 0) {
      GameState.reviewWordIndex--;
      UI.renderPronunciation();
    }
  }
};

// Team management
window.setGameMode = function(mode) {
  GameState.gameMode = mode;

  const numTeams = mode === 'individual' ? 1 : parseInt(mode.replace('teams', ''));
  GameState.teams = [];

  for (let i = 0; i < numTeams; i++) {
    if (mode === 'individual') {
      const color = TEAM_COLORS[i % TEAM_COLORS.length];
      GameState.teams.push({
        id: i + 1,
        adjective: '',
        animal: '',
        name: `Player ${i + 1}`,
        icon: '',
        emoji: '',
        color: color,
        points: 0,
        totalMs: 0,
        roundsPlayed: 0
      });
    } else {
      const adj = TEAM_ADJECTIVES[i % TEAM_ADJECTIVES.length];
      const animal = TEAM_ANIMALS[i % TEAM_ANIMALS.length];
      const color = TEAM_COLORS[i % TEAM_COLORS.length];
      GameState.teams.push({
        id: i + 1,
        adjective: adj,
        animal: animal,
        name: `${adj} ${animal}s`,
        icon: `./img/animals/${animal.toLowerCase()}.svg`,
        emoji: ANIMAL_EMOJI[animal],
        color: color,
        points: 0,
        totalMs: 0,
        roundsPlayed: 0
      });
    }
  }

  UI.renderOptions();
};

window.nextTeam = function() {
  const currentTeam = GameState.teams[GameState.turnIndex];
  const finalMs = getFinalMs();
  currentTeam.totalMs += finalMs;
  currentTeam.roundsPlayed += 1;

  const nextTurnIndex = (GameState.turnIndex + 1) % GameState.teams.length;

  // If we've completed a full round cycle, award point to fastest team
  if (nextTurnIndex === 0) {
    const fastestTeam = GameState.teams.reduce((fastest, team) =>
      (team.totalMs < fastest.totalMs) ? team : fastest
    );
    fastestTeam.points += 1;
  }

  GameState.turnIndex = nextTurnIndex;
  GAME.startRound();
};

window.confirmEndGame = function() {
  UI.showConfirmModal({
    title: 'Are you sure you want to end the game?',
    subtitle: 'This will reset scores and end the current session.',
    confirmText: 'Yes, End Game',
    cancelText: 'Cancel',
    dangerMode: true,
    onConfirm: () => {
      window.endGame();
    },
    onCancel: () => {
      // Do nothing, just close the modal
    }
  });
};

window.endGame = function() {
  if (GameState.teams.length === 0) {
    GAME.goHome();
    return;
  }

  // Update current team's stats before ending
  const current = GameState.teams[GameState.turnIndex];
  const finalMs = getFinalMs();
  current.totalMs += finalMs;
  current.roundsPlayed += 1;

  // Award point to fastest team if this completes a round
  const nextTurnIndex = (GameState.turnIndex + 1) % GameState.teams.length;
  if (nextTurnIndex === 0) {
    const fastestTeam = GameState.teams.reduce((fastest, team) =>
      (team.totalMs < fastest.totalMs) ? team : fastest
    );
    fastestTeam.points += 1;
  }

  const sorted = [...GameState.teams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return a.totalMs - b.totalMs;
  });

  const winner = sorted[0];
  GameState.winners = sorted.filter(t =>
    t.points === winner.points && t.totalMs === winner.totalMs
  );

  GameState.screen = 'winner';
  UI.renderWinner();
};

window.updateTeam = function(teamId, field, value) {
  const team = GameState.teams.find(t => t.id === teamId);
  if (!team) return;

  team[field] = value;

  if (field === 'adjective' || field === 'animal') {
    let pluralAnimal = team.animal;
    if (!pluralAnimal.endsWith('s')) {
      pluralAnimal += 's';
    }
    team.name = `${team.adjective} ${pluralAnimal}`;
    team.icon = `./img/animals/${team.animal.toLowerCase()}.svg`;
    team.emoji = ANIMAL_EMOJI[team.animal];
  }

  const previewEl = document.getElementById(`preview-${teamId}`);
  if (previewEl) {
    previewEl.textContent = team.name;
  }
};

window.randomizeTeam = function(teamId) {
  const team = GameState.teams.find(t => t.id === teamId);
  if (!team) return;

  const adj = TEAM_ADJECTIVES[Math.floor(Math.random() * TEAM_ADJECTIVES.length)];
  const animal = TEAM_ANIMALS[Math.floor(Math.random() * TEAM_ANIMALS.length)];

  team.adjective = adj;
  team.animal = animal;

  let pluralAnimal = animal;
  if (!pluralAnimal.endsWith('s')) {
    pluralAnimal += 's';
  }
  team.name = `${adj} ${pluralAnimal}`;
  team.icon = `./img/animals/${animal.toLowerCase()}.svg`;
  team.emoji = ANIMAL_EMOJI[animal];

  const adjSelect = document.getElementById(`adj-${teamId}`);
  const animalSelect = document.getElementById(`animal-${teamId}`);
  const previewEl = document.getElementById(`preview-${teamId}`);

  if (adjSelect) adjSelect.value = adj;
  if (animalSelect) animalSelect.value = animal;
  if (previewEl) previewEl.textContent = team.name;
};

// Core gameplay
window.applyAdjectiveChoice = function(word) {
  if (GameState.roundFailed) return;

  const topic = window.TOPICS[GameState.topicIndex];
  const item = GameState.stage1Deck.find(i => i.word === word);
  if (!item) return;

  const inPool = topic.acceptablePool.includes(word);
  const isTarget = topic.correctAdjectives.some(a => a.word === word);

  if (inPool) {
    if (GameState.selectedCorrect.has(word)) return;
    GameState.selectedCorrect.add(word);

    item.correct = true;
    item.isTarget = isTarget;

    UI.renderStage1();

    if (GameState.selectedCorrect.size === 5) {
      setTimeout(() => advanceToSentenceOrder(), 800);
    }
  } else {
    const btn = [...document.querySelectorAll('.card')].find(b => b.textContent.trim() === word);
    if (btn) {
      btn.classList.add('card--wrong');
      setTimeout(() => btn.classList.remove('card--wrong'), 250);
    }

    GameState.wrongCount++;

    if (GameState.wrongCount % 3 === 0) {
      GameState.penaltiesMs += 10000;
      UI.renderStage1();
    }

    // At 10 wrong guesses, advance to Stage 2 instead of failing
    if (GameState.wrongCount >= 10) {
      UI.showToast('Too many wrongs — moving to Stage 2!');
      setTimeout(() => advanceToSentenceOrder(), 800);
    }
  }
};

window.advanceToSentenceOrder = function() {
  GameState.screen = 'stage2';

  const topic = window.TOPICS[GameState.topicIndex];
  const indices = topic.sentences.map((_, i) => i);
  GameState.sentenceOrder = shuffle(indices);
  GameState.initialSentenceOrder = [...GameState.sentenceOrder];
  GameState.tappedIndices = [];

  UI.renderStage2();
};

window.getFinalMs = function() {
  return GameState.elapsedMs + GameState.penaltiesMs;
};

window.tapSentence = function(displayIdx) {
  // Check if already tapped
  const alreadyTappedPos = GameState.tappedIndices.indexOf(displayIdx);
  if (alreadyTappedPos !== -1) {
    // Untap it
    GameState.tappedIndices.splice(alreadyTappedPos, 1);
  } else {
    // Tap it if less than 4 taps
    if (GameState.tappedIndices.length < 4) {
      GameState.tappedIndices.push(displayIdx);
    }
  }
  UI.renderStage2();
};

window.undoLastTap = function() {
  if (GameState.tappedIndices.length > 0) {
    GameState.tappedIndices.pop();
    UI.renderStage2();
  }
};

window.clearAllTaps = function() {
  GameState.tappedIndices = [];
  UI.renderStage2();
};

window.checkSentenceOrder = function() {
  // Build order from tapped indices
  if (GameState.tappedIndices.length !== 4) {
    UI.showToast('Please tap all 4 sentences in order');
    return;
  }

  const topic = window.TOPICS[GameState.topicIndex];
  const userOrder = GameState.tappedIndices.map(idx => GameState.sentenceOrder[idx]);

  const isCorrect = topic.acceptableOrders?.some(order =>
    order.length === userOrder.length &&
    order.every((idx, i) => idx === userOrder[i])
  );

  if (isCorrect) {
    if (GameState.timerInterval) clearInterval(GameState.timerInterval);
    GameState.roundSuccess = true;
    GameState.screen = 'score';
    UI.renderScore();
  } else {
    GameState.penaltiesMs += 5000;

    if (!GameState.hintUnlocked) {
      GameState.hintUnlocked = true;
      UI.showToast('Hint unlocked (no penalty)');
    }

    UI.shakeSentences();
    UI.renderStage2();
  }
};

window.resetSentenceOrder = function() {
  GameState.sentenceOrder = [...GameState.initialSentenceOrder];
  GameState.tappedIndices = [];
  UI.renderStage2();
};

window.toggleHint = function() {
  if (!GameState.hintUnlocked) return;
  GameState.showHint = !GameState.showHint;
  UI.renderStage2();
};

// Review
window.applyReviewChoice = function(word) {
  if (GameState.reviewSelected.has(word)) {
    GameState.reviewSelected.delete(word);
  } else {
    GameState.reviewSelected.add(word);
  }
  UI.renderReviewStage1();
};

// Audio playback
window.playAudioX3 = async function(wordObj) {
  if (GameState.isPlayingAudio) return;
  GameState.isPlayingAudio = true;

  const playBtn = document.getElementById('playBtn');
  if (playBtn) playBtn.disabled = true;

  const tryAudioFile = async (word) => {
    return new Promise((resolve) => {
      const audio = new Audio(`./audio/adjectives/${word}.mp3`);
      audio.onerror = () => resolve(false);
      audio.onended = () => resolve(true);
      audio.play().catch(() => resolve(false));
    });
  };

  const speakWord = (word, playNumber) => {
    return new Promise((resolve) => {
      const pulseEl = document.getElementById('playPulse');
      if (pulseEl) pulseEl.textContent = playNumber;

      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.9;
      utterance.lang = 'en-US';
      utterance.onend = () => {
        setTimeout(resolve, 1000);
      };
      speechSynthesis.speak(utterance);
    });
  };

  const audioSuccess = await tryAudioFile(wordObj.word);

  if (!audioSuccess) {
    for (let i = 1; i <= 3; i++) {
      await speakWord(wordObj.word, i);
    }
  }

  const pulseEl = document.getElementById('playPulse');
  if (pulseEl) pulseEl.textContent = '';

  GameState.isPlayingAudio = false;
  if (playBtn) playBtn.disabled = false;
};

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => GAME.init());
} else {
  GAME.init();
}

console.log('game.js loaded');
