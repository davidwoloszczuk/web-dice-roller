# Web Dice Roller

A small HTML, CSS, and JavaScript application that rolls five six-sided dice for Yahtzee. It handles dice rolling only, not scoring, holding dice, or full game rules.

## Author and credits

```java
/**
 * @author David Woloszczuk-Mrugala
 */
```

- Built for the Lewis University Web Dice Roller assignment.
- AI assistance: Perplexity Computer assisted with implementation and testing. Review the code and understand its operation before submitting.
- Game reference: https://en.wikipedia.org/wiki/Yahtzee
- Font: Plus Jakarta Sans, https://fonts.google.com/specimen/Plus+Jakarta+Sans
- No tutorial source code or external JavaScript libraries are used.

## Files

- `index.html`: page structure, labels, read-only fields, instructions, and buttons.
- `index.css`: layout, colors, dice dots, responsive styles, and light/dark themes.
- `script.js`: random dice values, totals, automatic first roll, focus, and theme switching.
- `README.md`: instructions and credits.
- `LICENSE`: MIT license.

## Build and run

No compilation or package installation is required. Open `index.html` in a browser, keeping all three website files in the same folder.

Alternatively, run this command in the project folder:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`. Press Ctrl+C in the terminal to stop the optional local server.

The web font requires internet access; a fallback font is used if unavailable. Dice rolling itself works locally without a network connection.

## How to use

The first roll happens automatically when the page loads. Click **Roll dice**, or press Enter or Space while the button is focused, to generate another set of five values. All dice values and the total are read-only and right-aligned. Every roll replaces all dice. Identical consecutive results are possible.

Each result uses `Math.floor(Math.random() * 6) + 1`. This produces integers from one through six for casual game simulation, not cryptographic or regulated gambling use.

## Assignment checklist

### Requirement 1

- Separate HTML, CSS, and JavaScript files.
- Responsive, labeled interface with light and dark themes.
- Instructions explain the game, dice range, and rolling controls.
- Random values simulate rolling dice.
- Azure hosting is pending. A private preview is not a substitute for the required Azure URL.

### Requirement 2

- A `load` event rolls automatically once when the page first loads.
- The Roll button has `autofocus`; JavaScript also focuses it after each roll.
- Each die and the total have meaningful labels.
- All result fields have `readonly` and use right-aligned numbers.

## Azure deployment

Keep these files at the root of a GitHub repository. Create an Azure Static Web App linked to that repository, use the Free plan, choose Custom as the build preset, set the app location to `/`, and leave the API location empty. For a workflow configured with `skip_app_build: true`, leave the output location empty.

Azure reference: https://learn.microsoft.com/en-us/azure/static-web-apps/build-configuration

Do not mark the hosting requirement complete until the Azure HTTPS URL has been opened and tested.

## Testing

- HTML and CSS passed the Nu validator with no errors or warnings.
- JavaScript passed `node --check`.
- Browser tests checked the initial automatic roll, autofocus, mouse clicks, Enter, Space, read-only typing protection, right alignment, matching dice dots, and totals.
- Fifty consecutive keyboard rolls produced valid values and totals. Controlled random boundary tests produced all ones and all sixes.
- Refresh, light/dark switching, mobile layout, and enlarged-text behavior were checked.
- No JavaScript page errors were observed during these tests.
