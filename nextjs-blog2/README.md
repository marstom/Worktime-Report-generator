# Aplikacja do zapisu czasu pracy 👨🏼‍💻

## Tutorial

Ended [here](https://nextjs.org/learn/basics/assets-metadata-css/styling-tips)
[Dynamic routes](https://nextjs.org/learn/basics/dynamic-routes)
[Dynamic routes details](https://nextjs.org/learn/basics/dynamic-routes/dynamic-routes-details)

## Calc js projekt

[bazka danyn na json oparta](https://www.npmjs.com/package/node-json-db)

## Docs

Endpointy na dni:

http://localhost:3000/api/worktimesheet/monthly/2022
http://localhost:3000/api/worktimesheet/monthly/2022/08
http://localhost:3000/api/worktimesheet/monthly/2022/08/15

Endpoint na zapisanie czasu pracy:

http://localhost:3000/api/save_worktime_entry

Zobacz co dalej tutaj

~/Github/next.js/examples/with-iron-session
Chcę zaimplementować uwieżytelnianie iron!

### Local setup nginx on iOS

brew install nginx

brew services start nginx

Teraz nginx jeset dostępny w przeglądarce tutaj:

http://localhost:8080/

Opcje nginx'a
vim /opt/homebrew/opt/nginx/nginx.conf
vim /opt/homebrew/var/www

/opt/homebrew/opt/nginx
/opt/homebrew/var/www

Ukryte
/opt/homebrew/etc/nginx/nginx.conf.default
/opt/homebrew/etc/nginx/nginx.conf
/opt/homebrew/Cellar/nginx/1.23.1/.bottle/etc/nginx/nginx.conf.default
/opt/homebrew/Cellar/nginx/1.23.1/.bottle/etc/nginx/nginx.conf

---

## Backlog

- [ ] Postman na to, kolekcja, do repo dać!
- [ ] Test na serwis aplikacyjny !
- [ ] Testy end to end w Cypress!

- [ ] bazka testserver i prod

- [ ] Przejdź na TypeScript ! Quality 📈

- Fature billing

  - [ ] Dodać billing gdzie będzie podawało się kwoty
  - [ ] billing ma koszty dodatkowe
  - [ ] billing liczy netto i brutto
  - [ ] billing wyświetla się na printable version

- [ ] Dodać github actions - automatyczne testy

### FUTURE:

- [ ] Grafana do monitoringu :)
- [ ] Kafka for fun, wysyłanie np maili wiadomości do mnie?
- [ ] CI/CD ?
- [ ] Deploy na moje OVH z uwieżytelnianiem lub vpn'em

- [ ] wyświetlam od razu całą tabelke - dni nieuzupełnione na czerwono
- [ ] refactor, niech struktura db odpowiada api żeby było najprościej

### BUGI:

- [ ] can send undefined time!

## SP 05 start- 17.09.2022

- [ ] Uwieżytelnianie, żebym tylko ja mógł tam wejść, albo vpn? Jak?
- [ ] Instalacja tego ustrojstwa na moim serwerze OVH
- [ ] po otwarciu strony data jest od razu ustawiona na dzisiejszą
- [ ] Floating form, table is beside [] [.]
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
