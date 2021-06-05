# Dashboard

 - '/'
  - statystyki dziesiejszych zamówień (zdalne i lokalne)
  - listę rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- '/login'
  - pola na login i hasło
  - guzik do zalogowania (link do dashboard)

# Widok dostępności stolików

- '/tables'
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów
- '/tables/booking/:id'
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmnian
- '/tables/booking/new'
  - analogicznie do powyższej, bez początkowej informacji
- '/tables/events/:id'
  - analogicznie do powyższej, bez początkowej informacji
- '/tables/events/new'
  - analogicznie do powyższej, bez początkowej informacji

# Widok kelnera

- '/waiter'
  - tabela
    - w wierszah stoliki
    - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- '/waiter/order/new'
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
- '/waiter/order/:id'
  - jak powyższa

# Widok kuchni

- '/kitchen'
  - wyświetla listę zamówień w kolejności ich złożenia
  - lista zawiera
    - numer stolika (lub zamówienia zdalnego) oraz
    - pełne informacje dotyczące zamówionych dań
  - ma liście musi być możliwość oznaczenia zamówienia jako zrealizowane
