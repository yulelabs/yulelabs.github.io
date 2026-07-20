(function () {
  "use strict";

  var CHILD_NAME = "Mateus Miguel";
  var STORAGE_KEY = "mateus-learn-v2";

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
      hello: "Hello Mateus",
      chooseLang: "Choose a language to start",
      soundOn: "Sound on",
      soundOff: "Sound off",
      modesTitle: "Choose a game",
      backGames: "← Games",
      backLang: "← Languages",
      hear: "🔊 Hear it",
      great: ["Yes!", "Awesome!", "You did it!", "Super star!", "Fantastic, Mateus!"],
      tryAgain: ["Almost!", "Try again!", "You can do it!", "Have another go!"],
      streak: "Streak",
      round: "Round",
      score: "Score",
      tip: "Tip: tap Hear it to listen again.",
      langLabel: "English",
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
      hello: "Olá Mateus",
      chooseLang: "Escolhe uma língua para começar",
      soundOn: "Som ligado",
      soundOff: "Som desligado",
      modesTitle: "Escolhe um jogo",
      backGames: "← Jogos",
      backLang: "← Línguas",
      hear: "🔊 Ouvir",
      great: ["Sim!", "Muito bem!", "Conseguiste!", "Super estrela!", "Fantástico, Mateus!"],
      tryAgain: ["Quase!", "Tenta outra vez!", "Tu consegues!", "Mais uma vez!"],
      streak: "Seguidas",
      round: "Ronda",
      score: "Pontos",
      tip: "Dica: toca em Ouvir para escutar outra vez.",
      langLabel: "Portugues",
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
      hello: "Cześć Mateus",
      chooseLang: "Wybierz język, żeby zacząć",
      soundOn: "Dźwięk włączony",
      soundOff: "Dźwięk wyłączony",
      modesTitle: "Wybierz grę",
      backGames: "← Gry",
      backLang: "← Języki",
      hear: "🔊 Posłuchaj",
      great: ["Tak!", "Świetnie!", "Udało się!", "Super gwiazda!", "Fantastycznie, Mateus!"],
      tryAgain: ["Prawie!", "Spróbuj jeszcze raz!", "Dasz radę!", "Jeszcze raz!"],
      streak: "Seria",
      round: "Runda",
      score: "Wynik",
      tip: "Wskazówka: stuknij Posłuchaj, żeby usłyszeć jeszcze raz.",
      langLabel: "Polski",
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
    pt: { label: "Portugues", flag: "🇵🇹" },
    en: { label: "English", flag: "🇬🇧" },
    pl: { label: "Polski", flag: "🇵🇱" }
  };

  var LANG_ORDER = ["pt", "en", "pl"];

  var FUN_WORDS = {
    en: ["lions", "apples", "carrots", "dogs", "bananas", "frogs", "horses", "strawberries", "letters", "numbers", "cats", "oranges", "birds", "grapes", "tomatoes", "monkeys", "pears", "sheep"],
    pt: ["leões", "maçãs", "cenouras", "cães", "bananas", "sapos", "cavalos", "morangos", "letras", "números", "gatos", "laranjas", "pássaros", "uvas", "tomates", "macacos", "pêras", "ovelhas"],
    pl: ["lwy", "jabłka", "marchewki", "psy", "banany", "żaby", "konie", "truskawki", "litery", "liczby", "koty", "pomarańcze", "ptaki", "winogrona", "pomidory", "małpy", "gruszki", "owce"]
  };

  var state = {
    lang: null,
    sound: true,
    screen: "lang",
    mode: null,
    round: 0,
    score: 0,
    streak: 0,
    locked: false,
    question: null,
    tagline: ""
  };

  var root;
  var audioCtx;
  var voiceAudio = null;
  var unlockAudioEl = null;

  function t() {
    return I18N[state.lang || "en"];
  }

  function wordOf(item) {
    return item[state.lang];
  }

  function pickOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function pickTwoWords(lang) {
    var pool = shuffle(FUN_WORDS[lang] || FUN_WORDS.en);
    return [pool[0], pool[1]];
  }

  function buildMateusTagline(lang) {
    var words = pickTwoWords(lang || "en");
    var a = words[0];
    var b = words[1];
    var templates = {
      en: [
        "Mateus, let's play with " + a + " and " + b + "!",
        "Come on Mateus — " + a + ", " + b + " and fun await!",
        "Mateus can learn letters, numbers, " + a + " and " + b + "!",
        "Yay Mateus! Today we explore " + a + " and " + b + "!",
        "Mateus, find " + a + ", count " + b + ", and smile big!",
        "Let's go Mateus — animals, fruits, " + a + " and " + b + "!"
      ],
      pt: [
        "Mateus, vamos brincar com " + a + " e " + b + "!",
        "Vamos Mateus — " + a + ", " + b + " e muita diversão!",
        "Mateus pode aprender letras, números, " + a + " e " + b + "!",
        "Boa Mateus! Hoje exploramos " + a + " e " + b + "!",
        "Mateus, encontra " + a + ", conta " + b + " e sorri!",
        "Vamos lá Mateus — animais, frutas, " + a + " e " + b + "!"
      ],
      pl: [
        "Mateus, bawmy się z " + a + " i " + b + "!",
        "Dawaj Mateus — " + a + ", " + b + " i dużo zabawy!",
        "Mateus może uczyć się liter, liczb, " + a + " i " + b + "!",
        "Super Mateus! Dziś odkrywamy " + a + " i " + b + "!",
        "Mateus, znajdź " + a + ", policz " + b + " i się uśmiechnij!",
        "Start Mateus — zwierzęta, owoce, " + a + " i " + b + "!"
      ]
    };
    return pickOne(templates[lang] || templates.en);
  }

  function refreshTagline(lang) {
    state.tagline = buildMateusTagline(lang || state.lang || "en");
    return state.tagline;
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
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  }

  function unlockSpeech() {
    ensureAudio();
    // Unlock HTMLAudio playback for later spoken words (after timers).
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
    tone(640, audioCtx.currentTime, 0.05, "triangle", 0.05);
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
    var now = audioCtx.currentTime;
    tone(196, now, 0.14, "triangle", 0.06);
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

  function voiceClipUrl(langCode, key) {
    return "/assets/audio/mateus/" + langCode + "/" + key + ".mp3";
  }

  function letterAudioKey(letter) {
    return "letter-" + String(letter).toLocaleLowerCase();
  }

  function playVoiceClip(langCode, key) {
    return new Promise(function (resolve) {
      if (!state.sound || !langCode || !key) {
        resolve(false);
        return;
      }
      ensureAudio();
      unlockSpeech();
      stopVoice();

      var audio = new Audio();
      voiceAudio = audio;
      audio.preload = "auto";
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
      audio.src = voiceClipUrl(langCode, key);

      var playPromise = audio.play();
      if (playPromise && playPromise.then) {
        playPromise.then(function () { /* playing natural voice */ }).catch(function () {
          finish(false);
        });
      }
      timer = setTimeout(function () { finish(true); }, 8000);
    });
  }

  function speakKey(key, opts) {
    opts = opts || {};
    var langCode = opts.lang || state.lang || "en";
    return playVoiceClip(langCode, key);
  }

  function speakCurrent() {
    if (!state.question || !state.question.audioKey) return Promise.resolve(false);
    return speakKey(state.question.audioKey);
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
      audioKey: letterAudioKey(answer),
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
      speakText: num[state.lang],
      audioKey: "number-" + num.n,
      answer: String(num.n),
      choices: choices.map(function (c) {
        return { id: String(c.n), label: String(c.n) + " · " + c[state.lang], emoji: false };
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
      audioKey: "item-" + answerItem.id,
      answer: answerItem.id,
      choices: options.map(function (c) {
        return { id: c.id, label: c.emoji, emoji: true };
      }),
      hero: { type: "none" },
      hint: t().categories[answerItem.category]
    };
  }

  function buildMatchQuestion() {
    var options = pick(ITEMS, 4);
    var answerItem = options[Math.floor(Math.random() * options.length)];
    return {
      kind: "match",
      speakText: wordOf(answerItem),
      audioKey: "item-" + answerItem.id,
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
      audioKey: "number-" + count,
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
    // Speak after paint; keep soft cue then real word.
    setTimeout(function () {
      if (!state.question) return;
      speakCurrent();
    }, 350);
  }

  function updateScoreUi() {
    var el = root && root.querySelector("[data-score]");
    if (el) el.textContent = String(state.score);
    var streakEl = root && root.querySelector("[data-streak]");
    if (streakEl) streakEl.textContent = String(state.streak);
    var roundEl = root && root.querySelector("[data-round]");
    if (roundEl) roundEl.textContent = String(state.round);
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
      state.score += 1;
      state.streak += 1;
      updateScoreUi();
      playSuccess();
      if (feedback) {
        feedback.className = "ml-feedback good";
        feedback.textContent = randomPraise() + " (+1)";
      }
      setTimeout(function () { speakCurrent(); }, 220);
      if (state.streak > 0 && state.streak % 5 === 0) {
        setTimeout(function () {
          playFanfare();
          celebrate();
        }, 900);
      }
      setTimeout(nextQuestion, 1400);
    } else {
      state.streak = 0;
      updateScoreUi();
      playWrong();
      if (feedback) {
        feedback.className = "ml-feedback bad";
        feedback.textContent = randomRetry();
      }
      setTimeout(function () {
        buttons.forEach(function (btn) { btn.classList.remove("wrong"); });
        if (feedback) feedback.textContent = "";
        speakCurrent();
      }, 700);
    }
  }

  function startMode(mode) {
    unlockSpeech();
    playClick();
    state.mode = mode;
    state.screen = "game";
    state.round = 0;
    state.score = 0;
    state.streak = 0;
    refreshTagline(state.lang);
    nextQuestion();
  }

  function goGames() {
    playClick();
    stopVoice();
    state.screen = "games";
    state.mode = null;
    state.question = null;
    state.locked = false;
    refreshTagline(state.lang);
    render();
  }

  function goLang() {
    playClick();
    stopVoice();
    state.screen = "lang";
    state.lang = null;
    state.mode = null;
    state.question = null;
    state.locked = false;
    state.score = 0;
    state.round = 0;
    state.streak = 0;
    state.tagline = "";
    render();
  }

  function chooseLang(lang) {
    if (!I18N[lang]) return;
    unlockSpeech();
    playClick();
    state.lang = lang;
    state.screen = "games";
    state.score = 0;
    state.round = 0;
    state.streak = 0;
    refreshTagline(lang);
    render();
    speakKey("hello", { lang: lang });
  }

  function toggleSound() {
    state.sound = !state.sound;
    save();
    if (state.sound) {
      unlockSpeech();
      if (state.lang) speakKey("hello");
      else playClick();
    } else {
      stopVoice();
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

  function renderLangSelect() {
    var cards = LANG_ORDER.map(function (code) {
      var meta = LANG_META[code];
      return (
        '<button type="button" class="ml-lang-card" data-choose-lang="' + code + '">' +
          '<span class="ml-lang-card-flag" aria-hidden="true">' + meta.flag + "</span>" +
          '<span class="ml-lang-card-name">' + meta.label + "</span>" +
          '<span class="ml-lang-card-hello">' + I18N[code].hello + "</span>" +
        "</button>"
      );
    }).join("");

    return (
      '<div class="ml-panel ml-lang-panel">' +
        '<h2 class="ml-section-title">Portugues · English · Polski</h2>' +
        '<p class="ml-section-sub">Choose a language / Escolhe uma língua / Wybierz język</p>' +
        '<div class="ml-lang-grid">' + cards + "</div>" +
      "</div>"
    );
  }

  function renderGames() {
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
        '<div class="ml-game-head">' +
          '<button type="button" class="ml-back" data-action="lang">' + i18n.backLang + "</button>" +
          '<div class="ml-lang-pill">' + LANG_META[state.lang].flag + " " + LANG_META[state.lang].label + "</div>" +
        "</div>" +
        '<h2 class="ml-section-title">' + i18n.modesTitle + "</h2>" +
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
          '<button type="button" class="ml-back" data-action="games">' + i18n.backGames + "</button>" +
          '<div class="ml-scoreboard">' +
            '<span class="ml-score-chip ml-score-main">' + i18n.score + ': <strong data-score>' + state.score + "</strong></span>" +
            '<span class="ml-score-chip">' + i18n.round + ': <strong data-round>' + state.round + "</strong></span>" +
            '<span class="ml-score-chip">' + i18n.streak + ': <strong data-streak>' + state.streak + "</strong></span>" +
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
    var title = "Experimental zen";
    var subtitle = "Hello Mateus · Olá Mateus · Cześć Mateus";

    if (state.screen === "lang") {
      title = "Experimental zen";
      subtitle = "Hello Mateus · Olá Mateus · Cześć Mateus";
    } else if (state.lang) {
      title = t().title;
      if (!state.tagline) refreshTagline(state.lang);
      subtitle = state.tagline;
    }

    var body = "";
    if (state.screen === "lang") body = renderLangSelect();
    else if (state.screen === "games") body = renderGames();
    else body = renderGame();

    root.innerHTML =
      '<div class="ml-floaters" aria-hidden="true">' +
        '<span class="ml-floater">🍎</span><span class="ml-floater">🐶</span><span class="ml-floater">🥕</span>' +
        '<span class="ml-floater">🍌</span><span class="ml-floater">🐸</span>' +
      "</div>" +
      '<div class="ml-shell">' +
        '<div class="ml-topbar ml-topbar-centered">' +
          '<a class="ml-home-link" href="{{ SITE_HOME }}">Yule Labs</a>'.replace("{{ SITE_HOME }}", "/") +
          '<div class="ml-controls">' +
            '<button type="button" class="ml-icon-btn" data-action="sound" title="Sound">' +
              (state.sound ? "🔊" : "🔇") +
            "</button>" +
          "</div>" +
          '<div class="ml-brand">' +
            '<div class="ml-kicker">Experimental zen</div>' +
            '<h1 class="ml-title">' + title + "</h1>" +
            '<p class="ml-subtitle ml-subtitle-hero">' + subtitle + "</p>" +
          "</div>" +
        "</div>" +
        body +
      "</div>";
  }

  function onClick(e) {
    var target = e.target.closest("[data-choose-lang], [data-mode], [data-action], .ml-choice");
    if (!target) return;

    if (target.hasAttribute("data-choose-lang")) {
      chooseLang(target.getAttribute("data-choose-lang"));
      return;
    }
    if (target.hasAttribute("data-mode")) {
      startMode(target.getAttribute("data-mode"));
      return;
    }
    if (target.getAttribute("data-action") === "games") {
      goGames();
      return;
    }
    if (target.getAttribute("data-action") === "lang") {
      goLang();
      return;
    }
    if (target.getAttribute("data-action") === "sound") {
      toggleSound();
      return;
    }
    if (target.getAttribute("data-action") === "speak") {
      unlockSpeech();
      speakCurrent();
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
    state.screen = "lang";
    state.lang = null;
    render();
    root.addEventListener("click", onClick);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
