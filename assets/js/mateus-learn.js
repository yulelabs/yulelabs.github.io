(function () {
  "use strict";

  var CHILD_NAME = "Mateus Miguel";
  var STORAGE_KEY = "mateus-learn-v1";

  var ITEMS = [
    { id: "dog", emoji: "🐶", category: "animal", en: "dog", pt: "cão", pl: "pies", letter: { en: "D", pt: "C", pl: "P" } },
    { id: "cat", emoji: "🐱", category: "animal", en: "cat", pt: "gato", pl: "kot", letter: { en: "C", pt: "G", pl: "K" } },
    { id: "lion", emoji: "🦁", category: "animal", en: "lion", pt: "leão", pl: "lew", letter: { en: "L", pt: "L", pl: "L" } },
    { id: "fish", emoji: "🐟", category: "animal", en: "fish", pt: "peixe", pl: "ryba", letter: { en: "F", pt: "P", pl: "R" } },
    { id: "bird", emoji: "🐦", category: "animal", en: "bird", pt: "pássaro", pl: "ptak", letter: { en: "B", pt: "P", pl: "P" } },
    { id: "cow", emoji: "🐮", category: "animal", en: "cow", pt: "vaca", pl: "krowa", letter: { en: "C", pt: "V", pl: "K" } },
    { id: "horse", emoji: "🐴", category: "animal", en: "horse", pt: "cavalo", pl: "koń", letter: { en: "H", pt: "C", pl: "K" } },
    { id: "pig", emoji: "🐷", category: "animal", en: "pig", pt: "porco", pl: "świnia", letter: { en: "P", pt: "P", pl: "Ś" } },
    { id: "sheep", emoji: "🐑", category: "animal", en: "sheep", pt: "ovelha", pl: "owca", letter: { en: "S", pt: "O", pl: "O" } },
    { id: "monkey", emoji: "🐵", category: "animal", en: "monkey", pt: "macaco", pl: "małpa", letter: { en: "M", pt: "M", pl: "M" } },
    { id: "rabbit", emoji: "🐰", category: "animal", en: "rabbit", pt: "coelho", pl: "królik", letter: { en: "R", pt: "C", pl: "K" } },
    { id: "frog", emoji: "🐸", category: "animal", en: "frog", pt: "sapo", pl: "żaba", letter: { en: "F", pt: "S", pl: "Ż" } },
    { id: "apple", emoji: "🍎", category: "fruit", en: "apple", pt: "maçã", pl: "jabłko", letter: { en: "A", pt: "M", pl: "J" } },
    { id: "banana", emoji: "🍌", category: "fruit", en: "banana", pt: "banana", pl: "banan", letter: { en: "B", pt: "B", pl: "B" } },
    { id: "orange", emoji: "🍊", category: "fruit", en: "orange", pt: "laranja", pl: "pomarańcza", letter: { en: "O", pt: "L", pl: "P" } },
    { id: "grape", emoji: "🍇", category: "fruit", en: "grape", pt: "uva", pl: "winogrono", letter: { en: "G", pt: "U", pl: "W" } },
    { id: "strawberry", emoji: "🍓", category: "fruit", en: "strawberry", pt: "morango", pl: "truskawka", letter: { en: "S", pt: "M", pl: "T" } },
    { id: "pineapple", emoji: "🍍", category: "fruit", en: "pineapple", pt: "abacaxi", pl: "ananas", letter: { en: "P", pt: "A", pl: "A" } },
    { id: "watermelon", emoji: "🍉", category: "fruit", en: "watermelon", pt: "melancia", pl: "arbuz", letter: { en: "W", pt: "M", pl: "A" } },
    { id: "pear", emoji: "🍐", category: "fruit", en: "pear", pt: "pêra", pl: "gruszka", letter: { en: "P", pt: "P", pl: "G" } },
    { id: "cherry", emoji: "🍒", category: "fruit", en: "cherry", pt: "cereja", pl: "wiśnia", letter: { en: "C", pt: "C", pl: "W" } },
    { id: "lemon", emoji: "🍋", category: "fruit", en: "lemon", pt: "limão", pl: "cytryna", letter: { en: "L", pt: "L", pl: "C" } },
    { id: "carrot", emoji: "🥕", category: "vegetable", en: "carrot", pt: "cenoura", pl: "marchewka", letter: { en: "C", pt: "C", pl: "M" } },
    { id: "tomato", emoji: "🍅", category: "vegetable", en: "tomato", pt: "tomate", pl: "pomidor", letter: { en: "T", pt: "T", pl: "P" } },
    { id: "potato", emoji: "🥔", category: "vegetable", en: "potato", pt: "batata", pl: "ziemniak", letter: { en: "P", pt: "B", pl: "Z" } },
    { id: "corn", emoji: "🌽", category: "vegetable", en: "corn", pt: "milho", pl: "kukurydza", letter: { en: "C", pt: "M", pl: "K" } },
    { id: "broccoli", emoji: "🥦", category: "vegetable", en: "broccoli", pt: "brócolis", pl: "brokuł", letter: { en: "B", pt: "B", pl: "B" } },
    { id: "pepper", emoji: "🌶️", category: "vegetable", en: "pepper", pt: "pimentão", pl: "papryka", letter: { en: "P", pt: "P", pl: "P" } },
    { id: "cucumber", emoji: "🥒", category: "vegetable", en: "cucumber", pt: "pepino", pl: "ogórek", letter: { en: "C", pt: "P", pl: "O" } },
    { id: "eggplant", emoji: "🍆", category: "vegetable", en: "eggplant", pt: "berinjela", pl: "bakłażan", letter: { en: "E", pt: "B", pl: "B" } }
  ];

  var NUMBERS = [
    { n: 1, en: "one", pt: "um", pl: "jeden" },
    { n: 2, en: "two", pt: "dois", pl: "dwa" },
    { n: 3, en: "three", pt: "três", pl: "trzy" },
    { n: 4, en: "four", pt: "quatro", pl: "cztery" },
    { n: 5, en: "five", pt: "cinco", pl: "pięć" },
    { n: 6, en: "six", pt: "seis", pl: "sześć" },
    { n: 7, en: "seven", pt: "sete", pl: "siedem" },
    { n: 8, en: "eight", pt: "oito", pl: "osiem" },
    { n: 9, en: "nine", pt: "nove", pl: "dziewięć" },
    { n: 10, en: "ten", pt: "dez", pl: "dziesięć" }
  ];

  var LETTERS = {
    en: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    pt: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    pl: "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ".split("")
  };

  var I18N = {
    en: {
      kicker: "Experimental zen",
      title: CHILD_NAME + "'s Learning Garden",
      subtitle: "Letters, numbers, animals, fruits & veggies — let's play!",
      stars: "Stars",
      soundOn: "Sound on",
      soundOff: "Sound off",
      pickLang: "Language",
      modesTitle: "Choose a game",
      back: "← Games",
      hear: "🔊 Hear it",
      again: "Next →",
      great: ["Yes!", "Awesome!", "You did it!", "Super star!", "Fantastic, Mateus!"],
      tryAgain: ["Almost!", "Try again!", "You can do it!", "Have another go!"],
      streak: "Streak",
      round: "Round",
      tip: "Tip: tap the speaker to hear the word again.",
      modes: {
        letters: { title: "Letters", desc: "Hear a letter and find it." },
        numbers: { title: "Numbers", desc: "Learn numbers 1 to 10." },
        find: { title: "Find it!", desc: "Hear a word, tap the picture." },
        match: { title: "What is it?", desc: "See a picture, pick the word." },
        count: { title: "Count!", desc: "Count the pictures, pick the number." }
      },
      prompts: {
        letters: "Which letter do you hear?",
        numbers: "Which number is this?",
        find: "Tap the picture you hear!",
        match: "What is this called?",
        count: "How many do you see?"
      },
      categories: { animal: "animal", fruit: "fruit", vegetable: "vegetable" }
    },
    pt: {
      kicker: "Experimental zen",
      title: "Jardim do " + CHILD_NAME,
      subtitle: "Letras, números, animais, frutas e legumes — vamos brincar!",
      stars: "Estrelas",
      soundOn: "Som ligado",
      soundOff: "Som desligado",
      pickLang: "Idioma",
      modesTitle: "Escolhe um jogo",
      back: "← Jogos",
      hear: "🔊 Ouvir",
      again: "Seguinte →",
      great: ["Sim!", "Muito bem!", "Conseguiste!", "Super estrela!", "Fantástico, Mateus!"],
      tryAgain: ["Quase!", "Tenta outra vez!", "Tu consegues!", "Mais uma vez!"],
      streak: "Seguidas",
      round: "Ronda",
      tip: "Dica: toca no altifalante para ouvir outra vez.",
      modes: {
        letters: { title: "Letras", desc: "Ouve uma letra e encontra-a." },
        numbers: { title: "Números", desc: "Aprende os números de 1 a 10." },
        find: { title: "Encontra!", desc: "Ouve a palavra e toca na imagem." },
        match: { title: "O que é?", desc: "Vê a imagem e escolhe a palavra." },
        count: { title: "Conta!", desc: "Conta as imagens e escolhe o número." }
      },
      prompts: {
        letters: "Que letra ouves?",
        numbers: "Que número é este?",
        find: "Toca na imagem que ouves!",
        match: "Como se chama isto?",
        count: "Quantos vês?"
      },
      categories: { animal: "animal", fruit: "fruta", vegetable: "legume" }
    },
    pl: {
      kicker: "Experimental zen",
      title: "Ogród " + CHILD_NAME,
      subtitle: "Litery, liczby, zwierzęta, owoce i warzywa — bawmy się!",
      stars: "Gwiazdki",
      soundOn: "Dźwięk włączony",
      soundOff: "Dźwięk wyłączony",
      pickLang: "Język",
      modesTitle: "Wybierz grę",
      back: "← Gry",
      hear: "🔊 Posłuchaj",
      again: "Dalej →",
      great: ["Tak!", "Świetnie!", "Udało się!", "Super gwiazda!", "Fantastycznie, Mateus!"],
      tryAgain: ["Prawie!", "Spróbuj jeszcze raz!", "Dasz radę!", "Jeszcze raz!"],
      streak: "Seria",
      round: "Runda",
      tip: "Wskazówka: stuknij głośnik, żeby usłyszeć jeszcze raz.",
      modes: {
        letters: { title: "Litery", desc: "Usłysz literę i ją znajdź." },
        numbers: { title: "Liczby", desc: "Ucz się liczb od 1 do 10." },
        find: { title: "Znajdź!", desc: "Usłysz słowo i stuknij obrazek." },
        match: { title: "Co to?", desc: "Zobacz obrazek i wybierz słowo." },
        count: { title: "Policz!", desc: "Policz obrazki i wybierz liczbę." }
      },
      prompts: {
        letters: "Jaką literę słyszysz?",
        numbers: "Jaka to liczba?",
        find: "Stuknij obrazek, który słyszysz!",
        match: "Jak to się nazywa?",
        count: "Ile widzisz?"
      },
      categories: { animal: "zwierzę", fruit: "owoc", vegetable: "warzywo" }
    }
  };

  var LANG_META = {
    en: { label: "English", flag: "🇬🇧", speech: "en-US" },
    pt: { label: "Português", flag: "🇵🇹", speech: "pt-BR" },
    pl: { label: "Polski", flag: "🇵🇱", speech: "pl-PL" }
  };

  var state = {
    lang: "pt",
    sound: true,
    stars: 0,
    streak: 0,
    bestStreak: 0,
    screen: "home",
    mode: null,
    round: 0,
    locked: false,
    question: null
  };

  var root;
  var audioCtx;

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      if (data.lang && I18N[data.lang]) state.lang = data.lang;
      if (typeof data.sound === "boolean") state.sound = data.sound;
      if (typeof data.stars === "number") state.stars = data.stars;
      if (typeof data.bestStreak === "number") state.bestStreak = data.bestStreak;
    } catch (e) { /* ignore */ }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        lang: state.lang,
        sound: state.sound,
        stars: state.stars,
        bestStreak: state.bestStreak
      }));
    } catch (e) { /* ignore */ }
  }

  function t() {
    return I18N[state.lang];
  }

  function wordOf(item) {
    return item[state.lang];
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

  function pick(arr, n) {
    return shuffle(arr).slice(0, n);
  }

  function ensureAudio() {
    if (!audioCtx) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) audioCtx = new Ctx();
    }
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  }

  function tone(freq, start, dur, type, gainValue) {
    if (!state.sound || !audioCtx) return;
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(gainValue || 0.12, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(start);
    osc.stop(start + dur + 0.02);
  }

  function playClick() {
    ensureAudio();
    if (!audioCtx) return;
    var now = audioCtx.currentTime;
    tone(520, now, 0.08, "triangle", 0.08);
  }

  function playSuccess() {
    ensureAudio();
    if (!audioCtx) return;
    var now = audioCtx.currentTime;
    tone(523.25, now, 0.12, "sine", 0.14);
    tone(659.25, now + 0.1, 0.12, "sine", 0.14);
    tone(783.99, now + 0.2, 0.18, "sine", 0.16);
  }

  function playWrong() {
    ensureAudio();
    if (!audioCtx) return;
    var now = audioCtx.currentTime;
    tone(220, now, 0.16, "triangle", 0.08);
    tone(180, now + 0.08, 0.18, "triangle", 0.07);
  }

  function playFanfare() {
    ensureAudio();
    if (!audioCtx) return;
    var now = audioCtx.currentTime;
    [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) {
      tone(f, now + i * 0.09, 0.2, "sine", 0.13);
    });
  }

  function speak(text, opts) {
    if (!state.sound || !window.speechSynthesis) return;
    opts = opts || {};
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = LANG_META[state.lang].speech;
    u.rate = opts.rate || 0.9;
    u.pitch = opts.pitch || 1.05;
    var voices = window.speechSynthesis.getVoices();
    var preferred = voices.find(function (v) {
      return v.lang && v.lang.toLowerCase().indexOf(state.lang === "en" ? "en" : state.lang) === 0;
    });
    if (preferred) u.voice = preferred;
    window.speechSynthesis.speak(u);
  }

  function celebrate() {
    var layer = document.createElement("div");
    layer.className = "ml-celebration";
    var bits = ["⭐", "🌟", "🍎", "🐶", "🎉", "🥕", "🍌", "🐸", "✨"];
    for (var i = 0; i < 18; i++) {
      var el = document.createElement("span");
      el.className = "ml-confetti";
      el.textContent = bits[i % bits.length];
      el.style.left = Math.random() * 100 + "%";
      el.style.animationDelay = (Math.random() * 0.4) + "s";
      el.style.animationDuration = (1.2 + Math.random() * 0.8) + "s";
      layer.appendChild(el);
    }
    document.body.appendChild(layer);
    setTimeout(function () { layer.remove(); }, 2200);
  }

  function randomPraise() {
    var list = t().great;
    return list[Math.floor(Math.random() * list.length)];
  }

  function randomRetry() {
    var list = t().tryAgain;
    return list[Math.floor(Math.random() * list.length)];
  }

  function letterPrompt(letter) {
    if (state.lang === "pt") return "letra " + letter;
    if (state.lang === "pl") return "litera " + letter;
    return "letter " + letter;
  }

  function buildLetterQuestion() {
    var alphabet = LETTERS[state.lang];
    var usable = ITEMS.filter(function (item) {
      return alphabet.indexOf(item.letter[state.lang]) !== -1;
    });
    var item = pick(usable, 1)[0];
    var answer = item.letter[state.lang];
    var distractors = shuffle(alphabet.filter(function (l) { return l !== answer; })).slice(0, 3);
    var choices = shuffle([answer].concat(distractors));
    return {
      kind: "letters",
      speakText: letterPrompt(answer),
      answer: answer,
      choices: choices.map(function (c) { return { id: c, label: c, emoji: false }; }),
      hero: { type: "emoji", value: item.emoji },
      hint: wordOf(item)
    };
  }

  function buildNumberQuestion() {
    var num = pick(NUMBERS, 1)[0];
    var distractors = shuffle(NUMBERS.filter(function (x) { return x.n !== num.n; })).slice(0, 3);
    var choices = shuffle([num].concat(distractors));
    return {
      kind: "numbers",
      speakText: String(num.n) + ". " + num[state.lang],
      answer: String(num.n),
      choices: choices.map(function (c) {
        return { id: String(c.n), label: String(c.n), emoji: false };
      }),
      hero: { type: "number", value: String(num.n) },
      hint: num[state.lang]
    };
  }

  function buildFindQuestion() {
    var options = pick(ITEMS, 4);
    var answerItem = options[Math.floor(Math.random() * options.length)];
    return {
      kind: "find",
      speakText: wordOf(answerItem),
      answer: answerItem.id,
      choices: options.map(function (c) {
        return { id: c.id, label: c.emoji, emoji: true };
      }),
      hero: { type: "none" },
      hint: wordOf(answerItem)
    };
  }

  function buildMatchQuestion() {
    var options = pick(ITEMS, 4);
    var answerItem = options[Math.floor(Math.random() * options.length)];
    return {
      kind: "match",
      speakText: wordOf(answerItem),
      answer: answerItem.id,
      choices: options.map(function (c) {
        return { id: c.id, label: wordOf(c), emoji: false };
      }),
      hero: { type: "emoji", value: answerItem.emoji },
      hint: t().categories[answerItem.category]
    };
  }

  function buildCountQuestion() {
    var count = 1 + Math.floor(Math.random() * 8);
    var item = pick(ITEMS, 1)[0];
    var nums = NUMBERS.filter(function (n) { return n.n <= 9; });
    var answerObj = nums.find(function (n) { return n.n === count; }) || nums[0];
    var distractors = shuffle(nums.filter(function (n) { return n.n !== count; })).slice(0, 3);
    var choices = shuffle([answerObj].concat(distractors));
    return {
      kind: "count",
      speakText: answerObj[state.lang],
      answer: String(count),
      choices: choices.map(function (c) {
        return { id: String(c.n), label: String(c.n), emoji: false };
      }),
      hero: { type: "count", value: item.emoji, count: count },
      hint: wordOf(item)
    };
  }

  function nextQuestion() {
    state.round += 1;
    state.locked = false;
    var builders = {
      letters: buildLetterQuestion,
      numbers: buildNumberQuestion,
      find: buildFindQuestion,
      match: buildMatchQuestion,
      count: buildCountQuestion
    };
    state.question = builders[state.mode]();
    render();
    setTimeout(function () {
      if (state.question) speak(state.question.speakText);
    }, 280);
  }

  function onChoice(choiceId) {
    if (state.locked || !state.question) return;
    playClick();
    var buttons = root.querySelectorAll(".ml-choice");
    var feedback = root.querySelector(".ml-feedback");
    var correct = choiceId === state.question.answer;

    buttons.forEach(function (btn) {
      if (btn.getAttribute("data-id") === state.question.answer) btn.classList.add("correct");
      if (btn.getAttribute("data-id") === choiceId && !correct) btn.classList.add("wrong");
    });

    if (correct) {
      state.locked = true;
      state.stars += 1;
      state.streak += 1;
      if (state.streak > state.bestStreak) state.bestStreak = state.streak;
      save();
      playSuccess();
      if (feedback) {
        feedback.className = "ml-feedback good";
        feedback.textContent = randomPraise() + " ⭐";
      }
      speak(state.question.speakText);
      if (state.streak > 0 && state.streak % 5 === 0) {
        playFanfare();
        celebrate();
      }
      setTimeout(nextQuestion, 1100);
    } else {
      state.streak = 0;
      playWrong();
      if (feedback) {
        feedback.className = "ml-feedback bad";
        feedback.textContent = randomRetry();
      }
      setTimeout(function () {
        buttons.forEach(function (btn) { btn.classList.remove("wrong"); });
        if (feedback) feedback.textContent = "";
        speak(state.question.speakText);
      }, 700);
    }
  }

  function startMode(mode) {
    playClick();
    state.mode = mode;
    state.screen = "game";
    state.round = 0;
    state.streak = 0;
    nextQuestion();
  }

  function goHome() {
    playClick();
    state.screen = "home";
    state.mode = null;
    state.question = null;
    state.locked = false;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    render();
  }

  function setLang(lang) {
    if (!I18N[lang]) return;
    playClick();
    state.lang = lang;
    save();
    render();
    speak(t().title.split(" ")[0] + " " + CHILD_NAME, { rate: 1 });
  }

  function toggleSound() {
    state.sound = !state.sound;
    save();
    if (state.sound) {
      ensureAudio();
      playClick();
    } else if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    render();
  }

  function renderHero(q) {
    if (!q || !q.hero || q.hero.type === "none") {
      return '<div class="ml-hero"><button type="button" class="ml-speak" data-action="speak">' + t().hear + "</button></div>";
    }
    if (q.hero.type === "emoji") {
      return (
        '<div class="ml-hero">' +
          '<div class="ml-hero-emoji" aria-hidden="true">' + q.hero.value + "</div>" +
          '<button type="button" class="ml-speak" data-action="speak">' + t().hear + "</button>" +
        "</div>"
      );
    }
    if (q.hero.type === "number") {
      return (
        '<div class="ml-hero">' +
          '<div class="ml-hero-number">' + q.hero.value + "</div>" +
          '<button type="button" class="ml-speak" data-action="speak">' + t().hear + "</button>" +
        "</div>"
      );
    }
    if (q.hero.type === "count") {
      var spans = "";
      for (var i = 0; i < q.hero.count; i++) {
        spans += '<span style="animation-delay:' + (i * 0.05) + 's">' + q.hero.value + "</span>";
      }
      return (
        '<div class="ml-hero">' +
          '<div class="ml-count-row">' + spans + "</div>" +
          '<button type="button" class="ml-speak" data-action="speak">' + t().hear + "</button>" +
        "</div>"
      );
    }
    return "";
  }

  function renderHome() {
    var i18n = t();
    var modeKeys = ["letters", "numbers", "find", "match", "count"];
    var cards = modeKeys.map(function (key) {
      var mode = i18n.modes[key];
      var emoji = { letters: "🔤", numbers: "🔢", find: "👀", match: "🍎", count: "🧮" }[key];
      return (
        '<button type="button" class="ml-mode-card" data-mode="' + key + '">' +
          '<span class="ml-mode-emoji" aria-hidden="true">' + emoji + "</span>" +
          '<h3 class="ml-mode-title">' + mode.title + "</h3>" +
          '<p class="ml-mode-desc">' + mode.desc + "</p>" +
        "</button>"
      );
    }).join("");

    return (
      '<div class="ml-panel">' +
        "<h2 style=\"font-family:var(--ml-font-display);margin:0 0 0.75rem;\">" + i18n.modesTitle + "</h2>" +
        '<div class="ml-modes">' + cards + "</div>" +
        '<p class="ml-tip">' + i18n.tip + "</p>" +
      "</div>"
    );
  }

  function renderGame() {
    var i18n = t();
    var q = state.question;
    var choices = q.choices.map(function (c) {
      return (
        '<button type="button" class="ml-choice' + (c.emoji ? " emoji" : "") + '" data-id="' + c.id + '">' +
          c.label +
        "</button>"
      );
    }).join("");

    return (
      '<div class="ml-panel">' +
        '<div class="ml-game-head">' +
          '<button type="button" class="ml-back" data-action="home">' + i18n.back + "</button>" +
          '<div class="ml-progress">' + i18n.round + " " + state.round +
            " · " + i18n.streak + " " + state.streak +
          "</div>" +
        "</div>" +
        '<div class="ml-prompt">' +
          "<h2>" + i18n.prompts[state.mode] + "</h2>" +
          (q.hint ? "<p>" + q.hint + "</p>" : "") +
        "</div>" +
        renderHero(q) +
        '<div class="ml-choices">' + choices + "</div>" +
        '<div class="ml-feedback" aria-live="assertive"></div>' +
      "</div>"
    );
  }

  function render() {
    if (!root) return;
    var i18n = t();
    var langButtons = Object.keys(LANG_META).map(function (code) {
      var meta = LANG_META[code];
      return (
        '<button type="button" class="' + (state.lang === code ? "active" : "") + '" data-lang="' + code + '" aria-pressed="' + (state.lang === code) + '">' +
          meta.flag + " " + meta.label +
        "</button>"
      );
    }).join("");

    root.innerHTML =
      '<div class="ml-floaters" aria-hidden="true">' +
        '<span class="ml-floater">🍎</span><span class="ml-floater">🐶</span><span class="ml-floater">🥕</span>' +
        '<span class="ml-floater">🍌</span><span class="ml-floater">🐸</span>' +
      "</div>" +
      '<div class="ml-shell">' +
        '<div class="ml-topbar">' +
          '<div class="ml-brand">' +
            '<div class="ml-kicker">' + i18n.kicker + "</div>" +
            '<h1 class="ml-title">' + i18n.title + "</h1>" +
            '<p class="ml-subtitle">' + i18n.subtitle + "</p>" +
          "</div>" +
          '<div class="ml-controls">' +
            '<div class="ml-lang" role="group" aria-label="' + i18n.pickLang + '">' + langButtons + "</div>" +
            '<button type="button" class="ml-icon-btn" data-action="sound" title="' + (state.sound ? i18n.soundOn : i18n.soundOff) + '">' +
              (state.sound ? "🔊" : "🔇") +
            "</button>" +
            '<div class="ml-stars" title="' + i18n.stars + '">⭐ ' + state.stars + "</div>" +
          "</div>" +
        "</div>" +
        (state.screen === "home" ? renderHome() : renderGame()) +
      "</div>";
  }

  function onClick(e) {
    var target = e.target.closest("[data-lang], [data-mode], [data-action], .ml-choice");
    if (!target) return;

    if (target.hasAttribute("data-lang")) {
      setLang(target.getAttribute("data-lang"));
      return;
    }
    if (target.hasAttribute("data-mode")) {
      startMode(target.getAttribute("data-mode"));
      return;
    }
    if (target.getAttribute("data-action") === "home") {
      goHome();
      return;
    }
    if (target.getAttribute("data-action") === "sound") {
      toggleSound();
      return;
    }
    if (target.getAttribute("data-action") === "speak") {
      playClick();
      if (state.question) speak(state.question.speakText);
      return;
    }
    if (target.classList.contains("ml-choice")) {
      onChoice(target.getAttribute("data-id"));
    }
  }

  function init() {
    root = document.getElementById("mateus-app");
    if (!root) return;
    load();
    render();
    root.addEventListener("click", onClick);
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = function () { /* warm voices */ };
      window.speechSynthesis.getVoices();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
