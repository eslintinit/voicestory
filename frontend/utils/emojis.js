const emojisJson = `[{
  "slug": "grinning-face",
  "character": "\ud83d\ude00",
  "unicodeName": "grinning face",
  "codePoint": "1F600",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "grinning-face-with-big-eyes",
  "character": "\ud83d\ude03",
  "unicodeName": "grinning face with big eyes",
  "codePoint": "1F603",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "grinning-face-with-smiling-eyes",
  "character": "\ud83d\ude04",
  "unicodeName": "grinning face with smiling eyes",
  "codePoint": "1F604",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "beaming-face-with-smiling-eyes",
  "character": "\ud83d\ude01",
  "unicodeName": "beaming face with smiling eyes",
  "codePoint": "1F601",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "grinning-squinting-face",
  "character": "\ud83d\ude06",
  "unicodeName": "grinning squinting face",
  "codePoint": "1F606",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "grinning-face-with-sweat",
  "character": "\ud83d\ude05",
  "unicodeName": "grinning face with sweat",
  "codePoint": "1F605",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "rolling-on-the-floor-laughing",
  "character": "\ud83e\udd23",
  "unicodeName": "rolling on the floor laughing",
  "codePoint": "1F923",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "face-with-tears-of-joy",
  "character": "\ud83d\ude02",
  "unicodeName": "face with tears of joy",
  "codePoint": "1F602",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "slightly-smiling-face",
  "character": "\ud83d\ude42",
  "unicodeName": "slightly smiling face",
  "codePoint": "1F642",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "upside-down-face",
  "character": "\ud83d\ude43",
  "unicodeName": "upside-down face",
  "codePoint": "1F643",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "winking-face",
  "character": "\ud83d\ude09",
  "unicodeName": "winking face",
  "codePoint": "1F609",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "smiling-face-with-smiling-eyes",
  "character": "\ud83d\ude0a",
  "unicodeName": "smiling face with smiling eyes",
  "codePoint": "1F60A",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "smiling-face-with-halo",
  "character": "\ud83d\ude07",
  "unicodeName": "smiling face with halo",
  "codePoint": "1F607",
  "group": "smileys-emotion",
  "subGroup": "face-smiling"
}, {
  "slug": "smiling-face-with-hearts",
  "character": "\ud83e\udd70",
  "unicodeName": "smiling face with hearts",
  "codePoint": "1F970",
  "group": "smileys-emotion",
  "subGroup": "face-affection"
}, {
  "slug": "smiling-face-with-heart-eyes",
  "character": "\ud83d\ude0d",
  "unicodeName": "smiling face with heart-eyes",
  "codePoint": "1F60D",
  "group": "smileys-emotion",
  "subGroup": "face-affection"
}, {
  "slug": "star-struck",
  "character": "\ud83e\udd29",
  "unicodeName": "star-struck",
  "codePoint": "1F929",
  "group": "smileys-emotion",
  "subGroup": "face-affection"
}, {
  "slug": "face-blowing-a-kiss",
  "character": "\ud83d\ude18",
  "unicodeName": "face blowing a kiss",
  "codePoint": "1F618",
  "group": "smileys-emotion",
  "subGroup": "face-affection"
}, {
  "slug": "kissing-face",
  "character": "\ud83d\ude17",
  "unicodeName": "kissing face",
  "codePoint": "1F617",
  "group": "smileys-emotion",
  "subGroup": "face-affection"
}, {
  "slug": "smiling-face",
  "character": "\u263a\ufe0f",
  "unicodeName": "smiling face",
  "codePoint": "263A FE0F",
  "group": "smileys-emotion",
  "subGroup": "face-affection"
}, {
  "slug": "kissing-face-with-closed-eyes",
  "character": "\ud83d\ude1a",
  "unicodeName": "kissing face with closed eyes",
  "codePoint": "1F61A",
  "group": "smileys-emotion",
  "subGroup": "face-affection"
}, {
  "slug": "kissing-face-with-smiling-eyes",
  "character": "\ud83d\ude19",
  "unicodeName": "kissing face with smiling eyes",
  "codePoint": "1F619",
  "group": "smileys-emotion",
  "subGroup": "face-affection"
}, {
  "slug": "face-savoring-food",
  "character": "\ud83d\ude0b",
  "unicodeName": "face savoring food",
  "codePoint": "1F60B",
  "group": "smileys-emotion",
  "subGroup": "face-tongue"
}, {
  "slug": "face-with-tongue",
  "character": "\ud83d\ude1b",
  "unicodeName": "face with tongue",
  "codePoint": "1F61B",
  "group": "smileys-emotion",
  "subGroup": "face-tongue"
}, {
  "slug": "winking-face-with-tongue",
  "character": "\ud83d\ude1c",
  "unicodeName": "winking face with tongue",
  "codePoint": "1F61C",
  "group": "smileys-emotion",
  "subGroup": "face-tongue"
}, {
  "slug": "zany-face",
  "character": "\ud83e\udd2a",
  "unicodeName": "zany face",
  "codePoint": "1F92A",
  "group": "smileys-emotion",
  "subGroup": "face-tongue"
}, {
  "slug": "squinting-face-with-tongue",
  "character": "\ud83d\ude1d",
  "unicodeName": "squinting face with tongue",
  "codePoint": "1F61D",
  "group": "smileys-emotion",
  "subGroup": "face-tongue"
}, {
  "slug": "money-mouth-face",
  "character": "\ud83e\udd11",
  "unicodeName": "money-mouth face",
  "codePoint": "1F911",
  "group": "smileys-emotion",
  "subGroup": "face-tongue"
}, {
  "slug": "hugging-face",
  "character": "\ud83e\udd17",
  "unicodeName": "hugging face",
  "codePoint": "1F917",
  "group": "smileys-emotion",
  "subGroup": "face-hand"
}, {
  "slug": "face-with-hand-over-mouth",
  "character": "\ud83e\udd2d",
  "unicodeName": "face with hand over mouth",
  "codePoint": "1F92D",
  "group": "smileys-emotion",
  "subGroup": "face-hand"
}, {
  "slug": "shushing-face",
  "character": "\ud83e\udd2b",
  "unicodeName": "shushing face",
  "codePoint": "1F92B",
  "group": "smileys-emotion",
  "subGroup": "face-hand"
}, {
  "slug": "thinking-face",
  "character": "\ud83e\udd14",
  "unicodeName": "thinking face",
  "codePoint": "1F914",
  "group": "smileys-emotion",
  "subGroup": "face-hand"
}, {
  "slug": "zipper-mouth-face",
  "character": "\ud83e\udd10",
  "unicodeName": "zipper-mouth face",
  "codePoint": "1F910",
  "group": "smileys-emotion",
  "subGroup": "face-neutral-skeptical"
}, {
  "slug": "face-with-raised-eyebrow",
  "character": "\ud83e\udd28",
  "unicodeName": "face with raised eyebrow",
  "codePoint": "1F928",
  "group": "smileys-emotion",
  "subGroup": "face-neutral-skeptical"
}, {
  "slug": "neutral-face",
  "character": "\ud83d\ude10",
  "unicodeName": "neutral face",
  "codePoint": "1F610",
  "group": "smileys-emotion",
  "subGroup": "face-neutral-skeptical"
}, {
  "slug": "expressionless-face",
  "character": "\ud83d\ude11",
  "unicodeName": "expressionless face",
  "codePoint": "1F611",
  "group": "smileys-emotion",
  "subGroup": "face-neutral-skeptical"
}, {
  "slug": "face-without-mouth",
  "character": "\ud83d\ude36",
  "unicodeName": "face without mouth",
  "codePoint": "1F636",
  "group": "smileys-emotion",
  "subGroup": "face-neutral-skeptical"
}, {
  "slug": "smirking-face",
  "character": "\ud83d\ude0f",
  "unicodeName": "smirking face",
  "codePoint": "1F60F",
  "group": "smileys-emotion",
  "subGroup": "face-neutral-skeptical"
}, {
  "slug": "unamused-face",
  "character": "\ud83d\ude12",
  "unicodeName": "unamused face",
  "codePoint": "1F612",
  "group": "smileys-emotion",
  "subGroup": "face-neutral-skeptical"
}, {
  "slug": "face-with-rolling-eyes",
  "character": "\ud83d\ude44",
  "unicodeName": "face with rolling eyes",
  "codePoint": "1F644",
  "group": "smileys-emotion",
  "subGroup": "face-neutral-skeptical"
}, {
  "slug": "grimacing-face",
  "character": "\ud83d\ude2c",
  "unicodeName": "grimacing face",
  "codePoint": "1F62C",
  "group": "smileys-emotion",
  "subGroup": "face-neutral-skeptical"
}, {
  "slug": "lying-face",
  "character": "\ud83e\udd25",
  "unicodeName": "lying face",
  "codePoint": "1F925",
  "group": "smileys-emotion",
  "subGroup": "face-neutral-skeptical"
}, {
  "slug": "relieved-face",
  "character": "\ud83d\ude0c",
  "unicodeName": "relieved face",
  "codePoint": "1F60C",
  "group": "smileys-emotion",
  "subGroup": "face-sleepy"
}, {
  "slug": "pensive-face",
  "character": "\ud83d\ude14",
  "unicodeName": "pensive face",
  "codePoint": "1F614",
  "group": "smileys-emotion",
  "subGroup": "face-sleepy"
}, {
  "slug": "sleepy-face",
  "character": "\ud83d\ude2a",
  "unicodeName": "sleepy face",
  "codePoint": "1F62A",
  "group": "smileys-emotion",
  "subGroup": "face-sleepy"
}, {
  "slug": "drooling-face",
  "character": "\ud83e\udd24",
  "unicodeName": "drooling face",
  "codePoint": "1F924",
  "group": "smileys-emotion",
  "subGroup": "face-sleepy"
}, {
  "slug": "sleeping-face",
  "character": "\ud83d\ude34",
  "unicodeName": "sleeping face",
  "codePoint": "1F634",
  "group": "smileys-emotion",
  "subGroup": "face-sleepy"
}, {
  "slug": "face-with-medical-mask",
  "character": "\ud83d\ude37",
  "unicodeName": "face with medical mask",
  "codePoint": "1F637",
  "group": "smileys-emotion",
  "subGroup": "face-unwell"
}, {
  "slug": "face-with-thermometer",
  "character": "\ud83e\udd12",
  "unicodeName": "face with thermometer",
  "codePoint": "1F912",
  "group": "smileys-emotion",
  "subGroup": "face-unwell"
}, {
  "slug": "face-with-head-bandage",
  "character": "\ud83e\udd15",
  "unicodeName": "face with head-bandage",
  "codePoint": "1F915",
  "group": "smileys-emotion",
  "subGroup": "face-unwell"
}, {
  "slug": "nauseated-face",
  "character": "\ud83e\udd22",
  "unicodeName": "nauseated face",
  "codePoint": "1F922",
  "group": "smileys-emotion",
  "subGroup": "face-unwell"
}, {
  "slug": "face-vomiting",
  "character": "\ud83e\udd2e",
  "unicodeName": "face vomiting",
  "codePoint": "1F92E",
  "group": "smileys-emotion",
  "subGroup": "face-unwell"
}, {
  "slug": "sneezing-face",
  "character": "\ud83e\udd27",
  "unicodeName": "sneezing face",
  "codePoint": "1F927",
  "group": "smileys-emotion",
  "subGroup": "face-unwell"
}, {
  "slug": "hot-face",
  "character": "\ud83e\udd75",
  "unicodeName": "hot face",
  "codePoint": "1F975",
  "group": "smileys-emotion",
  "subGroup": "face-unwell"
}, {
  "slug": "cold-face",
  "character": "\ud83e\udd76",
  "unicodeName": "cold face",
  "codePoint": "1F976",
  "group": "smileys-emotion",
  "subGroup": "face-unwell"
}, {
  "slug": "woozy-face",
  "character": "\ud83e\udd74",
  "unicodeName": "woozy face",
  "codePoint": "1F974",
  "group": "smileys-emotion",
  "subGroup": "face-unwell"
}, {
  "slug": "dizzy-face",
  "character": "\ud83d\ude35",
  "unicodeName": "dizzy face",
  "codePoint": "1F635",
  "group": "smileys-emotion",
  "subGroup": "face-unwell"
}, {
  "slug": "exploding-head",
  "character": "\ud83e\udd2f",
  "unicodeName": "exploding head",
  "codePoint": "1F92F",
  "group": "smileys-emotion",
  "subGroup": "face-unwell"
}, {
  "slug": "cowboy-hat-face",
  "character": "\ud83e\udd20",
  "unicodeName": "cowboy hat face",
  "codePoint": "1F920",
  "group": "smileys-emotion",
  "subGroup": "face-hat"
}, {
  "slug": "partying-face",
  "character": "\ud83e\udd73",
  "unicodeName": "partying face",
  "codePoint": "1F973",
  "group": "smileys-emotion",
  "subGroup": "face-hat"
}, {
  "slug": "smiling-face-with-sunglasses",
  "character": "\ud83d\ude0e",
  "unicodeName": "smiling face with sunglasses",
  "codePoint": "1F60E",
  "group": "smileys-emotion",
  "subGroup": "face-glasses"
}, {
  "slug": "nerd-face",
  "character": "\ud83e\udd13",
  "unicodeName": "nerd face",
  "codePoint": "1F913",
  "group": "smileys-emotion",
  "subGroup": "face-glasses"
}, {
  "slug": "face-with-monocle",
  "character": "\ud83e\uddd0",
  "unicodeName": "face with monocle",
  "codePoint": "1F9D0",
  "group": "smileys-emotion",
  "subGroup": "face-glasses"
}, {
  "slug": "confused-face",
  "character": "\ud83d\ude15",
  "unicodeName": "confused face",
  "codePoint": "1F615",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "worried-face",
  "character": "\ud83d\ude1f",
  "unicodeName": "worried face",
  "codePoint": "1F61F",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "slightly-frowning-face",
  "character": "\ud83d\ude41",
  "unicodeName": "slightly frowning face",
  "codePoint": "1F641",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "frowning-face",
  "character": "\u2639\ufe0f",
  "unicodeName": "frowning face",
  "codePoint": "2639 FE0F",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "face-with-open-mouth",
  "character": "\ud83d\ude2e",
  "unicodeName": "face with open mouth",
  "codePoint": "1F62E",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "hushed-face",
  "character": "\ud83d\ude2f",
  "unicodeName": "hushed face",
  "codePoint": "1F62F",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "astonished-face",
  "character": "\ud83d\ude32",
  "unicodeName": "astonished face",
  "codePoint": "1F632",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "flushed-face",
  "character": "\ud83d\ude33",
  "unicodeName": "flushed face",
  "codePoint": "1F633",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "pleading-face",
  "character": "\ud83e\udd7a",
  "unicodeName": "pleading face",
  "codePoint": "1F97A",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "frowning-face-with-open-mouth",
  "character": "\ud83d\ude26",
  "unicodeName": "frowning face with open mouth",
  "codePoint": "1F626",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "anguished-face",
  "character": "\ud83d\ude27",
  "unicodeName": "anguished face",
  "codePoint": "1F627",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "fearful-face",
  "character": "\ud83d\ude28",
  "unicodeName": "fearful face",
  "codePoint": "1F628",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "anxious-face-with-sweat",
  "character": "\ud83d\ude30",
  "unicodeName": "anxious face with sweat",
  "codePoint": "1F630",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "sad-but-relieved-face",
  "character": "\ud83d\ude25",
  "unicodeName": "sad but relieved face",
  "codePoint": "1F625",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "crying-face",
  "character": "\ud83d\ude22",
  "unicodeName": "crying face",
  "codePoint": "1F622",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "loudly-crying-face",
  "character": "\ud83d\ude2d",
  "unicodeName": "loudly crying face",
  "codePoint": "1F62D",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "face-screaming-in-fear",
  "character": "\ud83d\ude31",
  "unicodeName": "face screaming in fear",
  "codePoint": "1F631",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "confounded-face",
  "character": "\ud83d\ude16",
  "unicodeName": "confounded face",
  "codePoint": "1F616",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "persevering-face",
  "character": "\ud83d\ude23",
  "unicodeName": "persevering face",
  "codePoint": "1F623",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "disappointed-face",
  "character": "\ud83d\ude1e",
  "unicodeName": "disappointed face",
  "codePoint": "1F61E",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "downcast-face-with-sweat",
  "character": "\ud83d\ude13",
  "unicodeName": "downcast face with sweat",
  "codePoint": "1F613",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "weary-face",
  "character": "\ud83d\ude29",
  "unicodeName": "weary face",
  "codePoint": "1F629",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "tired-face",
  "character": "\ud83d\ude2b",
  "unicodeName": "tired face",
  "codePoint": "1F62B",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "yawning-face",
  "character": "\ud83e\udd71",
  "unicodeName": "yawning face",
  "codePoint": "1F971",
  "group": "smileys-emotion",
  "subGroup": "face-concerned"
}, {
  "slug": "face-with-steam-from-nose",
  "character": "\ud83d\ude24",
  "unicodeName": "face with steam from nose",
  "codePoint": "1F624",
  "group": "smileys-emotion",
  "subGroup": "face-negative"
}, {
  "slug": "pouting-face",
  "character": "\ud83d\ude21",
  "unicodeName": "pouting face",
  "codePoint": "1F621",
  "group": "smileys-emotion",
  "subGroup": "face-negative"
}, {
  "slug": "angry-face",
  "character": "\ud83d\ude20",
  "unicodeName": "angry face",
  "codePoint": "1F620",
  "group": "smileys-emotion",
  "subGroup": "face-negative"
}, {
  "slug": "face-with-symbols-on-mouth",
  "character": "\ud83e\udd2c",
  "unicodeName": "face with symbols on mouth",
  "codePoint": "1F92C",
  "group": "smileys-emotion",
  "subGroup": "face-negative"
}, {
  "slug": "smiling-face-with-horns",
  "character": "\ud83d\ude08",
  "unicodeName": "smiling face with horns",
  "codePoint": "1F608",
  "group": "smileys-emotion",
  "subGroup": "face-negative"
}, {
  "slug": "angry-face-with-horns",
  "character": "\ud83d\udc7f",
  "unicodeName": "angry face with horns",
  "codePoint": "1F47F",
  "group": "smileys-emotion",
  "subGroup": "face-negative"
}, {
  "slug": "skull",
  "character": "\ud83d\udc80",
  "unicodeName": "skull",
  "codePoint": "1F480",
  "group": "smileys-emotion",
  "subGroup": "face-negative"
}, {
  "slug": "skull-and-crossbones",
  "character": "\u2620\ufe0f",
  "unicodeName": "skull and crossbones",
  "codePoint": "2620 FE0F",
  "group": "smileys-emotion",
  "subGroup": "face-negative"
}, {
  "slug": "pile-of-poo",
  "character": "\ud83d\udca9",
  "unicodeName": "pile of poo",
  "codePoint": "1F4A9",
  "group": "smileys-emotion",
  "subGroup": "face-costume"
}, {
  "slug": "clown-face",
  "character": "\ud83e\udd21",
  "unicodeName": "clown face",
  "codePoint": "1F921",
  "group": "smileys-emotion",
  "subGroup": "face-costume"
}, {
  "slug": "ogre",
  "character": "\ud83d\udc79",
  "unicodeName": "ogre",
  "codePoint": "1F479",
  "group": "smileys-emotion",
  "subGroup": "face-costume"
}, {
  "slug": "goblin",
  "character": "\ud83d\udc7a",
  "unicodeName": "goblin",
  "codePoint": "1F47A",
  "group": "smileys-emotion",
  "subGroup": "face-costume"
}, {
  "slug": "ghost",
  "character": "\ud83d\udc7b",
  "unicodeName": "ghost",
  "codePoint": "1F47B",
  "group": "smileys-emotion",
  "subGroup": "face-costume"
}, {
  "slug": "alien",
  "character": "\ud83d\udc7d",
  "unicodeName": "alien",
  "codePoint": "1F47D",
  "group": "smileys-emotion",
  "subGroup": "face-costume"
}, {
  "slug": "alien-monster",
  "character": "\ud83d\udc7e",
  "unicodeName": "alien monster",
  "codePoint": "1F47E",
  "group": "smileys-emotion",
  "subGroup": "face-costume"
}, {
  "slug": "robot",
  "character": "\ud83e\udd16",
  "unicodeName": "robot",
  "codePoint": "1F916",
  "group": "smileys-emotion",
  "subGroup": "face-costume"
}, {
  "slug": "grinning-cat",
  "character": "\ud83d\ude3a",
  "unicodeName": "grinning cat",
  "codePoint": "1F63A",
  "group": "smileys-emotion",
  "subGroup": "cat-face"
}, {
  "slug": "grinning-cat-with-smiling-eyes",
  "character": "\ud83d\ude38",
  "unicodeName": "grinning cat with smiling eyes",
  "codePoint": "1F638",
  "group": "smileys-emotion",
  "subGroup": "cat-face"
}, {
  "slug": "cat-with-tears-of-joy",
  "character": "\ud83d\ude39",
  "unicodeName": "cat with tears of joy",
  "codePoint": "1F639",
  "group": "smileys-emotion",
  "subGroup": "cat-face"
}, {
  "slug": "smiling-cat-with-heart-eyes",
  "character": "\ud83d\ude3b",
  "unicodeName": "smiling cat with heart-eyes",
  "codePoint": "1F63B",
  "group": "smileys-emotion",
  "subGroup": "cat-face"
}, {
  "slug": "cat-with-wry-smile",
  "character": "\ud83d\ude3c",
  "unicodeName": "cat with wry smile",
  "codePoint": "1F63C",
  "group": "smileys-emotion",
  "subGroup": "cat-face"
}, {
  "slug": "kissing-cat",
  "character": "\ud83d\ude3d",
  "unicodeName": "kissing cat",
  "codePoint": "1F63D",
  "group": "smileys-emotion",
  "subGroup": "cat-face"
}, {
  "slug": "weary-cat",
  "character": "\ud83d\ude40",
  "unicodeName": "weary cat",
  "codePoint": "1F640",
  "group": "smileys-emotion",
  "subGroup": "cat-face"
}, {
  "slug": "crying-cat",
  "character": "\ud83d\ude3f",
  "unicodeName": "crying cat",
  "codePoint": "1F63F",
  "group": "smileys-emotion",
  "subGroup": "cat-face"
}, {
  "slug": "pouting-cat",
  "character": "\ud83d\ude3e",
  "unicodeName": "pouting cat",
  "codePoint": "1F63E",
  "group": "smileys-emotion",
  "subGroup": "cat-face"
}, {
  "slug": "see-no-evil-monkey",
  "character": "\ud83d\ude48",
  "unicodeName": "see-no-evil monkey",
  "codePoint": "1F648",
  "group": "smileys-emotion",
  "subGroup": "monkey-face"
}, {
  "slug": "hear-no-evil-monkey",
  "character": "\ud83d\ude49",
  "unicodeName": "hear-no-evil monkey",
  "codePoint": "1F649",
  "group": "smileys-emotion",
  "subGroup": "monkey-face"
}, {
  "slug": "speak-no-evil-monkey",
  "character": "\ud83d\ude4a",
  "unicodeName": "speak-no-evil monkey",
  "codePoint": "1F64A",
  "group": "smileys-emotion",
  "subGroup": "monkey-face"
}, {
  "slug": "kiss-mark",
  "character": "\ud83d\udc8b",
  "unicodeName": "kiss mark",
  "codePoint": "1F48B",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "love-letter",
  "character": "\ud83d\udc8c",
  "unicodeName": "love letter",
  "codePoint": "1F48C",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "heart-with-arrow",
  "character": "\ud83d\udc98",
  "unicodeName": "heart with arrow",
  "codePoint": "1F498",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "heart-with-ribbon",
  "character": "\ud83d\udc9d",
  "unicodeName": "heart with ribbon",
  "codePoint": "1F49D",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "sparkling-heart",
  "character": "\ud83d\udc96",
  "unicodeName": "sparkling heart",
  "codePoint": "1F496",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "growing-heart",
  "character": "\ud83d\udc97",
  "unicodeName": "growing heart",
  "codePoint": "1F497",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "beating-heart",
  "character": "\ud83d\udc93",
  "unicodeName": "beating heart",
  "codePoint": "1F493",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "revolving-hearts",
  "character": "\ud83d\udc9e",
  "unicodeName": "revolving hearts",
  "codePoint": "1F49E",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "two-hearts",
  "character": "\ud83d\udc95",
  "unicodeName": "two hearts",
  "codePoint": "1F495",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "heart-decoration",
  "character": "\ud83d\udc9f",
  "unicodeName": "heart decoration",
  "codePoint": "1F49F",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "heart-exclamation",
  "character": "\u2763\ufe0f",
  "unicodeName": "heart exclamation",
  "codePoint": "2763 FE0F",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "broken-heart",
  "character": "\ud83d\udc94",
  "unicodeName": "broken heart",
  "codePoint": "1F494",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "red-heart",
  "character": "\u2764\ufe0f",
  "unicodeName": "red heart",
  "codePoint": "2764 FE0F",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "orange-heart",
  "character": "\ud83e\udde1",
  "unicodeName": "orange heart",
  "codePoint": "1F9E1",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "yellow-heart",
  "character": "\ud83d\udc9b",
  "unicodeName": "yellow heart",
  "codePoint": "1F49B",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "green-heart",
  "character": "\ud83d\udc9a",
  "unicodeName": "green heart",
  "codePoint": "1F49A",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "blue-heart",
  "character": "\ud83d\udc99",
  "unicodeName": "blue heart",
  "codePoint": "1F499",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "purple-heart",
  "character": "\ud83d\udc9c",
  "unicodeName": "purple heart",
  "codePoint": "1F49C",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "brown-heart",
  "character": "\ud83e\udd0e",
  "unicodeName": "brown heart",
  "codePoint": "1F90E",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "black-heart",
  "character": "\ud83d\udda4",
  "unicodeName": "black heart",
  "codePoint": "1F5A4",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "white-heart",
  "character": "\ud83e\udd0d",
  "unicodeName": "white heart",
  "codePoint": "1F90D",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "hundred-points",
  "character": "\ud83d\udcaf",
  "unicodeName": "hundred points",
  "codePoint": "1F4AF",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "anger-symbol",
  "character": "\ud83d\udca2",
  "unicodeName": "anger symbol",
  "codePoint": "1F4A2",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "collision",
  "character": "\ud83d\udca5",
  "unicodeName": "collision",
  "codePoint": "1F4A5",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "dizzy",
  "character": "\ud83d\udcab",
  "unicodeName": "dizzy",
  "codePoint": "1F4AB",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "sweat-droplets",
  "character": "\ud83d\udca6",
  "unicodeName": "sweat droplets",
  "codePoint": "1F4A6",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "dashing-away",
  "character": "\ud83d\udca8",
  "unicodeName": "dashing away",
  "codePoint": "1F4A8",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "hole",
  "character": "\ud83d\udd73\ufe0f",
  "unicodeName": "hole",
  "codePoint": "1F573 FE0F",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "bomb",
  "character": "\ud83d\udca3",
  "unicodeName": "bomb",
  "codePoint": "1F4A3",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "speech-balloon",
  "character": "\ud83d\udcac",
  "unicodeName": "speech balloon",
  "codePoint": "1F4AC",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "eye-in-speech-bubble",
  "character": "\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f",
  "unicodeName": "eye in speech bubble",
  "codePoint": "1F441 FE0F 200D 1F5E8 FE0F",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "left-speech-bubble",
  "character": "\ud83d\udde8\ufe0f",
  "unicodeName": "left speech bubble",
  "codePoint": "1F5E8 FE0F",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "right-anger-bubble",
  "character": "\ud83d\uddef\ufe0f",
  "unicodeName": "right anger bubble",
  "codePoint": "1F5EF FE0F",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "thought-balloon",
  "character": "\ud83d\udcad",
  "unicodeName": "thought balloon",
  "codePoint": "1F4AD",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "zzz",
  "character": "\ud83d\udca4",
  "unicodeName": "zzz",
  "codePoint": "1F4A4",
  "group": "smileys-emotion",
  "subGroup": "emotion"
}, {
  "slug": "waving-hand",
  "character": "\ud83d\udc4b",
  "unicodeName": "waving hand",
  "codePoint": "1F44B",
  "group": "people-body",
  "subGroup": "hand-fingers-open",
  "variants": [{
    "slug": "waving-hand-light-skin-tone",
    "character": "\ud83d\udc4b\ud83c\udffb"
  }, {
    "slug": "waving-hand-medium-light-skin-tone",
    "character": "\ud83d\udc4b\ud83c\udffc"
  }, {
    "slug": "waving-hand-medium-skin-tone",
    "character": "\ud83d\udc4b\ud83c\udffd"
  }, {
    "slug": "waving-hand-medium-dark-skin-tone",
    "character": "\ud83d\udc4b\ud83c\udffe"
  }, {
    "slug": "waving-hand-dark-skin-tone",
    "character": "\ud83d\udc4b\ud83c\udfff"
  }]
}, {
  "slug": "raised-back-of-hand",
  "character": "\ud83e\udd1a",
  "unicodeName": "raised back of hand",
  "codePoint": "1F91A",
  "group": "people-body",
  "subGroup": "hand-fingers-open",
  "variants": [{
    "slug": "raised-back-of-hand-light-skin-tone",
    "character": "\ud83e\udd1a\ud83c\udffb"
  }, {
    "slug": "raised-back-of-hand-medium-light-skin-tone",
    "character": "\ud83e\udd1a\ud83c\udffc"
  }, {
    "slug": "raised-back-of-hand-medium-skin-tone",
    "character": "\ud83e\udd1a\ud83c\udffd"
  }, {
    "slug": "raised-back-of-hand-medium-dark-skin-tone",
    "character": "\ud83e\udd1a\ud83c\udffe"
  }, {
    "slug": "raised-back-of-hand-dark-skin-tone",
    "character": "\ud83e\udd1a\ud83c\udfff"
  }]
}, {
  "slug": "hand-with-fingers-splayed",
  "character": "\ud83d\udd90\ufe0f",
  "unicodeName": "hand with fingers splayed",
  "codePoint": "1F590 FE0F",
  "group": "people-body",
  "subGroup": "hand-fingers-open"
}, {
  "slug": "hand-with-fingers-splayed-light-skin-tone",
  "character": "\ud83d\udd90\ud83c\udffb",
  "unicodeName": "hand with fingers splayed: light skin tone",
  "codePoint": "1F590 1F3FB",
  "group": "people-body",
  "subGroup": "hand-fingers-open"
}, {
  "slug": "hand-with-fingers-splayed-medium-light-skin-tone",
  "character": "\ud83d\udd90\ud83c\udffc",
  "unicodeName": "hand with fingers splayed: medium-light skin tone",
  "codePoint": "1F590 1F3FC",
  "group": "people-body",
  "subGroup": "hand-fingers-open"
}, {
  "slug": "hand-with-fingers-splayed-medium-skin-tone",
  "character": "\ud83d\udd90\ud83c\udffd",
  "unicodeName": "hand with fingers splayed: medium skin tone",
  "codePoint": "1F590 1F3FD",
  "group": "people-body",
  "subGroup": "hand-fingers-open"
}, {
  "slug": "hand-with-fingers-splayed-medium-dark-skin-tone",
  "character": "\ud83d\udd90\ud83c\udffe",
  "unicodeName": "hand with fingers splayed: medium-dark skin tone",
  "codePoint": "1F590 1F3FE",
  "group": "people-body",
  "subGroup": "hand-fingers-open"
}, {
  "slug": "hand-with-fingers-splayed-dark-skin-tone",
  "character": "\ud83d\udd90\ud83c\udfff",
  "unicodeName": "hand with fingers splayed: dark skin tone",
  "codePoint": "1F590 1F3FF",
  "group": "people-body",
  "subGroup": "hand-fingers-open"
}, {
  "slug": "raised-hand",
  "character": "\u270b",
  "unicodeName": "raised hand",
  "codePoint": "270B",
  "group": "people-body",
  "subGroup": "hand-fingers-open",
  "variants": [{
    "slug": "raised-hand-light-skin-tone",
    "character": "\u270b\ud83c\udffb"
  }, {
    "slug": "raised-hand-medium-light-skin-tone",
    "character": "\u270b\ud83c\udffc"
  }, {
    "slug": "raised-hand-medium-skin-tone",
    "character": "\u270b\ud83c\udffd"
  }, {
    "slug": "raised-hand-medium-dark-skin-tone",
    "character": "\u270b\ud83c\udffe"
  }, {
    "slug": "raised-hand-dark-skin-tone",
    "character": "\u270b\ud83c\udfff"
  }]
}, {
  "slug": "vulcan-salute",
  "character": "\ud83d\udd96",
  "unicodeName": "vulcan salute",
  "codePoint": "1F596",
  "group": "people-body",
  "subGroup": "hand-fingers-open",
  "variants": [{
    "slug": "vulcan-salute-light-skin-tone",
    "character": "\ud83d\udd96\ud83c\udffb"
  }, {
    "slug": "vulcan-salute-medium-light-skin-tone",
    "character": "\ud83d\udd96\ud83c\udffc"
  }, {
    "slug": "vulcan-salute-medium-skin-tone",
    "character": "\ud83d\udd96\ud83c\udffd"
  }, {
    "slug": "vulcan-salute-medium-dark-skin-tone",
    "character": "\ud83d\udd96\ud83c\udffe"
  }, {
    "slug": "vulcan-salute-dark-skin-tone",
    "character": "\ud83d\udd96\ud83c\udfff"
  }]
}, {
  "slug": "ok-hand",
  "character": "\ud83d\udc4c",
  "unicodeName": "OK hand",
  "codePoint": "1F44C",
  "group": "people-body",
  "subGroup": "hand-fingers-partial",
  "variants": [{
    "slug": "ok-hand-light-skin-tone",
    "character": "\ud83d\udc4c\ud83c\udffb"
  }, {
    "slug": "ok-hand-medium-light-skin-tone",
    "character": "\ud83d\udc4c\ud83c\udffc"
  }, {
    "slug": "ok-hand-medium-skin-tone",
    "character": "\ud83d\udc4c\ud83c\udffd"
  }, {
    "slug": "ok-hand-medium-dark-skin-tone",
    "character": "\ud83d\udc4c\ud83c\udffe"
  }, {
    "slug": "ok-hand-dark-skin-tone",
    "character": "\ud83d\udc4c\ud83c\udfff"
  }]
}, {
  "slug": "pinching-hand",
  "character": "\ud83e\udd0f",
  "unicodeName": "pinching hand",
  "codePoint": "1F90F",
  "group": "people-body",
  "subGroup": "hand-fingers-partial",
  "variants": [{
    "slug": "pinching-hand-light-skin-tone",
    "character": "\ud83e\udd0f\ud83c\udffb"
  }, {
    "slug": "pinching-hand-medium-light-skin-tone",
    "character": "\ud83e\udd0f\ud83c\udffc"
  }, {
    "slug": "pinching-hand-medium-skin-tone",
    "character": "\ud83e\udd0f\ud83c\udffd"
  }, {
    "slug": "pinching-hand-medium-dark-skin-tone",
    "character": "\ud83e\udd0f\ud83c\udffe"
  }, {
    "slug": "pinching-hand-dark-skin-tone",
    "character": "\ud83e\udd0f\ud83c\udfff"
  }]
}, {
  "slug": "victory-hand",
  "character": "\u270c\ufe0f",
  "unicodeName": "victory hand",
  "codePoint": "270C FE0F",
  "group": "people-body",
  "subGroup": "hand-fingers-partial"
}, {
  "slug": "victory-hand-light-skin-tone",
  "character": "\u270c\ud83c\udffb",
  "unicodeName": "victory hand: light skin tone",
  "codePoint": "270C 1F3FB",
  "group": "people-body",
  "subGroup": "hand-fingers-partial"
}, {
  "slug": "victory-hand-medium-light-skin-tone",
  "character": "\u270c\ud83c\udffc",
  "unicodeName": "victory hand: medium-light skin tone",
  "codePoint": "270C 1F3FC",
  "group": "people-body",
  "subGroup": "hand-fingers-partial"
}, {
  "slug": "victory-hand-medium-skin-tone",
  "character": "\u270c\ud83c\udffd",
  "unicodeName": "victory hand: medium skin tone",
  "codePoint": "270C 1F3FD",
  "group": "people-body",
  "subGroup": "hand-fingers-partial"
}, {
  "slug": "victory-hand-medium-dark-skin-tone",
  "character": "\u270c\ud83c\udffe",
  "unicodeName": "victory hand: medium-dark skin tone",
  "codePoint": "270C 1F3FE",
  "group": "people-body",
  "subGroup": "hand-fingers-partial"
}, {
  "slug": "victory-hand-dark-skin-tone",
  "character": "\u270c\ud83c\udfff",
  "unicodeName": "victory hand: dark skin tone",
  "codePoint": "270C 1F3FF",
  "group": "people-body",
  "subGroup": "hand-fingers-partial"
}, {
  "slug": "crossed-fingers",
  "character": "\ud83e\udd1e",
  "unicodeName": "crossed fingers",
  "codePoint": "1F91E",
  "group": "people-body",
  "subGroup": "hand-fingers-partial",
  "variants": [{
    "slug": "crossed-fingers-light-skin-tone",
    "character": "\ud83e\udd1e\ud83c\udffb"
  }, {
    "slug": "crossed-fingers-medium-light-skin-tone",
    "character": "\ud83e\udd1e\ud83c\udffc"
  }, {
    "slug": "crossed-fingers-medium-skin-tone",
    "character": "\ud83e\udd1e\ud83c\udffd"
  }, {
    "slug": "crossed-fingers-medium-dark-skin-tone",
    "character": "\ud83e\udd1e\ud83c\udffe"
  }, {
    "slug": "crossed-fingers-dark-skin-tone",
    "character": "\ud83e\udd1e\ud83c\udfff"
  }]
}, {
  "slug": "love-you-gesture",
  "character": "\ud83e\udd1f",
  "unicodeName": "love-you gesture",
  "codePoint": "1F91F",
  "group": "people-body",
  "subGroup": "hand-fingers-partial",
  "variants": [{
    "slug": "love-you-gesture-light-skin-tone",
    "character": "\ud83e\udd1f\ud83c\udffb"
  }, {
    "slug": "love-you-gesture-medium-light-skin-tone",
    "character": "\ud83e\udd1f\ud83c\udffc"
  }, {
    "slug": "love-you-gesture-medium-skin-tone",
    "character": "\ud83e\udd1f\ud83c\udffd"
  }, {
    "slug": "love-you-gesture-medium-dark-skin-tone",
    "character": "\ud83e\udd1f\ud83c\udffe"
  }, {
    "slug": "love-you-gesture-dark-skin-tone",
    "character": "\ud83e\udd1f\ud83c\udfff"
  }]
}, {
  "slug": "sign-of-the-horns",
  "character": "\ud83e\udd18",
  "unicodeName": "sign of the horns",
  "codePoint": "1F918",
  "group": "people-body",
  "subGroup": "hand-fingers-partial",
  "variants": [{
    "slug": "sign-of-the-horns-light-skin-tone",
    "character": "\ud83e\udd18\ud83c\udffb"
  }, {
    "slug": "sign-of-the-horns-medium-light-skin-tone",
    "character": "\ud83e\udd18\ud83c\udffc"
  }, {
    "slug": "sign-of-the-horns-medium-skin-tone",
    "character": "\ud83e\udd18\ud83c\udffd"
  }, {
    "slug": "sign-of-the-horns-medium-dark-skin-tone",
    "character": "\ud83e\udd18\ud83c\udffe"
  }, {
    "slug": "sign-of-the-horns-dark-skin-tone",
    "character": "\ud83e\udd18\ud83c\udfff"
  }]
}, {
  "slug": "call-me-hand",
  "character": "\ud83e\udd19",
  "unicodeName": "call me hand",
  "codePoint": "1F919",
  "group": "people-body",
  "subGroup": "hand-fingers-partial",
  "variants": [{
    "slug": "call-me-hand-light-skin-tone",
    "character": "\ud83e\udd19\ud83c\udffb"
  }, {
    "slug": "call-me-hand-medium-light-skin-tone",
    "character": "\ud83e\udd19\ud83c\udffc"
  }, {
    "slug": "call-me-hand-medium-skin-tone",
    "character": "\ud83e\udd19\ud83c\udffd"
  }, {
    "slug": "call-me-hand-medium-dark-skin-tone",
    "character": "\ud83e\udd19\ud83c\udffe"
  }, {
    "slug": "call-me-hand-dark-skin-tone",
    "character": "\ud83e\udd19\ud83c\udfff"
  }]
}, {
  "slug": "backhand-index-pointing-left",
  "character": "\ud83d\udc48",
  "unicodeName": "backhand index pointing left",
  "codePoint": "1F448",
  "group": "people-body",
  "subGroup": "hand-single-finger",
  "variants": [{
    "slug": "backhand-index-pointing-left-light-skin-tone",
    "character": "\ud83d\udc48\ud83c\udffb"
  }, {
    "slug": "backhand-index-pointing-left-medium-light-skin-tone",
    "character": "\ud83d\udc48\ud83c\udffc"
  }, {
    "slug": "backhand-index-pointing-left-medium-skin-tone",
    "character": "\ud83d\udc48\ud83c\udffd"
  }, {
    "slug": "backhand-index-pointing-left-medium-dark-skin-tone",
    "character": "\ud83d\udc48\ud83c\udffe"
  }, {
    "slug": "backhand-index-pointing-left-dark-skin-tone",
    "character": "\ud83d\udc48\ud83c\udfff"
  }]
}, {
  "slug": "backhand-index-pointing-right",
  "character": "\ud83d\udc49",
  "unicodeName": "backhand index pointing right",
  "codePoint": "1F449",
  "group": "people-body",
  "subGroup": "hand-single-finger",
  "variants": [{
    "slug": "backhand-index-pointing-right-light-skin-tone",
    "character": "\ud83d\udc49\ud83c\udffb"
  }, {
    "slug": "backhand-index-pointing-right-medium-light-skin-tone",
    "character": "\ud83d\udc49\ud83c\udffc"
  }, {
    "slug": "backhand-index-pointing-right-medium-skin-tone",
    "character": "\ud83d\udc49\ud83c\udffd"
  }, {
    "slug": "backhand-index-pointing-right-medium-dark-skin-tone",
    "character": "\ud83d\udc49\ud83c\udffe"
  }, {
    "slug": "backhand-index-pointing-right-dark-skin-tone",
    "character": "\ud83d\udc49\ud83c\udfff"
  }]
}, {
  "slug": "backhand-index-pointing-up",
  "character": "\ud83d\udc46",
  "unicodeName": "backhand index pointing up",
  "codePoint": "1F446",
  "group": "people-body",
  "subGroup": "hand-single-finger",
  "variants": [{
    "slug": "backhand-index-pointing-up-light-skin-tone",
    "character": "\ud83d\udc46\ud83c\udffb"
  }, {
    "slug": "backhand-index-pointing-up-medium-light-skin-tone",
    "character": "\ud83d\udc46\ud83c\udffc"
  }, {
    "slug": "backhand-index-pointing-up-medium-skin-tone",
    "character": "\ud83d\udc46\ud83c\udffd"
  }, {
    "slug": "backhand-index-pointing-up-medium-dark-skin-tone",
    "character": "\ud83d\udc46\ud83c\udffe"
  }, {
    "slug": "backhand-index-pointing-up-dark-skin-tone",
    "character": "\ud83d\udc46\ud83c\udfff"
  }]
}, {
  "slug": "middle-finger",
  "character": "\ud83d\udd95",
  "unicodeName": "middle finger",
  "codePoint": "1F595",
  "group": "people-body",
  "subGroup": "hand-single-finger",
  "variants": [{
    "slug": "middle-finger-light-skin-tone",
    "character": "\ud83d\udd95\ud83c\udffb"
  }, {
    "slug": "middle-finger-medium-light-skin-tone",
    "character": "\ud83d\udd95\ud83c\udffc"
  }, {
    "slug": "middle-finger-medium-skin-tone",
    "character": "\ud83d\udd95\ud83c\udffd"
  }, {
    "slug": "middle-finger-medium-dark-skin-tone",
    "character": "\ud83d\udd95\ud83c\udffe"
  }, {
    "slug": "middle-finger-dark-skin-tone",
    "character": "\ud83d\udd95\ud83c\udfff"
  }]
}, {
  "slug": "backhand-index-pointing-down",
  "character": "\ud83d\udc47",
  "unicodeName": "backhand index pointing down",
  "codePoint": "1F447",
  "group": "people-body",
  "subGroup": "hand-single-finger",
  "variants": [{
    "slug": "backhand-index-pointing-down-light-skin-tone",
    "character": "\ud83d\udc47\ud83c\udffb"
  }, {
    "slug": "backhand-index-pointing-down-medium-light-skin-tone",
    "character": "\ud83d\udc47\ud83c\udffc"
  }, {
    "slug": "backhand-index-pointing-down-medium-skin-tone",
    "character": "\ud83d\udc47\ud83c\udffd"
  }, {
    "slug": "backhand-index-pointing-down-medium-dark-skin-tone",
    "character": "\ud83d\udc47\ud83c\udffe"
  }, {
    "slug": "backhand-index-pointing-down-dark-skin-tone",
    "character": "\ud83d\udc47\ud83c\udfff"
  }]
}, {
  "slug": "index-pointing-up",
  "character": "\u261d\ufe0f",
  "unicodeName": "index pointing up",
  "codePoint": "261D FE0F",
  "group": "people-body",
  "subGroup": "hand-single-finger"
}, {
  "slug": "index-pointing-up-light-skin-tone",
  "character": "\u261d\ud83c\udffb",
  "unicodeName": "index pointing up: light skin tone",
  "codePoint": "261D 1F3FB",
  "group": "people-body",
  "subGroup": "hand-single-finger"
}, {
  "slug": "index-pointing-up-medium-light-skin-tone",
  "character": "\u261d\ud83c\udffc",
  "unicodeName": "index pointing up: medium-light skin tone",
  "codePoint": "261D 1F3FC",
  "group": "people-body",
  "subGroup": "hand-single-finger"
}, {
  "slug": "index-pointing-up-medium-skin-tone",
  "character": "\u261d\ud83c\udffd",
  "unicodeName": "index pointing up: medium skin tone",
  "codePoint": "261D 1F3FD",
  "group": "people-body",
  "subGroup": "hand-single-finger"
}, {
  "slug": "index-pointing-up-medium-dark-skin-tone",
  "character": "\u261d\ud83c\udffe",
  "unicodeName": "index pointing up: medium-dark skin tone",
  "codePoint": "261D 1F3FE",
  "group": "people-body",
  "subGroup": "hand-single-finger"
}, {
  "slug": "index-pointing-up-dark-skin-tone",
  "character": "\u261d\ud83c\udfff",
  "unicodeName": "index pointing up: dark skin tone",
  "codePoint": "261D 1F3FF",
  "group": "people-body",
  "subGroup": "hand-single-finger"
}, {
  "slug": "thumbs-up",
  "character": "\ud83d\udc4d",
  "unicodeName": "thumbs up",
  "codePoint": "1F44D",
  "group": "people-body",
  "subGroup": "hand-fingers-closed",
  "variants": [{
    "slug": "thumbs-up-light-skin-tone",
    "character": "\ud83d\udc4d\ud83c\udffb"
  }, {
    "slug": "thumbs-up-medium-light-skin-tone",
    "character": "\ud83d\udc4d\ud83c\udffc"
  }, {
    "slug": "thumbs-up-medium-skin-tone",
    "character": "\ud83d\udc4d\ud83c\udffd"
  }, {
    "slug": "thumbs-up-medium-dark-skin-tone",
    "character": "\ud83d\udc4d\ud83c\udffe"
  }, {
    "slug": "thumbs-up-dark-skin-tone",
    "character": "\ud83d\udc4d\ud83c\udfff"
  }]
}, {
  "slug": "thumbs-down",
  "character": "\ud83d\udc4e",
  "unicodeName": "thumbs down",
  "codePoint": "1F44E",
  "group": "people-body",
  "subGroup": "hand-fingers-closed",
  "variants": [{
    "slug": "thumbs-down-light-skin-tone",
    "character": "\ud83d\udc4e\ud83c\udffb"
  }, {
    "slug": "thumbs-down-medium-light-skin-tone",
    "character": "\ud83d\udc4e\ud83c\udffc"
  }, {
    "slug": "thumbs-down-medium-skin-tone",
    "character": "\ud83d\udc4e\ud83c\udffd"
  }, {
    "slug": "thumbs-down-medium-dark-skin-tone",
    "character": "\ud83d\udc4e\ud83c\udffe"
  }, {
    "slug": "thumbs-down-dark-skin-tone",
    "character": "\ud83d\udc4e\ud83c\udfff"
  }]
}, {
  "slug": "raised-fist",
  "character": "\u270a",
  "unicodeName": "raised fist",
  "codePoint": "270A",
  "group": "people-body",
  "subGroup": "hand-fingers-closed",
  "variants": [{
    "slug": "raised-fist-light-skin-tone",
    "character": "\u270a\ud83c\udffb"
  }, {
    "slug": "raised-fist-medium-light-skin-tone",
    "character": "\u270a\ud83c\udffc"
  }, {
    "slug": "raised-fist-medium-skin-tone",
    "character": "\u270a\ud83c\udffd"
  }, {
    "slug": "raised-fist-medium-dark-skin-tone",
    "character": "\u270a\ud83c\udffe"
  }, {
    "slug": "raised-fist-dark-skin-tone",
    "character": "\u270a\ud83c\udfff"
  }]
}, {
  "slug": "oncoming-fist",
  "character": "\ud83d\udc4a",
  "unicodeName": "oncoming fist",
  "codePoint": "1F44A",
  "group": "people-body",
  "subGroup": "hand-fingers-closed",
  "variants": [{
    "slug": "oncoming-fist-light-skin-tone",
    "character": "\ud83d\udc4a\ud83c\udffb"
  }, {
    "slug": "oncoming-fist-medium-light-skin-tone",
    "character": "\ud83d\udc4a\ud83c\udffc"
  }, {
    "slug": "oncoming-fist-medium-skin-tone",
    "character": "\ud83d\udc4a\ud83c\udffd"
  }, {
    "slug": "oncoming-fist-medium-dark-skin-tone",
    "character": "\ud83d\udc4a\ud83c\udffe"
  }, {
    "slug": "oncoming-fist-dark-skin-tone",
    "character": "\ud83d\udc4a\ud83c\udfff"
  }]
}, {
  "slug": "left-facing-fist",
  "character": "\ud83e\udd1b",
  "unicodeName": "left-facing fist",
  "codePoint": "1F91B",
  "group": "people-body",
  "subGroup": "hand-fingers-closed",
  "variants": [{
    "slug": "left-facing-fist-light-skin-tone",
    "character": "\ud83e\udd1b\ud83c\udffb"
  }, {
    "slug": "left-facing-fist-medium-light-skin-tone",
    "character": "\ud83e\udd1b\ud83c\udffc"
  }, {
    "slug": "left-facing-fist-medium-skin-tone",
    "character": "\ud83e\udd1b\ud83c\udffd"
  }, {
    "slug": "left-facing-fist-medium-dark-skin-tone",
    "character": "\ud83e\udd1b\ud83c\udffe"
  }, {
    "slug": "left-facing-fist-dark-skin-tone",
    "character": "\ud83e\udd1b\ud83c\udfff"
  }]
}, {
  "slug": "right-facing-fist",
  "character": "\ud83e\udd1c",
  "unicodeName": "right-facing fist",
  "codePoint": "1F91C",
  "group": "people-body",
  "subGroup": "hand-fingers-closed",
  "variants": [{
    "slug": "right-facing-fist-light-skin-tone",
    "character": "\ud83e\udd1c\ud83c\udffb"
  }, {
    "slug": "right-facing-fist-medium-light-skin-tone",
    "character": "\ud83e\udd1c\ud83c\udffc"
  }, {
    "slug": "right-facing-fist-medium-skin-tone",
    "character": "\ud83e\udd1c\ud83c\udffd"
  }, {
    "slug": "right-facing-fist-medium-dark-skin-tone",
    "character": "\ud83e\udd1c\ud83c\udffe"
  }, {
    "slug": "right-facing-fist-dark-skin-tone",
    "character": "\ud83e\udd1c\ud83c\udfff"
  }]
}, {
  "slug": "clapping-hands",
  "character": "\ud83d\udc4f",
  "unicodeName": "clapping hands",
  "codePoint": "1F44F",
  "group": "people-body",
  "subGroup": "hands",
  "variants": [{
    "slug": "clapping-hands-light-skin-tone",
    "character": "\ud83d\udc4f\ud83c\udffb"
  }, {
    "slug": "clapping-hands-medium-light-skin-tone",
    "character": "\ud83d\udc4f\ud83c\udffc"
  }, {
    "slug": "clapping-hands-medium-skin-tone",
    "character": "\ud83d\udc4f\ud83c\udffd"
  }, {
    "slug": "clapping-hands-medium-dark-skin-tone",
    "character": "\ud83d\udc4f\ud83c\udffe"
  }, {
    "slug": "clapping-hands-dark-skin-tone",
    "character": "\ud83d\udc4f\ud83c\udfff"
  }]
}, {
  "slug": "raising-hands",
  "character": "\ud83d\ude4c",
  "unicodeName": "raising hands",
  "codePoint": "1F64C",
  "group": "people-body",
  "subGroup": "hands",
  "variants": [{
    "slug": "raising-hands-light-skin-tone",
    "character": "\ud83d\ude4c\ud83c\udffb"
  }, {
    "slug": "raising-hands-medium-light-skin-tone",
    "character": "\ud83d\ude4c\ud83c\udffc"
  }, {
    "slug": "raising-hands-medium-skin-tone",
    "character": "\ud83d\ude4c\ud83c\udffd"
  }, {
    "slug": "raising-hands-medium-dark-skin-tone",
    "character": "\ud83d\ude4c\ud83c\udffe"
  }, {
    "slug": "raising-hands-dark-skin-tone",
    "character": "\ud83d\ude4c\ud83c\udfff"
  }]
}, {
  "slug": "open-hands",
  "character": "\ud83d\udc50",
  "unicodeName": "open hands",
  "codePoint": "1F450",
  "group": "people-body",
  "subGroup": "hands",
  "variants": [{
    "slug": "open-hands-light-skin-tone",
    "character": "\ud83d\udc50\ud83c\udffb"
  }, {
    "slug": "open-hands-medium-light-skin-tone",
    "character": "\ud83d\udc50\ud83c\udffc"
  }, {
    "slug": "open-hands-medium-skin-tone",
    "character": "\ud83d\udc50\ud83c\udffd"
  }, {
    "slug": "open-hands-medium-dark-skin-tone",
    "character": "\ud83d\udc50\ud83c\udffe"
  }, {
    "slug": "open-hands-dark-skin-tone",
    "character": "\ud83d\udc50\ud83c\udfff"
  }]
}, {
  "slug": "palms-up-together",
  "character": "\ud83e\udd32",
  "unicodeName": "palms up together",
  "codePoint": "1F932",
  "group": "people-body",
  "subGroup": "hands",
  "variants": [{
    "slug": "palms-up-together-light-skin-tone",
    "character": "\ud83e\udd32\ud83c\udffb"
  }, {
    "slug": "palms-up-together-medium-light-skin-tone",
    "character": "\ud83e\udd32\ud83c\udffc"
  }, {
    "slug": "palms-up-together-medium-skin-tone",
    "character": "\ud83e\udd32\ud83c\udffd"
  }, {
    "slug": "palms-up-together-medium-dark-skin-tone",
    "character": "\ud83e\udd32\ud83c\udffe"
  }, {
    "slug": "palms-up-together-dark-skin-tone",
    "character": "\ud83e\udd32\ud83c\udfff"
  }]
}, {
  "slug": "handshake",
  "character": "\ud83e\udd1d",
  "unicodeName": "handshake",
  "codePoint": "1F91D",
  "group": "people-body",
  "subGroup": "hands"
}, {
  "slug": "folded-hands",
  "character": "\ud83d\ude4f",
  "unicodeName": "folded hands",
  "codePoint": "1F64F",
  "group": "people-body",
  "subGroup": "hands",
  "variants": [{
    "slug": "folded-hands-light-skin-tone",
    "character": "\ud83d\ude4f\ud83c\udffb"
  }, {
    "slug": "folded-hands-medium-light-skin-tone",
    "character": "\ud83d\ude4f\ud83c\udffc"
  }, {
    "slug": "folded-hands-medium-skin-tone",
    "character": "\ud83d\ude4f\ud83c\udffd"
  }, {
    "slug": "folded-hands-medium-dark-skin-tone",
    "character": "\ud83d\ude4f\ud83c\udffe"
  }, {
    "slug": "folded-hands-dark-skin-tone",
    "character": "\ud83d\ude4f\ud83c\udfff"
  }]
}, {
  "slug": "writing-hand",
  "character": "\u270d\ufe0f",
  "unicodeName": "writing hand",
  "codePoint": "270D FE0F",
  "group": "people-body",
  "subGroup": "hand-prop"
}, {
  "slug": "writing-hand-light-skin-tone",
  "character": "\u270d\ud83c\udffb",
  "unicodeName": "writing hand: light skin tone",
  "codePoint": "270D 1F3FB",
  "group": "people-body",
  "subGroup": "hand-prop"
}, {
  "slug": "writing-hand-medium-light-skin-tone",
  "character": "\u270d\ud83c\udffc",
  "unicodeName": "writing hand: medium-light skin tone",
  "codePoint": "270D 1F3FC",
  "group": "people-body",
  "subGroup": "hand-prop"
}, {
  "slug": "writing-hand-medium-skin-tone",
  "character": "\u270d\ud83c\udffd",
  "unicodeName": "writing hand: medium skin tone",
  "codePoint": "270D 1F3FD",
  "group": "people-body",
  "subGroup": "hand-prop"
}, {
  "slug": "writing-hand-medium-dark-skin-tone",
  "character": "\u270d\ud83c\udffe",
  "unicodeName": "writing hand: medium-dark skin tone",
  "codePoint": "270D 1F3FE",
  "group": "people-body",
  "subGroup": "hand-prop"
}, {
  "slug": "writing-hand-dark-skin-tone",
  "character": "\u270d\ud83c\udfff",
  "unicodeName": "writing hand: dark skin tone",
  "codePoint": "270D 1F3FF",
  "group": "people-body",
  "subGroup": "hand-prop"
}, {
  "slug": "nail-polish",
  "character": "\ud83d\udc85",
  "unicodeName": "nail polish",
  "codePoint": "1F485",
  "group": "people-body",
  "subGroup": "hand-prop",
  "variants": [{
    "slug": "nail-polish-light-skin-tone",
    "character": "\ud83d\udc85\ud83c\udffb"
  }, {
    "slug": "nail-polish-medium-light-skin-tone",
    "character": "\ud83d\udc85\ud83c\udffc"
  }, {
    "slug": "nail-polish-medium-skin-tone",
    "character": "\ud83d\udc85\ud83c\udffd"
  }, {
    "slug": "nail-polish-medium-dark-skin-tone",
    "character": "\ud83d\udc85\ud83c\udffe"
  }, {
    "slug": "nail-polish-dark-skin-tone",
    "character": "\ud83d\udc85\ud83c\udfff"
  }]
}, {
  "slug": "selfie",
  "character": "\ud83e\udd33",
  "unicodeName": "selfie",
  "codePoint": "1F933",
  "group": "people-body",
  "subGroup": "hand-prop",
  "variants": [{
    "slug": "selfie-light-skin-tone",
    "character": "\ud83e\udd33\ud83c\udffb"
  }, {
    "slug": "selfie-medium-light-skin-tone",
    "character": "\ud83e\udd33\ud83c\udffc"
  }, {
    "slug": "selfie-medium-skin-tone",
    "character": "\ud83e\udd33\ud83c\udffd"
  }, {
    "slug": "selfie-medium-dark-skin-tone",
    "character": "\ud83e\udd33\ud83c\udffe"
  }, {
    "slug": "selfie-dark-skin-tone",
    "character": "\ud83e\udd33\ud83c\udfff"
  }]
}, {
  "slug": "flexed-biceps",
  "character": "\ud83d\udcaa",
  "unicodeName": "flexed biceps",
  "codePoint": "1F4AA",
  "group": "people-body",
  "subGroup": "body-parts",
  "variants": [{
    "slug": "flexed-biceps-light-skin-tone",
    "character": "\ud83d\udcaa\ud83c\udffb"
  }, {
    "slug": "flexed-biceps-medium-light-skin-tone",
    "character": "\ud83d\udcaa\ud83c\udffc"
  }, {
    "slug": "flexed-biceps-medium-skin-tone",
    "character": "\ud83d\udcaa\ud83c\udffd"
  }, {
    "slug": "flexed-biceps-medium-dark-skin-tone",
    "character": "\ud83d\udcaa\ud83c\udffe"
  }, {
    "slug": "flexed-biceps-dark-skin-tone",
    "character": "\ud83d\udcaa\ud83c\udfff"
  }]
}, {
  "slug": "mechanical-arm",
  "character": "\ud83e\uddbe",
  "unicodeName": "mechanical arm",
  "codePoint": "1F9BE",
  "group": "people-body",
  "subGroup": "body-parts"
}, {
  "slug": "mechanical-leg",
  "character": "\ud83e\uddbf",
  "unicodeName": "mechanical leg",
  "codePoint": "1F9BF",
  "group": "people-body",
  "subGroup": "body-parts"
}, {
  "slug": "leg",
  "character": "\ud83e\uddb5",
  "unicodeName": "leg",
  "codePoint": "1F9B5",
  "group": "people-body",
  "subGroup": "body-parts",
  "variants": [{
    "slug": "leg-light-skin-tone",
    "character": "\ud83e\uddb5\ud83c\udffb"
  }, {
    "slug": "leg-medium-light-skin-tone",
    "character": "\ud83e\uddb5\ud83c\udffc"
  }, {
    "slug": "leg-medium-skin-tone",
    "character": "\ud83e\uddb5\ud83c\udffd"
  }, {
    "slug": "leg-medium-dark-skin-tone",
    "character": "\ud83e\uddb5\ud83c\udffe"
  }, {
    "slug": "leg-dark-skin-tone",
    "character": "\ud83e\uddb5\ud83c\udfff"
  }]
}, {
  "slug": "foot",
  "character": "\ud83e\uddb6",
  "unicodeName": "foot",
  "codePoint": "1F9B6",
  "group": "people-body",
  "subGroup": "body-parts",
  "variants": [{
    "slug": "foot-light-skin-tone",
    "character": "\ud83e\uddb6\ud83c\udffb"
  }, {
    "slug": "foot-medium-light-skin-tone",
    "character": "\ud83e\uddb6\ud83c\udffc"
  }, {
    "slug": "foot-medium-skin-tone",
    "character": "\ud83e\uddb6\ud83c\udffd"
  }, {
    "slug": "foot-medium-dark-skin-tone",
    "character": "\ud83e\uddb6\ud83c\udffe"
  }, {
    "slug": "foot-dark-skin-tone",
    "character": "\ud83e\uddb6\ud83c\udfff"
  }]
}, {
  "slug": "ear",
  "character": "\ud83d\udc42",
  "unicodeName": "ear",
  "codePoint": "1F442",
  "group": "people-body",
  "subGroup": "body-parts",
  "variants": [{
    "slug": "ear-light-skin-tone",
    "character": "\ud83d\udc42\ud83c\udffb"
  }, {
    "slug": "ear-medium-light-skin-tone",
    "character": "\ud83d\udc42\ud83c\udffc"
  }, {
    "slug": "ear-medium-skin-tone",
    "character": "\ud83d\udc42\ud83c\udffd"
  }, {
    "slug": "ear-medium-dark-skin-tone",
    "character": "\ud83d\udc42\ud83c\udffe"
  }, {
    "slug": "ear-dark-skin-tone",
    "character": "\ud83d\udc42\ud83c\udfff"
  }]
}, {
  "slug": "ear-with-hearing-aid",
  "character": "\ud83e\uddbb",
  "unicodeName": "ear with hearing aid",
  "codePoint": "1F9BB",
  "group": "people-body",
  "subGroup": "body-parts",
  "variants": [{
    "slug": "ear-with-hearing-aid-light-skin-tone",
    "character": "\ud83e\uddbb\ud83c\udffb"
  }, {
    "slug": "ear-with-hearing-aid-medium-light-skin-tone",
    "character": "\ud83e\uddbb\ud83c\udffc"
  }, {
    "slug": "ear-with-hearing-aid-medium-skin-tone",
    "character": "\ud83e\uddbb\ud83c\udffd"
  }, {
    "slug": "ear-with-hearing-aid-medium-dark-skin-tone",
    "character": "\ud83e\uddbb\ud83c\udffe"
  }, {
    "slug": "ear-with-hearing-aid-dark-skin-tone",
    "character": "\ud83e\uddbb\ud83c\udfff"
  }]
}, {
  "slug": "nose",
  "character": "\ud83d\udc43",
  "unicodeName": "nose",
  "codePoint": "1F443",
  "group": "people-body",
  "subGroup": "body-parts",
  "variants": [{
    "slug": "nose-light-skin-tone",
    "character": "\ud83d\udc43\ud83c\udffb"
  }, {
    "slug": "nose-medium-light-skin-tone",
    "character": "\ud83d\udc43\ud83c\udffc"
  }, {
    "slug": "nose-medium-skin-tone",
    "character": "\ud83d\udc43\ud83c\udffd"
  }, {
    "slug": "nose-medium-dark-skin-tone",
    "character": "\ud83d\udc43\ud83c\udffe"
  }, {
    "slug": "nose-dark-skin-tone",
    "character": "\ud83d\udc43\ud83c\udfff"
  }]
}, {
  "slug": "brain",
  "character": "\ud83e\udde0",
  "unicodeName": "brain",
  "codePoint": "1F9E0",
  "group": "people-body",
  "subGroup": "body-parts"
}, {
  "slug": "tooth",
  "character": "\ud83e\uddb7",
  "unicodeName": "tooth",
  "codePoint": "1F9B7",
  "group": "people-body",
  "subGroup": "body-parts"
}, {
  "slug": "bone",
  "character": "\ud83e\uddb4",
  "unicodeName": "bone",
  "codePoint": "1F9B4",
  "group": "people-body",
  "subGroup": "body-parts"
}, {
  "slug": "eyes",
  "character": "\ud83d\udc40",
  "unicodeName": "eyes",
  "codePoint": "1F440",
  "group": "people-body",
  "subGroup": "body-parts"
}, {
  "slug": "eye",
  "character": "\ud83d\udc41\ufe0f",
  "unicodeName": "eye",
  "codePoint": "1F441 FE0F",
  "group": "people-body",
  "subGroup": "body-parts"
}, {
  "slug": "tongue",
  "character": "\ud83d\udc45",
  "unicodeName": "tongue",
  "codePoint": "1F445",
  "group": "people-body",
  "subGroup": "body-parts"
}, {
  "slug": "mouth",
  "character": "\ud83d\udc44",
  "unicodeName": "mouth",
  "codePoint": "1F444",
  "group": "people-body",
  "subGroup": "body-parts"
}, {
  "slug": "baby",
  "character": "\ud83d\udc76",
  "unicodeName": "baby",
  "codePoint": "1F476",
  "group": "people-body",
  "subGroup": "person",
  "variants": [{
    "slug": "baby-light-skin-tone",
    "character": "\ud83d\udc76\ud83c\udffb"
  }, {
    "slug": "baby-medium-light-skin-tone",
    "character": "\ud83d\udc76\ud83c\udffc"
  }, {
    "slug": "baby-medium-skin-tone",
    "character": "\ud83d\udc76\ud83c\udffd"
  }, {
    "slug": "baby-medium-dark-skin-tone",
    "character": "\ud83d\udc76\ud83c\udffe"
  }, {
    "slug": "baby-dark-skin-tone",
    "character": "\ud83d\udc76\ud83c\udfff"
  }]
}, {
  "slug": "child",
  "character": "\ud83e\uddd2",
  "unicodeName": "child",
  "codePoint": "1F9D2",
  "group": "people-body",
  "subGroup": "person",
  "variants": [{
    "slug": "child-light-skin-tone",
    "character": "\ud83e\uddd2\ud83c\udffb"
  }, {
    "slug": "child-medium-light-skin-tone",
    "character": "\ud83e\uddd2\ud83c\udffc"
  }, {
    "slug": "child-medium-skin-tone",
    "character": "\ud83e\uddd2\ud83c\udffd"
  }, {
    "slug": "child-medium-dark-skin-tone",
    "character": "\ud83e\uddd2\ud83c\udffe"
  }, {
    "slug": "child-dark-skin-tone",
    "character": "\ud83e\uddd2\ud83c\udfff"
  }]
}, {
  "slug": "boy",
  "character": "\ud83d\udc66",
  "unicodeName": "boy",
  "codePoint": "1F466",
  "group": "people-body",
  "subGroup": "person",
  "variants": [{
    "slug": "boy-light-skin-tone",
    "character": "\ud83d\udc66\ud83c\udffb"
  }, {
    "slug": "boy-medium-light-skin-tone",
    "character": "\ud83d\udc66\ud83c\udffc"
  }, {
    "slug": "boy-medium-skin-tone",
    "character": "\ud83d\udc66\ud83c\udffd"
  }, {
    "slug": "boy-medium-dark-skin-tone",
    "character": "\ud83d\udc66\ud83c\udffe"
  }, {
    "slug": "boy-dark-skin-tone",
    "character": "\ud83d\udc66\ud83c\udfff"
  }]
}, {
  "slug": "girl",
  "character": "\ud83d\udc67",
  "unicodeName": "girl",
  "codePoint": "1F467",
  "group": "people-body",
  "subGroup": "person",
  "variants": [{
    "slug": "girl-light-skin-tone",
    "character": "\ud83d\udc67\ud83c\udffb"
  }, {
    "slug": "girl-medium-light-skin-tone",
    "character": "\ud83d\udc67\ud83c\udffc"
  }, {
    "slug": "girl-medium-skin-tone",
    "character": "\ud83d\udc67\ud83c\udffd"
  }, {
    "slug": "girl-medium-dark-skin-tone",
    "character": "\ud83d\udc67\ud83c\udffe"
  }, {
    "slug": "girl-dark-skin-tone",
    "character": "\ud83d\udc67\ud83c\udfff"
  }]
}, {
  "slug": "person",
  "character": "\ud83e\uddd1",
  "unicodeName": "person",
  "codePoint": "1F9D1",
  "group": "people-body",
  "subGroup": "person",
  "variants": [{
    "slug": "person-light-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffb"
  }, {
    "slug": "person-medium-light-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffc"
  }, {
    "slug": "person-medium-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffd"
  }, {
    "slug": "person-medium-dark-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffe"
  }, {
    "slug": "person-dark-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udfff"
  }, {
    "slug": "people-holding-hands-light-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb"
  }, {
    "slug": "people-holding-hands-medium-light-skin-tone-light-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb"
  }, {
    "slug": "people-holding-hands-medium-light-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffc"
  }, {
    "slug": "people-holding-hands-medium-skin-tone-light-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb"
  }, {
    "slug": "people-holding-hands-medium-skin-tone-medium-light-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffc"
  }, {
    "slug": "people-holding-hands-medium-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffd"
  }, {
    "slug": "people-holding-hands-medium-dark-skin-tone-light-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb"
  }, {
    "slug": "people-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffc"
  }, {
    "slug": "people-holding-hands-medium-dark-skin-tone-medium-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffd"
  }, {
    "slug": "people-holding-hands-medium-dark-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffe"
  }, {
    "slug": "people-holding-hands-dark-skin-tone-light-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb"
  }, {
    "slug": "people-holding-hands-dark-skin-tone-medium-light-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffc"
  }, {
    "slug": "people-holding-hands-dark-skin-tone-medium-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffd"
  }, {
    "slug": "people-holding-hands-dark-skin-tone-medium-dark-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffe"
  }, {
    "slug": "people-holding-hands-dark-skin-tone",
    "character": "\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udfff"
  }]
}, {
  "slug": "person-blond-hair",
  "character": "\ud83d\udc71",
  "unicodeName": "person: blond hair",
  "codePoint": "1F471",
  "group": "people-body",
  "subGroup": "person",
  "variants": [{
    "slug": "person-light-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udffb"
  }, {
    "slug": "person-medium-light-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udffc"
  }, {
    "slug": "person-medium-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udffd"
  }, {
    "slug": "person-medium-dark-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udffe"
  }, {
    "slug": "person-dark-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udfff"
  }, {
    "slug": "man-light-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-medium-light-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-medium-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-medium-dark-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-dark-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-light-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-medium-light-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-medium-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-medium-dark-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-dark-skin-tone-blond-hair",
    "character": "\ud83d\udc71\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "man",
  "character": "\ud83d\udc68",
  "unicodeName": "man",
  "codePoint": "1F468",
  "group": "people-body",
  "subGroup": "person",
  "variants": [{
    "slug": "man-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb"
  }, {
    "slug": "man-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc"
  }, {
    "slug": "man-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd"
  }, {
    "slug": "man-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe"
  }, {
    "slug": "man-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff"
  }, {
    "slug": "man-light-skin-tone-red-hair",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb0"
  }, {
    "slug": "man-medium-light-skin-tone-red-hair",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddb0"
  }, {
    "slug": "man-medium-skin-tone-red-hair",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb0"
  }, {
    "slug": "man-medium-dark-skin-tone-red-hair",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb0"
  }, {
    "slug": "man-dark-skin-tone-red-hair",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb0"
  }, {
    "slug": "man-curly-hair",
    "character": "\ud83d\udc68\u200d\ud83e\uddb1"
  }, {
    "slug": "man-light-skin-tone-curly-hair",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1"
  }, {
    "slug": "man-medium-light-skin-tone-curly-hair",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddb1"
  }, {
    "slug": "man-medium-skin-tone-curly-hair",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1"
  }, {
    "slug": "man-medium-dark-skin-tone-curly-hair",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"
  }, {
    "slug": "man-dark-skin-tone-curly-hair",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1"
  }, {
    "slug": "man-white-hair",
    "character": "\ud83d\udc68\u200d\ud83e\uddb3"
  }, {
    "slug": "man-light-skin-tone-white-hair",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb3"
  }, {
    "slug": "man-medium-light-skin-tone-white-hair",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddb3"
  }, {
    "slug": "man-medium-skin-tone-white-hair",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb3"
  }, {
    "slug": "man-medium-dark-skin-tone-white-hair",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb3"
  }, {
    "slug": "man-dark-skin-tone-white-hair",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb3"
  }, {
    "slug": "man-bald",
    "character": "\ud83d\udc68\u200d\ud83e\uddb2"
  }, {
    "slug": "man-light-skin-tone-bald",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb2"
  }, {
    "slug": "man-medium-light-skin-tone-bald",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddb2"
  }, {
    "slug": "man-medium-skin-tone-bald",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb2"
  }, {
    "slug": "man-medium-dark-skin-tone-bald",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2"
  }, {
    "slug": "man-dark-skin-tone-bald",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2"
  }, {
    "slug": "man-health-worker-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"
  }, {
    "slug": "man-health-worker-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\u2695\ufe0f"
  }, {
    "slug": "man-health-worker-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\u2695\ufe0f"
  }, {
    "slug": "man-health-worker-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\u2695\ufe0f"
  }, {
    "slug": "man-health-worker-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\u2695\ufe0f"
  }, {
    "slug": "man-student-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"
  }, {
    "slug": "man-student-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83c\udf93"
  }, {
    "slug": "man-student-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"
  }, {
    "slug": "man-student-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93"
  }, {
    "slug": "man-student-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83c\udf93"
  }, {
    "slug": "man-teacher-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfeb"
  }, {
    "slug": "man-teacher-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83c\udfeb"
  }, {
    "slug": "man-teacher-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83c\udfeb"
  }, {
    "slug": "man-teacher-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83c\udfeb"
  }, {
    "slug": "man-teacher-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83c\udfeb"
  }, {
    "slug": "man-judge-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\u2696\ufe0f"
  }, {
    "slug": "man-judge-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\u2696\ufe0f"
  }, {
    "slug": "man-judge-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\u2696\ufe0f"
  }, {
    "slug": "man-judge-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\u2696\ufe0f"
  }, {
    "slug": "man-judge-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\u2696\ufe0f"
  }, {
    "slug": "man-farmer-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf3e"
  }, {
    "slug": "man-farmer-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83c\udf3e"
  }, {
    "slug": "man-farmer-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf3e"
  }, {
    "slug": "man-farmer-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf3e"
  }, {
    "slug": "man-farmer-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83c\udf3e"
  }, {
    "slug": "man-cook-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf73"
  }, {
    "slug": "man-cook-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83c\udf73"
  }, {
    "slug": "man-cook-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf73"
  }, {
    "slug": "man-cook-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf73"
  }, {
    "slug": "man-cook-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83c\udf73"
  }, {
    "slug": "man-mechanic-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83d\udd27"
  }, {
    "slug": "man-mechanic-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83d\udd27"
  }, {
    "slug": "man-mechanic-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83d\udd27"
  }, {
    "slug": "man-mechanic-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83d\udd27"
  }, {
    "slug": "man-mechanic-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83d\udd27"
  }, {
    "slug": "man-factory-worker-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfed"
  }, {
    "slug": "man-factory-worker-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83c\udfed"
  }, {
    "slug": "man-factory-worker-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83c\udfed"
  }, {
    "slug": "man-factory-worker-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83c\udfed"
  }, {
    "slug": "man-factory-worker-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83c\udfed"
  }, {
    "slug": "man-office-worker-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbc"
  }, {
    "slug": "man-office-worker-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83d\udcbc"
  }, {
    "slug": "man-office-worker-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc"
  }, {
    "slug": "man-office-worker-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc"
  }, {
    "slug": "man-office-worker-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc"
  }, {
    "slug": "man-scientist-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83d\udd2c"
  }, {
    "slug": "man-scientist-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83d\udd2c"
  }, {
    "slug": "man-scientist-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83d\udd2c"
  }, {
    "slug": "man-scientist-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83d\udd2c"
  }, {
    "slug": "man-scientist-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83d\udd2c"
  }, {
    "slug": "man-technologist-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb"
  }, {
    "slug": "man-technologist-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83d\udcbb"
  }, {
    "slug": "man-technologist-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb"
  }, {
    "slug": "man-technologist-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbb"
  }, {
    "slug": "man-technologist-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbb"
  }, {
    "slug": "man-singer-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfa4"
  }, {
    "slug": "man-singer-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83c\udfa4"
  }, {
    "slug": "man-singer-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83c\udfa4"
  }, {
    "slug": "man-singer-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83c\udfa4"
  }, {
    "slug": "man-singer-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83c\udfa4"
  }, {
    "slug": "man-artist-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83c\udfa8"
  }, {
    "slug": "man-artist-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83c\udfa8"
  }, {
    "slug": "man-artist-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83c\udfa8"
  }, {
    "slug": "man-artist-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83c\udfa8"
  }, {
    "slug": "man-artist-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83c\udfa8"
  }, {
    "slug": "man-pilot-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\u2708\ufe0f"
  }, {
    "slug": "man-pilot-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\u2708\ufe0f"
  }, {
    "slug": "man-pilot-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\u2708\ufe0f"
  }, {
    "slug": "man-pilot-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\u2708\ufe0f"
  }, {
    "slug": "man-pilot-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\u2708\ufe0f"
  }, {
    "slug": "man-astronaut-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83d\ude80"
  }, {
    "slug": "man-astronaut-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83d\ude80"
  }, {
    "slug": "man-astronaut-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83d\ude80"
  }, {
    "slug": "man-astronaut-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83d\ude80"
  }, {
    "slug": "man-astronaut-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83d\ude80"
  }, {
    "slug": "man-firefighter-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83d\ude92"
  }, {
    "slug": "man-firefighter-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83d\ude92"
  }, {
    "slug": "man-firefighter-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83d\ude92"
  }, {
    "slug": "man-firefighter-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83d\ude92"
  }, {
    "slug": "man-firefighter-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83d\ude92"
  }, {
    "slug": "man-with-probing-cane-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddaf"
  }, {
    "slug": "man-with-probing-cane-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddaf"
  }, {
    "slug": "man-with-probing-cane-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddaf"
  }, {
    "slug": "man-with-probing-cane-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddaf"
  }, {
    "slug": "man-with-probing-cane-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddaf"
  }, {
    "slug": "man-in-motorized-wheelchair-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddbc"
  }, {
    "slug": "man-in-motorized-wheelchair-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddbc"
  }, {
    "slug": "man-in-motorized-wheelchair-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddbc"
  }, {
    "slug": "man-in-motorized-wheelchair-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddbc"
  }, {
    "slug": "man-in-motorized-wheelchair-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddbc"
  }, {
    "slug": "man-in-manual-wheelchair-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddbd"
  }, {
    "slug": "man-in-manual-wheelchair-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83e\uddbd"
  }, {
    "slug": "man-in-manual-wheelchair-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddbd"
  }, {
    "slug": "man-in-manual-wheelchair-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddbd"
  }, {
    "slug": "man-in-manual-wheelchair-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddbd"
  }, {
    "slug": "men-holding-hands-medium-skin-tone-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffc"
  }, {
    "slug": "men-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffc"
  }, {
    "slug": "men-holding-hands-medium-dark-skin-tone-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffd"
  }, {
    "slug": "men-holding-hands-dark-skin-tone-medium-light-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffc"
  }, {
    "slug": "men-holding-hands-dark-skin-tone-medium-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffd"
  }, {
    "slug": "men-holding-hands-dark-skin-tone-medium-dark-skin-tone",
    "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffe"
  }, {
    "slug": "family-man-woman-girl",
    "character": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67"
  }, {
    "slug": "family-man-woman-girl-boy",
    "character": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"
  }, {
    "slug": "family-man-woman-boy-boy",
    "character": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66"
  }, {
    "slug": "family-man-woman-girl-girl",
    "character": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67"
  }, {
    "slug": "family-man-man-boy",
    "character": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66"
  }, {
    "slug": "family-man-man-girl",
    "character": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67"
  }, {
    "slug": "family-man-man-girl-boy",
    "character": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66"
  }, {
    "slug": "family-man-man-boy-boy",
    "character": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66"
  }, {
    "slug": "family-man-man-girl-girl",
    "character": "\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67"
  }, {
    "slug": "family-man-boy-boy",
    "character": "\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66"
  }, {
    "slug": "family-man-girl",
    "character": "\ud83d\udc68\u200d\ud83d\udc67"
  }, {
    "slug": "family-man-girl-boy",
    "character": "\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66"
  }, {
    "slug": "family-man-girl-girl",
    "character": "\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67"
  }]
}, {
  "slug": "man-beard",
  "character": "\ud83e\uddd4",
  "unicodeName": "man: beard",
  "codePoint": "1F9D4",
  "group": "people-body",
  "subGroup": "person",
  "variants": [{
    "slug": "man-light-skin-tone-beard",
    "character": "\ud83e\uddd4\ud83c\udffb"
  }, {
    "slug": "man-medium-light-skin-tone-beard",
    "character": "\ud83e\uddd4\ud83c\udffc"
  }, {
    "slug": "man-medium-skin-tone-beard",
    "character": "\ud83e\uddd4\ud83c\udffd"
  }, {
    "slug": "man-medium-dark-skin-tone-beard",
    "character": "\ud83e\uddd4\ud83c\udffe"
  }, {
    "slug": "man-dark-skin-tone-beard",
    "character": "\ud83e\uddd4\ud83c\udfff"
  }]
}, {
  "slug": "man-blond-hair",
  "character": "\ud83d\udc71\u200d\u2642\ufe0f",
  "unicodeName": "man: blond hair",
  "codePoint": "1F471 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person"
}, {
  "slug": "man-red-hair",
  "character": "\ud83d\udc68\u200d\ud83e\uddb0",
  "unicodeName": "man: red hair",
  "codePoint": "1F468 200D 1F9B0",
  "group": "people-body",
  "subGroup": "person"
}, {
  "slug": "woman",
  "character": "\ud83d\udc69",
  "unicodeName": "woman",
  "codePoint": "1F469",
  "group": "people-body",
  "subGroup": "person",
  "variants": [{
    "slug": "woman-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb"
  }, {
    "slug": "woman-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc"
  }, {
    "slug": "woman-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd"
  }, {
    "slug": "woman-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe"
  }, {
    "slug": "woman-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff"
  }, {
    "slug": "woman-light-skin-tone-red-hair",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb0"
  }, {
    "slug": "woman-medium-light-skin-tone-red-hair",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddb0"
  }, {
    "slug": "woman-medium-skin-tone-red-hair",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb0"
  }, {
    "slug": "woman-medium-dark-skin-tone-red-hair",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb0"
  }, {
    "slug": "woman-dark-skin-tone-red-hair",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb0"
  }, {
    "slug": "woman-curly-hair",
    "character": "\ud83d\udc69\u200d\ud83e\uddb1"
  }, {
    "slug": "woman-light-skin-tone-curly-hair",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1"
  }, {
    "slug": "woman-medium-light-skin-tone-curly-hair",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddb1"
  }, {
    "slug": "woman-medium-skin-tone-curly-hair",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1"
  }, {
    "slug": "woman-medium-dark-skin-tone-curly-hair",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
  }, {
    "slug": "woman-dark-skin-tone-curly-hair",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1"
  }, {
    "slug": "woman-white-hair",
    "character": "\ud83d\udc69\u200d\ud83e\uddb3"
  }, {
    "slug": "woman-light-skin-tone-white-hair",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb3"
  }, {
    "slug": "woman-medium-light-skin-tone-white-hair",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddb3"
  }, {
    "slug": "woman-medium-skin-tone-white-hair",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb3"
  }, {
    "slug": "woman-medium-dark-skin-tone-white-hair",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3"
  }, {
    "slug": "woman-dark-skin-tone-white-hair",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3"
  }, {
    "slug": "woman-bald",
    "character": "\ud83d\udc69\u200d\ud83e\uddb2"
  }, {
    "slug": "woman-light-skin-tone-bald",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb2"
  }, {
    "slug": "woman-medium-light-skin-tone-bald",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddb2"
  }, {
    "slug": "woman-medium-skin-tone-bald",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb2"
  }, {
    "slug": "woman-medium-dark-skin-tone-bald",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb2"
  }, {
    "slug": "woman-dark-skin-tone-bald",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb2"
  }, {
    "slug": "woman-health-worker-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\u2695\ufe0f"
  }, {
    "slug": "woman-health-worker-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\u2695\ufe0f"
  }, {
    "slug": "woman-health-worker-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\u2695\ufe0f"
  }, {
    "slug": "woman-health-worker-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\u2695\ufe0f"
  }, {
    "slug": "woman-health-worker-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\u2695\ufe0f"
  }, {
    "slug": "woman-student-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83c\udf93"
  }, {
    "slug": "woman-student-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83c\udf93"
  }, {
    "slug": "woman-student-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"
  }, {
    "slug": "woman-student-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93"
  }, {
    "slug": "woman-student-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83c\udf93"
  }, {
    "slug": "woman-teacher-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83c\udfeb"
  }, {
    "slug": "woman-teacher-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83c\udfeb"
  }, {
    "slug": "woman-teacher-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83c\udfeb"
  }, {
    "slug": "woman-teacher-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83c\udfeb"
  }, {
    "slug": "woman-teacher-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83c\udfeb"
  }, {
    "slug": "woman-judge-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\u2696\ufe0f"
  }, {
    "slug": "woman-judge-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\u2696\ufe0f"
  }, {
    "slug": "woman-judge-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\u2696\ufe0f"
  }, {
    "slug": "woman-judge-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\u2696\ufe0f"
  }, {
    "slug": "woman-judge-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\u2696\ufe0f"
  }, {
    "slug": "woman-farmer-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83c\udf3e"
  }, {
    "slug": "woman-farmer-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83c\udf3e"
  }, {
    "slug": "woman-farmer-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf3e"
  }, {
    "slug": "woman-farmer-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf3e"
  }, {
    "slug": "woman-farmer-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83c\udf3e"
  }, {
    "slug": "woman-cook-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83c\udf73"
  }, {
    "slug": "woman-cook-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83c\udf73"
  }, {
    "slug": "woman-cook-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf73"
  }, {
    "slug": "woman-cook-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf73"
  }, {
    "slug": "woman-cook-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83c\udf73"
  }, {
    "slug": "woman-mechanic-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83d\udd27"
  }, {
    "slug": "woman-mechanic-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83d\udd27"
  }, {
    "slug": "woman-mechanic-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83d\udd27"
  }, {
    "slug": "woman-mechanic-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83d\udd27"
  }, {
    "slug": "woman-mechanic-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83d\udd27"
  }, {
    "slug": "woman-factory-worker-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83c\udfed"
  }, {
    "slug": "woman-factory-worker-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83c\udfed"
  }, {
    "slug": "woman-factory-worker-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83c\udfed"
  }, {
    "slug": "woman-factory-worker-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83c\udfed"
  }, {
    "slug": "woman-factory-worker-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83c\udfed"
  }, {
    "slug": "woman-office-worker-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbc"
  }, {
    "slug": "woman-office-worker-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbc"
  }, {
    "slug": "woman-office-worker-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc"
  }, {
    "slug": "woman-office-worker-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc"
  }, {
    "slug": "woman-office-worker-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc"
  }, {
    "slug": "woman-scientist-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83d\udd2c"
  }, {
    "slug": "woman-scientist-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83d\udd2c"
  }, {
    "slug": "woman-scientist-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83d\udd2c"
  }, {
    "slug": "woman-scientist-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83d\udd2c"
  }, {
    "slug": "woman-scientist-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83d\udd2c"
  }, {
    "slug": "woman-technologist-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83d\udcbb"
  }, {
    "slug": "woman-technologist-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83d\udcbb"
  }, {
    "slug": "woman-technologist-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbb"
  }, {
    "slug": "woman-technologist-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbb"
  }, {
    "slug": "woman-technologist-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbb"
  }, {
    "slug": "woman-singer-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83c\udfa4"
  }, {
    "slug": "woman-singer-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83c\udfa4"
  }, {
    "slug": "woman-singer-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83c\udfa4"
  }, {
    "slug": "woman-singer-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83c\udfa4"
  }, {
    "slug": "woman-singer-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83c\udfa4"
  }, {
    "slug": "woman-artist-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83c\udfa8"
  }, {
    "slug": "woman-artist-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83c\udfa8"
  }, {
    "slug": "woman-artist-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83c\udfa8"
  }, {
    "slug": "woman-artist-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83c\udfa8"
  }, {
    "slug": "woman-artist-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83c\udfa8"
  }, {
    "slug": "woman-pilot-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\u2708\ufe0f"
  }, {
    "slug": "woman-pilot-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\u2708\ufe0f"
  }, {
    "slug": "woman-pilot-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\u2708\ufe0f"
  }, {
    "slug": "woman-pilot-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\u2708\ufe0f"
  }, {
    "slug": "woman-pilot-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\u2708\ufe0f"
  }, {
    "slug": "woman-astronaut-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83d\ude80"
  }, {
    "slug": "woman-astronaut-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83d\ude80"
  }, {
    "slug": "woman-astronaut-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83d\ude80"
  }, {
    "slug": "woman-astronaut-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83d\ude80"
  }, {
    "slug": "woman-astronaut-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83d\ude80"
  }, {
    "slug": "woman-firefighter-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83d\ude92"
  }, {
    "slug": "woman-firefighter-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83d\ude92"
  }, {
    "slug": "woman-firefighter-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83d\ude92"
  }, {
    "slug": "woman-firefighter-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83d\ude92"
  }, {
    "slug": "woman-firefighter-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83d\ude92"
  }, {
    "slug": "woman-with-probing-cane-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddaf"
  }, {
    "slug": "woman-with-probing-cane-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddaf"
  }, {
    "slug": "woman-with-probing-cane-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddaf"
  }, {
    "slug": "woman-with-probing-cane-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddaf"
  }, {
    "slug": "woman-with-probing-cane-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddaf"
  }, {
    "slug": "woman-in-motorized-wheelchair-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddbc"
  }, {
    "slug": "woman-in-motorized-wheelchair-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddbc"
  }, {
    "slug": "woman-in-motorized-wheelchair-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddbc"
  }, {
    "slug": "woman-in-motorized-wheelchair-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddbc"
  }, {
    "slug": "woman-in-motorized-wheelchair-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddbc"
  }, {
    "slug": "woman-in-manual-wheelchair-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddbd"
  }, {
    "slug": "woman-in-manual-wheelchair-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83e\uddbd"
  }, {
    "slug": "woman-in-manual-wheelchair-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddbd"
  }, {
    "slug": "woman-in-manual-wheelchair-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddbd"
  }, {
    "slug": "woman-in-manual-wheelchair-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddbd"
  }, {
    "slug": "women-holding-hands-medium-skin-tone-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffc"
  }, {
    "slug": "women-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffc"
  }, {
    "slug": "women-holding-hands-medium-dark-skin-tone-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffd"
  }, {
    "slug": "women-holding-hands-dark-skin-tone-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffc"
  }, {
    "slug": "women-holding-hands-dark-skin-tone-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffd"
  }, {
    "slug": "women-holding-hands-dark-skin-tone-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffe"
  }, {
    "slug": "woman-and-man-holding-hands-light-skin-tone-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffd"
  }, {
    "slug": "woman-and-man-holding-hands-light-skin-tone-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffe"
  }, {
    "slug": "woman-and-man-holding-hands-light-skin-tone-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udfff"
  }, {
    "slug": "woman-and-man-holding-hands-medium-light-skin-tone-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb"
  }, {
    "slug": "woman-and-man-holding-hands-medium-light-skin-tone-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffe"
  }, {
    "slug": "woman-and-man-holding-hands-medium-light-skin-tone-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udfff"
  }, {
    "slug": "woman-and-man-holding-hands-medium-skin-tone-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb"
  }, {
    "slug": "woman-and-man-holding-hands-medium-skin-tone-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffc"
  }, {
    "slug": "woman-and-man-holding-hands-medium-skin-tone-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udfff"
  }, {
    "slug": "woman-and-man-holding-hands-medium-dark-skin-tone-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb"
  }, {
    "slug": "woman-and-man-holding-hands-medium-dark-skin-tone-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffc"
  }, {
    "slug": "woman-and-man-holding-hands-medium-dark-skin-tone-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffd"
  }, {
    "slug": "woman-and-man-holding-hands-dark-skin-tone-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb"
  }, {
    "slug": "woman-and-man-holding-hands-dark-skin-tone-medium-light-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffc"
  }, {
    "slug": "woman-and-man-holding-hands-dark-skin-tone-medium-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffd"
  }, {
    "slug": "woman-and-man-holding-hands-dark-skin-tone-medium-dark-skin-tone",
    "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffe"
  }, {
    "slug": "family-woman-woman-girl",
    "character": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67"
  }, {
    "slug": "family-woman-woman-girl-boy",
    "character": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"
  }, {
    "slug": "family-woman-woman-boy-boy",
    "character": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66"
  }, {
    "slug": "family-woman-woman-girl-girl",
    "character": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67"
  }, {
    "slug": "family-woman-boy-boy",
    "character": "\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66"
  }, {
    "slug": "family-woman-girl",
    "character": "\ud83d\udc69\u200d\ud83d\udc67"
  }, {
    "slug": "family-woman-girl-boy",
    "character": "\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"
  }, {
    "slug": "family-woman-girl-girl",
    "character": "\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67"
  }]
}, {
  "slug": "woman-blond-hair",
  "character": "\ud83d\udc71\u200d\u2640\ufe0f",
  "unicodeName": "woman: blond hair",
  "codePoint": "1F471 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person"
}, {
  "slug": "woman-red-hair",
  "character": "\ud83d\udc69\u200d\ud83e\uddb0",
  "unicodeName": "woman: red hair",
  "codePoint": "1F469 200D 1F9B0",
  "group": "people-body",
  "subGroup": "person"
}, {
  "slug": "older-person",
  "character": "\ud83e\uddd3",
  "unicodeName": "older person",
  "codePoint": "1F9D3",
  "group": "people-body",
  "subGroup": "person",
  "variants": [{
    "slug": "older-person-light-skin-tone",
    "character": "\ud83e\uddd3\ud83c\udffb"
  }, {
    "slug": "older-person-medium-light-skin-tone",
    "character": "\ud83e\uddd3\ud83c\udffc"
  }, {
    "slug": "older-person-medium-skin-tone",
    "character": "\ud83e\uddd3\ud83c\udffd"
  }, {
    "slug": "older-person-medium-dark-skin-tone",
    "character": "\ud83e\uddd3\ud83c\udffe"
  }, {
    "slug": "older-person-dark-skin-tone",
    "character": "\ud83e\uddd3\ud83c\udfff"
  }]
}, {
  "slug": "old-man",
  "character": "\ud83d\udc74",
  "unicodeName": "old man",
  "codePoint": "1F474",
  "group": "people-body",
  "subGroup": "person",
  "variants": [{
    "slug": "old-man-light-skin-tone",
    "character": "\ud83d\udc74\ud83c\udffb"
  }, {
    "slug": "old-man-medium-light-skin-tone",
    "character": "\ud83d\udc74\ud83c\udffc"
  }, {
    "slug": "old-man-medium-skin-tone",
    "character": "\ud83d\udc74\ud83c\udffd"
  }, {
    "slug": "old-man-medium-dark-skin-tone",
    "character": "\ud83d\udc74\ud83c\udffe"
  }, {
    "slug": "old-man-dark-skin-tone",
    "character": "\ud83d\udc74\ud83c\udfff"
  }]
}, {
  "slug": "old-woman",
  "character": "\ud83d\udc75",
  "unicodeName": "old woman",
  "codePoint": "1F475",
  "group": "people-body",
  "subGroup": "person",
  "variants": [{
    "slug": "old-woman-light-skin-tone",
    "character": "\ud83d\udc75\ud83c\udffb"
  }, {
    "slug": "old-woman-medium-light-skin-tone",
    "character": "\ud83d\udc75\ud83c\udffc"
  }, {
    "slug": "old-woman-medium-skin-tone",
    "character": "\ud83d\udc75\ud83c\udffd"
  }, {
    "slug": "old-woman-medium-dark-skin-tone",
    "character": "\ud83d\udc75\ud83c\udffe"
  }, {
    "slug": "old-woman-dark-skin-tone",
    "character": "\ud83d\udc75\ud83c\udfff"
  }]
}, {
  "slug": "person-frowning",
  "character": "\ud83d\ude4d",
  "unicodeName": "person frowning",
  "codePoint": "1F64D",
  "group": "people-body",
  "subGroup": "person-gesture",
  "variants": [{
    "slug": "person-frowning-light-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udffb"
  }, {
    "slug": "person-frowning-medium-light-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udffc"
  }, {
    "slug": "person-frowning-medium-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udffd"
  }, {
    "slug": "person-frowning-medium-dark-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udffe"
  }, {
    "slug": "person-frowning-dark-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udfff"
  }, {
    "slug": "man-frowning",
    "character": "\ud83d\ude4d\u200d\u2642\ufe0f"
  }, {
    "slug": "man-frowning-light-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-frowning-medium-light-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-frowning-medium-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-frowning-medium-dark-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-frowning-dark-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-frowning",
    "character": "\ud83d\ude4d\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-frowning-light-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-frowning-medium-light-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-frowning-medium-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-frowning-medium-dark-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-frowning-dark-skin-tone",
    "character": "\ud83d\ude4d\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-pouting",
  "character": "\ud83d\ude4e",
  "unicodeName": "person pouting",
  "codePoint": "1F64E",
  "group": "people-body",
  "subGroup": "person-gesture",
  "variants": [{
    "slug": "person-pouting-light-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udffb"
  }, {
    "slug": "person-pouting-medium-light-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udffc"
  }, {
    "slug": "person-pouting-medium-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udffd"
  }, {
    "slug": "person-pouting-medium-dark-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udffe"
  }, {
    "slug": "person-pouting-dark-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udfff"
  }, {
    "slug": "man-pouting",
    "character": "\ud83d\ude4e\u200d\u2642\ufe0f"
  }, {
    "slug": "man-pouting-light-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-pouting-medium-light-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-pouting-medium-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-pouting-medium-dark-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-pouting-dark-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-pouting",
    "character": "\ud83d\ude4e\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-pouting-light-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-pouting-medium-light-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-pouting-medium-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-pouting-medium-dark-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-pouting-dark-skin-tone",
    "character": "\ud83d\ude4e\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-gesturing-no",
  "character": "\ud83d\ude45",
  "unicodeName": "person gesturing NO",
  "codePoint": "1F645",
  "group": "people-body",
  "subGroup": "person-gesture",
  "variants": [{
    "slug": "person-gesturing-no-light-skin-tone",
    "character": "\ud83d\ude45\ud83c\udffb"
  }, {
    "slug": "person-gesturing-no-medium-light-skin-tone",
    "character": "\ud83d\ude45\ud83c\udffc"
  }, {
    "slug": "person-gesturing-no-medium-skin-tone",
    "character": "\ud83d\ude45\ud83c\udffd"
  }, {
    "slug": "person-gesturing-no-medium-dark-skin-tone",
    "character": "\ud83d\ude45\ud83c\udffe"
  }, {
    "slug": "person-gesturing-no-dark-skin-tone",
    "character": "\ud83d\ude45\ud83c\udfff"
  }, {
    "slug": "man-gesturing-no",
    "character": "\ud83d\ude45\u200d\u2642\ufe0f"
  }, {
    "slug": "man-gesturing-no-light-skin-tone",
    "character": "\ud83d\ude45\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-gesturing-no-medium-light-skin-tone",
    "character": "\ud83d\ude45\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-gesturing-no-medium-skin-tone",
    "character": "\ud83d\ude45\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-gesturing-no-medium-dark-skin-tone",
    "character": "\ud83d\ude45\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-gesturing-no-dark-skin-tone",
    "character": "\ud83d\ude45\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-gesturing-no",
    "character": "\ud83d\ude45\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-gesturing-no-light-skin-tone",
    "character": "\ud83d\ude45\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-gesturing-no-medium-light-skin-tone",
    "character": "\ud83d\ude45\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-gesturing-no-medium-skin-tone",
    "character": "\ud83d\ude45\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-gesturing-no-medium-dark-skin-tone",
    "character": "\ud83d\ude45\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-gesturing-no-dark-skin-tone",
    "character": "\ud83d\ude45\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-gesturing-ok",
  "character": "\ud83d\ude46",
  "unicodeName": "person gesturing OK",
  "codePoint": "1F646",
  "group": "people-body",
  "subGroup": "person-gesture",
  "variants": [{
    "slug": "person-gesturing-ok-light-skin-tone",
    "character": "\ud83d\ude46\ud83c\udffb"
  }, {
    "slug": "person-gesturing-ok-medium-light-skin-tone",
    "character": "\ud83d\ude46\ud83c\udffc"
  }, {
    "slug": "person-gesturing-ok-medium-skin-tone",
    "character": "\ud83d\ude46\ud83c\udffd"
  }, {
    "slug": "person-gesturing-ok-medium-dark-skin-tone",
    "character": "\ud83d\ude46\ud83c\udffe"
  }, {
    "slug": "person-gesturing-ok-dark-skin-tone",
    "character": "\ud83d\ude46\ud83c\udfff"
  }, {
    "slug": "man-gesturing-ok",
    "character": "\ud83d\ude46\u200d\u2642\ufe0f"
  }, {
    "slug": "man-gesturing-ok-light-skin-tone",
    "character": "\ud83d\ude46\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-gesturing-ok-medium-light-skin-tone",
    "character": "\ud83d\ude46\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-gesturing-ok-medium-skin-tone",
    "character": "\ud83d\ude46\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-gesturing-ok-medium-dark-skin-tone",
    "character": "\ud83d\ude46\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-gesturing-ok-dark-skin-tone",
    "character": "\ud83d\ude46\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-gesturing-ok",
    "character": "\ud83d\ude46\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-gesturing-ok-light-skin-tone",
    "character": "\ud83d\ude46\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-gesturing-ok-medium-light-skin-tone",
    "character": "\ud83d\ude46\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-gesturing-ok-medium-skin-tone",
    "character": "\ud83d\ude46\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-gesturing-ok-medium-dark-skin-tone",
    "character": "\ud83d\ude46\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-gesturing-ok-dark-skin-tone",
    "character": "\ud83d\ude46\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-tipping-hand",
  "character": "\ud83d\udc81",
  "unicodeName": "person tipping hand",
  "codePoint": "1F481",
  "group": "people-body",
  "subGroup": "person-gesture",
  "variants": [{
    "slug": "person-tipping-hand-light-skin-tone",
    "character": "\ud83d\udc81\ud83c\udffb"
  }, {
    "slug": "person-tipping-hand-medium-light-skin-tone",
    "character": "\ud83d\udc81\ud83c\udffc"
  }, {
    "slug": "person-tipping-hand-medium-skin-tone",
    "character": "\ud83d\udc81\ud83c\udffd"
  }, {
    "slug": "person-tipping-hand-medium-dark-skin-tone",
    "character": "\ud83d\udc81\ud83c\udffe"
  }, {
    "slug": "person-tipping-hand-dark-skin-tone",
    "character": "\ud83d\udc81\ud83c\udfff"
  }, {
    "slug": "man-tipping-hand",
    "character": "\ud83d\udc81\u200d\u2642\ufe0f"
  }, {
    "slug": "man-tipping-hand-light-skin-tone",
    "character": "\ud83d\udc81\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-tipping-hand-medium-light-skin-tone",
    "character": "\ud83d\udc81\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-tipping-hand-medium-skin-tone",
    "character": "\ud83d\udc81\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-tipping-hand-medium-dark-skin-tone",
    "character": "\ud83d\udc81\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-tipping-hand-dark-skin-tone",
    "character": "\ud83d\udc81\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-tipping-hand",
    "character": "\ud83d\udc81\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-tipping-hand-light-skin-tone",
    "character": "\ud83d\udc81\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-tipping-hand-medium-light-skin-tone",
    "character": "\ud83d\udc81\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-tipping-hand-medium-skin-tone",
    "character": "\ud83d\udc81\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-tipping-hand-medium-dark-skin-tone",
    "character": "\ud83d\udc81\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-tipping-hand-dark-skin-tone",
    "character": "\ud83d\udc81\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-raising-hand",
  "character": "\ud83d\ude4b",
  "unicodeName": "person raising hand",
  "codePoint": "1F64B",
  "group": "people-body",
  "subGroup": "person-gesture",
  "variants": [{
    "slug": "person-raising-hand-light-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udffb"
  }, {
    "slug": "person-raising-hand-medium-light-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udffc"
  }, {
    "slug": "person-raising-hand-medium-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udffd"
  }, {
    "slug": "person-raising-hand-medium-dark-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udffe"
  }, {
    "slug": "person-raising-hand-dark-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udfff"
  }, {
    "slug": "man-raising-hand",
    "character": "\ud83d\ude4b\u200d\u2642\ufe0f"
  }, {
    "slug": "man-raising-hand-light-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-raising-hand-medium-light-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-raising-hand-medium-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-raising-hand-medium-dark-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-raising-hand-dark-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-raising-hand",
    "character": "\ud83d\ude4b\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-raising-hand-light-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-raising-hand-medium-light-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-raising-hand-medium-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-raising-hand-medium-dark-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-raising-hand-dark-skin-tone",
    "character": "\ud83d\ude4b\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "deaf-person",
  "character": "\ud83e\uddcf",
  "unicodeName": "deaf person",
  "codePoint": "1F9CF",
  "group": "people-body",
  "subGroup": "person-gesture",
  "variants": [{
    "slug": "deaf-person-light-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udffb"
  }, {
    "slug": "deaf-person-medium-light-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udffc"
  }, {
    "slug": "deaf-person-medium-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udffd"
  }, {
    "slug": "deaf-person-medium-dark-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udffe"
  }, {
    "slug": "deaf-person-dark-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udfff"
  }, {
    "slug": "deaf-man",
    "character": "\ud83e\uddcf\u200d\u2642\ufe0f"
  }, {
    "slug": "deaf-man-light-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "deaf-man-medium-light-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "deaf-man-medium-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "deaf-man-medium-dark-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "deaf-man-dark-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "deaf-woman",
    "character": "\ud83e\uddcf\u200d\u2640\ufe0f"
  }, {
    "slug": "deaf-woman-light-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "deaf-woman-medium-light-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "deaf-woman-medium-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "deaf-woman-medium-dark-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "deaf-woman-dark-skin-tone",
    "character": "\ud83e\uddcf\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-bowing",
  "character": "\ud83d\ude47",
  "unicodeName": "person bowing",
  "codePoint": "1F647",
  "group": "people-body",
  "subGroup": "person-gesture",
  "variants": [{
    "slug": "person-bowing-light-skin-tone",
    "character": "\ud83d\ude47\ud83c\udffb"
  }, {
    "slug": "person-bowing-medium-light-skin-tone",
    "character": "\ud83d\ude47\ud83c\udffc"
  }, {
    "slug": "person-bowing-medium-skin-tone",
    "character": "\ud83d\ude47\ud83c\udffd"
  }, {
    "slug": "person-bowing-medium-dark-skin-tone",
    "character": "\ud83d\ude47\ud83c\udffe"
  }, {
    "slug": "person-bowing-dark-skin-tone",
    "character": "\ud83d\ude47\ud83c\udfff"
  }, {
    "slug": "man-bowing",
    "character": "\ud83d\ude47\u200d\u2642\ufe0f"
  }, {
    "slug": "man-bowing-light-skin-tone",
    "character": "\ud83d\ude47\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-bowing-medium-light-skin-tone",
    "character": "\ud83d\ude47\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-bowing-medium-skin-tone",
    "character": "\ud83d\ude47\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-bowing-medium-dark-skin-tone",
    "character": "\ud83d\ude47\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-bowing-dark-skin-tone",
    "character": "\ud83d\ude47\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-bowing",
    "character": "\ud83d\ude47\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-bowing-light-skin-tone",
    "character": "\ud83d\ude47\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-bowing-medium-light-skin-tone",
    "character": "\ud83d\ude47\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-bowing-medium-skin-tone",
    "character": "\ud83d\ude47\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-bowing-medium-dark-skin-tone",
    "character": "\ud83d\ude47\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-bowing-dark-skin-tone",
    "character": "\ud83d\ude47\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-facepalming",
  "character": "\ud83e\udd26",
  "unicodeName": "person facepalming",
  "codePoint": "1F926",
  "group": "people-body",
  "subGroup": "person-gesture",
  "variants": [{
    "slug": "person-facepalming-light-skin-tone",
    "character": "\ud83e\udd26\ud83c\udffb"
  }, {
    "slug": "person-facepalming-medium-light-skin-tone",
    "character": "\ud83e\udd26\ud83c\udffc"
  }, {
    "slug": "person-facepalming-medium-skin-tone",
    "character": "\ud83e\udd26\ud83c\udffd"
  }, {
    "slug": "person-facepalming-medium-dark-skin-tone",
    "character": "\ud83e\udd26\ud83c\udffe"
  }, {
    "slug": "person-facepalming-dark-skin-tone",
    "character": "\ud83e\udd26\ud83c\udfff"
  }, {
    "slug": "man-facepalming",
    "character": "\ud83e\udd26\u200d\u2642\ufe0f"
  }, {
    "slug": "man-facepalming-light-skin-tone",
    "character": "\ud83e\udd26\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-facepalming-medium-light-skin-tone",
    "character": "\ud83e\udd26\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-facepalming-medium-skin-tone",
    "character": "\ud83e\udd26\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-facepalming-medium-dark-skin-tone",
    "character": "\ud83e\udd26\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-facepalming-dark-skin-tone",
    "character": "\ud83e\udd26\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-facepalming",
    "character": "\ud83e\udd26\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-facepalming-light-skin-tone",
    "character": "\ud83e\udd26\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-facepalming-medium-light-skin-tone",
    "character": "\ud83e\udd26\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-facepalming-medium-skin-tone",
    "character": "\ud83e\udd26\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-facepalming-medium-dark-skin-tone",
    "character": "\ud83e\udd26\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-facepalming-dark-skin-tone",
    "character": "\ud83e\udd26\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-shrugging",
  "character": "\ud83e\udd37",
  "unicodeName": "person shrugging",
  "codePoint": "1F937",
  "group": "people-body",
  "subGroup": "person-gesture",
  "variants": [{
    "slug": "person-shrugging-light-skin-tone",
    "character": "\ud83e\udd37\ud83c\udffb"
  }, {
    "slug": "person-shrugging-medium-light-skin-tone",
    "character": "\ud83e\udd37\ud83c\udffc"
  }, {
    "slug": "person-shrugging-medium-skin-tone",
    "character": "\ud83e\udd37\ud83c\udffd"
  }, {
    "slug": "person-shrugging-medium-dark-skin-tone",
    "character": "\ud83e\udd37\ud83c\udffe"
  }, {
    "slug": "person-shrugging-dark-skin-tone",
    "character": "\ud83e\udd37\ud83c\udfff"
  }, {
    "slug": "man-shrugging",
    "character": "\ud83e\udd37\u200d\u2642\ufe0f"
  }, {
    "slug": "man-shrugging-light-skin-tone",
    "character": "\ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-shrugging-medium-light-skin-tone",
    "character": "\ud83e\udd37\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-shrugging-medium-skin-tone",
    "character": "\ud83e\udd37\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-shrugging-medium-dark-skin-tone",
    "character": "\ud83e\udd37\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-shrugging-dark-skin-tone",
    "character": "\ud83e\udd37\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-shrugging",
    "character": "\ud83e\udd37\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-shrugging-light-skin-tone",
    "character": "\ud83e\udd37\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-shrugging-medium-light-skin-tone",
    "character": "\ud83e\udd37\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-shrugging-medium-skin-tone",
    "character": "\ud83e\udd37\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-shrugging-medium-dark-skin-tone",
    "character": "\ud83e\udd37\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-shrugging-dark-skin-tone",
    "character": "\ud83e\udd37\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "man-health-worker",
  "character": "\ud83d\udc68\u200d\u2695\ufe0f",
  "unicodeName": "man health worker",
  "codePoint": "1F468 200D 2695 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-health-worker",
  "character": "\ud83d\udc69\u200d\u2695\ufe0f",
  "unicodeName": "woman health worker",
  "codePoint": "1F469 200D 2695 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-student",
  "character": "\ud83d\udc68\u200d\ud83c\udf93",
  "unicodeName": "man student",
  "codePoint": "1F468 200D 1F393",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-student",
  "character": "\ud83d\udc69\u200d\ud83c\udf93",
  "unicodeName": "woman student",
  "codePoint": "1F469 200D 1F393",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-teacher",
  "character": "\ud83d\udc68\u200d\ud83c\udfeb",
  "unicodeName": "man teacher",
  "codePoint": "1F468 200D 1F3EB",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-teacher",
  "character": "\ud83d\udc69\u200d\ud83c\udfeb",
  "unicodeName": "woman teacher",
  "codePoint": "1F469 200D 1F3EB",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-judge",
  "character": "\ud83d\udc68\u200d\u2696\ufe0f",
  "unicodeName": "man judge",
  "codePoint": "1F468 200D 2696 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-judge",
  "character": "\ud83d\udc69\u200d\u2696\ufe0f",
  "unicodeName": "woman judge",
  "codePoint": "1F469 200D 2696 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-farmer",
  "character": "\ud83d\udc68\u200d\ud83c\udf3e",
  "unicodeName": "man farmer",
  "codePoint": "1F468 200D 1F33E",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-farmer",
  "character": "\ud83d\udc69\u200d\ud83c\udf3e",
  "unicodeName": "woman farmer",
  "codePoint": "1F469 200D 1F33E",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-cook",
  "character": "\ud83d\udc68\u200d\ud83c\udf73",
  "unicodeName": "man cook",
  "codePoint": "1F468 200D 1F373",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-cook",
  "character": "\ud83d\udc69\u200d\ud83c\udf73",
  "unicodeName": "woman cook",
  "codePoint": "1F469 200D 1F373",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-mechanic",
  "character": "\ud83d\udc68\u200d\ud83d\udd27",
  "unicodeName": "man mechanic",
  "codePoint": "1F468 200D 1F527",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-mechanic",
  "character": "\ud83d\udc69\u200d\ud83d\udd27",
  "unicodeName": "woman mechanic",
  "codePoint": "1F469 200D 1F527",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-factory-worker",
  "character": "\ud83d\udc68\u200d\ud83c\udfed",
  "unicodeName": "man factory worker",
  "codePoint": "1F468 200D 1F3ED",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-factory-worker",
  "character": "\ud83d\udc69\u200d\ud83c\udfed",
  "unicodeName": "woman factory worker",
  "codePoint": "1F469 200D 1F3ED",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-office-worker",
  "character": "\ud83d\udc68\u200d\ud83d\udcbc",
  "unicodeName": "man office worker",
  "codePoint": "1F468 200D 1F4BC",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-office-worker",
  "character": "\ud83d\udc69\u200d\ud83d\udcbc",
  "unicodeName": "woman office worker",
  "codePoint": "1F469 200D 1F4BC",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-scientist",
  "character": "\ud83d\udc68\u200d\ud83d\udd2c",
  "unicodeName": "man scientist",
  "codePoint": "1F468 200D 1F52C",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-scientist",
  "character": "\ud83d\udc69\u200d\ud83d\udd2c",
  "unicodeName": "woman scientist",
  "codePoint": "1F469 200D 1F52C",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-technologist",
  "character": "\ud83d\udc68\u200d\ud83d\udcbb",
  "unicodeName": "man technologist",
  "codePoint": "1F468 200D 1F4BB",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-technologist",
  "character": "\ud83d\udc69\u200d\ud83d\udcbb",
  "unicodeName": "woman technologist",
  "codePoint": "1F469 200D 1F4BB",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-singer",
  "character": "\ud83d\udc68\u200d\ud83c\udfa4",
  "unicodeName": "man singer",
  "codePoint": "1F468 200D 1F3A4",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-singer",
  "character": "\ud83d\udc69\u200d\ud83c\udfa4",
  "unicodeName": "woman singer",
  "codePoint": "1F469 200D 1F3A4",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-artist",
  "character": "\ud83d\udc68\u200d\ud83c\udfa8",
  "unicodeName": "man artist",
  "codePoint": "1F468 200D 1F3A8",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-artist",
  "character": "\ud83d\udc69\u200d\ud83c\udfa8",
  "unicodeName": "woman artist",
  "codePoint": "1F469 200D 1F3A8",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-pilot",
  "character": "\ud83d\udc68\u200d\u2708\ufe0f",
  "unicodeName": "man pilot",
  "codePoint": "1F468 200D 2708 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-pilot",
  "character": "\ud83d\udc69\u200d\u2708\ufe0f",
  "unicodeName": "woman pilot",
  "codePoint": "1F469 200D 2708 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-astronaut",
  "character": "\ud83d\udc68\u200d\ud83d\ude80",
  "unicodeName": "man astronaut",
  "codePoint": "1F468 200D 1F680",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-astronaut",
  "character": "\ud83d\udc69\u200d\ud83d\ude80",
  "unicodeName": "woman astronaut",
  "codePoint": "1F469 200D 1F680",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-firefighter",
  "character": "\ud83d\udc68\u200d\ud83d\ude92",
  "unicodeName": "man firefighter",
  "codePoint": "1F468 200D 1F692",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-firefighter",
  "character": "\ud83d\udc69\u200d\ud83d\ude92",
  "unicodeName": "woman firefighter",
  "codePoint": "1F469 200D 1F692",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "police-officer",
  "character": "\ud83d\udc6e",
  "unicodeName": "police officer",
  "codePoint": "1F46E",
  "group": "people-body",
  "subGroup": "person-role",
  "variants": [{
    "slug": "police-officer-light-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udffb"
  }, {
    "slug": "police-officer-medium-light-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udffc"
  }, {
    "slug": "police-officer-medium-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udffd"
  }, {
    "slug": "police-officer-medium-dark-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udffe"
  }, {
    "slug": "police-officer-dark-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udfff"
  }, {
    "slug": "man-police-officer",
    "character": "\ud83d\udc6e\u200d\u2642\ufe0f"
  }, {
    "slug": "man-police-officer-light-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-police-officer-medium-light-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-police-officer-medium-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-police-officer-medium-dark-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-police-officer-dark-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-police-officer",
    "character": "\ud83d\udc6e\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-police-officer-light-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-police-officer-medium-light-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-police-officer-medium-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-police-officer-medium-dark-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-police-officer-dark-skin-tone",
    "character": "\ud83d\udc6e\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "detective",
  "character": "\ud83d\udd75\ufe0f",
  "unicodeName": "detective",
  "codePoint": "1F575 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "detective-light-skin-tone",
  "character": "\ud83d\udd75\ud83c\udffb",
  "unicodeName": "detective: light skin tone",
  "codePoint": "1F575 1F3FB",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "detective-medium-light-skin-tone",
  "character": "\ud83d\udd75\ud83c\udffc",
  "unicodeName": "detective: medium-light skin tone",
  "codePoint": "1F575 1F3FC",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "detective-medium-skin-tone",
  "character": "\ud83d\udd75\ud83c\udffd",
  "unicodeName": "detective: medium skin tone",
  "codePoint": "1F575 1F3FD",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "detective-medium-dark-skin-tone",
  "character": "\ud83d\udd75\ud83c\udffe",
  "unicodeName": "detective: medium-dark skin tone",
  "codePoint": "1F575 1F3FE",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "detective-dark-skin-tone",
  "character": "\ud83d\udd75\ud83c\udfff",
  "unicodeName": "detective: dark skin tone",
  "codePoint": "1F575 1F3FF",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-detective",
  "character": "\ud83d\udd75\ufe0f\u200d\u2642\ufe0f",
  "unicodeName": "man detective",
  "codePoint": "1F575 FE0F 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-detective-light-skin-tone",
  "character": "\ud83d\udd75\ud83c\udffb\u200d\u2642\ufe0f",
  "unicodeName": "man detective: light skin tone",
  "codePoint": "1F575 1F3FB 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-detective-medium-light-skin-tone",
  "character": "\ud83d\udd75\ud83c\udffc\u200d\u2642\ufe0f",
  "unicodeName": "man detective: medium-light skin tone",
  "codePoint": "1F575 1F3FC 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-detective-medium-skin-tone",
  "character": "\ud83d\udd75\ud83c\udffd\u200d\u2642\ufe0f",
  "unicodeName": "man detective: medium skin tone",
  "codePoint": "1F575 1F3FD 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-detective-medium-dark-skin-tone",
  "character": "\ud83d\udd75\ud83c\udffe\u200d\u2642\ufe0f",
  "unicodeName": "man detective: medium-dark skin tone",
  "codePoint": "1F575 1F3FE 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "man-detective-dark-skin-tone",
  "character": "\ud83d\udd75\ud83c\udfff\u200d\u2642\ufe0f",
  "unicodeName": "man detective: dark skin tone",
  "codePoint": "1F575 1F3FF 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-detective",
  "character": "\ud83d\udd75\ufe0f\u200d\u2640\ufe0f",
  "unicodeName": "woman detective",
  "codePoint": "1F575 FE0F 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-detective-light-skin-tone",
  "character": "\ud83d\udd75\ud83c\udffb\u200d\u2640\ufe0f",
  "unicodeName": "woman detective: light skin tone",
  "codePoint": "1F575 1F3FB 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-detective-medium-light-skin-tone",
  "character": "\ud83d\udd75\ud83c\udffc\u200d\u2640\ufe0f",
  "unicodeName": "woman detective: medium-light skin tone",
  "codePoint": "1F575 1F3FC 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-detective-medium-skin-tone",
  "character": "\ud83d\udd75\ud83c\udffd\u200d\u2640\ufe0f",
  "unicodeName": "woman detective: medium skin tone",
  "codePoint": "1F575 1F3FD 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-detective-medium-dark-skin-tone",
  "character": "\ud83d\udd75\ud83c\udffe\u200d\u2640\ufe0f",
  "unicodeName": "woman detective: medium-dark skin tone",
  "codePoint": "1F575 1F3FE 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "woman-detective-dark-skin-tone",
  "character": "\ud83d\udd75\ud83c\udfff\u200d\u2640\ufe0f",
  "unicodeName": "woman detective: dark skin tone",
  "codePoint": "1F575 1F3FF 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-role"
}, {
  "slug": "guard",
  "character": "\ud83d\udc82",
  "unicodeName": "guard",
  "codePoint": "1F482",
  "group": "people-body",
  "subGroup": "person-role",
  "variants": [{
    "slug": "guard-light-skin-tone",
    "character": "\ud83d\udc82\ud83c\udffb"
  }, {
    "slug": "guard-medium-light-skin-tone",
    "character": "\ud83d\udc82\ud83c\udffc"
  }, {
    "slug": "guard-medium-skin-tone",
    "character": "\ud83d\udc82\ud83c\udffd"
  }, {
    "slug": "guard-medium-dark-skin-tone",
    "character": "\ud83d\udc82\ud83c\udffe"
  }, {
    "slug": "guard-dark-skin-tone",
    "character": "\ud83d\udc82\ud83c\udfff"
  }, {
    "slug": "man-guard",
    "character": "\ud83d\udc82\u200d\u2642\ufe0f"
  }, {
    "slug": "man-guard-light-skin-tone",
    "character": "\ud83d\udc82\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-guard-medium-light-skin-tone",
    "character": "\ud83d\udc82\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-guard-medium-skin-tone",
    "character": "\ud83d\udc82\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-guard-medium-dark-skin-tone",
    "character": "\ud83d\udc82\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-guard-dark-skin-tone",
    "character": "\ud83d\udc82\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-guard",
    "character": "\ud83d\udc82\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-guard-light-skin-tone",
    "character": "\ud83d\udc82\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-guard-medium-light-skin-tone",
    "character": "\ud83d\udc82\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-guard-medium-skin-tone",
    "character": "\ud83d\udc82\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-guard-medium-dark-skin-tone",
    "character": "\ud83d\udc82\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-guard-dark-skin-tone",
    "character": "\ud83d\udc82\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "construction-worker",
  "character": "\ud83d\udc77",
  "unicodeName": "construction worker",
  "codePoint": "1F477",
  "group": "people-body",
  "subGroup": "person-role",
  "variants": [{
    "slug": "construction-worker-light-skin-tone",
    "character": "\ud83d\udc77\ud83c\udffb"
  }, {
    "slug": "construction-worker-medium-light-skin-tone",
    "character": "\ud83d\udc77\ud83c\udffc"
  }, {
    "slug": "construction-worker-medium-skin-tone",
    "character": "\ud83d\udc77\ud83c\udffd"
  }, {
    "slug": "construction-worker-medium-dark-skin-tone",
    "character": "\ud83d\udc77\ud83c\udffe"
  }, {
    "slug": "construction-worker-dark-skin-tone",
    "character": "\ud83d\udc77\ud83c\udfff"
  }, {
    "slug": "man-construction-worker",
    "character": "\ud83d\udc77\u200d\u2642\ufe0f"
  }, {
    "slug": "man-construction-worker-light-skin-tone",
    "character": "\ud83d\udc77\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-construction-worker-medium-light-skin-tone",
    "character": "\ud83d\udc77\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-construction-worker-medium-skin-tone",
    "character": "\ud83d\udc77\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-construction-worker-medium-dark-skin-tone",
    "character": "\ud83d\udc77\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-construction-worker-dark-skin-tone",
    "character": "\ud83d\udc77\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-construction-worker",
    "character": "\ud83d\udc77\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-construction-worker-light-skin-tone",
    "character": "\ud83d\udc77\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-construction-worker-medium-light-skin-tone",
    "character": "\ud83d\udc77\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-construction-worker-medium-skin-tone",
    "character": "\ud83d\udc77\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-construction-worker-medium-dark-skin-tone",
    "character": "\ud83d\udc77\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-construction-worker-dark-skin-tone",
    "character": "\ud83d\udc77\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "prince",
  "character": "\ud83e\udd34",
  "unicodeName": "prince",
  "codePoint": "1F934",
  "group": "people-body",
  "subGroup": "person-role",
  "variants": [{
    "slug": "prince-light-skin-tone",
    "character": "\ud83e\udd34\ud83c\udffb"
  }, {
    "slug": "prince-medium-light-skin-tone",
    "character": "\ud83e\udd34\ud83c\udffc"
  }, {
    "slug": "prince-medium-skin-tone",
    "character": "\ud83e\udd34\ud83c\udffd"
  }, {
    "slug": "prince-medium-dark-skin-tone",
    "character": "\ud83e\udd34\ud83c\udffe"
  }, {
    "slug": "prince-dark-skin-tone",
    "character": "\ud83e\udd34\ud83c\udfff"
  }]
}, {
  "slug": "princess",
  "character": "\ud83d\udc78",
  "unicodeName": "princess",
  "codePoint": "1F478",
  "group": "people-body",
  "subGroup": "person-role",
  "variants": [{
    "slug": "princess-light-skin-tone",
    "character": "\ud83d\udc78\ud83c\udffb"
  }, {
    "slug": "princess-medium-light-skin-tone",
    "character": "\ud83d\udc78\ud83c\udffc"
  }, {
    "slug": "princess-medium-skin-tone",
    "character": "\ud83d\udc78\ud83c\udffd"
  }, {
    "slug": "princess-medium-dark-skin-tone",
    "character": "\ud83d\udc78\ud83c\udffe"
  }, {
    "slug": "princess-dark-skin-tone",
    "character": "\ud83d\udc78\ud83c\udfff"
  }]
}, {
  "slug": "person-wearing-turban",
  "character": "\ud83d\udc73",
  "unicodeName": "person wearing turban",
  "codePoint": "1F473",
  "group": "people-body",
  "subGroup": "person-role",
  "variants": [{
    "slug": "person-wearing-turban-light-skin-tone",
    "character": "\ud83d\udc73\ud83c\udffb"
  }, {
    "slug": "person-wearing-turban-medium-light-skin-tone",
    "character": "\ud83d\udc73\ud83c\udffc"
  }, {
    "slug": "person-wearing-turban-medium-skin-tone",
    "character": "\ud83d\udc73\ud83c\udffd"
  }, {
    "slug": "person-wearing-turban-medium-dark-skin-tone",
    "character": "\ud83d\udc73\ud83c\udffe"
  }, {
    "slug": "person-wearing-turban-dark-skin-tone",
    "character": "\ud83d\udc73\ud83c\udfff"
  }, {
    "slug": "man-wearing-turban",
    "character": "\ud83d\udc73\u200d\u2642\ufe0f"
  }, {
    "slug": "man-wearing-turban-light-skin-tone",
    "character": "\ud83d\udc73\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-wearing-turban-medium-light-skin-tone",
    "character": "\ud83d\udc73\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-wearing-turban-medium-skin-tone",
    "character": "\ud83d\udc73\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-wearing-turban-medium-dark-skin-tone",
    "character": "\ud83d\udc73\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-wearing-turban-dark-skin-tone",
    "character": "\ud83d\udc73\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-wearing-turban",
    "character": "\ud83d\udc73\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-wearing-turban-light-skin-tone",
    "character": "\ud83d\udc73\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-wearing-turban-medium-light-skin-tone",
    "character": "\ud83d\udc73\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-wearing-turban-medium-skin-tone",
    "character": "\ud83d\udc73\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-wearing-turban-medium-dark-skin-tone",
    "character": "\ud83d\udc73\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-wearing-turban-dark-skin-tone",
    "character": "\ud83d\udc73\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "man-with-chinese-cap",
  "character": "\ud83d\udc72",
  "unicodeName": "man with Chinese cap",
  "codePoint": "1F472",
  "group": "people-body",
  "subGroup": "person-role",
  "variants": [{
    "slug": "man-with-chinese-cap-light-skin-tone",
    "character": "\ud83d\udc72\ud83c\udffb"
  }, {
    "slug": "man-with-chinese-cap-medium-light-skin-tone",
    "character": "\ud83d\udc72\ud83c\udffc"
  }, {
    "slug": "man-with-chinese-cap-medium-skin-tone",
    "character": "\ud83d\udc72\ud83c\udffd"
  }, {
    "slug": "man-with-chinese-cap-medium-dark-skin-tone",
    "character": "\ud83d\udc72\ud83c\udffe"
  }, {
    "slug": "man-with-chinese-cap-dark-skin-tone",
    "character": "\ud83d\udc72\ud83c\udfff"
  }]
}, {
  "slug": "woman-with-headscarf",
  "character": "\ud83e\uddd5",
  "unicodeName": "woman with headscarf",
  "codePoint": "1F9D5",
  "group": "people-body",
  "subGroup": "person-role",
  "variants": [{
    "slug": "woman-with-headscarf-light-skin-tone",
    "character": "\ud83e\uddd5\ud83c\udffb"
  }, {
    "slug": "woman-with-headscarf-medium-light-skin-tone",
    "character": "\ud83e\uddd5\ud83c\udffc"
  }, {
    "slug": "woman-with-headscarf-medium-skin-tone",
    "character": "\ud83e\uddd5\ud83c\udffd"
  }, {
    "slug": "woman-with-headscarf-medium-dark-skin-tone",
    "character": "\ud83e\uddd5\ud83c\udffe"
  }, {
    "slug": "woman-with-headscarf-dark-skin-tone",
    "character": "\ud83e\uddd5\ud83c\udfff"
  }]
}, {
  "slug": "man-in-tuxedo",
  "character": "\ud83e\udd35",
  "unicodeName": "man in tuxedo",
  "codePoint": "1F935",
  "group": "people-body",
  "subGroup": "person-role",
  "variants": [{
    "slug": "man-in-tuxedo-light-skin-tone",
    "character": "\ud83e\udd35\ud83c\udffb"
  }, {
    "slug": "man-in-tuxedo-medium-light-skin-tone",
    "character": "\ud83e\udd35\ud83c\udffc"
  }, {
    "slug": "man-in-tuxedo-medium-skin-tone",
    "character": "\ud83e\udd35\ud83c\udffd"
  }, {
    "slug": "man-in-tuxedo-medium-dark-skin-tone",
    "character": "\ud83e\udd35\ud83c\udffe"
  }, {
    "slug": "man-in-tuxedo-dark-skin-tone",
    "character": "\ud83e\udd35\ud83c\udfff"
  }]
}, {
  "slug": "bride-with-veil",
  "character": "\ud83d\udc70",
  "unicodeName": "bride with veil",
  "codePoint": "1F470",
  "group": "people-body",
  "subGroup": "person-role",
  "variants": [{
    "slug": "bride-with-veil-light-skin-tone",
    "character": "\ud83d\udc70\ud83c\udffb"
  }, {
    "slug": "bride-with-veil-medium-light-skin-tone",
    "character": "\ud83d\udc70\ud83c\udffc"
  }, {
    "slug": "bride-with-veil-medium-skin-tone",
    "character": "\ud83d\udc70\ud83c\udffd"
  }, {
    "slug": "bride-with-veil-medium-dark-skin-tone",
    "character": "\ud83d\udc70\ud83c\udffe"
  }, {
    "slug": "bride-with-veil-dark-skin-tone",
    "character": "\ud83d\udc70\ud83c\udfff"
  }]
}, {
  "slug": "pregnant-woman",
  "character": "\ud83e\udd30",
  "unicodeName": "pregnant woman",
  "codePoint": "1F930",
  "group": "people-body",
  "subGroup": "person-role",
  "variants": [{
    "slug": "pregnant-woman-light-skin-tone",
    "character": "\ud83e\udd30\ud83c\udffb"
  }, {
    "slug": "pregnant-woman-medium-light-skin-tone",
    "character": "\ud83e\udd30\ud83c\udffc"
  }, {
    "slug": "pregnant-woman-medium-skin-tone",
    "character": "\ud83e\udd30\ud83c\udffd"
  }, {
    "slug": "pregnant-woman-medium-dark-skin-tone",
    "character": "\ud83e\udd30\ud83c\udffe"
  }, {
    "slug": "pregnant-woman-dark-skin-tone",
    "character": "\ud83e\udd30\ud83c\udfff"
  }]
}, {
  "slug": "breast-feeding",
  "character": "\ud83e\udd31",
  "unicodeName": "breast-feeding",
  "codePoint": "1F931",
  "group": "people-body",
  "subGroup": "person-role",
  "variants": [{
    "slug": "breast-feeding-light-skin-tone",
    "character": "\ud83e\udd31\ud83c\udffb"
  }, {
    "slug": "breast-feeding-medium-light-skin-tone",
    "character": "\ud83e\udd31\ud83c\udffc"
  }, {
    "slug": "breast-feeding-medium-skin-tone",
    "character": "\ud83e\udd31\ud83c\udffd"
  }, {
    "slug": "breast-feeding-medium-dark-skin-tone",
    "character": "\ud83e\udd31\ud83c\udffe"
  }, {
    "slug": "breast-feeding-dark-skin-tone",
    "character": "\ud83e\udd31\ud83c\udfff"
  }]
}, {
  "slug": "baby-angel",
  "character": "\ud83d\udc7c",
  "unicodeName": "baby angel",
  "codePoint": "1F47C",
  "group": "people-body",
  "subGroup": "person-fantasy",
  "variants": [{
    "slug": "baby-angel-light-skin-tone",
    "character": "\ud83d\udc7c\ud83c\udffb"
  }, {
    "slug": "baby-angel-medium-light-skin-tone",
    "character": "\ud83d\udc7c\ud83c\udffc"
  }, {
    "slug": "baby-angel-medium-skin-tone",
    "character": "\ud83d\udc7c\ud83c\udffd"
  }, {
    "slug": "baby-angel-medium-dark-skin-tone",
    "character": "\ud83d\udc7c\ud83c\udffe"
  }, {
    "slug": "baby-angel-dark-skin-tone",
    "character": "\ud83d\udc7c\ud83c\udfff"
  }]
}, {
  "slug": "santa-claus",
  "character": "\ud83c\udf85",
  "unicodeName": "Santa Claus",
  "codePoint": "1F385",
  "group": "people-body",
  "subGroup": "person-fantasy",
  "variants": [{
    "slug": "santa-claus-light-skin-tone",
    "character": "\ud83c\udf85\ud83c\udffb"
  }, {
    "slug": "santa-claus-medium-light-skin-tone",
    "character": "\ud83c\udf85\ud83c\udffc"
  }, {
    "slug": "santa-claus-medium-skin-tone",
    "character": "\ud83c\udf85\ud83c\udffd"
  }, {
    "slug": "santa-claus-medium-dark-skin-tone",
    "character": "\ud83c\udf85\ud83c\udffe"
  }, {
    "slug": "santa-claus-dark-skin-tone",
    "character": "\ud83c\udf85\ud83c\udfff"
  }]
}, {
  "slug": "mrs-claus",
  "character": "\ud83e\udd36",
  "unicodeName": "Mrs. Claus",
  "codePoint": "1F936",
  "group": "people-body",
  "subGroup": "person-fantasy",
  "variants": [{
    "slug": "mrs-claus-light-skin-tone",
    "character": "\ud83e\udd36\ud83c\udffb"
  }, {
    "slug": "mrs-claus-medium-light-skin-tone",
    "character": "\ud83e\udd36\ud83c\udffc"
  }, {
    "slug": "mrs-claus-medium-skin-tone",
    "character": "\ud83e\udd36\ud83c\udffd"
  }, {
    "slug": "mrs-claus-medium-dark-skin-tone",
    "character": "\ud83e\udd36\ud83c\udffe"
  }, {
    "slug": "mrs-claus-dark-skin-tone",
    "character": "\ud83e\udd36\ud83c\udfff"
  }]
}, {
  "slug": "superhero",
  "character": "\ud83e\uddb8",
  "unicodeName": "superhero",
  "codePoint": "1F9B8",
  "group": "people-body",
  "subGroup": "person-fantasy",
  "variants": [{
    "slug": "superhero-light-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udffb"
  }, {
    "slug": "superhero-medium-light-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udffc"
  }, {
    "slug": "superhero-medium-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udffd"
  }, {
    "slug": "superhero-medium-dark-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udffe"
  }, {
    "slug": "superhero-dark-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udfff"
  }, {
    "slug": "man-superhero",
    "character": "\ud83e\uddb8\u200d\u2642\ufe0f"
  }, {
    "slug": "man-superhero-light-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-superhero-medium-light-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-superhero-medium-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-superhero-medium-dark-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-superhero-dark-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-superhero",
    "character": "\ud83e\uddb8\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-superhero-light-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-superhero-medium-light-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-superhero-medium-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-superhero-medium-dark-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-superhero-dark-skin-tone",
    "character": "\ud83e\uddb8\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "supervillain",
  "character": "\ud83e\uddb9",
  "unicodeName": "supervillain",
  "codePoint": "1F9B9",
  "group": "people-body",
  "subGroup": "person-fantasy",
  "variants": [{
    "slug": "supervillain-light-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udffb"
  }, {
    "slug": "supervillain-medium-light-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udffc"
  }, {
    "slug": "supervillain-medium-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udffd"
  }, {
    "slug": "supervillain-medium-dark-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udffe"
  }, {
    "slug": "supervillain-dark-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udfff"
  }, {
    "slug": "man-supervillain",
    "character": "\ud83e\uddb9\u200d\u2642\ufe0f"
  }, {
    "slug": "man-supervillain-light-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-supervillain-medium-light-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-supervillain-medium-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-supervillain-medium-dark-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-supervillain-dark-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-supervillain",
    "character": "\ud83e\uddb9\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-supervillain-light-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-supervillain-medium-light-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-supervillain-medium-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-supervillain-medium-dark-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-supervillain-dark-skin-tone",
    "character": "\ud83e\uddb9\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "mage",
  "character": "\ud83e\uddd9",
  "unicodeName": "mage",
  "codePoint": "1F9D9",
  "group": "people-body",
  "subGroup": "person-fantasy",
  "variants": [{
    "slug": "mage-light-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udffb"
  }, {
    "slug": "mage-medium-light-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udffc"
  }, {
    "slug": "mage-medium-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udffd"
  }, {
    "slug": "mage-medium-dark-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udffe"
  }, {
    "slug": "mage-dark-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udfff"
  }, {
    "slug": "man-mage",
    "character": "\ud83e\uddd9\u200d\u2642\ufe0f"
  }, {
    "slug": "man-mage-light-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-mage-medium-light-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-mage-medium-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-mage-medium-dark-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-mage-dark-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-mage",
    "character": "\ud83e\uddd9\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-mage-light-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-mage-medium-light-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-mage-medium-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-mage-medium-dark-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-mage-dark-skin-tone",
    "character": "\ud83e\uddd9\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "fairy",
  "character": "\ud83e\uddda",
  "unicodeName": "fairy",
  "codePoint": "1F9DA",
  "group": "people-body",
  "subGroup": "person-fantasy",
  "variants": [{
    "slug": "fairy-light-skin-tone",
    "character": "\ud83e\uddda\ud83c\udffb"
  }, {
    "slug": "fairy-medium-light-skin-tone",
    "character": "\ud83e\uddda\ud83c\udffc"
  }, {
    "slug": "fairy-medium-skin-tone",
    "character": "\ud83e\uddda\ud83c\udffd"
  }, {
    "slug": "fairy-medium-dark-skin-tone",
    "character": "\ud83e\uddda\ud83c\udffe"
  }, {
    "slug": "fairy-dark-skin-tone",
    "character": "\ud83e\uddda\ud83c\udfff"
  }, {
    "slug": "man-fairy",
    "character": "\ud83e\uddda\u200d\u2642\ufe0f"
  }, {
    "slug": "man-fairy-light-skin-tone",
    "character": "\ud83e\uddda\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-fairy-medium-light-skin-tone",
    "character": "\ud83e\uddda\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-fairy-medium-skin-tone",
    "character": "\ud83e\uddda\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-fairy-medium-dark-skin-tone",
    "character": "\ud83e\uddda\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-fairy-dark-skin-tone",
    "character": "\ud83e\uddda\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-fairy",
    "character": "\ud83e\uddda\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-fairy-light-skin-tone",
    "character": "\ud83e\uddda\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-fairy-medium-light-skin-tone",
    "character": "\ud83e\uddda\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-fairy-medium-skin-tone",
    "character": "\ud83e\uddda\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-fairy-medium-dark-skin-tone",
    "character": "\ud83e\uddda\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-fairy-dark-skin-tone",
    "character": "\ud83e\uddda\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "vampire",
  "character": "\ud83e\udddb",
  "unicodeName": "vampire",
  "codePoint": "1F9DB",
  "group": "people-body",
  "subGroup": "person-fantasy",
  "variants": [{
    "slug": "vampire-light-skin-tone",
    "character": "\ud83e\udddb\ud83c\udffb"
  }, {
    "slug": "vampire-medium-light-skin-tone",
    "character": "\ud83e\udddb\ud83c\udffc"
  }, {
    "slug": "vampire-medium-skin-tone",
    "character": "\ud83e\udddb\ud83c\udffd"
  }, {
    "slug": "vampire-medium-dark-skin-tone",
    "character": "\ud83e\udddb\ud83c\udffe"
  }, {
    "slug": "vampire-dark-skin-tone",
    "character": "\ud83e\udddb\ud83c\udfff"
  }, {
    "slug": "man-vampire",
    "character": "\ud83e\udddb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-vampire-light-skin-tone",
    "character": "\ud83e\udddb\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-vampire-medium-light-skin-tone",
    "character": "\ud83e\udddb\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-vampire-medium-skin-tone",
    "character": "\ud83e\udddb\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-vampire-medium-dark-skin-tone",
    "character": "\ud83e\udddb\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-vampire-dark-skin-tone",
    "character": "\ud83e\udddb\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-vampire",
    "character": "\ud83e\udddb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-vampire-light-skin-tone",
    "character": "\ud83e\udddb\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-vampire-medium-light-skin-tone",
    "character": "\ud83e\udddb\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-vampire-medium-skin-tone",
    "character": "\ud83e\udddb\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-vampire-medium-dark-skin-tone",
    "character": "\ud83e\udddb\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-vampire-dark-skin-tone",
    "character": "\ud83e\udddb\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "merperson",
  "character": "\ud83e\udddc",
  "unicodeName": "merperson",
  "codePoint": "1F9DC",
  "group": "people-body",
  "subGroup": "person-fantasy",
  "variants": [{
    "slug": "merperson-light-skin-tone",
    "character": "\ud83e\udddc\ud83c\udffb"
  }, {
    "slug": "merperson-medium-light-skin-tone",
    "character": "\ud83e\udddc\ud83c\udffc"
  }, {
    "slug": "merperson-medium-skin-tone",
    "character": "\ud83e\udddc\ud83c\udffd"
  }, {
    "slug": "merperson-medium-dark-skin-tone",
    "character": "\ud83e\udddc\ud83c\udffe"
  }, {
    "slug": "merperson-dark-skin-tone",
    "character": "\ud83e\udddc\ud83c\udfff"
  }, {
    "slug": "merman",
    "character": "\ud83e\udddc\u200d\u2642\ufe0f"
  }, {
    "slug": "merman-light-skin-tone",
    "character": "\ud83e\udddc\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "merman-medium-light-skin-tone",
    "character": "\ud83e\udddc\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "merman-medium-skin-tone",
    "character": "\ud83e\udddc\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "merman-medium-dark-skin-tone",
    "character": "\ud83e\udddc\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "merman-dark-skin-tone",
    "character": "\ud83e\udddc\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "mermaid",
    "character": "\ud83e\udddc\u200d\u2640\ufe0f"
  }, {
    "slug": "mermaid-light-skin-tone",
    "character": "\ud83e\udddc\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "mermaid-medium-light-skin-tone",
    "character": "\ud83e\udddc\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "mermaid-medium-skin-tone",
    "character": "\ud83e\udddc\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "mermaid-medium-dark-skin-tone",
    "character": "\ud83e\udddc\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "mermaid-dark-skin-tone",
    "character": "\ud83e\udddc\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "elf",
  "character": "\ud83e\udddd",
  "unicodeName": "elf",
  "codePoint": "1F9DD",
  "group": "people-body",
  "subGroup": "person-fantasy",
  "variants": [{
    "slug": "elf-light-skin-tone",
    "character": "\ud83e\udddd\ud83c\udffb"
  }, {
    "slug": "elf-medium-light-skin-tone",
    "character": "\ud83e\udddd\ud83c\udffc"
  }, {
    "slug": "elf-medium-skin-tone",
    "character": "\ud83e\udddd\ud83c\udffd"
  }, {
    "slug": "elf-medium-dark-skin-tone",
    "character": "\ud83e\udddd\ud83c\udffe"
  }, {
    "slug": "elf-dark-skin-tone",
    "character": "\ud83e\udddd\ud83c\udfff"
  }, {
    "slug": "man-elf",
    "character": "\ud83e\udddd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-elf-light-skin-tone",
    "character": "\ud83e\udddd\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-elf-medium-light-skin-tone",
    "character": "\ud83e\udddd\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-elf-medium-skin-tone",
    "character": "\ud83e\udddd\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-elf-medium-dark-skin-tone",
    "character": "\ud83e\udddd\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-elf-dark-skin-tone",
    "character": "\ud83e\udddd\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-elf",
    "character": "\ud83e\udddd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-elf-light-skin-tone",
    "character": "\ud83e\udddd\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-elf-medium-light-skin-tone",
    "character": "\ud83e\udddd\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-elf-medium-skin-tone",
    "character": "\ud83e\udddd\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-elf-medium-dark-skin-tone",
    "character": "\ud83e\udddd\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-elf-dark-skin-tone",
    "character": "\ud83e\udddd\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "genie",
  "character": "\ud83e\uddde",
  "unicodeName": "genie",
  "codePoint": "1F9DE",
  "group": "people-body",
  "subGroup": "person-fantasy",
  "variants": [{
    "slug": "man-genie",
    "character": "\ud83e\uddde\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-genie",
    "character": "\ud83e\uddde\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "zombie",
  "character": "\ud83e\udddf",
  "unicodeName": "zombie",
  "codePoint": "1F9DF",
  "group": "people-body",
  "subGroup": "person-fantasy",
  "variants": [{
    "slug": "man-zombie",
    "character": "\ud83e\udddf\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-zombie",
    "character": "\ud83e\udddf\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-getting-massage",
  "character": "\ud83d\udc86",
  "unicodeName": "person getting massage",
  "codePoint": "1F486",
  "group": "people-body",
  "subGroup": "person-activity",
  "variants": [{
    "slug": "person-getting-massage-light-skin-tone",
    "character": "\ud83d\udc86\ud83c\udffb"
  }, {
    "slug": "person-getting-massage-medium-light-skin-tone",
    "character": "\ud83d\udc86\ud83c\udffc"
  }, {
    "slug": "person-getting-massage-medium-skin-tone",
    "character": "\ud83d\udc86\ud83c\udffd"
  }, {
    "slug": "person-getting-massage-medium-dark-skin-tone",
    "character": "\ud83d\udc86\ud83c\udffe"
  }, {
    "slug": "person-getting-massage-dark-skin-tone",
    "character": "\ud83d\udc86\ud83c\udfff"
  }, {
    "slug": "man-getting-massage",
    "character": "\ud83d\udc86\u200d\u2642\ufe0f"
  }, {
    "slug": "man-getting-massage-light-skin-tone",
    "character": "\ud83d\udc86\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-getting-massage-medium-light-skin-tone",
    "character": "\ud83d\udc86\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-getting-massage-medium-skin-tone",
    "character": "\ud83d\udc86\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-getting-massage-medium-dark-skin-tone",
    "character": "\ud83d\udc86\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-getting-massage-dark-skin-tone",
    "character": "\ud83d\udc86\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-getting-massage",
    "character": "\ud83d\udc86\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-getting-massage-light-skin-tone",
    "character": "\ud83d\udc86\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-getting-massage-medium-light-skin-tone",
    "character": "\ud83d\udc86\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-getting-massage-medium-skin-tone",
    "character": "\ud83d\udc86\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-getting-massage-medium-dark-skin-tone",
    "character": "\ud83d\udc86\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-getting-massage-dark-skin-tone",
    "character": "\ud83d\udc86\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-getting-haircut",
  "character": "\ud83d\udc87",
  "unicodeName": "person getting haircut",
  "codePoint": "1F487",
  "group": "people-body",
  "subGroup": "person-activity",
  "variants": [{
    "slug": "person-getting-haircut-light-skin-tone",
    "character": "\ud83d\udc87\ud83c\udffb"
  }, {
    "slug": "person-getting-haircut-medium-light-skin-tone",
    "character": "\ud83d\udc87\ud83c\udffc"
  }, {
    "slug": "person-getting-haircut-medium-skin-tone",
    "character": "\ud83d\udc87\ud83c\udffd"
  }, {
    "slug": "person-getting-haircut-medium-dark-skin-tone",
    "character": "\ud83d\udc87\ud83c\udffe"
  }, {
    "slug": "person-getting-haircut-dark-skin-tone",
    "character": "\ud83d\udc87\ud83c\udfff"
  }, {
    "slug": "man-getting-haircut",
    "character": "\ud83d\udc87\u200d\u2642\ufe0f"
  }, {
    "slug": "man-getting-haircut-light-skin-tone",
    "character": "\ud83d\udc87\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-getting-haircut-medium-light-skin-tone",
    "character": "\ud83d\udc87\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-getting-haircut-medium-skin-tone",
    "character": "\ud83d\udc87\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-getting-haircut-medium-dark-skin-tone",
    "character": "\ud83d\udc87\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-getting-haircut-dark-skin-tone",
    "character": "\ud83d\udc87\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-getting-haircut",
    "character": "\ud83d\udc87\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-getting-haircut-light-skin-tone",
    "character": "\ud83d\udc87\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-getting-haircut-medium-light-skin-tone",
    "character": "\ud83d\udc87\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-getting-haircut-medium-skin-tone",
    "character": "\ud83d\udc87\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-getting-haircut-medium-dark-skin-tone",
    "character": "\ud83d\udc87\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-getting-haircut-dark-skin-tone",
    "character": "\ud83d\udc87\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-walking",
  "character": "\ud83d\udeb6",
  "unicodeName": "person walking",
  "codePoint": "1F6B6",
  "group": "people-body",
  "subGroup": "person-activity",
  "variants": [{
    "slug": "person-walking-light-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udffb"
  }, {
    "slug": "person-walking-medium-light-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udffc"
  }, {
    "slug": "person-walking-medium-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udffd"
  }, {
    "slug": "person-walking-medium-dark-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udffe"
  }, {
    "slug": "person-walking-dark-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udfff"
  }, {
    "slug": "man-walking",
    "character": "\ud83d\udeb6\u200d\u2642\ufe0f"
  }, {
    "slug": "man-walking-light-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-walking-medium-light-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-walking-medium-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-walking-medium-dark-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-walking-dark-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-walking",
    "character": "\ud83d\udeb6\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-walking-light-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-walking-medium-light-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-walking-medium-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-walking-medium-dark-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-walking-dark-skin-tone",
    "character": "\ud83d\udeb6\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-standing",
  "character": "\ud83e\uddcd",
  "unicodeName": "person standing",
  "codePoint": "1F9CD",
  "group": "people-body",
  "subGroup": "person-activity",
  "variants": [{
    "slug": "person-standing-light-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udffb"
  }, {
    "slug": "person-standing-medium-light-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udffc"
  }, {
    "slug": "person-standing-medium-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udffd"
  }, {
    "slug": "person-standing-medium-dark-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udffe"
  }, {
    "slug": "person-standing-dark-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udfff"
  }, {
    "slug": "man-standing",
    "character": "\ud83e\uddcd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-standing-light-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-standing-medium-light-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-standing-medium-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-standing-medium-dark-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-standing-dark-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-standing",
    "character": "\ud83e\uddcd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-standing-light-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-standing-medium-light-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-standing-medium-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-standing-medium-dark-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-standing-dark-skin-tone",
    "character": "\ud83e\uddcd\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-kneeling",
  "character": "\ud83e\uddce",
  "unicodeName": "person kneeling",
  "codePoint": "1F9CE",
  "group": "people-body",
  "subGroup": "person-activity",
  "variants": [{
    "slug": "person-kneeling-light-skin-tone",
    "character": "\ud83e\uddce\ud83c\udffb"
  }, {
    "slug": "person-kneeling-medium-light-skin-tone",
    "character": "\ud83e\uddce\ud83c\udffc"
  }, {
    "slug": "person-kneeling-medium-skin-tone",
    "character": "\ud83e\uddce\ud83c\udffd"
  }, {
    "slug": "person-kneeling-medium-dark-skin-tone",
    "character": "\ud83e\uddce\ud83c\udffe"
  }, {
    "slug": "person-kneeling-dark-skin-tone",
    "character": "\ud83e\uddce\ud83c\udfff"
  }, {
    "slug": "man-kneeling",
    "character": "\ud83e\uddce\u200d\u2642\ufe0f"
  }, {
    "slug": "man-kneeling-light-skin-tone",
    "character": "\ud83e\uddce\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-kneeling-medium-light-skin-tone",
    "character": "\ud83e\uddce\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-kneeling-medium-skin-tone",
    "character": "\ud83e\uddce\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-kneeling-medium-dark-skin-tone",
    "character": "\ud83e\uddce\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-kneeling-dark-skin-tone",
    "character": "\ud83e\uddce\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-kneeling",
    "character": "\ud83e\uddce\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-kneeling-light-skin-tone",
    "character": "\ud83e\uddce\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-kneeling-medium-light-skin-tone",
    "character": "\ud83e\uddce\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-kneeling-medium-skin-tone",
    "character": "\ud83e\uddce\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-kneeling-medium-dark-skin-tone",
    "character": "\ud83e\uddce\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-kneeling-dark-skin-tone",
    "character": "\ud83e\uddce\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "man-with-probing-cane",
  "character": "\ud83d\udc68\u200d\ud83e\uddaf",
  "unicodeName": "man with probing cane",
  "codePoint": "1F468 200D 1F9AF",
  "group": "people-body",
  "subGroup": "person-activity"
}, {
  "slug": "woman-with-probing-cane",
  "character": "\ud83d\udc69\u200d\ud83e\uddaf",
  "unicodeName": "woman with probing cane",
  "codePoint": "1F469 200D 1F9AF",
  "group": "people-body",
  "subGroup": "person-activity"
}, {
  "slug": "man-in-motorized-wheelchair",
  "character": "\ud83d\udc68\u200d\ud83e\uddbc",
  "unicodeName": "man in motorized wheelchair",
  "codePoint": "1F468 200D 1F9BC",
  "group": "people-body",
  "subGroup": "person-activity"
}, {
  "slug": "woman-in-motorized-wheelchair",
  "character": "\ud83d\udc69\u200d\ud83e\uddbc",
  "unicodeName": "woman in motorized wheelchair",
  "codePoint": "1F469 200D 1F9BC",
  "group": "people-body",
  "subGroup": "person-activity"
}, {
  "slug": "man-in-manual-wheelchair",
  "character": "\ud83d\udc68\u200d\ud83e\uddbd",
  "unicodeName": "man in manual wheelchair",
  "codePoint": "1F468 200D 1F9BD",
  "group": "people-body",
  "subGroup": "person-activity"
}, {
  "slug": "woman-in-manual-wheelchair",
  "character": "\ud83d\udc69\u200d\ud83e\uddbd",
  "unicodeName": "woman in manual wheelchair",
  "codePoint": "1F469 200D 1F9BD",
  "group": "people-body",
  "subGroup": "person-activity"
}, {
  "slug": "person-running",
  "character": "\ud83c\udfc3",
  "unicodeName": "person running",
  "codePoint": "1F3C3",
  "group": "people-body",
  "subGroup": "person-activity",
  "variants": [{
    "slug": "person-running-light-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udffb"
  }, {
    "slug": "person-running-medium-light-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udffc"
  }, {
    "slug": "person-running-medium-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udffd"
  }, {
    "slug": "person-running-medium-dark-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udffe"
  }, {
    "slug": "person-running-dark-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udfff"
  }, {
    "slug": "man-running",
    "character": "\ud83c\udfc3\u200d\u2642\ufe0f"
  }, {
    "slug": "man-running-light-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-running-medium-light-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-running-medium-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-running-medium-dark-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-running-dark-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-running",
    "character": "\ud83c\udfc3\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-running-light-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-running-medium-light-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-running-medium-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-running-medium-dark-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-running-dark-skin-tone",
    "character": "\ud83c\udfc3\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "woman-dancing",
  "character": "\ud83d\udc83",
  "unicodeName": "woman dancing",
  "codePoint": "1F483",
  "group": "people-body",
  "subGroup": "person-activity",
  "variants": [{
    "slug": "woman-dancing-light-skin-tone",
    "character": "\ud83d\udc83\ud83c\udffb"
  }, {
    "slug": "woman-dancing-medium-light-skin-tone",
    "character": "\ud83d\udc83\ud83c\udffc"
  }, {
    "slug": "woman-dancing-medium-skin-tone",
    "character": "\ud83d\udc83\ud83c\udffd"
  }, {
    "slug": "woman-dancing-medium-dark-skin-tone",
    "character": "\ud83d\udc83\ud83c\udffe"
  }, {
    "slug": "woman-dancing-dark-skin-tone",
    "character": "\ud83d\udc83\ud83c\udfff"
  }]
}, {
  "slug": "man-dancing",
  "character": "\ud83d\udd7a",
  "unicodeName": "man dancing",
  "codePoint": "1F57A",
  "group": "people-body",
  "subGroup": "person-activity",
  "variants": [{
    "slug": "man-dancing-light-skin-tone",
    "character": "\ud83d\udd7a\ud83c\udffb"
  }, {
    "slug": "man-dancing-medium-light-skin-tone",
    "character": "\ud83d\udd7a\ud83c\udffc"
  }, {
    "slug": "man-dancing-medium-skin-tone",
    "character": "\ud83d\udd7a\ud83c\udffd"
  }, {
    "slug": "man-dancing-medium-dark-skin-tone",
    "character": "\ud83d\udd7a\ud83c\udffe"
  }, {
    "slug": "man-dancing-dark-skin-tone",
    "character": "\ud83d\udd7a\ud83c\udfff"
  }]
}, {
  "slug": "man-in-suit-levitating",
  "character": "\ud83d\udd74\ufe0f",
  "unicodeName": "man in suit levitating",
  "codePoint": "1F574 FE0F",
  "group": "people-body",
  "subGroup": "person-activity"
}, {
  "slug": "man-in-suit-levitating-light-skin-tone",
  "character": "\ud83d\udd74\ud83c\udffb",
  "unicodeName": "man in suit levitating: light skin tone",
  "codePoint": "1F574 1F3FB",
  "group": "people-body",
  "subGroup": "person-activity"
}, {
  "slug": "man-in-suit-levitating-medium-light-skin-tone",
  "character": "\ud83d\udd74\ud83c\udffc",
  "unicodeName": "man in suit levitating: medium-light skin tone",
  "codePoint": "1F574 1F3FC",
  "group": "people-body",
  "subGroup": "person-activity"
}, {
  "slug": "man-in-suit-levitating-medium-skin-tone",
  "character": "\ud83d\udd74\ud83c\udffd",
  "unicodeName": "man in suit levitating: medium skin tone",
  "codePoint": "1F574 1F3FD",
  "group": "people-body",
  "subGroup": "person-activity"
}, {
  "slug": "man-in-suit-levitating-medium-dark-skin-tone",
  "character": "\ud83d\udd74\ud83c\udffe",
  "unicodeName": "man in suit levitating: medium-dark skin tone",
  "codePoint": "1F574 1F3FE",
  "group": "people-body",
  "subGroup": "person-activity"
}, {
  "slug": "man-in-suit-levitating-dark-skin-tone",
  "character": "\ud83d\udd74\ud83c\udfff",
  "unicodeName": "man in suit levitating: dark skin tone",
  "codePoint": "1F574 1F3FF",
  "group": "people-body",
  "subGroup": "person-activity"
}, {
  "slug": "people-with-bunny-ears",
  "character": "\ud83d\udc6f",
  "unicodeName": "people with bunny ears",
  "codePoint": "1F46F",
  "group": "people-body",
  "subGroup": "person-activity",
  "variants": [{
    "slug": "men-with-bunny-ears",
    "character": "\ud83d\udc6f\u200d\u2642\ufe0f"
  }, {
    "slug": "women-with-bunny-ears",
    "character": "\ud83d\udc6f\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-in-steamy-room",
  "character": "\ud83e\uddd6",
  "unicodeName": "person in steamy room",
  "codePoint": "1F9D6",
  "group": "people-body",
  "subGroup": "person-activity",
  "variants": [{
    "slug": "person-in-steamy-room-light-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udffb"
  }, {
    "slug": "person-in-steamy-room-medium-light-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udffc"
  }, {
    "slug": "person-in-steamy-room-medium-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udffd"
  }, {
    "slug": "person-in-steamy-room-medium-dark-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udffe"
  }, {
    "slug": "person-in-steamy-room-dark-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udfff"
  }, {
    "slug": "man-in-steamy-room",
    "character": "\ud83e\uddd6\u200d\u2642\ufe0f"
  }, {
    "slug": "man-in-steamy-room-light-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-in-steamy-room-medium-light-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-in-steamy-room-medium-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-in-steamy-room-medium-dark-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-in-steamy-room-dark-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-in-steamy-room",
    "character": "\ud83e\uddd6\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-in-steamy-room-light-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-in-steamy-room-medium-light-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-in-steamy-room-medium-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-in-steamy-room-medium-dark-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-in-steamy-room-dark-skin-tone",
    "character": "\ud83e\uddd6\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-climbing",
  "character": "\ud83e\uddd7",
  "unicodeName": "person climbing",
  "codePoint": "1F9D7",
  "group": "people-body",
  "subGroup": "person-activity",
  "variants": [{
    "slug": "person-climbing-light-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udffb"
  }, {
    "slug": "person-climbing-medium-light-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udffc"
  }, {
    "slug": "person-climbing-medium-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udffd"
  }, {
    "slug": "person-climbing-medium-dark-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udffe"
  }, {
    "slug": "person-climbing-dark-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udfff"
  }, {
    "slug": "man-climbing",
    "character": "\ud83e\uddd7\u200d\u2642\ufe0f"
  }, {
    "slug": "man-climbing-light-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-climbing-medium-light-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-climbing-medium-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-climbing-medium-dark-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-climbing-dark-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-climbing",
    "character": "\ud83e\uddd7\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-climbing-light-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-climbing-medium-light-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-climbing-medium-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-climbing-medium-dark-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-climbing-dark-skin-tone",
    "character": "\ud83e\uddd7\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-fencing",
  "character": "\ud83e\udd3a",
  "unicodeName": "person fencing",
  "codePoint": "1F93A",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "horse-racing",
  "character": "\ud83c\udfc7",
  "unicodeName": "horse racing",
  "codePoint": "1F3C7",
  "group": "people-body",
  "subGroup": "person-sport",
  "variants": [{
    "slug": "horse-racing-light-skin-tone",
    "character": "\ud83c\udfc7\ud83c\udffb"
  }, {
    "slug": "horse-racing-medium-light-skin-tone",
    "character": "\ud83c\udfc7\ud83c\udffc"
  }, {
    "slug": "horse-racing-medium-skin-tone",
    "character": "\ud83c\udfc7\ud83c\udffd"
  }, {
    "slug": "horse-racing-medium-dark-skin-tone",
    "character": "\ud83c\udfc7\ud83c\udffe"
  }, {
    "slug": "horse-racing-dark-skin-tone",
    "character": "\ud83c\udfc7\ud83c\udfff"
  }]
}, {
  "slug": "skier",
  "character": "\u26f7\ufe0f",
  "unicodeName": "skier",
  "codePoint": "26F7 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "snowboarder",
  "character": "\ud83c\udfc2",
  "unicodeName": "snowboarder",
  "codePoint": "1F3C2",
  "group": "people-body",
  "subGroup": "person-sport",
  "variants": [{
    "slug": "snowboarder-light-skin-tone",
    "character": "\ud83c\udfc2\ud83c\udffb"
  }, {
    "slug": "snowboarder-medium-light-skin-tone",
    "character": "\ud83c\udfc2\ud83c\udffc"
  }, {
    "slug": "snowboarder-medium-skin-tone",
    "character": "\ud83c\udfc2\ud83c\udffd"
  }, {
    "slug": "snowboarder-medium-dark-skin-tone",
    "character": "\ud83c\udfc2\ud83c\udffe"
  }, {
    "slug": "snowboarder-dark-skin-tone",
    "character": "\ud83c\udfc2\ud83c\udfff"
  }]
}, {
  "slug": "person-golfing",
  "character": "\ud83c\udfcc\ufe0f",
  "unicodeName": "person golfing",
  "codePoint": "1F3CC FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-golfing-light-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udffb",
  "unicodeName": "person golfing: light skin tone",
  "codePoint": "1F3CC 1F3FB",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-golfing-medium-light-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udffc",
  "unicodeName": "person golfing: medium-light skin tone",
  "codePoint": "1F3CC 1F3FC",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-golfing-medium-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udffd",
  "unicodeName": "person golfing: medium skin tone",
  "codePoint": "1F3CC 1F3FD",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-golfing-medium-dark-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udffe",
  "unicodeName": "person golfing: medium-dark skin tone",
  "codePoint": "1F3CC 1F3FE",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-golfing-dark-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udfff",
  "unicodeName": "person golfing: dark skin tone",
  "codePoint": "1F3CC 1F3FF",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-golfing",
  "character": "\ud83c\udfcc\ufe0f\u200d\u2642\ufe0f",
  "unicodeName": "man golfing",
  "codePoint": "1F3CC FE0F 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-golfing-light-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udffb\u200d\u2642\ufe0f",
  "unicodeName": "man golfing: light skin tone",
  "codePoint": "1F3CC 1F3FB 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-golfing-medium-light-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udffc\u200d\u2642\ufe0f",
  "unicodeName": "man golfing: medium-light skin tone",
  "codePoint": "1F3CC 1F3FC 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-golfing-medium-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udffd\u200d\u2642\ufe0f",
  "unicodeName": "man golfing: medium skin tone",
  "codePoint": "1F3CC 1F3FD 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-golfing-medium-dark-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udffe\u200d\u2642\ufe0f",
  "unicodeName": "man golfing: medium-dark skin tone",
  "codePoint": "1F3CC 1F3FE 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-golfing-dark-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udfff\u200d\u2642\ufe0f",
  "unicodeName": "man golfing: dark skin tone",
  "codePoint": "1F3CC 1F3FF 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-golfing",
  "character": "\ud83c\udfcc\ufe0f\u200d\u2640\ufe0f",
  "unicodeName": "woman golfing",
  "codePoint": "1F3CC FE0F 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-golfing-light-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udffb\u200d\u2640\ufe0f",
  "unicodeName": "woman golfing: light skin tone",
  "codePoint": "1F3CC 1F3FB 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-golfing-medium-light-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udffc\u200d\u2640\ufe0f",
  "unicodeName": "woman golfing: medium-light skin tone",
  "codePoint": "1F3CC 1F3FC 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-golfing-medium-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udffd\u200d\u2640\ufe0f",
  "unicodeName": "woman golfing: medium skin tone",
  "codePoint": "1F3CC 1F3FD 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-golfing-medium-dark-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udffe\u200d\u2640\ufe0f",
  "unicodeName": "woman golfing: medium-dark skin tone",
  "codePoint": "1F3CC 1F3FE 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-golfing-dark-skin-tone",
  "character": "\ud83c\udfcc\ud83c\udfff\u200d\u2640\ufe0f",
  "unicodeName": "woman golfing: dark skin tone",
  "codePoint": "1F3CC 1F3FF 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-surfing",
  "character": "\ud83c\udfc4",
  "unicodeName": "person surfing",
  "codePoint": "1F3C4",
  "group": "people-body",
  "subGroup": "person-sport",
  "variants": [{
    "slug": "person-surfing-light-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udffb"
  }, {
    "slug": "person-surfing-medium-light-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udffc"
  }, {
    "slug": "person-surfing-medium-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udffd"
  }, {
    "slug": "person-surfing-medium-dark-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udffe"
  }, {
    "slug": "person-surfing-dark-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udfff"
  }, {
    "slug": "man-surfing",
    "character": "\ud83c\udfc4\u200d\u2642\ufe0f"
  }, {
    "slug": "man-surfing-light-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-surfing-medium-light-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-surfing-medium-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-surfing-medium-dark-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-surfing-dark-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-surfing",
    "character": "\ud83c\udfc4\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-surfing-light-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-surfing-medium-light-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-surfing-medium-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-surfing-medium-dark-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-surfing-dark-skin-tone",
    "character": "\ud83c\udfc4\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-rowing-boat",
  "character": "\ud83d\udea3",
  "unicodeName": "person rowing boat",
  "codePoint": "1F6A3",
  "group": "people-body",
  "subGroup": "person-sport",
  "variants": [{
    "slug": "person-rowing-boat-light-skin-tone",
    "character": "\ud83d\udea3\ud83c\udffb"
  }, {
    "slug": "person-rowing-boat-medium-light-skin-tone",
    "character": "\ud83d\udea3\ud83c\udffc"
  }, {
    "slug": "person-rowing-boat-medium-skin-tone",
    "character": "\ud83d\udea3\ud83c\udffd"
  }, {
    "slug": "person-rowing-boat-medium-dark-skin-tone",
    "character": "\ud83d\udea3\ud83c\udffe"
  }, {
    "slug": "person-rowing-boat-dark-skin-tone",
    "character": "\ud83d\udea3\ud83c\udfff"
  }, {
    "slug": "man-rowing-boat",
    "character": "\ud83d\udea3\u200d\u2642\ufe0f"
  }, {
    "slug": "man-rowing-boat-light-skin-tone",
    "character": "\ud83d\udea3\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-rowing-boat-medium-light-skin-tone",
    "character": "\ud83d\udea3\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-rowing-boat-medium-skin-tone",
    "character": "\ud83d\udea3\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-rowing-boat-medium-dark-skin-tone",
    "character": "\ud83d\udea3\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-rowing-boat-dark-skin-tone",
    "character": "\ud83d\udea3\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-rowing-boat",
    "character": "\ud83d\udea3\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-rowing-boat-light-skin-tone",
    "character": "\ud83d\udea3\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-rowing-boat-medium-light-skin-tone",
    "character": "\ud83d\udea3\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-rowing-boat-medium-skin-tone",
    "character": "\ud83d\udea3\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-rowing-boat-medium-dark-skin-tone",
    "character": "\ud83d\udea3\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-rowing-boat-dark-skin-tone",
    "character": "\ud83d\udea3\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-swimming",
  "character": "\ud83c\udfca",
  "unicodeName": "person swimming",
  "codePoint": "1F3CA",
  "group": "people-body",
  "subGroup": "person-sport",
  "variants": [{
    "slug": "person-swimming-light-skin-tone",
    "character": "\ud83c\udfca\ud83c\udffb"
  }, {
    "slug": "person-swimming-medium-light-skin-tone",
    "character": "\ud83c\udfca\ud83c\udffc"
  }, {
    "slug": "person-swimming-medium-skin-tone",
    "character": "\ud83c\udfca\ud83c\udffd"
  }, {
    "slug": "person-swimming-medium-dark-skin-tone",
    "character": "\ud83c\udfca\ud83c\udffe"
  }, {
    "slug": "person-swimming-dark-skin-tone",
    "character": "\ud83c\udfca\ud83c\udfff"
  }, {
    "slug": "man-swimming",
    "character": "\ud83c\udfca\u200d\u2642\ufe0f"
  }, {
    "slug": "man-swimming-light-skin-tone",
    "character": "\ud83c\udfca\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-swimming-medium-light-skin-tone",
    "character": "\ud83c\udfca\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-swimming-medium-skin-tone",
    "character": "\ud83c\udfca\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-swimming-medium-dark-skin-tone",
    "character": "\ud83c\udfca\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-swimming-dark-skin-tone",
    "character": "\ud83c\udfca\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-swimming",
    "character": "\ud83c\udfca\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-swimming-light-skin-tone",
    "character": "\ud83c\udfca\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-swimming-medium-light-skin-tone",
    "character": "\ud83c\udfca\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-swimming-medium-skin-tone",
    "character": "\ud83c\udfca\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-swimming-medium-dark-skin-tone",
    "character": "\ud83c\udfca\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-swimming-dark-skin-tone",
    "character": "\ud83c\udfca\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-bouncing-ball",
  "character": "\u26f9\ufe0f",
  "unicodeName": "person bouncing ball",
  "codePoint": "26F9 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-bouncing-ball-light-skin-tone",
  "character": "\u26f9\ud83c\udffb",
  "unicodeName": "person bouncing ball: light skin tone",
  "codePoint": "26F9 1F3FB",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-bouncing-ball-medium-light-skin-tone",
  "character": "\u26f9\ud83c\udffc",
  "unicodeName": "person bouncing ball: medium-light skin tone",
  "codePoint": "26F9 1F3FC",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-bouncing-ball-medium-skin-tone",
  "character": "\u26f9\ud83c\udffd",
  "unicodeName": "person bouncing ball: medium skin tone",
  "codePoint": "26F9 1F3FD",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-bouncing-ball-medium-dark-skin-tone",
  "character": "\u26f9\ud83c\udffe",
  "unicodeName": "person bouncing ball: medium-dark skin tone",
  "codePoint": "26F9 1F3FE",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-bouncing-ball-dark-skin-tone",
  "character": "\u26f9\ud83c\udfff",
  "unicodeName": "person bouncing ball: dark skin tone",
  "codePoint": "26F9 1F3FF",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-bouncing-ball",
  "character": "\u26f9\ufe0f\u200d\u2642\ufe0f",
  "unicodeName": "man bouncing ball",
  "codePoint": "26F9 FE0F 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-bouncing-ball-light-skin-tone",
  "character": "\u26f9\ud83c\udffb\u200d\u2642\ufe0f",
  "unicodeName": "man bouncing ball: light skin tone",
  "codePoint": "26F9 1F3FB 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-bouncing-ball-medium-light-skin-tone",
  "character": "\u26f9\ud83c\udffc\u200d\u2642\ufe0f",
  "unicodeName": "man bouncing ball: medium-light skin tone",
  "codePoint": "26F9 1F3FC 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-bouncing-ball-medium-skin-tone",
  "character": "\u26f9\ud83c\udffd\u200d\u2642\ufe0f",
  "unicodeName": "man bouncing ball: medium skin tone",
  "codePoint": "26F9 1F3FD 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-bouncing-ball-medium-dark-skin-tone",
  "character": "\u26f9\ud83c\udffe\u200d\u2642\ufe0f",
  "unicodeName": "man bouncing ball: medium-dark skin tone",
  "codePoint": "26F9 1F3FE 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-bouncing-ball-dark-skin-tone",
  "character": "\u26f9\ud83c\udfff\u200d\u2642\ufe0f",
  "unicodeName": "man bouncing ball: dark skin tone",
  "codePoint": "26F9 1F3FF 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-bouncing-ball",
  "character": "\u26f9\ufe0f\u200d\u2640\ufe0f",
  "unicodeName": "woman bouncing ball",
  "codePoint": "26F9 FE0F 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-bouncing-ball-light-skin-tone",
  "character": "\u26f9\ud83c\udffb\u200d\u2640\ufe0f",
  "unicodeName": "woman bouncing ball: light skin tone",
  "codePoint": "26F9 1F3FB 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-bouncing-ball-medium-light-skin-tone",
  "character": "\u26f9\ud83c\udffc\u200d\u2640\ufe0f",
  "unicodeName": "woman bouncing ball: medium-light skin tone",
  "codePoint": "26F9 1F3FC 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-bouncing-ball-medium-skin-tone",
  "character": "\u26f9\ud83c\udffd\u200d\u2640\ufe0f",
  "unicodeName": "woman bouncing ball: medium skin tone",
  "codePoint": "26F9 1F3FD 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-bouncing-ball-medium-dark-skin-tone",
  "character": "\u26f9\ud83c\udffe\u200d\u2640\ufe0f",
  "unicodeName": "woman bouncing ball: medium-dark skin tone",
  "codePoint": "26F9 1F3FE 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-bouncing-ball-dark-skin-tone",
  "character": "\u26f9\ud83c\udfff\u200d\u2640\ufe0f",
  "unicodeName": "woman bouncing ball: dark skin tone",
  "codePoint": "26F9 1F3FF 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-lifting-weights",
  "character": "\ud83c\udfcb\ufe0f",
  "unicodeName": "person lifting weights",
  "codePoint": "1F3CB FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-lifting-weights-light-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udffb",
  "unicodeName": "person lifting weights: light skin tone",
  "codePoint": "1F3CB 1F3FB",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-lifting-weights-medium-light-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udffc",
  "unicodeName": "person lifting weights: medium-light skin tone",
  "codePoint": "1F3CB 1F3FC",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-lifting-weights-medium-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udffd",
  "unicodeName": "person lifting weights: medium skin tone",
  "codePoint": "1F3CB 1F3FD",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-lifting-weights-medium-dark-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udffe",
  "unicodeName": "person lifting weights: medium-dark skin tone",
  "codePoint": "1F3CB 1F3FE",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-lifting-weights-dark-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udfff",
  "unicodeName": "person lifting weights: dark skin tone",
  "codePoint": "1F3CB 1F3FF",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-lifting-weights",
  "character": "\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f",
  "unicodeName": "man lifting weights",
  "codePoint": "1F3CB FE0F 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-lifting-weights-light-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udffb\u200d\u2642\ufe0f",
  "unicodeName": "man lifting weights: light skin tone",
  "codePoint": "1F3CB 1F3FB 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-lifting-weights-medium-light-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udffc\u200d\u2642\ufe0f",
  "unicodeName": "man lifting weights: medium-light skin tone",
  "codePoint": "1F3CB 1F3FC 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-lifting-weights-medium-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udffd\u200d\u2642\ufe0f",
  "unicodeName": "man lifting weights: medium skin tone",
  "codePoint": "1F3CB 1F3FD 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-lifting-weights-medium-dark-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udffe\u200d\u2642\ufe0f",
  "unicodeName": "man lifting weights: medium-dark skin tone",
  "codePoint": "1F3CB 1F3FE 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "man-lifting-weights-dark-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udfff\u200d\u2642\ufe0f",
  "unicodeName": "man lifting weights: dark skin tone",
  "codePoint": "1F3CB 1F3FF 200D 2642 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-lifting-weights",
  "character": "\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f",
  "unicodeName": "woman lifting weights",
  "codePoint": "1F3CB FE0F 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-lifting-weights-light-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udffb\u200d\u2640\ufe0f",
  "unicodeName": "woman lifting weights: light skin tone",
  "codePoint": "1F3CB 1F3FB 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-lifting-weights-medium-light-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udffc\u200d\u2640\ufe0f",
  "unicodeName": "woman lifting weights: medium-light skin tone",
  "codePoint": "1F3CB 1F3FC 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-lifting-weights-medium-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udffd\u200d\u2640\ufe0f",
  "unicodeName": "woman lifting weights: medium skin tone",
  "codePoint": "1F3CB 1F3FD 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-lifting-weights-medium-dark-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udffe\u200d\u2640\ufe0f",
  "unicodeName": "woman lifting weights: medium-dark skin tone",
  "codePoint": "1F3CB 1F3FE 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "woman-lifting-weights-dark-skin-tone",
  "character": "\ud83c\udfcb\ud83c\udfff\u200d\u2640\ufe0f",
  "unicodeName": "woman lifting weights: dark skin tone",
  "codePoint": "1F3CB 1F3FF 200D 2640 FE0F",
  "group": "people-body",
  "subGroup": "person-sport"
}, {
  "slug": "person-biking",
  "character": "\ud83d\udeb4",
  "unicodeName": "person biking",
  "codePoint": "1F6B4",
  "group": "people-body",
  "subGroup": "person-sport",
  "variants": [{
    "slug": "person-biking-light-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udffb"
  }, {
    "slug": "person-biking-medium-light-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udffc"
  }, {
    "slug": "person-biking-medium-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udffd"
  }, {
    "slug": "person-biking-medium-dark-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udffe"
  }, {
    "slug": "person-biking-dark-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udfff"
  }, {
    "slug": "man-biking",
    "character": "\ud83d\udeb4\u200d\u2642\ufe0f"
  }, {
    "slug": "man-biking-light-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-biking-medium-light-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-biking-medium-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-biking-medium-dark-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-biking-dark-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-biking",
    "character": "\ud83d\udeb4\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-biking-light-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-biking-medium-light-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-biking-medium-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-biking-medium-dark-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-biking-dark-skin-tone",
    "character": "\ud83d\udeb4\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-mountain-biking",
  "character": "\ud83d\udeb5",
  "unicodeName": "person mountain biking",
  "codePoint": "1F6B5",
  "group": "people-body",
  "subGroup": "person-sport",
  "variants": [{
    "slug": "person-mountain-biking-light-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udffb"
  }, {
    "slug": "person-mountain-biking-medium-light-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udffc"
  }, {
    "slug": "person-mountain-biking-medium-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udffd"
  }, {
    "slug": "person-mountain-biking-medium-dark-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udffe"
  }, {
    "slug": "person-mountain-biking-dark-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udfff"
  }, {
    "slug": "man-mountain-biking",
    "character": "\ud83d\udeb5\u200d\u2642\ufe0f"
  }, {
    "slug": "man-mountain-biking-light-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-mountain-biking-medium-light-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-mountain-biking-medium-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-mountain-biking-medium-dark-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-mountain-biking-dark-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-mountain-biking",
    "character": "\ud83d\udeb5\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-mountain-biking-light-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-mountain-biking-medium-light-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-mountain-biking-medium-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-mountain-biking-medium-dark-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-mountain-biking-dark-skin-tone",
    "character": "\ud83d\udeb5\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-cartwheeling",
  "character": "\ud83e\udd38",
  "unicodeName": "person cartwheeling",
  "codePoint": "1F938",
  "group": "people-body",
  "subGroup": "person-sport",
  "variants": [{
    "slug": "person-cartwheeling-light-skin-tone",
    "character": "\ud83e\udd38\ud83c\udffb"
  }, {
    "slug": "person-cartwheeling-medium-light-skin-tone",
    "character": "\ud83e\udd38\ud83c\udffc"
  }, {
    "slug": "person-cartwheeling-medium-skin-tone",
    "character": "\ud83e\udd38\ud83c\udffd"
  }, {
    "slug": "person-cartwheeling-medium-dark-skin-tone",
    "character": "\ud83e\udd38\ud83c\udffe"
  }, {
    "slug": "person-cartwheeling-dark-skin-tone",
    "character": "\ud83e\udd38\ud83c\udfff"
  }, {
    "slug": "man-cartwheeling",
    "character": "\ud83e\udd38\u200d\u2642\ufe0f"
  }, {
    "slug": "man-cartwheeling-light-skin-tone",
    "character": "\ud83e\udd38\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-cartwheeling-medium-light-skin-tone",
    "character": "\ud83e\udd38\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-cartwheeling-medium-skin-tone",
    "character": "\ud83e\udd38\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-cartwheeling-medium-dark-skin-tone",
    "character": "\ud83e\udd38\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-cartwheeling-dark-skin-tone",
    "character": "\ud83e\udd38\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-cartwheeling",
    "character": "\ud83e\udd38\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-cartwheeling-light-skin-tone",
    "character": "\ud83e\udd38\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-cartwheeling-medium-light-skin-tone",
    "character": "\ud83e\udd38\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-cartwheeling-medium-skin-tone",
    "character": "\ud83e\udd38\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-cartwheeling-medium-dark-skin-tone",
    "character": "\ud83e\udd38\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-cartwheeling-dark-skin-tone",
    "character": "\ud83e\udd38\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "people-wrestling",
  "character": "\ud83e\udd3c",
  "unicodeName": "people wrestling",
  "codePoint": "1F93C",
  "group": "people-body",
  "subGroup": "person-sport",
  "variants": [{
    "slug": "men-wrestling",
    "character": "\ud83e\udd3c\u200d\u2642\ufe0f"
  }, {
    "slug": "women-wrestling",
    "character": "\ud83e\udd3c\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-playing-water-polo",
  "character": "\ud83e\udd3d",
  "unicodeName": "person playing water polo",
  "codePoint": "1F93D",
  "group": "people-body",
  "subGroup": "person-sport",
  "variants": [{
    "slug": "person-playing-water-polo-light-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udffb"
  }, {
    "slug": "person-playing-water-polo-medium-light-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udffc"
  }, {
    "slug": "person-playing-water-polo-medium-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udffd"
  }, {
    "slug": "person-playing-water-polo-medium-dark-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udffe"
  }, {
    "slug": "person-playing-water-polo-dark-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udfff"
  }, {
    "slug": "man-playing-water-polo",
    "character": "\ud83e\udd3d\u200d\u2642\ufe0f"
  }, {
    "slug": "man-playing-water-polo-light-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-playing-water-polo-medium-light-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-playing-water-polo-medium-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-playing-water-polo-medium-dark-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-playing-water-polo-dark-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-playing-water-polo",
    "character": "\ud83e\udd3d\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-playing-water-polo-light-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-playing-water-polo-medium-light-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-playing-water-polo-medium-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-playing-water-polo-medium-dark-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-playing-water-polo-dark-skin-tone",
    "character": "\ud83e\udd3d\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-playing-handball",
  "character": "\ud83e\udd3e",
  "unicodeName": "person playing handball",
  "codePoint": "1F93E",
  "group": "people-body",
  "subGroup": "person-sport",
  "variants": [{
    "slug": "person-playing-handball-light-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udffb"
  }, {
    "slug": "person-playing-handball-medium-light-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udffc"
  }, {
    "slug": "person-playing-handball-medium-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udffd"
  }, {
    "slug": "person-playing-handball-medium-dark-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udffe"
  }, {
    "slug": "person-playing-handball-dark-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udfff"
  }, {
    "slug": "man-playing-handball",
    "character": "\ud83e\udd3e\u200d\u2642\ufe0f"
  }, {
    "slug": "man-playing-handball-light-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-playing-handball-medium-light-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-playing-handball-medium-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-playing-handball-medium-dark-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-playing-handball-dark-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-playing-handball",
    "character": "\ud83e\udd3e\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-playing-handball-light-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-playing-handball-medium-light-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-playing-handball-medium-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-playing-handball-medium-dark-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-playing-handball-dark-skin-tone",
    "character": "\ud83e\udd3e\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-juggling",
  "character": "\ud83e\udd39",
  "unicodeName": "person juggling",
  "codePoint": "1F939",
  "group": "people-body",
  "subGroup": "person-sport",
  "variants": [{
    "slug": "person-juggling-light-skin-tone",
    "character": "\ud83e\udd39\ud83c\udffb"
  }, {
    "slug": "person-juggling-medium-light-skin-tone",
    "character": "\ud83e\udd39\ud83c\udffc"
  }, {
    "slug": "person-juggling-medium-skin-tone",
    "character": "\ud83e\udd39\ud83c\udffd"
  }, {
    "slug": "person-juggling-medium-dark-skin-tone",
    "character": "\ud83e\udd39\ud83c\udffe"
  }, {
    "slug": "person-juggling-dark-skin-tone",
    "character": "\ud83e\udd39\ud83c\udfff"
  }, {
    "slug": "man-juggling",
    "character": "\ud83e\udd39\u200d\u2642\ufe0f"
  }, {
    "slug": "man-juggling-light-skin-tone",
    "character": "\ud83e\udd39\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-juggling-medium-light-skin-tone",
    "character": "\ud83e\udd39\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-juggling-medium-skin-tone",
    "character": "\ud83e\udd39\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-juggling-medium-dark-skin-tone",
    "character": "\ud83e\udd39\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-juggling-dark-skin-tone",
    "character": "\ud83e\udd39\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-juggling",
    "character": "\ud83e\udd39\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-juggling-light-skin-tone",
    "character": "\ud83e\udd39\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-juggling-medium-light-skin-tone",
    "character": "\ud83e\udd39\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-juggling-medium-skin-tone",
    "character": "\ud83e\udd39\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-juggling-medium-dark-skin-tone",
    "character": "\ud83e\udd39\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-juggling-dark-skin-tone",
    "character": "\ud83e\udd39\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-in-lotus-position",
  "character": "\ud83e\uddd8",
  "unicodeName": "person in lotus position",
  "codePoint": "1F9D8",
  "group": "people-body",
  "subGroup": "person-resting",
  "variants": [{
    "slug": "person-in-lotus-position-light-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udffb"
  }, {
    "slug": "person-in-lotus-position-medium-light-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udffc"
  }, {
    "slug": "person-in-lotus-position-medium-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udffd"
  }, {
    "slug": "person-in-lotus-position-medium-dark-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udffe"
  }, {
    "slug": "person-in-lotus-position-dark-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udfff"
  }, {
    "slug": "man-in-lotus-position",
    "character": "\ud83e\uddd8\u200d\u2642\ufe0f"
  }, {
    "slug": "man-in-lotus-position-light-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udffb\u200d\u2642\ufe0f"
  }, {
    "slug": "man-in-lotus-position-medium-light-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udffc\u200d\u2642\ufe0f"
  }, {
    "slug": "man-in-lotus-position-medium-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udffd\u200d\u2642\ufe0f"
  }, {
    "slug": "man-in-lotus-position-medium-dark-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udffe\u200d\u2642\ufe0f"
  }, {
    "slug": "man-in-lotus-position-dark-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udfff\u200d\u2642\ufe0f"
  }, {
    "slug": "woman-in-lotus-position",
    "character": "\ud83e\uddd8\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-in-lotus-position-light-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udffb\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-in-lotus-position-medium-light-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udffc\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-in-lotus-position-medium-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udffd\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-in-lotus-position-medium-dark-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udffe\u200d\u2640\ufe0f"
  }, {
    "slug": "woman-in-lotus-position-dark-skin-tone",
    "character": "\ud83e\uddd8\ud83c\udfff\u200d\u2640\ufe0f"
  }]
}, {
  "slug": "person-taking-bath",
  "character": "\ud83d\udec0",
  "unicodeName": "person taking bath",
  "codePoint": "1F6C0",
  "group": "people-body",
  "subGroup": "person-resting",
  "variants": [{
    "slug": "person-taking-bath-light-skin-tone",
    "character": "\ud83d\udec0\ud83c\udffb"
  }, {
    "slug": "person-taking-bath-medium-light-skin-tone",
    "character": "\ud83d\udec0\ud83c\udffc"
  }, {
    "slug": "person-taking-bath-medium-skin-tone",
    "character": "\ud83d\udec0\ud83c\udffd"
  }, {
    "slug": "person-taking-bath-medium-dark-skin-tone",
    "character": "\ud83d\udec0\ud83c\udffe"
  }, {
    "slug": "person-taking-bath-dark-skin-tone",
    "character": "\ud83d\udec0\ud83c\udfff"
  }]
}, {
  "slug": "person-in-bed",
  "character": "\ud83d\udecc",
  "unicodeName": "person in bed",
  "codePoint": "1F6CC",
  "group": "people-body",
  "subGroup": "person-resting",
  "variants": [{
    "slug": "person-in-bed-light-skin-tone",
    "character": "\ud83d\udecc\ud83c\udffb"
  }, {
    "slug": "person-in-bed-medium-light-skin-tone",
    "character": "\ud83d\udecc\ud83c\udffc"
  }, {
    "slug": "person-in-bed-medium-skin-tone",
    "character": "\ud83d\udecc\ud83c\udffd"
  }, {
    "slug": "person-in-bed-medium-dark-skin-tone",
    "character": "\ud83d\udecc\ud83c\udffe"
  }, {
    "slug": "person-in-bed-dark-skin-tone",
    "character": "\ud83d\udecc\ud83c\udfff"
  }]
}, {
  "slug": "people-holding-hands",
  "character": "\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1",
  "unicodeName": "people holding hands",
  "codePoint": "1F9D1 200D 1F91D 200D 1F9D1",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "women-holding-hands",
  "character": "\ud83d\udc6d",
  "unicodeName": "women holding hands",
  "codePoint": "1F46D",
  "group": "people-body",
  "subGroup": "family",
  "variants": [{
    "slug": "women-holding-hands-light-skin-tone",
    "character": "\ud83d\udc6d\ud83c\udffb"
  }]
}, {
  "slug": "women-holding-hands-medium-light-skin-tone-light-skin-tone",
  "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb",
  "unicodeName": "women holding hands: medium-light skin tone, light skin tone",
  "codePoint": "1F469 1F3FC 200D 1F91D 200D 1F469 1F3FB",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "women-holding-hands-medium-light-skin-tone",
  "character": "\ud83d\udc6d\ud83c\udffc",
  "unicodeName": "women holding hands: medium-light skin tone",
  "codePoint": "1F46D 1F3FC",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "women-holding-hands-medium-skin-tone-light-skin-tone",
  "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb",
  "unicodeName": "women holding hands: medium skin tone, light skin tone",
  "codePoint": "1F469 1F3FD 200D 1F91D 200D 1F469 1F3FB",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "women-holding-hands-medium-skin-tone",
  "character": "\ud83d\udc6d\ud83c\udffd",
  "unicodeName": "women holding hands: medium skin tone",
  "codePoint": "1F46D 1F3FD",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "women-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb",
  "unicodeName": "women holding hands: medium-dark skin tone, light skin tone",
  "codePoint": "1F469 1F3FE 200D 1F91D 200D 1F469 1F3FB",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "women-holding-hands-medium-dark-skin-tone",
  "character": "\ud83d\udc6d\ud83c\udffe",
  "unicodeName": "women holding hands: medium-dark skin tone",
  "codePoint": "1F46D 1F3FE",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "women-holding-hands-dark-skin-tone-light-skin-tone",
  "character": "\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb",
  "unicodeName": "women holding hands: dark skin tone, light skin tone",
  "codePoint": "1F469 1F3FF 200D 1F91D 200D 1F469 1F3FB",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "women-holding-hands-dark-skin-tone",
  "character": "\ud83d\udc6d\ud83c\udfff",
  "unicodeName": "women holding hands: dark skin tone",
  "codePoint": "1F46D 1F3FF",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "woman-and-man-holding-hands",
  "character": "\ud83d\udc6b",
  "unicodeName": "woman and man holding hands",
  "codePoint": "1F46B",
  "group": "people-body",
  "subGroup": "family",
  "variants": [{
    "slug": "woman-and-man-holding-hands-light-skin-tone",
    "character": "\ud83d\udc6b\ud83c\udffb"
  }]
}, {
  "slug": "woman-and-man-holding-hands-light-skin-tone-medium-light-skin-tone",
  "character": "\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffc",
  "unicodeName": "woman and man holding hands: light skin tone, medium-light skin tone",
  "codePoint": "1F469 1F3FB 200D 1F91D 200D 1F468 1F3FC",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "woman-and-man-holding-hands-medium-light-skin-tone",
  "character": "\ud83d\udc6b\ud83c\udffc",
  "unicodeName": "woman and man holding hands: medium-light skin tone",
  "codePoint": "1F46B 1F3FC",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "woman-and-man-holding-hands-medium-light-skin-tone-medium-skin-tone",
  "character": "\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffd",
  "unicodeName": "woman and man holding hands: medium-light skin tone, medium skin tone",
  "codePoint": "1F469 1F3FC 200D 1F91D 200D 1F468 1F3FD",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "woman-and-man-holding-hands-medium-skin-tone",
  "character": "\ud83d\udc6b\ud83c\udffd",
  "unicodeName": "woman and man holding hands: medium skin tone",
  "codePoint": "1F46B 1F3FD",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "woman-and-man-holding-hands-medium-skin-tone-medium-dark-skin-tone",
  "character": "\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffe",
  "unicodeName": "woman and man holding hands: medium skin tone, medium-dark skin tone",
  "codePoint": "1F469 1F3FD 200D 1F91D 200D 1F468 1F3FE",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "woman-and-man-holding-hands-medium-dark-skin-tone",
  "character": "\ud83d\udc6b\ud83c\udffe",
  "unicodeName": "woman and man holding hands: medium-dark skin tone",
  "codePoint": "1F46B 1F3FE",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "woman-and-man-holding-hands-medium-dark-skin-tone-dark-skin-tone",
  "character": "\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udfff",
  "unicodeName": "woman and man holding hands: medium-dark skin tone, dark skin tone",
  "codePoint": "1F469 1F3FE 200D 1F91D 200D 1F468 1F3FF",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "woman-and-man-holding-hands-dark-skin-tone",
  "character": "\ud83d\udc6b\ud83c\udfff",
  "unicodeName": "woman and man holding hands: dark skin tone",
  "codePoint": "1F46B 1F3FF",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "men-holding-hands",
  "character": "\ud83d\udc6c",
  "unicodeName": "men holding hands",
  "codePoint": "1F46C",
  "group": "people-body",
  "subGroup": "family",
  "variants": [{
    "slug": "men-holding-hands-light-skin-tone",
    "character": "\ud83d\udc6c\ud83c\udffb"
  }]
}, {
  "slug": "men-holding-hands-medium-light-skin-tone-light-skin-tone",
  "character": "\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb",
  "unicodeName": "men holding hands: medium-light skin tone, light skin tone",
  "codePoint": "1F468 1F3FC 200D 1F91D 200D 1F468 1F3FB",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "men-holding-hands-medium-light-skin-tone",
  "character": "\ud83d\udc6c\ud83c\udffc",
  "unicodeName": "men holding hands: medium-light skin tone",
  "codePoint": "1F46C 1F3FC",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "men-holding-hands-medium-skin-tone-light-skin-tone",
  "character": "\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb",
  "unicodeName": "men holding hands: medium skin tone, light skin tone",
  "codePoint": "1F468 1F3FD 200D 1F91D 200D 1F468 1F3FB",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "men-holding-hands-medium-skin-tone",
  "character": "\ud83d\udc6c\ud83c\udffd",
  "unicodeName": "men holding hands: medium skin tone",
  "codePoint": "1F46C 1F3FD",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "men-holding-hands-medium-dark-skin-tone-light-skin-tone",
  "character": "\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb",
  "unicodeName": "men holding hands: medium-dark skin tone, light skin tone",
  "codePoint": "1F468 1F3FE 200D 1F91D 200D 1F468 1F3FB",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "men-holding-hands-medium-dark-skin-tone",
  "character": "\ud83d\udc6c\ud83c\udffe",
  "unicodeName": "men holding hands: medium-dark skin tone",
  "codePoint": "1F46C 1F3FE",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "men-holding-hands-dark-skin-tone-light-skin-tone",
  "character": "\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb",
  "unicodeName": "men holding hands: dark skin tone, light skin tone",
  "codePoint": "1F468 1F3FF 200D 1F91D 200D 1F468 1F3FB",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "men-holding-hands-dark-skin-tone",
  "character": "\ud83d\udc6c\ud83c\udfff",
  "unicodeName": "men holding hands: dark skin tone",
  "codePoint": "1F46C 1F3FF",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "kiss",
  "character": "\ud83d\udc8f",
  "unicodeName": "kiss",
  "codePoint": "1F48F",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "kiss-woman-man",
  "character": "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68",
  "unicodeName": "kiss: woman, man",
  "codePoint": "1F469 200D 2764 FE0F 200D 1F48B 200D 1F468 ; fully-qualified",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "kiss-man-man",
  "character": "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68",
  "unicodeName": "kiss: man, man",
  "codePoint": "1F468 200D 2764 FE0F 200D 1F48B 200D 1F468 ; fully-qualified",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "kiss-woman-woman",
  "character": "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69",
  "unicodeName": "kiss: woman, woman",
  "codePoint": "1F469 200D 2764 FE0F 200D 1F48B 200D 1F469 ; fully-qualified",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "couple-with-heart",
  "character": "\ud83d\udc91",
  "unicodeName": "couple with heart",
  "codePoint": "1F491",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "couple-with-heart-woman-man",
  "character": "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc68",
  "unicodeName": "couple with heart: woman, man",
  "codePoint": "1F469 200D 2764 FE0F 200D 1F468",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "couple-with-heart-man-man",
  "character": "\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68",
  "unicodeName": "couple with heart: man, man",
  "codePoint": "1F468 200D 2764 FE0F 200D 1F468",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "couple-with-heart-woman-woman",
  "character": "\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc69",
  "unicodeName": "couple with heart: woman, woman",
  "codePoint": "1F469 200D 2764 FE0F 200D 1F469",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "family",
  "character": "\ud83d\udc6a",
  "unicodeName": "family",
  "codePoint": "1F46A",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "family-man-woman-boy",
  "character": "\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66",
  "unicodeName": "family: man, woman, boy",
  "codePoint": "1F468 200D 1F469 200D 1F466",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "family-woman-woman-boy",
  "character": "\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66",
  "unicodeName": "family: woman, woman, boy",
  "codePoint": "1F469 200D 1F469 200D 1F466",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "family-man-boy",
  "character": "\ud83d\udc68\u200d\ud83d\udc66",
  "unicodeName": "family: man, boy",
  "codePoint": "1F468 200D 1F466",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "family-woman-boy",
  "character": "\ud83d\udc69\u200d\ud83d\udc66",
  "unicodeName": "family: woman, boy",
  "codePoint": "1F469 200D 1F466",
  "group": "people-body",
  "subGroup": "family"
}, {
  "slug": "speaking-head",
  "character": "\ud83d\udde3\ufe0f",
  "unicodeName": "speaking head",
  "codePoint": "1F5E3 FE0F",
  "group": "people-body",
  "subGroup": "person-symbol"
}, {
  "slug": "bust-in-silhouette",
  "character": "\ud83d\udc64",
  "unicodeName": "bust in silhouette",
  "codePoint": "1F464",
  "group": "people-body",
  "subGroup": "person-symbol"
}, {
  "slug": "busts-in-silhouette",
  "character": "\ud83d\udc65",
  "unicodeName": "busts in silhouette",
  "codePoint": "1F465",
  "group": "people-body",
  "subGroup": "person-symbol"
}, {
  "slug": "footprints",
  "character": "\ud83d\udc63",
  "unicodeName": "footprints",
  "codePoint": "1F463",
  "group": "people-body",
  "subGroup": "person-symbol"
}, {
  "slug": "monkey-face",
  "character": "\ud83d\udc35",
  "unicodeName": "monkey face",
  "codePoint": "1F435",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "monkey",
  "character": "\ud83d\udc12",
  "unicodeName": "monkey",
  "codePoint": "1F412",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "gorilla",
  "character": "\ud83e\udd8d",
  "unicodeName": "gorilla",
  "codePoint": "1F98D",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "orangutan",
  "character": "\ud83e\udda7",
  "unicodeName": "orangutan",
  "codePoint": "1F9A7",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "dog-face",
  "character": "\ud83d\udc36",
  "unicodeName": "dog face",
  "codePoint": "1F436",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "dog",
  "character": "\ud83d\udc15",
  "unicodeName": "dog",
  "codePoint": "1F415",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "guide-dog",
  "character": "\ud83e\uddae",
  "unicodeName": "guide dog",
  "codePoint": "1F9AE",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "service-dog",
  "character": "\ud83d\udc15\u200d\ud83e\uddba",
  "unicodeName": "service dog",
  "codePoint": "1F415 200D 1F9BA",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "poodle",
  "character": "\ud83d\udc29",
  "unicodeName": "poodle",
  "codePoint": "1F429",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "wolf",
  "character": "\ud83d\udc3a",
  "unicodeName": "wolf",
  "codePoint": "1F43A",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "fox",
  "character": "\ud83e\udd8a",
  "unicodeName": "fox",
  "codePoint": "1F98A",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "raccoon",
  "character": "\ud83e\udd9d",
  "unicodeName": "raccoon",
  "codePoint": "1F99D",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "cat-face",
  "character": "\ud83d\udc31",
  "unicodeName": "cat face",
  "codePoint": "1F431",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "cat",
  "character": "\ud83d\udc08",
  "unicodeName": "cat",
  "codePoint": "1F408",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "lion",
  "character": "\ud83e\udd81",
  "unicodeName": "lion",
  "codePoint": "1F981",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "tiger-face",
  "character": "\ud83d\udc2f",
  "unicodeName": "tiger face",
  "codePoint": "1F42F",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "tiger",
  "character": "\ud83d\udc05",
  "unicodeName": "tiger",
  "codePoint": "1F405",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "leopard",
  "character": "\ud83d\udc06",
  "unicodeName": "leopard",
  "codePoint": "1F406",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "horse-face",
  "character": "\ud83d\udc34",
  "unicodeName": "horse face",
  "codePoint": "1F434",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "horse",
  "character": "\ud83d\udc0e",
  "unicodeName": "horse",
  "codePoint": "1F40E",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "unicorn",
  "character": "\ud83e\udd84",
  "unicodeName": "unicorn",
  "codePoint": "1F984",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "zebra",
  "character": "\ud83e\udd93",
  "unicodeName": "zebra",
  "codePoint": "1F993",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "deer",
  "character": "\ud83e\udd8c",
  "unicodeName": "deer",
  "codePoint": "1F98C",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "cow-face",
  "character": "\ud83d\udc2e",
  "unicodeName": "cow face",
  "codePoint": "1F42E",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "ox",
  "character": "\ud83d\udc02",
  "unicodeName": "ox",
  "codePoint": "1F402",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "water-buffalo",
  "character": "\ud83d\udc03",
  "unicodeName": "water buffalo",
  "codePoint": "1F403",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "cow",
  "character": "\ud83d\udc04",
  "unicodeName": "cow",
  "codePoint": "1F404",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "pig-face",
  "character": "\ud83d\udc37",
  "unicodeName": "pig face",
  "codePoint": "1F437",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "pig",
  "character": "\ud83d\udc16",
  "unicodeName": "pig",
  "codePoint": "1F416",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "boar",
  "character": "\ud83d\udc17",
  "unicodeName": "boar",
  "codePoint": "1F417",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "pig-nose",
  "character": "\ud83d\udc3d",
  "unicodeName": "pig nose",
  "codePoint": "1F43D",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "ram",
  "character": "\ud83d\udc0f",
  "unicodeName": "ram",
  "codePoint": "1F40F",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "ewe",
  "character": "\ud83d\udc11",
  "unicodeName": "ewe",
  "codePoint": "1F411",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "goat",
  "character": "\ud83d\udc10",
  "unicodeName": "goat",
  "codePoint": "1F410",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "camel",
  "character": "\ud83d\udc2a",
  "unicodeName": "camel",
  "codePoint": "1F42A",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "two-hump-camel",
  "character": "\ud83d\udc2b",
  "unicodeName": "two-hump camel",
  "codePoint": "1F42B",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "llama",
  "character": "\ud83e\udd99",
  "unicodeName": "llama",
  "codePoint": "1F999",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "giraffe",
  "character": "\ud83e\udd92",
  "unicodeName": "giraffe",
  "codePoint": "1F992",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "elephant",
  "character": "\ud83d\udc18",
  "unicodeName": "elephant",
  "codePoint": "1F418",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "rhinoceros",
  "character": "\ud83e\udd8f",
  "unicodeName": "rhinoceros",
  "codePoint": "1F98F",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "hippopotamus",
  "character": "\ud83e\udd9b",
  "unicodeName": "hippopotamus",
  "codePoint": "1F99B",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "mouse-face",
  "character": "\ud83d\udc2d",
  "unicodeName": "mouse face",
  "codePoint": "1F42D",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "mouse",
  "character": "\ud83d\udc01",
  "unicodeName": "mouse",
  "codePoint": "1F401",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "rat",
  "character": "\ud83d\udc00",
  "unicodeName": "rat",
  "codePoint": "1F400",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "hamster",
  "character": "\ud83d\udc39",
  "unicodeName": "hamster",
  "codePoint": "1F439",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "rabbit-face",
  "character": "\ud83d\udc30",
  "unicodeName": "rabbit face",
  "codePoint": "1F430",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "rabbit",
  "character": "\ud83d\udc07",
  "unicodeName": "rabbit",
  "codePoint": "1F407",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "chipmunk",
  "character": "\ud83d\udc3f\ufe0f",
  "unicodeName": "chipmunk",
  "codePoint": "1F43F FE0F",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "hedgehog",
  "character": "\ud83e\udd94",
  "unicodeName": "hedgehog",
  "codePoint": "1F994",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "bat",
  "character": "\ud83e\udd87",
  "unicodeName": "bat",
  "codePoint": "1F987",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "bear",
  "character": "\ud83d\udc3b",
  "unicodeName": "bear",
  "codePoint": "1F43B",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "koala",
  "character": "\ud83d\udc28",
  "unicodeName": "koala",
  "codePoint": "1F428",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "panda",
  "character": "\ud83d\udc3c",
  "unicodeName": "panda",
  "codePoint": "1F43C",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "sloth",
  "character": "\ud83e\udda5",
  "unicodeName": "sloth",
  "codePoint": "1F9A5",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "otter",
  "character": "\ud83e\udda6",
  "unicodeName": "otter",
  "codePoint": "1F9A6",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "skunk",
  "character": "\ud83e\udda8",
  "unicodeName": "skunk",
  "codePoint": "1F9A8",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "kangaroo",
  "character": "\ud83e\udd98",
  "unicodeName": "kangaroo",
  "codePoint": "1F998",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "badger",
  "character": "\ud83e\udda1",
  "unicodeName": "badger",
  "codePoint": "1F9A1",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "paw-prints",
  "character": "\ud83d\udc3e",
  "unicodeName": "paw prints",
  "codePoint": "1F43E",
  "group": "animals-nature",
  "subGroup": "animal-mammal"
}, {
  "slug": "turkey",
  "character": "\ud83e\udd83",
  "unicodeName": "turkey",
  "codePoint": "1F983",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "chicken",
  "character": "\ud83d\udc14",
  "unicodeName": "chicken",
  "codePoint": "1F414",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "rooster",
  "character": "\ud83d\udc13",
  "unicodeName": "rooster",
  "codePoint": "1F413",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "hatching-chick",
  "character": "\ud83d\udc23",
  "unicodeName": "hatching chick",
  "codePoint": "1F423",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "baby-chick",
  "character": "\ud83d\udc24",
  "unicodeName": "baby chick",
  "codePoint": "1F424",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "front-facing-baby-chick",
  "character": "\ud83d\udc25",
  "unicodeName": "front-facing baby chick",
  "codePoint": "1F425",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "bird",
  "character": "\ud83d\udc26",
  "unicodeName": "bird",
  "codePoint": "1F426",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "penguin",
  "character": "\ud83d\udc27",
  "unicodeName": "penguin",
  "codePoint": "1F427",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "dove",
  "character": "\ud83d\udd4a\ufe0f",
  "unicodeName": "dove",
  "codePoint": "1F54A FE0F",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "eagle",
  "character": "\ud83e\udd85",
  "unicodeName": "eagle",
  "codePoint": "1F985",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "duck",
  "character": "\ud83e\udd86",
  "unicodeName": "duck",
  "codePoint": "1F986",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "swan",
  "character": "\ud83e\udda2",
  "unicodeName": "swan",
  "codePoint": "1F9A2",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "owl",
  "character": "\ud83e\udd89",
  "unicodeName": "owl",
  "codePoint": "1F989",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "flamingo",
  "character": "\ud83e\udda9",
  "unicodeName": "flamingo",
  "codePoint": "1F9A9",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "peacock",
  "character": "\ud83e\udd9a",
  "unicodeName": "peacock",
  "codePoint": "1F99A",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "parrot",
  "character": "\ud83e\udd9c",
  "unicodeName": "parrot",
  "codePoint": "1F99C",
  "group": "animals-nature",
  "subGroup": "animal-bird"
}, {
  "slug": "frog",
  "character": "\ud83d\udc38",
  "unicodeName": "frog",
  "codePoint": "1F438",
  "group": "animals-nature",
  "subGroup": "animal-amphibian"
}, {
  "slug": "crocodile",
  "character": "\ud83d\udc0a",
  "unicodeName": "crocodile",
  "codePoint": "1F40A",
  "group": "animals-nature",
  "subGroup": "animal-reptile"
}, {
  "slug": "turtle",
  "character": "\ud83d\udc22",
  "unicodeName": "turtle",
  "codePoint": "1F422",
  "group": "animals-nature",
  "subGroup": "animal-reptile"
}, {
  "slug": "lizard",
  "character": "\ud83e\udd8e",
  "unicodeName": "lizard",
  "codePoint": "1F98E",
  "group": "animals-nature",
  "subGroup": "animal-reptile"
}, {
  "slug": "snake",
  "character": "\ud83d\udc0d",
  "unicodeName": "snake",
  "codePoint": "1F40D",
  "group": "animals-nature",
  "subGroup": "animal-reptile"
}, {
  "slug": "dragon-face",
  "character": "\ud83d\udc32",
  "unicodeName": "dragon face",
  "codePoint": "1F432",
  "group": "animals-nature",
  "subGroup": "animal-reptile"
}, {
  "slug": "dragon",
  "character": "\ud83d\udc09",
  "unicodeName": "dragon",
  "codePoint": "1F409",
  "group": "animals-nature",
  "subGroup": "animal-reptile"
}, {
  "slug": "sauropod",
  "character": "\ud83e\udd95",
  "unicodeName": "sauropod",
  "codePoint": "1F995",
  "group": "animals-nature",
  "subGroup": "animal-reptile"
}, {
  "slug": "t-rex",
  "character": "\ud83e\udd96",
  "unicodeName": "T-Rex",
  "codePoint": "1F996",
  "group": "animals-nature",
  "subGroup": "animal-reptile"
}, {
  "slug": "spouting-whale",
  "character": "\ud83d\udc33",
  "unicodeName": "spouting whale",
  "codePoint": "1F433",
  "group": "animals-nature",
  "subGroup": "animal-marine"
}, {
  "slug": "whale",
  "character": "\ud83d\udc0b",
  "unicodeName": "whale",
  "codePoint": "1F40B",
  "group": "animals-nature",
  "subGroup": "animal-marine"
}, {
  "slug": "dolphin",
  "character": "\ud83d\udc2c",
  "unicodeName": "dolphin",
  "codePoint": "1F42C",
  "group": "animals-nature",
  "subGroup": "animal-marine"
}, {
  "slug": "fish",
  "character": "\ud83d\udc1f",
  "unicodeName": "fish",
  "codePoint": "1F41F",
  "group": "animals-nature",
  "subGroup": "animal-marine"
}, {
  "slug": "tropical-fish",
  "character": "\ud83d\udc20",
  "unicodeName": "tropical fish",
  "codePoint": "1F420",
  "group": "animals-nature",
  "subGroup": "animal-marine"
}, {
  "slug": "blowfish",
  "character": "\ud83d\udc21",
  "unicodeName": "blowfish",
  "codePoint": "1F421",
  "group": "animals-nature",
  "subGroup": "animal-marine"
}, {
  "slug": "shark",
  "character": "\ud83e\udd88",
  "unicodeName": "shark",
  "codePoint": "1F988",
  "group": "animals-nature",
  "subGroup": "animal-marine"
}, {
  "slug": "octopus",
  "character": "\ud83d\udc19",
  "unicodeName": "octopus",
  "codePoint": "1F419",
  "group": "animals-nature",
  "subGroup": "animal-marine"
}, {
  "slug": "spiral-shell",
  "character": "\ud83d\udc1a",
  "unicodeName": "spiral shell",
  "codePoint": "1F41A",
  "group": "animals-nature",
  "subGroup": "animal-marine"
}, {
  "slug": "snail",
  "character": "\ud83d\udc0c",
  "unicodeName": "snail",
  "codePoint": "1F40C",
  "group": "animals-nature",
  "subGroup": "animal-bug"
}, {
  "slug": "butterfly",
  "character": "\ud83e\udd8b",
  "unicodeName": "butterfly",
  "codePoint": "1F98B",
  "group": "animals-nature",
  "subGroup": "animal-bug"
}, {
  "slug": "bug",
  "character": "\ud83d\udc1b",
  "unicodeName": "bug",
  "codePoint": "1F41B",
  "group": "animals-nature",
  "subGroup": "animal-bug"
}, {
  "slug": "ant",
  "character": "\ud83d\udc1c",
  "unicodeName": "ant",
  "codePoint": "1F41C",
  "group": "animals-nature",
  "subGroup": "animal-bug"
}, {
  "slug": "honeybee",
  "character": "\ud83d\udc1d",
  "unicodeName": "honeybee",
  "codePoint": "1F41D",
  "group": "animals-nature",
  "subGroup": "animal-bug"
}, {
  "slug": "lady-beetle",
  "character": "\ud83d\udc1e",
  "unicodeName": "lady beetle",
  "codePoint": "1F41E",
  "group": "animals-nature",
  "subGroup": "animal-bug"
}, {
  "slug": "cricket",
  "character": "\ud83e\udd97",
  "unicodeName": "cricket",
  "codePoint": "1F997",
  "group": "animals-nature",
  "subGroup": "animal-bug"
}, {
  "slug": "spider",
  "character": "\ud83d\udd77\ufe0f",
  "unicodeName": "spider",
  "codePoint": "1F577 FE0F",
  "group": "animals-nature",
  "subGroup": "animal-bug"
}, {
  "slug": "spider-web",
  "character": "\ud83d\udd78\ufe0f",
  "unicodeName": "spider web",
  "codePoint": "1F578 FE0F",
  "group": "animals-nature",
  "subGroup": "animal-bug"
}, {
  "slug": "scorpion",
  "character": "\ud83e\udd82",
  "unicodeName": "scorpion",
  "codePoint": "1F982",
  "group": "animals-nature",
  "subGroup": "animal-bug"
}, {
  "slug": "mosquito",
  "character": "\ud83e\udd9f",
  "unicodeName": "mosquito",
  "codePoint": "1F99F",
  "group": "animals-nature",
  "subGroup": "animal-bug"
}, {
  "slug": "microbe",
  "character": "\ud83e\udda0",
  "unicodeName": "microbe",
  "codePoint": "1F9A0",
  "group": "animals-nature",
  "subGroup": "animal-bug"
}, {
  "slug": "bouquet",
  "character": "\ud83d\udc90",
  "unicodeName": "bouquet",
  "codePoint": "1F490",
  "group": "animals-nature",
  "subGroup": "plant-flower"
}, {
  "slug": "cherry-blossom",
  "character": "\ud83c\udf38",
  "unicodeName": "cherry blossom",
  "codePoint": "1F338",
  "group": "animals-nature",
  "subGroup": "plant-flower"
}, {
  "slug": "white-flower",
  "character": "\ud83d\udcae",
  "unicodeName": "white flower",
  "codePoint": "1F4AE",
  "group": "animals-nature",
  "subGroup": "plant-flower"
}, {
  "slug": "rosette",
  "character": "\ud83c\udff5\ufe0f",
  "unicodeName": "rosette",
  "codePoint": "1F3F5 FE0F",
  "group": "animals-nature",
  "subGroup": "plant-flower"
}, {
  "slug": "rose",
  "character": "\ud83c\udf39",
  "unicodeName": "rose",
  "codePoint": "1F339",
  "group": "animals-nature",
  "subGroup": "plant-flower"
}, {
  "slug": "wilted-flower",
  "character": "\ud83e\udd40",
  "unicodeName": "wilted flower",
  "codePoint": "1F940",
  "group": "animals-nature",
  "subGroup": "plant-flower"
}, {
  "slug": "hibiscus",
  "character": "\ud83c\udf3a",
  "unicodeName": "hibiscus",
  "codePoint": "1F33A",
  "group": "animals-nature",
  "subGroup": "plant-flower"
}, {
  "slug": "sunflower",
  "character": "\ud83c\udf3b",
  "unicodeName": "sunflower",
  "codePoint": "1F33B",
  "group": "animals-nature",
  "subGroup": "plant-flower"
}, {
  "slug": "blossom",
  "character": "\ud83c\udf3c",
  "unicodeName": "blossom",
  "codePoint": "1F33C",
  "group": "animals-nature",
  "subGroup": "plant-flower"
}, {
  "slug": "tulip",
  "character": "\ud83c\udf37",
  "unicodeName": "tulip",
  "codePoint": "1F337",
  "group": "animals-nature",
  "subGroup": "plant-flower"
}, {
  "slug": "seedling",
  "character": "\ud83c\udf31",
  "unicodeName": "seedling",
  "codePoint": "1F331",
  "group": "animals-nature",
  "subGroup": "plant-other"
}, {
  "slug": "evergreen-tree",
  "character": "\ud83c\udf32",
  "unicodeName": "evergreen tree",
  "codePoint": "1F332",
  "group": "animals-nature",
  "subGroup": "plant-other"
}, {
  "slug": "deciduous-tree",
  "character": "\ud83c\udf33",
  "unicodeName": "deciduous tree",
  "codePoint": "1F333",
  "group": "animals-nature",
  "subGroup": "plant-other"
}, {
  "slug": "palm-tree",
  "character": "\ud83c\udf34",
  "unicodeName": "palm tree",
  "codePoint": "1F334",
  "group": "animals-nature",
  "subGroup": "plant-other"
}, {
  "slug": "cactus",
  "character": "\ud83c\udf35",
  "unicodeName": "cactus",
  "codePoint": "1F335",
  "group": "animals-nature",
  "subGroup": "plant-other"
}, {
  "slug": "sheaf-of-rice",
  "character": "\ud83c\udf3e",
  "unicodeName": "sheaf of rice",
  "codePoint": "1F33E",
  "group": "animals-nature",
  "subGroup": "plant-other"
}, {
  "slug": "herb",
  "character": "\ud83c\udf3f",
  "unicodeName": "herb",
  "codePoint": "1F33F",
  "group": "animals-nature",
  "subGroup": "plant-other"
}, {
  "slug": "shamrock",
  "character": "\u2618\ufe0f",
  "unicodeName": "shamrock",
  "codePoint": "2618 FE0F",
  "group": "animals-nature",
  "subGroup": "plant-other"
}, {
  "slug": "four-leaf-clover",
  "character": "\ud83c\udf40",
  "unicodeName": "four leaf clover",
  "codePoint": "1F340",
  "group": "animals-nature",
  "subGroup": "plant-other"
}, {
  "slug": "maple-leaf",
  "character": "\ud83c\udf41",
  "unicodeName": "maple leaf",
  "codePoint": "1F341",
  "group": "animals-nature",
  "subGroup": "plant-other"
}, {
  "slug": "fallen-leaf",
  "character": "\ud83c\udf42",
  "unicodeName": "fallen leaf",
  "codePoint": "1F342",
  "group": "animals-nature",
  "subGroup": "plant-other"
}, {
  "slug": "leaf-fluttering-in-wind",
  "character": "\ud83c\udf43",
  "unicodeName": "leaf fluttering in wind",
  "codePoint": "1F343",
  "group": "animals-nature",
  "subGroup": "plant-other"
}, {
  "slug": "grapes",
  "character": "\ud83c\udf47",
  "unicodeName": "grapes",
  "codePoint": "1F347",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "melon",
  "character": "\ud83c\udf48",
  "unicodeName": "melon",
  "codePoint": "1F348",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "watermelon",
  "character": "\ud83c\udf49",
  "unicodeName": "watermelon",
  "codePoint": "1F349",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "tangerine",
  "character": "\ud83c\udf4a",
  "unicodeName": "tangerine",
  "codePoint": "1F34A",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "lemon",
  "character": "\ud83c\udf4b",
  "unicodeName": "lemon",
  "codePoint": "1F34B",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "banana",
  "character": "\ud83c\udf4c",
  "unicodeName": "banana",
  "codePoint": "1F34C",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "pineapple",
  "character": "\ud83c\udf4d",
  "unicodeName": "pineapple",
  "codePoint": "1F34D",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "mango",
  "character": "\ud83e\udd6d",
  "unicodeName": "mango",
  "codePoint": "1F96D",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "red-apple",
  "character": "\ud83c\udf4e",
  "unicodeName": "red apple",
  "codePoint": "1F34E",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "green-apple",
  "character": "\ud83c\udf4f",
  "unicodeName": "green apple",
  "codePoint": "1F34F",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "pear",
  "character": "\ud83c\udf50",
  "unicodeName": "pear",
  "codePoint": "1F350",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "peach",
  "character": "\ud83c\udf51",
  "unicodeName": "peach",
  "codePoint": "1F351",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "cherries",
  "character": "\ud83c\udf52",
  "unicodeName": "cherries",
  "codePoint": "1F352",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "strawberry",
  "character": "\ud83c\udf53",
  "unicodeName": "strawberry",
  "codePoint": "1F353",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "kiwi-fruit",
  "character": "\ud83e\udd5d",
  "unicodeName": "kiwi fruit",
  "codePoint": "1F95D",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "tomato",
  "character": "\ud83c\udf45",
  "unicodeName": "tomato",
  "codePoint": "1F345",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "coconut",
  "character": "\ud83e\udd65",
  "unicodeName": "coconut",
  "codePoint": "1F965",
  "group": "food-drink",
  "subGroup": "food-fruit"
}, {
  "slug": "avocado",
  "character": "\ud83e\udd51",
  "unicodeName": "avocado",
  "codePoint": "1F951",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "eggplant",
  "character": "\ud83c\udf46",
  "unicodeName": "eggplant",
  "codePoint": "1F346",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "potato",
  "character": "\ud83e\udd54",
  "unicodeName": "potato",
  "codePoint": "1F954",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "carrot",
  "character": "\ud83e\udd55",
  "unicodeName": "carrot",
  "codePoint": "1F955",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "ear-of-corn",
  "character": "\ud83c\udf3d",
  "unicodeName": "ear of corn",
  "codePoint": "1F33D",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "hot-pepper",
  "character": "\ud83c\udf36\ufe0f",
  "unicodeName": "hot pepper",
  "codePoint": "1F336 FE0F",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "cucumber",
  "character": "\ud83e\udd52",
  "unicodeName": "cucumber",
  "codePoint": "1F952",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "leafy-green",
  "character": "\ud83e\udd6c",
  "unicodeName": "leafy green",
  "codePoint": "1F96C",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "broccoli",
  "character": "\ud83e\udd66",
  "unicodeName": "broccoli",
  "codePoint": "1F966",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "garlic",
  "character": "\ud83e\uddc4",
  "unicodeName": "garlic",
  "codePoint": "1F9C4",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "onion",
  "character": "\ud83e\uddc5",
  "unicodeName": "onion",
  "codePoint": "1F9C5",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "mushroom",
  "character": "\ud83c\udf44",
  "unicodeName": "mushroom",
  "codePoint": "1F344",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "peanuts",
  "character": "\ud83e\udd5c",
  "unicodeName": "peanuts",
  "codePoint": "1F95C",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "chestnut",
  "character": "\ud83c\udf30",
  "unicodeName": "chestnut",
  "codePoint": "1F330",
  "group": "food-drink",
  "subGroup": "food-vegetable"
}, {
  "slug": "bread",
  "character": "\ud83c\udf5e",
  "unicodeName": "bread",
  "codePoint": "1F35E",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "croissant",
  "character": "\ud83e\udd50",
  "unicodeName": "croissant",
  "codePoint": "1F950",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "baguette-bread",
  "character": "\ud83e\udd56",
  "unicodeName": "baguette bread",
  "codePoint": "1F956",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "pretzel",
  "character": "\ud83e\udd68",
  "unicodeName": "pretzel",
  "codePoint": "1F968",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "bagel",
  "character": "\ud83e\udd6f",
  "unicodeName": "bagel",
  "codePoint": "1F96F",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "pancakes",
  "character": "\ud83e\udd5e",
  "unicodeName": "pancakes",
  "codePoint": "1F95E",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "waffle",
  "character": "\ud83e\uddc7",
  "unicodeName": "waffle",
  "codePoint": "1F9C7",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "cheese-wedge",
  "character": "\ud83e\uddc0",
  "unicodeName": "cheese wedge",
  "codePoint": "1F9C0",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "meat-on-bone",
  "character": "\ud83c\udf56",
  "unicodeName": "meat on bone",
  "codePoint": "1F356",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "poultry-leg",
  "character": "\ud83c\udf57",
  "unicodeName": "poultry leg",
  "codePoint": "1F357",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "cut-of-meat",
  "character": "\ud83e\udd69",
  "unicodeName": "cut of meat",
  "codePoint": "1F969",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "bacon",
  "character": "\ud83e\udd53",
  "unicodeName": "bacon",
  "codePoint": "1F953",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "hamburger",
  "character": "\ud83c\udf54",
  "unicodeName": "hamburger",
  "codePoint": "1F354",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "french-fries",
  "character": "\ud83c\udf5f",
  "unicodeName": "french fries",
  "codePoint": "1F35F",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "pizza",
  "character": "\ud83c\udf55",
  "unicodeName": "pizza",
  "codePoint": "1F355",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "hot-dog",
  "character": "\ud83c\udf2d",
  "unicodeName": "hot dog",
  "codePoint": "1F32D",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "sandwich",
  "character": "\ud83e\udd6a",
  "unicodeName": "sandwich",
  "codePoint": "1F96A",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "taco",
  "character": "\ud83c\udf2e",
  "unicodeName": "taco",
  "codePoint": "1F32E",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "burrito",
  "character": "\ud83c\udf2f",
  "unicodeName": "burrito",
  "codePoint": "1F32F",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "stuffed-flatbread",
  "character": "\ud83e\udd59",
  "unicodeName": "stuffed flatbread",
  "codePoint": "1F959",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "falafel",
  "character": "\ud83e\uddc6",
  "unicodeName": "falafel",
  "codePoint": "1F9C6",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "egg",
  "character": "\ud83e\udd5a",
  "unicodeName": "egg",
  "codePoint": "1F95A",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "cooking",
  "character": "\ud83c\udf73",
  "unicodeName": "cooking",
  "codePoint": "1F373",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "shallow-pan-of-food",
  "character": "\ud83e\udd58",
  "unicodeName": "shallow pan of food",
  "codePoint": "1F958",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "pot-of-food",
  "character": "\ud83c\udf72",
  "unicodeName": "pot of food",
  "codePoint": "1F372",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "bowl-with-spoon",
  "character": "\ud83e\udd63",
  "unicodeName": "bowl with spoon",
  "codePoint": "1F963",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "green-salad",
  "character": "\ud83e\udd57",
  "unicodeName": "green salad",
  "codePoint": "1F957",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "popcorn",
  "character": "\ud83c\udf7f",
  "unicodeName": "popcorn",
  "codePoint": "1F37F",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "butter",
  "character": "\ud83e\uddc8",
  "unicodeName": "butter",
  "codePoint": "1F9C8",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "salt",
  "character": "\ud83e\uddc2",
  "unicodeName": "salt",
  "codePoint": "1F9C2",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "canned-food",
  "character": "\ud83e\udd6b",
  "unicodeName": "canned food",
  "codePoint": "1F96B",
  "group": "food-drink",
  "subGroup": "food-prepared"
}, {
  "slug": "bento-box",
  "character": "\ud83c\udf71",
  "unicodeName": "bento box",
  "codePoint": "1F371",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "rice-cracker",
  "character": "\ud83c\udf58",
  "unicodeName": "rice cracker",
  "codePoint": "1F358",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "rice-ball",
  "character": "\ud83c\udf59",
  "unicodeName": "rice ball",
  "codePoint": "1F359",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "cooked-rice",
  "character": "\ud83c\udf5a",
  "unicodeName": "cooked rice",
  "codePoint": "1F35A",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "curry-rice",
  "character": "\ud83c\udf5b",
  "unicodeName": "curry rice",
  "codePoint": "1F35B",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "steaming-bowl",
  "character": "\ud83c\udf5c",
  "unicodeName": "steaming bowl",
  "codePoint": "1F35C",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "spaghetti",
  "character": "\ud83c\udf5d",
  "unicodeName": "spaghetti",
  "codePoint": "1F35D",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "roasted-sweet-potato",
  "character": "\ud83c\udf60",
  "unicodeName": "roasted sweet potato",
  "codePoint": "1F360",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "oden",
  "character": "\ud83c\udf62",
  "unicodeName": "oden",
  "codePoint": "1F362",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "sushi",
  "character": "\ud83c\udf63",
  "unicodeName": "sushi",
  "codePoint": "1F363",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "fried-shrimp",
  "character": "\ud83c\udf64",
  "unicodeName": "fried shrimp",
  "codePoint": "1F364",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "fish-cake-with-swirl",
  "character": "\ud83c\udf65",
  "unicodeName": "fish cake with swirl",
  "codePoint": "1F365",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "moon-cake",
  "character": "\ud83e\udd6e",
  "unicodeName": "moon cake",
  "codePoint": "1F96E",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "dango",
  "character": "\ud83c\udf61",
  "unicodeName": "dango",
  "codePoint": "1F361",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "dumpling",
  "character": "\ud83e\udd5f",
  "unicodeName": "dumpling",
  "codePoint": "1F95F",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "fortune-cookie",
  "character": "\ud83e\udd60",
  "unicodeName": "fortune cookie",
  "codePoint": "1F960",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "takeout-box",
  "character": "\ud83e\udd61",
  "unicodeName": "takeout box",
  "codePoint": "1F961",
  "group": "food-drink",
  "subGroup": "food-asian"
}, {
  "slug": "crab",
  "character": "\ud83e\udd80",
  "unicodeName": "crab",
  "codePoint": "1F980",
  "group": "food-drink",
  "subGroup": "food-marine"
}, {
  "slug": "lobster",
  "character": "\ud83e\udd9e",
  "unicodeName": "lobster",
  "codePoint": "1F99E",
  "group": "food-drink",
  "subGroup": "food-marine"
}, {
  "slug": "shrimp",
  "character": "\ud83e\udd90",
  "unicodeName": "shrimp",
  "codePoint": "1F990",
  "group": "food-drink",
  "subGroup": "food-marine"
}, {
  "slug": "squid",
  "character": "\ud83e\udd91",
  "unicodeName": "squid",
  "codePoint": "1F991",
  "group": "food-drink",
  "subGroup": "food-marine"
}, {
  "slug": "oyster",
  "character": "\ud83e\uddaa",
  "unicodeName": "oyster",
  "codePoint": "1F9AA",
  "group": "food-drink",
  "subGroup": "food-marine"
}, {
  "slug": "soft-ice-cream",
  "character": "\ud83c\udf66",
  "unicodeName": "soft ice cream",
  "codePoint": "1F366",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "shaved-ice",
  "character": "\ud83c\udf67",
  "unicodeName": "shaved ice",
  "codePoint": "1F367",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "ice-cream",
  "character": "\ud83c\udf68",
  "unicodeName": "ice cream",
  "codePoint": "1F368",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "doughnut",
  "character": "\ud83c\udf69",
  "unicodeName": "doughnut",
  "codePoint": "1F369",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "cookie",
  "character": "\ud83c\udf6a",
  "unicodeName": "cookie",
  "codePoint": "1F36A",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "birthday-cake",
  "character": "\ud83c\udf82",
  "unicodeName": "birthday cake",
  "codePoint": "1F382",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "shortcake",
  "character": "\ud83c\udf70",
  "unicodeName": "shortcake",
  "codePoint": "1F370",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "cupcake",
  "character": "\ud83e\uddc1",
  "unicodeName": "cupcake",
  "codePoint": "1F9C1",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "pie",
  "character": "\ud83e\udd67",
  "unicodeName": "pie",
  "codePoint": "1F967",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "chocolate-bar",
  "character": "\ud83c\udf6b",
  "unicodeName": "chocolate bar",
  "codePoint": "1F36B",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "candy",
  "character": "\ud83c\udf6c",
  "unicodeName": "candy",
  "codePoint": "1F36C",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "lollipop",
  "character": "\ud83c\udf6d",
  "unicodeName": "lollipop",
  "codePoint": "1F36D",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "custard",
  "character": "\ud83c\udf6e",
  "unicodeName": "custard",
  "codePoint": "1F36E",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "honey-pot",
  "character": "\ud83c\udf6f",
  "unicodeName": "honey pot",
  "codePoint": "1F36F",
  "group": "food-drink",
  "subGroup": "food-sweet"
}, {
  "slug": "baby-bottle",
  "character": "\ud83c\udf7c",
  "unicodeName": "baby bottle",
  "codePoint": "1F37C",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "glass-of-milk",
  "character": "\ud83e\udd5b",
  "unicodeName": "glass of milk",
  "codePoint": "1F95B",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "hot-beverage",
  "character": "\u2615",
  "unicodeName": "hot beverage",
  "codePoint": "2615",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "teacup-without-handle",
  "character": "\ud83c\udf75",
  "unicodeName": "teacup without handle",
  "codePoint": "1F375",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "sake",
  "character": "\ud83c\udf76",
  "unicodeName": "sake",
  "codePoint": "1F376",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "bottle-with-popping-cork",
  "character": "\ud83c\udf7e",
  "unicodeName": "bottle with popping cork",
  "codePoint": "1F37E",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "wine-glass",
  "character": "\ud83c\udf77",
  "unicodeName": "wine glass",
  "codePoint": "1F377",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "cocktail-glass",
  "character": "\ud83c\udf78",
  "unicodeName": "cocktail glass",
  "codePoint": "1F378",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "tropical-drink",
  "character": "\ud83c\udf79",
  "unicodeName": "tropical drink",
  "codePoint": "1F379",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "beer-mug",
  "character": "\ud83c\udf7a",
  "unicodeName": "beer mug",
  "codePoint": "1F37A",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "clinking-beer-mugs",
  "character": "\ud83c\udf7b",
  "unicodeName": "clinking beer mugs",
  "codePoint": "1F37B",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "clinking-glasses",
  "character": "\ud83e\udd42",
  "unicodeName": "clinking glasses",
  "codePoint": "1F942",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "tumbler-glass",
  "character": "\ud83e\udd43",
  "unicodeName": "tumbler glass",
  "codePoint": "1F943",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "cup-with-straw",
  "character": "\ud83e\udd64",
  "unicodeName": "cup with straw",
  "codePoint": "1F964",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "beverage-box",
  "character": "\ud83e\uddc3",
  "unicodeName": "beverage box",
  "codePoint": "1F9C3",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "mate",
  "character": "\ud83e\uddc9",
  "unicodeName": "mate",
  "codePoint": "1F9C9",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "ice-cube",
  "character": "\ud83e\uddca",
  "unicodeName": "ice cube",
  "codePoint": "1F9CA",
  "group": "food-drink",
  "subGroup": "drink"
}, {
  "slug": "chopsticks",
  "character": "\ud83e\udd62",
  "unicodeName": "chopsticks",
  "codePoint": "1F962",
  "group": "food-drink",
  "subGroup": "dishware"
}, {
  "slug": "fork-and-knife-with-plate",
  "character": "\ud83c\udf7d\ufe0f",
  "unicodeName": "fork and knife with plate",
  "codePoint": "1F37D FE0F",
  "group": "food-drink",
  "subGroup": "dishware"
}, {
  "slug": "fork-and-knife",
  "character": "\ud83c\udf74",
  "unicodeName": "fork and knife",
  "codePoint": "1F374",
  "group": "food-drink",
  "subGroup": "dishware"
}, {
  "slug": "spoon",
  "character": "\ud83e\udd44",
  "unicodeName": "spoon",
  "codePoint": "1F944",
  "group": "food-drink",
  "subGroup": "dishware"
}, {
  "slug": "kitchen-knife",
  "character": "\ud83d\udd2a",
  "unicodeName": "kitchen knife",
  "codePoint": "1F52A",
  "group": "food-drink",
  "subGroup": "dishware"
}, {
  "slug": "amphora",
  "character": "\ud83c\udffa",
  "unicodeName": "amphora",
  "codePoint": "1F3FA",
  "group": "food-drink",
  "subGroup": "dishware"
}, {
  "slug": "globe-showing-europe-africa",
  "character": "\ud83c\udf0d",
  "unicodeName": "globe showing Europe-Africa",
  "codePoint": "1F30D",
  "group": "travel-places",
  "subGroup": "place-map"
}, {
  "slug": "globe-showing-americas",
  "character": "\ud83c\udf0e",
  "unicodeName": "globe showing Americas",
  "codePoint": "1F30E",
  "group": "travel-places",
  "subGroup": "place-map"
}, {
  "slug": "globe-showing-asia-australia",
  "character": "\ud83c\udf0f",
  "unicodeName": "globe showing Asia-Australia",
  "codePoint": "1F30F",
  "group": "travel-places",
  "subGroup": "place-map"
}, {
  "slug": "globe-with-meridians",
  "character": "\ud83c\udf10",
  "unicodeName": "globe with meridians",
  "codePoint": "1F310",
  "group": "travel-places",
  "subGroup": "place-map"
}, {
  "slug": "world-map",
  "character": "\ud83d\uddfa\ufe0f",
  "unicodeName": "world map",
  "codePoint": "1F5FA FE0F",
  "group": "travel-places",
  "subGroup": "place-map"
}, {
  "slug": "map-of-japan",
  "character": "\ud83d\uddfe",
  "unicodeName": "map of Japan",
  "codePoint": "1F5FE",
  "group": "travel-places",
  "subGroup": "place-map"
}, {
  "slug": "compass",
  "character": "\ud83e\udded",
  "unicodeName": "compass",
  "codePoint": "1F9ED",
  "group": "travel-places",
  "subGroup": "place-map"
}, {
  "slug": "snow-capped-mountain",
  "character": "\ud83c\udfd4\ufe0f",
  "unicodeName": "snow-capped mountain",
  "codePoint": "1F3D4 FE0F",
  "group": "travel-places",
  "subGroup": "place-geographic"
}, {
  "slug": "mountain",
  "character": "\u26f0\ufe0f",
  "unicodeName": "mountain",
  "codePoint": "26F0 FE0F",
  "group": "travel-places",
  "subGroup": "place-geographic"
}, {
  "slug": "volcano",
  "character": "\ud83c\udf0b",
  "unicodeName": "volcano",
  "codePoint": "1F30B",
  "group": "travel-places",
  "subGroup": "place-geographic"
}, {
  "slug": "mount-fuji",
  "character": "\ud83d\uddfb",
  "unicodeName": "mount fuji",
  "codePoint": "1F5FB",
  "group": "travel-places",
  "subGroup": "place-geographic"
}, {
  "slug": "camping",
  "character": "\ud83c\udfd5\ufe0f",
  "unicodeName": "camping",
  "codePoint": "1F3D5 FE0F",
  "group": "travel-places",
  "subGroup": "place-geographic"
}, {
  "slug": "beach-with-umbrella",
  "character": "\ud83c\udfd6\ufe0f",
  "unicodeName": "beach with umbrella",
  "codePoint": "1F3D6 FE0F",
  "group": "travel-places",
  "subGroup": "place-geographic"
}, {
  "slug": "desert",
  "character": "\ud83c\udfdc\ufe0f",
  "unicodeName": "desert",
  "codePoint": "1F3DC FE0F",
  "group": "travel-places",
  "subGroup": "place-geographic"
}, {
  "slug": "desert-island",
  "character": "\ud83c\udfdd\ufe0f",
  "unicodeName": "desert island",
  "codePoint": "1F3DD FE0F",
  "group": "travel-places",
  "subGroup": "place-geographic"
}, {
  "slug": "national-park",
  "character": "\ud83c\udfde\ufe0f",
  "unicodeName": "national park",
  "codePoint": "1F3DE FE0F",
  "group": "travel-places",
  "subGroup": "place-geographic"
}, {
  "slug": "stadium",
  "character": "\ud83c\udfdf\ufe0f",
  "unicodeName": "stadium",
  "codePoint": "1F3DF FE0F",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "classical-building",
  "character": "\ud83c\udfdb\ufe0f",
  "unicodeName": "classical building",
  "codePoint": "1F3DB FE0F",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "building-construction",
  "character": "\ud83c\udfd7\ufe0f",
  "unicodeName": "building construction",
  "codePoint": "1F3D7 FE0F",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "brick",
  "character": "\ud83e\uddf1",
  "unicodeName": "brick",
  "codePoint": "1F9F1",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "houses",
  "character": "\ud83c\udfd8\ufe0f",
  "unicodeName": "houses",
  "codePoint": "1F3D8 FE0F",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "derelict-house",
  "character": "\ud83c\udfda\ufe0f",
  "unicodeName": "derelict house",
  "codePoint": "1F3DA FE0F",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "house",
  "character": "\ud83c\udfe0",
  "unicodeName": "house",
  "codePoint": "1F3E0",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "house-with-garden",
  "character": "\ud83c\udfe1",
  "unicodeName": "house with garden",
  "codePoint": "1F3E1",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "office-building",
  "character": "\ud83c\udfe2",
  "unicodeName": "office building",
  "codePoint": "1F3E2",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "japanese-post-office",
  "character": "\ud83c\udfe3",
  "unicodeName": "Japanese post office",
  "codePoint": "1F3E3",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "post-office",
  "character": "\ud83c\udfe4",
  "unicodeName": "post office",
  "codePoint": "1F3E4",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "hospital",
  "character": "\ud83c\udfe5",
  "unicodeName": "hospital",
  "codePoint": "1F3E5",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "bank",
  "character": "\ud83c\udfe6",
  "unicodeName": "bank",
  "codePoint": "1F3E6",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "hotel",
  "character": "\ud83c\udfe8",
  "unicodeName": "hotel",
  "codePoint": "1F3E8",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "love-hotel",
  "character": "\ud83c\udfe9",
  "unicodeName": "love hotel",
  "codePoint": "1F3E9",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "convenience-store",
  "character": "\ud83c\udfea",
  "unicodeName": "convenience store",
  "codePoint": "1F3EA",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "school",
  "character": "\ud83c\udfeb",
  "unicodeName": "school",
  "codePoint": "1F3EB",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "department-store",
  "character": "\ud83c\udfec",
  "unicodeName": "department store",
  "codePoint": "1F3EC",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "factory",
  "character": "\ud83c\udfed",
  "unicodeName": "factory",
  "codePoint": "1F3ED",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "japanese-castle",
  "character": "\ud83c\udfef",
  "unicodeName": "Japanese castle",
  "codePoint": "1F3EF",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "castle",
  "character": "\ud83c\udff0",
  "unicodeName": "castle",
  "codePoint": "1F3F0",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "wedding",
  "character": "\ud83d\udc92",
  "unicodeName": "wedding",
  "codePoint": "1F492",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "tokyo-tower",
  "character": "\ud83d\uddfc",
  "unicodeName": "Tokyo tower",
  "codePoint": "1F5FC",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "statue-of-liberty",
  "character": "\ud83d\uddfd",
  "unicodeName": "Statue of Liberty",
  "codePoint": "1F5FD",
  "group": "travel-places",
  "subGroup": "place-building"
}, {
  "slug": "church",
  "character": "\u26ea",
  "unicodeName": "church",
  "codePoint": "26EA",
  "group": "travel-places",
  "subGroup": "place-religious"
}, {
  "slug": "mosque",
  "character": "\ud83d\udd4c",
  "unicodeName": "mosque",
  "codePoint": "1F54C",
  "group": "travel-places",
  "subGroup": "place-religious"
}, {
  "slug": "hindu-temple",
  "character": "\ud83d\uded5",
  "unicodeName": "hindu temple",
  "codePoint": "1F6D5",
  "group": "travel-places",
  "subGroup": "place-religious"
}, {
  "slug": "synagogue",
  "character": "\ud83d\udd4d",
  "unicodeName": "synagogue",
  "codePoint": "1F54D",
  "group": "travel-places",
  "subGroup": "place-religious"
}, {
  "slug": "shinto-shrine",
  "character": "\u26e9\ufe0f",
  "unicodeName": "shinto shrine",
  "codePoint": "26E9 FE0F",
  "group": "travel-places",
  "subGroup": "place-religious"
}, {
  "slug": "kaaba",
  "character": "\ud83d\udd4b",
  "unicodeName": "kaaba",
  "codePoint": "1F54B",
  "group": "travel-places",
  "subGroup": "place-religious"
}, {
  "slug": "fountain",
  "character": "\u26f2",
  "unicodeName": "fountain",
  "codePoint": "26F2",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "tent",
  "character": "\u26fa",
  "unicodeName": "tent",
  "codePoint": "26FA",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "foggy",
  "character": "\ud83c\udf01",
  "unicodeName": "foggy",
  "codePoint": "1F301",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "night-with-stars",
  "character": "\ud83c\udf03",
  "unicodeName": "night with stars",
  "codePoint": "1F303",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "cityscape",
  "character": "\ud83c\udfd9\ufe0f",
  "unicodeName": "cityscape",
  "codePoint": "1F3D9 FE0F",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "sunrise-over-mountains",
  "character": "\ud83c\udf04",
  "unicodeName": "sunrise over mountains",
  "codePoint": "1F304",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "sunrise",
  "character": "\ud83c\udf05",
  "unicodeName": "sunrise",
  "codePoint": "1F305",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "cityscape-at-dusk",
  "character": "\ud83c\udf06",
  "unicodeName": "cityscape at dusk",
  "codePoint": "1F306",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "sunset",
  "character": "\ud83c\udf07",
  "unicodeName": "sunset",
  "codePoint": "1F307",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "bridge-at-night",
  "character": "\ud83c\udf09",
  "unicodeName": "bridge at night",
  "codePoint": "1F309",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "hot-springs",
  "character": "\u2668\ufe0f",
  "unicodeName": "hot springs",
  "codePoint": "2668 FE0F",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "carousel-horse",
  "character": "\ud83c\udfa0",
  "unicodeName": "carousel horse",
  "codePoint": "1F3A0",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "ferris-wheel",
  "character": "\ud83c\udfa1",
  "unicodeName": "ferris wheel",
  "codePoint": "1F3A1",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "roller-coaster",
  "character": "\ud83c\udfa2",
  "unicodeName": "roller coaster",
  "codePoint": "1F3A2",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "barber-pole",
  "character": "\ud83d\udc88",
  "unicodeName": "barber pole",
  "codePoint": "1F488",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "circus-tent",
  "character": "\ud83c\udfaa",
  "unicodeName": "circus tent",
  "codePoint": "1F3AA",
  "group": "travel-places",
  "subGroup": "place-other"
}, {
  "slug": "locomotive",
  "character": "\ud83d\ude82",
  "unicodeName": "locomotive",
  "codePoint": "1F682",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "railway-car",
  "character": "\ud83d\ude83",
  "unicodeName": "railway car",
  "codePoint": "1F683",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "high-speed-train",
  "character": "\ud83d\ude84",
  "unicodeName": "high-speed train",
  "codePoint": "1F684",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "bullet-train",
  "character": "\ud83d\ude85",
  "unicodeName": "bullet train",
  "codePoint": "1F685",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "train",
  "character": "\ud83d\ude86",
  "unicodeName": "train",
  "codePoint": "1F686",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "metro",
  "character": "\ud83d\ude87",
  "unicodeName": "metro",
  "codePoint": "1F687",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "light-rail",
  "character": "\ud83d\ude88",
  "unicodeName": "light rail",
  "codePoint": "1F688",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "station",
  "character": "\ud83d\ude89",
  "unicodeName": "station",
  "codePoint": "1F689",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "tram",
  "character": "\ud83d\ude8a",
  "unicodeName": "tram",
  "codePoint": "1F68A",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "monorail",
  "character": "\ud83d\ude9d",
  "unicodeName": "monorail",
  "codePoint": "1F69D",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "mountain-railway",
  "character": "\ud83d\ude9e",
  "unicodeName": "mountain railway",
  "codePoint": "1F69E",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "tram-car",
  "character": "\ud83d\ude8b",
  "unicodeName": "tram car",
  "codePoint": "1F68B",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "bus",
  "character": "\ud83d\ude8c",
  "unicodeName": "bus",
  "codePoint": "1F68C",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "oncoming-bus",
  "character": "\ud83d\ude8d",
  "unicodeName": "oncoming bus",
  "codePoint": "1F68D",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "trolleybus",
  "character": "\ud83d\ude8e",
  "unicodeName": "trolleybus",
  "codePoint": "1F68E",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "minibus",
  "character": "\ud83d\ude90",
  "unicodeName": "minibus",
  "codePoint": "1F690",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "ambulance",
  "character": "\ud83d\ude91",
  "unicodeName": "ambulance",
  "codePoint": "1F691",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "fire-engine",
  "character": "\ud83d\ude92",
  "unicodeName": "fire engine",
  "codePoint": "1F692",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "police-car",
  "character": "\ud83d\ude93",
  "unicodeName": "police car",
  "codePoint": "1F693",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "oncoming-police-car",
  "character": "\ud83d\ude94",
  "unicodeName": "oncoming police car",
  "codePoint": "1F694",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "taxi",
  "character": "\ud83d\ude95",
  "unicodeName": "taxi",
  "codePoint": "1F695",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "oncoming-taxi",
  "character": "\ud83d\ude96",
  "unicodeName": "oncoming taxi",
  "codePoint": "1F696",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "automobile",
  "character": "\ud83d\ude97",
  "unicodeName": "automobile",
  "codePoint": "1F697",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "oncoming-automobile",
  "character": "\ud83d\ude98",
  "unicodeName": "oncoming automobile",
  "codePoint": "1F698",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "sport-utility-vehicle",
  "character": "\ud83d\ude99",
  "unicodeName": "sport utility vehicle",
  "codePoint": "1F699",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "delivery-truck",
  "character": "\ud83d\ude9a",
  "unicodeName": "delivery truck",
  "codePoint": "1F69A",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "articulated-lorry",
  "character": "\ud83d\ude9b",
  "unicodeName": "articulated lorry",
  "codePoint": "1F69B",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "tractor",
  "character": "\ud83d\ude9c",
  "unicodeName": "tractor",
  "codePoint": "1F69C",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "racing-car",
  "character": "\ud83c\udfce\ufe0f",
  "unicodeName": "racing car",
  "codePoint": "1F3CE FE0F",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "motorcycle",
  "character": "\ud83c\udfcd\ufe0f",
  "unicodeName": "motorcycle",
  "codePoint": "1F3CD FE0F",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "motor-scooter",
  "character": "\ud83d\udef5",
  "unicodeName": "motor scooter",
  "codePoint": "1F6F5",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "manual-wheelchair",
  "character": "\ud83e\uddbd",
  "unicodeName": "manual wheelchair",
  "codePoint": "1F9BD",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "motorized-wheelchair",
  "character": "\ud83e\uddbc",
  "unicodeName": "motorized wheelchair",
  "codePoint": "1F9BC",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "auto-rickshaw",
  "character": "\ud83d\udefa",
  "unicodeName": "auto rickshaw",
  "codePoint": "1F6FA",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "bicycle",
  "character": "\ud83d\udeb2",
  "unicodeName": "bicycle",
  "codePoint": "1F6B2",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "kick-scooter",
  "character": "\ud83d\udef4",
  "unicodeName": "kick scooter",
  "codePoint": "1F6F4",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "skateboard",
  "character": "\ud83d\udef9",
  "unicodeName": "skateboard",
  "codePoint": "1F6F9",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "bus-stop",
  "character": "\ud83d\ude8f",
  "unicodeName": "bus stop",
  "codePoint": "1F68F",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "motorway",
  "character": "\ud83d\udee3\ufe0f",
  "unicodeName": "motorway",
  "codePoint": "1F6E3 FE0F",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "railway-track",
  "character": "\ud83d\udee4\ufe0f",
  "unicodeName": "railway track",
  "codePoint": "1F6E4 FE0F",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "oil-drum",
  "character": "\ud83d\udee2\ufe0f",
  "unicodeName": "oil drum",
  "codePoint": "1F6E2 FE0F",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "fuel-pump",
  "character": "\u26fd",
  "unicodeName": "fuel pump",
  "codePoint": "26FD",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "police-car-light",
  "character": "\ud83d\udea8",
  "unicodeName": "police car light",
  "codePoint": "1F6A8",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "horizontal-traffic-light",
  "character": "\ud83d\udea5",
  "unicodeName": "horizontal traffic light",
  "codePoint": "1F6A5",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "vertical-traffic-light",
  "character": "\ud83d\udea6",
  "unicodeName": "vertical traffic light",
  "codePoint": "1F6A6",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "stop-sign",
  "character": "\ud83d\uded1",
  "unicodeName": "stop sign",
  "codePoint": "1F6D1",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "construction",
  "character": "\ud83d\udea7",
  "unicodeName": "construction",
  "codePoint": "1F6A7",
  "group": "travel-places",
  "subGroup": "transport-ground"
}, {
  "slug": "anchor",
  "character": "\u2693",
  "unicodeName": "anchor",
  "codePoint": "2693",
  "group": "travel-places",
  "subGroup": "transport-water"
}, {
  "slug": "sailboat",
  "character": "\u26f5",
  "unicodeName": "sailboat",
  "codePoint": "26F5",
  "group": "travel-places",
  "subGroup": "transport-water"
}, {
  "slug": "canoe",
  "character": "\ud83d\udef6",
  "unicodeName": "canoe",
  "codePoint": "1F6F6",
  "group": "travel-places",
  "subGroup": "transport-water"
}, {
  "slug": "speedboat",
  "character": "\ud83d\udea4",
  "unicodeName": "speedboat",
  "codePoint": "1F6A4",
  "group": "travel-places",
  "subGroup": "transport-water"
}, {
  "slug": "passenger-ship",
  "character": "\ud83d\udef3\ufe0f",
  "unicodeName": "passenger ship",
  "codePoint": "1F6F3 FE0F",
  "group": "travel-places",
  "subGroup": "transport-water"
}, {
  "slug": "ferry",
  "character": "\u26f4\ufe0f",
  "unicodeName": "ferry",
  "codePoint": "26F4 FE0F",
  "group": "travel-places",
  "subGroup": "transport-water"
}, {
  "slug": "motor-boat",
  "character": "\ud83d\udee5\ufe0f",
  "unicodeName": "motor boat",
  "codePoint": "1F6E5 FE0F",
  "group": "travel-places",
  "subGroup": "transport-water"
}, {
  "slug": "ship",
  "character": "\ud83d\udea2",
  "unicodeName": "ship",
  "codePoint": "1F6A2",
  "group": "travel-places",
  "subGroup": "transport-water"
}, {
  "slug": "airplane",
  "character": "\u2708\ufe0f",
  "unicodeName": "airplane",
  "codePoint": "2708 FE0F",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "small-airplane",
  "character": "\ud83d\udee9\ufe0f",
  "unicodeName": "small airplane",
  "codePoint": "1F6E9 FE0F",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "airplane-departure",
  "character": "\ud83d\udeeb",
  "unicodeName": "airplane departure",
  "codePoint": "1F6EB",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "airplane-arrival",
  "character": "\ud83d\udeec",
  "unicodeName": "airplane arrival",
  "codePoint": "1F6EC",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "parachute",
  "character": "\ud83e\ude82",
  "unicodeName": "parachute",
  "codePoint": "1FA82",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "seat",
  "character": "\ud83d\udcba",
  "unicodeName": "seat",
  "codePoint": "1F4BA",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "helicopter",
  "character": "\ud83d\ude81",
  "unicodeName": "helicopter",
  "codePoint": "1F681",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "suspension-railway",
  "character": "\ud83d\ude9f",
  "unicodeName": "suspension railway",
  "codePoint": "1F69F",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "mountain-cableway",
  "character": "\ud83d\udea0",
  "unicodeName": "mountain cableway",
  "codePoint": "1F6A0",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "aerial-tramway",
  "character": "\ud83d\udea1",
  "unicodeName": "aerial tramway",
  "codePoint": "1F6A1",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "satellite",
  "character": "\ud83d\udef0\ufe0f",
  "unicodeName": "satellite",
  "codePoint": "1F6F0 FE0F",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "rocket",
  "character": "\ud83d\ude80",
  "unicodeName": "rocket",
  "codePoint": "1F680",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "flying-saucer",
  "character": "\ud83d\udef8",
  "unicodeName": "flying saucer",
  "codePoint": "1F6F8",
  "group": "travel-places",
  "subGroup": "transport-air"
}, {
  "slug": "bellhop-bell",
  "character": "\ud83d\udece\ufe0f",
  "unicodeName": "bellhop bell",
  "codePoint": "1F6CE FE0F",
  "group": "travel-places",
  "subGroup": "hotel"
}, {
  "slug": "luggage",
  "character": "\ud83e\uddf3",
  "unicodeName": "luggage",
  "codePoint": "1F9F3",
  "group": "travel-places",
  "subGroup": "hotel"
}, {
  "slug": "hourglass-done",
  "character": "\u231b",
  "unicodeName": "hourglass done",
  "codePoint": "231B",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "hourglass-not-done",
  "character": "\u23f3",
  "unicodeName": "hourglass not done",
  "codePoint": "23F3",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "watch",
  "character": "\u231a",
  "unicodeName": "watch",
  "codePoint": "231A",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "alarm-clock",
  "character": "\u23f0",
  "unicodeName": "alarm clock",
  "codePoint": "23F0",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "stopwatch",
  "character": "\u23f1\ufe0f",
  "unicodeName": "stopwatch",
  "codePoint": "23F1 FE0F",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "timer-clock",
  "character": "\u23f2\ufe0f",
  "unicodeName": "timer clock",
  "codePoint": "23F2 FE0F",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "mantelpiece-clock",
  "character": "\ud83d\udd70\ufe0f",
  "unicodeName": "mantelpiece clock",
  "codePoint": "1F570 FE0F",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "twelve-o-clock",
  "character": "\ud83d\udd5b",
  "unicodeName": "twelve o\u2019clock",
  "codePoint": "1F55B",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "twelve-thirty",
  "character": "\ud83d\udd67",
  "unicodeName": "twelve-thirty",
  "codePoint": "1F567",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "one-o-clock",
  "character": "\ud83d\udd50",
  "unicodeName": "one o\u2019clock",
  "codePoint": "1F550",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "one-thirty",
  "character": "\ud83d\udd5c",
  "unicodeName": "one-thirty",
  "codePoint": "1F55C",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "two-o-clock",
  "character": "\ud83d\udd51",
  "unicodeName": "two o\u2019clock",
  "codePoint": "1F551",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "two-thirty",
  "character": "\ud83d\udd5d",
  "unicodeName": "two-thirty",
  "codePoint": "1F55D",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "three-o-clock",
  "character": "\ud83d\udd52",
  "unicodeName": "three o\u2019clock",
  "codePoint": "1F552",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "three-thirty",
  "character": "\ud83d\udd5e",
  "unicodeName": "three-thirty",
  "codePoint": "1F55E",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "four-o-clock",
  "character": "\ud83d\udd53",
  "unicodeName": "four o\u2019clock",
  "codePoint": "1F553",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "four-thirty",
  "character": "\ud83d\udd5f",
  "unicodeName": "four-thirty",
  "codePoint": "1F55F",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "five-o-clock",
  "character": "\ud83d\udd54",
  "unicodeName": "five o\u2019clock",
  "codePoint": "1F554",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "five-thirty",
  "character": "\ud83d\udd60",
  "unicodeName": "five-thirty",
  "codePoint": "1F560",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "six-o-clock",
  "character": "\ud83d\udd55",
  "unicodeName": "six o\u2019clock",
  "codePoint": "1F555",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "six-thirty",
  "character": "\ud83d\udd61",
  "unicodeName": "six-thirty",
  "codePoint": "1F561",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "seven-o-clock",
  "character": "\ud83d\udd56",
  "unicodeName": "seven o\u2019clock",
  "codePoint": "1F556",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "seven-thirty",
  "character": "\ud83d\udd62",
  "unicodeName": "seven-thirty",
  "codePoint": "1F562",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "eight-o-clock",
  "character": "\ud83d\udd57",
  "unicodeName": "eight o\u2019clock",
  "codePoint": "1F557",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "eight-thirty",
  "character": "\ud83d\udd63",
  "unicodeName": "eight-thirty",
  "codePoint": "1F563",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "nine-o-clock",
  "character": "\ud83d\udd58",
  "unicodeName": "nine o\u2019clock",
  "codePoint": "1F558",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "nine-thirty",
  "character": "\ud83d\udd64",
  "unicodeName": "nine-thirty",
  "codePoint": "1F564",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "ten-o-clock",
  "character": "\ud83d\udd59",
  "unicodeName": "ten o\u2019clock",
  "codePoint": "1F559",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "ten-thirty",
  "character": "\ud83d\udd65",
  "unicodeName": "ten-thirty",
  "codePoint": "1F565",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "eleven-o-clock",
  "character": "\ud83d\udd5a",
  "unicodeName": "eleven o\u2019clock",
  "codePoint": "1F55A",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "eleven-thirty",
  "character": "\ud83d\udd66",
  "unicodeName": "eleven-thirty",
  "codePoint": "1F566",
  "group": "travel-places",
  "subGroup": "time"
}, {
  "slug": "new-moon",
  "character": "\ud83c\udf11",
  "unicodeName": "new moon",
  "codePoint": "1F311",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "waxing-crescent-moon",
  "character": "\ud83c\udf12",
  "unicodeName": "waxing crescent moon",
  "codePoint": "1F312",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "first-quarter-moon",
  "character": "\ud83c\udf13",
  "unicodeName": "first quarter moon",
  "codePoint": "1F313",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "waxing-gibbous-moon",
  "character": "\ud83c\udf14",
  "unicodeName": "waxing gibbous moon",
  "codePoint": "1F314",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "full-moon",
  "character": "\ud83c\udf15",
  "unicodeName": "full moon",
  "codePoint": "1F315",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "waning-gibbous-moon",
  "character": "\ud83c\udf16",
  "unicodeName": "waning gibbous moon",
  "codePoint": "1F316",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "last-quarter-moon",
  "character": "\ud83c\udf17",
  "unicodeName": "last quarter moon",
  "codePoint": "1F317",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "waning-crescent-moon",
  "character": "\ud83c\udf18",
  "unicodeName": "waning crescent moon",
  "codePoint": "1F318",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "crescent-moon",
  "character": "\ud83c\udf19",
  "unicodeName": "crescent moon",
  "codePoint": "1F319",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "new-moon-face",
  "character": "\ud83c\udf1a",
  "unicodeName": "new moon face",
  "codePoint": "1F31A",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "first-quarter-moon-face",
  "character": "\ud83c\udf1b",
  "unicodeName": "first quarter moon face",
  "codePoint": "1F31B",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "last-quarter-moon-face",
  "character": "\ud83c\udf1c",
  "unicodeName": "last quarter moon face",
  "codePoint": "1F31C",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "thermometer",
  "character": "\ud83c\udf21\ufe0f",
  "unicodeName": "thermometer",
  "codePoint": "1F321 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "sun",
  "character": "\u2600\ufe0f",
  "unicodeName": "sun",
  "codePoint": "2600 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "full-moon-face",
  "character": "\ud83c\udf1d",
  "unicodeName": "full moon face",
  "codePoint": "1F31D",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "sun-with-face",
  "character": "\ud83c\udf1e",
  "unicodeName": "sun with face",
  "codePoint": "1F31E",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "ringed-planet",
  "character": "\ud83e\ude90",
  "unicodeName": "ringed planet",
  "codePoint": "1FA90",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "star",
  "character": "\u2b50",
  "unicodeName": "star",
  "codePoint": "2B50",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "glowing-star",
  "character": "\ud83c\udf1f",
  "unicodeName": "glowing star",
  "codePoint": "1F31F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "shooting-star",
  "character": "\ud83c\udf20",
  "unicodeName": "shooting star",
  "codePoint": "1F320",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "milky-way",
  "character": "\ud83c\udf0c",
  "unicodeName": "milky way",
  "codePoint": "1F30C",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "cloud",
  "character": "\u2601\ufe0f",
  "unicodeName": "cloud",
  "codePoint": "2601 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "sun-behind-cloud",
  "character": "\u26c5",
  "unicodeName": "sun behind cloud",
  "codePoint": "26C5",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "cloud-with-lightning-and-rain",
  "character": "\u26c8\ufe0f",
  "unicodeName": "cloud with lightning and rain",
  "codePoint": "26C8 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "sun-behind-small-cloud",
  "character": "\ud83c\udf24\ufe0f",
  "unicodeName": "sun behind small cloud",
  "codePoint": "1F324 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "sun-behind-large-cloud",
  "character": "\ud83c\udf25\ufe0f",
  "unicodeName": "sun behind large cloud",
  "codePoint": "1F325 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "sun-behind-rain-cloud",
  "character": "\ud83c\udf26\ufe0f",
  "unicodeName": "sun behind rain cloud",
  "codePoint": "1F326 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "cloud-with-rain",
  "character": "\ud83c\udf27\ufe0f",
  "unicodeName": "cloud with rain",
  "codePoint": "1F327 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "cloud-with-snow",
  "character": "\ud83c\udf28\ufe0f",
  "unicodeName": "cloud with snow",
  "codePoint": "1F328 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "cloud-with-lightning",
  "character": "\ud83c\udf29\ufe0f",
  "unicodeName": "cloud with lightning",
  "codePoint": "1F329 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "tornado",
  "character": "\ud83c\udf2a\ufe0f",
  "unicodeName": "tornado",
  "codePoint": "1F32A FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "fog",
  "character": "\ud83c\udf2b\ufe0f",
  "unicodeName": "fog",
  "codePoint": "1F32B FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "wind-face",
  "character": "\ud83c\udf2c\ufe0f",
  "unicodeName": "wind face",
  "codePoint": "1F32C FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "cyclone",
  "character": "\ud83c\udf00",
  "unicodeName": "cyclone",
  "codePoint": "1F300",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "rainbow",
  "character": "\ud83c\udf08",
  "unicodeName": "rainbow",
  "codePoint": "1F308",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "closed-umbrella",
  "character": "\ud83c\udf02",
  "unicodeName": "closed umbrella",
  "codePoint": "1F302",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "umbrella",
  "character": "\u2602\ufe0f",
  "unicodeName": "umbrella",
  "codePoint": "2602 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "umbrella-with-rain-drops",
  "character": "\u2614",
  "unicodeName": "umbrella with rain drops",
  "codePoint": "2614",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "umbrella-on-ground",
  "character": "\u26f1\ufe0f",
  "unicodeName": "umbrella on ground",
  "codePoint": "26F1 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "high-voltage",
  "character": "\u26a1",
  "unicodeName": "high voltage",
  "codePoint": "26A1",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "snowflake",
  "character": "\u2744\ufe0f",
  "unicodeName": "snowflake",
  "codePoint": "2744 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "snowman",
  "character": "\u2603\ufe0f",
  "unicodeName": "snowman",
  "codePoint": "2603 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "snowman-without-snow",
  "character": "\u26c4",
  "unicodeName": "snowman without snow",
  "codePoint": "26C4",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "comet",
  "character": "\u2604\ufe0f",
  "unicodeName": "comet",
  "codePoint": "2604 FE0F",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "fire",
  "character": "\ud83d\udd25",
  "unicodeName": "fire",
  "codePoint": "1F525",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "droplet",
  "character": "\ud83d\udca7",
  "unicodeName": "droplet",
  "codePoint": "1F4A7",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "water-wave",
  "character": "\ud83c\udf0a",
  "unicodeName": "water wave",
  "codePoint": "1F30A",
  "group": "travel-places",
  "subGroup": "sky-weather"
}, {
  "slug": "jack-o-lantern",
  "character": "\ud83c\udf83",
  "unicodeName": "jack-o-lantern",
  "codePoint": "1F383",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "christmas-tree",
  "character": "\ud83c\udf84",
  "unicodeName": "Christmas tree",
  "codePoint": "1F384",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "fireworks",
  "character": "\ud83c\udf86",
  "unicodeName": "fireworks",
  "codePoint": "1F386",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "sparkler",
  "character": "\ud83c\udf87",
  "unicodeName": "sparkler",
  "codePoint": "1F387",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "firecracker",
  "character": "\ud83e\udde8",
  "unicodeName": "firecracker",
  "codePoint": "1F9E8",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "sparkles",
  "character": "\u2728",
  "unicodeName": "sparkles",
  "codePoint": "2728",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "balloon",
  "character": "\ud83c\udf88",
  "unicodeName": "balloon",
  "codePoint": "1F388",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "party-popper",
  "character": "\ud83c\udf89",
  "unicodeName": "party popper",
  "codePoint": "1F389",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "confetti-ball",
  "character": "\ud83c\udf8a",
  "unicodeName": "confetti ball",
  "codePoint": "1F38A",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "tanabata-tree",
  "character": "\ud83c\udf8b",
  "unicodeName": "tanabata tree",
  "codePoint": "1F38B",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "pine-decoration",
  "character": "\ud83c\udf8d",
  "unicodeName": "pine decoration",
  "codePoint": "1F38D",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "japanese-dolls",
  "character": "\ud83c\udf8e",
  "unicodeName": "Japanese dolls",
  "codePoint": "1F38E",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "carp-streamer",
  "character": "\ud83c\udf8f",
  "unicodeName": "carp streamer",
  "codePoint": "1F38F",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "wind-chime",
  "character": "\ud83c\udf90",
  "unicodeName": "wind chime",
  "codePoint": "1F390",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "moon-viewing-ceremony",
  "character": "\ud83c\udf91",
  "unicodeName": "moon viewing ceremony",
  "codePoint": "1F391",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "red-envelope",
  "character": "\ud83e\udde7",
  "unicodeName": "red envelope",
  "codePoint": "1F9E7",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "ribbon",
  "character": "\ud83c\udf80",
  "unicodeName": "ribbon",
  "codePoint": "1F380",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "wrapped-gift",
  "character": "\ud83c\udf81",
  "unicodeName": "wrapped gift",
  "codePoint": "1F381",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "reminder-ribbon",
  "character": "\ud83c\udf97\ufe0f",
  "unicodeName": "reminder ribbon",
  "codePoint": "1F397 FE0F",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "admission-tickets",
  "character": "\ud83c\udf9f\ufe0f",
  "unicodeName": "admission tickets",
  "codePoint": "1F39F FE0F",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "ticket",
  "character": "\ud83c\udfab",
  "unicodeName": "ticket",
  "codePoint": "1F3AB",
  "group": "activities",
  "subGroup": "event"
}, {
  "slug": "military-medal",
  "character": "\ud83c\udf96\ufe0f",
  "unicodeName": "military medal",
  "codePoint": "1F396 FE0F",
  "group": "activities",
  "subGroup": "award-medal"
}, {
  "slug": "trophy",
  "character": "\ud83c\udfc6",
  "unicodeName": "trophy",
  "codePoint": "1F3C6",
  "group": "activities",
  "subGroup": "award-medal"
}, {
  "slug": "sports-medal",
  "character": "\ud83c\udfc5",
  "unicodeName": "sports medal",
  "codePoint": "1F3C5",
  "group": "activities",
  "subGroup": "award-medal"
}, {
  "slug": "1st-place-medal",
  "character": "\ud83e\udd47",
  "unicodeName": "1st place medal",
  "codePoint": "1F947",
  "group": "activities",
  "subGroup": "award-medal"
}, {
  "slug": "2nd-place-medal",
  "character": "\ud83e\udd48",
  "unicodeName": "2nd place medal",
  "codePoint": "1F948",
  "group": "activities",
  "subGroup": "award-medal"
}, {
  "slug": "3rd-place-medal",
  "character": "\ud83e\udd49",
  "unicodeName": "3rd place medal",
  "codePoint": "1F949",
  "group": "activities",
  "subGroup": "award-medal"
}, {
  "slug": "soccer-ball",
  "character": "\u26bd",
  "unicodeName": "soccer ball",
  "codePoint": "26BD",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "baseball",
  "character": "\u26be",
  "unicodeName": "baseball",
  "codePoint": "26BE",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "softball",
  "character": "\ud83e\udd4e",
  "unicodeName": "softball",
  "codePoint": "1F94E",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "basketball",
  "character": "\ud83c\udfc0",
  "unicodeName": "basketball",
  "codePoint": "1F3C0",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "volleyball",
  "character": "\ud83c\udfd0",
  "unicodeName": "volleyball",
  "codePoint": "1F3D0",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "american-football",
  "character": "\ud83c\udfc8",
  "unicodeName": "american football",
  "codePoint": "1F3C8",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "rugby-football",
  "character": "\ud83c\udfc9",
  "unicodeName": "rugby football",
  "codePoint": "1F3C9",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "tennis",
  "character": "\ud83c\udfbe",
  "unicodeName": "tennis",
  "codePoint": "1F3BE",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "flying-disc",
  "character": "\ud83e\udd4f",
  "unicodeName": "flying disc",
  "codePoint": "1F94F",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "bowling",
  "character": "\ud83c\udfb3",
  "unicodeName": "bowling",
  "codePoint": "1F3B3",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "cricket-game",
  "character": "\ud83c\udfcf",
  "unicodeName": "cricket game",
  "codePoint": "1F3CF",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "field-hockey",
  "character": "\ud83c\udfd1",
  "unicodeName": "field hockey",
  "codePoint": "1F3D1",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "ice-hockey",
  "character": "\ud83c\udfd2",
  "unicodeName": "ice hockey",
  "codePoint": "1F3D2",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "lacrosse",
  "character": "\ud83e\udd4d",
  "unicodeName": "lacrosse",
  "codePoint": "1F94D",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "ping-pong",
  "character": "\ud83c\udfd3",
  "unicodeName": "ping pong",
  "codePoint": "1F3D3",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "badminton",
  "character": "\ud83c\udff8",
  "unicodeName": "badminton",
  "codePoint": "1F3F8",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "boxing-glove",
  "character": "\ud83e\udd4a",
  "unicodeName": "boxing glove",
  "codePoint": "1F94A",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "martial-arts-uniform",
  "character": "\ud83e\udd4b",
  "unicodeName": "martial arts uniform",
  "codePoint": "1F94B",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "goal-net",
  "character": "\ud83e\udd45",
  "unicodeName": "goal net",
  "codePoint": "1F945",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "flag-in-hole",
  "character": "\u26f3",
  "unicodeName": "flag in hole",
  "codePoint": "26F3",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "ice-skate",
  "character": "\u26f8\ufe0f",
  "unicodeName": "ice skate",
  "codePoint": "26F8 FE0F",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "fishing-pole",
  "character": "\ud83c\udfa3",
  "unicodeName": "fishing pole",
  "codePoint": "1F3A3",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "diving-mask",
  "character": "\ud83e\udd3f",
  "unicodeName": "diving mask",
  "codePoint": "1F93F",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "running-shirt",
  "character": "\ud83c\udfbd",
  "unicodeName": "running shirt",
  "codePoint": "1F3BD",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "skis",
  "character": "\ud83c\udfbf",
  "unicodeName": "skis",
  "codePoint": "1F3BF",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "sled",
  "character": "\ud83d\udef7",
  "unicodeName": "sled",
  "codePoint": "1F6F7",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "curling-stone",
  "character": "\ud83e\udd4c",
  "unicodeName": "curling stone",
  "codePoint": "1F94C",
  "group": "activities",
  "subGroup": "sport"
}, {
  "slug": "direct-hit",
  "character": "\ud83c\udfaf",
  "unicodeName": "direct hit",
  "codePoint": "1F3AF",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "yo-yo",
  "character": "\ud83e\ude80",
  "unicodeName": "yo-yo",
  "codePoint": "1FA80",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "kite",
  "character": "\ud83e\ude81",
  "unicodeName": "kite",
  "codePoint": "1FA81",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "pool-8-ball",
  "character": "\ud83c\udfb1",
  "unicodeName": "pool 8 ball",
  "codePoint": "1F3B1",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "crystal-ball",
  "character": "\ud83d\udd2e",
  "unicodeName": "crystal ball",
  "codePoint": "1F52E",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "nazar-amulet",
  "character": "\ud83e\uddff",
  "unicodeName": "nazar amulet",
  "codePoint": "1F9FF",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "video-game",
  "character": "\ud83c\udfae",
  "unicodeName": "video game",
  "codePoint": "1F3AE",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "joystick",
  "character": "\ud83d\udd79\ufe0f",
  "unicodeName": "joystick",
  "codePoint": "1F579 FE0F",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "slot-machine",
  "character": "\ud83c\udfb0",
  "unicodeName": "slot machine",
  "codePoint": "1F3B0",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "game-die",
  "character": "\ud83c\udfb2",
  "unicodeName": "game die",
  "codePoint": "1F3B2",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "puzzle-piece",
  "character": "\ud83e\udde9",
  "unicodeName": "puzzle piece",
  "codePoint": "1F9E9",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "teddy-bear",
  "character": "\ud83e\uddf8",
  "unicodeName": "teddy bear",
  "codePoint": "1F9F8",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "spade-suit",
  "character": "\u2660\ufe0f",
  "unicodeName": "spade suit",
  "codePoint": "2660 FE0F",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "heart-suit",
  "character": "\u2665\ufe0f",
  "unicodeName": "heart suit",
  "codePoint": "2665 FE0F",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "diamond-suit",
  "character": "\u2666\ufe0f",
  "unicodeName": "diamond suit",
  "codePoint": "2666 FE0F",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "club-suit",
  "character": "\u2663\ufe0f",
  "unicodeName": "club suit",
  "codePoint": "2663 FE0F",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "chess-pawn",
  "character": "\u265f\ufe0f",
  "unicodeName": "chess pawn",
  "codePoint": "265F FE0F",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "joker",
  "character": "\ud83c\udccf",
  "unicodeName": "joker",
  "codePoint": "1F0CF",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "mahjong-red-dragon",
  "character": "\ud83c\udc04",
  "unicodeName": "mahjong red dragon",
  "codePoint": "1F004",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "flower-playing-cards",
  "character": "\ud83c\udfb4",
  "unicodeName": "flower playing cards",
  "codePoint": "1F3B4",
  "group": "activities",
  "subGroup": "game"
}, {
  "slug": "performing-arts",
  "character": "\ud83c\udfad",
  "unicodeName": "performing arts",
  "codePoint": "1F3AD",
  "group": "activities",
  "subGroup": "arts-crafts"
}, {
  "slug": "framed-picture",
  "character": "\ud83d\uddbc\ufe0f",
  "unicodeName": "framed picture",
  "codePoint": "1F5BC FE0F",
  "group": "activities",
  "subGroup": "arts-crafts"
}, {
  "slug": "artist-palette",
  "character": "\ud83c\udfa8",
  "unicodeName": "artist palette",
  "codePoint": "1F3A8",
  "group": "activities",
  "subGroup": "arts-crafts"
}, {
  "slug": "thread",
  "character": "\ud83e\uddf5",
  "unicodeName": "thread",
  "codePoint": "1F9F5",
  "group": "activities",
  "subGroup": "arts-crafts"
}, {
  "slug": "yarn",
  "character": "\ud83e\uddf6",
  "unicodeName": "yarn",
  "codePoint": "1F9F6",
  "group": "activities",
  "subGroup": "arts-crafts"
}, {
  "slug": "glasses",
  "character": "\ud83d\udc53",
  "unicodeName": "glasses",
  "codePoint": "1F453",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "sunglasses",
  "character": "\ud83d\udd76\ufe0f",
  "unicodeName": "sunglasses",
  "codePoint": "1F576 FE0F",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "goggles",
  "character": "\ud83e\udd7d",
  "unicodeName": "goggles",
  "codePoint": "1F97D",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "lab-coat",
  "character": "\ud83e\udd7c",
  "unicodeName": "lab coat",
  "codePoint": "1F97C",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "safety-vest",
  "character": "\ud83e\uddba",
  "unicodeName": "safety vest",
  "codePoint": "1F9BA",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "necktie",
  "character": "\ud83d\udc54",
  "unicodeName": "necktie",
  "codePoint": "1F454",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "t-shirt",
  "character": "\ud83d\udc55",
  "unicodeName": "t-shirt",
  "codePoint": "1F455",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "jeans",
  "character": "\ud83d\udc56",
  "unicodeName": "jeans",
  "codePoint": "1F456",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "scarf",
  "character": "\ud83e\udde3",
  "unicodeName": "scarf",
  "codePoint": "1F9E3",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "gloves",
  "character": "\ud83e\udde4",
  "unicodeName": "gloves",
  "codePoint": "1F9E4",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "coat",
  "character": "\ud83e\udde5",
  "unicodeName": "coat",
  "codePoint": "1F9E5",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "socks",
  "character": "\ud83e\udde6",
  "unicodeName": "socks",
  "codePoint": "1F9E6",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "dress",
  "character": "\ud83d\udc57",
  "unicodeName": "dress",
  "codePoint": "1F457",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "kimono",
  "character": "\ud83d\udc58",
  "unicodeName": "kimono",
  "codePoint": "1F458",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "sari",
  "character": "\ud83e\udd7b",
  "unicodeName": "sari",
  "codePoint": "1F97B",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "one-piece-swimsuit",
  "character": "\ud83e\ude71",
  "unicodeName": "one-piece swimsuit",
  "codePoint": "1FA71",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "swim-brief",
  "character": "\ud83e\ude72",
  "unicodeName": "swim brief",
  "codePoint": "1FA72",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "shorts",
  "character": "\ud83e\ude73",
  "unicodeName": "shorts",
  "codePoint": "1FA73",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "bikini",
  "character": "\ud83d\udc59",
  "unicodeName": "bikini",
  "codePoint": "1F459",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "woman-s-clothes",
  "character": "\ud83d\udc5a",
  "unicodeName": "woman\u2019s clothes",
  "codePoint": "1F45A",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "purse",
  "character": "\ud83d\udc5b",
  "unicodeName": "purse",
  "codePoint": "1F45B",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "handbag",
  "character": "\ud83d\udc5c",
  "unicodeName": "handbag",
  "codePoint": "1F45C",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "clutch-bag",
  "character": "\ud83d\udc5d",
  "unicodeName": "clutch bag",
  "codePoint": "1F45D",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "shopping-bags",
  "character": "\ud83d\udecd\ufe0f",
  "unicodeName": "shopping bags",
  "codePoint": "1F6CD FE0F",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "backpack",
  "character": "\ud83c\udf92",
  "unicodeName": "backpack",
  "codePoint": "1F392",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "man-s-shoe",
  "character": "\ud83d\udc5e",
  "unicodeName": "man\u2019s shoe",
  "codePoint": "1F45E",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "running-shoe",
  "character": "\ud83d\udc5f",
  "unicodeName": "running shoe",
  "codePoint": "1F45F",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "hiking-boot",
  "character": "\ud83e\udd7e",
  "unicodeName": "hiking boot",
  "codePoint": "1F97E",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "flat-shoe",
  "character": "\ud83e\udd7f",
  "unicodeName": "flat shoe",
  "codePoint": "1F97F",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "high-heeled-shoe",
  "character": "\ud83d\udc60",
  "unicodeName": "high-heeled shoe",
  "codePoint": "1F460",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "woman-s-sandal",
  "character": "\ud83d\udc61",
  "unicodeName": "woman\u2019s sandal",
  "codePoint": "1F461",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "ballet-shoes",
  "character": "\ud83e\ude70",
  "unicodeName": "ballet shoes",
  "codePoint": "1FA70",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "woman-s-boot",
  "character": "\ud83d\udc62",
  "unicodeName": "woman\u2019s boot",
  "codePoint": "1F462",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "crown",
  "character": "\ud83d\udc51",
  "unicodeName": "crown",
  "codePoint": "1F451",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "woman-s-hat",
  "character": "\ud83d\udc52",
  "unicodeName": "woman\u2019s hat",
  "codePoint": "1F452",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "top-hat",
  "character": "\ud83c\udfa9",
  "unicodeName": "top hat",
  "codePoint": "1F3A9",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "graduation-cap",
  "character": "\ud83c\udf93",
  "unicodeName": "graduation cap",
  "codePoint": "1F393",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "billed-cap",
  "character": "\ud83e\udde2",
  "unicodeName": "billed cap",
  "codePoint": "1F9E2",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "rescue-worker-s-helmet",
  "character": "\u26d1\ufe0f",
  "unicodeName": "rescue worker\u2019s helmet",
  "codePoint": "26D1 FE0F",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "prayer-beads",
  "character": "\ud83d\udcff",
  "unicodeName": "prayer beads",
  "codePoint": "1F4FF",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "lipstick",
  "character": "\ud83d\udc84",
  "unicodeName": "lipstick",
  "codePoint": "1F484",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "ring",
  "character": "\ud83d\udc8d",
  "unicodeName": "ring",
  "codePoint": "1F48D",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "gem-stone",
  "character": "\ud83d\udc8e",
  "unicodeName": "gem stone",
  "codePoint": "1F48E",
  "group": "objects",
  "subGroup": "clothing"
}, {
  "slug": "muted-speaker",
  "character": "\ud83d\udd07",
  "unicodeName": "muted speaker",
  "codePoint": "1F507",
  "group": "objects",
  "subGroup": "sound"
}, {
  "slug": "speaker-low-volume",
  "character": "\ud83d\udd08",
  "unicodeName": "speaker low volume",
  "codePoint": "1F508",
  "group": "objects",
  "subGroup": "sound"
}, {
  "slug": "speaker-medium-volume",
  "character": "\ud83d\udd09",
  "unicodeName": "speaker medium volume",
  "codePoint": "1F509",
  "group": "objects",
  "subGroup": "sound"
}, {
  "slug": "speaker-high-volume",
  "character": "\ud83d\udd0a",
  "unicodeName": "speaker high volume",
  "codePoint": "1F50A",
  "group": "objects",
  "subGroup": "sound"
}, {
  "slug": "loudspeaker",
  "character": "\ud83d\udce2",
  "unicodeName": "loudspeaker",
  "codePoint": "1F4E2",
  "group": "objects",
  "subGroup": "sound"
}, {
  "slug": "megaphone",
  "character": "\ud83d\udce3",
  "unicodeName": "megaphone",
  "codePoint": "1F4E3",
  "group": "objects",
  "subGroup": "sound"
}, {
  "slug": "postal-horn",
  "character": "\ud83d\udcef",
  "unicodeName": "postal horn",
  "codePoint": "1F4EF",
  "group": "objects",
  "subGroup": "sound"
}, {
  "slug": "bell",
  "character": "\ud83d\udd14",
  "unicodeName": "bell",
  "codePoint": "1F514",
  "group": "objects",
  "subGroup": "sound"
}, {
  "slug": "bell-with-slash",
  "character": "\ud83d\udd15",
  "unicodeName": "bell with slash",
  "codePoint": "1F515",
  "group": "objects",
  "subGroup": "sound"
}, {
  "slug": "musical-score",
  "character": "\ud83c\udfbc",
  "unicodeName": "musical score",
  "codePoint": "1F3BC",
  "group": "objects",
  "subGroup": "music"
}, {
  "slug": "musical-note",
  "character": "\ud83c\udfb5",
  "unicodeName": "musical note",
  "codePoint": "1F3B5",
  "group": "objects",
  "subGroup": "music"
}, {
  "slug": "musical-notes",
  "character": "\ud83c\udfb6",
  "unicodeName": "musical notes",
  "codePoint": "1F3B6",
  "group": "objects",
  "subGroup": "music"
}, {
  "slug": "studio-microphone",
  "character": "\ud83c\udf99\ufe0f",
  "unicodeName": "studio microphone",
  "codePoint": "1F399 FE0F",
  "group": "objects",
  "subGroup": "music"
}, {
  "slug": "level-slider",
  "character": "\ud83c\udf9a\ufe0f",
  "unicodeName": "level slider",
  "codePoint": "1F39A FE0F",
  "group": "objects",
  "subGroup": "music"
}, {
  "slug": "control-knobs",
  "character": "\ud83c\udf9b\ufe0f",
  "unicodeName": "control knobs",
  "codePoint": "1F39B FE0F",
  "group": "objects",
  "subGroup": "music"
}, {
  "slug": "microphone",
  "character": "\ud83c\udfa4",
  "unicodeName": "microphone",
  "codePoint": "1F3A4",
  "group": "objects",
  "subGroup": "music"
}, {
  "slug": "headphone",
  "character": "\ud83c\udfa7",
  "unicodeName": "headphone",
  "codePoint": "1F3A7",
  "group": "objects",
  "subGroup": "music"
}, {
  "slug": "radio",
  "character": "\ud83d\udcfb",
  "unicodeName": "radio",
  "codePoint": "1F4FB",
  "group": "objects",
  "subGroup": "music"
}, {
  "slug": "saxophone",
  "character": "\ud83c\udfb7",
  "unicodeName": "saxophone",
  "codePoint": "1F3B7",
  "group": "objects",
  "subGroup": "musical-instrument"
}, {
  "slug": "guitar",
  "character": "\ud83c\udfb8",
  "unicodeName": "guitar",
  "codePoint": "1F3B8",
  "group": "objects",
  "subGroup": "musical-instrument"
}, {
  "slug": "musical-keyboard",
  "character": "\ud83c\udfb9",
  "unicodeName": "musical keyboard",
  "codePoint": "1F3B9",
  "group": "objects",
  "subGroup": "musical-instrument"
}, {
  "slug": "trumpet",
  "character": "\ud83c\udfba",
  "unicodeName": "trumpet",
  "codePoint": "1F3BA",
  "group": "objects",
  "subGroup": "musical-instrument"
}, {
  "slug": "violin",
  "character": "\ud83c\udfbb",
  "unicodeName": "violin",
  "codePoint": "1F3BB",
  "group": "objects",
  "subGroup": "musical-instrument"
}, {
  "slug": "banjo",
  "character": "\ud83e\ude95",
  "unicodeName": "banjo",
  "codePoint": "1FA95",
  "group": "objects",
  "subGroup": "musical-instrument"
}, {
  "slug": "drum",
  "character": "\ud83e\udd41",
  "unicodeName": "drum",
  "codePoint": "1F941",
  "group": "objects",
  "subGroup": "musical-instrument"
}, {
  "slug": "mobile-phone",
  "character": "\ud83d\udcf1",
  "unicodeName": "mobile phone",
  "codePoint": "1F4F1",
  "group": "objects",
  "subGroup": "phone"
}, {
  "slug": "mobile-phone-with-arrow",
  "character": "\ud83d\udcf2",
  "unicodeName": "mobile phone with arrow",
  "codePoint": "1F4F2",
  "group": "objects",
  "subGroup": "phone"
}, {
  "slug": "telephone",
  "character": "\u260e\ufe0f",
  "unicodeName": "telephone",
  "codePoint": "260E FE0F",
  "group": "objects",
  "subGroup": "phone"
}, {
  "slug": "telephone-receiver",
  "character": "\ud83d\udcde",
  "unicodeName": "telephone receiver",
  "codePoint": "1F4DE",
  "group": "objects",
  "subGroup": "phone"
}, {
  "slug": "pager",
  "character": "\ud83d\udcdf",
  "unicodeName": "pager",
  "codePoint": "1F4DF",
  "group": "objects",
  "subGroup": "phone"
}, {
  "slug": "fax-machine",
  "character": "\ud83d\udce0",
  "unicodeName": "fax machine",
  "codePoint": "1F4E0",
  "group": "objects",
  "subGroup": "phone"
}, {
  "slug": "battery",
  "character": "\ud83d\udd0b",
  "unicodeName": "battery",
  "codePoint": "1F50B",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "electric-plug",
  "character": "\ud83d\udd0c",
  "unicodeName": "electric plug",
  "codePoint": "1F50C",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "laptop-computer",
  "character": "\ud83d\udcbb",
  "unicodeName": "laptop computer",
  "codePoint": "1F4BB",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "desktop-computer",
  "character": "\ud83d\udda5\ufe0f",
  "unicodeName": "desktop computer",
  "codePoint": "1F5A5 FE0F",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "printer",
  "character": "\ud83d\udda8\ufe0f",
  "unicodeName": "printer",
  "codePoint": "1F5A8 FE0F",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "keyboard",
  "character": "\u2328\ufe0f",
  "unicodeName": "keyboard",
  "codePoint": "2328 FE0F",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "computer-mouse",
  "character": "\ud83d\uddb1\ufe0f",
  "unicodeName": "computer mouse",
  "codePoint": "1F5B1 FE0F",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "trackball",
  "character": "\ud83d\uddb2\ufe0f",
  "unicodeName": "trackball",
  "codePoint": "1F5B2 FE0F",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "computer-disk",
  "character": "\ud83d\udcbd",
  "unicodeName": "computer disk",
  "codePoint": "1F4BD",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "floppy-disk",
  "character": "\ud83d\udcbe",
  "unicodeName": "floppy disk",
  "codePoint": "1F4BE",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "optical-disk",
  "character": "\ud83d\udcbf",
  "unicodeName": "optical disk",
  "codePoint": "1F4BF",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "dvd",
  "character": "\ud83d\udcc0",
  "unicodeName": "dvd",
  "codePoint": "1F4C0",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "abacus",
  "character": "\ud83e\uddee",
  "unicodeName": "abacus",
  "codePoint": "1F9EE",
  "group": "objects",
  "subGroup": "computer"
}, {
  "slug": "movie-camera",
  "character": "\ud83c\udfa5",
  "unicodeName": "movie camera",
  "codePoint": "1F3A5",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "film-frames",
  "character": "\ud83c\udf9e\ufe0f",
  "unicodeName": "film frames",
  "codePoint": "1F39E FE0F",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "film-projector",
  "character": "\ud83d\udcfd\ufe0f",
  "unicodeName": "film projector",
  "codePoint": "1F4FD FE0F",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "clapper-board",
  "character": "\ud83c\udfac",
  "unicodeName": "clapper board",
  "codePoint": "1F3AC",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "television",
  "character": "\ud83d\udcfa",
  "unicodeName": "television",
  "codePoint": "1F4FA",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "camera",
  "character": "\ud83d\udcf7",
  "unicodeName": "camera",
  "codePoint": "1F4F7",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "camera-with-flash",
  "character": "\ud83d\udcf8",
  "unicodeName": "camera with flash",
  "codePoint": "1F4F8",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "video-camera",
  "character": "\ud83d\udcf9",
  "unicodeName": "video camera",
  "codePoint": "1F4F9",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "videocassette",
  "character": "\ud83d\udcfc",
  "unicodeName": "videocassette",
  "codePoint": "1F4FC",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "magnifying-glass-tilted-left",
  "character": "\ud83d\udd0d",
  "unicodeName": "magnifying glass tilted left",
  "codePoint": "1F50D",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "magnifying-glass-tilted-right",
  "character": "\ud83d\udd0e",
  "unicodeName": "magnifying glass tilted right",
  "codePoint": "1F50E",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "candle",
  "character": "\ud83d\udd6f\ufe0f",
  "unicodeName": "candle",
  "codePoint": "1F56F FE0F",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "light-bulb",
  "character": "\ud83d\udca1",
  "unicodeName": "light bulb",
  "codePoint": "1F4A1",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "flashlight",
  "character": "\ud83d\udd26",
  "unicodeName": "flashlight",
  "codePoint": "1F526",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "red-paper-lantern",
  "character": "\ud83c\udfee",
  "unicodeName": "red paper lantern",
  "codePoint": "1F3EE",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "diya-lamp",
  "character": "\ud83e\ude94",
  "unicodeName": "diya lamp",
  "codePoint": "1FA94",
  "group": "objects",
  "subGroup": "light-video"
}, {
  "slug": "notebook-with-decorative-cover",
  "character": "\ud83d\udcd4",
  "unicodeName": "notebook with decorative cover",
  "codePoint": "1F4D4",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "closed-book",
  "character": "\ud83d\udcd5",
  "unicodeName": "closed book",
  "codePoint": "1F4D5",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "open-book",
  "character": "\ud83d\udcd6",
  "unicodeName": "open book",
  "codePoint": "1F4D6",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "green-book",
  "character": "\ud83d\udcd7",
  "unicodeName": "green book",
  "codePoint": "1F4D7",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "blue-book",
  "character": "\ud83d\udcd8",
  "unicodeName": "blue book",
  "codePoint": "1F4D8",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "orange-book",
  "character": "\ud83d\udcd9",
  "unicodeName": "orange book",
  "codePoint": "1F4D9",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "books",
  "character": "\ud83d\udcda",
  "unicodeName": "books",
  "codePoint": "1F4DA",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "notebook",
  "character": "\ud83d\udcd3",
  "unicodeName": "notebook",
  "codePoint": "1F4D3",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "ledger",
  "character": "\ud83d\udcd2",
  "unicodeName": "ledger",
  "codePoint": "1F4D2",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "page-with-curl",
  "character": "\ud83d\udcc3",
  "unicodeName": "page with curl",
  "codePoint": "1F4C3",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "scroll",
  "character": "\ud83d\udcdc",
  "unicodeName": "scroll",
  "codePoint": "1F4DC",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "page-facing-up",
  "character": "\ud83d\udcc4",
  "unicodeName": "page facing up",
  "codePoint": "1F4C4",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "newspaper",
  "character": "\ud83d\udcf0",
  "unicodeName": "newspaper",
  "codePoint": "1F4F0",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "rolled-up-newspaper",
  "character": "\ud83d\uddde\ufe0f",
  "unicodeName": "rolled-up newspaper",
  "codePoint": "1F5DE FE0F",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "bookmark-tabs",
  "character": "\ud83d\udcd1",
  "unicodeName": "bookmark tabs",
  "codePoint": "1F4D1",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "bookmark",
  "character": "\ud83d\udd16",
  "unicodeName": "bookmark",
  "codePoint": "1F516",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "label",
  "character": "\ud83c\udff7\ufe0f",
  "unicodeName": "label",
  "codePoint": "1F3F7 FE0F",
  "group": "objects",
  "subGroup": "book-paper"
}, {
  "slug": "money-bag",
  "character": "\ud83d\udcb0",
  "unicodeName": "money bag",
  "codePoint": "1F4B0",
  "group": "objects",
  "subGroup": "money"
}, {
  "slug": "yen-banknote",
  "character": "\ud83d\udcb4",
  "unicodeName": "yen banknote",
  "codePoint": "1F4B4",
  "group": "objects",
  "subGroup": "money"
}, {
  "slug": "dollar-banknote",
  "character": "\ud83d\udcb5",
  "unicodeName": "dollar banknote",
  "codePoint": "1F4B5",
  "group": "objects",
  "subGroup": "money"
}, {
  "slug": "euro-banknote",
  "character": "\ud83d\udcb6",
  "unicodeName": "euro banknote",
  "codePoint": "1F4B6",
  "group": "objects",
  "subGroup": "money"
}, {
  "slug": "pound-banknote",
  "character": "\ud83d\udcb7",
  "unicodeName": "pound banknote",
  "codePoint": "1F4B7",
  "group": "objects",
  "subGroup": "money"
}, {
  "slug": "money-with-wings",
  "character": "\ud83d\udcb8",
  "unicodeName": "money with wings",
  "codePoint": "1F4B8",
  "group": "objects",
  "subGroup": "money"
}, {
  "slug": "credit-card",
  "character": "\ud83d\udcb3",
  "unicodeName": "credit card",
  "codePoint": "1F4B3",
  "group": "objects",
  "subGroup": "money"
}, {
  "slug": "receipt",
  "character": "\ud83e\uddfe",
  "unicodeName": "receipt",
  "codePoint": "1F9FE",
  "group": "objects",
  "subGroup": "money"
}, {
  "slug": "chart-increasing-with-yen",
  "character": "\ud83d\udcb9",
  "unicodeName": "chart increasing with yen",
  "codePoint": "1F4B9",
  "group": "objects",
  "subGroup": "money"
}, {
  "slug": "currency-exchange",
  "character": "\ud83d\udcb1",
  "unicodeName": "currency exchange",
  "codePoint": "1F4B1",
  "group": "objects",
  "subGroup": "money"
}, {
  "slug": "heavy-dollar-sign",
  "character": "\ud83d\udcb2",
  "unicodeName": "heavy dollar sign",
  "codePoint": "1F4B2",
  "group": "objects",
  "subGroup": "money"
}, {
  "slug": "envelope",
  "character": "\u2709\ufe0f",
  "unicodeName": "envelope",
  "codePoint": "2709 FE0F",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "e-mail",
  "character": "\ud83d\udce7",
  "unicodeName": "e-mail",
  "codePoint": "1F4E7",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "incoming-envelope",
  "character": "\ud83d\udce8",
  "unicodeName": "incoming envelope",
  "codePoint": "1F4E8",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "envelope-with-arrow",
  "character": "\ud83d\udce9",
  "unicodeName": "envelope with arrow",
  "codePoint": "1F4E9",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "outbox-tray",
  "character": "\ud83d\udce4",
  "unicodeName": "outbox tray",
  "codePoint": "1F4E4",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "inbox-tray",
  "character": "\ud83d\udce5",
  "unicodeName": "inbox tray",
  "codePoint": "1F4E5",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "package",
  "character": "\ud83d\udce6",
  "unicodeName": "package",
  "codePoint": "1F4E6",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "closed-mailbox-with-raised-flag",
  "character": "\ud83d\udceb",
  "unicodeName": "closed mailbox with raised flag",
  "codePoint": "1F4EB",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "closed-mailbox-with-lowered-flag",
  "character": "\ud83d\udcea",
  "unicodeName": "closed mailbox with lowered flag",
  "codePoint": "1F4EA",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "open-mailbox-with-raised-flag",
  "character": "\ud83d\udcec",
  "unicodeName": "open mailbox with raised flag",
  "codePoint": "1F4EC",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "open-mailbox-with-lowered-flag",
  "character": "\ud83d\udced",
  "unicodeName": "open mailbox with lowered flag",
  "codePoint": "1F4ED",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "postbox",
  "character": "\ud83d\udcee",
  "unicodeName": "postbox",
  "codePoint": "1F4EE",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "ballot-box-with-ballot",
  "character": "\ud83d\uddf3\ufe0f",
  "unicodeName": "ballot box with ballot",
  "codePoint": "1F5F3 FE0F",
  "group": "objects",
  "subGroup": "mail"
}, {
  "slug": "pencil",
  "character": "\u270f\ufe0f",
  "unicodeName": "pencil",
  "codePoint": "270F FE0F",
  "group": "objects",
  "subGroup": "writing"
}, {
  "slug": "black-nib",
  "character": "\u2712\ufe0f",
  "unicodeName": "black nib",
  "codePoint": "2712 FE0F",
  "group": "objects",
  "subGroup": "writing"
}, {
  "slug": "fountain-pen",
  "character": "\ud83d\udd8b\ufe0f",
  "unicodeName": "fountain pen",
  "codePoint": "1F58B FE0F",
  "group": "objects",
  "subGroup": "writing"
}, {
  "slug": "pen",
  "character": "\ud83d\udd8a\ufe0f",
  "unicodeName": "pen",
  "codePoint": "1F58A FE0F",
  "group": "objects",
  "subGroup": "writing"
}, {
  "slug": "paintbrush",
  "character": "\ud83d\udd8c\ufe0f",
  "unicodeName": "paintbrush",
  "codePoint": "1F58C FE0F",
  "group": "objects",
  "subGroup": "writing"
}, {
  "slug": "crayon",
  "character": "\ud83d\udd8d\ufe0f",
  "unicodeName": "crayon",
  "codePoint": "1F58D FE0F",
  "group": "objects",
  "subGroup": "writing"
}, {
  "slug": "memo",
  "character": "\ud83d\udcdd",
  "unicodeName": "memo",
  "codePoint": "1F4DD",
  "group": "objects",
  "subGroup": "writing"
}, {
  "slug": "briefcase",
  "character": "\ud83d\udcbc",
  "unicodeName": "briefcase",
  "codePoint": "1F4BC",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "file-folder",
  "character": "\ud83d\udcc1",
  "unicodeName": "file folder",
  "codePoint": "1F4C1",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "open-file-folder",
  "character": "\ud83d\udcc2",
  "unicodeName": "open file folder",
  "codePoint": "1F4C2",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "card-index-dividers",
  "character": "\ud83d\uddc2\ufe0f",
  "unicodeName": "card index dividers",
  "codePoint": "1F5C2 FE0F",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "calendar",
  "character": "\ud83d\udcc5",
  "unicodeName": "calendar",
  "codePoint": "1F4C5",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "tear-off-calendar",
  "character": "\ud83d\udcc6",
  "unicodeName": "tear-off calendar",
  "codePoint": "1F4C6",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "spiral-notepad",
  "character": "\ud83d\uddd2\ufe0f",
  "unicodeName": "spiral notepad",
  "codePoint": "1F5D2 FE0F",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "spiral-calendar",
  "character": "\ud83d\uddd3\ufe0f",
  "unicodeName": "spiral calendar",
  "codePoint": "1F5D3 FE0F",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "card-index",
  "character": "\ud83d\udcc7",
  "unicodeName": "card index",
  "codePoint": "1F4C7",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "chart-increasing",
  "character": "\ud83d\udcc8",
  "unicodeName": "chart increasing",
  "codePoint": "1F4C8",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "chart-decreasing",
  "character": "\ud83d\udcc9",
  "unicodeName": "chart decreasing",
  "codePoint": "1F4C9",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "bar-chart",
  "character": "\ud83d\udcca",
  "unicodeName": "bar chart",
  "codePoint": "1F4CA",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "clipboard",
  "character": "\ud83d\udccb",
  "unicodeName": "clipboard",
  "codePoint": "1F4CB",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "pushpin",
  "character": "\ud83d\udccc",
  "unicodeName": "pushpin",
  "codePoint": "1F4CC",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "round-pushpin",
  "character": "\ud83d\udccd",
  "unicodeName": "round pushpin",
  "codePoint": "1F4CD",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "paperclip",
  "character": "\ud83d\udcce",
  "unicodeName": "paperclip",
  "codePoint": "1F4CE",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "linked-paperclips",
  "character": "\ud83d\udd87\ufe0f",
  "unicodeName": "linked paperclips",
  "codePoint": "1F587 FE0F",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "straight-ruler",
  "character": "\ud83d\udccf",
  "unicodeName": "straight ruler",
  "codePoint": "1F4CF",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "triangular-ruler",
  "character": "\ud83d\udcd0",
  "unicodeName": "triangular ruler",
  "codePoint": "1F4D0",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "scissors",
  "character": "\u2702\ufe0f",
  "unicodeName": "scissors",
  "codePoint": "2702 FE0F",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "card-file-box",
  "character": "\ud83d\uddc3\ufe0f",
  "unicodeName": "card file box",
  "codePoint": "1F5C3 FE0F",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "file-cabinet",
  "character": "\ud83d\uddc4\ufe0f",
  "unicodeName": "file cabinet",
  "codePoint": "1F5C4 FE0F",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "wastebasket",
  "character": "\ud83d\uddd1\ufe0f",
  "unicodeName": "wastebasket",
  "codePoint": "1F5D1 FE0F",
  "group": "objects",
  "subGroup": "office"
}, {
  "slug": "locked",
  "character": "\ud83d\udd12",
  "unicodeName": "locked",
  "codePoint": "1F512",
  "group": "objects",
  "subGroup": "lock"
}, {
  "slug": "unlocked",
  "character": "\ud83d\udd13",
  "unicodeName": "unlocked",
  "codePoint": "1F513",
  "group": "objects",
  "subGroup": "lock"
}, {
  "slug": "locked-with-pen",
  "character": "\ud83d\udd0f",
  "unicodeName": "locked with pen",
  "codePoint": "1F50F",
  "group": "objects",
  "subGroup": "lock"
}, {
  "slug": "locked-with-key",
  "character": "\ud83d\udd10",
  "unicodeName": "locked with key",
  "codePoint": "1F510",
  "group": "objects",
  "subGroup": "lock"
}, {
  "slug": "key",
  "character": "\ud83d\udd11",
  "unicodeName": "key",
  "codePoint": "1F511",
  "group": "objects",
  "subGroup": "lock"
}, {
  "slug": "old-key",
  "character": "\ud83d\udddd\ufe0f",
  "unicodeName": "old key",
  "codePoint": "1F5DD FE0F",
  "group": "objects",
  "subGroup": "lock"
}, {
  "slug": "hammer",
  "character": "\ud83d\udd28",
  "unicodeName": "hammer",
  "codePoint": "1F528",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "axe",
  "character": "\ud83e\ude93",
  "unicodeName": "axe",
  "codePoint": "1FA93",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "pick",
  "character": "\u26cf\ufe0f",
  "unicodeName": "pick",
  "codePoint": "26CF FE0F",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "hammer-and-pick",
  "character": "\u2692\ufe0f",
  "unicodeName": "hammer and pick",
  "codePoint": "2692 FE0F",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "hammer-and-wrench",
  "character": "\ud83d\udee0\ufe0f",
  "unicodeName": "hammer and wrench",
  "codePoint": "1F6E0 FE0F",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "dagger",
  "character": "\ud83d\udde1\ufe0f",
  "unicodeName": "dagger",
  "codePoint": "1F5E1 FE0F",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "crossed-swords",
  "character": "\u2694\ufe0f",
  "unicodeName": "crossed swords",
  "codePoint": "2694 FE0F",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "pistol",
  "character": "\ud83d\udd2b",
  "unicodeName": "pistol",
  "codePoint": "1F52B",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "bow-and-arrow",
  "character": "\ud83c\udff9",
  "unicodeName": "bow and arrow",
  "codePoint": "1F3F9",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "shield",
  "character": "\ud83d\udee1\ufe0f",
  "unicodeName": "shield",
  "codePoint": "1F6E1 FE0F",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "wrench",
  "character": "\ud83d\udd27",
  "unicodeName": "wrench",
  "codePoint": "1F527",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "nut-and-bolt",
  "character": "\ud83d\udd29",
  "unicodeName": "nut and bolt",
  "codePoint": "1F529",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "gear",
  "character": "\u2699\ufe0f",
  "unicodeName": "gear",
  "codePoint": "2699 FE0F",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "clamp",
  "character": "\ud83d\udddc\ufe0f",
  "unicodeName": "clamp",
  "codePoint": "1F5DC FE0F",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "balance-scale",
  "character": "\u2696\ufe0f",
  "unicodeName": "balance scale",
  "codePoint": "2696 FE0F",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "probing-cane",
  "character": "\ud83e\uddaf",
  "unicodeName": "probing cane",
  "codePoint": "1F9AF",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "link",
  "character": "\ud83d\udd17",
  "unicodeName": "link",
  "codePoint": "1F517",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "chains",
  "character": "\u26d3\ufe0f",
  "unicodeName": "chains",
  "codePoint": "26D3 FE0F",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "toolbox",
  "character": "\ud83e\uddf0",
  "unicodeName": "toolbox",
  "codePoint": "1F9F0",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "magnet",
  "character": "\ud83e\uddf2",
  "unicodeName": "magnet",
  "codePoint": "1F9F2",
  "group": "objects",
  "subGroup": "tool"
}, {
  "slug": "alembic",
  "character": "\u2697\ufe0f",
  "unicodeName": "alembic",
  "codePoint": "2697 FE0F",
  "group": "objects",
  "subGroup": "science"
}, {
  "slug": "test-tube",
  "character": "\ud83e\uddea",
  "unicodeName": "test tube",
  "codePoint": "1F9EA",
  "group": "objects",
  "subGroup": "science"
}, {
  "slug": "petri-dish",
  "character": "\ud83e\uddeb",
  "unicodeName": "petri dish",
  "codePoint": "1F9EB",
  "group": "objects",
  "subGroup": "science"
}, {
  "slug": "dna",
  "character": "\ud83e\uddec",
  "unicodeName": "dna",
  "codePoint": "1F9EC",
  "group": "objects",
  "subGroup": "science"
}, {
  "slug": "microscope",
  "character": "\ud83d\udd2c",
  "unicodeName": "microscope",
  "codePoint": "1F52C",
  "group": "objects",
  "subGroup": "science"
}, {
  "slug": "telescope",
  "character": "\ud83d\udd2d",
  "unicodeName": "telescope",
  "codePoint": "1F52D",
  "group": "objects",
  "subGroup": "science"
}, {
  "slug": "satellite-antenna",
  "character": "\ud83d\udce1",
  "unicodeName": "satellite antenna",
  "codePoint": "1F4E1",
  "group": "objects",
  "subGroup": "science"
}, {
  "slug": "syringe",
  "character": "\ud83d\udc89",
  "unicodeName": "syringe",
  "codePoint": "1F489",
  "group": "objects",
  "subGroup": "medical"
}, {
  "slug": "drop-of-blood",
  "character": "\ud83e\ude78",
  "unicodeName": "drop of blood",
  "codePoint": "1FA78",
  "group": "objects",
  "subGroup": "medical"
}, {
  "slug": "pill",
  "character": "\ud83d\udc8a",
  "unicodeName": "pill",
  "codePoint": "1F48A",
  "group": "objects",
  "subGroup": "medical"
}, {
  "slug": "adhesive-bandage",
  "character": "\ud83e\ude79",
  "unicodeName": "adhesive bandage",
  "codePoint": "1FA79",
  "group": "objects",
  "subGroup": "medical"
}, {
  "slug": "stethoscope",
  "character": "\ud83e\ude7a",
  "unicodeName": "stethoscope",
  "codePoint": "1FA7A",
  "group": "objects",
  "subGroup": "medical"
}, {
  "slug": "door",
  "character": "\ud83d\udeaa",
  "unicodeName": "door",
  "codePoint": "1F6AA",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "bed",
  "character": "\ud83d\udecf\ufe0f",
  "unicodeName": "bed",
  "codePoint": "1F6CF FE0F",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "couch-and-lamp",
  "character": "\ud83d\udecb\ufe0f",
  "unicodeName": "couch and lamp",
  "codePoint": "1F6CB FE0F",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "chair",
  "character": "\ud83e\ude91",
  "unicodeName": "chair",
  "codePoint": "1FA91",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "toilet",
  "character": "\ud83d\udebd",
  "unicodeName": "toilet",
  "codePoint": "1F6BD",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "shower",
  "character": "\ud83d\udebf",
  "unicodeName": "shower",
  "codePoint": "1F6BF",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "bathtub",
  "character": "\ud83d\udec1",
  "unicodeName": "bathtub",
  "codePoint": "1F6C1",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "razor",
  "character": "\ud83e\ude92",
  "unicodeName": "razor",
  "codePoint": "1FA92",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "lotion-bottle",
  "character": "\ud83e\uddf4",
  "unicodeName": "lotion bottle",
  "codePoint": "1F9F4",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "safety-pin",
  "character": "\ud83e\uddf7",
  "unicodeName": "safety pin",
  "codePoint": "1F9F7",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "broom",
  "character": "\ud83e\uddf9",
  "unicodeName": "broom",
  "codePoint": "1F9F9",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "basket",
  "character": "\ud83e\uddfa",
  "unicodeName": "basket",
  "codePoint": "1F9FA",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "roll-of-paper",
  "character": "\ud83e\uddfb",
  "unicodeName": "roll of paper",
  "codePoint": "1F9FB",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "soap",
  "character": "\ud83e\uddfc",
  "unicodeName": "soap",
  "codePoint": "1F9FC",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "sponge",
  "character": "\ud83e\uddfd",
  "unicodeName": "sponge",
  "codePoint": "1F9FD",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "fire-extinguisher",
  "character": "\ud83e\uddef",
  "unicodeName": "fire extinguisher",
  "codePoint": "1F9EF",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "shopping-cart",
  "character": "\ud83d\uded2",
  "unicodeName": "shopping cart",
  "codePoint": "1F6D2",
  "group": "objects",
  "subGroup": "household"
}, {
  "slug": "cigarette",
  "character": "\ud83d\udeac",
  "unicodeName": "cigarette",
  "codePoint": "1F6AC",
  "group": "objects",
  "subGroup": "other-object"
}, {
  "slug": "coffin",
  "character": "\u26b0\ufe0f",
  "unicodeName": "coffin",
  "codePoint": "26B0 FE0F",
  "group": "objects",
  "subGroup": "other-object"
}, {
  "slug": "funeral-urn",
  "character": "\u26b1\ufe0f",
  "unicodeName": "funeral urn",
  "codePoint": "26B1 FE0F",
  "group": "objects",
  "subGroup": "other-object"
}, {
  "slug": "moai",
  "character": "\ud83d\uddff",
  "unicodeName": "moai",
  "codePoint": "1F5FF",
  "group": "objects",
  "subGroup": "other-object"
}, {
  "slug": "atm-sign",
  "character": "\ud83c\udfe7",
  "unicodeName": "ATM sign",
  "codePoint": "1F3E7",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "litter-in-bin-sign",
  "character": "\ud83d\udeae",
  "unicodeName": "litter in bin sign",
  "codePoint": "1F6AE",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "potable-water",
  "character": "\ud83d\udeb0",
  "unicodeName": "potable water",
  "codePoint": "1F6B0",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "wheelchair-symbol",
  "character": "\u267f",
  "unicodeName": "wheelchair symbol",
  "codePoint": "267F",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "men-s-room",
  "character": "\ud83d\udeb9",
  "unicodeName": "men\u2019s room",
  "codePoint": "1F6B9",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "women-s-room",
  "character": "\ud83d\udeba",
  "unicodeName": "women\u2019s room",
  "codePoint": "1F6BA",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "restroom",
  "character": "\ud83d\udebb",
  "unicodeName": "restroom",
  "codePoint": "1F6BB",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "baby-symbol",
  "character": "\ud83d\udebc",
  "unicodeName": "baby symbol",
  "codePoint": "1F6BC",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "water-closet",
  "character": "\ud83d\udebe",
  "unicodeName": "water closet",
  "codePoint": "1F6BE",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "passport-control",
  "character": "\ud83d\udec2",
  "unicodeName": "passport control",
  "codePoint": "1F6C2",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "customs",
  "character": "\ud83d\udec3",
  "unicodeName": "customs",
  "codePoint": "1F6C3",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "baggage-claim",
  "character": "\ud83d\udec4",
  "unicodeName": "baggage claim",
  "codePoint": "1F6C4",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "left-luggage",
  "character": "\ud83d\udec5",
  "unicodeName": "left luggage",
  "codePoint": "1F6C5",
  "group": "symbols",
  "subGroup": "transport-sign"
}, {
  "slug": "warning",
  "character": "\u26a0\ufe0f",
  "unicodeName": "warning",
  "codePoint": "26A0 FE0F",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "children-crossing",
  "character": "\ud83d\udeb8",
  "unicodeName": "children crossing",
  "codePoint": "1F6B8",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "no-entry",
  "character": "\u26d4",
  "unicodeName": "no entry",
  "codePoint": "26D4",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "prohibited",
  "character": "\ud83d\udeab",
  "unicodeName": "prohibited",
  "codePoint": "1F6AB",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "no-bicycles",
  "character": "\ud83d\udeb3",
  "unicodeName": "no bicycles",
  "codePoint": "1F6B3",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "no-smoking",
  "character": "\ud83d\udead",
  "unicodeName": "no smoking",
  "codePoint": "1F6AD",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "no-littering",
  "character": "\ud83d\udeaf",
  "unicodeName": "no littering",
  "codePoint": "1F6AF",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "non-potable-water",
  "character": "\ud83d\udeb1",
  "unicodeName": "non-potable water",
  "codePoint": "1F6B1",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "no-pedestrians",
  "character": "\ud83d\udeb7",
  "unicodeName": "no pedestrians",
  "codePoint": "1F6B7",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "no-mobile-phones",
  "character": "\ud83d\udcf5",
  "unicodeName": "no mobile phones",
  "codePoint": "1F4F5",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "no-one-under-eighteen",
  "character": "\ud83d\udd1e",
  "unicodeName": "no one under eighteen",
  "codePoint": "1F51E",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "radioactive",
  "character": "\u2622\ufe0f",
  "unicodeName": "radioactive",
  "codePoint": "2622 FE0F",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "biohazard",
  "character": "\u2623\ufe0f",
  "unicodeName": "biohazard",
  "codePoint": "2623 FE0F",
  "group": "symbols",
  "subGroup": "warning"
}, {
  "slug": "up-arrow",
  "character": "\u2b06\ufe0f",
  "unicodeName": "up arrow",
  "codePoint": "2B06 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "up-right-arrow",
  "character": "\u2197\ufe0f",
  "unicodeName": "up-right arrow",
  "codePoint": "2197 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "right-arrow",
  "character": "\u27a1\ufe0f",
  "unicodeName": "right arrow",
  "codePoint": "27A1 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "down-right-arrow",
  "character": "\u2198\ufe0f",
  "unicodeName": "down-right arrow",
  "codePoint": "2198 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "down-arrow",
  "character": "\u2b07\ufe0f",
  "unicodeName": "down arrow",
  "codePoint": "2B07 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "down-left-arrow",
  "character": "\u2199\ufe0f",
  "unicodeName": "down-left arrow",
  "codePoint": "2199 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "left-arrow",
  "character": "\u2b05\ufe0f",
  "unicodeName": "left arrow",
  "codePoint": "2B05 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "up-left-arrow",
  "character": "\u2196\ufe0f",
  "unicodeName": "up-left arrow",
  "codePoint": "2196 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "up-down-arrow",
  "character": "\u2195\ufe0f",
  "unicodeName": "up-down arrow",
  "codePoint": "2195 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "left-right-arrow",
  "character": "\u2194\ufe0f",
  "unicodeName": "left-right arrow",
  "codePoint": "2194 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "right-arrow-curving-left",
  "character": "\u21a9\ufe0f",
  "unicodeName": "right arrow curving left",
  "codePoint": "21A9 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "left-arrow-curving-right",
  "character": "\u21aa\ufe0f",
  "unicodeName": "left arrow curving right",
  "codePoint": "21AA FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "right-arrow-curving-up",
  "character": "\u2934\ufe0f",
  "unicodeName": "right arrow curving up",
  "codePoint": "2934 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "right-arrow-curving-down",
  "character": "\u2935\ufe0f",
  "unicodeName": "right arrow curving down",
  "codePoint": "2935 FE0F",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "clockwise-vertical-arrows",
  "character": "\ud83d\udd03",
  "unicodeName": "clockwise vertical arrows",
  "codePoint": "1F503",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "counterclockwise-arrows-button",
  "character": "\ud83d\udd04",
  "unicodeName": "counterclockwise arrows button",
  "codePoint": "1F504",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "back-arrow",
  "character": "\ud83d\udd19",
  "unicodeName": "BACK arrow",
  "codePoint": "1F519",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "end-arrow",
  "character": "\ud83d\udd1a",
  "unicodeName": "END arrow",
  "codePoint": "1F51A",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "on-arrow",
  "character": "\ud83d\udd1b",
  "unicodeName": "ON! arrow",
  "codePoint": "1F51B",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "soon-arrow",
  "character": "\ud83d\udd1c",
  "unicodeName": "SOON arrow",
  "codePoint": "1F51C",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "top-arrow",
  "character": "\ud83d\udd1d",
  "unicodeName": "TOP arrow",
  "codePoint": "1F51D",
  "group": "symbols",
  "subGroup": "arrow"
}, {
  "slug": "place-of-worship",
  "character": "\ud83d\uded0",
  "unicodeName": "place of worship",
  "codePoint": "1F6D0",
  "group": "symbols",
  "subGroup": "religion"
}, {
  "slug": "atom-symbol",
  "character": "\u269b\ufe0f",
  "unicodeName": "atom symbol",
  "codePoint": "269B FE0F",
  "group": "symbols",
  "subGroup": "religion"
}, {
  "slug": "om",
  "character": "\ud83d\udd49\ufe0f",
  "unicodeName": "om",
  "codePoint": "1F549 FE0F",
  "group": "symbols",
  "subGroup": "religion"
}, {
  "slug": "star-of-david",
  "character": "\u2721\ufe0f",
  "unicodeName": "star of David",
  "codePoint": "2721 FE0F",
  "group": "symbols",
  "subGroup": "religion"
}, {
  "slug": "wheel-of-dharma",
  "character": "\u2638\ufe0f",
  "unicodeName": "wheel of dharma",
  "codePoint": "2638 FE0F",
  "group": "symbols",
  "subGroup": "religion"
}, {
  "slug": "yin-yang",
  "character": "\u262f\ufe0f",
  "unicodeName": "yin yang",
  "codePoint": "262F FE0F",
  "group": "symbols",
  "subGroup": "religion"
}, {
  "slug": "latin-cross",
  "character": "\u271d\ufe0f",
  "unicodeName": "latin cross",
  "codePoint": "271D FE0F",
  "group": "symbols",
  "subGroup": "religion"
}, {
  "slug": "orthodox-cross",
  "character": "\u2626\ufe0f",
  "unicodeName": "orthodox cross",
  "codePoint": "2626 FE0F",
  "group": "symbols",
  "subGroup": "religion"
}, {
  "slug": "star-and-crescent",
  "character": "\u262a\ufe0f",
  "unicodeName": "star and crescent",
  "codePoint": "262A FE0F",
  "group": "symbols",
  "subGroup": "religion"
}, {
  "slug": "peace-symbol",
  "character": "\u262e\ufe0f",
  "unicodeName": "peace symbol",
  "codePoint": "262E FE0F",
  "group": "symbols",
  "subGroup": "religion"
}, {
  "slug": "menorah",
  "character": "\ud83d\udd4e",
  "unicodeName": "menorah",
  "codePoint": "1F54E",
  "group": "symbols",
  "subGroup": "religion"
}, {
  "slug": "dotted-six-pointed-star",
  "character": "\ud83d\udd2f",
  "unicodeName": "dotted six-pointed star",
  "codePoint": "1F52F",
  "group": "symbols",
  "subGroup": "religion"
}, {
  "slug": "aries",
  "character": "\u2648",
  "unicodeName": "Aries",
  "codePoint": "2648",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "taurus",
  "character": "\u2649",
  "unicodeName": "Taurus",
  "codePoint": "2649",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "gemini",
  "character": "\u264a",
  "unicodeName": "Gemini",
  "codePoint": "264A",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "cancer",
  "character": "\u264b",
  "unicodeName": "Cancer",
  "codePoint": "264B",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "leo",
  "character": "\u264c",
  "unicodeName": "Leo",
  "codePoint": "264C",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "virgo",
  "character": "\u264d",
  "unicodeName": "Virgo",
  "codePoint": "264D",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "libra",
  "character": "\u264e",
  "unicodeName": "Libra",
  "codePoint": "264E",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "scorpio",
  "character": "\u264f",
  "unicodeName": "Scorpio",
  "codePoint": "264F",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "sagittarius",
  "character": "\u2650",
  "unicodeName": "Sagittarius",
  "codePoint": "2650",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "capricorn",
  "character": "\u2651",
  "unicodeName": "Capricorn",
  "codePoint": "2651",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "aquarius",
  "character": "\u2652",
  "unicodeName": "Aquarius",
  "codePoint": "2652",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "pisces",
  "character": "\u2653",
  "unicodeName": "Pisces",
  "codePoint": "2653",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "ophiuchus",
  "character": "\u26ce",
  "unicodeName": "Ophiuchus",
  "codePoint": "26CE",
  "group": "symbols",
  "subGroup": "zodiac"
}, {
  "slug": "shuffle-tracks-button",
  "character": "\ud83d\udd00",
  "unicodeName": "shuffle tracks button",
  "codePoint": "1F500",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "repeat-button",
  "character": "\ud83d\udd01",
  "unicodeName": "repeat button",
  "codePoint": "1F501",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "repeat-single-button",
  "character": "\ud83d\udd02",
  "unicodeName": "repeat single button",
  "codePoint": "1F502",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "play-button",
  "character": "\u25b6\ufe0f",
  "unicodeName": "play button",
  "codePoint": "25B6 FE0F",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "fast-forward-button",
  "character": "\u23e9",
  "unicodeName": "fast-forward button",
  "codePoint": "23E9",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "next-track-button",
  "character": "\u23ed\ufe0f",
  "unicodeName": "next track button",
  "codePoint": "23ED FE0F",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "play-or-pause-button",
  "character": "\u23ef\ufe0f",
  "unicodeName": "play or pause button",
  "codePoint": "23EF FE0F",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "reverse-button",
  "character": "\u25c0\ufe0f",
  "unicodeName": "reverse button",
  "codePoint": "25C0 FE0F",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "fast-reverse-button",
  "character": "\u23ea",
  "unicodeName": "fast reverse button",
  "codePoint": "23EA",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "last-track-button",
  "character": "\u23ee\ufe0f",
  "unicodeName": "last track button",
  "codePoint": "23EE FE0F",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "upwards-button",
  "character": "\ud83d\udd3c",
  "unicodeName": "upwards button",
  "codePoint": "1F53C",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "fast-up-button",
  "character": "\u23eb",
  "unicodeName": "fast up button",
  "codePoint": "23EB",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "downwards-button",
  "character": "\ud83d\udd3d",
  "unicodeName": "downwards button",
  "codePoint": "1F53D",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "fast-down-button",
  "character": "\u23ec",
  "unicodeName": "fast down button",
  "codePoint": "23EC",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "pause-button",
  "character": "\u23f8\ufe0f",
  "unicodeName": "pause button",
  "codePoint": "23F8 FE0F",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "stop-button",
  "character": "\u23f9\ufe0f",
  "unicodeName": "stop button",
  "codePoint": "23F9 FE0F",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "record-button",
  "character": "\u23fa\ufe0f",
  "unicodeName": "record button",
  "codePoint": "23FA FE0F",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "eject-button",
  "character": "\u23cf\ufe0f",
  "unicodeName": "eject button",
  "codePoint": "23CF FE0F",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "cinema",
  "character": "\ud83c\udfa6",
  "unicodeName": "cinema",
  "codePoint": "1F3A6",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "dim-button",
  "character": "\ud83d\udd05",
  "unicodeName": "dim button",
  "codePoint": "1F505",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "bright-button",
  "character": "\ud83d\udd06",
  "unicodeName": "bright button",
  "codePoint": "1F506",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "antenna-bars",
  "character": "\ud83d\udcf6",
  "unicodeName": "antenna bars",
  "codePoint": "1F4F6",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "vibration-mode",
  "character": "\ud83d\udcf3",
  "unicodeName": "vibration mode",
  "codePoint": "1F4F3",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "mobile-phone-off",
  "character": "\ud83d\udcf4",
  "unicodeName": "mobile phone off",
  "codePoint": "1F4F4",
  "group": "symbols",
  "subGroup": "av-symbol"
}, {
  "slug": "female-sign",
  "character": "\u2640\ufe0f",
  "unicodeName": "female sign",
  "codePoint": "2640 FE0F",
  "group": "symbols",
  "subGroup": "gender"
}, {
  "slug": "male-sign",
  "character": "\u2642\ufe0f",
  "unicodeName": "male sign",
  "codePoint": "2642 FE0F",
  "group": "symbols",
  "subGroup": "gender"
}, {
  "slug": "medical-symbol",
  "character": "\u2695\ufe0f",
  "unicodeName": "medical symbol",
  "codePoint": "2695 FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "infinity",
  "character": "\u267e\ufe0f",
  "unicodeName": "infinity",
  "codePoint": "267E FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "recycling-symbol",
  "character": "\u267b\ufe0f",
  "unicodeName": "recycling symbol",
  "codePoint": "267B FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "fleur-de-lis",
  "character": "\u269c\ufe0f",
  "unicodeName": "fleur-de-lis",
  "codePoint": "269C FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "trident-emblem",
  "character": "\ud83d\udd31",
  "unicodeName": "trident emblem",
  "codePoint": "1F531",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "name-badge",
  "character": "\ud83d\udcdb",
  "unicodeName": "name badge",
  "codePoint": "1F4DB",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "japanese-symbol-for-beginner",
  "character": "\ud83d\udd30",
  "unicodeName": "Japanese symbol for beginner",
  "codePoint": "1F530",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "hollow-red-circle",
  "character": "\u2b55",
  "unicodeName": "hollow red circle",
  "codePoint": "2B55",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "check-mark-button",
  "character": "\u2705",
  "unicodeName": "check mark button",
  "codePoint": "2705",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "check-box-with-check",
  "character": "\u2611\ufe0f",
  "unicodeName": "check box with check",
  "codePoint": "2611 FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "check-mark",
  "character": "\u2714\ufe0f",
  "unicodeName": "check mark",
  "codePoint": "2714 FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "multiplication-sign",
  "character": "\u2716\ufe0f",
  "unicodeName": "multiplication sign",
  "codePoint": "2716 FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "cross-mark",
  "character": "\u274c",
  "unicodeName": "cross mark",
  "codePoint": "274C",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "cross-mark-button",
  "character": "\u274e",
  "unicodeName": "cross mark button",
  "codePoint": "274E",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "plus-sign",
  "character": "\u2795",
  "unicodeName": "plus sign",
  "codePoint": "2795",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "minus-sign",
  "character": "\u2796",
  "unicodeName": "minus sign",
  "codePoint": "2796",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "division-sign",
  "character": "\u2797",
  "unicodeName": "division sign",
  "codePoint": "2797",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "curly-loop",
  "character": "\u27b0",
  "unicodeName": "curly loop",
  "codePoint": "27B0",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "double-curly-loop",
  "character": "\u27bf",
  "unicodeName": "double curly loop",
  "codePoint": "27BF",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "part-alternation-mark",
  "character": "\u303d\ufe0f",
  "unicodeName": "part alternation mark",
  "codePoint": "303D FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "eight-spoked-asterisk",
  "character": "\u2733\ufe0f",
  "unicodeName": "eight-spoked asterisk",
  "codePoint": "2733 FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "eight-pointed-star",
  "character": "\u2734\ufe0f",
  "unicodeName": "eight-pointed star",
  "codePoint": "2734 FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "sparkle",
  "character": "\u2747\ufe0f",
  "unicodeName": "sparkle",
  "codePoint": "2747 FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "double-exclamation-mark",
  "character": "\u203c\ufe0f",
  "unicodeName": "double exclamation mark",
  "codePoint": "203C FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "exclamation-question-mark",
  "character": "\u2049\ufe0f",
  "unicodeName": "exclamation question mark",
  "codePoint": "2049 FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "question-mark",
  "character": "\u2753",
  "unicodeName": "question mark",
  "codePoint": "2753",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "white-question-mark",
  "character": "\u2754",
  "unicodeName": "white question mark",
  "codePoint": "2754",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "white-exclamation-mark",
  "character": "\u2755",
  "unicodeName": "white exclamation mark",
  "codePoint": "2755",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "exclamation-mark",
  "character": "\u2757",
  "unicodeName": "exclamation mark",
  "codePoint": "2757",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "wavy-dash",
  "character": "\u3030\ufe0f",
  "unicodeName": "wavy dash",
  "codePoint": "3030 FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "copyright",
  "character": "\u00a9\ufe0f",
  "unicodeName": "copyright",
  "codePoint": "00A9 FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "registered",
  "character": "\u00ae\ufe0f",
  "unicodeName": "registered",
  "codePoint": "00AE FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "trade-mark",
  "character": "\u2122\ufe0f",
  "unicodeName": "trade mark",
  "codePoint": "2122 FE0F",
  "group": "symbols",
  "subGroup": "other-symbol"
}, {
  "slug": "keycap",
  "character": "*\ufe0f\u20e3",
  "unicodeName": "keycap: *",
  "codePoint": "002A FE0F 20E3",
  "group": "symbols",
  "subGroup": "keycap"
}, {
  "slug": "keycap-0",
  "character": "0\ufe0f\u20e3",
  "unicodeName": "keycap: 0",
  "codePoint": "0030 FE0F 20E3",
  "group": "symbols",
  "subGroup": "keycap"
}, {
  "slug": "keycap-1",
  "character": "1\ufe0f\u20e3",
  "unicodeName": "keycap: 1",
  "codePoint": "0031 FE0F 20E3",
  "group": "symbols",
  "subGroup": "keycap"
}, {
  "slug": "keycap-2",
  "character": "2\ufe0f\u20e3",
  "unicodeName": "keycap: 2",
  "codePoint": "0032 FE0F 20E3",
  "group": "symbols",
  "subGroup": "keycap"
}, {
  "slug": "keycap-3",
  "character": "3\ufe0f\u20e3",
  "unicodeName": "keycap: 3",
  "codePoint": "0033 FE0F 20E3",
  "group": "symbols",
  "subGroup": "keycap"
}, {
  "slug": "keycap-4",
  "character": "4\ufe0f\u20e3",
  "unicodeName": "keycap: 4",
  "codePoint": "0034 FE0F 20E3",
  "group": "symbols",
  "subGroup": "keycap"
}, {
  "slug": "keycap-5",
  "character": "5\ufe0f\u20e3",
  "unicodeName": "keycap: 5",
  "codePoint": "0035 FE0F 20E3",
  "group": "symbols",
  "subGroup": "keycap"
}, {
  "slug": "keycap-6",
  "character": "6\ufe0f\u20e3",
  "unicodeName": "keycap: 6",
  "codePoint": "0036 FE0F 20E3",
  "group": "symbols",
  "subGroup": "keycap"
}, {
  "slug": "keycap-7",
  "character": "7\ufe0f\u20e3",
  "unicodeName": "keycap: 7",
  "codePoint": "0037 FE0F 20E3",
  "group": "symbols",
  "subGroup": "keycap"
}, {
  "slug": "keycap-8",
  "character": "8\ufe0f\u20e3",
  "unicodeName": "keycap: 8",
  "codePoint": "0038 FE0F 20E3",
  "group": "symbols",
  "subGroup": "keycap"
}, {
  "slug": "keycap-9",
  "character": "9\ufe0f\u20e3",
  "unicodeName": "keycap: 9",
  "codePoint": "0039 FE0F 20E3",
  "group": "symbols",
  "subGroup": "keycap"
}, {
  "slug": "keycap-10",
  "character": "\ud83d\udd1f",
  "unicodeName": "keycap: 10",
  "codePoint": "1F51F",
  "group": "symbols",
  "subGroup": "keycap"
}, {
  "slug": "input-latin-uppercase",
  "character": "\ud83d\udd20",
  "unicodeName": "input latin uppercase",
  "codePoint": "1F520",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "input-latin-lowercase",
  "character": "\ud83d\udd21",
  "unicodeName": "input latin lowercase",
  "codePoint": "1F521",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "input-numbers",
  "character": "\ud83d\udd22",
  "unicodeName": "input numbers",
  "codePoint": "1F522",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "input-symbols",
  "character": "\ud83d\udd23",
  "unicodeName": "input symbols",
  "codePoint": "1F523",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "input-latin-letters",
  "character": "\ud83d\udd24",
  "unicodeName": "input latin letters",
  "codePoint": "1F524",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "a-button-blood-type",
  "character": "\ud83c\udd70\ufe0f",
  "unicodeName": "A button (blood type)",
  "codePoint": "1F170 FE0F",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "ab-button-blood-type",
  "character": "\ud83c\udd8e",
  "unicodeName": "AB button (blood type)",
  "codePoint": "1F18E",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "b-button-blood-type",
  "character": "\ud83c\udd71\ufe0f",
  "unicodeName": "B button (blood type)",
  "codePoint": "1F171 FE0F",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "cl-button",
  "character": "\ud83c\udd91",
  "unicodeName": "CL button",
  "codePoint": "1F191",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "cool-button",
  "character": "\ud83c\udd92",
  "unicodeName": "COOL button",
  "codePoint": "1F192",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "free-button",
  "character": "\ud83c\udd93",
  "unicodeName": "FREE button",
  "codePoint": "1F193",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "information",
  "character": "\u2139\ufe0f",
  "unicodeName": "information",
  "codePoint": "2139 FE0F",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "id-button",
  "character": "\ud83c\udd94",
  "unicodeName": "ID button",
  "codePoint": "1F194",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "circled-m",
  "character": "\u24c2\ufe0f",
  "unicodeName": "circled M",
  "codePoint": "24C2 FE0F",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "new-button",
  "character": "\ud83c\udd95",
  "unicodeName": "NEW button",
  "codePoint": "1F195",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "ng-button",
  "character": "\ud83c\udd96",
  "unicodeName": "NG button",
  "codePoint": "1F196",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "o-button-blood-type",
  "character": "\ud83c\udd7e\ufe0f",
  "unicodeName": "O button (blood type)",
  "codePoint": "1F17E FE0F",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "ok-button",
  "character": "\ud83c\udd97",
  "unicodeName": "OK button",
  "codePoint": "1F197",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "p-button",
  "character": "\ud83c\udd7f\ufe0f",
  "unicodeName": "P button",
  "codePoint": "1F17F FE0F",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "sos-button",
  "character": "\ud83c\udd98",
  "unicodeName": "SOS button",
  "codePoint": "1F198",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "up-button",
  "character": "\ud83c\udd99",
  "unicodeName": "UP! button",
  "codePoint": "1F199",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "vs-button",
  "character": "\ud83c\udd9a",
  "unicodeName": "VS button",
  "codePoint": "1F19A",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-here-button",
  "character": "\ud83c\ude01",
  "unicodeName": "Japanese \u201chere\u201d button",
  "codePoint": "1F201",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-service-charge-button",
  "character": "\ud83c\ude02\ufe0f",
  "unicodeName": "Japanese \u201cservice charge\u201d button",
  "codePoint": "1F202 FE0F",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-monthly-amount-button",
  "character": "\ud83c\ude37\ufe0f",
  "unicodeName": "Japanese \u201cmonthly amount\u201d button",
  "codePoint": "1F237 FE0F",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-not-free-of-charge-button",
  "character": "\ud83c\ude36",
  "unicodeName": "Japanese \u201cnot free of charge\u201d button",
  "codePoint": "1F236",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-reserved-button",
  "character": "\ud83c\ude2f",
  "unicodeName": "Japanese \u201creserved\u201d button",
  "codePoint": "1F22F",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-bargain-button",
  "character": "\ud83c\ude50",
  "unicodeName": "Japanese \u201cbargain\u201d button",
  "codePoint": "1F250",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-discount-button",
  "character": "\ud83c\ude39",
  "unicodeName": "Japanese \u201cdiscount\u201d button",
  "codePoint": "1F239",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-free-of-charge-button",
  "character": "\ud83c\ude1a",
  "unicodeName": "Japanese \u201cfree of charge\u201d button",
  "codePoint": "1F21A",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-prohibited-button",
  "character": "\ud83c\ude32",
  "unicodeName": "Japanese \u201cprohibited\u201d button",
  "codePoint": "1F232",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-acceptable-button",
  "character": "\ud83c\ude51",
  "unicodeName": "Japanese \u201cacceptable\u201d button",
  "codePoint": "1F251",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-application-button",
  "character": "\ud83c\ude38",
  "unicodeName": "Japanese \u201capplication\u201d button",
  "codePoint": "1F238",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-passing-grade-button",
  "character": "\ud83c\ude34",
  "unicodeName": "Japanese \u201cpassing grade\u201d button",
  "codePoint": "1F234",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-vacancy-button",
  "character": "\ud83c\ude33",
  "unicodeName": "Japanese \u201cvacancy\u201d button",
  "codePoint": "1F233",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-congratulations-button",
  "character": "\u3297\ufe0f",
  "unicodeName": "Japanese \u201ccongratulations\u201d button",
  "codePoint": "3297 FE0F",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-secret-button",
  "character": "\u3299\ufe0f",
  "unicodeName": "Japanese \u201csecret\u201d button",
  "codePoint": "3299 FE0F",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-open-for-business-button",
  "character": "\ud83c\ude3a",
  "unicodeName": "Japanese \u201copen for business\u201d button",
  "codePoint": "1F23A",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "japanese-no-vacancy-button",
  "character": "\ud83c\ude35",
  "unicodeName": "Japanese \u201cno vacancy\u201d button",
  "codePoint": "1F235",
  "group": "symbols",
  "subGroup": "alphanum"
}, {
  "slug": "red-circle",
  "character": "\ud83d\udd34",
  "unicodeName": "red circle",
  "codePoint": "1F534",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "orange-circle",
  "character": "\ud83d\udfe0",
  "unicodeName": "orange circle",
  "codePoint": "1F7E0",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "yellow-circle",
  "character": "\ud83d\udfe1",
  "unicodeName": "yellow circle",
  "codePoint": "1F7E1",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "green-circle",
  "character": "\ud83d\udfe2",
  "unicodeName": "green circle",
  "codePoint": "1F7E2",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "blue-circle",
  "character": "\ud83d\udd35",
  "unicodeName": "blue circle",
  "codePoint": "1F535",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "purple-circle",
  "character": "\ud83d\udfe3",
  "unicodeName": "purple circle",
  "codePoint": "1F7E3",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "brown-circle",
  "character": "\ud83d\udfe4",
  "unicodeName": "brown circle",
  "codePoint": "1F7E4",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "black-circle",
  "character": "\u26ab",
  "unicodeName": "black circle",
  "codePoint": "26AB",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "white-circle",
  "character": "\u26aa",
  "unicodeName": "white circle",
  "codePoint": "26AA",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "red-square",
  "character": "\ud83d\udfe5",
  "unicodeName": "red square",
  "codePoint": "1F7E5",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "orange-square",
  "character": "\ud83d\udfe7",
  "unicodeName": "orange square",
  "codePoint": "1F7E7",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "yellow-square",
  "character": "\ud83d\udfe8",
  "unicodeName": "yellow square",
  "codePoint": "1F7E8",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "green-square",
  "character": "\ud83d\udfe9",
  "unicodeName": "green square",
  "codePoint": "1F7E9",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "blue-square",
  "character": "\ud83d\udfe6",
  "unicodeName": "blue square",
  "codePoint": "1F7E6",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "purple-square",
  "character": "\ud83d\udfea",
  "unicodeName": "purple square",
  "codePoint": "1F7EA",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "brown-square",
  "character": "\ud83d\udfeb",
  "unicodeName": "brown square",
  "codePoint": "1F7EB",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "black-large-square",
  "character": "\u2b1b",
  "unicodeName": "black large square",
  "codePoint": "2B1B",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "white-large-square",
  "character": "\u2b1c",
  "unicodeName": "white large square",
  "codePoint": "2B1C",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "black-medium-square",
  "character": "\u25fc\ufe0f",
  "unicodeName": "black medium square",
  "codePoint": "25FC FE0F",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "white-medium-square",
  "character": "\u25fb\ufe0f",
  "unicodeName": "white medium square",
  "codePoint": "25FB FE0F",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "black-medium-small-square",
  "character": "\u25fe",
  "unicodeName": "black medium-small square",
  "codePoint": "25FE",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "white-medium-small-square",
  "character": "\u25fd",
  "unicodeName": "white medium-small square",
  "codePoint": "25FD",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "black-small-square",
  "character": "\u25aa\ufe0f",
  "unicodeName": "black small square",
  "codePoint": "25AA FE0F",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "white-small-square",
  "character": "\u25ab\ufe0f",
  "unicodeName": "white small square",
  "codePoint": "25AB FE0F",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "large-orange-diamond",
  "character": "\ud83d\udd36",
  "unicodeName": "large orange diamond",
  "codePoint": "1F536",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "large-blue-diamond",
  "character": "\ud83d\udd37",
  "unicodeName": "large blue diamond",
  "codePoint": "1F537",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "small-orange-diamond",
  "character": "\ud83d\udd38",
  "unicodeName": "small orange diamond",
  "codePoint": "1F538",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "small-blue-diamond",
  "character": "\ud83d\udd39",
  "unicodeName": "small blue diamond",
  "codePoint": "1F539",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "red-triangle-pointed-up",
  "character": "\ud83d\udd3a",
  "unicodeName": "red triangle pointed up",
  "codePoint": "1F53A",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "red-triangle-pointed-down",
  "character": "\ud83d\udd3b",
  "unicodeName": "red triangle pointed down",
  "codePoint": "1F53B",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "diamond-with-a-dot",
  "character": "\ud83d\udca0",
  "unicodeName": "diamond with a dot",
  "codePoint": "1F4A0",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "radio-button",
  "character": "\ud83d\udd18",
  "unicodeName": "radio button",
  "codePoint": "1F518",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "white-square-button",
  "character": "\ud83d\udd33",
  "unicodeName": "white square button",
  "codePoint": "1F533",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "black-square-button",
  "character": "\ud83d\udd32",
  "unicodeName": "black square button",
  "codePoint": "1F532",
  "group": "symbols",
  "subGroup": "geometric"
}, {
  "slug": "chequered-flag",
  "character": "\ud83c\udfc1",
  "unicodeName": "chequered flag",
  "codePoint": "1F3C1",
  "group": "flags",
  "subGroup": "flag"
}, {
  "slug": "triangular-flag",
  "character": "\ud83d\udea9",
  "unicodeName": "triangular flag",
  "codePoint": "1F6A9",
  "group": "flags",
  "subGroup": "flag"
}, {
  "slug": "crossed-flags",
  "character": "\ud83c\udf8c",
  "unicodeName": "crossed flags",
  "codePoint": "1F38C",
  "group": "flags",
  "subGroup": "flag"
}, {
  "slug": "black-flag",
  "character": "\ud83c\udff4",
  "unicodeName": "black flag",
  "codePoint": "1F3F4",
  "group": "flags",
  "subGroup": "flag",
  "variants": [{
    "slug": "flag-scotland",
    "character": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f"
  }, {
    "slug": "flag-wales",
    "character": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f"
  }]
}, {
  "slug": "white-flag",
  "character": "\ud83c\udff3\ufe0f",
  "unicodeName": "white flag",
  "codePoint": "1F3F3 FE0F",
  "group": "flags",
  "subGroup": "flag"
}, {
  "slug": "rainbow-flag",
  "character": "\ud83c\udff3\ufe0f\u200d\ud83c\udf08",
  "unicodeName": "rainbow flag",
  "codePoint": "1F3F3 FE0F 200D 1F308",
  "group": "flags",
  "subGroup": "flag"
}, {
  "slug": "pirate-flag",
  "character": "\ud83c\udff4\u200d\u2620\ufe0f",
  "unicodeName": "pirate flag",
  "codePoint": "1F3F4 200D 2620 FE0F",
  "group": "flags",
  "subGroup": "flag"
}, {
  "slug": "flag-ascension-island",
  "character": "\ud83c\udde6\ud83c\udde8",
  "unicodeName": "flag: Ascension Island",
  "codePoint": "1F1E6 1F1E8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-andorra",
  "character": "\ud83c\udde6\ud83c\udde9",
  "unicodeName": "flag: Andorra",
  "codePoint": "1F1E6 1F1E9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-united-arab-emirates",
  "character": "\ud83c\udde6\ud83c\uddea",
  "unicodeName": "flag: United Arab Emirates",
  "codePoint": "1F1E6 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-afghanistan",
  "character": "\ud83c\udde6\ud83c\uddeb",
  "unicodeName": "flag: Afghanistan",
  "codePoint": "1F1E6 1F1EB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-antigua-barbuda",
  "character": "\ud83c\udde6\ud83c\uddec",
  "unicodeName": "flag: Antigua & Barbuda",
  "codePoint": "1F1E6 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-anguilla",
  "character": "\ud83c\udde6\ud83c\uddee",
  "unicodeName": "flag: Anguilla",
  "codePoint": "1F1E6 1F1EE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-albania",
  "character": "\ud83c\udde6\ud83c\uddf1",
  "unicodeName": "flag: Albania",
  "codePoint": "1F1E6 1F1F1",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-armenia",
  "character": "\ud83c\udde6\ud83c\uddf2",
  "unicodeName": "flag: Armenia",
  "codePoint": "1F1E6 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-angola",
  "character": "\ud83c\udde6\ud83c\uddf4",
  "unicodeName": "flag: Angola",
  "codePoint": "1F1E6 1F1F4",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-antarctica",
  "character": "\ud83c\udde6\ud83c\uddf6",
  "unicodeName": "flag: Antarctica",
  "codePoint": "1F1E6 1F1F6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-argentina",
  "character": "\ud83c\udde6\ud83c\uddf7",
  "unicodeName": "flag: Argentina",
  "codePoint": "1F1E6 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-american-samoa",
  "character": "\ud83c\udde6\ud83c\uddf8",
  "unicodeName": "flag: American Samoa",
  "codePoint": "1F1E6 1F1F8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-austria",
  "character": "\ud83c\udde6\ud83c\uddf9",
  "unicodeName": "flag: Austria",
  "codePoint": "1F1E6 1F1F9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-australia",
  "character": "\ud83c\udde6\ud83c\uddfa",
  "unicodeName": "flag: Australia",
  "codePoint": "1F1E6 1F1FA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-aruba",
  "character": "\ud83c\udde6\ud83c\uddfc",
  "unicodeName": "flag: Aruba",
  "codePoint": "1F1E6 1F1FC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-aland-islands",
  "character": "\ud83c\udde6\ud83c\uddfd",
  "unicodeName": "flag: \u00c5land Islands",
  "codePoint": "1F1E6 1F1FD",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-azerbaijan",
  "character": "\ud83c\udde6\ud83c\uddff",
  "unicodeName": "flag: Azerbaijan",
  "codePoint": "1F1E6 1F1FF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-bosnia-herzegovina",
  "character": "\ud83c\udde7\ud83c\udde6",
  "unicodeName": "flag: Bosnia & Herzegovina",
  "codePoint": "1F1E7 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-barbados",
  "character": "\ud83c\udde7\ud83c\udde7",
  "unicodeName": "flag: Barbados",
  "codePoint": "1F1E7 1F1E7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-bangladesh",
  "character": "\ud83c\udde7\ud83c\udde9",
  "unicodeName": "flag: Bangladesh",
  "codePoint": "1F1E7 1F1E9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-belgium",
  "character": "\ud83c\udde7\ud83c\uddea",
  "unicodeName": "flag: Belgium",
  "codePoint": "1F1E7 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-burkina-faso",
  "character": "\ud83c\udde7\ud83c\uddeb",
  "unicodeName": "flag: Burkina Faso",
  "codePoint": "1F1E7 1F1EB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-bulgaria",
  "character": "\ud83c\udde7\ud83c\uddec",
  "unicodeName": "flag: Bulgaria",
  "codePoint": "1F1E7 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-bahrain",
  "character": "\ud83c\udde7\ud83c\udded",
  "unicodeName": "flag: Bahrain",
  "codePoint": "1F1E7 1F1ED",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-burundi",
  "character": "\ud83c\udde7\ud83c\uddee",
  "unicodeName": "flag: Burundi",
  "codePoint": "1F1E7 1F1EE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-benin",
  "character": "\ud83c\udde7\ud83c\uddef",
  "unicodeName": "flag: Benin",
  "codePoint": "1F1E7 1F1EF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-st-barthelemy",
  "character": "\ud83c\udde7\ud83c\uddf1",
  "unicodeName": "flag: St. Barth\u00e9lemy",
  "codePoint": "1F1E7 1F1F1",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-bermuda",
  "character": "\ud83c\udde7\ud83c\uddf2",
  "unicodeName": "flag: Bermuda",
  "codePoint": "1F1E7 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-brunei",
  "character": "\ud83c\udde7\ud83c\uddf3",
  "unicodeName": "flag: Brunei",
  "codePoint": "1F1E7 1F1F3",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-bolivia",
  "character": "\ud83c\udde7\ud83c\uddf4",
  "unicodeName": "flag: Bolivia",
  "codePoint": "1F1E7 1F1F4",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-caribbean-netherlands",
  "character": "\ud83c\udde7\ud83c\uddf6",
  "unicodeName": "flag: Caribbean Netherlands",
  "codePoint": "1F1E7 1F1F6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-brazil",
  "character": "\ud83c\udde7\ud83c\uddf7",
  "unicodeName": "flag: Brazil",
  "codePoint": "1F1E7 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-bahamas",
  "character": "\ud83c\udde7\ud83c\uddf8",
  "unicodeName": "flag: Bahamas",
  "codePoint": "1F1E7 1F1F8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-bhutan",
  "character": "\ud83c\udde7\ud83c\uddf9",
  "unicodeName": "flag: Bhutan",
  "codePoint": "1F1E7 1F1F9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-bouvet-island",
  "character": "\ud83c\udde7\ud83c\uddfb",
  "unicodeName": "flag: Bouvet Island",
  "codePoint": "1F1E7 1F1FB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-botswana",
  "character": "\ud83c\udde7\ud83c\uddfc",
  "unicodeName": "flag: Botswana",
  "codePoint": "1F1E7 1F1FC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-belarus",
  "character": "\ud83c\udde7\ud83c\uddfe",
  "unicodeName": "flag: Belarus",
  "codePoint": "1F1E7 1F1FE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-belize",
  "character": "\ud83c\udde7\ud83c\uddff",
  "unicodeName": "flag: Belize",
  "codePoint": "1F1E7 1F1FF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-canada",
  "character": "\ud83c\udde8\ud83c\udde6",
  "unicodeName": "flag: Canada",
  "codePoint": "1F1E8 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-cocos-keeling-islands",
  "character": "\ud83c\udde8\ud83c\udde8",
  "unicodeName": "flag: Cocos (Keeling) Islands",
  "codePoint": "1F1E8 1F1E8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-congo-kinshasa",
  "character": "\ud83c\udde8\ud83c\udde9",
  "unicodeName": "flag: Congo - Kinshasa",
  "codePoint": "1F1E8 1F1E9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-central-african-republic",
  "character": "\ud83c\udde8\ud83c\uddeb",
  "unicodeName": "flag: Central African Republic",
  "codePoint": "1F1E8 1F1EB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-congo-brazzaville",
  "character": "\ud83c\udde8\ud83c\uddec",
  "unicodeName": "flag: Congo - Brazzaville",
  "codePoint": "1F1E8 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-switzerland",
  "character": "\ud83c\udde8\ud83c\udded",
  "unicodeName": "flag: Switzerland",
  "codePoint": "1F1E8 1F1ED",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-cote-d-ivoire",
  "character": "\ud83c\udde8\ud83c\uddee",
  "unicodeName": "flag: C\u00f4te d\u2019Ivoire",
  "codePoint": "1F1E8 1F1EE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-cook-islands",
  "character": "\ud83c\udde8\ud83c\uddf0",
  "unicodeName": "flag: Cook Islands",
  "codePoint": "1F1E8 1F1F0",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-chile",
  "character": "\ud83c\udde8\ud83c\uddf1",
  "unicodeName": "flag: Chile",
  "codePoint": "1F1E8 1F1F1",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-cameroon",
  "character": "\ud83c\udde8\ud83c\uddf2",
  "unicodeName": "flag: Cameroon",
  "codePoint": "1F1E8 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-china",
  "character": "\ud83c\udde8\ud83c\uddf3",
  "unicodeName": "flag: China",
  "codePoint": "1F1E8 1F1F3",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-colombia",
  "character": "\ud83c\udde8\ud83c\uddf4",
  "unicodeName": "flag: Colombia",
  "codePoint": "1F1E8 1F1F4",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-clipperton-island",
  "character": "\ud83c\udde8\ud83c\uddf5",
  "unicodeName": "flag: Clipperton Island",
  "codePoint": "1F1E8 1F1F5",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-costa-rica",
  "character": "\ud83c\udde8\ud83c\uddf7",
  "unicodeName": "flag: Costa Rica",
  "codePoint": "1F1E8 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-cuba",
  "character": "\ud83c\udde8\ud83c\uddfa",
  "unicodeName": "flag: Cuba",
  "codePoint": "1F1E8 1F1FA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-cape-verde",
  "character": "\ud83c\udde8\ud83c\uddfb",
  "unicodeName": "flag: Cape Verde",
  "codePoint": "1F1E8 1F1FB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-curacao",
  "character": "\ud83c\udde8\ud83c\uddfc",
  "unicodeName": "flag: Cura\u00e7ao",
  "codePoint": "1F1E8 1F1FC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-christmas-island",
  "character": "\ud83c\udde8\ud83c\uddfd",
  "unicodeName": "flag: Christmas Island",
  "codePoint": "1F1E8 1F1FD",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-cyprus",
  "character": "\ud83c\udde8\ud83c\uddfe",
  "unicodeName": "flag: Cyprus",
  "codePoint": "1F1E8 1F1FE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-czechia",
  "character": "\ud83c\udde8\ud83c\uddff",
  "unicodeName": "flag: Czechia",
  "codePoint": "1F1E8 1F1FF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-germany",
  "character": "\ud83c\udde9\ud83c\uddea",
  "unicodeName": "flag: Germany",
  "codePoint": "1F1E9 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-diego-garcia",
  "character": "\ud83c\udde9\ud83c\uddec",
  "unicodeName": "flag: Diego Garcia",
  "codePoint": "1F1E9 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-djibouti",
  "character": "\ud83c\udde9\ud83c\uddef",
  "unicodeName": "flag: Djibouti",
  "codePoint": "1F1E9 1F1EF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-denmark",
  "character": "\ud83c\udde9\ud83c\uddf0",
  "unicodeName": "flag: Denmark",
  "codePoint": "1F1E9 1F1F0",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-dominica",
  "character": "\ud83c\udde9\ud83c\uddf2",
  "unicodeName": "flag: Dominica",
  "codePoint": "1F1E9 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-dominican-republic",
  "character": "\ud83c\udde9\ud83c\uddf4",
  "unicodeName": "flag: Dominican Republic",
  "codePoint": "1F1E9 1F1F4",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-algeria",
  "character": "\ud83c\udde9\ud83c\uddff",
  "unicodeName": "flag: Algeria",
  "codePoint": "1F1E9 1F1FF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-ceuta-melilla",
  "character": "\ud83c\uddea\ud83c\udde6",
  "unicodeName": "flag: Ceuta & Melilla",
  "codePoint": "1F1EA 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-ecuador",
  "character": "\ud83c\uddea\ud83c\udde8",
  "unicodeName": "flag: Ecuador",
  "codePoint": "1F1EA 1F1E8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-estonia",
  "character": "\ud83c\uddea\ud83c\uddea",
  "unicodeName": "flag: Estonia",
  "codePoint": "1F1EA 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-egypt",
  "character": "\ud83c\uddea\ud83c\uddec",
  "unicodeName": "flag: Egypt",
  "codePoint": "1F1EA 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-western-sahara",
  "character": "\ud83c\uddea\ud83c\udded",
  "unicodeName": "flag: Western Sahara",
  "codePoint": "1F1EA 1F1ED",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-eritrea",
  "character": "\ud83c\uddea\ud83c\uddf7",
  "unicodeName": "flag: Eritrea",
  "codePoint": "1F1EA 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-spain",
  "character": "\ud83c\uddea\ud83c\uddf8",
  "unicodeName": "flag: Spain",
  "codePoint": "1F1EA 1F1F8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-ethiopia",
  "character": "\ud83c\uddea\ud83c\uddf9",
  "unicodeName": "flag: Ethiopia",
  "codePoint": "1F1EA 1F1F9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-european-union",
  "character": "\ud83c\uddea\ud83c\uddfa",
  "unicodeName": "flag: European Union",
  "codePoint": "1F1EA 1F1FA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-finland",
  "character": "\ud83c\uddeb\ud83c\uddee",
  "unicodeName": "flag: Finland",
  "codePoint": "1F1EB 1F1EE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-fiji",
  "character": "\ud83c\uddeb\ud83c\uddef",
  "unicodeName": "flag: Fiji",
  "codePoint": "1F1EB 1F1EF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-falkland-islands",
  "character": "\ud83c\uddeb\ud83c\uddf0",
  "unicodeName": "flag: Falkland Islands",
  "codePoint": "1F1EB 1F1F0",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-micronesia",
  "character": "\ud83c\uddeb\ud83c\uddf2",
  "unicodeName": "flag: Micronesia",
  "codePoint": "1F1EB 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-faroe-islands",
  "character": "\ud83c\uddeb\ud83c\uddf4",
  "unicodeName": "flag: Faroe Islands",
  "codePoint": "1F1EB 1F1F4",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-france",
  "character": "\ud83c\uddeb\ud83c\uddf7",
  "unicodeName": "flag: France",
  "codePoint": "1F1EB 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-gabon",
  "character": "\ud83c\uddec\ud83c\udde6",
  "unicodeName": "flag: Gabon",
  "codePoint": "1F1EC 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-united-kingdom",
  "character": "\ud83c\uddec\ud83c\udde7",
  "unicodeName": "flag: United Kingdom",
  "codePoint": "1F1EC 1F1E7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-grenada",
  "character": "\ud83c\uddec\ud83c\udde9",
  "unicodeName": "flag: Grenada",
  "codePoint": "1F1EC 1F1E9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-georgia",
  "character": "\ud83c\uddec\ud83c\uddea",
  "unicodeName": "flag: Georgia",
  "codePoint": "1F1EC 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-french-guiana",
  "character": "\ud83c\uddec\ud83c\uddeb",
  "unicodeName": "flag: French Guiana",
  "codePoint": "1F1EC 1F1EB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-guernsey",
  "character": "\ud83c\uddec\ud83c\uddec",
  "unicodeName": "flag: Guernsey",
  "codePoint": "1F1EC 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-ghana",
  "character": "\ud83c\uddec\ud83c\udded",
  "unicodeName": "flag: Ghana",
  "codePoint": "1F1EC 1F1ED",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-gibraltar",
  "character": "\ud83c\uddec\ud83c\uddee",
  "unicodeName": "flag: Gibraltar",
  "codePoint": "1F1EC 1F1EE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-greenland",
  "character": "\ud83c\uddec\ud83c\uddf1",
  "unicodeName": "flag: Greenland",
  "codePoint": "1F1EC 1F1F1",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-gambia",
  "character": "\ud83c\uddec\ud83c\uddf2",
  "unicodeName": "flag: Gambia",
  "codePoint": "1F1EC 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-guinea",
  "character": "\ud83c\uddec\ud83c\uddf3",
  "unicodeName": "flag: Guinea",
  "codePoint": "1F1EC 1F1F3",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-guadeloupe",
  "character": "\ud83c\uddec\ud83c\uddf5",
  "unicodeName": "flag: Guadeloupe",
  "codePoint": "1F1EC 1F1F5",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-equatorial-guinea",
  "character": "\ud83c\uddec\ud83c\uddf6",
  "unicodeName": "flag: Equatorial Guinea",
  "codePoint": "1F1EC 1F1F6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-greece",
  "character": "\ud83c\uddec\ud83c\uddf7",
  "unicodeName": "flag: Greece",
  "codePoint": "1F1EC 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-south-georgia-south-sandwich-islands",
  "character": "\ud83c\uddec\ud83c\uddf8",
  "unicodeName": "flag: South Georgia & South Sandwich Islands",
  "codePoint": "1F1EC 1F1F8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-guatemala",
  "character": "\ud83c\uddec\ud83c\uddf9",
  "unicodeName": "flag: Guatemala",
  "codePoint": "1F1EC 1F1F9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-guam",
  "character": "\ud83c\uddec\ud83c\uddfa",
  "unicodeName": "flag: Guam",
  "codePoint": "1F1EC 1F1FA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-guinea-bissau",
  "character": "\ud83c\uddec\ud83c\uddfc",
  "unicodeName": "flag: Guinea-Bissau",
  "codePoint": "1F1EC 1F1FC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-guyana",
  "character": "\ud83c\uddec\ud83c\uddfe",
  "unicodeName": "flag: Guyana",
  "codePoint": "1F1EC 1F1FE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-hong-kong-sar-china",
  "character": "\ud83c\udded\ud83c\uddf0",
  "unicodeName": "flag: Hong Kong SAR China",
  "codePoint": "1F1ED 1F1F0",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-heard-mcdonald-islands",
  "character": "\ud83c\udded\ud83c\uddf2",
  "unicodeName": "flag: Heard & McDonald Islands",
  "codePoint": "1F1ED 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-honduras",
  "character": "\ud83c\udded\ud83c\uddf3",
  "unicodeName": "flag: Honduras",
  "codePoint": "1F1ED 1F1F3",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-croatia",
  "character": "\ud83c\udded\ud83c\uddf7",
  "unicodeName": "flag: Croatia",
  "codePoint": "1F1ED 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-haiti",
  "character": "\ud83c\udded\ud83c\uddf9",
  "unicodeName": "flag: Haiti",
  "codePoint": "1F1ED 1F1F9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-hungary",
  "character": "\ud83c\udded\ud83c\uddfa",
  "unicodeName": "flag: Hungary",
  "codePoint": "1F1ED 1F1FA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-canary-islands",
  "character": "\ud83c\uddee\ud83c\udde8",
  "unicodeName": "flag: Canary Islands",
  "codePoint": "1F1EE 1F1E8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-indonesia",
  "character": "\ud83c\uddee\ud83c\udde9",
  "unicodeName": "flag: Indonesia",
  "codePoint": "1F1EE 1F1E9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-ireland",
  "character": "\ud83c\uddee\ud83c\uddea",
  "unicodeName": "flag: Ireland",
  "codePoint": "1F1EE 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-israel",
  "character": "\ud83c\uddee\ud83c\uddf1",
  "unicodeName": "flag: Israel",
  "codePoint": "1F1EE 1F1F1",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-isle-of-man",
  "character": "\ud83c\uddee\ud83c\uddf2",
  "unicodeName": "flag: Isle of Man",
  "codePoint": "1F1EE 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-india",
  "character": "\ud83c\uddee\ud83c\uddf3",
  "unicodeName": "flag: India",
  "codePoint": "1F1EE 1F1F3",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-british-indian-ocean-territory",
  "character": "\ud83c\uddee\ud83c\uddf4",
  "unicodeName": "flag: British Indian Ocean Territory",
  "codePoint": "1F1EE 1F1F4",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-iraq",
  "character": "\ud83c\uddee\ud83c\uddf6",
  "unicodeName": "flag: Iraq",
  "codePoint": "1F1EE 1F1F6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-iran",
  "character": "\ud83c\uddee\ud83c\uddf7",
  "unicodeName": "flag: Iran",
  "codePoint": "1F1EE 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-iceland",
  "character": "\ud83c\uddee\ud83c\uddf8",
  "unicodeName": "flag: Iceland",
  "codePoint": "1F1EE 1F1F8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-italy",
  "character": "\ud83c\uddee\ud83c\uddf9",
  "unicodeName": "flag: Italy",
  "codePoint": "1F1EE 1F1F9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-jersey",
  "character": "\ud83c\uddef\ud83c\uddea",
  "unicodeName": "flag: Jersey",
  "codePoint": "1F1EF 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-jamaica",
  "character": "\ud83c\uddef\ud83c\uddf2",
  "unicodeName": "flag: Jamaica",
  "codePoint": "1F1EF 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-jordan",
  "character": "\ud83c\uddef\ud83c\uddf4",
  "unicodeName": "flag: Jordan",
  "codePoint": "1F1EF 1F1F4",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-japan",
  "character": "\ud83c\uddef\ud83c\uddf5",
  "unicodeName": "flag: Japan",
  "codePoint": "1F1EF 1F1F5",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-kenya",
  "character": "\ud83c\uddf0\ud83c\uddea",
  "unicodeName": "flag: Kenya",
  "codePoint": "1F1F0 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-kyrgyzstan",
  "character": "\ud83c\uddf0\ud83c\uddec",
  "unicodeName": "flag: Kyrgyzstan",
  "codePoint": "1F1F0 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-cambodia",
  "character": "\ud83c\uddf0\ud83c\udded",
  "unicodeName": "flag: Cambodia",
  "codePoint": "1F1F0 1F1ED",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-kiribati",
  "character": "\ud83c\uddf0\ud83c\uddee",
  "unicodeName": "flag: Kiribati",
  "codePoint": "1F1F0 1F1EE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-comoros",
  "character": "\ud83c\uddf0\ud83c\uddf2",
  "unicodeName": "flag: Comoros",
  "codePoint": "1F1F0 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-st-kitts-nevis",
  "character": "\ud83c\uddf0\ud83c\uddf3",
  "unicodeName": "flag: St. Kitts & Nevis",
  "codePoint": "1F1F0 1F1F3",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-north-korea",
  "character": "\ud83c\uddf0\ud83c\uddf5",
  "unicodeName": "flag: North Korea",
  "codePoint": "1F1F0 1F1F5",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-south-korea",
  "character": "\ud83c\uddf0\ud83c\uddf7",
  "unicodeName": "flag: South Korea",
  "codePoint": "1F1F0 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-kuwait",
  "character": "\ud83c\uddf0\ud83c\uddfc",
  "unicodeName": "flag: Kuwait",
  "codePoint": "1F1F0 1F1FC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-cayman-islands",
  "character": "\ud83c\uddf0\ud83c\uddfe",
  "unicodeName": "flag: Cayman Islands",
  "codePoint": "1F1F0 1F1FE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-kazakhstan",
  "character": "\ud83c\uddf0\ud83c\uddff",
  "unicodeName": "flag: Kazakhstan",
  "codePoint": "1F1F0 1F1FF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-laos",
  "character": "\ud83c\uddf1\ud83c\udde6",
  "unicodeName": "flag: Laos",
  "codePoint": "1F1F1 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-lebanon",
  "character": "\ud83c\uddf1\ud83c\udde7",
  "unicodeName": "flag: Lebanon",
  "codePoint": "1F1F1 1F1E7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-st-lucia",
  "character": "\ud83c\uddf1\ud83c\udde8",
  "unicodeName": "flag: St. Lucia",
  "codePoint": "1F1F1 1F1E8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-liechtenstein",
  "character": "\ud83c\uddf1\ud83c\uddee",
  "unicodeName": "flag: Liechtenstein",
  "codePoint": "1F1F1 1F1EE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-sri-lanka",
  "character": "\ud83c\uddf1\ud83c\uddf0",
  "unicodeName": "flag: Sri Lanka",
  "codePoint": "1F1F1 1F1F0",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-liberia",
  "character": "\ud83c\uddf1\ud83c\uddf7",
  "unicodeName": "flag: Liberia",
  "codePoint": "1F1F1 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-lesotho",
  "character": "\ud83c\uddf1\ud83c\uddf8",
  "unicodeName": "flag: Lesotho",
  "codePoint": "1F1F1 1F1F8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-lithuania",
  "character": "\ud83c\uddf1\ud83c\uddf9",
  "unicodeName": "flag: Lithuania",
  "codePoint": "1F1F1 1F1F9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-luxembourg",
  "character": "\ud83c\uddf1\ud83c\uddfa",
  "unicodeName": "flag: Luxembourg",
  "codePoint": "1F1F1 1F1FA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-latvia",
  "character": "\ud83c\uddf1\ud83c\uddfb",
  "unicodeName": "flag: Latvia",
  "codePoint": "1F1F1 1F1FB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-libya",
  "character": "\ud83c\uddf1\ud83c\uddfe",
  "unicodeName": "flag: Libya",
  "codePoint": "1F1F1 1F1FE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-morocco",
  "character": "\ud83c\uddf2\ud83c\udde6",
  "unicodeName": "flag: Morocco",
  "codePoint": "1F1F2 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-monaco",
  "character": "\ud83c\uddf2\ud83c\udde8",
  "unicodeName": "flag: Monaco",
  "codePoint": "1F1F2 1F1E8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-moldova",
  "character": "\ud83c\uddf2\ud83c\udde9",
  "unicodeName": "flag: Moldova",
  "codePoint": "1F1F2 1F1E9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-montenegro",
  "character": "\ud83c\uddf2\ud83c\uddea",
  "unicodeName": "flag: Montenegro",
  "codePoint": "1F1F2 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-st-martin",
  "character": "\ud83c\uddf2\ud83c\uddeb",
  "unicodeName": "flag: St. Martin",
  "codePoint": "1F1F2 1F1EB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-madagascar",
  "character": "\ud83c\uddf2\ud83c\uddec",
  "unicodeName": "flag: Madagascar",
  "codePoint": "1F1F2 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-marshall-islands",
  "character": "\ud83c\uddf2\ud83c\udded",
  "unicodeName": "flag: Marshall Islands",
  "codePoint": "1F1F2 1F1ED",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-macedonia",
  "character": "\ud83c\uddf2\ud83c\uddf0",
  "unicodeName": "flag: Macedonia",
  "codePoint": "1F1F2 1F1F0",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-mali",
  "character": "\ud83c\uddf2\ud83c\uddf1",
  "unicodeName": "flag: Mali",
  "codePoint": "1F1F2 1F1F1",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-myanmar-burma",
  "character": "\ud83c\uddf2\ud83c\uddf2",
  "unicodeName": "flag: Myanmar (Burma)",
  "codePoint": "1F1F2 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-mongolia",
  "character": "\ud83c\uddf2\ud83c\uddf3",
  "unicodeName": "flag: Mongolia",
  "codePoint": "1F1F2 1F1F3",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-macao-sar-china",
  "character": "\ud83c\uddf2\ud83c\uddf4",
  "unicodeName": "flag: Macao SAR China",
  "codePoint": "1F1F2 1F1F4",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-northern-mariana-islands",
  "character": "\ud83c\uddf2\ud83c\uddf5",
  "unicodeName": "flag: Northern Mariana Islands",
  "codePoint": "1F1F2 1F1F5",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-martinique",
  "character": "\ud83c\uddf2\ud83c\uddf6",
  "unicodeName": "flag: Martinique",
  "codePoint": "1F1F2 1F1F6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-mauritania",
  "character": "\ud83c\uddf2\ud83c\uddf7",
  "unicodeName": "flag: Mauritania",
  "codePoint": "1F1F2 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-montserrat",
  "character": "\ud83c\uddf2\ud83c\uddf8",
  "unicodeName": "flag: Montserrat",
  "codePoint": "1F1F2 1F1F8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-malta",
  "character": "\ud83c\uddf2\ud83c\uddf9",
  "unicodeName": "flag: Malta",
  "codePoint": "1F1F2 1F1F9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-mauritius",
  "character": "\ud83c\uddf2\ud83c\uddfa",
  "unicodeName": "flag: Mauritius",
  "codePoint": "1F1F2 1F1FA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-maldives",
  "character": "\ud83c\uddf2\ud83c\uddfb",
  "unicodeName": "flag: Maldives",
  "codePoint": "1F1F2 1F1FB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-malawi",
  "character": "\ud83c\uddf2\ud83c\uddfc",
  "unicodeName": "flag: Malawi",
  "codePoint": "1F1F2 1F1FC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-mexico",
  "character": "\ud83c\uddf2\ud83c\uddfd",
  "unicodeName": "flag: Mexico",
  "codePoint": "1F1F2 1F1FD",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-malaysia",
  "character": "\ud83c\uddf2\ud83c\uddfe",
  "unicodeName": "flag: Malaysia",
  "codePoint": "1F1F2 1F1FE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-mozambique",
  "character": "\ud83c\uddf2\ud83c\uddff",
  "unicodeName": "flag: Mozambique",
  "codePoint": "1F1F2 1F1FF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-namibia",
  "character": "\ud83c\uddf3\ud83c\udde6",
  "unicodeName": "flag: Namibia",
  "codePoint": "1F1F3 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-new-caledonia",
  "character": "\ud83c\uddf3\ud83c\udde8",
  "unicodeName": "flag: New Caledonia",
  "codePoint": "1F1F3 1F1E8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-niger",
  "character": "\ud83c\uddf3\ud83c\uddea",
  "unicodeName": "flag: Niger",
  "codePoint": "1F1F3 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-norfolk-island",
  "character": "\ud83c\uddf3\ud83c\uddeb",
  "unicodeName": "flag: Norfolk Island",
  "codePoint": "1F1F3 1F1EB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-nigeria",
  "character": "\ud83c\uddf3\ud83c\uddec",
  "unicodeName": "flag: Nigeria",
  "codePoint": "1F1F3 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-nicaragua",
  "character": "\ud83c\uddf3\ud83c\uddee",
  "unicodeName": "flag: Nicaragua",
  "codePoint": "1F1F3 1F1EE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-netherlands",
  "character": "\ud83c\uddf3\ud83c\uddf1",
  "unicodeName": "flag: Netherlands",
  "codePoint": "1F1F3 1F1F1",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-norway",
  "character": "\ud83c\uddf3\ud83c\uddf4",
  "unicodeName": "flag: Norway",
  "codePoint": "1F1F3 1F1F4",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-nepal",
  "character": "\ud83c\uddf3\ud83c\uddf5",
  "unicodeName": "flag: Nepal",
  "codePoint": "1F1F3 1F1F5",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-nauru",
  "character": "\ud83c\uddf3\ud83c\uddf7",
  "unicodeName": "flag: Nauru",
  "codePoint": "1F1F3 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-niue",
  "character": "\ud83c\uddf3\ud83c\uddfa",
  "unicodeName": "flag: Niue",
  "codePoint": "1F1F3 1F1FA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-new-zealand",
  "character": "\ud83c\uddf3\ud83c\uddff",
  "unicodeName": "flag: New Zealand",
  "codePoint": "1F1F3 1F1FF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-oman",
  "character": "\ud83c\uddf4\ud83c\uddf2",
  "unicodeName": "flag: Oman",
  "codePoint": "1F1F4 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-panama",
  "character": "\ud83c\uddf5\ud83c\udde6",
  "unicodeName": "flag: Panama",
  "codePoint": "1F1F5 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-peru",
  "character": "\ud83c\uddf5\ud83c\uddea",
  "unicodeName": "flag: Peru",
  "codePoint": "1F1F5 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-french-polynesia",
  "character": "\ud83c\uddf5\ud83c\uddeb",
  "unicodeName": "flag: French Polynesia",
  "codePoint": "1F1F5 1F1EB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-papua-new-guinea",
  "character": "\ud83c\uddf5\ud83c\uddec",
  "unicodeName": "flag: Papua New Guinea",
  "codePoint": "1F1F5 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-philippines",
  "character": "\ud83c\uddf5\ud83c\udded",
  "unicodeName": "flag: Philippines",
  "codePoint": "1F1F5 1F1ED",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-pakistan",
  "character": "\ud83c\uddf5\ud83c\uddf0",
  "unicodeName": "flag: Pakistan",
  "codePoint": "1F1F5 1F1F0",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-poland",
  "character": "\ud83c\uddf5\ud83c\uddf1",
  "unicodeName": "flag: Poland",
  "codePoint": "1F1F5 1F1F1",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-st-pierre-miquelon",
  "character": "\ud83c\uddf5\ud83c\uddf2",
  "unicodeName": "flag: St. Pierre & Miquelon",
  "codePoint": "1F1F5 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-pitcairn-islands",
  "character": "\ud83c\uddf5\ud83c\uddf3",
  "unicodeName": "flag: Pitcairn Islands",
  "codePoint": "1F1F5 1F1F3",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-puerto-rico",
  "character": "\ud83c\uddf5\ud83c\uddf7",
  "unicodeName": "flag: Puerto Rico",
  "codePoint": "1F1F5 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-palestinian-territories",
  "character": "\ud83c\uddf5\ud83c\uddf8",
  "unicodeName": "flag: Palestinian Territories",
  "codePoint": "1F1F5 1F1F8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-portugal",
  "character": "\ud83c\uddf5\ud83c\uddf9",
  "unicodeName": "flag: Portugal",
  "codePoint": "1F1F5 1F1F9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-palau",
  "character": "\ud83c\uddf5\ud83c\uddfc",
  "unicodeName": "flag: Palau",
  "codePoint": "1F1F5 1F1FC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-paraguay",
  "character": "\ud83c\uddf5\ud83c\uddfe",
  "unicodeName": "flag: Paraguay",
  "codePoint": "1F1F5 1F1FE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-qatar",
  "character": "\ud83c\uddf6\ud83c\udde6",
  "unicodeName": "flag: Qatar",
  "codePoint": "1F1F6 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-reunion",
  "character": "\ud83c\uddf7\ud83c\uddea",
  "unicodeName": "flag: R\u00e9union",
  "codePoint": "1F1F7 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-romania",
  "character": "\ud83c\uddf7\ud83c\uddf4",
  "unicodeName": "flag: Romania",
  "codePoint": "1F1F7 1F1F4",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-serbia",
  "character": "\ud83c\uddf7\ud83c\uddf8",
  "unicodeName": "flag: Serbia",
  "codePoint": "1F1F7 1F1F8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-russia",
  "character": "\ud83c\uddf7\ud83c\uddfa",
  "unicodeName": "flag: Russia",
  "codePoint": "1F1F7 1F1FA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-rwanda",
  "character": "\ud83c\uddf7\ud83c\uddfc",
  "unicodeName": "flag: Rwanda",
  "codePoint": "1F1F7 1F1FC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-saudi-arabia",
  "character": "\ud83c\uddf8\ud83c\udde6",
  "unicodeName": "flag: Saudi Arabia",
  "codePoint": "1F1F8 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-solomon-islands",
  "character": "\ud83c\uddf8\ud83c\udde7",
  "unicodeName": "flag: Solomon Islands",
  "codePoint": "1F1F8 1F1E7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-seychelles",
  "character": "\ud83c\uddf8\ud83c\udde8",
  "unicodeName": "flag: Seychelles",
  "codePoint": "1F1F8 1F1E8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-sudan",
  "character": "\ud83c\uddf8\ud83c\udde9",
  "unicodeName": "flag: Sudan",
  "codePoint": "1F1F8 1F1E9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-sweden",
  "character": "\ud83c\uddf8\ud83c\uddea",
  "unicodeName": "flag: Sweden",
  "codePoint": "1F1F8 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-singapore",
  "character": "\ud83c\uddf8\ud83c\uddec",
  "unicodeName": "flag: Singapore",
  "codePoint": "1F1F8 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-st-helena",
  "character": "\ud83c\uddf8\ud83c\udded",
  "unicodeName": "flag: St. Helena",
  "codePoint": "1F1F8 1F1ED",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-slovenia",
  "character": "\ud83c\uddf8\ud83c\uddee",
  "unicodeName": "flag: Slovenia",
  "codePoint": "1F1F8 1F1EE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-svalbard-jan-mayen",
  "character": "\ud83c\uddf8\ud83c\uddef",
  "unicodeName": "flag: Svalbard & Jan Mayen",
  "codePoint": "1F1F8 1F1EF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-slovakia",
  "character": "\ud83c\uddf8\ud83c\uddf0",
  "unicodeName": "flag: Slovakia",
  "codePoint": "1F1F8 1F1F0",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-sierra-leone",
  "character": "\ud83c\uddf8\ud83c\uddf1",
  "unicodeName": "flag: Sierra Leone",
  "codePoint": "1F1F8 1F1F1",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-san-marino",
  "character": "\ud83c\uddf8\ud83c\uddf2",
  "unicodeName": "flag: San Marino",
  "codePoint": "1F1F8 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-senegal",
  "character": "\ud83c\uddf8\ud83c\uddf3",
  "unicodeName": "flag: Senegal",
  "codePoint": "1F1F8 1F1F3",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-somalia",
  "character": "\ud83c\uddf8\ud83c\uddf4",
  "unicodeName": "flag: Somalia",
  "codePoint": "1F1F8 1F1F4",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-suriname",
  "character": "\ud83c\uddf8\ud83c\uddf7",
  "unicodeName": "flag: Suriname",
  "codePoint": "1F1F8 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-south-sudan",
  "character": "\ud83c\uddf8\ud83c\uddf8",
  "unicodeName": "flag: South Sudan",
  "codePoint": "1F1F8 1F1F8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-sao-tome-principe",
  "character": "\ud83c\uddf8\ud83c\uddf9",
  "unicodeName": "flag: S\u00e3o Tom\u00e9 & Pr\u00edncipe",
  "codePoint": "1F1F8 1F1F9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-el-salvador",
  "character": "\ud83c\uddf8\ud83c\uddfb",
  "unicodeName": "flag: El Salvador",
  "codePoint": "1F1F8 1F1FB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-sint-maarten",
  "character": "\ud83c\uddf8\ud83c\uddfd",
  "unicodeName": "flag: Sint Maarten",
  "codePoint": "1F1F8 1F1FD",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-syria",
  "character": "\ud83c\uddf8\ud83c\uddfe",
  "unicodeName": "flag: Syria",
  "codePoint": "1F1F8 1F1FE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-eswatini",
  "character": "\ud83c\uddf8\ud83c\uddff",
  "unicodeName": "flag: Eswatini",
  "codePoint": "1F1F8 1F1FF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-tristan-da-cunha",
  "character": "\ud83c\uddf9\ud83c\udde6",
  "unicodeName": "flag: Tristan da Cunha",
  "codePoint": "1F1F9 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-turks-caicos-islands",
  "character": "\ud83c\uddf9\ud83c\udde8",
  "unicodeName": "flag: Turks & Caicos Islands",
  "codePoint": "1F1F9 1F1E8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-chad",
  "character": "\ud83c\uddf9\ud83c\udde9",
  "unicodeName": "flag: Chad",
  "codePoint": "1F1F9 1F1E9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-french-southern-territories",
  "character": "\ud83c\uddf9\ud83c\uddeb",
  "unicodeName": "flag: French Southern Territories",
  "codePoint": "1F1F9 1F1EB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-togo",
  "character": "\ud83c\uddf9\ud83c\uddec",
  "unicodeName": "flag: Togo",
  "codePoint": "1F1F9 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-thailand",
  "character": "\ud83c\uddf9\ud83c\udded",
  "unicodeName": "flag: Thailand",
  "codePoint": "1F1F9 1F1ED",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-tajikistan",
  "character": "\ud83c\uddf9\ud83c\uddef",
  "unicodeName": "flag: Tajikistan",
  "codePoint": "1F1F9 1F1EF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-tokelau",
  "character": "\ud83c\uddf9\ud83c\uddf0",
  "unicodeName": "flag: Tokelau",
  "codePoint": "1F1F9 1F1F0",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-timor-leste",
  "character": "\ud83c\uddf9\ud83c\uddf1",
  "unicodeName": "flag: Timor-Leste",
  "codePoint": "1F1F9 1F1F1",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-turkmenistan",
  "character": "\ud83c\uddf9\ud83c\uddf2",
  "unicodeName": "flag: Turkmenistan",
  "codePoint": "1F1F9 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-tunisia",
  "character": "\ud83c\uddf9\ud83c\uddf3",
  "unicodeName": "flag: Tunisia",
  "codePoint": "1F1F9 1F1F3",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-tonga",
  "character": "\ud83c\uddf9\ud83c\uddf4",
  "unicodeName": "flag: Tonga",
  "codePoint": "1F1F9 1F1F4",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-turkey",
  "character": "\ud83c\uddf9\ud83c\uddf7",
  "unicodeName": "flag: Turkey",
  "codePoint": "1F1F9 1F1F7",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-trinidad-tobago",
  "character": "\ud83c\uddf9\ud83c\uddf9",
  "unicodeName": "flag: Trinidad & Tobago",
  "codePoint": "1F1F9 1F1F9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-tuvalu",
  "character": "\ud83c\uddf9\ud83c\uddfb",
  "unicodeName": "flag: Tuvalu",
  "codePoint": "1F1F9 1F1FB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-taiwan",
  "character": "\ud83c\uddf9\ud83c\uddfc",
  "unicodeName": "flag: Taiwan",
  "codePoint": "1F1F9 1F1FC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-tanzania",
  "character": "\ud83c\uddf9\ud83c\uddff",
  "unicodeName": "flag: Tanzania",
  "codePoint": "1F1F9 1F1FF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-ukraine",
  "character": "\ud83c\uddfa\ud83c\udde6",
  "unicodeName": "flag: Ukraine",
  "codePoint": "1F1FA 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-uganda",
  "character": "\ud83c\uddfa\ud83c\uddec",
  "unicodeName": "flag: Uganda",
  "codePoint": "1F1FA 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-u-s-outlying-islands",
  "character": "\ud83c\uddfa\ud83c\uddf2",
  "unicodeName": "flag: U.S. Outlying Islands",
  "codePoint": "1F1FA 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-united-nations",
  "character": "\ud83c\uddfa\ud83c\uddf3",
  "unicodeName": "flag: United Nations",
  "codePoint": "1F1FA 1F1F3",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-united-states",
  "character": "\ud83c\uddfa\ud83c\uddf8",
  "unicodeName": "flag: United States",
  "codePoint": "1F1FA 1F1F8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-uruguay",
  "character": "\ud83c\uddfa\ud83c\uddfe",
  "unicodeName": "flag: Uruguay",
  "codePoint": "1F1FA 1F1FE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-uzbekistan",
  "character": "\ud83c\uddfa\ud83c\uddff",
  "unicodeName": "flag: Uzbekistan",
  "codePoint": "1F1FA 1F1FF",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-vatican-city",
  "character": "\ud83c\uddfb\ud83c\udde6",
  "unicodeName": "flag: Vatican City",
  "codePoint": "1F1FB 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-st-vincent-grenadines",
  "character": "\ud83c\uddfb\ud83c\udde8",
  "unicodeName": "flag: St. Vincent & Grenadines",
  "codePoint": "1F1FB 1F1E8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-venezuela",
  "character": "\ud83c\uddfb\ud83c\uddea",
  "unicodeName": "flag: Venezuela",
  "codePoint": "1F1FB 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-british-virgin-islands",
  "character": "\ud83c\uddfb\ud83c\uddec",
  "unicodeName": "flag: British Virgin Islands",
  "codePoint": "1F1FB 1F1EC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-u-s-virgin-islands",
  "character": "\ud83c\uddfb\ud83c\uddee",
  "unicodeName": "flag: U.S. Virgin Islands",
  "codePoint": "1F1FB 1F1EE",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-vietnam",
  "character": "\ud83c\uddfb\ud83c\uddf3",
  "unicodeName": "flag: Vietnam",
  "codePoint": "1F1FB 1F1F3",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-vanuatu",
  "character": "\ud83c\uddfb\ud83c\uddfa",
  "unicodeName": "flag: Vanuatu",
  "codePoint": "1F1FB 1F1FA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-wallis-futuna",
  "character": "\ud83c\uddfc\ud83c\uddeb",
  "unicodeName": "flag: Wallis & Futuna",
  "codePoint": "1F1FC 1F1EB",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-samoa",
  "character": "\ud83c\uddfc\ud83c\uddf8",
  "unicodeName": "flag: Samoa",
  "codePoint": "1F1FC 1F1F8",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-kosovo",
  "character": "\ud83c\uddfd\ud83c\uddf0",
  "unicodeName": "flag: Kosovo",
  "codePoint": "1F1FD 1F1F0",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-yemen",
  "character": "\ud83c\uddfe\ud83c\uddea",
  "unicodeName": "flag: Yemen",
  "codePoint": "1F1FE 1F1EA",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-mayotte",
  "character": "\ud83c\uddfe\ud83c\uddf9",
  "unicodeName": "flag: Mayotte",
  "codePoint": "1F1FE 1F1F9",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-south-africa",
  "character": "\ud83c\uddff\ud83c\udde6",
  "unicodeName": "flag: South Africa",
  "codePoint": "1F1FF 1F1E6",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-zambia",
  "character": "\ud83c\uddff\ud83c\uddf2",
  "unicodeName": "flag: Zambia",
  "codePoint": "1F1FF 1F1F2",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-zimbabwe",
  "character": "\ud83c\uddff\ud83c\uddfc",
  "unicodeName": "flag: Zimbabwe",
  "codePoint": "1F1FF 1F1FC",
  "group": "flags",
  "subGroup": "country-flag"
}, {
  "slug": "flag-england",
  "character": "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
  "unicodeName": "flag: England",
  "codePoint": "1F3F4 E0067 E0062 E0065 E006E E0067 E007F",
  "group": "flags",
  "subGroup": "subdivision-flag"
}]`;

export default JSON.parse(emojisJson);