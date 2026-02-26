# 🏛️ Bürgerbrief – Vorlage für neue Kommunen

Diese Vorlage erklärt, welche Dateien und Stellen angepasst werden müssen, um eine neue Instanz der Bürgerbrief-Seite für eine andere Kommune / einen anderen Ansprechpartner zu erstellen.

---

## Schnellstart

1. **Repo klonen / kopieren**
2. **Bilder austauschen** (siehe unten)
3. **7 Dateien anpassen** (siehe Checkliste)
4. **GitHub Repo erstellen**, pushen, GitHub Pages auf "GitHub Actions" stellen
5. Fertig! 🚀

---

## 📁 Projektstruktur

```
├── index.html                  ← Seitentitel
├── vite.config.ts              ← base-Pfad (= GitHub Repo-Name)
├── public/
│   ├── hero-bg.png             ← Hero-Hintergrundbild
│   └── alexander-rheindorf.jpg ← Foto des Ansprechpartners
├── src/
│   ├── App.tsx                 ← Footer-Text
│   ├── index.css               ← Farben (Magenta + Gelb)
│   ├── components/
│   │   ├── Hero.tsx            ← Überschrift, Beschreibung, Name
│   │   ├── Contact.tsx         ← Name, Bild, Adresse, E-Mail, Telefon
│   │   ├── Form.tsx            ← Kommunen-Dropdown
│   │   └── LegalModals.tsx     ← Impressum & Datenschutz (Name, Adresse, E-Mail, etc.)
│   └── services/
│       └── gemini.ts           ← KI-Prompt (Region + Name)
└── .github/workflows/
    └── deploy.yml              ← Deployment (normalerweise unverändert)
```

---

## ✏️ Checkliste: Was muss angepasst werden?

### 1. `index.html` – Seitentitel
```html
<title>Bürgerbrief ___KOMMUNE___</title>
```

### 2. `vite.config.ts` – GitHub Pages Base-Pfad
```ts
base: '/___REPO_NAME___/',
```
> Muss dem GitHub-Repository-Namen entsprechen, z.B. `/Buergerbrief-Bruehl/`

### 3. `public/` – Bilder austauschen

| Datei | Beschreibung |
|-------|-------------|
| `hero-bg.png` | Hintergrundbild der Hero-Section (Landschaft o.ä.) |
| `alexander-rheindorf.jpg` | Foto des Ansprechpartners (Hochformat, mind. 800px breit) |

> **Tipp:** Bilddateinamen können geändert werden, dann müssen aber auch die `src`-Pfade in `Hero.tsx` und `Contact.tsx` angepasst werden.

### 4. `src/components/Hero.tsx` – Überschrift & Beschreibung

```diff
  <h1>
    Ihre Stimme im
-   <span>Rhein-Erft-Kreis</span>
+   <span>___KOMMUNE___</span>
  </h1>

- Schreiben Sie Ihren Bürgerbrief direkt an Alexander Rheindorf...
+ Schreiben Sie Ihren Bürgerbrief direkt an ___NAME___...

- Über Alexander Rheindorf
+ Über ___NAME___
```

**Zeilen:** 24-29, 44

### 5. `src/components/Contact.tsx` – Ansprechpartner-Daten

```diff
- src={`${import.meta.env.BASE_URL}alexander-rheindorf.jpg`}
+ src={`${import.meta.env.BASE_URL}___BILDDATEI___`}

- alt="Alexander Rheindorf"
+ alt="___NAME___"

- <h3>Alexander Rheindorf</h3>
+ <h3>___NAME___</h3>

- Als engagierter Kommunalpolitiker im Rhein-Erft-Kreis...
+ Als engagierter Kommunalpolitiker in ___KOMMUNE___...

- <h4>Büro Rhein-Erft-Kreis</h4>
- <p>Willy-Brandt-Platz 1<br/>50126 Bergheim</p>
+ <h4>Büro ___KOMMUNE___</h4>
+ <p>___STRASSE___<br/>___PLZ_ORT___</p>

- kontakt@alexander-rheindorf.de
+ ___EMAIL___

- +49 (0) 2271 83-0
+ ___TELEFON___
```

**Zeilen:** 20-21, 41, 44, 55-56, 68, 80

### 6. `src/components/Form.tsx` – Kommunen-Dropdown

```diff
  const KOMMUNEN = [
-   "Bedburg", "Bergheim", "Brühl", ...
+   "___KOMMUNE_1___", "___KOMMUNE_2___", ...
  ];
```

**Zeilen:** 6-17

### 7. `src/components/LegalModals.tsx` – Impressum & Datenschutz

```diff
- Alexander Rheindorf
+ ___NAME___

- Willy-Brandt-Platz 1
- 50126 Bergheim
+ ___STRASSE___
+ ___PLZ_ORT___

- kontakt@alexander-rheindorf.de
+ ___EMAIL___

- +49 (0) 2271 83-0
+ ___TELEFON___
```

> **Hinweis:** Suchen Sie in der Datei nach "Alexander Rheindorf", "Willy-Brandt-Platz 1", "50126 Bergheim", der E-Mail-Adresse und der Telefonnummer und ersetzen Sie diese durch die neuen Daten. Diese kommen jeweils im Impressum (oben in der Datei) und nochmal im Datenschutz (unten in der Datei) vor.

**Zeilen:** 40-42, 46-47, 51-53, 93-96, 151-152

### 8. `src/services/gemini.ts` – KI-Prompt (optional)

```diff
- ...an den Kommunalpolitiker Alexander Rheindorf.
+ ...an den Kommunalpolitiker ___NAME___.

- in ${kommune} (Rhein-Erft-Kreis)
+ in ${kommune} (___REGION___)
```

**Zeilen:** 24, 30

### 9. `src/App.tsx` – Footer

```diff
- © 2026 Bürgerbrief Rhein-Erft-Kreis.
+ © 2026 Bürgerbrief ___KOMMUNE___.
```

**Zeile:** 21

---

## 🎨 Design-System (CSS)

Die Farben sind in `src/index.css` definiert:

```css
@theme {
  --color-rek-gelb: #ffed00;     /* Gelb – Akzente, Buttons, Highlights */
  --color-rek-magenta: #e5007d;  /* Magenta – Primärfarbe, Links, CTA */
}
```

Diese Farben werden überall via Tailwind-Klassen verwendet:
- `bg-rek-magenta` / `text-rek-magenta` – Primärfarbe
- `bg-rek-gelb` / `text-rek-gelb` – Sekundärfarbe
- Hero-Gradient: `from-[#e5007d]/80 to-[#ffed00]/60` in `Hero.tsx` Zeile 14

> Um die Farben zu ändern, reicht es `index.css` + den Hero-Gradient anzupassen.

---

## 🚀 Deployment

1. Neues GitHub-Repo erstellen
2. `vite.config.ts` → `base` auf den Repo-Namen setzen
3. Pushen
4. GitHub → Settings → Pages → Source: **"GitHub Actions"**
5. Seite ist live unter `https://___USER___.github.io/___REPO___/`

Die `.github/workflows/deploy.yml` muss **nicht** angepasst werden.

---

## 📋 Beispiel: Neue Seite für "Brühl"

| Feld | Wert |
|------|------|
| Kommune | Brühl |
| Ansprechpartner | Max Mustermann |
| Repo-Name | `Buergerbrief-Bruehl` |
| Bild | `max-mustermann.jpg` |
| Adresse | Uhlstr. 3, 50321 Brühl |
| E-Mail | max@fdp-bruehl.de |
| Telefon | +49 (0) 2232 12345 |
| Kommunen im Dropdown | nur "Brühl" |
