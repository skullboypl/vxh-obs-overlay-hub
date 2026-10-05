export type Lang = 'pl' | 'en';

export const SITE = 'https://vxh.pl';
export const TOOL_URL = {
  faceit: 'https://faceitbanner.vxh.pl/',
  faceitDocs: 'https://faceitbanner.vxh.pl/docs/',
  lol: 'https://lolbanner.vxh.pl/',
} as const;

export const FACEIT_SOLO = ['Prime', 'Showcase', 'Spotlight', 'Broadcast', 'Rail', 'Focus', 'Orbit', 'Halo', 'Pulse', 'Ticker', 'Slab', 'Gauge', 'Card', 'Reel', 'Ribbon', 'Tower', 'Dials', 'Marquee'];
export const FACEIT_VERSUS = ['Duel', 'Edge', 'Faceoff', 'Clash', 'Tug', 'Rivals', 'Tally', 'Overlay', 'Ladder', 'Matchup', 'Scoreboard', 'Cycle', 'Surge'];
export const LOL_LAYOUTS = ['Prime', 'Broadcast', 'Compact', 'Showcase', 'Split', 'Minimal', 'Tower', 'Scoreboard'];

export const LOL_LAYOUT_META = [
  { id: 'crest', name: 'Prime', size: '820 × 180', pl: 'Pełny profil ranked', en: 'Full ranked profile' },
  { id: 'lane', name: 'Broadcast', size: '980 × 130', pl: 'Pasek transmisyjny', en: 'Broadcast bar' },
  { id: 'compact', name: 'Compact', size: '620 × 140', pl: 'Obok kamerki', en: 'Next to your webcam' },
  { id: 'card', name: 'Showcase', size: '360 × 340', pl: 'Karta gracza', en: 'Player card' },
  { id: 'split', name: 'Split', size: '760 × 200', pl: 'Dwie strony rankingu', en: 'Two sides of the ranking' },
  { id: 'minimal', name: 'Minimal', size: '640 × 120', pl: 'Czysta typografia', en: 'Clean typography' },
  { id: 'tower', name: 'Tower', size: '290 × 420', pl: 'Układ pionowy', en: 'Vertical layout' },
  { id: 'scoreboard', name: 'Scoreboard', size: '820 × 210', pl: 'Wyniki na pierwszym planie', en: 'Results up front' },
] as const;

export type Faq = { q: string; a: string };
export type Section = { h2: string; p?: string[]; ul?: string[]; ol?: string[] };
export type Cta = { label: string; href: string };
export type PageId = 'home' | 'faceit' | 'faceitLayouts' | 'lol' | 'lolLayouts' | 'obsGuide' | 'streamlabs' | 'browserSource' | 'faq' | 'about';
export type Kind = 'home' | 'article' | 'layouts' | 'faq' | 'about';

export type Page = {
  id: PageId;
  kind: Kind;
  title: string;
  description: string;
  h1: string;
  lead: string;
  eyebrow?: string;
  image?: string;
  cta?: Cta[];
  sections?: Section[];
  faq?: Faq[];
  related?: PageId[];
  app?: 'faceit' | 'lol';
  layoutGroups?: { name: string; items: string[]; tool: 'faceit' | 'lol' }[];
};

export const PATHS: Record<PageId, Record<Lang, string>> = {
  home: { pl: '', en: '' },
  faceit: { pl: 'faceit/', en: 'faceit/' },
  faceitLayouts: { pl: 'faceit/uklady/', en: 'faceit/layouts/' },
  lol: { pl: 'lol/', en: 'lol/' },
  lolLayouts: { pl: 'lol/uklady/', en: 'lol/layouts/' },
  obsGuide: { pl: 'obs/jak-dodac-baner-do-obs/', en: 'obs/how-to-add-a-banner-to-obs/' },
  streamlabs: { pl: 'obs/streamlabs/', en: 'obs/streamlabs/' },
  browserSource: { pl: 'obs/browser-source-ustawienia/', en: 'obs/browser-source-settings/' },
  faq: { pl: 'faq/', en: 'faq/' },
  about: { pl: 'o-vxh/', en: 'about/' },
};

export const urlFor = (id: PageId, lang: Lang) => `/${lang === 'en' ? 'en/' : ''}${PATHS[id][lang]}`;

