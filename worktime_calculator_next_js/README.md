# Worktime tracking app 👨🏼‍💻

Repo: https://github.com/marstom/Worktime-report-generator

## Project setup

1. Create .env.local & .env.prod with secrets, separate for prod & local
   For unittests create .env.test.local

```
SECRET_COOKIE_PASSWORD=XXX<32 chars>
USER_PASSWORD=XXX
ONLY_USERNAME_AVAILABLE=XXX
JSON_DB="./lib/db/timeEntrysDb.json"
```

2. install deps `yarn`
3. Development `yarn dev`
4. Create empty database here `lib/db/timeEntrysDb.json`

```json
{
  "years": {
    "2022": {
      "08": {
        "14": {}
      }
    }
  }
}
```

5. Adjust App settings here `lib/settings.json`

Select there a year and month which you want to have

Here is pritable footer data from api:
http://localhost:3000/api/worktimesheet/settings
modify settings.json

```

```

Deploy:

note: workcalc deploy

## Tutorial

Ended [here](https://nextjs.org/learn/basics/assets-metadata-css/styling-tips)
[Dynamic routes](https://nextjs.org/learn/basics/dynamic-routes)
[Dynamic routes details](https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details)

[How to avoid async top level in my solution?](https://stackoverflow.com/questions/49798540/how-to-export-a-variable-that-takes-its-value-from-an-async-function)

## Knowloge

- [How to use .! in ts?](https://blog.logrocket.com/understanding-exclamation-mark-typescript/)

## Calc js projekt

[bazka danyn na json oparta](https://www.npmjs.com/package/node-json-db)

## Docs

Endpoints for days:

http://localhost:3000/api/worktimesheet/monthly/2022
http://localhost:3000/api/worktimesheet/monthly/2022/08
http://localhost:3000/api/worktimesheet/monthly/2022/08/15

Endpoint na zapisanie czasu pracy:

http://localhost:3000/api/save_worktime_entry

Take a look at iron session examples

~/Github/next.js/examples/with-iron-session
Implement auth usin iron session!

## Backlog

- [ ] Postman na to, kolekcja, do repo dać!
- [ ] Test na serwis aplikacyjny !
- [ ] Testy end to end w Cypress!

- [ ] bazka testserver i prod

- Fature billing

  - [ ] Dodać billing gdzie będzie podawało się kwoty
  - [ ] billing ma koszty dodatkowe
  - [ ] billing liczy netto i brutto
  - [ ] billing wyświetla się na printable version

- [ ] Dodać github actions - automatyczne testy
- [ ] po otwarciu strony data jest od razu ustawiona na dzisiejszą
- [ ] Floating form, table is beside [] [.]
- [ ] Można wybrać aktywną baze danych z opcji zamiast hardkodować
- [ ] Zamiaste edytować vim'em na serwerze settings.json jakiś interfejs do manipulacji opcjami
- [ ] Opcje wydruku fontsize etc.

### FUTURE:

- [ ] Grafana do monitoringu :)
- [ ] Kafka for fun, wysyłanie np maili wiadomości do mnie?
- [ ] CI/CD ?
- [ ] Deploy na moje OVH z uwieżytelnianiem lub vpn'em

- [ ] wyświetlam od razu całą tabelke - dni nieuzupełnione na czerwono
- [ ] refactor, niech struktura db odpowiada api żeby było najprościej
- [ ] Instalacja tego ustrojstwa na moim serwerze OVH

### BUGI:

- [ ] can send undefined time!

## SP 06 start 09.10.2022-end

- [x] Przejdź na TypeScript ! Quality 📈

  - [x] Przepisać LIB
  - [x] Przepisać testy
  - [x] Przepisać komponenty

- [x] mvp billing- move vimem edytować na serwerze settings.json!
- [x] maskowane pole password
- [x] dockerize!! 📦

## SP 05 start- 17.09.2022

- [x] Uwieżytelnianie, żebym tylko ja mógł tam wejść, albo vpn? Jak?
  - [x] Uwieżytelniam się po iron-session
  - [x] Spike, 1 chroniony endpoint
  - [x] Zabezpiecz api endpointy
  - [x] Zabezpiecz strony
- [x] instalacja typescripta
- [x] Wyliczenie `expected until now`
- [x] Autoinkrementacja id albo UUID
- [x] podświetlam aktywny edytowany wiersz!

## SP 04 -- finished 17.09.2022

- [x] Można oznaczyć dzień wolny na szaro
- [x] Sekcja "settings" w bazie danych zawierająca
- [x] kliknięcie na dzień wypełnia dane
- [x] aktualny rok, aktualny miesiąc
- [x] Sekcja config w DB z oczekiwanym czasem pracy w mc
- [x] Użyj czasu oczekiwanego pracy w apce
- [x] Użyj bazy danych z settingsów zamiast hardcoded pracy w apce

- [x] research - komunikacja między komponentami - bardo prosta - useState na tę chwilę starcza.

## SP 03 -- finished start of 09.2022

- [x] Sortowanie entry wg dnia w bazie danych lub na frontendzie
- [x] Mogę zapisać do bazy czas pracy.
- [x] Kasowanie wpisu z tabeli
- [x] table from allows doing this: 1:2
- [x] mixed not sorted table / db content, find solution
- [x] Mogę pokazać tabelke w wersji do druku w ładnym stylu bez podwójnej ramki.
- [x] wersja do druku
