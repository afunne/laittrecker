# NodeWords

NodeWords on kliendipoolne sõnavara testimise tööriist hajussüsteemide terminoloogia jaoks. See mudeldab kahte sõltumatut päringu/vastuse suunda:
- **Olemasolev versioon:** eestikeelne vihje ootab venekeelset vastust.
- **Pöördversioon:** venekeelne vihje ootab eestikeelset vastust.

Sõnavara andmed salvestatakse kohalikult failis `script.js` ning iga lehe värskendamine valib kummagi suuna jaoks uue vihje. Eraldi ehitusetappi (build step) ega serveri sõltuvust ei ole: ava fail `index.html` otse või serveeri kausta mis tahes staatilise veebiserveriga.

## Arendusharu

Arendusharu (branch) on `feature/estonian-russian-vocabulary-testing`. Avaldatud vaikeharu on `main`.

## GitHubi ja LiteTrackeri üleandmine

Pärast GitHubi kaugrepositooriumi (remote) lisamist lükka see haru üles käsuga:

```powershell
git push -u origin feature/estonian-russian-vocabulary-testing
```

Praeguse stabiilse versiooni avaldamiseks `main`-harus kasuta käsku:

```powershell
git push -u origin main
```

Märgi vastavas LiteTrackeri loos ära GitHubi repositooriumi URL ja täpne haru nimi. Veendu, et link avab repositooriumi nii, et haru valikuks on määratud `feature/estonian-russian-vocabulary-testing`.

Veebikonksupõhise (webhook) tegevuste jälgimise seadistamiseks konfigureeri LiteTrackeri veebikonks kuulama selle repositooriumi `push`-sündmusi. Iga üleslükatud kohustus (commit) sisaldab oma commitsõnumit, haru nime, autorit ja muudetud faile, mida integratsioon kuvab.
