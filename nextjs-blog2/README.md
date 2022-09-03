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

## TODO

- [ ] Wyliczenie `expected until now`
- [ ] wyświetlam od razu całą tabelke - dni nieuzupełnione na czerwono
- [ ] Sekcja "settings" w bazie danych zawierająca

  - [ ] aktualny rok, aktualny miesiąc
  - [ ] Sekcja config w DB z oczekiwanym czasem pracy w mc

- [ ] Autoinkrementacja id
- [ ] Postman na to, kolekcja, do repo dać!
- [ ] Test na serwis aplikacyjny !
- [ ] Testy end to end w Cypress!

  - [ ] bazka testserver i prod

- [ ] po otwarciu strony data jest od razu ustawiona na dzisiejszą
- [ ] kliknięcie na dzień wypełnia date
- [ ] Przejdź na TypeScript ! Quality 📈

FUTURE:

- [ ] Grafana do monitoringu :)
- [ ] Kafka for fun, wysyłanie np maili wiadomości do mnie?
- [ ] CI/CD ?
- [ ] Instalacja tego ustrojstwa na moim serwerze OVH
  - [ ] Uwieżytelnianie, żebym tylko ja mógł tam wejść, albo vpn? Jak?

## SP 03

- [x] Sortowanie entry wg dnia w bazie danych lub na frontendzie
- [x] Mogę zapisać do bazy czas pracy.
- [x] Kasowanie wpisu z tabeli
- [x] table from allows doing this: 1:2
- [x] mixed not sorted table / db content, find solution
- [x] Mogę pokazać tabelke w wersji do druku w ładnym stylu bez podwójnej ramki.
- [x] wersja do druku

BUGI:

- [ ] can send undefined time!