export const UI = {
  pl: {
    htmlLang: 'pl',
    tagline: 'Narzędzia i overlaye, które podkręcają Twój stream.',
    nav: { faceit: 'FACEIT Banner', lol: 'LoL Banner', obs: 'Poradniki OBS', faq: 'FAQ', about: 'O VXH' },
    langSwitch: 'EN',
    langSwitchLabel: 'English version',
    skip: 'Przejdź do treści',
    openTool: 'Otwórz generator',
    free: 'Darmowe',
    noAccount: 'Bez konta',
    noPlugins: 'Bez wtyczek',
    guides: 'Poradniki',
    relatedTitle: 'Zobacz też',
    faqTitle: 'Najczęstsze pytania',
    footerTools: 'Narzędzia',
    footerGuides: 'Poradniki',
    footerLegal: 'VXH to niezależny projekt społeczności. Nie jest powiązany z FACEIT ani z Riot Games i nie jest przez nie wspierany. FACEIT jest znakiem towarowym FACEIT Ltd. League of Legends jest znakiem towarowym Riot Games, Inc.',
    breadcrumbHome: 'VXH',
    layoutsCta: 'Wybierz układ w generatorze',
    solo: 'Układy solo',
    versus: 'Układy VERSUS',
  },
  en: {
    htmlLang: 'en',
    tagline: 'Tools and overlays that level up your stream.',
    nav: { faceit: 'FACEIT Banner', lol: 'LoL Banner', obs: 'OBS guides', faq: 'FAQ', about: 'About VXH' },
    langSwitch: 'PL',
    langSwitchLabel: 'Wersja polska',
    skip: 'Skip to content',
    openTool: 'Open the generator',
    free: 'Free',
    noAccount: 'No account',
    noPlugins: 'No plugins',
    guides: 'Guides',
    relatedTitle: 'See also',
    faqTitle: 'Frequently asked questions',
    footerTools: 'Tools',
    footerGuides: 'Guides',
    footerLegal: 'VXH is an independent community project. It is not affiliated with or endorsed by FACEIT or Riot Games. FACEIT is a trademark of FACEIT Ltd. League of Legends is a trademark of Riot Games, Inc.',
    breadcrumbHome: 'VXH',
    layoutsCta: 'Pick a layout in the generator',
    solo: 'Solo layouts',
    versus: 'VERSUS layouts',
  },
} as const;

const faqObs = {
  pl: [
    { q: 'Jak dodać baner do OBS?', a: 'Dodaj źródło Browser (Przeglądarka), wklej link z generatora w polu URL i ustaw szerokość oraz wysokość takie, jak podaje generator. Nie potrzebujesz żadnych wtyczek.' },
    { q: 'Czy baner jest przezroczysty w OBS?', a: 'Tak. Widżet ma przezroczyste tło, a domyślny własny CSS źródła Browser w OBS go nie psuje. Nic nie musisz zmieniać.' },
    { q: 'Jaki rozmiar źródła Browser ustawić?', a: 'Taki, jaki pokazuje generator przy linku. Przy trybie AUTO w FACEIT Banner Studio baner dopasuje się do rozmiaru okna źródła.' },
  ],
  en: [
    { q: 'How do I add a banner to OBS?', a: 'Add a Browser source, paste the link from the generator into the URL field and set the width and height shown by the generator. No plugins are needed.' },
    { q: 'Is the banner transparent in OBS?', a: 'Yes. The widget has a transparent background and the default custom CSS of the OBS Browser source does not break it. You do not need to change anything.' },
    { q: 'What size should the Browser source be?', a: 'The size the generator shows next to the link. In AUTO mode in FACEIT Banner Studio the banner adapts to the size of the source window.' },
  ],
};

