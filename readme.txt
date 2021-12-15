Note : Postgresql database is used in this project.

Step 1: 
    run followimg command to create dataabse and table in postgresql.

    create database google;

    create table translate_data(
        id serial primary key,
        source_text varchar,
        source_language varchar,
        target_language varchar,
        result_text varchar
    )

Step 2:-
    - run npm install

Step 3:-
    - go to swagger at bellow link 
        http://localhost:3000/api-docs/

Step 4:-
    -Enter following details.
        {
         "sourceText": " ",
        "sourceLanguage": " ",
        "targetLanguage": " "
        }


Notes :- 
1] Bing translation is used for text translation.
2] Following language are support only.
3] Only used short form of language as given in bellow list.

Language list :-
  'auto-detect': 'Auto-detect',
  af: 'Afrikaans',
  am: 'Amharic',
  ar: 'Arabic',
  as: 'Assamese',
  az: 'Azerbaijani',
  bg: 'Bulgarian',
  bn: 'Bangla',
  bs: 'Bosnian',
  ca: 'Catalan',
  cs: 'Czech',
  cy: 'Welsh',
  da: 'Danish',
  de: 'German',
  el: 'Greek',
  en: 'English',
  es: 'Spanish',
  et: 'Estonian',
  fa: 'Persian',
  fi: 'Finnish',
  fil: 'Filipino',
  fj: 'Fijian',
  fr: 'French',
  'fr-CA': 'French (Canada)',
  ga: 'Irish',
  gu: 'Gujarati',
  he: 'Hebrew',
  hi: 'Hindi',
  hr: 'Croatian',
  ht: 'Haitian Creole',
  hu: 'Hungarian',
  hy: 'Armenian',
  id: 'Indonesian',
  is: 'Icelandic',
  it: 'Italian',
  iu: 'Inuktitut',
  ja: 'Japanese',
  kk: 'Kazakh',
  km: 'Khmer',
  kmr: 'Kurdish (Northern)',
  kn: 'Kannada',
  ko: 'Korean',
  ku: 'Kurdish (Central)',
  lo: 'Lao',
  lt: 'Lithuanian',
  lv: 'Latvian',
  mg: 'Malagasy',
  mi: 'Maori',
  ml: 'Malayalam',
  mr: 'Marathi',
  ms: 'Malay',
  mt: 'Maltese',
  mww: 'Hmong Daw',
  my: 'Myanmar',
  nb: 'Norwegian',
  ne: 'Nepali',
  nl: 'Dutch',
  or: 'Odia',
  otq: 'Querétaro Otomi',
  pa: 'Punjabi',
  pl: 'Polish',
  prs: 'Dari',
  ps: 'Pashto',
  pt: 'Portuguese (Brazil)',
  'pt-PT': 'Portuguese (Portugal)',
  ro: 'Romanian',
  ru: 'Russian',
  sk: 'Slovak',
  sl: 'Slovenian',
  sm: 'Samoan',
  sq: 'Albanian',
  'sr-Cyrl': 'Serbian (Cyrillic)',
  'sr-Latn': 'Serbian (Latin)',
  sv: 'Swedish',
  sw: 'Swahili',
  ta: 'Tamil',
  te: 'Telugu',
  th: 'Thai',
  ti: 'Tigrinya',
  'tlh-Latn': 'Klingon (Latin)',
  'tlh-Piqd': 'Klingon (pIqaD)',
  to: 'Tongan',
  tr: 'Turkish',
  ty: 'Tahitian',
  uk: 'Ukrainian',
  ur: 'Urdu',
  vi: 'Vietnamese',
  yua: 'Yucatec Maya',
  yue: 'Cantonese (Traditional)',
  'zh-Hans': 'Chinese Simplified',
  'zh-Hant': 'Chinese Traditional'

