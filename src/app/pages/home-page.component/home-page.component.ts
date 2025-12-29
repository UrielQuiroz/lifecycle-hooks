import { afterEveryRender, afterNextRender, Component, effect, OnChanges, OnInit, signal } from '@angular/core';

const log = ( ...messages: string[] ) => {
  console.log(
    `${ messages[0] } %c${ messages.slice(1).join(', ') }`,
    'color: #bada55'
  )
}

@Component({
  selector: 'app-home-page.component',
  imports: [],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnChanges {

  traditionalProperty = 'Uriel';
  signalProperty = signal('Uriel');

  constructor() {
    console.log('Contructor llamado')

    setTimeout(() => {
      this.signalProperty.set('Leo Messi')
    }, 2500);
  }

  changeTraditional() {
    this.traditionalProperty = 'Uriel Quiroz';
  }

  changeSignal() {
    this.signalProperty.set('Uriel Quiroz');
  }

  basicEffect = effect((onCleanup) => {
    log(
      'effect',
      'Disparar efectos secundarios'
    );

    onCleanup(() => {
      log(
        'onCleanup',
        'Se ejecuta cuando el efecto se va a destruir'
      )
    })
  })

  ngOnInit() {
    log(
      'ngOnInit',
      'Runs once after Angular has initialized all the components inputs.'
    )
  }
  ngOnChanges() {
    log(
      'ngOnChanges',
      'Runs every time the components inputs have changed.'
    )
  }
  ngDoCheck() {
    log(
      'ngDoCheck',
      'Runs every time this component is checked for changes.'
    )
  }
  ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      'Runs once after the components content has been initialized.'
    )
  }
  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      'Runs every time this component content has been checked for changes.'
    )
  }
  ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      'Runs once after the components view has been initialized.'
    )
  }
  ngAfterViewChecked() {
    log(
      'ngAfterViewChecked',
      'Runs every time the components view has been checked for changes.'
    )
  }
  ngOnDestroy() {
    log(
      'ngOnDestroy',
      'Runs once before the component is destroyed.'
    )
  }

  afterNextRenderEffect = afterNextRender(() => {
    log(
      'afterNextRender',
      'Runs once the next time that all components have been rendered to the DOM.'
    )
  })

  afterRender = afterEveryRender(() => {
    log(
      'afterRender',
      'Runs every time all components have been rendered to the DOM.'
    )
  })

}