export const PAGES: Record<Lang, Record<PageId, Page>> = {
  pl: {
    home: {
      id: 'home',
      kind: 'home',
      title: 'VXH – Visual eXtras Hub | Overlaye i banery do OBS dla streamerów',
      description: 'VXH – Visual eXtras Hub: darmowe generatory banerów i overlayów do OBS i Streamlabs. Baner FACEIT z ELO i statystykami CS2 oraz baner rangi League of Legends.',
      h1: 'Visual eXtras Hub dla streamerów',
      lead: 'Darmowe generatory banerów i overlayów do OBS Studio i Streamlabs. Wpisujesz nick, wybierasz wygląd, kopiujesz link i wklejasz go jako źródło Browser.',
      eyebrow: 'VXH · Visual eXtras Hub',
      image: '/img/hero-bg.png',
      cta: [{ label: 'Baner FACEIT do OBS', href: '/faceit/' }, { label: 'Baner rangi LoL do OBS', href: '/lol/' }],
      sections: [
        {
          h2: 'Jak to działa',
          ol: [
            'Wybierz narzędzie: baner FACEIT albo baner rangi LoL.',
            'Wpisz nick (FACEIT) lub Riot ID (LoL) i dopasuj wygląd w podglądzie na żywo.',
            'Skopiuj link i wklej go w OBS albo Streamlabs jako źródło Browser.',
          ],
        },
        {
          h2: 'Dlaczego VXH',
          ul: [
            'Działa w przeglądarce, bez instalowania i bez wtyczek.',
            'Dane pobierane na żywo, więc ELO, ranga i statystyki aktualizują się same.',
            'Dziesiątki układów, kolory, czcionki i animacje do dopasowania do Twojej sceny.',
            'Po polsku i po angielsku, z dokumentacją i poradnikami krok po kroku.',
          ],
        },
      ],
      faq: faqObs.pl,
      related: ['obsGuide', 'streamlabs', 'browserSource'],
    },
    faceit: {
      id: 'faceit',
      kind: 'article',
      app: 'faceit',
      title: 'Baner FACEIT do OBS: ELO, level i statystyki CS2 na streamie',
      description: 'Darmowy generator banerów FACEIT do OBS i Streamlabs. 18 układów solo, 13 układów VERSUS, ELO na żywo, level, statystyki CS2 i animacje. Bez konta i wtyczek.',
      h1: 'Baner FACEIT do OBS',
      lead: 'FACEIT Banner Studio pokazuje na Twoim streamie level, ELO, zmianę ELO, wygrane, porażki i statystyki z ostatnich meczów CS2.',
      eyebrow: 'FACEIT Banner Studio',
      image: '/img/faceit-art.png',
      cta: [{ label: 'Otwórz generator FACEIT', href: TOOL_URL.faceit }, { label: 'Zobacz układy', href: '/faceit/uklady/' }],
      sections: [
        {
          h2: 'Co pokazuje baner FACEIT',
          ul: [
            'Level, ELO i zmianę ELO w bieżącej sesji.',
            'Wygrane i porażki oraz cztery wybrane statystyki z ostatnich meczów CS2.',
            'Ranking regionu i kraju, ikonę Challenger i znaczek weryfikacji.',
            'Pasek postępu ELO do następnego levelu.',
          ],
        },
        {
          h2: 'Układy solo i tryb VERSUS',
          p: [
            'Wygląd FACEIT 2026 ma 18 układów solo, od klasycznego Prime po animowane Reel, Ticker i Marquee. Tryb VERSUS zestawia Ciebie z rywalem w 13 układach, między innymi Duel, Tug i Scoreboard.',
          ],
        },
        {
          h2: 'Rozmiar banera: AUTO, Zalecane, Ręcznie',
          p: ['AUTO dopasowuje baner do okna źródła w OBS. Zalecane daje rozmiar projektowy, a Ręcznie pozwala ustawić własne wartości w granicach limitów danego układu.'],
        },
        {
          h2: 'Jak dodać baner FACEIT do OBS',
          ol: [
            'Otwórz generator i wpisz swój nick FACEIT.',
            'Wybierz układ, kolor akcentu i statystyki.',
            'Skopiuj link i dodaj w OBS źródło Browser z tym adresem URL.',
          ],
        },
      ],
      faq: [
        { q: 'Czy baner FACEIT jest darmowy?', a: 'Tak. Generator jest darmowy, nie wymaga konta ani wtyczek.' },
        { q: 'Czy muszę logować się przez FACEIT?', a: 'Nie. Wystarczy wpisać nick. Widżet pobiera publiczne dane gracza.' },
        { q: 'Co się stanie po restarcie OBS?', a: 'Sesja jest zapisywana w danych przeglądarki OBS i po restarcie wraca przez 2 godziny. Potem liczy od zera.' },
        ...faqObs.pl.slice(0, 1),
      ],
      related: ['faceitLayouts', 'obsGuide', 'browserSource'],
    },
    faceitLayouts: {
      id: 'faceitLayouts',
      kind: 'layouts',
      title: 'Układy banera FACEIT: 18 solo i 13 VERSUS do OBS',
      description: 'Przegląd wszystkich układów banera FACEIT Banner Studio: 18 układów solo i 13 układów VERSUS z ELO, levelem i statystykami CS2.',
      h1: 'Układy banera FACEIT',
      lead: 'Wszystkie układy dostępne w FACEIT Banner Studio. Wybierz jeden w generatorze i podejrzyj go na żywo ze swoimi danymi.',
      eyebrow: 'FACEIT Banner Studio',
      cta: [{ label: 'Wybierz układ w generatorze', href: TOOL_URL.faceit }],
      layoutGroups: [
        { name: 'Układy solo (FACEIT 2026)', items: FACEIT_SOLO, tool: 'faceit' },
        { name: 'Układy VERSUS', items: FACEIT_VERSUS, tool: 'faceit' },
      ],
      related: ['faceit', 'obsGuide'],
    },
    lol: {
      id: 'lol',
      kind: 'article',
      app: 'lol',
      title: 'Baner rangi LoL do OBS: Solo/Duo, Flex i LP na streamie',
      description: 'Darmowy generator banerów rangi League of Legends do OBS i Streamlabs. Ranga, LP, winrate i profil z Riot ID. 8 układów i pełna personalizacja.',
      h1: 'Baner rangi LoL do OBS',
      lead: 'LoL Banner Studio pokazuje na streamie rangę Solo/Duo i Flex, punkty ligi, winrate i profil gracza na podstawie Riot ID.',
      eyebrow: 'LoL Banner Studio',
      image: '/img/lol-art.png',
      cta: [{ label: 'Otwórz generator LoL', href: TOOL_URL.lol }, { label: 'Zobacz układy', href: '/lol/uklady/' }],
      sections: [
        {
          h2: 'Co pokazuje baner LoL',
          ul: [
            'Profil: ikonę przywoływacza i poziom konta.',
            'Rangę Solo/Duo i Flex: dywizję, LP i pasek postępu LP.',
            'Winrate, wygrane, porażki i łączną liczbę gier.',
          ],
        },
        {
          h2: 'Bezpieczne dane z oficjalnego API Riot',
          p: ['Dane pochodzą z oficjalnego Riot API przez serwerowy proxy. Klucz API nigdy nie trafia do przeglądarki ani do linku widżetu.'],
        },
        {
          h2: 'Personalizacja',
          p: ['8 układów, motywy w stylu Riot, własne kolory, trzy czcionki, przezroczystość, zaokrąglenie, skala, poświata i animacje. Każdy element profilu i rangi możesz włączyć lub ukryć.'],
        },
        {
          h2: 'Jak dodać baner LoL do OBS',
          ol: [
            'Wpisz Riot ID i wybierz serwer.',
            'Dopasuj układ i kolory w podglądzie.',
            'Skopiuj link i dodaj go w OBS jako źródło Browser.',
          ],
        },
      ],
      faq: [
        { q: 'Czy baner LoL jest darmowy?', a: 'Tak. Generator jest darmowy i nie wymaga konta.' },
        { q: 'Jakich danych potrzebuje baner?', a: 'Wystarczy Riot ID (nazwa i tag) oraz serwer. Dane rangi są publiczne.' },
        { q: 'Czy pokazuje Solo/Duo i Flex?', a: 'Tak, obie kolejki rankingowe.' },
      ],
      related: ['lolLayouts', 'obsGuide', 'browserSource'],
    },
    lolLayouts: {
      id: 'lolLayouts',
      kind: 'layouts',
      title: 'Układy banera LoL: 8 wyglądów rangi do OBS',
      description: 'Przegląd 8 układów LoL Banner Studio: Prime, Broadcast, Compact, Showcase, Split, Minimal, Tower i Scoreboard.',
      h1: 'Układy banera LoL',
      lead: 'Osiem układów banera rangi League of Legends. Wybierz jeden w generatorze i podejrzyj go ze swoim Riot ID.',
      eyebrow: 'LoL Banner Studio',
      cta: [{ label: 'Wybierz układ w generatorze', href: TOOL_URL.lol }],
      layoutGroups: [{ name: 'Układy LoL', items: LOL_LAYOUTS, tool: 'lol' }],
      related: ['lol', 'obsGuide'],
    },
    obsGuide: {
      id: 'obsGuide',
      kind: 'article',
      title: 'Jak dodać baner do OBS (źródło Browser) krok po kroku',
      description: 'Jak dodać baner FACEIT lub LoL do OBS Studio: źródło Browser, link z generatora, rozmiar i przezroczystość. Prosty poradnik krok po kroku.',
      h1: 'Jak dodać baner do OBS',
      lead: 'Baner z VXH działa jako źródło Browser, więc nie potrzebujesz wtyczek. Cała konfiguracja zajmuje chwilę.',
      eyebrow: 'Poradnik OBS',
      cta: [{ label: 'Generator FACEIT', href: TOOL_URL.faceit }, { label: 'Generator LoL', href: TOOL_URL.lol }],
      sections: [
        {
          h2: 'Krok po kroku',
          ol: [
            'Wejdź do generatora (FACEIT lub LoL), wpisz nick albo Riot ID i wybierz wygląd.',
            'Skopiuj link z generatora.',
            'W OBS w panelu Źródła kliknij plus i wybierz Browser (Przeglądarka).',
            'Wklej link w polu URL.',
            'Ustaw szerokość i wysokość takie, jak podaje generator, i zatwierdź.',
            'Przeciągnij baner w wybrane miejsce sceny.',
          ],
        },
        {
          h2: 'Wskazówki',
          ul: [
            'Przezroczystość działa od razu, więc nie zmieniaj domyślnego własnego CSS.',
            'Jeśli baner nie odświeża się po zmianie ustawień, kliknij Odśwież pamięć podręczną bieżącej strony we właściwościach źródła.',
            'Więcej o rozmiarze i FPS znajdziesz w poradniku o ustawieniach Browser Source.',
          ],
        },
      ],
      faq: faqObs.pl,
      related: ['streamlabs', 'browserSource', 'faceit', 'lol'],
    },
    streamlabs: {
      id: 'streamlabs',
      kind: 'article',
      title: 'Baner FACEIT i LoL w Streamlabs: źródło Browser krok po kroku',
      description: 'Jak dodać baner FACEIT lub LoL do Streamlabs Desktop jako Browser Source. Link z generatora, rozmiar i przezroczystość.',
      h1: 'Baner w Streamlabs',
      lead: 'W Streamlabs baner z VXH dodajesz tak samo jak w OBS, jako źródło Browser Source.',
      eyebrow: 'Poradnik Streamlabs',
      cta: [{ label: 'Generator FACEIT', href: TOOL_URL.faceit }, { label: 'Generator LoL', href: TOOL_URL.lol }],
      sections: [
        {
          h2: 'Krok po kroku',
          ol: [
            'Skopiuj link z generatora FACEIT lub LoL.',
            'W Streamlabs Desktop w sekcji Źródła dodaj nowe źródło i wybierz Browser Source.',
            'Wklej link w polu URL.',
            'Ustaw szerokość i wysokość z generatora.',
            'Zatwierdź i ustaw baner na scenie.',
          ],
        },
      ],
      faq: faqObs.pl.slice(0, 2),
      related: ['obsGuide', 'browserSource'],
    },
    browserSource: {
      id: 'browserSource',
      kind: 'article',
      title: 'Ustawienia Browser Source w OBS: rozmiar, FPS i przezroczystość',
      description: 'Jakie ustawienia Browser Source w OBS wybrać dla banera: szerokość, wysokość, FPS i przezroczystość tła.',
      h1: 'Ustawienia Browser Source dla banera',
      lead: 'Kilka ustawień źródła Browser decyduje o tym, jak ostry i płynny będzie baner na streamie.',
      eyebrow: 'Poradnik OBS',
      cta: [{ label: 'Generator FACEIT', href: TOOL_URL.faceit }],
      sections: [
        {
          h2: 'Rozmiar',
          p: ['Ustaw szerokość i wysokość taką, jaką podaje generator. W FACEIT Banner Studio tryb AUTO dopasuje baner do okna źródła, a Zalecane daje rozmiar projektowy układu.'],
        },
        {
          h2: 'FPS',
          p: ['Dla statycznych układów wystarczy domyślne 30 FPS. Dla animowanych układów (na przykład Ticker lub Reel) ustaw 60 FPS, jeśli chcesz płynniejszy ruch.'],
        },
        {
          h2: 'Przezroczystość',
          p: ['Widżet ma przezroczyste tło. Zostaw domyślny własny CSS źródła Browser w OBS i nie dodawaj własnego koloru tła.'],
        },
      ],
      faq: faqObs.pl,
      related: ['obsGuide', 'streamlabs'],
    },
    faq: {
      id: 'faq',
      kind: 'faq',
      title: 'FAQ: banery FACEIT i LoL do OBS i Streamlabs',
      description: 'Najczęstsze pytania o generatory banerów VXH: koszt, konto, OBS, Streamlabs, rozmiar, przezroczystość i dane.',
      h1: 'Najczęstsze pytania',
      lead: 'Odpowiedzi na pytania o generatory banerów FACEIT i LoL oraz o ich użycie w OBS i Streamlabs.',
      faq: [
        { q: 'Czy narzędzia VXH są darmowe?', a: 'Tak. Generatory banerów są darmowe i nie wymagają konta ani wtyczek.' },
        { q: 'Czy VXH jest powiązane z FACEIT lub Riot Games?', a: 'Nie. To niezależny projekt społeczności i nie jest wspierany przez FACEIT ani Riot Games.' },
        ...faqObs.pl,
        { q: 'Czy to działa w Streamlabs?', a: 'Tak, jako źródło Browser Source. Zobacz poradnik Streamlabs.' },
        { q: 'Skąd baner bierze dane?', a: 'Baner FACEIT pobiera publiczne dane gracza FACEIT, a baner LoL korzysta z oficjalnego API Riot przez serwerowy proxy.' },
      ],
      related: ['obsGuide', 'streamlabs'],
    },
    about: {
      id: 'about',
      kind: 'about',
      title: 'O VXH – Visual eXtras Hub',
      description: 'VXH – Visual eXtras Hub to zestaw darmowych narzędzi i overlayów dla streamerów, tworzony przez autora FACEIT Banner Studio i LoL Banner Studio.',
      h1: 'O VXH',
      lead: 'VXH to skrót od Visual eXtras Hub: miejsce na wizualne dodatki do streamu.',
      sections: [
        {
          h2: 'Czym jest VXH',
          p: ['VXH zbiera narzędzia, które pomagają streamerom pokazać widzom więcej: statystyki, rangę, ELO i wygląd sceny. Na start są dwa generatory: FACEIT Banner Studio i LoL Banner Studio.'],
        },
        {
          h2: 'Zasady',
          ul: ['Darmowe i bez konta.', 'Bez wtyczek: wszystko działa jako źródło Browser.', 'Niezależny projekt społeczności, niepowiązany z FACEIT ani Riot Games.'],
        },
        {
          h2: 'Kod i kontakt',
          p: ['FACEIT Banner Studio jest projektem open source na licencji MIT, rozwiniętym na bazie faceit-stats-widget autorstwa mxgic1337.'],
        },
      ],
      related: ['faceit', 'lol'],
    },
  },
  en: {
    home: {
      id: 'home',
      kind: 'home',
      title: 'VXH – Visual eXtras Hub | OBS banners and overlays for streamers',
      description: 'VXH – Visual eXtras Hub: free banner and overlay generators for OBS and Streamlabs. FACEIT banner with ELO and CS2 stats and a League of Legends rank banner.',
      h1: 'Visual eXtras Hub for streamers',
      lead: 'Free banner and overlay generators for OBS Studio and Streamlabs. Enter a name, pick a look, copy the link and paste it as a Browser source.',
      eyebrow: 'VXH · Visual eXtras Hub',
      image: '/img/hero-bg.png',
      cta: [{ label: 'FACEIT banner for OBS', href: '/en/faceit/' }, { label: 'LoL rank banner for OBS', href: '/en/lol/' }],
      sections: [
        {
          h2: 'How it works',
          ol: [
            'Pick a tool: the FACEIT banner or the LoL rank banner.',
            'Enter your nickname (FACEIT) or Riot ID (LoL) and tweak the look in the live preview.',
            'Copy the link and paste it into OBS or Streamlabs as a Browser source.',
          ],
        },
        {
          h2: 'Why VXH',
          ul: [
            'Runs in the browser with no install and no plugins.',
            'Live data, so ELO, rank and stats update on their own.',
            'Dozens of layouts, colours, fonts and animations to match your scene.',
            'Available in English and Polish, with step-by-step docs and guides.',
          ],
        },
      ],
      faq: faqObs.en,
      related: ['obsGuide', 'streamlabs', 'browserSource'],
    },
    faceit: {
      id: 'faceit',
      kind: 'article',
      app: 'faceit',
      title: 'FACEIT banner for OBS: ELO, level and CS2 stats on stream',
      description: 'Free FACEIT banner generator for OBS and Streamlabs. 18 solo layouts, 13 VERSUS layouts, live ELO, level, CS2 stats and animations. No account or plugins.',
      h1: 'FACEIT banner for OBS',
      lead: 'FACEIT Banner Studio shows your level, ELO, ELO change, wins, losses and recent CS2 match stats on stream.',
      eyebrow: 'FACEIT Banner Studio',
      image: '/img/faceit-art.png',
      cta: [{ label: 'Open the FACEIT generator', href: TOOL_URL.faceit }, { label: 'See the layouts', href: '/en/faceit/layouts/' }],
      sections: [
        {
          h2: 'What the FACEIT banner shows',
          ul: [
            'Level, ELO and the ELO change in the current session.',
            'Wins, losses and four chosen stats from recent CS2 matches.',
            'Region and country ranking, the Challenger icon and the verified badge.',
            'An ELO progress bar to the next level.',
          ],
        },
        {
          h2: 'Solo layouts and VERSUS mode',
          p: ['The FACEIT 2026 look has 18 solo layouts, from the classic Prime to the animated Reel, Ticker and Marquee. VERSUS mode puts you against a rival in 13 layouts, including Duel, Tug and Scoreboard.'],
        },
        {
          h2: 'Banner size: AUTO, Recommended, Manual',
          p: ['AUTO fits the banner to the OBS source window. Recommended gives the design size, and Manual lets you set your own values within each layout’s limits.'],
        },
        {
          h2: 'How to add the FACEIT banner to OBS',
          ol: [
            'Open the generator and enter your FACEIT nickname.',
            'Pick a layout, an accent colour and your stats.',
            'Copy the link and add a Browser source in OBS with that URL.',
          ],
        },
      ],
      faq: [
        { q: 'Is the FACEIT banner free?', a: 'Yes. The generator is free and needs no account or plugins.' },
        { q: 'Do I have to log in with FACEIT?', a: 'No. Just enter your nickname. The widget reads public player data.' },
        { q: 'What happens after an OBS restart?', a: 'The session is stored in OBS browser data and comes back for 2 hours after a restart. After that it counts from zero.' },
        ...faqObs.en.slice(0, 1),
      ],
      related: ['faceitLayouts', 'obsGuide', 'browserSource'],
    },
    faceitLayouts: {
      id: 'faceitLayouts',
      kind: 'layouts',
      title: 'FACEIT banner layouts: 18 solo and 13 VERSUS for OBS',
      description: 'All FACEIT Banner Studio layouts: 18 solo and 13 VERSUS layouts with ELO, level and CS2 stats.',
      h1: 'FACEIT banner layouts',
      lead: 'Every layout in FACEIT Banner Studio. Pick one in the generator and preview it live with your data.',
      eyebrow: 'FACEIT Banner Studio',
      cta: [{ label: 'Pick a layout in the generator', href: TOOL_URL.faceit }],
      layoutGroups: [
        { name: 'Solo layouts (FACEIT 2026)', items: FACEIT_SOLO, tool: 'faceit' },
        { name: 'VERSUS layouts', items: FACEIT_VERSUS, tool: 'faceit' },
      ],
      related: ['faceit', 'obsGuide'],
    },
    lol: {
      id: 'lol',
      kind: 'article',
      app: 'lol',
      title: 'LoL rank banner for OBS: Solo/Duo, Flex and LP on stream',
      description: 'Free League of Legends rank banner generator for OBS and Streamlabs. Rank, LP, win rate and profile from your Riot ID. 8 layouts and full customisation.',
      h1: 'LoL rank banner for OBS',
      lead: 'LoL Banner Studio shows your Solo/Duo and Flex rank, league points, win rate and profile on stream, based on your Riot ID.',
      eyebrow: 'LoL Banner Studio',
      image: '/img/lol-art.png',
      cta: [{ label: 'Open the LoL generator', href: TOOL_URL.lol }, { label: 'See the layouts', href: '/en/lol/layouts/' }],
      sections: [
        {
          h2: 'What the LoL banner shows',
          ul: [
            'Profile: summoner icon and account level.',
            'Solo/Duo and Flex rank: division, LP and an LP progress bar.',
            'Win rate, wins, losses and total games.',
          ],
        },
        {
          h2: 'Safe data from the official Riot API',
          p: ['Data comes from the official Riot API through a server-side proxy. The API key never reaches the browser or the widget link.'],
        },
        {
          h2: 'Customisation',
          p: ['8 layouts, Riot-inspired themes, custom colours, three fonts, opacity, corner radius, scale, glow and animations. You can toggle each profile and rank element.'],
        },
        {
          h2: 'How to add the LoL banner to OBS',
          ol: [
            'Enter your Riot ID and pick a server.',
            'Tune the layout and colours in the preview.',
            'Copy the link and add it in OBS as a Browser source.',
          ],
        },
      ],
      faq: [
        { q: 'Is the LoL banner free?', a: 'Yes. The generator is free and needs no account.' },
        { q: 'What data does the banner need?', a: 'Just your Riot ID (name and tag) and server. Rank data is public.' },
        { q: 'Does it show Solo/Duo and Flex?', a: 'Yes, both ranked queues.' },
      ],
      related: ['lolLayouts', 'obsGuide', 'browserSource'],
    },
    lolLayouts: {
      id: 'lolLayouts',
      kind: 'layouts',
      title: 'LoL banner layouts: 8 rank looks for OBS',
      description: 'The 8 LoL Banner Studio layouts: Prime, Broadcast, Compact, Showcase, Split, Minimal, Tower and Scoreboard.',
      h1: 'LoL banner layouts',
      lead: 'Eight layouts for the League of Legends rank banner. Pick one in the generator and preview it with your Riot ID.',
      eyebrow: 'LoL Banner Studio',
      cta: [{ label: 'Pick a layout in the generator', href: TOOL_URL.lol }],
      layoutGroups: [{ name: 'LoL layouts', items: LOL_LAYOUTS, tool: 'lol' }],
      related: ['lol', 'obsGuide'],
    },
    obsGuide: {
      id: 'obsGuide',
      kind: 'article',
      title: 'How to add a banner to OBS (Browser source) step by step',
      description: 'How to add a FACEIT or LoL banner to OBS Studio: Browser source, generator link, size and transparency. A simple step-by-step guide.',
      h1: 'How to add a banner to OBS',
      lead: 'A VXH banner works as a Browser source, so you need no plugins. The whole setup takes a minute.',
      eyebrow: 'OBS guide',
      cta: [{ label: 'FACEIT generator', href: TOOL_URL.faceit }, { label: 'LoL generator', href: TOOL_URL.lol }],
      sections: [
        {
          h2: 'Step by step',
          ol: [
            'Open a generator (FACEIT or LoL), enter your nickname or Riot ID and pick a look.',
            'Copy the link from the generator.',
            'In OBS, click the plus in the Sources panel and choose Browser.',
            'Paste the link into the URL field.',
            'Set the width and height shown by the generator and confirm.',
            'Drag the banner to where you want it on the scene.',
          ],
        },
        {
          h2: 'Tips',
          ul: [
            'Transparency works out of the box, so keep the default custom CSS.',
            'If the banner does not refresh after a settings change, click Refresh cache of current page in the source properties.',
            'For size and FPS, see the Browser source settings guide.',
          ],
        },
      ],
      faq: faqObs.en,
      related: ['streamlabs', 'browserSource', 'faceit', 'lol'],
    },
    streamlabs: {
      id: 'streamlabs',
      kind: 'article',
      title: 'FACEIT and LoL banner in Streamlabs: Browser source step by step',
      description: 'How to add a FACEIT or LoL banner to Streamlabs Desktop as a Browser Source. Generator link, size and transparency.',
      h1: 'Banner in Streamlabs',
      lead: 'In Streamlabs you add a VXH banner the same way as in OBS, as a Browser Source.',
      eyebrow: 'Streamlabs guide',
      cta: [{ label: 'FACEIT generator', href: TOOL_URL.faceit }, { label: 'LoL generator', href: TOOL_URL.lol }],
      sections: [
        {
          h2: 'Step by step',
          ol: [
            'Copy the link from the FACEIT or LoL generator.',
            'In Streamlabs Desktop, add a new source in the Sources section and choose Browser Source.',
            'Paste the link into the URL field.',
            'Set the width and height from the generator.',
            'Confirm and place the banner on your scene.',
          ],
        },
      ],
      faq: faqObs.en.slice(0, 2),
      related: ['obsGuide', 'browserSource'],
    },
    browserSource: {
      id: 'browserSource',
      kind: 'article',
      title: 'OBS Browser source settings: size, FPS and transparency',
      description: 'Which OBS Browser source settings to use for a banner: width, height, FPS and background transparency.',
      h1: 'Browser source settings for a banner',
      lead: 'A few Browser source settings decide how sharp and smooth the banner looks on stream.',
      eyebrow: 'OBS guide',
      cta: [{ label: 'FACEIT generator', href: TOOL_URL.faceit }],
      sections: [
        {
          h2: 'Size',
          p: ['Set the width and height the generator gives you. In FACEIT Banner Studio, AUTO fits the banner to the source window and Recommended gives the layout’s design size.'],
        },
        {
          h2: 'FPS',
          p: ['The default 30 FPS is enough for static layouts. For animated layouts (for example Ticker or Reel) set 60 FPS for smoother motion.'],
        },
        {
          h2: 'Transparency',
          p: ['The widget has a transparent background. Keep the default custom CSS of the OBS Browser source and do not add a background colour.'],
        },
      ],
      faq: faqObs.en,
      related: ['obsGuide', 'streamlabs'],
    },
    faq: {
      id: 'faq',
      kind: 'faq',
      title: 'FAQ: FACEIT and LoL banners for OBS and Streamlabs',
      description: 'Frequently asked questions about VXH banner generators: cost, account, OBS, Streamlabs, size, transparency and data.',
      h1: 'Frequently asked questions',
      lead: 'Answers about the FACEIT and LoL banner generators and using them in OBS and Streamlabs.',
      faq: [
        { q: 'Are the VXH tools free?', a: 'Yes. The banner generators are free and need no account or plugins.' },
        { q: 'Is VXH affiliated with FACEIT or Riot Games?', a: 'No. It is an independent community project and is not endorsed by FACEIT or Riot Games.' },
        ...faqObs.en,
        { q: 'Does it work in Streamlabs?', a: 'Yes, as a Browser Source. See the Streamlabs guide.' },
        { q: 'Where does the banner get its data?', a: 'The FACEIT banner reads public FACEIT player data, and the LoL banner uses the official Riot API through a server-side proxy.' },
      ],
      related: ['obsGuide', 'streamlabs'],
    },
    about: {
      id: 'about',
      kind: 'about',
      title: 'About VXH – Visual eXtras Hub',
      description: 'VXH – Visual eXtras Hub is a set of free tools and overlays for streamers, made by the author of FACEIT Banner Studio and LoL Banner Studio.',
      h1: 'About VXH',
      lead: 'VXH stands for Visual eXtras Hub: a home for visual add-ons for your stream.',
      sections: [
        {
          h2: 'What VXH is',
          p: ['VXH collects tools that help streamers show viewers more: stats, rank, ELO and scene looks. There are two generators to start with: FACEIT Banner Studio and LoL Banner Studio.'],
        },
        {
          h2: 'Principles',
          ul: ['Free and no account.', 'No plugins: everything runs as a Browser source.', 'An independent community project, not affiliated with FACEIT or Riot Games.'],
        },
        {
          h2: 'Code',
          p: ['FACEIT Banner Studio is an open-source MIT project, built on faceit-stats-widget by mxgic1337.'],
        },
      ],
      related: ['faceit', 'lol'],
    },
  },
};
