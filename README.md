# דרישת תשלום — Hebrew RTL screen (SAP Horizon)

Single-file design component + SAP Horizon design-system bundle.

## Files
- `index.html` — the screen (header, invoice / payment-demand toggle, editable item table with value help, totals).
- `support.js` — component runtime required by `index.html`.
- `_ds/sap-desgin-.../` — SAP Horizon tokens, fonts and component bundle.

## Run
Serve the folder over HTTP and open `index.html`:

```
python3 -m http.server 8080
```

Then browse to `http://localhost:8080/`.

## Notes
- Uploaded reference images (`uploads/`) are intentionally excluded.
- Mock data lives in the `BASE` array inside the file's script block; catalog entries for the item value help are derived from it.
