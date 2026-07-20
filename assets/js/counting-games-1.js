(function () {
  "use strict";

  var CHILD = "Mateus";
  var GOAL = 10;
  var STORAGE_KEY = "counting-games-1-v1";

  var OBJECTS = [
    { id: "fish", emoji: "🐟" },
    { id: "crab", emoji: "🦀" },
    { id: "octopus", emoji: "🐙" },
    { id: "turtle", emoji: "🐢" },
    { id: "starfish", emoji: "⭐" },
    { id: "shell", emoji: "🐚" },
    { id: "whale", emoji: "🐋" },
    { id: "dolphin", emoji: "🐬" },
    { id: "shrimp", emoji: "🦐" },
    { id: "squid", emoji: "🦑" },
    { id: "dog", emoji: "🐶" },
    { id: "cat", emoji: "🐱" },
    { id: "frog", emoji: "🐸" },
    { id: "bird", emoji: "🐦" },
    { id: "rabbit", emoji: "🐰" },
    { id: "apple", emoji: "🍎" },
    { id: "banana", emoji: "🍌" },
    { id: "orange", emoji: "🍊" },
    { id: "strawberry", emoji: "🍓" },
    { id: "carrot", emoji: "🥕" },
    { id: "tomato", emoji: "🍅" },
    { id: "ball", emoji: "⚽" },
    { id: "star", emoji: "🌟" },
    { id: "balloon", emoji: "🎈" },
    { id: "car", emoji: "🚗" },
    { id: "rocket", emoji: "🚀" }
  ];

  var LANG_META = {
    pt: { label: "Portugues", flag: "🇵🇹" },
    en: { label: "English", flag: "🇬🇧" },
    pl: { label: "Polski", flag: "🇵🇱" }
  };

  var LANG_ORDER = ["pt", "en", "pl"];

  var I18N = {
    en: {
      title: "Counting Treasure",
      subtitle: "Count the animals and objects, Mateus!",
      hello: "Hello Mateus",
      chooseLang: "Choose a language",
      chooseLevel: "Choose a level",
      easy: "Easy",
      easyDesc: "Count from 1 to 5",
      hard: "Treasure Hunt",
      hardDesc: "Count from 1 to 10",
      prompt: "How many do you see?",
      hear: "🔊 Hear the number",
      score: "Score",
      gems: "Gems",
      backLang: "← Languages",
      backLevel: "← Levels",
      backMenu: "← Menu",
      great: ["Yes!", "Awesome!", "You got it!", "Super, Mateus!", "Brilliant!"],
      tryAgain: ["Almost!", "Try again!", "Count once more!", "You can do it!"],
      treasureTitle: "Treasure found!",
      treasureText: "Mateus collected 10 gems. Amazing counting!",
      playAgain: "Play again"
    },
    pt: {
      title: "Tesouro a Contar",
      subtitle: "Conta os animais e os objetos, Mateus!",
      hello: "Olá Mateus, o menino mais bonito do mundo",
      chooseLang: "Escolhe uma língua",
      chooseLevel: "Escolhe um nível",
      easy: "Fácil",
      easyDesc: "Conta de 1 a 5",
      hard: "Caça ao tesouro",
      hardDesc: "Conta de 1 a 10",
      prompt: "Quantos vês?",
      hear: "🔊 Ouvir o número",
      score: "Pontos",
      gems: "Gemas",
      backLang: "← Línguas",
      backLevel: "← Níveis",
      backMenu: "← Menu",
      great: ["Sim!", "Muito bem!", "Conseguiste!", "Super, Mateus!", "Fantástico!"],
      tryAgain: ["Quase!", "Tenta outra vez!", "Conta outra vez!", "Tu consegues!"],
      treasureTitle: "Tesouro encontrado!",
      treasureText: "Mateus juntou 10 gemas. Contas fantásticas!",
      playAgain: "Jogar outra vez"
    },
    pl: {
      title: "Skarb Liczenia",
      subtitle: "Policz zwierzęta i przedmioty, Mateus!",
      hello: "Cześć Mateus",
      chooseLang: "Wybierz język",
      chooseLevel: "Wybierz poziom",
      easy: "Łatwy",
      easyDesc: "Licz od 1 do 5",
      hard: "Polowanie na skarb",
      hardDesc: "Licz od 1 do 10",
      prompt: "Ile widzisz?",
      hear: "🔊 Posłuchaj liczby",
      score: "Wynik",
      gems: "Klejnoty",
      backLang: "← Języki",
      backLevel: "← Poziomy",
      backMenu: "← Menu",
      great: ["Tak!", "Świetnie!", "Udało się!", "Super, Mateus!", "Fantastycznie!"],
      tryAgain: ["Prawie!", "Spróbuj jeszcze raz!", "Policz jeszcze raz!", "Dasz radę!"],
      treasureTitle: "Skarb znaleziony!",
      treasureText: "Mateus zebrał 10 klejnotów. Świetne liczenie!",
      playAgain: "Zagraj ponownie"
    }
  };

  var state = {
    lang: null,
    sound: true,
    screen: "lang",
    maxCount: 10,
    score: 0,
    gems: 0,
    locked: false,
    question: null
  };

  var root;
  var audioCtx;
  var voiceAudio = null;
  var unlockAudioEl = null;

  function t() {
    return I18N[state.lang || "en"];
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function pickOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      if (typeof data.sound === "boolean") state.sound = data.sound;
    } catch (e) { /* ignore */ }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ sound: state.sound }));
    } catch (e) { /* ignore */ }
  }

  function ensureAudio() {
    if (!audioCtx) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) audioCtx = new Ctx();
    }
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  }

  function unlockAudio() {
    ensureAudio();
    if (!unlockAudioEl) {
      unlockAudioEl = new Audio(
        "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="
      );
      unlockAudioEl.play().catch(function () { /* ignore */ });
    }
  }

  function tone(freq, start, dur, type, gainValue) {
    if (!state.sound || !audioCtx) return;
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(gainValue || 0.1, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(start);
    osc.stop(start + dur + 0.02);
  }

  function playClick() {
    ensureAudio();
    if (!audioCtx || !state.sound) return;
    tone(620, audioCtx.currentTime, 0.05, "triangle", 0.05);
  }

  function playSuccess() {
    ensureAudio();
    if (!audioCtx || !state.sound) return;
    var now = audioCtx.currentTime;
    tone(523.25, now, 0.1, "sine", 0.1);
    tone(659.25, now + 0.09, 0.1, "sine", 0.1);
    tone(783.99, now + 0.18, 0.16, "sine", 0.12);
  }

  function playWrong() {
    ensureAudio();
    if (!audioCtx || !state.sound) return;
    tone(196, audioCtx.currentTime, 0.14, "triangle", 0.06);
  }

  function playFanfare() {
    ensureAudio();
    if (!audioCtx || !state.sound) return;
    var now = audioCtx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) {
      tone(f, now + i * 0.08, 0.18, "sine", 0.1);
    });
  }

  function stopVoice() {
    if (voiceAudio) {
      try {
        voiceAudio.pause();
        voiceAudio.removeAttribute("src");
        voiceAudio.load();
      } catch (e) { /* ignore */ }
      voiceAudio = null;
    }
  }

  function speakNumber(n, langCode) {
    return new Promise(function (resolve) {
      if (!state.sound || !n) {
        resolve(false);
        return;
      }
      unlockAudio();
      stopVoice();
      var lang = langCode || state.lang || "en";
      var audio = new Audio("/assets/audio/mateus/" + lang + "/number-" + n + ".mp3");
      voiceAudio = audio;
      var settled = false;
      var timer = null;
      var finish = function (ok) {
        if (settled) return;
        settled = true;
        if (timer) clearTimeout(timer);
        if (voiceAudio === audio) voiceAudio = null;
        resolve(!!ok);
      };
      audio.onended = function () { finish(true); };
      audio.onerror = function () { finish(false); };
      audio.play().then(function () { /* ok */ }).catch(function () { finish(false); });
      timer = setTimeout(function () { finish(true); }, 5000);
    });
  }

  function speakHello(lang) {
    return new Promise(function (resolve) {
      if (!state.sound) {
        resolve(false);
        return;
      }
      unlockAudio();
      stopVoice();
      var audio = new Audio("/assets/audio/mateus/" + lang + "/hello.mp3");
      voiceAudio = audio;
      var settled = false;
      var finish = function (ok) {
        if (settled) return;
        settled = true;
        if (voiceAudio === audio) voiceAudio = null;
        resolve(!!ok);
      };
      audio.onended = function () { finish(true); };
      audio.onerror = function () { finish(false); };
      audio.play().then(function () { /* ok */ }).catch(function () { finish(false); });
      setTimeout(function () { finish(true); }, 6000);
    });
  }

  function celebrate() {
    var layer = document.createElement("div");
    layer.className = "cg-celebration";
    var bits = ["💎", "⭐", "🐠", "🦀", "🐚", "🏆", "✨", "🍎", "🐶"];
    for (var i = 0; i < 20; i++) {
      var el = document.createElement("span");
      el.className = "cg-confetti";
      el.textContent = bits[i % bits.length];
      el.style.left = Math.random() * 100 + "%";
      el.style.animationDelay = Math.random() * 0.4 + "s";
      layer.appendChild(el);
    }
    document.body.appendChild(layer);
    setTimeout(function () { layer.remove(); }, 2200);
  }

  function buildQuestion() {
    var count = 1 + Math.floor(Math.random() * state.maxCount);
    var obj = pickOne(OBJECTS);
    var options = [count];
    while (options.length < Math.min(4, state.maxCount)) {
      var n = 1 + Math.floor(Math.random() * state.maxCount);
      if (options.indexOf(n) === -1) options.push(n);
    }
    return {
      count: count,
      obj: obj,
      choices: shuffle(options)
    };
  }

  function nextQuestion() {
    state.locked = false;
    state.question = buildQuestion();
    render();
    setTimeout(function () {
      if (state.question) speakNumber(state.question.count);
    }, 350);
  }

  function onChoice(value) {
    if (state.locked || !state.question) return;
    playClick();
    var correct = Number(value) === state.question.count;
    var buttons = root.querySelectorAll(".cg-choice");
    var feedback = root.querySelector(".cg-feedback");

    buttons.forEach(function (btn) {
      if (Number(btn.getAttribute("data-n")) === state.question.count) btn.classList.add("correct");
      if (Number(btn.getAttribute("data-n")) === Number(value) && !correct) btn.classList.add("wrong");
    });

    if (correct) {
      state.locked = true;
      state.score += 1;
      state.gems += 1;
      playSuccess();
      if (feedback) {
        feedback.className = "cg-feedback good";
        feedback.textContent = pickOne(t().great) + " (+1)";
      }
      setTimeout(function () { speakNumber(state.question.count); }, 200);

      if (state.gems >= GOAL) {
        setTimeout(function () {
          playFanfare();
          celebrate();
          state.screen = "treasure";
          render();
        }, 1100);
      } else {
        setTimeout(nextQuestion, 1200);
      }
    } else {
      playWrong();
      if (feedback) {
        feedback.className = "cg-feedback bad";
        feedback.textContent = pickOne(t().tryAgain);
      }
      setTimeout(function () {
        buttons.forEach(function (btn) { btn.classList.remove("wrong"); });
        if (feedback) feedback.textContent = "";
        speakNumber(state.question.count);
      }, 700);
    }
  }

  function chooseLang(lang) {
    if (!I18N[lang]) return;
    unlockAudio();
    playClick();
    state.lang = lang;
    state.screen = "level";
    render();
    speakHello(lang);
  }

  function chooseLevel(maxCount) {
    unlockAudio();
    playClick();
    state.maxCount = maxCount;
    state.score = 0;
    state.gems = 0;
    state.screen = "game";
    nextQuestion();
  }

  function goLang() {
    playClick();
    stopVoice();
    state.screen = "lang";
    state.lang = null;
    state.question = null;
    state.locked = false;
    render();
  }

  function goLevel() {
    playClick();
    stopVoice();
    state.screen = "level";
    state.question = null;
    state.locked = false;
    state.score = 0;
    state.gems = 0;
    render();
  }

  function playAgain() {
    playClick();
    state.score = 0;
    state.gems = 0;
    state.screen = "game";
    nextQuestion();
  }

  function toggleSound() {
    state.sound = !state.sound;
    save();
    if (state.sound) {
      unlockAudio();
      if (state.question) speakNumber(state.question.count);
      else if (state.lang) speakHello(state.lang);
      else playClick();
    } else {
      stopVoice();
    }
    render();
  }

  function gemsHtml() {
    var html = '<div class="cg-gems" aria-label="' + t().gems + '">';
    for (var i = 0; i < GOAL; i++) {
      html += '<span class="cg-gem' + (i < state.gems ? " on" : "") + '"></span>';
    }
    return html + "</div>";
  }

  function renderLang() {
    var cards = LANG_ORDER.map(function (code) {
      return (
        '<button type="button" class="cg-card-btn" data-lang="' + code + '">' +
          '<span class="cg-card-flag">' + LANG_META[code].flag + "</span>" +
          '<span class="cg-card-name">' + LANG_META[code].label + "</span>" +
          '<span class="cg-card-hello">' + I18N[code].hello + "</span>" +
        "</button>"
      );
    }).join("");

    return (
      '<div class="cg-panel">' +
        '<h2 class="cg-section-title">' + I18N.en.chooseLang + " / " + I18N.pt.chooseLang + " / " + I18N.pl.chooseLang + "</h2>" +
        '<p class="cg-section-sub">Mateus · Counting Games</p>' +
        '<div class="cg-lang-grid">' + cards + "</div>" +
      "</div>"
    );
  }

  function renderLevel() {
    var i18n = t();
    return (
      '<div class="cg-panel">' +
        '<div class="cg-game-head">' +
          '<button type="button" class="cg-back" data-action="lang">' + i18n.backLang + "</button>" +
          '<div class="cg-chip">' + LANG_META[state.lang].flag + " " + LANG_META[state.lang].label + "</div>" +
        "</div>" +
        '<h2 class="cg-section-title">' + i18n.chooseLevel + "</h2>" +
        '<div class="cg-level-grid">' +
          '<button type="button" class="cg-card-btn" data-level="5">' +
            '<span class="cg-card-emoji">🐠</span>' +
            '<span class="cg-card-name">' + i18n.easy + "</span>" +
            '<span class="cg-card-hello">' + i18n.easyDesc + "</span>" +
          "</button>" +
          '<button type="button" class="cg-card-btn" data-level="10">' +
            '<span class="cg-card-emoji">🏴‍☠️</span>' +
            '<span class="cg-card-name">' + i18n.hard + "</span>" +
            '<span class="cg-card-hello">' + i18n.hardDesc + "</span>" +
          "</button>" +
        "</div>" +
      "</div>"
    );
  }

  function renderGame() {
    var i18n = t();
    var q = state.question;
    var objs = "";
    for (var i = 0; i < q.count; i++) {
      objs += '<span class="cg-obj" style="animation-delay:' + (i * 0.04) + 's">' + q.obj.emoji + "</span>";
    }
    var choices = q.choices.map(function (n) {
      return '<button type="button" class="cg-choice" data-n="' + n + '">' + n + "</button>";
    }).join("");

    return (
      '<div class="cg-panel">' +
        '<div class="cg-game-head">' +
          '<button type="button" class="cg-back" data-action="level">' + i18n.backLevel + "</button>" +
          '<div class="cg-scoreboard">' +
            '<span class="cg-chip cg-chip-main">' + i18n.score + ": <strong>" + state.score + "</strong></span>" +
            '<span class="cg-chip">' + i18n.gems + ": <strong>" + state.gems + "/" + GOAL + "</strong></span>" +
          "</div>" +
        "</div>" +
        gemsHtml() +
        '<div class="cg-prompt"><h2>' + i18n.prompt + "</h2></div>" +
        '<div class="cg-stage">' +
          '<div class="cg-objects">' + objs + "</div>" +
          '<div class="cg-stage-sand"></div>' +
        "</div>" +
        '<button type="button" class="cg-hear" data-action="speak">' + i18n.hear + "</button>" +
        '<div class="cg-choices">' + choices + "</div>" +
        '<div class="cg-feedback" aria-live="assertive"></div>' +
      "</div>"
    );
  }

  function renderTreasure() {
    var i18n = t();
    return (
      '<div class="cg-panel">' +
        '<div class="cg-treasure">' +
          '<span class="cg-treasure-emoji">💎🏴‍☠️🏆</span>' +
          "<h2>" + i18n.treasureTitle + "</h2>" +
          "<p>" + i18n.treasureText + "</p>" +
          gemsHtml() +
          '<button type="button" class="cg-primary" data-action="again">' + i18n.playAgain + "</button>" +
          '<div style="margin-top:0.9rem">' +
            '<button type="button" class="cg-back" data-action="level">' + i18n.backLevel + "</button>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function render() {
    if (!root) return;
    var title = "Counting Treasure";
    var subtitle = "Mateus · 1 to 10";
    if (state.lang) {
      title = t().title;
      subtitle = t().subtitle;
    }

    var body = "";
    if (state.screen === "lang") body = renderLang();
    else if (state.screen === "level") body = renderLevel();
    else if (state.screen === "treasure") body = renderTreasure();
    else body = renderGame();

    var bubbles = "";
    for (var i = 0; i < 8; i++) {
      var size = 10 + Math.random() * 18;
      bubbles +=
        '<span class="cg-bubble" style="left:' + (8 + i * 11) + "%;width:" + size +
        "px;height:" + size + "px;animation-delay:" + (i * 0.7) + 's"></span>';
    }

    root.innerHTML =
      '<div class="cg-bubbles" aria-hidden="true">' + bubbles + "</div>" +
      '<div class="cg-shell">' +
        '<div class="cg-top">' +
          '<div class="cg-brand">' +
            "<h1>" + title + "</h1>" +
            "<p>" + subtitle + "</p>" +
          "</div>" +
          '<div class="cg-controls">' +
            '<a class="cg-back" href="/experimental-zen">' + (state.lang ? t().backMenu : "← Menu") + "</a>" +
            '<button type="button" class="cg-icon-btn" data-action="sound">' + (state.sound ? "🔊" : "🔇") + "</button>" +
          "</div>" +
        "</div>" +
        body +
      "</div>";
  }

  function onClick(e) {
    var target = e.target.closest("[data-lang], [data-level], [data-action], .cg-choice");
    if (!target) return;

    if (target.hasAttribute("data-lang")) {
      chooseLang(target.getAttribute("data-lang"));
      return;
    }
    if (target.hasAttribute("data-level")) {
      chooseLevel(Number(target.getAttribute("data-level")));
      return;
    }
    if (target.getAttribute("data-action") === "lang") {
      goLang();
      return;
    }
    if (target.getAttribute("data-action") === "level") {
      goLevel();
      return;
    }
    if (target.getAttribute("data-action") === "again") {
      playAgain();
      return;
    }
    if (target.getAttribute("data-action") === "sound") {
      toggleSound();
      return;
    }
    if (target.getAttribute("data-action") === "speak") {
      unlockAudio();
      if (state.question) speakNumber(state.question.count);
      return;
    }
    if (target.classList.contains("cg-choice")) {
      onChoice(target.getAttribute("data-n"));
    }
  }

  function init() {
    root = document.getElementById("cg-app");
    if (!root) return;
    load();
    render();
    root.addEventListener("click", onClick);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
