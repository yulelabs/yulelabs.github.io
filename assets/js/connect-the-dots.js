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
  // Every point must be unique and well spaced so letter circles never stack.
  var PUZZLES = [
    {
      id: "fish",
      emoji: "🐟",
      name: { en: "Fish", pt: "Peixe", pl: "Ryba" },
      points: [
        [14, 50], [28, 32], [48, 22], [68, 28], [84, 46],
        [78, 64], [60, 78], [40, 80], [22, 68], [18, 52]
      ]
    },
    {
      id: "dog",
      emoji: "🐶",
      name: { en: "Dog", pt: "Cão", pl: "Pies" },
      points: [
        [22, 30], [40, 16], [60, 18], [78, 32], [84, 52],
        [76, 72], [56, 84], [34, 82], [16, 66], [14, 46], [28, 36]
      ]
    },
    {
      id: "star",
      emoji: "⭐",
      name: { en: "Star", pt: "Estrela", pl: "Gwiazda" },
      points: [
        [50, 12], [60, 34], [84, 36], [66, 52], [74, 78],
        [50, 64], [26, 78], [34, 52], [16, 36], [40, 34]
      ]
    },
    {
      id: "house",
      emoji: "🏠",
      name: { en: "House", pt: "Casa", pl: "Dom" },
      points: [
        [18, 52], [18, 82], [82, 82], [82, 52], [50, 16],
        [34, 40], [50, 30], [66, 40]
      ]
    },
    {
      id: "rocket",
      emoji: "🚀",
      name: { en: "Rocket", pt: "Foguete", pl: "Rakieta" },
      points: [
        [50, 12], [66, 28], [66, 52], [80, 74], [64, 70],
        [50, 86], [36, 70], [20, 74], [34, 52], [34, 28]
      ]
    },
    {
      id: "cat",
      emoji: "🐱",
      name: { en: "Cat", pt: "Gato", pl: "Kot" },
      points: [
        [24, 34], [34, 14], [46, 30], [54, 30], [66, 14], [76, 34],
        [84, 52], [74, 72], [56, 84], [38, 84], [22, 70], [14, 50]
      ]
    },
    {
      id: "apple",
      emoji: "🍎",
      name: { en: "Apple", pt: "Maçã", pl: "Jabłko" },
      points: [
        [50, 18], [66, 14], [58, 28], [78, 40], [84, 60], [70, 80],
        [50, 88], [30, 80], [16, 60], [22, 40], [42, 28]
      ]
    },
    {
      id: "boat",
      emoji: "⛵",
      name: { en: "Boat", pt: "Barco", pl: "Łódka" },
      points: [
        [50, 12], [50, 42], [82, 52], [70, 78], [30, 78], [18, 52],
        [66, 36], [50, 30]
      ]
    }
  ];

  var MIN_DOT_GAP = 14;

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

  function clampBoard(v) {
    return Math.min(90, Math.max(10, v));
  }

  function separateDots(dots) {
    var i;
    var j;
    var iter;
    for (iter = 0; iter < 40; iter++) {
      var moved = false;
      for (i = 0; i < dots.length; i++) {
        for (j = i + 1; j < dots.length; j++) {
          var dx = dots[j].x - dots[i].x;
          var dy = dots[j].y - dots[i].y;
          var dist = Math.sqrt(dx * dx + dy * dy) || 0.01;
          if (dist < MIN_DOT_GAP) {
            var push = (MIN_DOT_GAP - dist) / 2;
            var ux = dx / dist;
            var uy = dy / dist;
            dots[i].x = clampBoard(dots[i].x - ux * push);
            dots[i].y = clampBoard(dots[i].y - uy * push);
            dots[j].x = clampBoard(dots[j].x + ux * push);
            dots[j].y = clampBoard(dots[j].y + uy * push);
            moved = true;
          }
        }
      }
      if (!moved) break;
    }
    return dots;
  }

  function puzzleDots() {
    var puzzle = currentPuzzle();
    var letters = alphabet();
    var count = Math.min(puzzle.points.length, letters.length);
    var dots = [];
    var seen = {};
    var i;
    for (i = 0; i < count; i++) {
      var x = clampBoard(puzzle.points[i][0]);
      var y = clampBoard(puzzle.points[i][1]);
      var key = Math.round(x) + ":" + Math.round(y);
      // Skip exact duplicates that would stack letters on one circle.
      if (seen[key]) {
        x = clampBoard(x + 12);
        y = clampBoard(y + 8);
        key = Math.round(x) + ":" + Math.round(y);
      }
      seen[key] = true;
      dots.push({
        letter: letters[i],
        x: x,
        y: y,
        index: dots.length
      });
    }
    // Re-index after possible skips (we didn't skip, just nudged).
    for (i = 0; i < dots.length; i++) dots[i].index = i;
    return separateDots(dots);
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
    var connectedThrough = state.nextIndex - 1;
    var polyline = connectedThrough >= 1 ? linePoints(dots, connectedThrough) : "";
    var nextLetter = (!state.completed && dots[state.nextIndex]) ? dots[state.nextIndex].letter : "";

    var dotsHtml = dots.map(function (d) {
      var cls = "ctd-dot";
      if (d.index < state.nextIndex) cls += " done";
      if (d.index === state.nextIndex && !state.completed) cls += " current";
      if (showHint && d.index === state.nextIndex) cls += " hint";
      return (
        '<button type="button" class="' + cls + '" data-index="' + d.index + '"' +
          ' style="left:' + d.x + "%;top:" + d.y + '%"' +
          ' aria-label="' + d.letter + '">' + d.letter + "</button>"
      );
    }).join("");

    return (
      '<div class="ctd-prompt">' + i18n.prompt +
        (state.completed ? "" : ' <span class="ctd-next-letter">' + nextLetter + "</span>") +
      "</div>" +
      '<button type="button" class="ctd-hear" data-action="speak">' + i18n.hear + "</button>" +
      '<div class="ctd-board-wrap">' +
        '<svg class="ctd-board" viewBox="0 0 100 100" aria-hidden="true">' +
          (polyline ? '<polyline class="ctd-line" points="' + polyline + '"></polyline>' : "") +
        "</svg>" +
        '<div class="ctd-dots-layer">' + dotsHtml + "</div>" +
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
