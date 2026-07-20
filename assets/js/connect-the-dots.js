(function () {
  "use strict";

  var STORAGE_KEY = "connect-the-dots-v1";

  var ALPHABETS = {
    en: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    pt: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    pl: "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ".split("")
  };

  var LANG_META = {
    pt: { label: "Portugues", flag: "🇵🇹" },
    en: { label: "English", flag: "🇬🇧" },
    pl: { label: "Polski", flag: "🇵🇱" }
  };

  var LANG_ORDER = ["pt", "en", "pl"];

  var I18N = {
    en: {
      title: "Connect the Dots",
      subtitle: "ABC order with Mateus!",
      hello: "Hello Mateus",
      chooseLang: "Choose a language",
      choosePuzzle: "Choose a picture",
      prompt: "Tap the next letter:",
      hear: "🔊 Hear letter",
      backLang: "← Languages",
      backPuzzle: "← Pictures",
      backMenu: "← Menu",
      doneTitle: "You made it!",
      doneText: "Great ABC order, Mateus!",
      nextPuzzle: "Next picture",
      playAgain: "Play again",
      great: ["Yes!", "Awesome!", "Perfect!", "Super, Mateus!"],
      tryAgain: ["Almost!", "Try again!", "Find the next letter!"],
      hint: "Hint: this one!"
    },
    pt: {
      title: "Liga os Pontos",
      subtitle: "Ordem do ABC com o Mateus!",
      hello: "Olá Mateus, o menino mais bonito do mundo",
      chooseLang: "Escolhe uma língua",
      choosePuzzle: "Escolhe uma imagem",
      prompt: "Toca na letra seguinte:",
      hear: "🔊 Ouvir letra",
      backLang: "← Línguas",
      backPuzzle: "← Imagens",
      backMenu: "← Menu",
      doneTitle: "Conseguiste!",
      doneText: "Ótima ordem do ABC, Mateus!",
      nextPuzzle: "Imagem seguinte",
      playAgain: "Jogar outra vez",
      great: ["Sim!", "Muito bem!", "Perfeito!", "Super, Mateus!"],
      tryAgain: ["Quase!", "Tenta outra vez!", "Encontra a letra seguinte!"],
      hint: "Dica: esta!"
    },
    pl: {
      title: "Połącz Kropki",
      subtitle: "Kolejność ABC z Mateusem!",
      hello: "Cześć Mateus",
      chooseLang: "Wybierz język",
      choosePuzzle: "Wybierz obrazek",
      prompt: "Stuknij następną literę:",
      hear: "🔊 Posłuchaj litery",
      backLang: "← Języki",
      backPuzzle: "← Obrazki",
      backMenu: "← Menu",
      doneTitle: "Udało się!",
      doneText: "Świetna kolejność ABC, Mateus!",
      nextPuzzle: "Następny obrazek",
      playAgain: "Zagraj ponownie",
      great: ["Tak!", "Świetnie!", "Idealnie!", "Super, Mateus!"],
      tryAgain: ["Prawie!", "Spróbuj jeszcze raz!", "Znajdź następną literę!"],
      hint: "Wskazówka: ta!"
    }
  };

  // Point paths in 0..100 board coordinates (letter assigned at runtime).
  var PUZZLES = [
    {
      id: "fish",
      emoji: "🐟",
      name: { en: "Fish", pt: "Peixe", pl: "Ryba" },
      points: [
        [18, 48], [28, 34], [42, 28], [58, 30], [72, 40], [82, 52],
        [72, 62], [58, 70], [42, 72], [28, 64], [18, 52], [30, 48], [42, 50]
      ]
    },
    {
      id: "dog",
      emoji: "🐶",
      name: { en: "Dog", pt: "Cão", pl: "Pies" },
      points: [
        [30, 28], [42, 22], [55, 24], [66, 32], [72, 45], [70, 58],
        [60, 68], [46, 72], [34, 68], [26, 56], [24, 42], [28, 34],
        [38, 40], [50, 42], [58, 50]
      ]
    },
    {
      id: "star",
      emoji: "⭐",
      name: { en: "Star", pt: "Estrela", pl: "Gwiazda" },
      points: [
        [50, 12], [58, 36], [84, 36], [64, 52], [72, 78],
        [50, 62], [28, 78], [36, 52], [16, 36], [42, 36], [50, 12]
      ]
    },
    {
      id: "house",
      emoji: "🏠",
      name: { en: "House", pt: "Casa", pl: "Dom" },
      points: [
        [20, 55], [20, 78], [80, 78], [80, 55], [50, 22],
        [20, 55], [35, 55], [35, 40], [50, 28], [65, 40], [65, 55]
      ]
    },
    {
      id: "rocket",
      emoji: "🚀",
      name: { en: "Rocket", pt: "Foguete", pl: "Rakieta" },
      points: [
        [50, 12], [62, 28], [62, 55], [74, 72], [62, 68],
        [50, 82], [38, 68], [26, 72], [38, 55], [38, 28], [50, 12]
      ]
    },
    {
      id: "cat",
      emoji: "🐱",
      name: { en: "Cat", pt: "Gato", pl: "Kot" },
      points: [
        [28, 30], [36, 18], [44, 30], [56, 30], [64, 18], [72, 30],
        [78, 45], [72, 62], [58, 72], [42, 72], [28, 62], [22, 45], [28, 30]
      ]
    },
    {
      id: "apple",
      emoji: "🍎",
      name: { en: "Apple", pt: "Maçã", pl: "Jabłko" },
      points: [
        [50, 22], [62, 18], [55, 28], [70, 38], [74, 55], [66, 72],
        [50, 80], [34, 72], [26, 55], [30, 38], [45, 28], [50, 22]
      ]
    },
    {
      id: "boat",
      emoji: "⛵",
      name: { en: "Boat", pt: "Barco", pl: "Łódka" },
      points: [
        [50, 18], [50, 55], [78, 55], [68, 72], [32, 72], [22, 55],
        [50, 55], [50, 18], [62, 40], [50, 40]
      ]
    }
  ];

  var state = {
    lang: null,
    sound: true,
    screen: "lang",
    puzzleIndex: 0,
    nextIndex: 0,
    wrongStreak: 0,
    completed: false,
    locked: false
  };

  var root;
  var audioCtx;
  var voiceAudio = null;
  var unlockAudioEl = null;

  function t() {
    return I18N[state.lang || "en"];
  }

  function alphabet() {
    return ALPHABETS[state.lang || "en"];
  }

  function currentPuzzle() {
    return PUZZLES[state.puzzleIndex % PUZZLES.length];
  }

  function puzzleDots() {
    var puzzle = currentPuzzle();
    var letters = alphabet();
    var count = Math.min(puzzle.points.length, letters.length);
    var dots = [];
    for (var i = 0; i < count; i++) {
      dots.push({
        letter: letters[i],
        x: puzzle.points[i][0],
        y: puzzle.points[i][1],
        index: i
      });
    }
    return dots;
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

  function letterKey(letter) {
    return "letter-" + String(letter).toLocaleLowerCase();
  }

  function speakLetter(letter, langCode) {
    return new Promise(function (resolve) {
      if (!state.sound || !letter) {
        resolve(false);
        return;
      }
      unlockAudio();
      stopVoice();
      var lang = langCode || state.lang || "en";
      var audio = new Audio("/assets/audio/mateus/" + lang + "/" + letterKey(letter) + ".mp3");
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
      setTimeout(function () { finish(true); }, 4000);
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
    layer.className = "ctd-celebration";
    var bits = ["⭐", "🔤", "🐶", "🐟", "🍎", "🎉", "✨", "🏠", "🚀"];
    for (var i = 0; i < 18; i++) {
      var el = document.createElement("span");
      el.className = "ctd-confetti";
      el.textContent = bits[i % bits.length];
      el.style.left = Math.random() * 100 + "%";
      el.style.animationDelay = Math.random() * 0.35 + "s";
      layer.appendChild(el);
    }
    document.body.appendChild(layer);
    setTimeout(function () { layer.remove(); }, 2200);
  }

  function startPuzzle(index) {
    state.puzzleIndex = index;
    state.nextIndex = 0;
    state.wrongStreak = 0;
    state.completed = false;
    state.locked = false;
    state.screen = "game";
    render();
    var dots = puzzleDots();
    if (dots[0]) {
      setTimeout(function () { speakLetter(dots[0].letter); }, 280);
    }
  }

  function chooseLang(lang) {
    if (!I18N[lang]) return;
    unlockAudio();
    playClick();
    state.lang = lang;
    state.screen = "puzzles";
    render();
    speakHello(lang);
  }

  function goLang() {
    playClick();
    stopVoice();
    state.screen = "lang";
    state.lang = null;
    state.completed = false;
    render();
  }

  function goPuzzles() {
    playClick();
    stopVoice();
    state.screen = "puzzles";
    state.completed = false;
    state.nextIndex = 0;
    state.wrongStreak = 0;
    render();
  }

  function nextPuzzle() {
    playClick();
    startPuzzle((state.puzzleIndex + 1) % PUZZLES.length);
  }

  function toggleSound() {
    state.sound = !state.sound;
    save();
    if (state.sound) {
      unlockAudio();
      var dots = puzzleDots();
      if (state.screen === "game" && dots[state.nextIndex]) speakLetter(dots[state.nextIndex].letter);
      else if (state.lang) speakHello(state.lang);
      else playClick();
    } else {
      stopVoice();
    }
    render();
  }

  function onDot(index) {
    if (state.locked || state.completed) return;
    var dots = puzzleDots();
    var feedback = root.querySelector(".ctd-feedback");

    if (index === state.nextIndex) {
      playClick();
      state.nextIndex += 1;
      state.wrongStreak = 0;
      speakLetter(dots[index].letter);
      if (feedback) {
        feedback.className = "ctd-feedback good";
        feedback.textContent = pickOne(t().great);
      }

      if (state.nextIndex >= dots.length) {
        state.completed = true;
        state.locked = true;
        playSuccess();
        setTimeout(function () {
          playFanfare();
          celebrate();
          render();
        }, 450);
      } else {
        render();
        feedback = root.querySelector(".ctd-feedback");
        if (feedback) {
          feedback.className = "ctd-feedback good";
          feedback.textContent = pickOne(t().great);
        }
        setTimeout(function () {
          if (!state.completed) speakLetter(dots[state.nextIndex].letter);
        }, 700);
      }
      return;
    }

    playWrong();
    state.wrongStreak += 1;
    if (feedback) {
      feedback.className = "ctd-feedback bad";
      feedback.textContent = state.wrongStreak >= 3 ? t().hint : pickOne(t().tryAgain);
    }
    render();
    var wrongEl = root.querySelector('.ctd-dot[data-index="' + index + '"]');
    if (wrongEl) {
      wrongEl.classList.add("wrong");
      setTimeout(function () { wrongEl.classList.remove("wrong"); }, 400);
    }
    setTimeout(function () {
      if (dots[state.nextIndex]) speakLetter(dots[state.nextIndex].letter);
    }, 450);
  }

  function linePoints(dots, upto) {
    if (upto < 1) return "";
    var parts = [];
    for (var i = 0; i <= upto && i < dots.length; i++) {
      parts.push(dots[i].x + "," + dots[i].y);
    }
    return parts.join(" ");
  }

  function renderBoard() {
    var dots = puzzleDots();
    var i18n = t();
    var puzzle = currentPuzzle();
    var showHint = state.wrongStreak >= 3 && !state.completed;
    var connected = Math.max(0, state.nextIndex - 1);
    var polyline = linePoints(dots, connected);

    var dotsHtml = dots.map(function (d) {
      var cls = "ctd-dot";
      if (d.index < state.nextIndex) cls += " done";
      if (d.index === state.nextIndex && !state.completed) cls += " current";
      if (showHint && d.index === state.nextIndex) cls += " hint";
      return (
        '<g class="' + cls + '" data-index="' + d.index + '" transform="translate(' + d.x + " " + d.y + ')">' +
          '<circle r="5.2"></circle>' +
          '<text y="0.5">' + d.letter + "</text>" +
        "</g>"
      );
    }).join("");

    return (
      '<div class="ctd-prompt">' + i18n.prompt +
        (state.completed ? "" : ' <span class="ctd-next-letter">' + (dots[state.nextIndex] ? dots[state.nextIndex].letter : "") + "</span>") +
      "</div>" +
      '<button type="button" class="ctd-hear" data-action="speak">' + i18n.hear + "</button>" +
      '<div class="ctd-board-wrap">' +
        '<svg class="ctd-board" viewBox="0 0 100 100" role="img" aria-label="' + puzzle.name[state.lang] + '">' +
          (polyline ? '<polyline class="ctd-line" points="' + polyline + '"></polyline>' : "") +
          dotsHtml +
        "</svg>" +
        '<div class="ctd-reveal' + (state.completed ? " show" : "") + '">' +
          '<div class="ctd-reveal-emoji">' + puzzle.emoji + "</div>" +
          "<h2>" + i18n.doneTitle + "</h2>" +
          "<p>" + puzzle.emoji + " " + puzzle.name[state.lang] + " — " + i18n.doneText + "</p>" +
          '<div class="ctd-actions">' +
            '<button type="button" class="ctd-primary" data-action="next">' + i18n.nextPuzzle + "</button>" +
            '<button type="button" class="ctd-secondary" data-action="again">' + i18n.playAgain + "</button>" +
          "</div>" +
        "</div>" +
      "</div>" +
      '<div class="ctd-feedback" aria-live="assertive"></div>'
    );
  }

  function renderLang() {
    var cards = LANG_ORDER.map(function (code) {
      return (
        '<button type="button" class="ctd-card-btn" data-lang="' + code + '">' +
          '<span class="ctd-card-flag">' + LANG_META[code].flag + "</span>" +
          '<span class="ctd-card-name">' + LANG_META[code].label + "</span>" +
          '<span class="ctd-card-hello">' + I18N[code].hello + "</span>" +
        "</button>"
      );
    }).join("");

    return (
      '<div class="ctd-panel">' +
        '<h2 class="ctd-section-title">' + I18N.en.chooseLang + " / " + I18N.pt.chooseLang + " / " + I18N.pl.chooseLang + "</h2>" +
        '<p class="ctd-section-sub">Mateus · ABC Connect the Dots</p>' +
        '<div class="ctd-grid">' + cards + "</div>" +
      "</div>"
    );
  }

  function renderPuzzles() {
    var i18n = t();
    var cards = PUZZLES.map(function (p, idx) {
      return (
        '<button type="button" class="ctd-card-btn" data-puzzle="' + idx + '">' +
          '<span class="ctd-card-emoji">' + p.emoji + "</span>" +
          '<span class="ctd-card-name">' + p.name[state.lang] + "</span>" +
          '<span class="ctd-card-hello">A → ' + alphabet()[Math.min(p.points.length, alphabet().length) - 1] + "</span>" +
        "</button>"
      );
    }).join("");

    return (
      '<div class="ctd-panel">' +
        '<div class="ctd-game-head">' +
          '<button type="button" class="ctd-back" data-action="lang">' + i18n.backLang + "</button>" +
          '<div class="ctd-chip">' + LANG_META[state.lang].flag + " " + LANG_META[state.lang].label + "</div>" +
        "</div>" +
        '<h2 class="ctd-section-title">' + i18n.choosePuzzle + "</h2>" +
        '<div class="ctd-grid">' + cards + "</div>" +
      "</div>"
    );
  }

  function renderGame() {
    var i18n = t();
    var puzzle = currentPuzzle();
    return (
      '<div class="ctd-panel">' +
        '<div class="ctd-game-head">' +
          '<button type="button" class="ctd-back" data-action="puzzles">' + i18n.backPuzzle + "</button>" +
          '<div class="ctd-chip">' + puzzle.emoji + " " + puzzle.name[state.lang] + "</div>" +
        "</div>" +
        renderBoard() +
      "</div>"
    );
  }

  function render() {
    if (!root) return;
    var title = "Connect the Dots";
    var subtitle = "Mateus · ABC";
    if (state.lang) {
      title = t().title;
      subtitle = t().subtitle;
    }

    var body = "";
    if (state.screen === "lang") body = renderLang();
    else if (state.screen === "puzzles") body = renderPuzzles();
    else body = renderGame();

    root.innerHTML =
      '<div class="ctd-top">' +
        '<div class="ctd-brand">' +
          "<h1>" + title + "</h1>" +
          "<p>" + subtitle + "</p>" +
        "</div>" +
        '<div class="ctd-controls">' +
          '<a class="ctd-back" href="/experimental-zen">' + (state.lang ? t().backMenu : "← Menu") + "</a>" +
          '<button type="button" class="ctd-icon-btn" data-action="sound">' + (state.sound ? "🔊" : "🔇") + "</button>" +
        "</div>" +
      "</div>" +
      body;
  }

  function onClick(e) {
    var target = e.target.closest("[data-lang], [data-puzzle], [data-action], .ctd-dot");
    if (!target) return;

    if (target.hasAttribute("data-lang")) {
      chooseLang(target.getAttribute("data-lang"));
      return;
    }
    if (target.hasAttribute("data-puzzle")) {
      playClick();
      startPuzzle(Number(target.getAttribute("data-puzzle")));
      return;
    }
    if (target.classList.contains("ctd-dot")) {
      onDot(Number(target.getAttribute("data-index")));
      return;
    }

    var action = target.getAttribute("data-action");
    if (action === "lang") goLang();
    else if (action === "puzzles") goPuzzles();
    else if (action === "next") nextPuzzle();
    else if (action === "again") startPuzzle(state.puzzleIndex);
    else if (action === "sound") toggleSound();
    else if (action === "speak") {
      unlockAudio();
      var dots = puzzleDots();
      if (dots[state.nextIndex]) speakLetter(dots[state.nextIndex].letter);
    }
  }

  function init() {
    root = document.getElementById("ctd-app");
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
