# One Track - Tekniskt test

Hej och välkommen till den tekniska testdelen av antagningsprocessen för One Track, One Agencys traineeprogram. Läs
igeom hela instruktionen innan du börjar.

## Allmänna instruktioner

I samtliga fall ska uppgifterna lösas i en egen [Fork av original-repot](https://help.github.com/articles/fork-a-repo/).

Gör minst en commit per löst deluppgift, alltså 3+ stycken för Algoritm-delen och 2+ för Kodgranskningen.

Koden ska skrivas på ett sådant sätt att du själv skulle känna dig okej att förvalta den. (Gäller speciellt del 3)

När du är klar, skapar du en [Pull Request](https://help.github.com/articles/creating-a-pull-request/) till oss i vårt repo. 
Det finns en Pull Request Template som ska användas.


Testet består av 3 olika delar:

## Del 1 - Algoritmer

För den första delen kommer vi att använda oss av Hacker Rank (https://www.hackerrank.com). 

__Skapa ett konto där och lös följande uppgifter.__

1. Making Anagram - https://www.hackerrank.com/challenges/making-anagrams/problem

1. The Full Counting Sort - https://www.hackerrank.com/challenges/countingsort4/problem

1. Devis' Staircase - https://www.hackerrank.com/challenges/ctci-recursive-staircase/problem

Problemen ska lösas i Java eller C#. Lösningarna ska skickas in för körning i Hacker Rank. _Det räcker inte med 
att bara köra default-fallet._

I varje delmoment ska en Solution.java eller Solution.cs fil läggas till i respektive undermapp. I _Making Anagram_ och _Devis' Staicase_
finns även ett par extra testfall som normalt är fallgropar.

Bonus: Lös något av problemen i ett annat språk än Java och C#.

## Del 2 - Kodgranskning

En yngre kollega kommer till dig med sin implementation av en Stack som du hittar i [del2/VeryBasicStack.java].

Din uppgift är att genomföra en Code Review och ge feedback på koden. Vad skulle du ge för råd till din kollega att göra och varför?

Din andra uppgift är att implementera en egen [Stack](https://sv.wikipedia.org/wiki/Stack_(datastruktur)). 

Du hittar interfacet som ska implementeras i [del2/src/Stack.java]
(eller .cs). Lösningen görs i [del2/src/BasicStack.java].

Stacken ska kunna hantera alla typer av objekt men bara en typ i taget.


## Del 3 - Programmeringsuppgift

Den här delen är lite större än de första två. Den går ut på att du ska implementera ett hiss-simuleringssystem. 
Uppgiften, tillsammans med en djupare beskrivning och ett par hjälpklasser hittar du på:

- Java: https://github.com/OneAgencySE/elevators
- C#: https://github.com/OneAgencySE/elevatorsnet

Gör en egen Fork av den och dela med dig av den till oss. Gör den helst privat, eftersom det är flera som gör den här uppgiften och det inte är ett grupparbete.

Det finns ett antal lösningar på den här uppgiften på att hitta på GitHub men anta att om ni hittar den, så har vi hittat den. ;)

Vår förväntning är att du skriver kod som du själv skulle vilja läsa och förvalta.



