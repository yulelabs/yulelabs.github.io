(function () {
  "use strict";

  var DATA = window.LGP_DATA;
  if (!DATA || !DATA.modules) {
    console.error("LGP_DATA missing");
    return;
  }

  var STORAGE_KEY = "lgp-joanna-v1";
  var AUDIO_BASE = "/assets/audio/grammar-pt/";

  var I18N = {
    en: {
      kicker: "For Joanna · Portugal Portuguese",
      brand: "Gramática Portuguesa",
      subtitle: "All the grammar rules, with natural European Portuguese audio.",
      heroTitle: "Learn Portuguese grammar, Joanna",
      heroBody: "Clear explanations in English and Polish, examples from Portugal, and practice quizzes with native-sounding European Portuguese speech.",
      browse: "Browse modules",
      practice: "Mixed practice",
      soundOn: "Sound on",
      soundOff: "Sound off",
      search: "Search modules…",
      progress: "Progress",
      done: "Done",
      polishTip: "Polish tip",
      examples: "Examples",
      quiz: "Practice quiz",
      check: "Check",
      next: "Next question",
      back: "← All modules",
      markDone: "Mark module complete",
      marked: "Module completed",
      hear: "Hear",
      correct: "Correct!",
      wrong: "Not quite.",
      explain: "Why",
      fillPlaceholder: "Type your answer",
      practiceTitle: "Mixed practice",
      practiceBody: "Random questions from every module. Perfect for revision.",
      startPractice: "Start practice",
      score: "Score",
      streak: "Streak",
      seen: "Answered",
      noResults: "No modules match that search.",
      footer: "European Portuguese (Portugal) · Not Brazilian · Built for Joanna",
      langEn: "EN",
      langPl: "PL",
      continueReading: "Open module",
      quizOf: "Question"
    },
    pl: {
      kicker: "Dla Joanny · Portugalski z Portugalii",
      brand: "Gramática Portuguesa",
      subtitle: "Wszystkie reguły gramatyki z naturalnym portugalskim z Portugalii.",
      heroTitle: "Ucz się gramatyki portugalskiej, Joanna",
      heroBody: "Wyjaśnienia po angielsku i polsku, przykłady z Portugalii oraz ćwiczenia z naturalną wymową europejskiego portugalskiego.",
      browse: "Przeglądaj moduły",
      practice: "Ćwiczenia mieszane",
      soundOn: "Dźwięk włączony",
      soundOff: "Dźwięk wyłączony",
      search: "Szukaj modułów…",
      progress: "Postęp",
      done: "Ukończono",
      polishTip: "Wskazówka dla Polek/Polaków",
      examples: "Przykłady",
      quiz: "Quiz",
      check: "Sprawdź",
      next: "Następne pytanie",
      back: "← Wszystkie moduły",
      markDone: "Oznacz jako ukończony",
      marked: "Moduł ukończony",
      hear: "Posłuchaj",
      correct: "Dobrze!",
      wrong: "Nie do końca.",
      explain: "Dlaczego",
      fillPlaceholder: "Wpisz odpowiedź",
      practiceTitle: "Ćwiczenia mieszane",
      practiceBody: "Losowe pytania ze wszystkich modułów. Idealne do powtórki.",
      startPractice: "Zacznij ćwiczenie",
      score: "Wynik",
      streak: "Seria",
      seen: "Odpowiedzi",
      noResults: "Brak modułów dla tego wyszukiwania.",
      footer: "Portugalski europejski (Portugalia) · Nie brazylijski · Dla Joanny",
      langEn: "EN",
      langPl: "PL",
      continueReading: "Otwórz moduł",
      quizOf: "Pytanie"
    }
  };

  var state = {
    uiLang: "en",
    sound: true,
    screen: "home",
    moduleId: null,
    search: "",
    completed: {},
    practice: null,
    quizFeedback: {}
  };

  var root;
  var voiceAudio = null;
  var unlockAudioEl = null;
  var audioCtx = null;

  function t() {
    return I18N[state.uiLang] || I18N.en;
  }

  function tr(obj) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[state.uiLang] || obj.en || obj.pl || "";
  }

  function modulesSorted() {
    return DATA.modules.slice().sort(function (a, b) {
      return (a.order || 0) - (b.order || 0);
    });
  }

  function findModule(id) {
    for (var i = 0; i < DATA.modules.length; i++) {
      if (DATA.modules[i].id === id) return DATA.modules[i];
    }
    return null;
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var data = JSON.parse(raw);
      if (data.uiLang === "en" || data.uiLang === "pl") state.uiLang = data.uiLang;
      if (typeof data.sound === "boolean") state.sound = data.sound;
      if (data.completed && typeof data.completed === "object") state.completed = data.completed;
    } catch (e) { /* ignore */ }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        uiLang: state.uiLang,
        sound: state.sound,
        completed: state.completed
      }));
    } catch (e) { /* ignore */ }
  }

  function completedCount() {
    var n = 0;
    modulesSorted().forEach(function (m) {
      if (state.completed[m.id]) n += 1;
    });
    return n;
  }

  function progressPct() {
    var total = DATA.modules.length || 1;
    return Math.round((completedCount() / total) * 100);
  }

  function ensureAudio() {
    if (!audioCtx) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) audioCtx = new Ctx();
    }
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  }

  function unlockSpeech() {
    ensureAudio();
    if (!unlockAudioEl) {
      unlockAudioEl = new Audio(
        "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="
      );
      unlockAudioEl.play().catch(function () { /* ignore */ });
    }
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
    if (window.speechSynthesis) {
      try { window.speechSynthesis.cancel(); } catch (e2) { /* ignore */ }
    }
    root.querySelectorAll(".lgp-speak.is-playing").forEach(function (el) {
      el.classList.remove("is-playing");
    });
  }

  function speakFallback(text) {
    return new Promise(function (resolve) {
      if (!state.sound || !window.speechSynthesis || !text) {
        resolve(false);
        return;
      }
      var utter = new SpeechSynthesisUtterance(text);
      utter.lang = "pt-PT";
      utter.rate = 0.92;
      var voices = window.speechSynthesis.getVoices() || [];
      var preferred = voices.find(function (v) {
        return /pt-PT|Portugal/i.test(v.lang + " " + v.name) && !/Brazil|BR/i.test(v.lang + " " + v.name);
      }) || voices.find(function (v) {
        return /^pt/i.test(v.lang);
      });
      if (preferred) utter.voice = preferred;
      utter.onend = function () { resolve(true); };
      utter.onerror = function () { resolve(false); };
      window.speechSynthesis.speak(utter);
    });
  }

  function playClip(id, text, buttonEl) {
    if (!state.sound) return Promise.resolve(false);
    unlockSpeech();
    stopVoice();
    if (buttonEl) buttonEl.classList.add("is-playing");

    return new Promise(function (resolve) {
      if (!id) {
        speakFallback(text).then(function (ok) {
          if (buttonEl) buttonEl.classList.remove("is-playing");
          resolve(ok);
        });
        return;
      }

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
        if (buttonEl) buttonEl.classList.remove("is-playing");
        resolve(!!ok);
      };

      audio.onended = function () { finish(true); };
      audio.onerror = function () {
        speakFallback(text).then(finish);
      };
      audio.src = AUDIO_BASE + id + ".mp3";
      var playPromise = audio.play();
      if (playPromise && playPromise.then) {
        playPromise.catch(function () {
          speakFallback(text).then(finish);
        });
      }
      timer = setTimeout(function () { finish(true); }, 12000);
    });
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderTopbar(extraActionsHtml) {
    var ui = t();
    return (
      '<div class="lgp-topbar">' +
        '<div class="lgp-brand">' +
          '<div class="lgp-brand-kicker">' + esc(ui.kicker) + "</div>" +
          '<h1 class="lgp-brand-title">' + esc(ui.brand) + "</h1>" +
          '<p class="lgp-brand-sub">' + esc(ui.subtitle) + "</p>" +
        "</div>" +
        '<div class="lgp-controls">' +
          (extraActionsHtml || "") +
          '<button type="button" class="lgp-chip' + (state.uiLang === "en" ? " is-active" : "") + '" data-action="lang" data-lang="en">' + esc(ui.langEn) + "</button>" +
          '<button type="button" class="lgp-chip' + (state.uiLang === "pl" ? " is-active" : "") + '" data-action="lang" data-lang="pl">' + esc(ui.langPl) + "</button>" +
          '<button type="button" class="lgp-icon-btn" data-action="toggle-sound" aria-pressed="' + (state.sound ? "true" : "false") + '" title="' + esc(state.sound ? ui.soundOn : ui.soundOff) + '">' +
            (state.sound ? "🔊" : "🔇") +
          "</button>" +
        "</div>" +
      "</div>" +
      '<div class="lgp-progress-wrap" aria-label="' + esc(ui.progress) + '">' +
        '<div class="lgp-progress-bar"><div class="lgp-progress-fill" style="width:' + progressPct() + '%"></div></div>' +
        '<div class="lgp-progress-label">' + esc(ui.progress) + ": " + completedCount() + "/" + DATA.modules.length + "</div>" +
      "</div>"
    );
  }

  function filteredModules() {
    var q = (state.search || "").trim().toLowerCase();
    var list = modulesSorted();
    if (!q) return list;
    return list.filter(function (m) {
      var hay = [
        m.id,
        tr(m.title),
        tr(m.summary),
        m.title && m.title.en,
        m.title && m.title.pl,
        m.summary && m.summary.en,
        m.summary && m.summary.pl
      ].join(" ").toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }

  function renderHome() {
    var ui = t();
    var cards = filteredModules().map(function (m, idx) {
      var done = !!state.completed[m.id];
      return (
        '<button type="button" class="lgp-module-card' + (done ? " is-done" : "") + '" data-action="open-module" data-id="' + esc(m.id) + '" style="animation-delay:' + (idx * 0.03) + 's">' +
          '<div class="lgp-mod-top">' +
            '<span class="lgp-mod-icon" aria-hidden="true">' + esc(m.icon || "📘") + "</span>" +
            '<span class="lgp-mod-order">#' + esc(String(m.order || "")) + (done ? ' · <span class="lgp-badge">' + esc(ui.done) + "</span>" : "") + "</span>" +
          "</div>" +
          "<h3>" + esc(tr(m.title)) + "</h3>" +
          "<p>" + esc(tr(m.summary)) + "</p>" +
        "</button>"
      );
    }).join("");

    return (
      '<div class="lgp-aurora" aria-hidden="true"><span></span><span></span><span></span></div>' +
      '<div class="lgp-shell">' +
        renderTopbar() +
        '<section class="lgp-hero">' +
          "<h2>" + esc(ui.heroTitle) + "</h2>" +
          "<p>" + esc(ui.heroBody) + "</p>" +
          '<div class="lgp-hero-actions">' +
            '<button type="button" class="lgp-btn" data-action="scroll-modules">' + esc(ui.browse) + "</button>" +
            '<button type="button" class="lgp-btn lgp-btn-secondary" data-action="practice">' + esc(ui.practice) + "</button>" +
          "</div>" +
        "</section>" +
        '<div class="lgp-search" id="lgp-modules">' +
          '<input type="search" placeholder="' + esc(ui.search) + '" value="' + esc(state.search) + '" data-action="search" />' +
        "</div>" +
        '<div data-modules-host>' +
          (cards
            ? '<div class="lgp-grid">' + cards + "</div>"
            : '<div class="lgp-empty">' + esc(ui.noResults) + "</div>") +
        "</div>" +
        '<p class="lgp-footer-note">' + esc(ui.footer) + "</p>" +
      "</div>"
    );
  }

  function renderTable(table) {
    if (!table) return "";
    var headers = (table.headers || []).map(function (h) {
      return "<th>" + esc(tr(h)) + "</th>";
    }).join("");
    var rows = (table.rows || []).map(function (row) {
      return "<tr>" + row.map(function (cell) {
        return "<td>" + esc(cell) + "</td>";
      }).join("") + "</tr>";
    }).join("");
    return (
      '<div class="lgp-table-wrap"><table class="lgp-table">' +
        (table.caption ? "<caption>" + esc(tr(table.caption)) + "</caption>" : "") +
        "<thead><tr>" + headers + "</tr></thead>" +
        "<tbody>" + rows + "</tbody>" +
      "</table></div>"
    );
  }

  function renderExamples(examples) {
    var ui = t();
    if (!examples || !examples.length) return "";
    return (
      '<div class="lgp-examples" aria-label="' + esc(ui.examples) + '">' +
        examples.map(function (ex) {
          return (
            '<div class="lgp-example">' +
              '<button type="button" class="lgp-speak" data-action="speak" data-audio-id="' + esc(ex.id) + '" data-pt="' + esc(ex.pt) + '" title="' + esc(ui.hear) + '" aria-label="' + esc(ui.hear + ": " + ex.pt) + '">🔊</button>' +
              "<div>" +
                '<p class="lgp-example-pt">' + esc(ex.pt) + "</p>" +
                '<p class="lgp-example-meta">' + esc(ex.en) + " · " + esc(ex.pl) + "</p>" +
                (ex.note ? '<p class="lgp-example-note">' + esc(tr(ex.note)) + "</p>" : "") +
              "</div>" +
            "</div>"
          );
        }).join("") +
      "</div>"
    );
  }

  function renderQuizItem(q, idx, opts) {
    opts = opts || {};
    var ui = t();
    var feedback = state.quizFeedback[q.id];
    var html = '<div class="lgp-quiz-card" data-quiz-id="' + esc(q.id) + '">';
    html += '<p class="lgp-quiz-prompt">' + esc(ui.quizOf) + " " + (idx + 1) + ". " + esc(tr(q.prompt)) + "</p>";

    if (q.audioPt) {
      html += '<button type="button" class="lgp-btn lgp-btn-secondary" data-action="speak" data-audio-id="' + esc(q.id) + '" data-pt="' + esc(q.audioPt) + '" style="margin-bottom:0.7rem">' + esc(ui.hear) + "</button>";
    }

    if (q.type === "fill") {
      html +=
        '<div class="lgp-fill-row">' +
          '<input type="text" data-fill-input="' + esc(q.id) + '" placeholder="' + esc(ui.fillPlaceholder) + '" ' + (feedback ? "disabled" : "") + " />" +
          (!feedback
            ? '<button type="button" class="lgp-btn" data-action="check-fill" data-id="' + esc(q.id) + '">' + esc(ui.check) + "</button>"
            : "") +
        "</div>";
    } else {
      html += '<div class="lgp-choices">';
      (q.choices || []).forEach(function (c) {
        var cls = "lgp-choice";
        if (feedback) {
          if (c.correct) cls += " is-correct";
          if (feedback.chosen === c.id && !c.correct) cls += " is-wrong";
        }
        html +=
          '<button type="button" class="' + cls + '" data-action="choose" data-qid="' + esc(q.id) + '" data-cid="' + esc(c.id) + '" ' + (feedback ? "disabled" : "") + ">" +
            esc(c.label) +
          "</button>";
      });
      html += "</div>";
    }

    if (feedback) {
      html +=
        '<div class="lgp-feedback ' + (feedback.ok ? "ok" : "bad") + '">' +
          "<strong>" + esc(feedback.ok ? ui.correct : ui.wrong) + "</strong> " +
          esc(ui.explain) + ": " + esc(tr(q.explain)) +
        "</div>";
    }

    if (opts.showNext && feedback) {
      html += '<div style="margin-top:0.75rem"><button type="button" class="lgp-btn" data-action="practice-next">' + esc(ui.next) + "</button></div>";
    }

    html += "</div>";
    return html;
  }

  function renderModule() {
    var ui = t();
    var mod = findModule(state.moduleId);
    if (!mod) return renderHome();

    var sections = (mod.sections || []).map(function (sec) {
      var rules = (sec.rules || []).map(function (r) {
        return "<li>" + esc(tr(r)) + "</li>";
      }).join("");
      return (
        '<section class="lgp-section" id="' + esc(sec.id) + '">' +
          "<h3>" + esc(tr(sec.title)) + "</h3>" +
          '<p class="lgp-body-text">' + esc(tr(sec.body)) + "</p>" +
          (rules ? '<ul class="lgp-rules">' + rules + "</ul>" : "") +
          renderTable(sec.table) +
          renderExamples(sec.examples) +
        "</section>"
      );
    }).join("");

    var quiz = (mod.quiz || []).map(function (q, i) {
      return renderQuizItem(q, i);
    }).join("");

    var done = !!state.completed[mod.id];

    return (
      '<div class="lgp-aurora" aria-hidden="true"><span></span><span></span><span></span></div>' +
      '<div class="lgp-shell">' +
        renderTopbar('<button type="button" class="lgp-btn lgp-btn-ghost" data-action="home">' + esc(ui.back) + "</button>") +
        '<article class="lgp-panel">' +
          '<div class="lgp-module-head">' +
            "<div>" +
              '<div class="lgp-mod-order">' + esc(mod.icon || "📘") + " · #" + esc(String(mod.order || "")) + "</div>" +
              "<h2>" + esc(tr(mod.title)) + "</h2>" +
              "<p>" + esc(tr(mod.summary)) + "</p>" +
            "</div>" +
            '<button type="button" class="lgp-btn' + (done ? " lgp-btn-secondary" : "") + '" data-action="toggle-complete" data-id="' + esc(mod.id) + '">' +
              esc(done ? ui.marked : ui.markDone) +
            "</button>" +
          "</div>" +
          (mod.polishTip
            ? '<aside class="lgp-tip"><strong>' + esc(ui.polishTip) + "</strong><p>" + esc(tr(mod.polishTip)) + "</p></aside>"
            : "") +
          sections +
          (quiz
            ? '<section class="lgp-quiz"><h3>' + esc(ui.quiz) + "</h3>" + quiz + "</section>"
            : "") +
          '<div class="lgp-sticky-actions">' +
            '<button type="button" class="lgp-btn lgp-btn-secondary" data-action="home">' + esc(ui.back) + "</button>" +
            '<button type="button" class="lgp-btn" data-action="practice">' + esc(ui.practice) + "</button>" +
          "</div>" +
        "</article>" +
        '<p class="lgp-footer-note">' + esc(ui.footer) + "</p>" +
      "</div>"
    );
  }

  function allQuizItems() {
    var items = [];
    modulesSorted().forEach(function (m) {
      (m.quiz || []).forEach(function (q) {
        items.push({ moduleId: m.id, quiz: q });
      });
    });
    return items;
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

  function ensurePractice() {
    if (state.practice) return;
    state.practice = {
      queue: shuffle(allQuizItems()),
      index: 0,
      score: 0,
      streak: 0,
      answered: 0
    };
    state.quizFeedback = {};
  }

  function renderPractice() {
    var ui = t();
    ensurePractice();
    var p = state.practice;
    var current = p.queue[p.index % p.queue.length];
    var q = current.quiz;

    return (
      '<div class="lgp-aurora" aria-hidden="true"><span></span><span></span><span></span></div>' +
      '<div class="lgp-shell">' +
        renderTopbar('<button type="button" class="lgp-btn lgp-btn-ghost" data-action="home">' + esc(ui.back) + "</button>") +
        '<section class="lgp-hero lgp-practice-hero">' +
          "<h2>" + esc(ui.practiceTitle) + "</h2>" +
          "<p>" + esc(ui.practiceBody) + "</p>" +
        "</section>" +
        '<div class="lgp-score">' +
          '<div class="lgp-stat"><span>' + esc(ui.score) + "</span><strong>" + p.score + "</strong></div>" +
          '<div class="lgp-stat"><span>' + esc(ui.streak) + "</span><strong>" + p.streak + "</strong></div>" +
          '<div class="lgp-stat"><span>' + esc(ui.seen) + "</span><strong>" + p.answered + "</strong></div>" +
        "</div>" +
        '<div class="lgp-panel">' +
          renderQuizItem(q, p.index, { showNext: true }) +
          '<div class="lgp-sticky-actions">' +
            '<button type="button" class="lgp-btn lgp-btn-secondary" data-action="home">' + esc(ui.back) + "</button>" +
            '<button type="button" class="lgp-btn lgp-btn-ghost" data-action="practice-restart">' + esc(ui.startPractice) + "</button>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function render() {
    if (!root) return;
    stopVoice();
    if (state.screen === "module") root.innerHTML = renderModule();
    else if (state.screen === "practice") root.innerHTML = renderPractice();
    else root.innerHTML = renderHome();
  }

  function findQuiz(qid) {
    if (state.screen === "practice" && state.practice) {
      var cur = state.practice.queue[state.practice.index % state.practice.queue.length];
      if (cur && cur.quiz.id === qid) return cur.quiz;
    }
    var mod = findModule(state.moduleId);
    if (!mod) return null;
    for (var i = 0; i < (mod.quiz || []).length; i++) {
      if (mod.quiz[i].id === qid) return mod.quiz[i];
    }
    return null;
  }

  function recordPracticeResult(ok) {
    if (state.screen !== "practice" || !state.practice) return;
    state.practice.answered += 1;
    if (ok) {
      state.practice.score += 1;
      state.practice.streak += 1;
    } else {
      state.practice.streak = 0;
    }
  }

  function onChoose(qid, cid) {
    var q = findQuiz(qid);
    if (!q || state.quizFeedback[qid]) return;
    var choice = null;
    (q.choices || []).forEach(function (c) {
      if (c.id === cid) choice = c;
    });
    if (!choice) return;
    var ok = !!choice.correct;
    state.quizFeedback[qid] = { ok: ok, chosen: cid };
    recordPracticeResult(ok);
    render();
  }

  function onCheckFill(qid) {
    var q = findQuiz(qid);
    if (!q || state.quizFeedback[qid]) return;
    var input = root.querySelector('[data-fill-input="' + qid + '"]');
    var value = input ? String(input.value || "").trim() : "";
    var accept = (q.accept || [q.answer || ""]).map(function (a) {
      return String(a).trim().toLowerCase();
    });
    var ok = accept.indexOf(value.toLowerCase()) !== -1;
    state.quizFeedback[qid] = { ok: ok, chosen: value };
    recordPracticeResult(ok);
    render();
  }

  function onClick(e) {
    var el = e.target.closest("[data-action]");
    if (!el) return;
    var action = el.getAttribute("data-action");

    if (action === "lang") {
      state.uiLang = el.getAttribute("data-lang") === "pl" ? "pl" : "en";
      save();
      render();
      return;
    }
    if (action === "toggle-sound") {
      state.sound = !state.sound;
      if (!state.sound) stopVoice();
      save();
      render();
      return;
    }
    if (action === "home") {
      state.screen = "home";
      state.moduleId = null;
      state.quizFeedback = {};
      render();
      return;
    }
    if (action === "scroll-modules") {
      var target = document.getElementById("lgp-modules");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (action === "open-module") {
      state.screen = "module";
      state.moduleId = el.getAttribute("data-id");
      state.quizFeedback = {};
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (action === "practice") {
      state.screen = "practice";
      state.practice = null;
      state.quizFeedback = {};
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (action === "practice-restart") {
      state.practice = null;
      state.quizFeedback = {};
      render();
      return;
    }
    if (action === "practice-next") {
      if (state.practice) {
        state.practice.index += 1;
        state.quizFeedback = {};
      }
      render();
      return;
    }
    if (action === "toggle-complete") {
      var id = el.getAttribute("data-id");
      state.completed[id] = !state.completed[id];
      save();
      render();
      return;
    }
    if (action === "speak") {
      playClip(el.getAttribute("data-audio-id"), el.getAttribute("data-pt"), el);
      return;
    }
    if (action === "choose") {
      onChoose(el.getAttribute("data-qid"), el.getAttribute("data-cid"));
      return;
    }
    if (action === "check-fill") {
      onCheckFill(el.getAttribute("data-id"));
    }
  }

  function updateHomeGrid() {
    var ui = t();
    var gridHost = root.querySelector("[data-modules-host]");
    if (!gridHost) return;
    var cards = filteredModules().map(function (m, idx) {
      var done = !!state.completed[m.id];
      return (
        '<button type="button" class="lgp-module-card' + (done ? " is-done" : "") + '" data-action="open-module" data-id="' + esc(m.id) + '" style="animation-delay:' + (idx * 0.03) + 's">' +
          '<div class="lgp-mod-top">' +
            '<span class="lgp-mod-icon" aria-hidden="true">' + esc(m.icon || "📘") + "</span>" +
            '<span class="lgp-mod-order">#' + esc(String(m.order || "")) + (done ? ' · <span class="lgp-badge">' + esc(ui.done) + "</span>" : "") + "</span>" +
          "</div>" +
          "<h3>" + esc(tr(m.title)) + "</h3>" +
          "<p>" + esc(tr(m.summary)) + "</p>" +
        "</button>"
      );
    }).join("");
    gridHost.innerHTML = cards
      ? '<div class="lgp-grid">' + cards + "</div>"
      : '<div class="lgp-empty">' + esc(ui.noResults) + "</div>";
  }

  function onInput(e) {
    var el = e.target;
    if (el && el.getAttribute("data-action") === "search") {
      state.search = el.value || "";
      updateHomeGrid();
    }
  }

  function init() {
    root = document.getElementById("lgp-app");
    if (!root) return;
    load();
    root.addEventListener("click", onClick);
    root.addEventListener("input", onInput);
    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = function () {
        window.speechSynthesis.getVoices();
      };
    }
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
