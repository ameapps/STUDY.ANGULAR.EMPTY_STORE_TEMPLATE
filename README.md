# STUDY.ANGULAR.RXJS

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/ameapps/STUDY.ANGULAR.RXJS)

## Commit: aggiunto input con binding e con SIGNALS

### BINDING CON INPUT 

Per scatenare un evento alla pressione di un bottone occorre usare l'evento (input).
L'evento (change) parte solo quando la input perde il focus. 

### BINDING CON PROP E CON SIGNAL

La prop normale richiede valutazione cambiamento di tutte le props dell'app. Le signal invece NO, e sono quindi più veloci.

Nelle input, il binding avviene su ngModel. 
Con le signal, NON è supportato il two ways binding.
Con le signals, serve usare l'evento onModelChanged per aggiornare manualmente il valore della signal con il metodo set. 
ES: <input [ngModel]="textSignal()" (ngModelChange)="textSignal.set($event)" />

## Commit: signals con effect e computed

## EFFECT PER I CAMBIAMENTI SULLE SIGNAL VA SOLO NEL COSTRUTTORE 

Non va messo nel NgOnInit, altirmenti l'app non si interrompe ma verrà lanciata un'eccezione

## TYPESCRIPT LAMBDA RETURN VALORE 

Quando si crea una lambda, se: 
- si usano le graffe, serve il return 
- se non le si usa altrimenti no 

## COME AGGIUNGERE LO STORE ALL'APP 

bisogna metterlo nel bootstrap quando è un app standalone

## RXJS COSA HO IMPARATO 

- TakeUntilDestroy NON va nel ngOnInit. Solo nel costruttore.
- devo imparare a programmare nelle pipe
- if (x === 10) -> NELLE PIPE: filter((value) => value === 10)
- uso stream actions quando NON voglio sporcare lo store!