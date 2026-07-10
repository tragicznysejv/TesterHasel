Link: https://tragicznysejv.github.io/TesterHasel/

**PL:**
Tester siły hasła, generowania go i sprawdzania czy wyciekło do internetu.

Aplikacja w przeglądarce, która ocenia siłę hasła, generuje hasło oraz sprawdza czy dane hasło wyciekło do internetu.

Główne funkcje aplikacji:
- Weryfikacja wycieków - aplikacja sprawdza czy wpisane hasło nie wyciekło do internetu w zewnętrznej bazie Have I Been Pwned
- K-Anonymity i Kryptografia - hasło nie jest wysyłane w postaci całkowitej i jawnej. Aplikacja, za pomocą algorytmu SHA-1, haszuje hasło i wysyła przez sieć jedynie 5 pierwszych znaków z haszu (prefix)
- Analiza siły hasła w czasie rzeczywistym - Dynamiczny pasek oraz napis oceniający złożoność podanego hasła za pomocą wyrażeń regularnych.
- Tryb ciemny/jasny - został zaimplementowany za pomocą stylów CSS oraz manipulacji modelem DOM
- Generator haseł złożonych - funkcja pozwalająca wygenerować hasło, składające się z 16 losowych znaków.

Technologie użyte:
- HTML5
- CSS3
- JavaScript
- Web Crypto API ('crypto.subtle.digest')

Formy zabezpieczeń:
- Ochrona danych przesyłanych - wykorzystanie bezpiecznego modelu do sprawdzania wycieków, eliminuje ryzyko przechywcenia pełnego lub większości hasła np. przez atak Man-in-the-Middle
- Lokalne przetwarzanie danych - po stronie klienta jest wykonywana cała logika kryptograficzna
- Asynchroniczność - dzięki zastosowaniu Fetch API, mamy płynną obsłuję zapytań sieciowych bez blokowania interfejsu przeglądarki


**EN:**
A tool for testing password strength, generating passwords, and checking if a password has been leaked online.

A browser-based application that evaluates password strength, generates passwords, and checks whether a specific password has been leaked online.

Main features of the application:
- Leak verification—the application checks whether the entered password has been leaked online in the external Have I Been Pwned database
- K-Anonymity and Cryptography—the password is not sent in its entirety or in plain text. The app uses the SHA-1 algorithm to hash the password and sends only the first 5 characters of the hash (prefix) over the network
- Real-time password strength analysis—A dynamic progress bar and text that evaluates the complexity of the entered password using regular expressions.
- Dark/light mode—Implemented using CSS styles and DOM manipulation
- Complex password generator—A feature that generates a password consisting of 16 random characters.

Technologies used:
- HTML5
- CSS3
- JavaScript
- Web Crypto API (‘crypto.subtle.digest’)

Security measures:
- Protection of transmitted data - the use of a secure model to check for leaks eliminates the risk of the entire password or most of it being intercepted, e.g., by a man-in-the-middle attack
- Local data processing—all cryptographic logic is executed on the client side
- Asynchronous processing—thanks to the Fetch API, network requests are handled smoothly without blocking the browser interface

