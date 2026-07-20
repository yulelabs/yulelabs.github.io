window.LGP_DATA = {
  "meta": {
    "learner": "Joanna",
    "variety": "European Portuguese (Portugal)",
    "uiLangs": [
      "en",
      "pl"
    ]
  },
  "modules": [
    {
      "id": "alphabet-sounds",
      "icon": "🔊",
      "order": 1,
      "title": {
        "en": "Alphabet and European Portuguese sounds",
        "pl": "Alfabet i dźwięki portugalskiego z Portugalii"
      },
      "summary": {
        "en": "Learn how European Portuguese spelling maps to sound, including reduced vowels and consonants that differ from English or Polish.",
        "pl": "Poznaj związek pisowni z wymową portugalską z Portugalii, w tym zredukowane samogłoski i trudniejsze spółgłoski."
      },
      "polishTip": {
        "en": "Polish spelling is fairly phonetic; Portuguese spelling is less direct because unstressed vowels often become very short or almost silent.",
        "pl": "Polska pisownia jest dość fonetyczna; w portugalskim samogłoski nieakcentowane często stają się bardzo krótkie albo prawie nieme."
      },
      "sections": [
        {
          "id": "ep-sound-system",
          "title": {
            "en": "Core spelling-to-sound patterns",
            "pl": "Najważniejsze zależności pisowni i wymowy"
          },
          "body": {
            "en": "European Portuguese uses the same Latin alphabet, but its rhythm is stress-timed and many unstressed vowels are reduced. Final -e is often very weak, and unstressed o may sound like a short u.\n\nThe letters ç, nh, lh, and rr are especially important. European Portuguese also keeps many word-final and pre-consonant s sounds as a sh-like sound, as in estás or Lisboa depending on the next sound. Brazilian Portuguese usually pronounces vowels more openly and often places object pronouns before the verb more freely.",
            "pl": "Portugalski europejski używa alfabetu łacińskiego, ale ma rytm oparty na akcencie, a wiele samogłosek nieakcentowanych ulega redukcji. Końcowe -e jest często bardzo słabe, a nieakcentowane o może brzmieć jak krótkie u.\n\nSzczególnie ważne są litery ç, nh, lh i rr. W portugalskim z Portugalii końcowe s oraz s przed spółgłoską często brzmi jak sz, np. w estás lub Lisboa zależnie od następnego dźwięku. Portugalski brazylijski zwykle wymawia samogłoski pełniej i częściej stawia zaimki dopełnieniowe przed czasownikiem."
          },
          "rules": [
            {
              "en": "ç sounds like s before a, o, u: almoço, coração.",
              "pl": "ç brzmi jak s przed a, o, u: almoço, coração."
            },
            {
              "en": "nh is like Polish ń in many contexts: vinho, amanhã.",
              "pl": "nh przypomina polskie ń w wielu kontekstach: vinho, amanhã."
            },
            {
              "en": "lh is a palatal l sound, close to Polish l softened before i: velho, trabalho.",
              "pl": "lh to zmiękczone l, trochę jak polskie l przed i: velho, trabalho."
            },
            {
              "en": "rr and initial r are strong guttural sounds in most of Portugal: rua, carro.",
              "pl": "rr i początkowe r są w Portugalii zwykle mocne i gardłowe: rua, carro."
            },
            {
              "en": "Unstressed vowels are shorter in Portugal than in Brazil.",
              "pl": "Samogłoski nieakcentowane są w Portugalii krótsze niż w Brazylii."
            }
          ],
          "examples": [
            {
              "id": "alphabet-sounds-001",
              "pt": "A menina bebe leite.",
              "en": "The girl drinks milk.",
              "pl": "Dziewczynka pije mleko.",
              "note": {
                "en": "Final -e in leite is weak in Portugal.",
                "pl": "Końcowe -e w leite jest w Portugalii słabe."
              }
            },
            {
              "id": "alphabet-sounds-002",
              "pt": "O senhor chama-se Rui.",
              "en": "The gentleman is called Rui.",
              "pl": "Ten pan nazywa się Rui.",
              "note": {
                "en": "Initial r in Rui is strong.",
                "pl": "Początkowe r w Rui jest mocne."
              }
            },
            {
              "id": "alphabet-sounds-003",
              "pt": "Trabalho em Lisboa.",
              "en": "I work in Lisbon.",
              "pl": "Pracuję w Lizbonie."
            },
            {
              "id": "alphabet-sounds-004",
              "pt": "Amanhã tenho uma reunião.",
              "en": "Tomorrow I have a meeting.",
              "pl": "Jutro mam spotkanie."
            },
            {
              "id": "alphabet-sounds-005",
              "pt": "O almoço está pronto.",
              "en": "Lunch is ready.",
              "pl": "Obiad jest gotowy."
            },
            {
              "id": "alphabet-sounds-006",
              "pt": "O carro vermelho é meu.",
              "en": "The red car is mine.",
              "pl": "Czerwony samochód jest mój."
            }
          ],
          "table": {
            "caption": {
              "en": "Useful European Portuguese spellings",
              "pl": "Przydatne pisownie w portugalskim europejskim"
            },
            "headers": [
              {
                "en": "Spelling",
                "pl": "Pisownia"
              },
              {
                "en": "Typical sound",
                "pl": "Typowy dźwięk"
              },
              {
                "en": "Example",
                "pl": "Przykład"
              }
            ],
            "rows": [
              [
                "ç",
                "s",
                "coração"
              ],
              [
                "nh",
                "ny / ń-like",
                "vinho"
              ],
              [
                "lh",
                "soft l",
                "filho"
              ],
              [
                "rr / initial r",
                "strong r",
                "rua, carro"
              ],
              [
                "final -e",
                "very weak",
                "tarde"
              ],
              [
                "final s",
                "sh-like",
                "dois"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-alphabet-sounds-1",
          "type": "choice",
          "prompt": {
            "en": "Which spelling usually sounds like Polish ń?",
            "pl": "Która pisownia zwykle brzmi podobnie do polskiego ń?"
          },
          "choices": [
            {
              "id": "a",
              "label": "nh",
              "correct": true
            },
            {
              "id": "b",
              "label": "lh",
              "correct": false
            },
            {
              "id": "c",
              "label": "rr",
              "correct": false
            }
          ],
          "explain": {
            "en": "nh appears in words like vinho and amanhã.",
            "pl": "nh występuje w słowach takich jak vinho i amanhã."
          },
          "audioPt": "vinho"
        },
        {
          "id": "q-alphabet-sounds-2",
          "type": "choice",
          "prompt": {
            "en": "In European Portuguese, final unstressed -e is usually...",
            "pl": "W portugalskim europejskim końcowe nieakcentowane -e jest zwykle..."
          },
          "choices": [
            {
              "id": "a",
              "label": "very strong",
              "correct": false
            },
            {
              "id": "b",
              "label": "very weak or reduced",
              "correct": true
            },
            {
              "id": "c",
              "label": "pronounced like Polish a",
              "correct": false
            }
          ],
          "explain": {
            "en": "Portugal Portuguese reduces many unstressed vowels.",
            "pl": "Portugalski z Portugalii redukuje wiele samogłosek nieakcentowanych."
          }
        },
        {
          "id": "q-alphabet-sounds-3",
          "type": "fill",
          "prompt": {
            "en": "Complete with the letter that gives an s sound: almo__o",
            "pl": "Uzupełnij literą dającą dźwięk s: almo__o"
          },
          "answer": "ç",
          "accept": [
            "ç",
            "c"
          ],
          "explain": {
            "en": "Almoço is written with ç.",
            "pl": "Almoço pisze się z ç."
          }
        },
        {
          "id": "q-alphabet-sounds-4",
          "type": "choice",
          "prompt": {
            "en": "Which word has a strong rr sound?",
            "pl": "Które słowo ma mocny dźwięk rr?"
          },
          "choices": [
            {
              "id": "a",
              "label": "carro",
              "correct": true
            },
            {
              "id": "b",
              "label": "caro",
              "correct": false
            },
            {
              "id": "c",
              "label": "casa",
              "correct": false
            }
          ],
          "explain": {
            "en": "Carro has double rr; caro has a single intervocalic r.",
            "pl": "Carro ma podwójne rr; caro ma pojedyncze r między samogłoskami."
          }
        }
      ]
    },
    {
      "id": "articles",
      "icon": "📰",
      "order": 2,
      "title": {
        "en": "Definite and indefinite articles",
        "pl": "Rodzajniki określone i nieokreślone"
      },
      "summary": {
        "en": "Use o, a, os, as for known nouns and um, uma, uns, umas for new or non-specific nouns.",
        "pl": "Używaj o, a, os, as przy rzeczach znanych oraz um, uma, uns, umas przy nowych lub nieokreślonych."
      },
      "polishTip": {
        "en": "Polish has no articles, so Portuguese articles often carry information that Polish expresses through context or word order.",
        "pl": "Polski nie ma rodzajników, więc portugalskie rodzajniki niosą informacje, które po polsku wynikają z kontekstu lub szyku zdania."
      },
      "sections": [
        {
          "id": "article-forms",
          "title": {
            "en": "Article forms and use",
            "pl": "Formy i użycie rodzajników"
          },
          "body": {
            "en": "Portuguese articles agree with the noun in gender and number. Definite articles point to something known, unique, or already mentioned: o livro, a casa.\n\nIndefinite articles introduce something new or non-specific: um café, uma ideia. In European Portuguese, articles are also common before possessives: o meu livro, a tua amiga.",
            "pl": "Rodzajniki portugalskie zgadzają się z rzeczownikiem w rodzaju i liczbie. Rodzajniki określone wskazują coś znanego, jedynego lub wcześniej wspomnianego: o livro, a casa.\n\nRodzajniki nieokreślone wprowadzają coś nowego lub niesprecyzowanego: um café, uma ideia. W portugalskim z Portugalii rodzajniki są też częste przed zaimkami dzierżawczymi: o meu livro, a tua amiga."
          },
          "rules": [
            {
              "en": "Masculine singular: o / um.",
              "pl": "Rodzaj męski liczby pojedynczej: o / um."
            },
            {
              "en": "Feminine singular: a / uma.",
              "pl": "Rodzaj żeński liczby pojedynczej: a / uma."
            },
            {
              "en": "Plural definite articles are os and as.",
              "pl": "Rodzajniki określone w liczbie mnogiej to os i as."
            },
            {
              "en": "Articles contract with many prepositions: de + o = do, em + a = na.",
              "pl": "Rodzajniki łączą się z wieloma przyimkami: de + o = do, em + a = na."
            }
          ],
          "examples": [
            {
              "id": "articles-001",
              "pt": "O livro está na mesa.",
              "en": "The book is on the table.",
              "pl": "Książka jest na stole."
            },
            {
              "id": "articles-002",
              "pt": "A casa é antiga, mas bonita.",
              "en": "The house is old, but beautiful.",
              "pl": "Dom jest stary, ale ładny."
            },
            {
              "id": "articles-003",
              "pt": "Comprei um bilhete para o comboio.",
              "en": "I bought a ticket for the train.",
              "pl": "Kupiłam bilet na pociąg."
            },
            {
              "id": "articles-004",
              "pt": "Ela trouxe umas flores para a avó.",
              "en": "She brought some flowers for her grandmother.",
              "pl": "Przyniosła babci kilka kwiatów."
            },
            {
              "id": "articles-005",
              "pt": "Os estudantes estão na biblioteca.",
              "en": "The students are in the library.",
              "pl": "Studenci są w bibliotece."
            },
            {
              "id": "articles-006",
              "pt": "A tua mochila está no autocarro.",
              "en": "Your backpack is on the bus.",
              "pl": "Twój plecak jest w autobusie."
            }
          ],
          "table": {
            "caption": {
              "en": "Articles",
              "pl": "Rodzajniki"
            },
            "headers": [
              {
                "en": "Meaning",
                "pl": "Znaczenie"
              },
              {
                "en": "Masculine singular",
                "pl": "Męski lp."
              },
              {
                "en": "Feminine singular",
                "pl": "Żeński lp."
              },
              {
                "en": "Masculine plural",
                "pl": "Męski lm."
              },
              {
                "en": "Feminine plural",
                "pl": "Żeński lm."
              }
            ],
            "rows": [
              [
                "the",
                "o",
                "a",
                "os",
                "as"
              ],
              [
                "a/an, some",
                "um",
                "uma",
                "uns",
                "umas"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-articles-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: ___ livro está na mesa.",
            "pl": "Uzupełnij: ___ livro está na mesa."
          },
          "choices": [
            {
              "id": "a",
              "label": "O",
              "correct": true
            },
            {
              "id": "b",
              "label": "A",
              "correct": false
            },
            {
              "id": "c",
              "label": "Os",
              "correct": false
            }
          ],
          "explain": {
            "en": "Livro is masculine singular, so use o.",
            "pl": "Livro jest rodzaju męskiego w liczbie pojedynczej, więc używamy o."
          }
        },
        {
          "id": "q-articles-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Comprei ___ maçã.",
            "pl": "Uzupełnij: Comprei ___ maçã."
          },
          "answer": "uma",
          "accept": [
            "uma",
            "Uma"
          ],
          "explain": {
            "en": "Maçã is feminine singular and new information.",
            "pl": "Maçã jest żeńskie w liczbie pojedynczej i oznacza nową informację."
          }
        },
        {
          "id": "q-articles-3",
          "type": "choice",
          "prompt": {
            "en": "Which is feminine plural definite?",
            "pl": "Która forma jest żeńska mnoga określona?"
          },
          "choices": [
            {
              "id": "a",
              "label": "as",
              "correct": true
            },
            {
              "id": "b",
              "label": "os",
              "correct": false
            },
            {
              "id": "c",
              "label": "um",
              "correct": false
            }
          ],
          "explain": {
            "en": "As is 'the' for feminine plural nouns.",
            "pl": "As oznacza 'te' przy rzeczownikach żeńskich w liczbie mnogiej."
          }
        },
        {
          "id": "q-articles-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: ___ estudantes chegaram cedo.",
            "pl": "Uzupełnij: ___ estudantes chegaram cedo."
          },
          "answer": "Os",
          "accept": [
            "Os",
            "os"
          ],
          "explain": {
            "en": "Estudantes can be masculine or mixed plural; the definite article is os.",
            "pl": "Estudantes może być męskie lub mieszane w liczbie mnogiej; rodzajnik określony to os."
          }
        }
      ]
    },
    {
      "id": "nouns-gender",
      "icon": "⚖️",
      "order": 3,
      "title": {
        "en": "Noun gender",
        "pl": "Rodzaj rzeczowników"
      },
      "summary": {
        "en": "Portuguese nouns are masculine or feminine, and articles, adjectives, and pronouns must agree with them.",
        "pl": "Rzeczowniki portugalskie są męskie albo żeńskie, a rodzajniki, przymiotniki i zaimki muszą się z nimi zgadzać."
      },
      "polishTip": {
        "en": "Polish has three genders and cases; Portuguese has two genders but no case endings on nouns.",
        "pl": "Polski ma trzy rodzaje i przypadki; portugalski ma dwa rodzaje, ale rzeczowniki nie odmieniają się przez przypadki."
      },
      "sections": [
        {
          "id": "gender-patterns",
          "title": {
            "en": "Gender patterns and exceptions",
            "pl": "Wzorce rodzaju i wyjątki"
          },
          "body": {
            "en": "Many nouns ending in -o are masculine and many ending in -a are feminine, but this is only a pattern, not a guarantee. Nouns ending in -ção, -dade, -agem, and -ice are usually feminine.\n\nSome nouns change ending for people and animals: o amigo / a amiga, o professor / a professora. Others have fixed gender and need to be memorised with the article: o problema, a mão.",
            "pl": "Wiele rzeczowników zakończonych na -o jest męskich, a wiele zakończonych na -a jest żeńskich, ale to tylko wzorzec, nie gwarancja. Rzeczowniki na -ção, -dade, -agem i -ice są zwykle żeńskie.\n\nNiektóre rzeczowniki zmieniają końcówkę przy osobach i zwierzętach: o amigo / a amiga, o professor / a professora. Inne mają stały rodzaj i najlepiej uczyć się ich z rodzajnikiem: o problema, a mão."
          },
          "rules": [
            {
              "en": "Learn nouns together with o or a.",
              "pl": "Ucz się rzeczowników razem z o albo a."
            },
            {
              "en": "-ção, -dade and -agem are normally feminine.",
              "pl": "-ção, -dade i -agem są zwykle żeńskie."
            },
            {
              "en": "Some -a nouns are masculine: o dia, o problema.",
              "pl": "Niektóre rzeczowniki na -a są męskie: o dia, o problema."
            },
            {
              "en": "A few common nouns ending in -ão are feminine: a mão, a televisão.",
              "pl": "Kilka częstych rzeczowników na -ão jest żeńskich: a mão, a televisão."
            }
          ],
          "examples": [
            {
              "id": "nouns-gender-001",
              "pt": "O problema é simples.",
              "en": "The problem is simple.",
              "pl": "Problem jest prosty."
            },
            {
              "id": "nouns-gender-002",
              "pt": "A viagem foi longa.",
              "en": "The trip was long.",
              "pl": "Podróż była długa."
            },
            {
              "id": "nouns-gender-003",
              "pt": "O professor fala devagar.",
              "en": "The teacher speaks slowly.",
              "pl": "Nauczyciel mówi powoli."
            },
            {
              "id": "nouns-gender-004",
              "pt": "A professora explica muito bem.",
              "en": "The teacher explains very well.",
              "pl": "Nauczycielka bardzo dobrze tłumaczy."
            },
            {
              "id": "nouns-gender-005",
              "pt": "A mão dela está fria.",
              "en": "Her hand is cold.",
              "pl": "Jej ręka jest zimna."
            },
            {
              "id": "nouns-gender-006",
              "pt": "O dia está bonito.",
              "en": "The day is beautiful.",
              "pl": "Dzień jest piękny."
            }
          ],
          "table": {
            "caption": {
              "en": "Common gender signals",
              "pl": "Częste wskazówki rodzaju"
            },
            "headers": [
              {
                "en": "Ending",
                "pl": "Końcówka"
              },
              {
                "en": "Usual gender",
                "pl": "Zwykły rodzaj"
              },
              {
                "en": "Example",
                "pl": "Przykład"
              }
            ],
            "rows": [
              [
                "-o",
                "masculine",
                "o livro"
              ],
              [
                "-a",
                "feminine",
                "a casa"
              ],
              [
                "-ção",
                "feminine",
                "a canção"
              ],
              [
                "-dade",
                "feminine",
                "a cidade"
              ],
              [
                "-agem",
                "feminine",
                "a viagem"
              ],
              [
                "exception",
                "memorise",
                "o problema"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-nouns-gender-1",
          "type": "choice",
          "prompt": {
            "en": "Which article fits problema?",
            "pl": "Który rodzajnik pasuje do problema?"
          },
          "choices": [
            {
              "id": "a",
              "label": "o",
              "correct": true
            },
            {
              "id": "b",
              "label": "a",
              "correct": false
            }
          ],
          "explain": {
            "en": "Problema ends in -a but is masculine.",
            "pl": "Problema kończy się na -a, ale jest rodzaju męskiego."
          }
        },
        {
          "id": "q-nouns-gender-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: ___ cidade é pequena.",
            "pl": "Uzupełnij: ___ cidade é pequena."
          },
          "answer": "A",
          "accept": [
            "A",
            "a"
          ],
          "explain": {
            "en": "Cidade is feminine.",
            "pl": "Cidade jest rodzaju żeńskiego."
          }
        },
        {
          "id": "q-nouns-gender-3",
          "type": "choice",
          "prompt": {
            "en": "Which ending is usually feminine?",
            "pl": "Która końcówka jest zwykle żeńska?"
          },
          "choices": [
            {
              "id": "a",
              "label": "-ção",
              "correct": true
            },
            {
              "id": "b",
              "label": "-or",
              "correct": false
            },
            {
              "id": "c",
              "label": "-o",
              "correct": false
            }
          ],
          "explain": {
            "en": "Words ending in -ção are normally feminine.",
            "pl": "Słowa na -ção są zwykle żeńskie."
          }
        },
        {
          "id": "q-nouns-gender-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: ___ mão está fria.",
            "pl": "Uzupełnij: ___ mão está fria."
          },
          "answer": "A",
          "accept": [
            "A",
            "a"
          ],
          "explain": {
            "en": "Mão is a common feminine noun ending in -ão.",
            "pl": "Mão to częsty rzeczownik żeński zakończony na -ão."
          }
        }
      ]
    },
    {
      "id": "nouns-number",
      "icon": "🔢",
      "order": 4,
      "title": {
        "en": "Noun number and plurals",
        "pl": "Liczba rzeczowników i liczba mnoga"
      },
      "summary": {
        "en": "Form plurals with -s, -es, and special patterns such as -ão to -ões, -ães, or -ãos.",
        "pl": "Twórz liczbę mnogą przez -s, -es oraz specjalne wzorce, np. -ão na -ões, -ães lub -ãos."
      },
      "polishTip": {
        "en": "Polish plurals depend heavily on gender and case; Portuguese plurals are usually simpler, but -ão forms must be memorised.",
        "pl": "Polskie liczby mnogie silnie zależą od rodzaju i przypadku; portugalskie są zwykle prostsze, ale formy na -ão trzeba zapamiętywać."
      },
      "sections": [
        {
          "id": "plural-patterns",
          "title": {
            "en": "Regular and irregular plural patterns",
            "pl": "Regularne i nieregularne wzorce liczby mnogiej"
          },
          "body": {
            "en": "Most Portuguese nouns add -s in the plural: casa -> casas, livro -> livros. Nouns ending in -r, -s, or -z usually add -es: professor -> professores, mês -> meses.\n\nWords ending in -ão are the main challenge. Many become -ões, some become -ães, and some simply add -s as -ãos. There are tendencies, but common words should be learned individually.",
            "pl": "Większość portugalskich rzeczowników dodaje -s w liczbie mnogiej: casa -> casas, livro -> livros. Rzeczowniki na -r, -s lub -z zwykle dodają -es: professor -> professores, mês -> meses.\n\nNajwiększym wyzwaniem są słowa zakończone na -ão. Wiele zmienia się w -ões, część w -ães, a część po prostu dodaje -s jako -ãos. Są pewne tendencje, ale częste słowa najlepiej zapamiętywać osobno."
          },
          "rules": [
            {
              "en": "Vowel endings usually add -s.",
              "pl": "Po samogłosce zwykle dodaje się -s."
            },
            {
              "en": "-r, -s, -z usually add -es.",
              "pl": "Po -r, -s, -z zwykle dodaje się -es."
            },
            {
              "en": "-m changes to -ns: homem -> homens.",
              "pl": "-m zmienia się w -ns: homem -> homens."
            },
            {
              "en": "-ão has three common plurals: -ões, -ães, -ãos.",
              "pl": "-ão ma trzy częste liczby mnogie: -ões, -ães, -ãos."
            }
          ],
          "examples": [
            {
              "id": "nouns-number-001",
              "pt": "Tenho dois livros novos.",
              "en": "I have two new books.",
              "pl": "Mam dwie nowe książki."
            },
            {
              "id": "nouns-number-002",
              "pt": "As mulheres esperam pelo autocarro.",
              "en": "The women are waiting for the bus.",
              "pl": "Kobiety czekają na autobus."
            },
            {
              "id": "nouns-number-003",
              "pt": "Os cães estão no jardim.",
              "en": "The dogs are in the garden.",
              "pl": "Psy są w ogrodzie."
            },
            {
              "id": "nouns-number-004",
              "pt": "As estações do ano são quatro.",
              "en": "There are four seasons of the year.",
              "pl": "Są cztery pory roku."
            },
            {
              "id": "nouns-number-005",
              "pt": "Os irmãos vivem em Coimbra.",
              "en": "The brothers live in Coimbra.",
              "pl": "Bracia mieszkają w Coimbrze."
            },
            {
              "id": "nouns-number-006",
              "pt": "Há muitos pães nesta padaria.",
              "en": "There are many loaves of bread in this bakery.",
              "pl": "W tej piekarni jest dużo chlebów."
            }
          ],
          "table": {
            "caption": {
              "en": "Plural patterns",
              "pl": "Wzorce liczby mnogiej"
            },
            "headers": [
              {
                "en": "Singular ending",
                "pl": "Końcówka lp."
              },
              {
                "en": "Plural",
                "pl": "Liczba mnoga"
              },
              {
                "en": "Example",
                "pl": "Przykład"
              }
            ],
            "rows": [
              [
                "vowel",
                "+s",
                "casa -> casas"
              ],
              [
                "-r",
                "+es",
                "professor -> professores"
              ],
              [
                "-z",
                "+es",
                "rapaz -> rapazes"
              ],
              [
                "-m",
                "-ns",
                "homem -> homens"
              ],
              [
                "-ão",
                "-ões",
                "estação -> estações"
              ],
              [
                "-ão",
                "-ães",
                "pão -> pães"
              ],
              [
                "-ão",
                "-ãos",
                "irmão -> irmãos"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-nouns-number-1",
          "type": "choice",
          "prompt": {
            "en": "What is the plural of livro?",
            "pl": "Jaka jest liczba mnoga od livro?"
          },
          "choices": [
            {
              "id": "a",
              "label": "livros",
              "correct": true
            },
            {
              "id": "b",
              "label": "livres",
              "correct": false
            },
            {
              "id": "c",
              "label": "livrões",
              "correct": false
            }
          ],
          "explain": {
            "en": "A noun ending in a vowel normally adds -s.",
            "pl": "Rzeczownik zakończony na samogłoskę zwykle dodaje -s."
          }
        },
        {
          "id": "q-nouns-number-2",
          "type": "fill",
          "prompt": {
            "en": "Complete the plural: pão -> ___",
            "pl": "Uzupełnij liczbę mnogą: pão -> ___"
          },
          "answer": "pães",
          "accept": [
            "pães",
            "Pães"
          ],
          "explain": {
            "en": "Pão has the plural pães.",
            "pl": "Pão ma liczbę mnogą pães."
          }
        },
        {
          "id": "q-nouns-number-3",
          "type": "choice",
          "prompt": {
            "en": "What is the plural of professor?",
            "pl": "Jaka jest liczba mnoga od professor?"
          },
          "choices": [
            {
              "id": "a",
              "label": "professores",
              "correct": true
            },
            {
              "id": "b",
              "label": "professors",
              "correct": false
            },
            {
              "id": "c",
              "label": "professoros",
              "correct": false
            }
          ],
          "explain": {
            "en": "Words ending in -r usually add -es.",
            "pl": "Słowa na -r zwykle dodają -es."
          }
        },
        {
          "id": "q-nouns-number-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: uma estação, duas ___",
            "pl": "Uzupełnij: uma estação, duas ___"
          },
          "answer": "estações",
          "accept": [
            "estações",
            "Estações"
          ],
          "explain": {
            "en": "Estação becomes estações.",
            "pl": "Estação zmienia się w estações."
          }
        }
      ]
    },
    {
      "id": "adjectives",
      "icon": "🎨",
      "order": 5,
      "title": {
        "en": "Adjectives",
        "pl": "Przymiotniki"
      },
      "summary": {
        "en": "Portuguese adjectives agree in gender and number and often follow the noun.",
        "pl": "Portugalskie przymiotniki zgadzają się w rodzaju i liczbie i często stoją po rzeczowniku."
      },
      "polishTip": {
        "en": "Polish adjectives also agree, but Polish uses case endings; Portuguese agreement is mainly gender and number.",
        "pl": "Polskie przymiotniki też się zgadzają, ale mają końcówki przypadków; w portugalskim chodzi głównie o rodzaj i liczbę."
      },
      "sections": [
        {
          "id": "adjective-agreement",
          "title": {
            "en": "Agreement, position, and common irregular forms",
            "pl": "Zgoda, pozycja i częste formy nieregularne"
          },
          "body": {
            "en": "Most adjectives follow the noun: uma casa bonita, um carro novo. They agree with the noun: bonito, bonita, bonitos, bonitas. Some adjectives ending in -e or a consonant have one singular form for both genders: interessante, feliz.\n\nSome adjectives before the noun can sound more subjective or idiomatic: um grande amigo means a great friend, while um amigo grande means a physically big friend. Bom and mau have special short forms before masculine singular nouns: bom dia, mau tempo.",
            "pl": "Większość przymiotników stoi po rzeczowniku: uma casa bonita, um carro novo. Zgadzają się z rzeczownikiem: bonito, bonita, bonitos, bonitas. Niektóre przymiotniki na -e lub spółgłoskę mają jedną formę liczby pojedynczej dla obu rodzajów: interessante, feliz.\n\nNiektóre przymiotniki przed rzeczownikiem brzmią bardziej subiektywnie lub idiomatycznie: um grande amigo to wspaniały przyjaciel, a um amigo grande to przyjaciel duży fizycznie. Bom i mau mają krótkie formy przed rzeczownikami męskimi w liczbie pojedynczej: bom dia, mau tempo."
          },
          "rules": [
            {
              "en": "Adjectives normally come after nouns.",
              "pl": "Przymiotniki zwykle stoją po rzeczownikach."
            },
            {
              "en": "Adjectives agree in gender and number.",
              "pl": "Przymiotniki zgadzają się w rodzaju i liczbie."
            },
            {
              "en": "Adjectives ending in -e often have the same masculine and feminine singular form.",
              "pl": "Przymiotniki na -e często mają tę samą formę męską i żeńską w liczbie pojedynczej."
            },
            {
              "en": "Grande before the noun often means 'great'; after the noun it often means 'big'.",
              "pl": "Grande przed rzeczownikiem często znaczy 'wspaniały'; po rzeczowniku często znaczy 'duży'."
            }
          ],
          "examples": [
            {
              "id": "adjectives-001",
              "pt": "A casa branca fica perto do rio.",
              "en": "The white house is near the river.",
              "pl": "Biały dom jest blisko rzeki."
            },
            {
              "id": "adjectives-002",
              "pt": "Os cafés portugueses são fortes.",
              "en": "Portuguese coffees are strong.",
              "pl": "Portugalskie kawy są mocne."
            },
            {
              "id": "adjectives-003",
              "pt": "Tenho uma amiga interessante.",
              "en": "I have an interesting friend.",
              "pl": "Mam ciekawą przyjaciółkę."
            },
            {
              "id": "adjectives-004",
              "pt": "Ele é um grande professor.",
              "en": "He is a great teacher.",
              "pl": "On jest świetnym nauczycielem."
            },
            {
              "id": "adjectives-005",
              "pt": "O professor é alto e simpático.",
              "en": "The teacher is tall and nice.",
              "pl": "Nauczyciel jest wysoki i sympatyczny."
            },
            {
              "id": "adjectives-006",
              "pt": "Bom dia, Joanna!",
              "en": "Good morning, Joanna!",
              "pl": "Dzień dobry, Joanno!"
            }
          ],
          "table": {
            "caption": {
              "en": "Adjective agreement",
              "pl": "Zgoda przymiotników"
            },
            "headers": [
              {
                "en": "Base idea",
                "pl": "Znaczenie"
              },
              {
                "en": "Masc. sg.",
                "pl": "Męski lp."
              },
              {
                "en": "Fem. sg.",
                "pl": "Żeński lp."
              },
              {
                "en": "Masc. pl.",
                "pl": "Męski lm."
              },
              {
                "en": "Fem. pl.",
                "pl": "Żeński lm."
              }
            ],
            "rows": [
              [
                "pretty",
                "bonito",
                "bonita",
                "bonitos",
                "bonitas"
              ],
              [
                "Portuguese",
                "português",
                "portuguesa",
                "portugueses",
                "portuguesas"
              ],
              [
                "interesting",
                "interessante",
                "interessante",
                "interessantes",
                "interessantes"
              ],
              [
                "happy",
                "feliz",
                "feliz",
                "felizes",
                "felizes"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-adjectives-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: uma casa ___",
            "pl": "Uzupełnij: uma casa ___"
          },
          "choices": [
            {
              "id": "a",
              "label": "bonita",
              "correct": true
            },
            {
              "id": "b",
              "label": "bonito",
              "correct": false
            },
            {
              "id": "c",
              "label": "bonitos",
              "correct": false
            }
          ],
          "explain": {
            "en": "Casa is feminine singular, so bonita agrees.",
            "pl": "Casa jest żeńska w liczbie pojedynczej, więc pasuje bonita."
          }
        },
        {
          "id": "q-adjectives-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: os livros ___",
            "pl": "Uzupełnij: os livros ___"
          },
          "answer": "novos",
          "accept": [
            "novos",
            "Novos"
          ],
          "explain": {
            "en": "Livros is masculine plural.",
            "pl": "Livros jest męskie w liczbie mnogiej."
          }
        },
        {
          "id": "q-adjectives-3",
          "type": "choice",
          "prompt": {
            "en": "Which means 'a great friend' rather than a physically big friend?",
            "pl": "Które znaczy 'wspaniały przyjaciel', a nie fizycznie duży przyjaciel?"
          },
          "choices": [
            {
              "id": "a",
              "label": "um grande amigo",
              "correct": true
            },
            {
              "id": "b",
              "label": "um amigo grande",
              "correct": false
            }
          ],
          "explain": {
            "en": "Grande before the noun is often evaluative.",
            "pl": "Grande przed rzeczownikiem często jest oceniające."
          }
        },
        {
          "id": "q-adjectives-4",
          "type": "fill",
          "prompt": {
            "en": "Complete the greeting: ___ dia!",
            "pl": "Uzupełnij pozdrowienie: ___ dia!"
          },
          "answer": "Bom",
          "accept": [
            "Bom",
            "bom"
          ],
          "explain": {
            "en": "Before dia, use bom.",
            "pl": "Przed dia używa się bom."
          }
        }
      ]
    },
    {
      "id": "personal-pronouns",
      "icon": "👤",
      "order": 6,
      "title": {
        "en": "Personal pronouns and forms of address",
        "pl": "Zaimki osobowe i formy zwracania się"
      },
      "summary": {
        "en": "European Portuguese keeps tu forms alive and uses você more carefully than Brazilian Portuguese.",
        "pl": "Portugalski europejski żywo używa form tu i ostrożniej używa você niż portugalski brazylijski."
      },
      "polishTip": {
        "en": "Polish has ty/pan/pani distinctions; European Portuguese has a similar social sensitivity with tu, você, o senhor, and a senhora.",
        "pl": "Polski ma rozróżnienie ty/pan/pani; portugalski europejski podobnie zwraca uwagę na tu, você, o senhor i a senhora."
      },
      "sections": [
        {
          "id": "subject-pronouns",
          "title": {
            "en": "Subject pronouns and social meaning",
            "pl": "Zaimki podmiotowe i znaczenie społeczne"
          },
          "body": {
            "en": "Subject pronouns are often omitted because verb endings identify the subject: falo, falas, falamos. Use the pronoun for emphasis, contrast, or clarity.\n\nIn Portugal, tu with second-person verb forms is common among family, friends, classmates, and children. Você takes third-person verb forms and can sound distant, hierarchical, or even blunt in some contexts. For politeness, people often use o senhor, a senhora, a professora, or the person's name with third-person verbs.",
            "pl": "Zaimki podmiotowe często się opuszcza, bo końcówki czasownika wskazują osobę: falo, falas, falamos. Użyj zaimka dla nacisku, kontrastu lub jasności.\n\nW Portugalii tu z formą drugiej osoby jest częste w rodzinie, wśród znajomych, kolegów i dzieci. Você łączy się z trzecią osobą i może brzmieć z dystansem, hierarchicznie, a czasem nawet szorstko. W uprzejmym języku często używa się o senhor, a senhora, a professora albo imienia z czasownikiem w trzeciej osobie."
          },
          "rules": [
            {
              "en": "Eu, tu, ele/ela, nós, vocês/eles/elas are the main subject pronouns.",
              "pl": "Eu, tu, ele/ela, nós, vocês/eles/elas to główne zaimki podmiotowe."
            },
            {
              "en": "Tu uses second-person singular verbs: tu falas.",
              "pl": "Tu używa czasownika w 2. osobie liczby pojedynczej: tu falas."
            },
            {
              "en": "Você, o senhor, and a senhora use third-person verbs: você fala.",
              "pl": "Você, o senhor i a senhora używają 3. osoby: você fala."
            },
            {
              "en": "Pronouns are often omitted when the ending is clear.",
              "pl": "Zaimki często się opuszcza, gdy końcówka jest jasna."
            }
          ],
          "examples": [
            {
              "id": "personal-pronouns-001",
              "pt": "Eu sou polaca e vivo em Lisboa.",
              "en": "I am Polish and I live in Lisbon.",
              "pl": "Jestem Polką i mieszkam w Lizbonie."
            },
            {
              "id": "personal-pronouns-002",
              "pt": "Tu falas muito bem português.",
              "en": "You speak Portuguese very well.",
              "pl": "Bardzo dobrze mówisz po portugalsku."
            },
            {
              "id": "personal-pronouns-003",
              "pt": "O senhor quer um café?",
              "en": "Would you like a coffee, sir?",
              "pl": "Czy pan chce kawę?"
            },
            {
              "id": "personal-pronouns-004",
              "pt": "A senhora precisa de ajuda?",
              "en": "Do you need help, madam?",
              "pl": "Czy pani potrzebuje pomocy?"
            },
            {
              "id": "personal-pronouns-005",
              "pt": "Nós vamos de comboio.",
              "en": "We are going by train.",
              "pl": "Jedziemy pociągiem."
            },
            {
              "id": "personal-pronouns-006",
              "pt": "Eles moram perto da praia.",
              "en": "They live near the beach.",
              "pl": "Oni mieszkają blisko plaży."
            }
          ],
          "table": {
            "caption": {
              "en": "Subject and treatment pronouns",
              "pl": "Zaimki podmiotowe i grzecznościowe"
            },
            "headers": [
              {
                "en": "Pronoun",
                "pl": "Zaimek"
              },
              {
                "en": "Verb person",
                "pl": "Osoba czasownika"
              },
              {
                "en": "Typical use in Portugal",
                "pl": "Typowe użycie w Portugalii"
              }
            ],
            "rows": [
              [
                "eu",
                "1st singular",
                "I"
              ],
              [
                "tu",
                "2nd singular",
                "informal you"
              ],
              [
                "ele/ela",
                "3rd singular",
                "he/she"
              ],
              [
                "você",
                "3rd singular",
                "distant or context-dependent you"
              ],
              [
                "o senhor/a senhora",
                "3rd singular",
                "polite sir/madam"
              ],
              [
                "nós",
                "1st plural",
                "we"
              ],
              [
                "vocês",
                "3rd plural",
                "you plural"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-personal-pronouns-1",
          "type": "choice",
          "prompt": {
            "en": "Which verb form goes with tu?",
            "pl": "Która forma czasownika pasuje do tu?"
          },
          "choices": [
            {
              "id": "a",
              "label": "falas",
              "correct": true
            },
            {
              "id": "b",
              "label": "fala",
              "correct": false
            },
            {
              "id": "c",
              "label": "falam",
              "correct": false
            }
          ],
          "explain": {
            "en": "Tu uses the second-person singular form.",
            "pl": "Tu używa formy 2. osoby liczby pojedynczej."
          }
        },
        {
          "id": "q-personal-pronouns-2",
          "type": "fill",
          "prompt": {
            "en": "Complete politely: ___ quer um café?",
            "pl": "Uzupełnij uprzejmie: ___ quer um café?"
          },
          "answer": "O senhor",
          "accept": [
            "O senhor",
            "o senhor",
            "A senhora",
            "a senhora"
          ],
          "explain": {
            "en": "O senhor/a senhora uses third-person verbs and sounds polite.",
            "pl": "O senhor/a senhora używa 3. osoby i brzmi uprzejmie."
          }
        },
        {
          "id": "q-personal-pronouns-3",
          "type": "choice",
          "prompt": {
            "en": "In Portugal, você often sounds...",
            "pl": "W Portugalii você często brzmi..."
          },
          "choices": [
            {
              "id": "a",
              "label": "more distant or hierarchical",
              "correct": true
            },
            {
              "id": "b",
              "label": "always intimate",
              "correct": false
            },
            {
              "id": "c",
              "label": "only plural",
              "correct": false
            }
          ],
          "explain": {
            "en": "Você is not the default friendly 'you' in Portugal.",
            "pl": "Você nie jest w Portugalii domyślnym przyjacielskim 'ty'."
          }
        },
        {
          "id": "q-personal-pronouns-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: ___ vamos ao mercado.",
            "pl": "Uzupełnij: ___ vamos ao mercado."
          },
          "answer": "Nós",
          "accept": [
            "Nós",
            "nós"
          ],
          "explain": {
            "en": "Vamos is first-person plural.",
            "pl": "Vamos to 1. osoba liczby mnogiej."
          }
        }
      ]
    },
    {
      "id": "possessives",
      "icon": "🔑",
      "order": 7,
      "title": {
        "en": "Possessives",
        "pl": "Zaimki dzierżawcze"
      },
      "summary": {
        "en": "Portuguese possessives agree with the thing possessed, and European Portuguese usually uses an article before them.",
        "pl": "Portugalskie dzierżawcze zgadzają się z posiadaną rzeczą, a portugalski europejski zwykle stawia przed nimi rodzajnik."
      },
      "polishTip": {
        "en": "Polish mój/moja/moje also agrees with the possessed noun; Portuguese is similar, but it often adds an article: o meu livro.",
        "pl": "Polskie mój/moja/moje też zgadza się z posiadanym rzeczownikiem; portugalski jest podobny, ale często dodaje rodzajnik: o meu livro."
      },
      "sections": [
        {
          "id": "possessive-forms",
          "title": {
            "en": "Forms and articles",
            "pl": "Formy i rodzajniki"
          },
          "body": {
            "en": "Possessives agree with the noun they describe, not with the owner: o meu livro, a minha mala, os meus livros, as minhas malas.\n\nIn European Portuguese, the definite article is normally used before possessives when they modify a noun. With family nouns the article is common too in everyday speech: a minha mãe, o teu irmão. Seu/sua can mean his, her, your formal, or their, so dele/dela/deles/delas is often clearer.",
            "pl": "Zaimki dzierżawcze zgadzają się z rzeczownikiem, który opisują, a nie z właścicielem: o meu livro, a minha mala, os meus livros, as minhas malas.\n\nW portugalskim europejskim rodzajnik określony zwykle stoi przed dzierżawczym, gdy opisuje ono rzeczownik. Przy członkach rodziny też jest częsty w mowie codziennej: a minha mãe, o teu irmão. Seu/sua może znaczyć jego, jej, pana/pani lub ich, więc dele/dela/deles/delas bywa jaśniejsze."
          },
          "rules": [
            {
              "en": "Possessives agree with the possessed noun.",
              "pl": "Zaimki dzierżawcze zgadzają się z posiadanym rzeczownikiem."
            },
            {
              "en": "Use articles commonly: o meu, a tua, os nossos.",
              "pl": "Często używaj rodzajników: o meu, a tua, os nossos."
            },
            {
              "en": "Teu/tua match tu; seu/sua match você/o senhor/a senhora or third person.",
              "pl": "Teu/tua pasują do tu; seu/sua do você/o senhor/a senhora albo trzeciej osoby."
            },
            {
              "en": "Dele/dela avoids ambiguity.",
              "pl": "Dele/dela usuwa dwuznaczność."
            }
          ],
          "examples": [
            {
              "id": "possessives-001",
              "pt": "O meu telemóvel ficou em casa.",
              "en": "My mobile phone stayed at home.",
              "pl": "Mój telefon komórkowy został w domu."
            },
            {
              "id": "possessives-002",
              "pt": "A tua irmã trabalha no Porto.",
              "en": "Your sister works in Porto.",
              "pl": "Twoja siostra pracuje w Porto."
            },
            {
              "id": "possessives-003",
              "pt": "Os nossos amigos vêm jantar.",
              "en": "Our friends are coming for dinner.",
              "pl": "Nasi przyjaciele przychodzą na kolację."
            },
            {
              "id": "possessives-004",
              "pt": "A mochila dela está ali.",
              "en": "Her backpack is over there.",
              "pl": "Jej plecak jest tam."
            },
            {
              "id": "possessives-005",
              "pt": "As minhas chaves estão na mala.",
              "en": "My keys are in the bag.",
              "pl": "Moje klucze są w torbie."
            },
            {
              "id": "possessives-006",
              "pt": "O seu passaporte está pronto, senhora Kowalska.",
              "en": "Your passport is ready, Mrs Kowalska.",
              "pl": "Pani paszport jest gotowy, pani Kowalska."
            }
          ],
          "table": {
            "caption": {
              "en": "Possessives with articles",
              "pl": "Dzierżawcze z rodzajnikami"
            },
            "headers": [
              {
                "en": "Owner",
                "pl": "Właściciel"
              },
              {
                "en": "Masc. sg.",
                "pl": "Męski lp."
              },
              {
                "en": "Fem. sg.",
                "pl": "Żeński lp."
              },
              {
                "en": "Masc. pl.",
                "pl": "Męski lm."
              },
              {
                "en": "Fem. pl.",
                "pl": "Żeński lm."
              }
            ],
            "rows": [
              [
                "my",
                "o meu",
                "a minha",
                "os meus",
                "as minhas"
              ],
              [
                "your informal",
                "o teu",
                "a tua",
                "os teus",
                "as tuas"
              ],
              [
                "our",
                "o nosso",
                "a nossa",
                "os nossos",
                "as nossas"
              ],
              [
                "his/her/formal your",
                "o seu",
                "a sua",
                "os seus",
                "as suas"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-possessives-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: ___ minha casa fica aqui.",
            "pl": "Uzupełnij: ___ minha casa fica aqui."
          },
          "choices": [
            {
              "id": "a",
              "label": "A",
              "correct": true
            },
            {
              "id": "b",
              "label": "O",
              "correct": false
            },
            {
              "id": "c",
              "label": "Os",
              "correct": false
            }
          ],
          "explain": {
            "en": "Casa is feminine singular, so a minha casa.",
            "pl": "Casa jest żeńska w liczbie pojedynczej, więc a minha casa."
          }
        },
        {
          "id": "q-possessives-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: o ___ livro",
            "pl": "Uzupełnij: o ___ livro"
          },
          "answer": "meu",
          "accept": [
            "meu",
            "Meu"
          ],
          "explain": {
            "en": "Livro is masculine singular.",
            "pl": "Livro jest rodzaju męskiego w liczbie pojedynczej."
          }
        },
        {
          "id": "q-possessives-3",
          "type": "choice",
          "prompt": {
            "en": "Which is clearest for 'her bag'?",
            "pl": "Które jest najjaśniejsze dla 'jej torba'?"
          },
          "choices": [
            {
              "id": "a",
              "label": "a mala dela",
              "correct": true
            },
            {
              "id": "b",
              "label": "a sua mala",
              "correct": false
            }
          ],
          "explain": {
            "en": "Dela avoids the ambiguity of sua.",
            "pl": "Dela unika dwuznaczności sua."
          }
        },
        {
          "id": "q-possessives-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: ___ nossas malas estão prontas.",
            "pl": "Uzupełnij: ___ nossas malas estão prontas."
          },
          "answer": "As",
          "accept": [
            "As",
            "as"
          ],
          "explain": {
            "en": "Malas is feminine plural.",
            "pl": "Malas jest żeńskie w liczbie mnogiej."
          }
        }
      ]
    },
    {
      "id": "demonstratives",
      "icon": "👉",
      "order": 8,
      "title": {
        "en": "Demonstratives",
        "pl": "Zaimki wskazujące"
      },
      "summary": {
        "en": "Use este, esse, and aquele to place things near me, near you, or far from both of us.",
        "pl": "Używaj este, esse i aquele, aby wskazać rzeczy blisko mnie, blisko ciebie albo daleko od nas obojga."
      },
      "polishTip": {
        "en": "Polish ten/tamten is less strictly three-way; Portuguese keeps a three-distance system, especially in careful speech.",
        "pl": "Polskie ten/tamten jest mniej ściśle trójstopniowe; portugalski zachowuje system trzech odległości, zwłaszcza w starannej mowie."
      },
      "sections": [
        {
          "id": "three-distances",
          "title": {
            "en": "This, that near you, that over there",
            "pl": "To, tamto przy tobie, tamto daleko"
          },
          "body": {
            "en": "Este points to something near the speaker, esse to something near the listener or recently mentioned, and aquele to something far from both. All three agree in gender and number.\n\nThe neuter forms isto, isso, and aquilo are used for ideas, situations, or unidentified things. They do not change form and do not take a noun after them.",
            "pl": "Este wskazuje coś blisko mówiącego, esse coś blisko słuchacza albo właśnie wspomnianego, a aquele coś daleko od obu osób. Wszystkie trzy zgadzają się w rodzaju i liczbie.\n\nFormy nijakie isto, isso i aquilo odnoszą się do idei, sytuacji lub niezidentyfikowanych rzeczy. Nie odmieniają się i nie stoją przed rzeczownikiem."
          },
          "rules": [
            {
              "en": "Este/esta = this near me.",
              "pl": "Este/esta = to blisko mnie."
            },
            {
              "en": "Esse/essa = that near you or that just mentioned.",
              "pl": "Esse/essa = to przy tobie albo to właśnie wspomniane."
            },
            {
              "en": "Aquele/aquela = that over there.",
              "pl": "Aquele/aquela = tamto daleko."
            },
            {
              "en": "Isto/isso/aquilo are neuter and stand alone.",
              "pl": "Isto/isso/aquilo są nijakie i występują samodzielnie."
            }
          ],
          "examples": [
            {
              "id": "demonstratives-001",
              "pt": "Este livro é meu.",
              "en": "This book is mine.",
              "pl": "Ta książka jest moja."
            },
            {
              "id": "demonstratives-002",
              "pt": "Essa caneta é tua?",
              "en": "Is that pen yours?",
              "pl": "Czy ten długopis przy tobie jest twój?"
            },
            {
              "id": "demonstratives-003",
              "pt": "Aquela casa tem uma vista bonita.",
              "en": "That house over there has a beautiful view.",
              "pl": "Tamten dom ma piękny widok."
            },
            {
              "id": "demonstratives-004",
              "pt": "Isto é importante para o exame.",
              "en": "This is important for the exam.",
              "pl": "To jest ważne na egzamin."
            },
            {
              "id": "demonstratives-005",
              "pt": "Não percebi isso.",
              "en": "I didn't understand that.",
              "pl": "Nie zrozumiałam tego."
            },
            {
              "id": "demonstratives-006",
              "pt": "Aqueles sapatos são caros.",
              "en": "Those shoes over there are expensive.",
              "pl": "Tamte buty są drogie."
            }
          ],
          "table": {
            "caption": {
              "en": "Demonstratives",
              "pl": "Zaimki wskazujące"
            },
            "headers": [
              {
                "en": "Distance",
                "pl": "Odległość"
              },
              {
                "en": "Masc. sg.",
                "pl": "Męski lp."
              },
              {
                "en": "Fem. sg.",
                "pl": "Żeński lp."
              },
              {
                "en": "Masc. pl.",
                "pl": "Męski lm."
              },
              {
                "en": "Fem. pl.",
                "pl": "Żeński lm."
              },
              {
                "en": "Neuter",
                "pl": "Nijakie"
              }
            ],
            "rows": [
              [
                "near me",
                "este",
                "esta",
                "estes",
                "estas",
                "isto"
              ],
              [
                "near you / mentioned",
                "esse",
                "essa",
                "esses",
                "essas",
                "isso"
              ],
              [
                "far from both",
                "aquele",
                "aquela",
                "aqueles",
                "aquelas",
                "aquilo"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-demonstratives-1",
          "type": "choice",
          "prompt": {
            "en": "Which means 'this book near me'?",
            "pl": "Które znaczy 'ta książka blisko mnie'?"
          },
          "choices": [
            {
              "id": "a",
              "label": "este livro",
              "correct": true
            },
            {
              "id": "b",
              "label": "esse livro",
              "correct": false
            },
            {
              "id": "c",
              "label": "aquele livro",
              "correct": false
            }
          ],
          "explain": {
            "en": "Este points near the speaker.",
            "pl": "Este wskazuje blisko mówiącego."
          }
        },
        {
          "id": "q-demonstratives-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: ___ casa ali é antiga.",
            "pl": "Uzupełnij: ___ casa ali é antiga."
          },
          "answer": "Aquela",
          "accept": [
            "Aquela",
            "aquela"
          ],
          "explain": {
            "en": "Aquela points to a feminine singular noun far away.",
            "pl": "Aquela wskazuje żeński rzeczownik w liczbie pojedynczej daleko."
          }
        },
        {
          "id": "q-demonstratives-3",
          "type": "choice",
          "prompt": {
            "en": "Which form is neuter?",
            "pl": "Która forma jest nijaka?"
          },
          "choices": [
            {
              "id": "a",
              "label": "isto",
              "correct": true
            },
            {
              "id": "b",
              "label": "esta",
              "correct": false
            },
            {
              "id": "c",
              "label": "estes",
              "correct": false
            }
          ],
          "explain": {
            "en": "Isto does not agree with a noun and stands alone.",
            "pl": "Isto nie zgadza się z rzeczownikiem i stoi samodzielnie."
          }
        },
        {
          "id": "q-demonstratives-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: Não percebi ___.",
            "pl": "Uzupełnij: Não percebi ___."
          },
          "answer": "isso",
          "accept": [
            "isso",
            "Isso"
          ],
          "explain": {
            "en": "Isso refers to the thing just said or near the listener.",
            "pl": "Isso odnosi się do tego, co właśnie powiedziano lub jest przy słuchaczu."
          }
        }
      ]
    },
    {
      "id": "ser-estar",
      "icon": "🧭",
      "order": 9,
      "title": {
        "en": "Ser and estar",
        "pl": "Ser i estar"
      },
      "summary": {
        "en": "Ser describes identity and stable characteristics; estar describes states, location, and temporary conditions.",
        "pl": "Ser opisuje tożsamość i cechy stałe; estar opisuje stany, położenie i sytuacje tymczasowe."
      },
      "polishTip": {
        "en": "Polish uses one verb 'być'; Portuguese splits it into ser and estar, so ask whether you mean identity or current state.",
        "pl": "Polski ma jeden czasownik 'być'; portugalski dzieli go na ser i estar, więc pytaj, czy chodzi o tożsamość, czy obecny stan."
      },
      "sections": [
        {
          "id": "ser-vs-estar",
          "title": {
            "en": "Identity versus state",
            "pl": "Tożsamość kontra stan"
          },
          "body": {
            "en": "Use ser for identity, origin, profession, material, possession-like classification, dates, time, and stable qualities. Use estar for location, temporary physical or emotional states, results, and ongoing conditions.\n\nSome adjectives change meaning: ser bom means to be good by nature or quality; estar bom means to be good right now, for example food or weather. European Portuguese uses estar a + infinitive for actions happening now: estou a estudar.",
            "pl": "Używaj ser dla tożsamości, pochodzenia, zawodu, materiału, klasyfikacji, dat, godziny i cech stałych. Używaj estar dla miejsca, chwilowych stanów fizycznych i emocjonalnych, rezultatów oraz bieżących warunków.\n\nNiektóre przymiotniki zmieniają znaczenie: ser bom znaczy być dobrym z natury lub jakościowo; estar bom znaczy być dobrym teraz, np. o jedzeniu lub pogodzie. Portugalski europejski używa estar a + bezokolicznik dla czynności trwających teraz: estou a estudar."
          },
          "rules": [
            {
              "en": "Ser answers 'what/who is it?'",
              "pl": "Ser odpowiada na pytanie 'czym/kim to jest?'."
            },
            {
              "en": "Estar answers 'where is it?' or 'how is it now?'",
              "pl": "Estar odpowiada na pytanie 'gdzie to jest?' albo 'jakie jest teraz?'."
            },
            {
              "en": "Use ser for time and dates: são três horas.",
              "pl": "Używaj ser dla godziny i dat: são três horas."
            },
            {
              "en": "Use estar a + infinitive for the present progressive in Portugal.",
              "pl": "W Portugalii używaj estar a + bezokolicznik dla czasu trwającego."
            }
          ],
          "examples": [
            {
              "id": "ser-estar-001",
              "pt": "A Joanna é polaca.",
              "en": "Joanna is Polish.",
              "pl": "Joanna jest Polką."
            },
            {
              "id": "ser-estar-002",
              "pt": "A Joanna está em Lisboa.",
              "en": "Joanna is in Lisbon.",
              "pl": "Joanna jest w Lizbonie."
            },
            {
              "id": "ser-estar-003",
              "pt": "O café está quente.",
              "en": "The coffee is hot.",
              "pl": "Kawa jest gorąca."
            },
            {
              "id": "ser-estar-004",
              "pt": "O café português é forte.",
              "en": "Portuguese coffee is strong.",
              "pl": "Portugalska kawa jest mocna."
            },
            {
              "id": "ser-estar-005",
              "pt": "São oito horas.",
              "en": "It is eight o'clock.",
              "pl": "Jest ósma."
            },
            {
              "id": "ser-estar-006",
              "pt": "Estou a aprender português.",
              "en": "I am learning Portuguese.",
              "pl": "Uczę się portugalskiego."
            },
            {
              "id": "ser-estar-007",
              "pt": "Ela está cansada hoje.",
              "en": "She is tired today.",
              "pl": "Ona jest dziś zmęczona."
            },
            {
              "id": "ser-estar-008",
              "pt": "Ele é médico.",
              "en": "He is a doctor.",
              "pl": "On jest lekarzem."
            }
          ],
          "table": {
            "caption": {
              "en": "Ser or estar?",
              "pl": "Ser czy estar?"
            },
            "headers": [
              {
                "en": "Use",
                "pl": "Użycie"
              },
              {
                "en": "Verb",
                "pl": "Czasownik"
              },
              {
                "en": "Example",
                "pl": "Przykład"
              }
            ],
            "rows": [
              [
                "identity/origin",
                "ser",
                "sou polaca"
              ],
              [
                "profession",
                "ser",
                "é médico"
              ],
              [
                "time/date",
                "ser",
                "são oito horas"
              ],
              [
                "location",
                "estar",
                "estou em casa"
              ],
              [
                "temporary state",
                "estar",
                "está cansada"
              ],
              [
                "ongoing action",
                "estar a",
                "estou a ler"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-ser-estar-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: A Joanna ___ polaca.",
            "pl": "Uzupełnij: A Joanna ___ polaca."
          },
          "choices": [
            {
              "id": "a",
              "label": "é",
              "correct": true
            },
            {
              "id": "b",
              "label": "está",
              "correct": false
            }
          ],
          "explain": {
            "en": "Nationality is identity, so use ser.",
            "pl": "Narodowość to tożsamość, więc używa się ser."
          }
        },
        {
          "id": "q-ser-estar-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Estou ___ estudar.",
            "pl": "Uzupełnij: Estou ___ estudar."
          },
          "answer": "a",
          "accept": [
            "a",
            "A"
          ],
          "explain": {
            "en": "European Portuguese uses estar a + infinitive.",
            "pl": "Portugalski europejski używa estar a + bezokolicznik."
          }
        },
        {
          "id": "q-ser-estar-3",
          "type": "choice",
          "prompt": {
            "en": "Complete: O café ___ quente.",
            "pl": "Uzupełnij: O café ___ quente."
          },
          "choices": [
            {
              "id": "a",
              "label": "está",
              "correct": true
            },
            {
              "id": "b",
              "label": "é",
              "correct": false
            }
          ],
          "explain": {
            "en": "The coffee is hot right now, a state.",
            "pl": "Kawa jest gorąca teraz, to stan."
          }
        },
        {
          "id": "q-ser-estar-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: ___ três horas.",
            "pl": "Uzupełnij: ___ três horas."
          },
          "answer": "São",
          "accept": [
            "São",
            "são"
          ],
          "explain": {
            "en": "Time uses ser: são três horas.",
            "pl": "Godzina używa ser: são três horas."
          }
        }
      ]
    },
    {
      "id": "present-regular",
      "icon": "🌱",
      "order": 10,
      "title": {
        "en": "Present tense: regular verbs",
        "pl": "Czas teraźniejszy: czasowniki regularne"
      },
      "summary": {
        "en": "Regular -ar, -er, and -ir verbs form the present with predictable endings.",
        "pl": "Regularne czasowniki na -ar, -er i -ir tworzą czas teraźniejszy przewidywalnymi końcówkami."
      },
      "polishTip": {
        "en": "Like Polish, Portuguese conjugates for person; unlike Polish, the infinitive endings -ar/-er/-ir clearly show the conjugation class.",
        "pl": "Podobnie jak polski, portugalski odmienia czasownik przez osoby; inaczej niż w polskim, końcówki bezokolicznika -ar/-er/-ir jasno pokazują klasę odmiany."
      },
      "sections": [
        {
          "id": "regular-present-endings",
          "title": {
            "en": "Endings for falar, comer, abrir",
            "pl": "Końcówki dla falar, comer, abrir"
          },
          "body": {
            "en": "To form the regular present, remove -ar, -er, or -ir and add the correct ending. The tu form is important in Portugal: falas, comes, abres.\n\nThe present can describe what is happening now, habits, general truths, and near future arrangements when context is clear: amanhã trabalho cedo.",
            "pl": "Aby utworzyć regularny czas teraźniejszy, usuń -ar, -er lub -ir i dodaj właściwą końcówkę. Forma tu jest ważna w Portugalii: falas, comes, abres.\n\nCzas teraźniejszy może opisywać to, co dzieje się teraz, zwyczaje, prawdy ogólne i bliską przyszłość, gdy kontekst jest jasny: amanhã trabalho cedo."
          },
          "rules": [
            {
              "en": "-ar: falo, falas, fala, falamos, falam.",
              "pl": "-ar: falo, falas, fala, falamos, falam."
            },
            {
              "en": "-er: como, comes, come, comemos, comem.",
              "pl": "-er: como, comes, come, comemos, comem."
            },
            {
              "en": "-ir: abro, abres, abre, abrimos, abrem.",
              "pl": "-ir: abro, abres, abre, abrimos, abrem."
            },
            {
              "en": "Vocês uses the same form as eles/elas.",
              "pl": "Vocês używa tej samej formy co eles/elas."
            }
          ],
          "examples": [
            {
              "id": "present-regular-001",
              "pt": "Eu falo português todos os dias.",
              "en": "I speak Portuguese every day.",
              "pl": "Mówię po portugalsku codziennie."
            },
            {
              "id": "present-regular-002",
              "pt": "Tu estudas à noite?",
              "en": "Do you study at night?",
              "pl": "Uczysz się wieczorem?"
            },
            {
              "id": "present-regular-003",
              "pt": "Ela come sopa ao almoço.",
              "en": "She eats soup for lunch.",
              "pl": "Ona je zupę na obiad."
            },
            {
              "id": "present-regular-004",
              "pt": "Nós abrimos a janela.",
              "en": "We open the window.",
              "pl": "Otwieramy okno."
            },
            {
              "id": "present-regular-005",
              "pt": "Vocês vivem perto da estação.",
              "en": "You live near the station.",
              "pl": "Mieszkacie blisko stacji."
            },
            {
              "id": "present-regular-006",
              "pt": "Amanhã trabalho em casa.",
              "en": "Tomorrow I work at home.",
              "pl": "Jutro pracuję w domu."
            }
          ],
          "table": {
            "caption": {
              "en": "Regular present endings",
              "pl": "Regularne końcówki teraźniejsze"
            },
            "headers": [
              {
                "en": "Person",
                "pl": "Osoba"
              },
              {
                "en": "falar",
                "pl": "falar"
              },
              {
                "en": "comer",
                "pl": "comer"
              },
              {
                "en": "abrir",
                "pl": "abrir"
              }
            ],
            "rows": [
              [
                "eu",
                "falo",
                "como",
                "abro"
              ],
              [
                "tu",
                "falas",
                "comes",
                "abres"
              ],
              [
                "ele/ela/você",
                "fala",
                "come",
                "abre"
              ],
              [
                "nós",
                "falamos",
                "comemos",
                "abrimos"
              ],
              [
                "vocês/eles/elas",
                "falam",
                "comem",
                "abrem"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-present-regular-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: tu ___ português.",
            "pl": "Uzupełnij: tu ___ português."
          },
          "choices": [
            {
              "id": "a",
              "label": "falas",
              "correct": true
            },
            {
              "id": "b",
              "label": "fala",
              "correct": false
            },
            {
              "id": "c",
              "label": "falam",
              "correct": false
            }
          ],
          "explain": {
            "en": "Tu takes -as for regular -ar verbs.",
            "pl": "Tu przy regularnych czasownikach -ar przyjmuje -as."
          }
        },
        {
          "id": "q-present-regular-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: nós ___ a janela.",
            "pl": "Uzupełnij: nós ___ a janela."
          },
          "answer": "abrimos",
          "accept": [
            "abrimos",
            "Abrimos"
          ],
          "explain": {
            "en": "Nós with abrir is abrimos.",
            "pl": "Nós z abrir to abrimos."
          }
        },
        {
          "id": "q-present-regular-3",
          "type": "choice",
          "prompt": {
            "en": "Which is the eu form of comer?",
            "pl": "Która forma comer pasuje do eu?"
          },
          "choices": [
            {
              "id": "a",
              "label": "como",
              "correct": true
            },
            {
              "id": "b",
              "label": "come",
              "correct": false
            },
            {
              "id": "c",
              "label": "comes",
              "correct": false
            }
          ],
          "explain": {
            "en": "Eu como is regular.",
            "pl": "Eu como jest regularne."
          }
        },
        {
          "id": "q-present-regular-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: vocês ___ em Lisboa.",
            "pl": "Uzupełnij: vocês ___ em Lisboa."
          },
          "answer": "vivem",
          "accept": [
            "vivem",
            "Vivem"
          ],
          "explain": {
            "en": "Vocês uses the third-person plural ending -em.",
            "pl": "Vocês używa końcówki 3. osoby liczby mnogiej -em."
          }
        }
      ]
    },
    {
      "id": "present-irregular",
      "icon": "🌀",
      "order": 11,
      "title": {
        "en": "Present tense: irregular verbs",
        "pl": "Czas teraźniejszy: czasowniki nieregularne"
      },
      "summary": {
        "en": "High-frequency Portuguese verbs have irregular present forms that must be learned early.",
        "pl": "Najczęstsze portugalskie czasowniki mają nieregularne formy teraźniejsze, których trzeba nauczyć się wcześnie."
      },
      "polishTip": {
        "en": "As in Polish, the most common verbs are often the least regular; learn them in useful phrases, not only in tables.",
        "pl": "Tak jak w polskim, najczęstsze czasowniki bywają najmniej regularne; ucz się ich w przydatnych zwrotach, nie tylko w tabelach."
      },
      "sections": [
        {
          "id": "core-irregular-present",
          "title": {
            "en": "Essential irregular present forms",
            "pl": "Najważniejsze nieregularne formy teraźniejsze"
          },
          "body": {
            "en": "The verbs ser, estar, ter, haver, ir, fazer, poder, querer, dizer, vir, ver, saber, and pôr are central to everyday Portuguese. Their irregularities are strongest in the singular forms.\n\nIn careful European Portuguese, haver is used for existence: há uma farmácia aqui. Ter means to have, not 'there is', although informal speech may vary regionally.",
            "pl": "Czasowniki ser, estar, ter, haver, ir, fazer, poder, querer, dizer, vir, ver, saber i pôr są kluczowe w codziennym portugalskim. Najwięcej nieregularności występuje w liczbie pojedynczej.\n\nW starannym portugalskim europejskim haver używa się do istnienia: há uma farmácia aqui. Ter znaczy mieć, nie 'jest/znajduje się', choć mowa potoczna może różnić się regionalnie."
          },
          "rules": [
            {
              "en": "Há means there is/there are and does not change in the present.",
              "pl": "Há znaczy jest/są i nie zmienia się w czasie teraźniejszym."
            },
            {
              "en": "Ir is irregular: vou, vais, vai, vamos, vão.",
              "pl": "Ir jest nieregularne: vou, vais, vai, vamos, vão."
            },
            {
              "en": "Pôr keeps an accent in the infinitive to distinguish it from por.",
              "pl": "Pôr zachowuje akcent w bezokoliczniku, aby odróżnić go od por."
            },
            {
              "en": "Saber = to know facts/how; conhecer = to know a person/place.",
              "pl": "Saber = wiedzieć/umieć; conhecer = znać osobę/miejsce."
            }
          ],
          "examples": [
            {
              "id": "present-irregular-001",
              "pt": "Tenho uma aula às nove.",
              "en": "I have a class at nine.",
              "pl": "Mam lekcję o dziewiątej."
            },
            {
              "id": "present-irregular-002",
              "pt": "Há uma farmácia perto daqui.",
              "en": "There is a pharmacy near here.",
              "pl": "Niedaleko jest apteka."
            },
            {
              "id": "present-irregular-003",
              "pt": "Vou ao mercado depois do trabalho.",
              "en": "I am going to the market after work.",
              "pl": "Idę na targ po pracy."
            },
            {
              "id": "present-irregular-004",
              "pt": "Tu podes ligar-me mais tarde?",
              "en": "Can you call me later?",
              "pl": "Możesz zadzwonić do mnie później?"
            },
            {
              "id": "present-irregular-005",
              "pt": "Ela quer aprender português de Portugal.",
              "en": "She wants to learn Portugal Portuguese.",
              "pl": "Ona chce uczyć się portugalskiego z Portugalii."
            },
            {
              "id": "present-irregular-006",
              "pt": "Nós fazemos o jantar em casa.",
              "en": "We make dinner at home.",
              "pl": "Robimy kolację w domu."
            },
            {
              "id": "present-irregular-007",
              "pt": "Eles vêm de autocarro.",
              "en": "They come by bus.",
              "pl": "Oni przyjeżdżają autobusem."
            },
            {
              "id": "present-irregular-008",
              "pt": "Pões o casaco na cadeira?",
              "en": "Do you put the coat on the chair?",
              "pl": "Położysz płaszcz na krześle?"
            }
          ],
          "table": {
            "caption": {
              "en": "Key irregular present forms",
              "pl": "Kluczowe nieregularne formy teraźniejsze"
            },
            "headers": [
              {
                "en": "Infinitive",
                "pl": "Bezokolicznik"
              },
              {
                "en": "eu",
                "pl": "eu"
              },
              {
                "en": "tu",
                "pl": "tu"
              },
              {
                "en": "ele/ela",
                "pl": "ele/ela"
              },
              {
                "en": "nós",
                "pl": "nós"
              },
              {
                "en": "eles/elas",
                "pl": "eles/elas"
              }
            ],
            "rows": [
              [
                "ser",
                "sou",
                "és",
                "é",
                "somos",
                "são"
              ],
              [
                "estar",
                "estou",
                "estás",
                "está",
                "estamos",
                "estão"
              ],
              [
                "ter",
                "tenho",
                "tens",
                "tem",
                "temos",
                "têm"
              ],
              [
                "haver",
                "hei",
                "hás",
                "há",
                "havemos",
                "hão"
              ],
              [
                "ir",
                "vou",
                "vais",
                "vai",
                "vamos",
                "vão"
              ],
              [
                "fazer",
                "faço",
                "fazes",
                "faz",
                "fazemos",
                "fazem"
              ],
              [
                "poder",
                "posso",
                "podes",
                "pode",
                "podemos",
                "podem"
              ],
              [
                "querer",
                "quero",
                "queres",
                "quer",
                "queremos",
                "querem"
              ],
              [
                "dizer",
                "digo",
                "dizes",
                "diz",
                "dizemos",
                "dizem"
              ],
              [
                "vir",
                "venho",
                "vens",
                "vem",
                "vimos",
                "vêm"
              ],
              [
                "ver",
                "vejo",
                "vês",
                "vê",
                "vemos",
                "veem"
              ],
              [
                "saber",
                "sei",
                "sabes",
                "sabe",
                "sabemos",
                "sabem"
              ],
              [
                "pôr",
                "ponho",
                "pões",
                "põe",
                "pomos",
                "põem"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-present-irregular-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: Eu ___ uma pergunta.",
            "pl": "Uzupełnij: Eu ___ uma pergunta."
          },
          "choices": [
            {
              "id": "a",
              "label": "tenho",
              "correct": true
            },
            {
              "id": "b",
              "label": "tem",
              "correct": false
            },
            {
              "id": "c",
              "label": "tens",
              "correct": false
            }
          ],
          "explain": {
            "en": "Eu with ter is tenho.",
            "pl": "Eu z ter to tenho."
          }
        },
        {
          "id": "q-present-irregular-2",
          "type": "fill",
          "prompt": {
            "en": "Complete for existence: ___ uma farmácia aqui.",
            "pl": "Uzupełnij dla istnienia: ___ uma farmácia aqui."
          },
          "answer": "Há",
          "accept": [
            "Há",
            "há"
          ],
          "explain": {
            "en": "Careful EP uses há for 'there is/are'.",
            "pl": "Staranne EP używa há dla 'jest/są'."
          }
        },
        {
          "id": "q-present-irregular-3",
          "type": "choice",
          "prompt": {
            "en": "Which is tu form of ir?",
            "pl": "Która forma ir pasuje do tu?"
          },
          "choices": [
            {
              "id": "a",
              "label": "vais",
              "correct": true
            },
            {
              "id": "b",
              "label": "vai",
              "correct": false
            },
            {
              "id": "c",
              "label": "vou",
              "correct": false
            }
          ],
          "explain": {
            "en": "Tu vais is irregular.",
            "pl": "Tu vais jest nieregularne."
          }
        },
        {
          "id": "q-present-irregular-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: Eu ___ fazer o jantar.",
            "pl": "Uzupełnij: Eu ___ fazer o jantar."
          },
          "answer": "posso",
          "accept": [
            "posso",
            "Posso"
          ],
          "explain": {
            "en": "Eu with poder is posso.",
            "pl": "Eu z poder to posso."
          }
        }
      ]
    },
    {
      "id": "preterite",
      "icon": "✅",
      "order": 12,
      "title": {
        "en": "Pretérito perfeito simples",
        "pl": "Pretérito perfeito simples: czas przeszły dokonany"
      },
      "summary": {
        "en": "Use the simple preterite for completed past events, very common in European Portuguese.",
        "pl": "Używaj prostego czasu przeszłego dla zakończonych wydarzeń; jest bardzo częsty w portugalskim europejskim."
      },
      "polishTip": {
        "en": "Polish often marks completed events with perfective verbs; Portuguese usually uses the preterite ending instead.",
        "pl": "Polski często oznacza zakończone wydarzenia czasownikiem dokonanym; portugalski zwykle używa końcówki preterite."
      },
      "sections": [
        {
          "id": "completed-past",
          "title": {
            "en": "Completed actions in the past",
            "pl": "Zakończone czynności w przeszłości"
          },
          "body": {
            "en": "The pretérito perfeito simples describes actions that happened and finished at a specific past time: ontem falei, em 2020 vivi no Porto. It is the normal tense for telling what happened.\n\nEuropean Portuguese often prefers this simple past where Brazilian Portuguese might use a compound form differently in some contexts. Irregular verbs such as ser/ir, estar, ter, fazer, dizer, and ver are frequent and should be learned early.",
            "pl": "Pretérito perfeito simples opisuje czynności, które wydarzyły się i zakończyły w określonym czasie przeszłym: ontem falei, em 2020 vivi no Porto. To normalny czas do opowiadania, co się stało.\n\nPortugalski europejski często wybiera ten prosty czas przeszły tam, gdzie portugalski brazylijski może w niektórych kontekstach inaczej używać form złożonych. Częste czasowniki nieregularne, takie jak ser/ir, estar, ter, fazer, dizer i ver, warto poznać wcześnie."
          },
          "rules": [
            {
              "en": "Use it for finished events: ontem, na semana passada, em 2023.",
              "pl": "Używaj go dla zakończonych wydarzeń: ontem, na semana passada, em 2023."
            },
            {
              "en": "Regular -ar endings include -ei, -aste, -ou, -ámos, -aram.",
              "pl": "Regularne końcówki -ar to m.in. -ei, -aste, -ou, -ámos, -aram."
            },
            {
              "en": "Regular -er/-ir endings include -i, -este, -eu/-iu, -emos/-imos, -eram/-iram.",
              "pl": "Regularne końcówki -er/-ir to m.in. -i, -este, -eu/-iu, -emos/-imos, -eram/-iram."
            },
            {
              "en": "Ser and ir share forms: fui, foste, foi, fomos, foram.",
              "pl": "Ser i ir mają te same formy: fui, foste, foi, fomos, foram."
            }
          ],
          "examples": [
            {
              "id": "preterite-001",
              "pt": "Ontem comprei pão na padaria.",
              "en": "Yesterday I bought bread at the bakery.",
              "pl": "Wczoraj kupiłam chleb w piekarni."
            },
            {
              "id": "preterite-002",
              "pt": "Tu chegaste cedo à estação.",
              "en": "You arrived early at the station.",
              "pl": "Przyjechałeś/przyjechałaś wcześnie na stację."
            },
            {
              "id": "preterite-003",
              "pt": "Ela viveu em Braga durante dois anos.",
              "en": "She lived in Braga for two years.",
              "pl": "Ona mieszkała w Bradze przez dwa lata."
            },
            {
              "id": "preterite-004",
              "pt": "Nós abrimos a loja às dez.",
              "en": "We opened the shop at ten.",
              "pl": "Otworzyliśmy sklep o dziesiątej."
            },
            {
              "id": "preterite-005",
              "pt": "Fui ao cinema com a Ana.",
              "en": "I went to the cinema with Ana.",
              "pl": "Poszłam do kina z Aną."
            },
            {
              "id": "preterite-006",
              "pt": "Eles fizeram o pequeno-almoço.",
              "en": "They made breakfast.",
              "pl": "Oni zrobili śniadanie."
            }
          ],
          "table": {
            "caption": {
              "en": "Regular preterite",
              "pl": "Regularny preterite"
            },
            "headers": [
              {
                "en": "Person",
                "pl": "Osoba"
              },
              {
                "en": "falar",
                "pl": "falar"
              },
              {
                "en": "comer",
                "pl": "comer"
              },
              {
                "en": "abrir",
                "pl": "abrir"
              }
            ],
            "rows": [
              [
                "eu",
                "falei",
                "comi",
                "abri"
              ],
              [
                "tu",
                "falaste",
                "comeste",
                "abriste"
              ],
              [
                "ele/ela",
                "falou",
                "comeu",
                "abriu"
              ],
              [
                "nós",
                "falámos",
                "comemos",
                "abrimos"
              ],
              [
                "eles/elas",
                "falaram",
                "comeram",
                "abriram"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-preterite-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: Ontem eu ___ pão.",
            "pl": "Uzupełnij: Ontem eu ___ pão."
          },
          "choices": [
            {
              "id": "a",
              "label": "comprei",
              "correct": true
            },
            {
              "id": "b",
              "label": "compro",
              "correct": false
            },
            {
              "id": "c",
              "label": "comprava",
              "correct": false
            }
          ],
          "explain": {
            "en": "Ontem signals a completed past event.",
            "pl": "Ontem wskazuje zakończone wydarzenie w przeszłości."
          }
        },
        {
          "id": "q-preterite-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Tu ___ cedo.",
            "pl": "Uzupełnij: Tu ___ cedo."
          },
          "answer": "chegaste",
          "accept": [
            "chegaste",
            "Chegaste"
          ],
          "explain": {
            "en": "Tu preterite of chegar is chegaste.",
            "pl": "Preterite od chegar dla tu to chegaste."
          }
        },
        {
          "id": "q-preterite-3",
          "type": "choice",
          "prompt": {
            "en": "Which form can mean 'I went' or 'I was'?",
            "pl": "Która forma może znaczyć 'poszłam/poszedłem' albo 'byłam/byłem'?"
          },
          "choices": [
            {
              "id": "a",
              "label": "fui",
              "correct": true
            },
            {
              "id": "b",
              "label": "foi",
              "correct": false
            },
            {
              "id": "c",
              "label": "foste",
              "correct": false
            }
          ],
          "explain": {
            "en": "Ser and ir share preterite forms; fui is eu.",
            "pl": "Ser i ir mają te same formy preterite; fui pasuje do eu."
          }
        },
        {
          "id": "q-preterite-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: Nós ___ a janela.",
            "pl": "Uzupełnij: Nós ___ a janela."
          },
          "answer": "abrimos",
          "accept": [
            "abrimos",
            "Abrimos"
          ],
          "explain": {
            "en": "Abrimos can be present or preterite; context decides.",
            "pl": "Abrimos może być teraźniejsze albo preterite; decyduje kontekst."
          }
        }
      ]
    },
    {
      "id": "imperfect",
      "icon": "🌫️",
      "order": 13,
      "title": {
        "en": "Pretérito imperfeito",
        "pl": "Pretérito imperfeito: przeszłość niedokonana"
      },
      "summary": {
        "en": "Use the imperfect for habits, descriptions, background states, and ongoing past situations.",
        "pl": "Używaj imperfeito dla zwyczajów, opisów, tła i trwających sytuacji w przeszłości."
      },
      "polishTip": {
        "en": "Polish often contrasts niedokonany/dokonany aspect; Portuguese often contrasts imperfect background with preterite events.",
        "pl": "Polski często kontrastuje aspekt niedokonany i dokonany; portugalski często kontrastuje tło w imperfeito z wydarzeniami w preterite."
      },
      "sections": [
        {
          "id": "past-background",
          "title": {
            "en": "Habits and background in the past",
            "pl": "Zwyczaje i tło w przeszłości"
          },
          "body": {
            "en": "The imperfect describes what used to happen, what was happening, or what things were like. It sets the scene: quando era pequena, vivia em Varsóvia.\n\nUse it with age, time, weather, feelings, and repeated past habits. The verbs ser, ter, estar, and ir have very common imperfect forms: era, tinha, estava, ia.",
            "pl": "Imperfeito opisuje, co zwykle się działo, co trwało albo jakie coś było. Buduje tło: quando era pequena, vivia em Varsóvia.\n\nUżywaj go z wiekiem, godziną, pogodą, uczuciami i powtarzającymi się zwyczajami w przeszłości. Czasowniki ser, ter, estar i ir mają bardzo częste formy imperfeito: era, tinha, estava, ia."
          },
          "rules": [
            {
              "en": "Use imperfect for 'used to' and repeated habits.",
              "pl": "Używaj imperfeito dla 'zwykłam/zwykłem' i powtarzanych zwyczajów."
            },
            {
              "en": "Use it for descriptions and background states.",
              "pl": "Używaj go do opisów i stanów tła."
            },
            {
              "en": "-ar verbs use -ava endings; -er/-ir use -ia endings.",
              "pl": "Czasowniki -ar używają końcówek -ava; -er/-ir końcówek -ia."
            },
            {
              "en": "Era, tinha, estava, and ia are essential.",
              "pl": "Era, tinha, estava i ia są niezbędne."
            }
          ],
          "examples": [
            {
              "id": "imperfect-001",
              "pt": "Quando era criança, vivia em Varsóvia.",
              "en": "When I was a child, I lived in Warsaw.",
              "pl": "Kiedy byłam dzieckiem, mieszkałam w Warszawie."
            },
            {
              "id": "imperfect-002",
              "pt": "Todos os verões íamos ao Algarve.",
              "en": "Every summer we used to go to the Algarve.",
              "pl": "Każdego lata jeździliśmy do Algarve."
            },
            {
              "id": "imperfect-003",
              "pt": "Ela estudava português à noite.",
              "en": "She used to study Portuguese at night.",
              "pl": "Ona uczyła się portugalskiego wieczorami."
            },
            {
              "id": "imperfect-004",
              "pt": "Estava frio, mas não chovia.",
              "en": "It was cold, but it wasn't raining.",
              "pl": "Było zimno, ale nie padało."
            },
            {
              "id": "imperfect-005",
              "pt": "Tínhamos uma casa pequena.",
              "en": "We had a small house.",
              "pl": "Mieliśmy mały dom."
            },
            {
              "id": "imperfect-006",
              "pt": "Eram duas horas quando ele chegou.",
              "en": "It was two o'clock when he arrived.",
              "pl": "Była druga, kiedy on przyjechał."
            }
          ],
          "table": {
            "caption": {
              "en": "Imperfect endings",
              "pl": "Końcówki imperfeito"
            },
            "headers": [
              {
                "en": "Person",
                "pl": "Osoba"
              },
              {
                "en": "falar",
                "pl": "falar"
              },
              {
                "en": "comer",
                "pl": "comer"
              },
              {
                "en": "abrir",
                "pl": "abrir"
              }
            ],
            "rows": [
              [
                "eu",
                "falava",
                "comia",
                "abria"
              ],
              [
                "tu",
                "falavas",
                "comias",
                "abrias"
              ],
              [
                "ele/ela",
                "falava",
                "comia",
                "abria"
              ],
              [
                "nós",
                "falávamos",
                "comíamos",
                "abríamos"
              ],
              [
                "eles/elas",
                "falavam",
                "comiam",
                "abriam"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-imperfect-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: Quando era criança, ___ em Varsóvia.",
            "pl": "Uzupełnij: Quando era criança, ___ em Varsóvia."
          },
          "choices": [
            {
              "id": "a",
              "label": "vivia",
              "correct": true
            },
            {
              "id": "b",
              "label": "vivi",
              "correct": false
            },
            {
              "id": "c",
              "label": "vivo",
              "correct": false
            }
          ],
          "explain": {
            "en": "A background past situation uses the imperfect.",
            "pl": "Sytuacja tła w przeszłości używa imperfeito."
          }
        },
        {
          "id": "q-imperfect-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Ela ___ português à noite.",
            "pl": "Uzupełnij: Ela ___ português à noite."
          },
          "answer": "estudava",
          "accept": [
            "estudava",
            "Estudava"
          ],
          "explain": {
            "en": "Repeated past habit with -ar uses -ava.",
            "pl": "Powtarzany zwyczaj w przeszłości z -ar używa -ava."
          }
        },
        {
          "id": "q-imperfect-3",
          "type": "choice",
          "prompt": {
            "en": "Which form means 'we used to go'?",
            "pl": "Która forma znaczy 'jeździliśmy/chodziliśmy zwykle'?"
          },
          "choices": [
            {
              "id": "a",
              "label": "íamos",
              "correct": true
            },
            {
              "id": "b",
              "label": "fomos",
              "correct": false
            },
            {
              "id": "c",
              "label": "vamos",
              "correct": false
            }
          ],
          "explain": {
            "en": "Íamos is the imperfect of ir for nós.",
            "pl": "Íamos to imperfeito od ir dla nós."
          }
        },
        {
          "id": "q-imperfect-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: ___ frio ontem de manhã.",
            "pl": "Uzupełnij: ___ frio ontem de manhã."
          },
          "answer": "Estava",
          "accept": [
            "Estava",
            "estava"
          ],
          "explain": {
            "en": "Weather as background often uses estar in the imperfect.",
            "pl": "Pogoda jako tło często używa estar w imperfeito."
          }
        }
      ]
    },
    {
      "id": "compound-tenses",
      "icon": "🔗",
      "order": 14,
      "title": {
        "en": "Compound tenses with ter",
        "pl": "Czasy złożone z ter"
      },
      "summary": {
        "en": "European Portuguese uses ter + past participle mainly for repeated or continuing situations, not simply for every recent past event.",
        "pl": "Portugalski europejski używa ter + imiesłów głównie dla sytuacji powtarzających się lub trwających, nie dla każdego niedawnego wydarzenia."
      },
      "polishTip": {
        "en": "Polish has no direct equivalent of this Portuguese pattern; translate the meaning, not the form.",
        "pl": "Polski nie ma bezpośredniego odpowiednika tego portugalskiego wzorca; tłumacz sens, nie formę."
      },
      "sections": [
        {
          "id": "ter-participle",
          "title": {
            "en": "Ter + past participle",
            "pl": "Ter + imiesłów przeszły"
          },
          "body": {
            "en": "The compound form ter + past participle can express repeated action up to now: tenho estudado muito means I have been studying a lot lately. In Portugal this is not the normal way to say a single completed recent action; use the simple preterite: ontem estudei.\n\nPast participles are regular with -ado for -ar and -ido for -er/-ir, but many common verbs are irregular: feito, dito, visto, posto, aberto, escrito. With ter, the participle usually does not agree: tenho lido as cartas.",
            "pl": "Forma złożona ter + imiesłów przeszły może wyrażać czynność powtarzaną aż do teraz: tenho estudado muito znaczy ostatnio dużo się uczę. W Portugalii nie jest to zwykły sposób na jedno zakończone niedawne zdarzenie; użyj prostego preterite: ontem estudei.\n\nImiesłowy regularne mają -ado dla -ar i -ido dla -er/-ir, ale wiele częstych czasowników jest nieregularnych: feito, dito, visto, posto, aberto, escrito. Z ter imiesłów zwykle się nie zgadza: tenho lido as cartas."
          },
          "rules": [
            {
              "en": "Tenho estudado = I have been studying lately/repeatedly.",
              "pl": "Tenho estudado = ostatnio/wielokrotnie się uczę."
            },
            {
              "en": "Use simple preterite for one completed event: comprei ontem.",
              "pl": "Użyj prostego preterite dla jednego zakończonego wydarzenia: comprei ontem."
            },
            {
              "en": "Regular participles: falar -> falado, comer -> comido, abrir -> aberto or abrido depending on verb; abrir is aberto.",
              "pl": "Regularne imiesłowy: falar -> falado, comer -> comido; abrir ma nieregularne aberto."
            },
            {
              "en": "With ter, the participle is normally invariable.",
              "pl": "Z ter imiesłów zwykle jest nieodmienny."
            }
          ],
          "examples": [
            {
              "id": "compound-tenses-001",
              "pt": "Tenho estudado português todos os dias.",
              "en": "I have been studying Portuguese every day lately.",
              "pl": "Ostatnio codziennie uczę się portugalskiego."
            },
            {
              "id": "compound-tenses-002",
              "pt": "Ela tem trabalhado muito esta semana.",
              "en": "She has been working a lot this week.",
              "pl": "Ona dużo pracuje w tym tygodniu."
            },
            {
              "id": "compound-tenses-003",
              "pt": "Ontem comprei um bilhete.",
              "en": "Yesterday I bought a ticket.",
              "pl": "Wczoraj kupiłam bilet."
            },
            {
              "id": "compound-tenses-004",
              "pt": "Já tinha visto esse filme.",
              "en": "I had already seen that film.",
              "pl": "Już widziałam ten film wcześniej."
            },
            {
              "id": "compound-tenses-005",
              "pt": "Quando chegámos, eles tinham saído.",
              "en": "When we arrived, they had left.",
              "pl": "Kiedy przyjechaliśmy, oni już wyszli."
            },
            {
              "id": "compound-tenses-006",
              "pt": "Temos feito muitos exercícios.",
              "en": "We have been doing many exercises.",
              "pl": "Ostatnio robimy dużo ćwiczeń."
            }
          ],
          "table": {
            "caption": {
              "en": "Compound tense patterns",
              "pl": "Wzorce czasów złożonych"
            },
            "headers": [
              {
                "en": "Tense",
                "pl": "Czas"
              },
              {
                "en": "Form",
                "pl": "Forma"
              },
              {
                "en": "Meaning",
                "pl": "Znaczenie"
              }
            ],
            "rows": [
              [
                "pretérito perfeito composto",
                "tenho falado",
                "repeated/continuing up to now"
              ],
              [
                "mais-que-perfeito composto",
                "tinha falado",
                "had spoken"
              ],
              [
                "future perfect",
                "terei falado",
                "will have spoken"
              ],
              [
                "conditional perfect",
                "teria falado",
                "would have spoken"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-compound-tenses-1",
          "type": "choice",
          "prompt": {
            "en": "In Portugal, 'Tenho estudado' usually means...",
            "pl": "W Portugalii 'Tenho estudado' zwykle znaczy..."
          },
          "choices": [
            {
              "id": "a",
              "label": "I have been studying lately",
              "correct": true
            },
            {
              "id": "b",
              "label": "I studied once yesterday",
              "correct": false
            }
          ],
          "explain": {
            "en": "The compound present perfect suggests repeated or continuing activity.",
            "pl": "Złożony present perfect sugeruje czynność powtarzaną lub trwającą."
          }
        },
        {
          "id": "q-compound-tenses-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Ela tem ___ muito.",
            "pl": "Uzupełnij: Ela tem ___ muito."
          },
          "answer": "trabalhado",
          "accept": [
            "trabalhado",
            "Trabalhado"
          ],
          "explain": {
            "en": "Trabalhar has the participle trabalhado.",
            "pl": "Trabalhar ma imiesłów trabalhado."
          }
        },
        {
          "id": "q-compound-tenses-3",
          "type": "choice",
          "prompt": {
            "en": "Which is best for one completed action yesterday in EP?",
            "pl": "Co jest najlepsze dla jednej czynności zakończonej wczoraj w EP?"
          },
          "choices": [
            {
              "id": "a",
              "label": "Ontem comprei um bilhete.",
              "correct": true
            },
            {
              "id": "b",
              "label": "Ontem tenho comprado um bilhete.",
              "correct": false
            }
          ],
          "explain": {
            "en": "A single completed past event normally uses the simple preterite.",
            "pl": "Jedno zakończone wydarzenie zwykle używa prostego preterite."
          }
        },
        {
          "id": "q-compound-tenses-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: Já tinha ___ esse filme.",
            "pl": "Uzupełnij: Já tinha ___ esse filme."
          },
          "answer": "visto",
          "accept": [
            "visto",
            "Visto"
          ],
          "explain": {
            "en": "Ver has the participle visto.",
            "pl": "Ver ma imiesłów visto."
          }
        }
      ]
    },
    {
      "id": "future-conditional",
      "icon": "🔮",
      "order": 15,
      "title": {
        "en": "Future and conditional",
        "pl": "Czas przyszły i tryb warunkowy"
      },
      "summary": {
        "en": "Use ir + infinitive for common spoken future, and the simple future or conditional for prediction, formality, or politeness.",
        "pl": "Używaj ir + bezokolicznik dla zwykłej przyszłości mówionej, a czasu przyszłego prostego i warunkowego dla przewidywań, formalności lub uprzejmości."
      },
      "polishTip": {
        "en": "Polish often uses present or future forms; Portuguese commonly uses vou + infinitive in everyday speech.",
        "pl": "Polski często używa teraźniejszości lub przyszłości; portugalski w mowie codziennej często używa vou + bezokolicznik."
      },
      "sections": [
        {
          "id": "future-forms",
          "title": {
            "en": "Everyday future and conditional politeness",
            "pl": "Przyszłość codzienna i uprzejmy warunkowy"
          },
          "body": {
            "en": "In speech, European Portuguese very often uses ir + infinitive: vou estudar, vamos sair. The simple future is more formal, written, or predictive: estudarei, choverá.\n\nThe conditional expresses what would happen, polite requests, and reported future from a past viewpoint: gostaria de um café, ela disse que viria. The endings attach to the infinitive and are similar across verb classes.",
            "pl": "W mowie portugalski europejski bardzo często używa ir + bezokolicznik: vou estudar, vamos sair. Prosty czas przyszły jest bardziej formalny, pisany lub przewidujący: estudarei, choverá.\n\nTryb warunkowy wyraża to, co by się stało, uprzejme prośby oraz przyszłość widzianą z przeszłości: gostaria de um café, ela disse que viria. Końcówki dodaje się do bezokolicznika i są podobne dla klas czasowników."
          },
          "rules": [
            {
              "en": "Vou + infinitive is the normal spoken future.",
              "pl": "Vou + bezokolicznik to normalna przyszłość mówiona."
            },
            {
              "en": "Simple future endings attach to the infinitive: falarei, falarás, falará.",
              "pl": "Końcówki przyszłe dodaje się do bezokolicznika: falarei, falarás, falará."
            },
            {
              "en": "Conditional endings: falaria, falarias, falaria, falaríamos, falariam.",
              "pl": "Końcówki warunkowe: falaria, falarias, falaria, falaríamos, falariam."
            },
            {
              "en": "Gostaria de... is a very useful polite request.",
              "pl": "Gostaria de... to bardzo przydatna uprzejma prośba."
            }
          ],
          "examples": [
            {
              "id": "future-conditional-001",
              "pt": "Amanhã vou apanhar o comboio cedo.",
              "en": "Tomorrow I am going to catch the train early.",
              "pl": "Jutro złapię wcześnie pociąg."
            },
            {
              "id": "future-conditional-002",
              "pt": "No verão viajaremos para os Açores.",
              "en": "In the summer we will travel to the Azores.",
              "pl": "Latem pojedziemy na Azory."
            },
            {
              "id": "future-conditional-003",
              "pt": "Gostaria de um café, por favor.",
              "en": "I would like a coffee, please.",
              "pl": "Poproszę kawę."
            },
            {
              "id": "future-conditional-004",
              "pt": "Se tivesse tempo, estudaria mais.",
              "en": "If I had time, I would study more.",
              "pl": "Gdybym miała czas, uczyłabym się więcej."
            },
            {
              "id": "future-conditional-005",
              "pt": "Ele disse que viria mais tarde.",
              "en": "He said he would come later.",
              "pl": "Powiedział, że przyjdzie później."
            },
            {
              "id": "future-conditional-006",
              "pt": "Será que vai chover?",
              "en": "I wonder if it is going to rain.",
              "pl": "Czy będzie padać?"
            }
          ],
          "table": {
            "caption": {
              "en": "Future and conditional of falar",
              "pl": "Przyszły i warunkowy od falar"
            },
            "headers": [
              {
                "en": "Person",
                "pl": "Osoba"
              },
              {
                "en": "Simple future",
                "pl": "Czas przyszły prosty"
              },
              {
                "en": "Conditional",
                "pl": "Warunkowy"
              }
            ],
            "rows": [
              [
                "eu",
                "falarei",
                "falaria"
              ],
              [
                "tu",
                "falarás",
                "falarias"
              ],
              [
                "ele/ela",
                "falará",
                "falaria"
              ],
              [
                "nós",
                "falaremos",
                "falaríamos"
              ],
              [
                "eles/elas",
                "falarão",
                "falariam"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-future-conditional-1",
          "type": "choice",
          "prompt": {
            "en": "Which is the common spoken future?",
            "pl": "Która forma to typowa przyszłość mówiona?"
          },
          "choices": [
            {
              "id": "a",
              "label": "vou estudar",
              "correct": true
            },
            {
              "id": "b",
              "label": "estudava",
              "correct": false
            },
            {
              "id": "c",
              "label": "estudei",
              "correct": false
            }
          ],
          "explain": {
            "en": "Ir + infinitive is very common in speech.",
            "pl": "Ir + bezokolicznik jest bardzo częste w mowie."
          }
        },
        {
          "id": "q-future-conditional-2",
          "type": "fill",
          "prompt": {
            "en": "Complete politely: ___ de um café.",
            "pl": "Uzupełnij uprzejmie: ___ de um café."
          },
          "answer": "Gostaria",
          "accept": [
            "Gostaria",
            "gostaria"
          ],
          "explain": {
            "en": "Gostaria de is a polite request.",
            "pl": "Gostaria de to uprzejma prośba."
          }
        },
        {
          "id": "q-future-conditional-3",
          "type": "choice",
          "prompt": {
            "en": "Complete: Se tivesse tempo, ___ mais.",
            "pl": "Uzupełnij: Se tivesse tempo, ___ mais."
          },
          "choices": [
            {
              "id": "a",
              "label": "estudaria",
              "correct": true
            },
            {
              "id": "b",
              "label": "estudei",
              "correct": false
            },
            {
              "id": "c",
              "label": "estudo",
              "correct": false
            }
          ],
          "explain": {
            "en": "A hypothetical result often uses the conditional.",
            "pl": "Hipotetyczny rezultat często używa trybu warunkowego."
          }
        },
        {
          "id": "q-future-conditional-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: Amanhã ___ apanhar o autocarro.",
            "pl": "Uzupełnij: Amanhã ___ apanhar o autocarro."
          },
          "answer": "vou",
          "accept": [
            "vou",
            "Vou"
          ],
          "explain": {
            "en": "Vou + infinitive gives a natural spoken future.",
            "pl": "Vou + bezokolicznik daje naturalną przyszłość mówioną."
          }
        }
      ]
    },
    {
      "id": "subjunctive",
      "icon": "🌙",
      "order": 16,
      "title": {
        "en": "Subjunctive",
        "pl": "Tryb łączący"
      },
      "summary": {
        "en": "Portuguese uses the subjunctive after doubt, desire, emotion, uncertainty, and many time clauses.",
        "pl": "Portugalski używa trybu łączącego po wątpliwości, pragnieniu, emocji, niepewności i wielu zdaniach czasowych."
      },
      "polishTip": {
        "en": "Polish often uses normal indicative forms with words like żeby; Portuguese changes the verb form itself.",
        "pl": "Polski często używa zwykłych form z wyrazami typu żeby; portugalski zmienia samą formę czasownika."
      },
      "sections": [
        {
          "id": "subjunctive-uses",
          "title": {
            "en": "Present, imperfect, and future subjunctive",
            "pl": "Tryb łączący teraźniejszy, przeszły i przyszły"
          },
          "body": {
            "en": "Use the present subjunctive after expressions like quero que, espero que, é importante que, talvez, and não acho que. It often refers to present or future uncertainty.\n\nUse the imperfect subjunctive for hypothetical or past-dependent situations, especially with se: se eu tivesse tempo. The future subjunctive is very alive in Portuguese and appears after quando, se, assim que, enquanto, and quem when the event is future and uncertain: quando chegares, liga-me.",
            "pl": "Używaj trybu łączącego teraźniejszego po wyrażeniach takich jak quero que, espero que, é importante que, talvez i não acho que. Często odnosi się do obecnej lub przyszłej niepewności.\n\nTryb łączący przeszły używany jest w sytuacjach hipotetycznych lub zależnych od przeszłości, zwłaszcza z se: se eu tivesse tempo. Tryb łączący przyszły jest w portugalskim bardzo żywy i pojawia się po quando, se, assim que, enquanto i quem, gdy wydarzenie jest przyszłe i niepewne: quando chegares, liga-me."
          },
          "rules": [
            {
              "en": "Desire: quero que venhas.",
              "pl": "Pragnienie: quero que venhas."
            },
            {
              "en": "Doubt/negation: não acho que seja caro.",
              "pl": "Wątpliwość/negacja: não acho que seja caro."
            },
            {
              "en": "Hypothesis: se eu tivesse tempo, iria.",
              "pl": "Hipoteza: se eu tivesse tempo, iria."
            },
            {
              "en": "Future time clauses: quando chegares, liga-me.",
              "pl": "Przyszłe zdania czasowe: quando chegares, liga-me."
            }
          ],
          "examples": [
            {
              "id": "subjunctive-001",
              "pt": "Quero que venhas comigo.",
              "en": "I want you to come with me.",
              "pl": "Chcę, żebyś poszedł/poszła ze mną."
            },
            {
              "id": "subjunctive-002",
              "pt": "Espero que esteja tudo bem.",
              "en": "I hope everything is well.",
              "pl": "Mam nadzieję, że wszystko jest dobrze."
            },
            {
              "id": "subjunctive-003",
              "pt": "Talvez ela saiba a resposta.",
              "en": "Maybe she knows the answer.",
              "pl": "Może ona zna odpowiedź."
            },
            {
              "id": "subjunctive-004",
              "pt": "Se eu tivesse dinheiro, comprava um carro.",
              "en": "If I had money, I would buy a car.",
              "pl": "Gdybym miała pieniądze, kupiłabym samochód."
            },
            {
              "id": "subjunctive-005",
              "pt": "Quando chegares, manda-me uma mensagem.",
              "en": "When you arrive, send me a message.",
              "pl": "Kiedy przyjedziesz, wyślij mi wiadomość."
            },
            {
              "id": "subjunctive-006",
              "pt": "É importante que estudes todos os dias.",
              "en": "It is important that you study every day.",
              "pl": "Ważne, żebyś uczył/uczyła się codziennie."
            }
          ],
          "table": {
            "caption": {
              "en": "Subjunctive triggers",
              "pl": "Wyzwalacze trybu łączącego"
            },
            "headers": [
              {
                "en": "Trigger",
                "pl": "Wyrażenie"
              },
              {
                "en": "Subjunctive example",
                "pl": "Przykład z subjunctive"
              },
              {
                "en": "Meaning",
                "pl": "Znaczenie"
              }
            ],
            "rows": [
              [
                "quero que",
                "quero que venhas",
                "I want you to come"
              ],
              [
                "talvez",
                "talvez chova",
                "maybe it will rain"
              ],
              [
                "não acho que",
                "não acho que seja tarde",
                "I do not think it is late"
              ],
              [
                "se",
                "se tivesse tempo",
                "if I had time"
              ],
              [
                "quando + future",
                "quando chegares",
                "when you arrive"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-subjunctive-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: Quero que tu ___ comigo.",
            "pl": "Uzupełnij: Quero que tu ___ comigo."
          },
          "choices": [
            {
              "id": "a",
              "label": "venhas",
              "correct": true
            },
            {
              "id": "b",
              "label": "vens",
              "correct": false
            },
            {
              "id": "c",
              "label": "vieste",
              "correct": false
            }
          ],
          "explain": {
            "en": "Quero que triggers the subjunctive.",
            "pl": "Quero que wywołuje tryb łączący."
          }
        },
        {
          "id": "q-subjunctive-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Quando ___, liga-me.",
            "pl": "Uzupełnij: Quando ___, liga-me."
          },
          "answer": "chegares",
          "accept": [
            "chegares",
            "Chegares"
          ],
          "explain": {
            "en": "Future time clause with quando uses the future subjunctive.",
            "pl": "Przyszłe zdanie czasowe z quando używa trybu łączącego przyszłego."
          }
        },
        {
          "id": "q-subjunctive-3",
          "type": "choice",
          "prompt": {
            "en": "Which phrase normally triggers subjunctive?",
            "pl": "Które wyrażenie zwykle wywołuje subjunctive?"
          },
          "choices": [
            {
              "id": "a",
              "label": "é importante que",
              "correct": true
            },
            {
              "id": "b",
              "label": "sei que",
              "correct": false
            },
            {
              "id": "c",
              "label": "é verdade que",
              "correct": false
            }
          ],
          "explain": {
            "en": "Necessity and value judgements often trigger subjunctive.",
            "pl": "Konieczność i oceny często wywołują subjunctive."
          }
        },
        {
          "id": "q-subjunctive-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: Talvez ela ___ a resposta.",
            "pl": "Uzupełnij: Talvez ela ___ a resposta."
          },
          "answer": "saiba",
          "accept": [
            "saiba",
            "Saiba"
          ],
          "explain": {
            "en": "Talvez often takes the subjunctive when uncertain.",
            "pl": "Talvez często przyjmuje subjunctive przy niepewności."
          }
        }
      ]
    },
    {
      "id": "imperative",
      "icon": "📣",
      "order": 17,
      "title": {
        "en": "Imperative",
        "pl": "Tryb rozkazujący"
      },
      "summary": {
        "en": "Commands in European Portuguese depend on tu/você choice and change in negative commands.",
        "pl": "Polecenia w portugalskim europejskim zależą od wyboru tu/você i zmieniają się w przeczeniach."
      },
      "polishTip": {
        "en": "Polish distinguishes mów/nie mów; Portuguese also changes the verb form between affirmative and negative tu commands.",
        "pl": "Polski rozróżnia mów/nie mów; portugalski dodatkowo zmienia formę czasownika między twierdzącym i przeczącym rozkazem z tu."
      },
      "sections": [
        {
          "id": "command-forms",
          "title": {
            "en": "Affirmative and negative commands",
            "pl": "Rozkazy twierdzące i przeczące"
          },
          "body": {
            "en": "Affirmative tu commands often look like the third-person present: fala, come, abre. Affirmative você/o senhor commands use subjunctive-like forms: fale, coma, abra.\n\nNegative commands use the present subjunctive for all persons: não fales, não coma, não abram. In European Portuguese, affirmative commands normally attach clitic pronouns after the verb: diz-me, senta-te. Negative commands put the clitic before the verb: não me digas.",
            "pl": "Twierdzące rozkazy z tu często wyglądają jak 3. osoba teraźniejsza: fala, come, abre. Twierdzące rozkazy z você/o senhor używają form podobnych do subjunctive: fale, coma, abra.\n\nRozkazy przeczące używają present subjunctive dla wszystkich osób: não fales, não coma, não abram. W portugalskim europejskim twierdzące rozkazy zwykle dołączają zaimki po czasowniku: diz-me, senta-te. Przeczące rozkazy stawiają zaimek przed czasownikiem: não me digas."
          },
          "rules": [
            {
              "en": "Tu affirmative: fala, come, abre.",
              "pl": "Twierdzące tu: fala, come, abre."
            },
            {
              "en": "Tu negative: não fales, não comas, não abras.",
              "pl": "Przeczące tu: não fales, não comas, não abras."
            },
            {
              "en": "Polite commands use subjunctive forms: espere, diga, faça.",
              "pl": "Uprzejme rozkazy używają form subjunctive: espere, diga, faça."
            },
            {
              "en": "Clitics attach after affirmative commands in EP: ajuda-me.",
              "pl": "Zaimki dołączają po twierdzących rozkazach w EP: ajuda-me."
            }
          ],
          "examples": [
            {
              "id": "imperative-001",
              "pt": "Fala mais devagar, por favor.",
              "en": "Speak more slowly, please.",
              "pl": "Mów wolniej, proszę."
            },
            {
              "id": "imperative-002",
              "pt": "Não fales tão depressa.",
              "en": "Don't speak so fast.",
              "pl": "Nie mów tak szybko."
            },
            {
              "id": "imperative-003",
              "pt": "Diga-me o seu nome, por favor.",
              "en": "Tell me your name, please.",
              "pl": "Proszę powiedzieć mi swoje nazwisko."
            },
            {
              "id": "imperative-004",
              "pt": "Senta-te aqui.",
              "en": "Sit down here.",
              "pl": "Usiądź tutaj."
            },
            {
              "id": "imperative-005",
              "pt": "Não te esqueças do bilhete.",
              "en": "Don't forget the ticket.",
              "pl": "Nie zapomnij biletu."
            },
            {
              "id": "imperative-006",
              "pt": "Vamos estudar juntos.",
              "en": "Let's study together.",
              "pl": "Uczmy się razem."
            }
          ],
          "table": {
            "caption": {
              "en": "Imperative examples",
              "pl": "Przykłady trybu rozkazującego"
            },
            "headers": [
              {
                "en": "Address",
                "pl": "Forma zwracania"
              },
              {
                "en": "Affirmative",
                "pl": "Twierdząco"
              },
              {
                "en": "Negative",
                "pl": "Przecząco"
              }
            ],
            "rows": [
              [
                "tu: falar",
                "fala",
                "não fales"
              ],
              [
                "tu: comer",
                "come",
                "não comas"
              ],
              [
                "tu: abrir",
                "abre",
                "não abras"
              ],
              [
                "você/o senhor",
                "fale",
                "não fale"
              ],
              [
                "vocês",
                "falem",
                "não falem"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-imperative-1",
          "type": "choice",
          "prompt": {
            "en": "Which is an affirmative tu command?",
            "pl": "Które jest twierdzącym rozkazem z tu?"
          },
          "choices": [
            {
              "id": "a",
              "label": "fala",
              "correct": true
            },
            {
              "id": "b",
              "label": "fales",
              "correct": false
            },
            {
              "id": "c",
              "label": "falas",
              "correct": false
            }
          ],
          "explain": {
            "en": "Affirmative tu command: fala.",
            "pl": "Twierdzący rozkaz z tu: fala."
          }
        },
        {
          "id": "q-imperative-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Não ___ tão depressa.",
            "pl": "Uzupełnij: Não ___ tão depressa."
          },
          "answer": "fales",
          "accept": [
            "fales",
            "Fales"
          ],
          "explain": {
            "en": "Negative tu commands use subjunctive: não fales.",
            "pl": "Przeczące rozkazy z tu używają subjunctive: não fales."
          }
        },
        {
          "id": "q-imperative-3",
          "type": "choice",
          "prompt": {
            "en": "Which is natural EP for 'Tell me'?",
            "pl": "Co jest naturalnym EP dla 'Powiedz mi'?"
          },
          "choices": [
            {
              "id": "a",
              "label": "Diz-me",
              "correct": true
            },
            {
              "id": "b",
              "label": "Me diz",
              "correct": false
            }
          ],
          "explain": {
            "en": "Affirmative commands normally use enclisis in EP.",
            "pl": "Twierdzące rozkazy zwykle używają enklizy w EP."
          }
        },
        {
          "id": "q-imperative-4",
          "type": "fill",
          "prompt": {
            "en": "Complete politely: ___-me o seu nome.",
            "pl": "Uzupełnij uprzejmie: ___-me o seu nome."
          },
          "answer": "Diga",
          "accept": [
            "Diga",
            "diga"
          ],
          "explain": {
            "en": "Polite command uses diga.",
            "pl": "Uprzejmy rozkaz używa diga."
          }
        }
      ]
    },
    {
      "id": "clitics",
      "icon": "🧩",
      "order": 18,
      "title": {
        "en": "Object pronouns and clitic placement",
        "pl": "Zaimki dopełnieniowe i ich pozycja"
      },
      "summary": {
        "en": "European Portuguese clitic placement is essential: affirmative main clauses usually use enclisis, while many triggers cause proclisis.",
        "pl": "Pozycja zaimków dopełnieniowych jest kluczowa w portugalskim europejskim: zdania twierdzące zwykle używają enklizy, a wiele wyrazów wyzwala proklizę."
      },
      "polishTip": {
        "en": "Polish object pronouns move fairly freely for emphasis; European Portuguese has stricter placement rules around the verb.",
        "pl": "Polskie zaimki dopełnieniowe przesuwają się dość swobodnie dla nacisku; portugalski europejski ma ściślejsze reguły pozycji przy czasowniku."
      },
      "sections": [
        {
          "id": "clitic-system",
          "title": {
            "en": "Forms, enclisis, proclisis, and mesoclisis",
            "pl": "Formy, enkliza, prokliza i mezokliza"
          },
          "body": {
            "en": "Clitics are short object pronouns: me, te, o, a, lhe, nos, vos, os, as, lhes. In neutral affirmative main clauses in European Portuguese, they normally attach after the verb: vejo-te, diz-me, comprei-o.\n\nProclisis places the clitic before the verb after triggers such as não, nunca, já, também, que, quem, quando, se, talvez, and in many subordinate clauses: não te vejo, quero que me digas. Mesoclisis inserts the clitic into a future or conditional form in formal style: dir-te-ei, contar-lhe-ia.",
            "pl": "Klitiki to krótkie zaimki dopełnieniowe: me, te, o, a, lhe, nos, vos, os, as, lhes. W neutralnych twierdzących zdaniach głównych w portugalskim europejskim zwykle dołączają po czasowniku: vejo-te, diz-me, comprei-o.\n\nProkliza stawia zaimek przed czasownikiem po wyrazach takich jak não, nunca, já, também, que, quem, quando, se, talvez oraz w wielu zdaniach podrzędnych: não te vejo, quero que me digas. Mezokliza wkłada zaimek w formę przyszłą lub warunkową w stylu formalnym: dir-te-ei, contar-lhe-ia."
          },
          "rules": [
            {
              "en": "Direct objects: o, a, os, as.",
              "pl": "Dopełnienie bliższe: o, a, os, as."
            },
            {
              "en": "Indirect objects: lhe, lhes; also me, te, nos, vos depending on person.",
              "pl": "Dopełnienie dalsze: lhe, lhes; także me, te, nos, vos zależnie od osoby."
            },
            {
              "en": "Affirmative main clause in EP: verb + clitic.",
              "pl": "Twierdzące zdanie główne w EP: czasownik + klitik."
            },
            {
              "en": "Negation and many trigger words: clitic + verb.",
              "pl": "Przeczenie i wiele wyzwalaczy: klitik + czasownik."
            },
            {
              "en": "After infinitives, enclisis is common: vou-te buscar, quero vê-lo.",
              "pl": "Po bezokoliczniku enkliza jest częsta: vou-te buscar, quero vê-lo."
            }
          ],
          "examples": [
            {
              "id": "clitics-001",
              "pt": "Vejo-te amanhã.",
              "en": "I'll see you tomorrow.",
              "pl": "Zobaczę cię jutro."
            },
            {
              "id": "clitics-002",
              "pt": "Não te vejo daqui.",
              "en": "I can't see you from here.",
              "pl": "Nie widzę cię stąd."
            },
            {
              "id": "clitics-003",
              "pt": "Diz-me a verdade.",
              "en": "Tell me the truth.",
              "pl": "Powiedz mi prawdę."
            },
            {
              "id": "clitics-004",
              "pt": "Quero que me digas a verdade.",
              "en": "I want you to tell me the truth.",
              "pl": "Chcę, żebyś powiedział/powiedziała mi prawdę."
            },
            {
              "id": "clitics-005",
              "pt": "Vou-te buscar à estação.",
              "en": "I will pick you up at the station.",
              "pl": "Odbiorę cię ze stacji."
            },
            {
              "id": "clitics-006",
              "pt": "Comprei-o ontem.",
              "en": "I bought it yesterday.",
              "pl": "Kupiłam go wczoraj."
            },
            {
              "id": "clitics-007",
              "pt": "Já lhe telefonei.",
              "en": "I have already phoned him/her/you formal.",
              "pl": "Już do niego/niej/pana/pani zadzwoniłam."
            },
            {
              "id": "clitics-008",
              "pt": "Dir-te-ei a resposta amanhã.",
              "en": "I will tell you the answer tomorrow.",
              "pl": "Powiem ci odpowiedź jutro."
            }
          ],
          "table": {
            "caption": {
              "en": "Clitic placement in EP",
              "pl": "Pozycja klitików w EP"
            },
            "headers": [
              {
                "en": "Pattern",
                "pl": "Wzorzec"
              },
              {
                "en": "Example",
                "pl": "Przykład"
              },
              {
                "en": "When",
                "pl": "Kiedy"
              }
            ],
            "rows": [
              [
                "enclisis",
                "vejo-te",
                "neutral affirmative main clause"
              ],
              [
                "proclisis",
                "não te vejo",
                "after negation or trigger"
              ],
              [
                "infinitive enclisis",
                "vou-te buscar",
                "common with infinitive"
              ],
              [
                "mesoclisis",
                "dir-te-ei",
                "formal future/conditional without trigger"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-clitics-1",
          "type": "choice",
          "prompt": {
            "en": "Which is neutral affirmative European Portuguese?",
            "pl": "Które jest neutralnym twierdzącym portugalskim europejskim?"
          },
          "choices": [
            {
              "id": "a",
              "label": "Vejo-te amanhã.",
              "correct": true
            },
            {
              "id": "b",
              "label": "Te vejo amanhã.",
              "correct": false
            }
          ],
          "explain": {
            "en": "EP normally uses enclisis in affirmative main clauses.",
            "pl": "EP zwykle używa enklizy w twierdzących zdaniach głównych."
          }
        },
        {
          "id": "q-clitics-2",
          "type": "fill",
          "prompt": {
            "en": "Complete with proclisis: Não ___ vejo.",
            "pl": "Uzupełnij proklizą: Não ___ vejo."
          },
          "answer": "te",
          "accept": [
            "te",
            "Te"
          ],
          "explain": {
            "en": "Não triggers proclisis: não te vejo.",
            "pl": "Não wywołuje proklizę: não te vejo."
          }
        },
        {
          "id": "q-clitics-3",
          "type": "choice",
          "prompt": {
            "en": "Which form is a direct object pronoun for masculine singular 'it/him'?",
            "pl": "Która forma jest zaimkiem dopełnienia bliższego dla męskiego lp. 'go/to'?"
          },
          "choices": [
            {
              "id": "a",
              "label": "o",
              "correct": true
            },
            {
              "id": "b",
              "label": "lhe",
              "correct": false
            },
            {
              "id": "c",
              "label": "lhes",
              "correct": false
            }
          ],
          "explain": {
            "en": "O is direct object; lhe is indirect.",
            "pl": "O to dopełnienie bliższe; lhe jest dopełnieniem dalszym."
          }
        },
        {
          "id": "q-clitics-4",
          "type": "fill",
          "prompt": {
            "en": "Complete naturally in EP: Vou-___ buscar.",
            "pl": "Uzupełnij naturalnie w EP: Vou-___ buscar."
          },
          "answer": "te",
          "accept": [
            "te",
            "Te"
          ],
          "explain": {
            "en": "Vou-te buscar is natural European Portuguese.",
            "pl": "Vou-te buscar jest naturalne w portugalskim europejskim."
          }
        }
      ]
    },
    {
      "id": "reflexives",
      "icon": "🪞",
      "order": 19,
      "title": {
        "en": "Reflexive verbs",
        "pl": "Czasowniki zwrotne"
      },
      "summary": {
        "en": "Reflexive verbs use clitic pronouns when the subject acts on itself or in pronominal expressions.",
        "pl": "Czasowniki zwrotne używają klitików, gdy podmiot działa na siebie albo w wyrażeniach zaimkowych."
      },
      "polishTip": {
        "en": "Polish uses się for many reflexive verbs; Portuguese uses person-specific pronouns: me, te, se, nos.",
        "pl": "Polski używa się w wielu czasownikach zwrotnych; portugalski używa zaimków zależnych od osoby: me, te, se, nos."
      },
      "sections": [
        {
          "id": "reflexive-placement",
          "title": {
            "en": "Reflexive forms and placement",
            "pl": "Formy zwrotne i ich pozycja"
          },
          "body": {
            "en": "Reflexive pronouns match the subject: eu levanto-me, tu levantas-te, ele levanta-se, nós levantamo-nos, eles levantam-se. In affirmative European Portuguese, the pronoun usually follows the verb.\n\nNegation and other proclisis triggers move it before the verb: não me lembro, nunca te atrasas. Some Portuguese reflexive verbs correspond to non-reflexive English verbs, so learn them as whole expressions.",
            "pl": "Zaimki zwrotne zgadzają się z podmiotem: eu levanto-me, tu levantas-te, ele levanta-se, nós levantamo-nos, eles levantam-se. W twierdzącym portugalskim europejskim zaimek zwykle stoi po czasowniku.\n\nPrzeczenie i inne wyzwalacze proklizy przesuwają go przed czasownik: não me lembro, nunca te atrasas. Niektóre portugalskie czasowniki zwrotne odpowiadają angielskim czasownikom niezwrotnym, więc ucz się ich jako całych wyrażeń."
          },
          "rules": [
            {
              "en": "Reflexive pronouns: me, te, se, nos, vos, se.",
              "pl": "Zaimki zwrotne: me, te, se, nos, vos, se."
            },
            {
              "en": "Affirmative EP: levanto-me, sentas-te.",
              "pl": "Twierdzące EP: levanto-me, sentas-te."
            },
            {
              "en": "Negative: não me levanto, não te sentas.",
              "pl": "Przeczące: não me levanto, não te sentas."
            },
            {
              "en": "Some verbs are idiomatic: lembrar-se de, esquecer-se de, queixar-se de.",
              "pl": "Niektóre czasowniki są idiomatyczne: lembrar-se de, esquecer-se de, queixar-se de."
            }
          ],
          "examples": [
            {
              "id": "reflexives-001",
              "pt": "Levanto-me às sete.",
              "en": "I get up at seven.",
              "pl": "Wstaję o siódmej."
            },
            {
              "id": "reflexives-002",
              "pt": "Tu deitas-te tarde?",
              "en": "Do you go to bed late?",
              "pl": "Kładziesz się późno?"
            },
            {
              "id": "reflexives-003",
              "pt": "Ela chama-se Marta.",
              "en": "Her name is Marta.",
              "pl": "Ona nazywa się Marta."
            },
            {
              "id": "reflexives-004",
              "pt": "Não me lembro do nome dele.",
              "en": "I don't remember his name.",
              "pl": "Nie pamiętam jego imienia."
            },
            {
              "id": "reflexives-005",
              "pt": "Nós encontramo-nos à porta do cinema.",
              "en": "We meet at the cinema door.",
              "pl": "Spotykamy się przy wejściu do kina."
            },
            {
              "id": "reflexives-006",
              "pt": "Eles esqueceram-se das chaves.",
              "en": "They forgot the keys.",
              "pl": "Oni zapomnieli kluczy."
            }
          ],
          "table": {
            "caption": {
              "en": "Reflexive present: levantar-se",
              "pl": "Czas teraźniejszy zwrotny: levantar-se"
            },
            "headers": [
              {
                "en": "Person",
                "pl": "Osoba"
              },
              {
                "en": "Affirmative EP",
                "pl": "Twierdzące EP"
              },
              {
                "en": "Negative",
                "pl": "Przeczące"
              }
            ],
            "rows": [
              [
                "eu",
                "levanto-me",
                "não me levanto"
              ],
              [
                "tu",
                "levantas-te",
                "não te levantas"
              ],
              [
                "ele/ela",
                "levanta-se",
                "não se levanta"
              ],
              [
                "nós",
                "levantamo-nos",
                "não nos levantamos"
              ],
              [
                "eles/elas",
                "levantam-se",
                "não se levantam"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-reflexives-1",
          "type": "choice",
          "prompt": {
            "en": "Which is natural affirmative EP?",
            "pl": "Które jest naturalnym twierdzącym EP?"
          },
          "choices": [
            {
              "id": "a",
              "label": "Levanto-me cedo.",
              "correct": true
            },
            {
              "id": "b",
              "label": "Me levanto cedo.",
              "correct": false
            }
          ],
          "explain": {
            "en": "Affirmative main clauses normally use enclisis.",
            "pl": "Twierdzące zdania główne zwykle używają enklizy."
          }
        },
        {
          "id": "q-reflexives-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Ela chama-___ Marta.",
            "pl": "Uzupełnij: Ela chama-___ Marta."
          },
          "answer": "se",
          "accept": [
            "se",
            "Se"
          ],
          "explain": {
            "en": "Third-person reflexive pronoun is se.",
            "pl": "Zaimek zwrotny 3. osoby to se."
          }
        },
        {
          "id": "q-reflexives-3",
          "type": "choice",
          "prompt": {
            "en": "Complete: Não ___ lembro.",
            "pl": "Uzupełnij: Não ___ lembro."
          },
          "choices": [
            {
              "id": "a",
              "label": "me",
              "correct": true
            },
            {
              "id": "b",
              "label": "-me",
              "correct": false
            },
            {
              "id": "c",
              "label": "se",
              "correct": false
            }
          ],
          "explain": {
            "en": "Negation triggers proclisis: não me lembro.",
            "pl": "Przeczenie wywołuje proklizę: não me lembro."
          }
        },
        {
          "id": "q-reflexives-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: Tu deitas-___ tarde.",
            "pl": "Uzupełnij: Tu deitas-___ tarde."
          },
          "answer": "te",
          "accept": [
            "te",
            "Te"
          ],
          "explain": {
            "en": "Tu reflexive pronoun is te.",
            "pl": "Zaimek zwrotny dla tu to te."
          }
        }
      ]
    },
    {
      "id": "prepositions",
      "icon": "🧱",
      "order": 20,
      "title": {
        "en": "Prepositions",
        "pl": "Przyimki"
      },
      "summary": {
        "en": "The core prepositions a, de, em, por, and para carry many meanings and often contract with articles.",
        "pl": "Główne przyimki a, de, em, por i para mają wiele znaczeń i często łączą się z rodzajnikami."
      },
      "polishTip": {
        "en": "Polish prepositions trigger cases; Portuguese prepositions do not change noun endings but often merge with articles.",
        "pl": "Polskie przyimki wymagają przypadków; portugalskie nie zmieniają końcówek rzeczowników, ale często łączą się z rodzajnikami."
      },
      "sections": [
        {
          "id": "core-prepositions",
          "title": {
            "en": "A, de, em, por, para",
            "pl": "A, de, em, por, para"
          },
          "body": {
            "en": "A often marks direction, time, indirect objects, and fixed expressions: vou a Lisboa, às oito, dou o livro à Ana. De marks origin, possession, material, topic, and many complements: sou de Varsóvia, livro de português.\n\nEm marks location and time within: estou em casa, em julho. Por often means through, by, because of, or per; para often means destination, purpose, deadline, or intended recipient. Many verbs require a fixed preposition, so learn verb + preposition together.",
            "pl": "A często oznacza kierunek, godzinę, dopełnienie dalsze i stałe wyrażenia: vou a Lisboa, às oito, dou o livro à Ana. De oznacza pochodzenie, posiadanie, materiał, temat i wiele dopełnień: sou de Varsóvia, livro de português.\n\nEm oznacza miejsce i czas wewnątrz: estou em casa, em julho. Por często znaczy przez, dzięki/z powodu, za lub na jednostkę; para oznacza cel podróży, cel działania, termin lub adresata. Wiele czasowników wymaga stałego przyimka, więc ucz się czasownik + przyimek razem."
          },
          "rules": [
            {
              "en": "A = to/at for direction, time, indirect object.",
              "pl": "A = do/o przy kierunku, godzinie, dopełnieniu dalszym."
            },
            {
              "en": "De = from/of/about/material.",
              "pl": "De = z/od/o/materiał."
            },
            {
              "en": "Em = in/on/at for location and time periods.",
              "pl": "Em = w/na/przy dla miejsca i okresów czasu."
            },
            {
              "en": "Por = through/by/because of/per.",
              "pl": "Por = przez/dzięki/z powodu/za jednostkę."
            },
            {
              "en": "Para = to/towards/for/in order to/by deadline.",
              "pl": "Para = do/w kierunku/dla/żeby/do terminu."
            }
          ],
          "examples": [
            {
              "id": "prepositions-001",
              "pt": "Vou a Lisboa amanhã.",
              "en": "I am going to Lisbon tomorrow.",
              "pl": "Jadę jutro do Lizbony."
            },
            {
              "id": "prepositions-002",
              "pt": "Sou de Varsóvia, mas vivo em Portugal.",
              "en": "I am from Warsaw, but I live in Portugal.",
              "pl": "Jestem z Warszawy, ale mieszkam w Portugalii."
            },
            {
              "id": "prepositions-003",
              "pt": "O livro é para a Joanna.",
              "en": "The book is for Joanna.",
              "pl": "Książka jest dla Joanny."
            },
            {
              "id": "prepositions-004",
              "pt": "Passei pelo jardim.",
              "en": "I passed through the garden.",
              "pl": "Przeszłam przez ogród."
            },
            {
              "id": "prepositions-005",
              "pt": "Chego às oito da manhã.",
              "en": "I arrive at eight in the morning.",
              "pl": "Przyjeżdżam o ósmej rano."
            },
            {
              "id": "prepositions-006",
              "pt": "Falámos sobre gramática durante uma hora.",
              "en": "We talked about grammar for an hour.",
              "pl": "Rozmawialiśmy o gramatyce przez godzinę."
            }
          ],
          "table": {
            "caption": {
              "en": "Core prepositions",
              "pl": "Główne przyimki"
            },
            "headers": [
              {
                "en": "Preposition",
                "pl": "Przyimek"
              },
              {
                "en": "Common meanings",
                "pl": "Częste znaczenia"
              },
              {
                "en": "Example",
                "pl": "Przykład"
              }
            ],
            "rows": [
              [
                "a",
                "to, at",
                "vou ao Porto"
              ],
              [
                "de",
                "of, from",
                "sou da Polónia"
              ],
              [
                "em",
                "in, on, at",
                "estou no café"
              ],
              [
                "por",
                "through, by, because of",
                "pelo centro"
              ],
              [
                "para",
                "to, for, in order to",
                "para ti"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-prepositions-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: Sou ___ Varsóvia.",
            "pl": "Uzupełnij: Sou ___ Varsóvia."
          },
          "choices": [
            {
              "id": "a",
              "label": "de",
              "correct": true
            },
            {
              "id": "b",
              "label": "em",
              "correct": false
            },
            {
              "id": "c",
              "label": "por",
              "correct": false
            }
          ],
          "explain": {
            "en": "Origin uses de.",
            "pl": "Pochodzenie używa de."
          }
        },
        {
          "id": "q-prepositions-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Vivo ___ Portugal.",
            "pl": "Uzupełnij: Vivo ___ Portugal."
          },
          "answer": "em",
          "accept": [
            "em",
            "Em"
          ],
          "explain": {
            "en": "Location with countries often uses em, contracting when an article appears.",
            "pl": "Miejsce z krajami często używa em, z połączeniem, gdy pojawia się rodzajnik."
          }
        },
        {
          "id": "q-prepositions-3",
          "type": "choice",
          "prompt": {
            "en": "Which usually means 'for / intended for'?",
            "pl": "Który zwykle znaczy 'dla / przeznaczone dla'?"
          },
          "choices": [
            {
              "id": "a",
              "label": "para",
              "correct": true
            },
            {
              "id": "b",
              "label": "de",
              "correct": false
            },
            {
              "id": "c",
              "label": "em",
              "correct": false
            }
          ],
          "explain": {
            "en": "Para marks recipient, purpose, or destination.",
            "pl": "Para oznacza odbiorcę, cel lub kierunek."
          }
        },
        {
          "id": "q-prepositions-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: Chego ___ oito.",
            "pl": "Uzupełnij: Chego ___ oito."
          },
          "answer": "às",
          "accept": [
            "às",
            "Às",
            "as",
            "As"
          ],
          "explain": {
            "en": "Time uses a + as = às with horas understood.",
            "pl": "Godzina używa a + as = às przy domyślnym horas."
          }
        }
      ]
    },
    {
      "id": "contractions",
      "icon": "🔀",
      "order": 21,
      "title": {
        "en": "Contractions",
        "pl": "Połączenia przyimków z rodzajnikami"
      },
      "summary": {
        "en": "Portuguese frequently contracts prepositions with articles and demonstratives: ao, do, na, pelo, deste.",
        "pl": "Portugalski często łączy przyimki z rodzajnikami i wskazującymi: ao, do, na, pelo, deste."
      },
      "polishTip": {
        "en": "Polish uses case after prepositions; Portuguese often shows the relationship through a preposition-article contraction instead.",
        "pl": "Polski używa przypadku po przyimkach; portugalski często pokazuje relację przez połączenie przyimka z rodzajnikiem."
      },
      "sections": [
        {
          "id": "mandatory-contractions",
          "title": {
            "en": "Common and often mandatory contractions",
            "pl": "Częste i często obowiązkowe połączenia"
          },
          "body": {
            "en": "When a preposition meets a definite article, contraction is normally required: a + o = ao, de + a = da, em + os = nos, por + as = pelas. This is not optional in normal Portuguese.\n\nContractions also happen with demonstratives and some pronouns: deste, nessa, àquele. A contraction tells you both the preposition and the gender/number of the noun that follows.",
            "pl": "Gdy przyimek spotyka rodzajnik określony, połączenie jest zwykle obowiązkowe: a + o = ao, de + a = da, em + os = nos, por + as = pelas. W normalnym portugalskim nie jest to opcjonalne.\n\nPołączenia zachodzą też ze wskazującymi i niektórymi zaimkami: deste, nessa, àquele. Połączenie informuje jednocześnie o przyimku oraz rodzaju i liczbie następnego rzeczownika."
          },
          "rules": [
            {
              "en": "A + o/os/a/as = ao/aos/à/às.",
              "pl": "A + o/os/a/as = ao/aos/à/às."
            },
            {
              "en": "De + article = do, da, dos, das.",
              "pl": "De + rodzajnik = do, da, dos, das."
            },
            {
              "en": "Em + article = no, na, nos, nas.",
              "pl": "Em + rodzajnik = no, na, nos, nas."
            },
            {
              "en": "Por + article = pelo, pela, pelos, pelas.",
              "pl": "Por + rodzajnik = pelo, pela, pelos, pelas."
            }
          ],
          "examples": [
            {
              "id": "contractions-001",
              "pt": "Vou ao supermercado.",
              "en": "I am going to the supermarket.",
              "pl": "Idę do supermarketu."
            },
            {
              "id": "contractions-002",
              "pt": "Venho da Polónia.",
              "en": "I come from Poland.",
              "pl": "Pochodzę z Polski."
            },
            {
              "id": "contractions-003",
              "pt": "Estamos no café da esquina.",
              "en": "We are in the corner café.",
              "pl": "Jesteśmy w kawiarni na rogu."
            },
            {
              "id": "contractions-004",
              "pt": "Passámos pela casa de banho.",
              "en": "We passed by the bathroom.",
              "pl": "Przeszliśmy obok łazienki."
            },
            {
              "id": "contractions-005",
              "pt": "Cheguei às nove.",
              "en": "I arrived at nine.",
              "pl": "Przyjechałam o dziewiątej."
            },
            {
              "id": "contractions-006",
              "pt": "Gosto deste bairro.",
              "en": "I like this neighbourhood.",
              "pl": "Lubię tę dzielnicę."
            }
          ],
          "table": {
            "caption": {
              "en": "Preposition + article",
              "pl": "Przyimek + rodzajnik"
            },
            "headers": [
              {
                "en": "Preposition",
                "pl": "Przyimek"
              },
              {
                "en": "o",
                "pl": "o"
              },
              {
                "en": "a",
                "pl": "a"
              },
              {
                "en": "os",
                "pl": "os"
              },
              {
                "en": "as",
                "pl": "as"
              }
            ],
            "rows": [
              [
                "a",
                "ao",
                "à",
                "aos",
                "às"
              ],
              [
                "de",
                "do",
                "da",
                "dos",
                "das"
              ],
              [
                "em",
                "no",
                "na",
                "nos",
                "nas"
              ],
              [
                "por",
                "pelo",
                "pela",
                "pelos",
                "pelas"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-contractions-1",
          "type": "choice",
          "prompt": {
            "en": "What is a + o?",
            "pl": "Co daje a + o?"
          },
          "choices": [
            {
              "id": "a",
              "label": "ao",
              "correct": true
            },
            {
              "id": "b",
              "label": "do",
              "correct": false
            },
            {
              "id": "c",
              "label": "no",
              "correct": false
            }
          ],
          "explain": {
            "en": "A plus o contracts to ao.",
            "pl": "A plus o łączy się w ao."
          }
        },
        {
          "id": "q-contractions-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Venho ___ Polónia.",
            "pl": "Uzupełnij: Venho ___ Polónia."
          },
          "answer": "da",
          "accept": [
            "da",
            "Da"
          ],
          "explain": {
            "en": "De + a = da.",
            "pl": "De + a = da."
          }
        },
        {
          "id": "q-contractions-3",
          "type": "choice",
          "prompt": {
            "en": "What is em + as?",
            "pl": "Co daje em + as?"
          },
          "choices": [
            {
              "id": "a",
              "label": "nas",
              "correct": true
            },
            {
              "id": "b",
              "label": "das",
              "correct": false
            },
            {
              "id": "c",
              "label": "às",
              "correct": false
            }
          ],
          "explain": {
            "en": "Em plus as contracts to nas.",
            "pl": "Em plus as łączy się w nas."
          }
        },
        {
          "id": "q-contractions-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: Passámos ___ jardim.",
            "pl": "Uzupełnij: Passámos ___ jardim."
          },
          "answer": "pelo",
          "accept": [
            "pelo",
            "Pelo"
          ],
          "explain": {
            "en": "Por + o = pelo.",
            "pl": "Por + o = pelo."
          }
        }
      ]
    },
    {
      "id": "comparatives-superlatives",
      "icon": "📏",
      "order": 22,
      "title": {
        "en": "Comparatives and superlatives",
        "pl": "Stopniowanie przymiotników i przysłówków"
      },
      "summary": {
        "en": "Use mais...do que, menos...do que, tão...como, and o/a mais for comparisons and superlatives.",
        "pl": "Używaj mais...do que, menos...do que, tão...como i o/a mais do porównań i stopnia najwyższego."
      },
      "polishTip": {
        "en": "Polish changes adjective endings for degree; Portuguese usually adds separate words like mais and menos.",
        "pl": "Polski zmienia przymiotnik dla stopnia; portugalski zwykle dodaje osobne słowa, takie jak mais i menos."
      },
      "sections": [
        {
          "id": "comparison-patterns",
          "title": {
            "en": "More, less, as, and the most",
            "pl": "Bardziej, mniej, tak samo i najbardziej"
          },
          "body": {
            "en": "The basic comparative patterns are mais ... do que for more than, menos ... do que for less than, and tão ... como for as ... as. In speech, que is also heard, but do que is a safe standard form.\n\nSuperlatives use the definite article plus mais or menos: o mais caro, a menos difícil. Absolute superlatives can use muito or the suffix -íssimo in formal or expressive style: muito bonito, belíssimo.",
            "pl": "Podstawowe wzorce porównawcze to mais ... do que dla bardziej niż, menos ... do que dla mniej niż i tão ... como dla tak ... jak. W mowie słychać też que, ale do que jest bezpieczną formą standardową.\n\nStopień najwyższy używa rodzajnika określonego plus mais lub menos: o mais caro, a menos difícil. Stopień absolutny może używać muito albo przyrostka -íssimo w stylu formalnym lub ekspresyjnym: muito bonito, belíssimo."
          },
          "rules": [
            {
              "en": "More than: mais alto do que.",
              "pl": "Bardziej niż: mais alto do que."
            },
            {
              "en": "Less than: menos caro do que.",
              "pl": "Mniej niż: menos caro do que."
            },
            {
              "en": "As...as: tão rápido como.",
              "pl": "Tak...jak: tão rápido como."
            },
            {
              "en": "Best/worst have irregular forms: melhor, pior.",
              "pl": "Najlepszy/najgorszy mają formy nieregularne: melhor, pior."
            }
          ],
          "examples": [
            {
              "id": "comparatives-superlatives-001",
              "pt": "Lisboa é maior do que Coimbra.",
              "en": "Lisbon is bigger than Coimbra.",
              "pl": "Lizbona jest większa niż Coimbra."
            },
            {
              "id": "comparatives-superlatives-002",
              "pt": "Este exercício é menos difícil do que aquele.",
              "en": "This exercise is less difficult than that one.",
              "pl": "To ćwiczenie jest mniej trudne niż tamto."
            },
            {
              "id": "comparatives-superlatives-003",
              "pt": "O comboio é tão cómodo como o autocarro.",
              "en": "The train is as comfortable as the bus.",
              "pl": "Pociąg jest tak wygodny jak autobus."
            },
            {
              "id": "comparatives-superlatives-004",
              "pt": "Este é o melhor café do bairro.",
              "en": "This is the best coffee in the neighbourhood.",
              "pl": "To najlepsza kawa w dzielnicy."
            },
            {
              "id": "comparatives-superlatives-005",
              "pt": "A Ana é a mais nova da turma.",
              "en": "Ana is the youngest in the class.",
              "pl": "Ana jest najmłodsza w klasie."
            },
            {
              "id": "comparatives-superlatives-006",
              "pt": "A vista é belíssima.",
              "en": "The view is extremely beautiful.",
              "pl": "Widok jest przepiękny."
            }
          ],
          "table": {
            "caption": {
              "en": "Comparison patterns",
              "pl": "Wzorce porównań"
            },
            "headers": [
              {
                "en": "Meaning",
                "pl": "Znaczenie"
              },
              {
                "en": "Pattern",
                "pl": "Wzorzec"
              },
              {
                "en": "Example",
                "pl": "Przykład"
              }
            ],
            "rows": [
              [
                "more than",
                "mais ... do que",
                "mais caro do que"
              ],
              [
                "less than",
                "menos ... do que",
                "menos longe do que"
              ],
              [
                "as as",
                "tão ... como",
                "tão bom como"
              ],
              [
                "the most",
                "o/a mais",
                "a mais alta"
              ],
              [
                "better/worse",
                "melhor/pior",
                "melhor do que"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-comparatives-superlatives-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: Lisboa é maior ___ Coimbra.",
            "pl": "Uzupełnij: Lisboa é maior ___ Coimbra."
          },
          "choices": [
            {
              "id": "a",
              "label": "do que",
              "correct": true
            },
            {
              "id": "b",
              "label": "como",
              "correct": false
            },
            {
              "id": "c",
              "label": "de",
              "correct": false
            }
          ],
          "explain": {
            "en": "Comparatives often use do que.",
            "pl": "Porównania często używają do que."
          }
        },
        {
          "id": "q-comparatives-superlatives-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: tão cómodo ___",
            "pl": "Uzupełnij: tão cómodo ___"
          },
          "answer": "como",
          "accept": [
            "como",
            "Como"
          ],
          "explain": {
            "en": "Tão pairs with como.",
            "pl": "Tão łączy się z como."
          }
        },
        {
          "id": "q-comparatives-superlatives-3",
          "type": "choice",
          "prompt": {
            "en": "Which means 'the best'?",
            "pl": "Które znaczy 'najlepszy'?"
          },
          "choices": [
            {
              "id": "a",
              "label": "o melhor",
              "correct": true
            },
            {
              "id": "b",
              "label": "o mais bom",
              "correct": false
            },
            {
              "id": "c",
              "label": "o menos bom",
              "correct": false
            }
          ],
          "explain": {
            "en": "Melhor is the irregular form for better/best.",
            "pl": "Melhor to nieregularna forma lepszy/najlepszy."
          }
        },
        {
          "id": "q-comparatives-superlatives-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: a ___ nova da turma",
            "pl": "Uzupełnij: a ___ nova da turma"
          },
          "answer": "mais",
          "accept": [
            "mais",
            "Mais"
          ],
          "explain": {
            "en": "Superlative uses article + mais.",
            "pl": "Stopień najwyższy używa rodzajnika + mais."
          }
        }
      ]
    },
    {
      "id": "adverbs",
      "icon": "⚡",
      "order": 23,
      "title": {
        "en": "Adverbs",
        "pl": "Przysłówki"
      },
      "summary": {
        "en": "Adverbs modify verbs, adjectives, or whole sentences and often use -mente or fixed common forms.",
        "pl": "Przysłówki określają czasowniki, przymiotniki lub całe zdania i często używają -mente albo stałych częstych form."
      },
      "polishTip": {
        "en": "Polish often forms adverbs with -o/-e; Portuguese often uses the feminine adjective plus -mente.",
        "pl": "Polski często tworzy przysłówki przez -o/-e; portugalski często używa żeńskiej formy przymiotnika plus -mente."
      },
      "sections": [
        {
          "id": "adverb-formation",
          "title": {
            "en": "Formation, position, and frequency",
            "pl": "Tworzenie, pozycja i częstotliwość"
          },
          "body": {
            "en": "Many adverbs are formed from the feminine singular adjective plus -mente: lenta -> lentamente, clara -> claramente. If the adjective has one form, add -mente directly: felizmente.\n\nCommon short adverbs include bem, mal, muito, pouco, hoje, ontem, amanhã, aqui, ali, sempre, nunca, já, ainda, talvez. Their position depends on meaning, but many come after the verb or before the adjective they modify.",
            "pl": "Wiele przysłówków tworzy się od żeńskiej formy liczby pojedynczej przymiotnika plus -mente: lenta -> lentamente, clara -> claramente. Jeśli przymiotnik ma jedną formę, dodaj -mente bezpośrednio: felizmente.\n\nCzęste krótkie przysłówki to bem, mal, muito, pouco, hoje, ontem, amanhã, aqui, ali, sempre, nunca, já, ainda, talvez. Ich pozycja zależy od znaczenia, ale wiele stoi po czasowniku albo przed przymiotnikiem, który określają."
          },
          "rules": [
            {
              "en": "Use feminine adjective + -mente: rápida -> rapidamente.",
              "pl": "Użyj żeńskiej formy + -mente: rápida -> rapidamente."
            },
            {
              "en": "Bem and mal are irregular common adverbs.",
              "pl": "Bem i mal to częste nieregularne przysłówki."
            },
            {
              "en": "Muito before adjectives means very; after verbs it can mean a lot.",
              "pl": "Muito przed przymiotnikami znaczy bardzo; po czasownikach może znaczyć dużo."
            },
            {
              "en": "Nunca and já also affect clitic placement: nunca me esqueço, já te disse.",
              "pl": "Nunca i já wpływają też na pozycję klitików: nunca me esqueço, já te disse."
            }
          ],
          "examples": [
            {
              "id": "adverbs-001",
              "pt": "Ela fala lentamente.",
              "en": "She speaks slowly.",
              "pl": "Ona mówi powoli."
            },
            {
              "id": "adverbs-002",
              "pt": "Tu escreves muito bem.",
              "en": "You write very well.",
              "pl": "Piszesz bardzo dobrze."
            },
            {
              "id": "adverbs-003",
              "pt": "Hoje vou ficar em casa.",
              "en": "Today I am going to stay at home.",
              "pl": "Dziś zostanę w domu."
            },
            {
              "id": "adverbs-004",
              "pt": "Nunca me esqueço do teu aniversário.",
              "en": "I never forget your birthday.",
              "pl": "Nigdy nie zapominam o twoich urodzinach."
            },
            {
              "id": "adverbs-005",
              "pt": "Já te enviei a mensagem.",
              "en": "I have already sent you the message.",
              "pl": "Już wysłałam ci wiadomość."
            },
            {
              "id": "adverbs-006",
              "pt": "Talvez chova amanhã.",
              "en": "Maybe it will rain tomorrow.",
              "pl": "Może jutro będzie padać."
            }
          ],
          "table": {
            "caption": {
              "en": "Common adverbs",
              "pl": "Częste przysłówki"
            },
            "headers": [
              {
                "en": "Type",
                "pl": "Typ"
              },
              {
                "en": "Adverbs",
                "pl": "Przysłówki"
              },
              {
                "en": "Example",
                "pl": "Przykład"
              }
            ],
            "rows": [
              [
                "manner",
                "bem, mal, lentamente",
                "fala bem"
              ],
              [
                "time",
                "hoje, ontem, amanhã, já, ainda",
                "já chegou"
              ],
              [
                "place",
                "aqui, ali, lá",
                "fica aqui"
              ],
              [
                "frequency",
                "sempre, nunca, muitas vezes",
                "nunca falha"
              ],
              [
                "degree",
                "muito, pouco, bastante",
                "muito caro"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-adverbs-1",
          "type": "choice",
          "prompt": {
            "en": "How do you form an adverb from lenta?",
            "pl": "Jak utworzyć przysłówek od lenta?"
          },
          "choices": [
            {
              "id": "a",
              "label": "lentamente",
              "correct": true
            },
            {
              "id": "b",
              "label": "lentemente",
              "correct": false
            },
            {
              "id": "c",
              "label": "lentomente",
              "correct": false
            }
          ],
          "explain": {
            "en": "Use feminine adjective + -mente.",
            "pl": "Użyj żeńskiej formy + -mente."
          }
        },
        {
          "id": "q-adverbs-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Ela fala muito ___.",
            "pl": "Uzupełnij: Ela fala muito ___."
          },
          "answer": "bem",
          "accept": [
            "bem",
            "Bem"
          ],
          "explain": {
            "en": "Bem means well.",
            "pl": "Bem znaczy dobrze."
          }
        },
        {
          "id": "q-adverbs-3",
          "type": "choice",
          "prompt": {
            "en": "Which adverb can trigger proclisis?",
            "pl": "Który przysłówek może wywołać proklizę?"
          },
          "choices": [
            {
              "id": "a",
              "label": "nunca",
              "correct": true
            },
            {
              "id": "b",
              "label": "devagar",
              "correct": false
            },
            {
              "id": "c",
              "label": "cedo",
              "correct": false
            }
          ],
          "explain": {
            "en": "Nunca is a negative trigger: nunca me esqueço.",
            "pl": "Nunca jest wyzwalaczem przeczącym: nunca me esqueço."
          }
        },
        {
          "id": "q-adverbs-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: ___ vou ficar em casa.",
            "pl": "Uzupełnij: ___ vou ficar em casa."
          },
          "answer": "Hoje",
          "accept": [
            "Hoje",
            "hoje"
          ],
          "explain": {
            "en": "Hoje means today.",
            "pl": "Hoje znaczy dzisiaj."
          }
        }
      ]
    },
    {
      "id": "negation-questions",
      "icon": "❓",
      "order": 24,
      "title": {
        "en": "Negation and questions",
        "pl": "Przeczenia i pytania"
      },
      "summary": {
        "en": "Portuguese negates with não before the verb and often forms questions with intonation or question words.",
        "pl": "Portugalski przeczy przez não przed czasownikiem i często tworzy pytania intonacją albo słowami pytającymi."
      },
      "polishTip": {
        "en": "Polish question word order is flexible; Portuguese often keeps statement order and uses intonation.",
        "pl": "Polski szyk pytań jest elastyczny; portugalski często zachowuje szyk oznajmujący i używa intonacji."
      },
      "sections": [
        {
          "id": "basic-negation-questions",
          "title": {
            "en": "Não, question words, and tags",
            "pl": "Não, słowa pytające i pytania potwierdzające"
          },
          "body": {
            "en": "Basic negation places não before the verb: não sei, não tenho, não vou. With object clitics, não triggers proclisis: não te conheço, não me lembro.\n\nYes/no questions can look like statements in writing except for the question mark: Tu falas português? Question words usually come before the verb: quem, o que, onde, quando, como, porque, qual, quanto. In Portugal, pois não? can be a polite service question meaning 'how can I help?' depending on context.",
            "pl": "Podstawowe przeczenie stawia não przed czasownikiem: não sei, não tenho, não vou. Z klitikami dopełnieniowymi não wywołuje proklizę: não te conheço, não me lembro.\n\nPytania tak/nie mogą wyglądać w piśmie jak zdania oznajmujące poza znakiem zapytania: Tu falas português? Słowa pytające zwykle stoją przed czasownikiem: quem, o que, onde, quando, como, porque, qual, quanto. W Portugalii pois não? może być uprzejmym pytaniem obsługowym w znaczeniu 'w czym mogę pomóc?' zależnie od kontekstu."
          },
          "rules": [
            {
              "en": "Não goes before the verb.",
              "pl": "Não stoi przed czasownikiem."
            },
            {
              "en": "Não triggers proclisis: não me digas.",
              "pl": "Não wywołuje proklizę: não me digas."
            },
            {
              "en": "Yes/no questions often keep normal word order.",
              "pl": "Pytania tak/nie często zachowują zwykły szyk."
            },
            {
              "en": "Porque answers why; porquê is the noun-like 'the reason why' or final question form.",
              "pl": "Porque odpowiada na dlaczego; porquê to rzeczownikowe 'powód' albo końcowa forma pytania."
            }
          ],
          "examples": [
            {
              "id": "negation-questions-001",
              "pt": "Não percebo esta palavra.",
              "en": "I don't understand this word.",
              "pl": "Nie rozumiem tego słowa."
            },
            {
              "id": "negation-questions-002",
              "pt": "Não te posso ajudar agora.",
              "en": "I can't help you now.",
              "pl": "Nie mogę ci teraz pomóc."
            },
            {
              "id": "negation-questions-003",
              "pt": "Tu falas inglês?",
              "en": "Do you speak English?",
              "pl": "Czy mówisz po angielsku?"
            },
            {
              "id": "negation-questions-004",
              "pt": "Onde fica a casa de banho?",
              "en": "Where is the bathroom?",
              "pl": "Gdzie jest łazienka?"
            },
            {
              "id": "negation-questions-005",
              "pt": "Porque estás cansada?",
              "en": "Why are you tired?",
              "pl": "Dlaczego jesteś zmęczona?"
            },
            {
              "id": "negation-questions-006",
              "pt": "Quanto custa este bilhete?",
              "en": "How much does this ticket cost?",
              "pl": "Ile kosztuje ten bilet?"
            }
          ],
          "table": {
            "caption": {
              "en": "Question words",
              "pl": "Słowa pytające"
            },
            "headers": [
              {
                "en": "Portuguese",
                "pl": "Portugalski"
              },
              {
                "en": "English",
                "pl": "Angielski"
              },
              {
                "en": "Polish",
                "pl": "Polski"
              }
            ],
            "rows": [
              [
                "quem",
                "who",
                "kto"
              ],
              [
                "o que",
                "what",
                "co"
              ],
              [
                "onde",
                "where",
                "gdzie"
              ],
              [
                "quando",
                "when",
                "kiedy"
              ],
              [
                "como",
                "how",
                "jak"
              ],
              [
                "porque",
                "why/because",
                "dlaczego/bo"
              ],
              [
                "quanto",
                "how much/many",
                "ile"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-negation-questions-1",
          "type": "choice",
          "prompt": {
            "en": "Where does não go?",
            "pl": "Gdzie stoi não?"
          },
          "choices": [
            {
              "id": "a",
              "label": "before the verb",
              "correct": true
            },
            {
              "id": "b",
              "label": "after the verb",
              "correct": false
            },
            {
              "id": "c",
              "label": "only at the end",
              "correct": false
            }
          ],
          "explain": {
            "en": "Portuguese negation places não before the verb.",
            "pl": "Portugalskie przeczenie stawia não przed czasownikiem."
          }
        },
        {
          "id": "q-negation-questions-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Não ___ conheço.",
            "pl": "Uzupełnij: Não ___ conheço."
          },
          "answer": "te",
          "accept": [
            "te",
            "Te"
          ],
          "explain": {
            "en": "Não triggers proclisis with te.",
            "pl": "Não wywołuje proklizę z te."
          }
        },
        {
          "id": "q-negation-questions-3",
          "type": "choice",
          "prompt": {
            "en": "Which asks 'where'?",
            "pl": "Które pyta 'gdzie'?"
          },
          "choices": [
            {
              "id": "a",
              "label": "onde",
              "correct": true
            },
            {
              "id": "b",
              "label": "quando",
              "correct": false
            },
            {
              "id": "c",
              "label": "quem",
              "correct": false
            }
          ],
          "explain": {
            "en": "Onde means where.",
            "pl": "Onde znaczy gdzie."
          }
        },
        {
          "id": "q-negation-questions-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: ___ custa este bilhete?",
            "pl": "Uzupełnij: ___ custa este bilhete?"
          },
          "answer": "Quanto",
          "accept": [
            "Quanto",
            "quanto"
          ],
          "explain": {
            "en": "Quanto custa? means How much does it cost?",
            "pl": "Quanto custa? znaczy Ile kosztuje?"
          }
        }
      ]
    },
    {
      "id": "relatives-conjunctions",
      "icon": "🧵",
      "order": 25,
      "title": {
        "en": "Relatives and conjunctions",
        "pl": "Zaimki względne i spójniki"
      },
      "summary": {
        "en": "Connect clauses with que, quem, onde, cujo, porque, embora, se, quando, and other linking words.",
        "pl": "Łącz zdania za pomocą que, quem, onde, cujo, porque, embora, se, quando i innych łączników."
      },
      "polishTip": {
        "en": "Polish relative pronouns change for case and gender; Portuguese relative que is very frequent and often does not change.",
        "pl": "Polskie zaimki względne odmieniają się przez przypadek i rodzaj; portugalskie que jest bardzo częste i zwykle się nie zmienia."
      },
      "sections": [
        {
          "id": "linking-clauses",
          "title": {
            "en": "Relative pronouns and common connectors",
            "pl": "Zaimki względne i częste łączniki"
          },
          "body": {
            "en": "Que is the most common relative pronoun and can refer to people or things: o livro que comprei, a amiga que chegou. Quem refers to people, often after a preposition: a pessoa com quem falei. Onde refers to places.\n\nConjunctions link ideas. Porque gives a reason, mas contrasts, e adds, ou offers alternatives, se introduces conditions, quando introduces time, and embora introduces concession and usually takes the subjunctive.",
            "pl": "Que to najczęstszy zaimek względny i może odnosić się do osób lub rzeczy: o livro que comprei, a amiga que chegou. Quem odnosi się do osób, często po przyimku: a pessoa com quem falei. Onde odnosi się do miejsc.\n\nSpójniki łączą myśli. Porque podaje powód, mas kontrastuje, e dodaje, ou daje alternatywy, se wprowadza warunki, quando czas, a embora wprowadza ustępstwo i zwykle wymaga subjunctive."
          },
          "rules": [
            {
              "en": "Que is the default relative pronoun.",
              "pl": "Que to domyślny zaimek względny."
            },
            {
              "en": "Quem is for people, especially after prepositions.",
              "pl": "Quem jest dla osób, zwłaszcza po przyimkach."
            },
            {
              "en": "Onde is for places.",
              "pl": "Onde jest dla miejsc."
            },
            {
              "en": "Embora normally triggers the subjunctive.",
              "pl": "Embora zwykle wywołuje subjunctive."
            }
          ],
          "examples": [
            {
              "id": "relatives-conjunctions-001",
              "pt": "Este é o livro que comprei ontem.",
              "en": "This is the book that I bought yesterday.",
              "pl": "To jest książka, którą kupiłam wczoraj."
            },
            {
              "id": "relatives-conjunctions-002",
              "pt": "A pessoa com quem falei é muito simpática.",
              "en": "The person I spoke with is very nice.",
              "pl": "Osoba, z którą rozmawiałam, jest bardzo sympatyczna."
            },
            {
              "id": "relatives-conjunctions-003",
              "pt": "Lisboa é a cidade onde vivo.",
              "en": "Lisbon is the city where I live.",
              "pl": "Lizbona to miasto, w którym mieszkam."
            },
            {
              "id": "relatives-conjunctions-004",
              "pt": "Fico em casa porque está a chover.",
              "en": "I am staying at home because it is raining.",
              "pl": "Zostaję w domu, bo pada."
            },
            {
              "id": "relatives-conjunctions-005",
              "pt": "Embora esteja cansada, vou estudar.",
              "en": "Although I am tired, I am going to study.",
              "pl": "Chociaż jestem zmęczona, będę się uczyć."
            },
            {
              "id": "relatives-conjunctions-006",
              "pt": "Se tiveres tempo, liga-me.",
              "en": "If you have time, call me.",
              "pl": "Jeśli będziesz mieć czas, zadzwoń do mnie."
            }
          ],
          "table": {
            "caption": {
              "en": "Useful connectors",
              "pl": "Przydatne łączniki"
            },
            "headers": [
              {
                "en": "Word",
                "pl": "Słowo"
              },
              {
                "en": "Meaning",
                "pl": "Znaczenie"
              },
              {
                "en": "Grammar note",
                "pl": "Uwaga gramatyczna"
              }
            ],
            "rows": [
              [
                "que",
                "that/which/who",
                "default relative"
              ],
              [
                "quem",
                "who/whom",
                "people, often after preposition"
              ],
              [
                "onde",
                "where",
                "places"
              ],
              [
                "porque",
                "because/why",
                "reason"
              ],
              [
                "embora",
                "although",
                "often subjunctive"
              ],
              [
                "se",
                "if",
                "future subjunctive for future conditions"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-relatives-conjunctions-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: o livro ___ comprei",
            "pl": "Uzupełnij: o livro ___ comprei"
          },
          "choices": [
            {
              "id": "a",
              "label": "que",
              "correct": true
            },
            {
              "id": "b",
              "label": "quem",
              "correct": false
            },
            {
              "id": "c",
              "label": "onde",
              "correct": false
            }
          ],
          "explain": {
            "en": "Que is the default relative for things.",
            "pl": "Que to domyślny zaimek względny dla rzeczy."
          }
        },
        {
          "id": "q-relatives-conjunctions-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: a pessoa com ___ falei",
            "pl": "Uzupełnij: a pessoa com ___ falei"
          },
          "answer": "quem",
          "accept": [
            "quem",
            "Quem"
          ],
          "explain": {
            "en": "Quem refers to people after prepositions.",
            "pl": "Quem odnosi się do osób po przyimkach."
          }
        },
        {
          "id": "q-relatives-conjunctions-3",
          "type": "choice",
          "prompt": {
            "en": "Which conjunction often triggers subjunctive?",
            "pl": "Który spójnik często wywołuje subjunctive?"
          },
          "choices": [
            {
              "id": "a",
              "label": "embora",
              "correct": true
            },
            {
              "id": "b",
              "label": "e",
              "correct": false
            },
            {
              "id": "c",
              "label": "mas",
              "correct": false
            }
          ],
          "explain": {
            "en": "Embora normally takes the subjunctive.",
            "pl": "Embora zwykle wymaga subjunctive."
          }
        },
        {
          "id": "q-relatives-conjunctions-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: Lisboa é a cidade ___ vivo.",
            "pl": "Uzupełnij: Lisboa é a cidade ___ vivo."
          },
          "answer": "onde",
          "accept": [
            "onde",
            "Onde"
          ],
          "explain": {
            "en": "Onde refers to a place.",
            "pl": "Onde odnosi się do miejsca."
          }
        }
      ]
    },
    {
      "id": "numbers-time",
      "icon": "⏰",
      "order": 26,
      "title": {
        "en": "Numbers, dates, and time",
        "pl": "Liczby, daty i godzina"
      },
      "summary": {
        "en": "Numbers agree where needed, and time expressions use ser with articles and contractions such as à and às.",
        "pl": "Liczby zgadzają się tam, gdzie trzeba, a wyrażenia czasu używają ser z rodzajnikami i połączeniami à oraz às."
      },
      "polishTip": {
        "en": "Polish has complex numeral-case patterns; Portuguese numbers are simpler, but um/uma and dois/duas agree in gender.",
        "pl": "Polski ma złożone wzorce liczebników i przypadków; portugalskie liczby są prostsze, ale um/uma i dois/duas zgadzają się w rodzaju."
      },
      "sections": [
        {
          "id": "number-time-basics",
          "title": {
            "en": "Counting and telling the time",
            "pl": "Liczenie i podawanie godziny"
          },
          "body": {
            "en": "Um/uma and dois/duas agree with the noun: um livro, uma casa, dois cafés, duas malas. Hundreds from 200 also agree: duzentos euros, duzentas páginas.\n\nTime uses ser: é uma hora, são duas horas. Use à uma and às duas for 'at one' and 'at two'. Dates are often expressed as dia + number or with the definite article: hoje é dia vinte de julho.",
            "pl": "Um/uma i dois/duas zgadzają się z rzeczownikiem: um livro, uma casa, dois cafés, duas malas. Setki od 200 też się zgadzają: duzentos euros, duzentas páginas.\n\nGodzina używa ser: é uma hora, são duas horas. Używaj à uma i às duas dla 'o pierwszej' i 'o drugiej'. Daty często wyraża się jako dia + liczba albo z rodzajnikiem określonym: hoje é dia vinte de julho."
          },
          "rules": [
            {
              "en": "Um/uma and dois/duas agree with gender.",
              "pl": "Um/uma i dois/duas zgadzają się z rodzajem."
            },
            {
              "en": "Use ser for time: é uma, são três.",
              "pl": "Używaj ser dla godziny: é uma, são três."
            },
            {
              "en": "At a time: à uma, às duas, ao meio-dia.",
              "pl": "O godzinie: à uma, às duas, ao meio-dia."
            },
            {
              "en": "Dates use de between day, month, and year.",
              "pl": "Daty używają de między dniem, miesiącem i rokiem."
            }
          ],
          "examples": [
            {
              "id": "numbers-time-001",
              "pt": "Tenho duas malas e um bilhete.",
              "en": "I have two bags and one ticket.",
              "pl": "Mam dwie torby i jeden bilet."
            },
            {
              "id": "numbers-time-002",
              "pt": "São três horas e quinze.",
              "en": "It is three fifteen.",
              "pl": "Jest trzecia piętnaście."
            },
            {
              "id": "numbers-time-003",
              "pt": "Chego às oito e meia.",
              "en": "I arrive at half past eight.",
              "pl": "Przyjeżdżam o wpół do dziewiątej."
            },
            {
              "id": "numbers-time-004",
              "pt": "O pequeno-almoço é às nove.",
              "en": "Breakfast is at nine.",
              "pl": "Śniadanie jest o dziewiątej."
            },
            {
              "id": "numbers-time-005",
              "pt": "Hoje é dia vinte de julho.",
              "en": "Today is the twentieth of July.",
              "pl": "Dziś jest dwudziesty lipca."
            },
            {
              "id": "numbers-time-006",
              "pt": "A reunião começa ao meio-dia.",
              "en": "The meeting starts at noon.",
              "pl": "Spotkanie zaczyna się w południe."
            }
          ],
          "table": {
            "caption": {
              "en": "Time expressions",
              "pl": "Wyrażenia czasu"
            },
            "headers": [
              {
                "en": "Portuguese",
                "pl": "Portugalski"
              },
              {
                "en": "English",
                "pl": "Angielski"
              },
              {
                "en": "Polish",
                "pl": "Polski"
              }
            ],
            "rows": [
              [
                "é uma hora",
                "it is one o'clock",
                "jest pierwsza"
              ],
              [
                "são duas horas",
                "it is two o'clock",
                "jest druga"
              ],
              [
                "às oito",
                "at eight",
                "o ósmej"
              ],
              [
                "ao meio-dia",
                "at noon",
                "w południe"
              ],
              [
                "à meia-noite",
                "at midnight",
                "o północy"
              ],
              [
                "oito e meia",
                "half past eight",
                "wpół do dziewiątej"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-numbers-time-1",
          "type": "choice",
          "prompt": {
            "en": "Complete: ___ duas horas.",
            "pl": "Uzupełnij: ___ duas horas."
          },
          "choices": [
            {
              "id": "a",
              "label": "São",
              "correct": true
            },
            {
              "id": "b",
              "label": "É",
              "correct": false
            },
            {
              "id": "c",
              "label": "Está",
              "correct": false
            }
          ],
          "explain": {
            "en": "Plural hours use são.",
            "pl": "Liczba mnoga godzin używa são."
          }
        },
        {
          "id": "q-numbers-time-2",
          "type": "fill",
          "prompt": {
            "en": "Complete: Tenho ___ malas.",
            "pl": "Uzupełnij: Tenho ___ malas."
          },
          "answer": "duas",
          "accept": [
            "duas",
            "Duas"
          ],
          "explain": {
            "en": "Malas is feminine plural, so duas.",
            "pl": "Malas jest żeńskie w liczbie mnogiej, więc duas."
          }
        },
        {
          "id": "q-numbers-time-3",
          "type": "choice",
          "prompt": {
            "en": "How do you say 'at eight'?",
            "pl": "Jak powiedzieć 'o ósmej'?"
          },
          "choices": [
            {
              "id": "a",
              "label": "às oito",
              "correct": true
            },
            {
              "id": "b",
              "label": "as oito",
              "correct": false
            },
            {
              "id": "c",
              "label": "em oito",
              "correct": false
            }
          ],
          "explain": {
            "en": "At a time uses a + as = às.",
            "pl": "Godzina używa a + as = às."
          }
        },
        {
          "id": "q-numbers-time-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: A reunião começa ao ___.",
            "pl": "Uzupełnij: A reunião começa ao ___."
          },
          "answer": "meio-dia",
          "accept": [
            "meio-dia",
            "Meio-dia"
          ],
          "explain": {
            "en": "Ao meio-dia means at noon.",
            "pl": "Ao meio-dia znaczy w południe."
          }
        }
      ]
    },
    {
      "id": "formal-informal",
      "icon": "🤝",
      "order": 27,
      "title": {
        "en": "Formal and informal address",
        "pl": "Zwracanie się formalne i nieformalne"
      },
      "summary": {
        "en": "Choosing between tu, você, o senhor, a senhora, names, and titles is central to polite European Portuguese.",
        "pl": "Wybór między tu, você, o senhor, a senhora, imionami i tytułami jest kluczowy dla uprzejmego portugalskiego europejskiego."
      },
      "polishTip": {
        "en": "This is close to Polish ty versus pan/pani, but Portuguese often uses titles or the person's name instead of a direct pronoun.",
        "pl": "To przypomina polskie ty kontra pan/pani, ale portugalski często używa tytułów lub imienia zamiast bezpośredniego zaimka."
      },
      "sections": [
        {
          "id": "treatment-pronouns",
          "title": {
            "en": "Tu, você, o senhor/a senhora, and titles",
            "pl": "Tu, você, o senhor/a senhora i tytuły"
          },
          "body": {
            "en": "Tu is normal with friends, family, classmates, children, and many younger people. It takes second-person singular verbs: tu queres, tu vais.\n\nVocê takes third-person verbs, but in Portugal it is socially delicate: it can be neutral in some regions or relationships, but distant or impolite in others. Safer formal options are o senhor, a senhora, a doutora, o professor, or the person's name with third-person verbs: A Joanna quer café?",
            "pl": "Tu jest normalne z przyjaciółmi, rodziną, kolegami, dziećmi i wieloma młodszymi osobami. Łączy się z czasownikiem w 2. osobie liczby pojedynczej: tu queres, tu vais.\n\nVocê używa 3. osoby, ale w Portugalii jest społecznie delikatne: w niektórych regionach lub relacjach może być neutralne, a w innych zdystansowane lub nieuprzejme. Bezpieczniejsze formalne opcje to o senhor, a senhora, a doutora, o professor albo imię z czasownikiem w 3. osobie: A Joanna quer café?"
          },
          "rules": [
            {
              "en": "Tu = informal singular you, with tu verb forms.",
              "pl": "Tu = nieformalne ty, z formami czasownika dla tu."
            },
            {
              "en": "Vocês = plural you, with third-person plural verbs.",
              "pl": "Vocês = wy, z czasownikiem w 3. osobie liczby mnogiej."
            },
            {
              "en": "O senhor/a senhora = polite formal singular you.",
              "pl": "O senhor/a senhora = uprzejme pan/pani."
            },
            {
              "en": "Using a name with third-person verbs is common and polite.",
              "pl": "Użycie imienia z czasownikiem w 3. osobie jest częste i uprzejme."
            }
          ],
          "examples": [
            {
              "id": "formal-informal-001",
              "pt": "Tu queres ir ao cinema?",
              "en": "Do you want to go to the cinema?",
              "pl": "Chcesz iść do kina?"
            },
            {
              "id": "formal-informal-002",
              "pt": "A senhora quer sentar-se aqui?",
              "en": "Would you like to sit here, madam?",
              "pl": "Czy pani chce tu usiąść?"
            },
            {
              "id": "formal-informal-003",
              "pt": "O senhor já foi atendido?",
              "en": "Have you already been helped, sir?",
              "pl": "Czy pan został już obsłużony?"
            },
            {
              "id": "formal-informal-004",
              "pt": "A Joanna prefere chá ou café?",
              "en": "Does Joanna prefer tea or coffee?",
              "pl": "Czy Joanna woli herbatę czy kawę?"
            },
            {
              "id": "formal-informal-005",
              "pt": "Vocês vêm jantar connosco?",
              "en": "Are you coming to dinner with us?",
              "pl": "Przychodzicie do nas na kolację?"
            },
            {
              "id": "formal-informal-006",
              "pt": "Doutora, pode assinar aqui?",
              "en": "Doctor, can you sign here?",
              "pl": "Pani doktor, może pani tu podpisać?"
            }
          ],
          "table": {
            "caption": {
              "en": "Address choices in Portugal",
              "pl": "Formy zwracania się w Portugalii"
            },
            "headers": [
              {
                "en": "Form",
                "pl": "Forma"
              },
              {
                "en": "Verb",
                "pl": "Czasownik"
              },
              {
                "en": "Tone",
                "pl": "Ton"
              }
            ],
            "rows": [
              [
                "tu",
                "2nd singular",
                "informal, close"
              ],
              [
                "você",
                "3rd singular",
                "variable; can sound distant"
              ],
              [
                "o senhor/a senhora",
                "3rd singular",
                "polite formal"
              ],
              [
                "title/name",
                "3rd singular",
                "polite and common"
              ],
              [
                "vocês",
                "3rd plural",
                "plural you"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-formal-informal-1",
          "type": "choice",
          "prompt": {
            "en": "Which is informal singular in Portugal?",
            "pl": "Które jest nieformalną liczbą pojedynczą w Portugalii?"
          },
          "choices": [
            {
              "id": "a",
              "label": "tu queres",
              "correct": true
            },
            {
              "id": "b",
              "label": "o senhor quer",
              "correct": false
            },
            {
              "id": "c",
              "label": "a senhora quer",
              "correct": false
            }
          ],
          "explain": {
            "en": "Tu is informal and uses second-person verbs.",
            "pl": "Tu jest nieformalne i używa 2. osoby."
          }
        },
        {
          "id": "q-formal-informal-2",
          "type": "fill",
          "prompt": {
            "en": "Complete formally: ___ quer um café?",
            "pl": "Uzupełnij formalnie: ___ quer um café?"
          },
          "answer": "A senhora",
          "accept": [
            "A senhora",
            "a senhora",
            "O senhor",
            "o senhor"
          ],
          "explain": {
            "en": "O senhor/a senhora are polite formal choices.",
            "pl": "O senhor/a senhora to uprzejme formy formalne."
          }
        },
        {
          "id": "q-formal-informal-3",
          "type": "choice",
          "prompt": {
            "en": "In Portugal, você is best described as...",
            "pl": "W Portugalii você najlepiej opisać jako..."
          },
          "choices": [
            {
              "id": "a",
              "label": "context-dependent and sometimes distant",
              "correct": true
            },
            {
              "id": "b",
              "label": "always the warmest form",
              "correct": false
            },
            {
              "id": "c",
              "label": "a plural pronoun",
              "correct": false
            }
          ],
          "explain": {
            "en": "Você is socially delicate in Portugal.",
            "pl": "Você jest w Portugalii społecznie delikatne."
          }
        },
        {
          "id": "q-formal-informal-4",
          "type": "fill",
          "prompt": {
            "en": "Complete: Vocês ___ jantar connosco?",
            "pl": "Uzupełnij: Vocês ___ jantar connosco?"
          },
          "answer": "vêm",
          "accept": [
            "vêm",
            "Vêm",
            "vem",
            "Vem"
          ],
          "explain": {
            "en": "Vocês uses the third-person plural; vêm is the standard form.",
            "pl": "Vocês używa 3. osoby liczby mnogiej; vêm to forma standardowa."
          }
        }
      ]
    },
    {
      "id": "ep-vs-br",
      "icon": "🇵🇹",
      "order": 28,
      "title": {
        "en": "European Portuguese versus Brazilian Portuguese",
        "pl": "Portugalski europejski a brazylijski"
      },
      "summary": {
        "en": "Learn the grammar, pronunciation, and vocabulary choices that make Portuguese from Portugal distinct.",
        "pl": "Poznaj gramatykę, wymowę i słownictwo, które odróżniają portugalski z Portugalii."
      },
      "polishTip": {
        "en": "For Joanna, it is useful to treat Portugal Portuguese as the target norm from the start, just as Polish learners distinguish British and American English when needed.",
        "pl": "Dla Joanny warto od początku traktować portugalski z Portugalii jako normę docelową, tak jak uczący się polskiego rozróżniają brytyjski i amerykański angielski, gdy trzeba."
      },
      "sections": [
        {
          "id": "key-differences",
          "title": {
            "en": "Practical differences to prioritise",
            "pl": "Praktyczne różnice, które warto znać"
          },
          "body": {
            "en": "European Portuguese differs from Brazilian Portuguese in pronunciation, clitic placement, progressive constructions, address forms, and vocabulary. Portugal Portuguese reduces unstressed vowels more, uses enclisis much more, and commonly says estar a + infinitive instead of estar + gerund.\n\nVocabulary also differs: comboio, autocarro, telemóvel, pequeno-almoço, casa de banho, and frigorífico are Portugal forms. In careful EP, use há for existence rather than tem. Você is not the default friendly 'you' in Portugal; tu is common in informal relationships.",
            "pl": "Portugalski europejski różni się od brazylijskiego wymową, pozycją klitików, konstrukcjami trwającymi, formami zwracania się i słownictwem. Portugalski z Portugalii bardziej redukuje samogłoski nieakcentowane, znacznie częściej używa enklizy i zwykle mówi estar a + bezokolicznik zamiast estar + gerundium.\n\nSłownictwo też się różni: comboio, autocarro, telemóvel, pequeno-almoço, casa de banho i frigorífico to formy portugalskie. W starannym EP używaj há dla istnienia zamiast tem. Você nie jest domyślnym przyjacielskim 'ty' w Portugalii; tu jest częste w relacjach nieformalnych."
          },
          "rules": [
            {
              "en": "EP: estou a estudar; BR often: estou estudando.",
              "pl": "EP: estou a estudar; BR często: estou estudando."
            },
            {
              "en": "EP affirmative: diz-me; BR often: me diz.",
              "pl": "EP twierdzące: diz-me; BR często: me diz."
            },
            {
              "en": "EP careful existence: há uma loja; avoid tem uma loja as a learner of Portugal Portuguese.",
              "pl": "Staranne EP dla istnienia: há uma loja; jako ucząca się PT-PT unikaj tem uma loja."
            },
            {
              "en": "EP vocabulary: comboio, autocarro, telemóvel, pequeno-almoço, casa de banho.",
              "pl": "Słownictwo EP: comboio, autocarro, telemóvel, pequeno-almoço, casa de banho."
            },
            {
              "en": "Tu is common in Portugal; você needs social care.",
              "pl": "Tu jest częste w Portugalii; você wymaga ostrożności społecznej."
            }
          ],
          "examples": [
            {
              "id": "ep-vs-br-001",
              "pt": "Estou a estudar português.",
              "en": "I am studying Portuguese.",
              "pl": "Uczę się portugalskiego."
            },
            {
              "id": "ep-vs-br-002",
              "pt": "Diz-me quando chegares.",
              "en": "Tell me when you arrive.",
              "pl": "Powiedz mi, kiedy przyjedziesz."
            },
            {
              "id": "ep-vs-br-003",
              "pt": "Vou apanhar o comboio para Coimbra.",
              "en": "I am going to catch the train to Coimbra.",
              "pl": "Złapię pociąg do Coimbry."
            },
            {
              "id": "ep-vs-br-004",
              "pt": "O autocarro passa daqui a dez minutos.",
              "en": "The bus passes in ten minutes.",
              "pl": "Autobus przyjedzie za dziesięć minut."
            },
            {
              "id": "ep-vs-br-005",
              "pt": "O meu telemóvel está sem bateria.",
              "en": "My mobile phone has no battery.",
              "pl": "Mój telefon komórkowy jest rozładowany."
            },
            {
              "id": "ep-vs-br-006",
              "pt": "Há uma casa de banho no rés-do-chão.",
              "en": "There is a bathroom on the ground floor.",
              "pl": "Na parterze jest łazienka."
            },
            {
              "id": "ep-vs-br-007",
              "pt": "Tomámos o pequeno-almoço às oito.",
              "en": "We had breakfast at eight.",
              "pl": "Zjedliśmy śniadanie o ósmej."
            },
            {
              "id": "ep-vs-br-008",
              "pt": "Tu vens connosco?",
              "en": "Are you coming with us?",
              "pl": "Idziesz z nami?"
            }
          ],
          "table": {
            "caption": {
              "en": "Portugal forms to prefer",
              "pl": "Formy portugalskie, które warto wybierać"
            },
            "headers": [
              {
                "en": "European Portuguese",
                "pl": "Portugalski europejski"
              },
              {
                "en": "Often Brazilian",
                "pl": "Często brazylijski"
              },
              {
                "en": "Meaning",
                "pl": "Znaczenie"
              }
            ],
            "rows": [
              [
                "comboio",
                "trem",
                "train"
              ],
              [
                "autocarro",
                "ônibus",
                "bus"
              ],
              [
                "telemóvel",
                "celular",
                "mobile phone"
              ],
              [
                "pequeno-almoço",
                "café da manhã",
                "breakfast"
              ],
              [
                "casa de banho",
                "banheiro",
                "bathroom"
              ],
              [
                "estou a estudar",
                "estou estudando",
                "I am studying"
              ],
              [
                "diz-me",
                "me diz",
                "tell me"
              ],
              [
                "há uma loja",
                "tem uma loja",
                "there is a shop"
              ]
            ]
          }
        }
      ],
      "quiz": [
        {
          "id": "q-ep-vs-br-1",
          "type": "choice",
          "prompt": {
            "en": "Which is European Portuguese for 'train'?",
            "pl": "Które słowo z Portugalii znaczy 'pociąg'?"
          },
          "choices": [
            {
              "id": "a",
              "label": "comboio",
              "correct": true
            },
            {
              "id": "b",
              "label": "trem",
              "correct": false
            },
            {
              "id": "c",
              "label": "ônibus",
              "correct": false
            }
          ],
          "explain": {
            "en": "Comboio is the Portugal word.",
            "pl": "Comboio to słowo używane w Portugalii."
          }
        },
        {
          "id": "q-ep-vs-br-2",
          "type": "fill",
          "prompt": {
            "en": "Complete in EP: Estou ___ estudar.",
            "pl": "Uzupełnij po portugalsku europejsku: Estou ___ estudar."
          },
          "answer": "a",
          "accept": [
            "a",
            "A"
          ],
          "explain": {
            "en": "EP normally uses estar a + infinitive.",
            "pl": "EP zwykle używa estar a + bezokolicznik."
          }
        },
        {
          "id": "q-ep-vs-br-3",
          "type": "choice",
          "prompt": {
            "en": "Which is natural affirmative EP?",
            "pl": "Które jest naturalnym twierdzącym EP?"
          },
          "choices": [
            {
              "id": "a",
              "label": "Diz-me.",
              "correct": true
            },
            {
              "id": "b",
              "label": "Me diz.",
              "correct": false
            }
          ],
          "explain": {
            "en": "European Portuguese normally uses enclisis here.",
            "pl": "Portugalski europejski zwykle używa tu enklizy."
          }
        },
        {
          "id": "q-ep-vs-br-4",
          "type": "fill",
          "prompt": {
            "en": "Complete carefully in EP: ___ uma casa de banho aqui.",
            "pl": "Uzupełnij starannie w EP: ___ uma casa de banho aqui."
          },
          "answer": "Há",
          "accept": [
            "Há",
            "há"
          ],
          "explain": {
            "en": "Use há for existence in careful EP.",
            "pl": "Używaj há dla istnienia w starannym EP."
          }
        }
      ]
    }
  ]
};
