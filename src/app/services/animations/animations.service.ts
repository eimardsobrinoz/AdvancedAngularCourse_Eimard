import { Injectable } from '@angular/core';
import { AnimationModel } from '../../pages/animations/animations.model';

@Injectable()
export class AnimationsService {

  static animations: AnimationModel[] = [];

  constructor() {
    AnimationsService.loadAnimations();
  }

  static getData(type: string) {
    // tslint:disable-next-line:curly
    this.loadAnimations();
    let data: AnimationModel;
    switch (type) {
      case 'trigger':
        data = AnimationsService.getTriggerAnimation;
        break;

      case 'state':
        data = this.getStateAnimation;
        break;

      case 'style':
        data = this.getStyleAnimation;
        break;

      case 'animate':
        data = this.getAnimateAnimation;
        break;

      case 'transition':
        data = this.getTransitionAnimation;
        break;

      default:
        data = this.getTriggerAnimation;
        break;
    }
    return data;
  }

  static get getTriggerAnimation(): AnimationModel {
    let anim: AnimationModel;
    AnimationsService.animations.forEach( animation => {
      if (animation.name.indexOf('Trigger') > -1 ) {
        anim = animation;
        return;
      }
    });
    return anim;
  }

  static get getStateAnimation(): AnimationModel {
    let anim: AnimationModel;
    AnimationsService.animations.forEach( animation => {
      if (animation.name.indexOf('State') > -1   ) {
        anim = animation;
        return;
      }
    });
    return anim;
  }

  static get getStyleAnimation(): AnimationModel {
    let anim: AnimationModel;
    AnimationsService.animations.forEach( animation => {
      if (animation.name.indexOf('Style') > -1 ) {
        anim = animation;
        return;
      }
    });
    return anim;
  }

  static get getAnimateAnimation(): AnimationModel {
    let anim: AnimationModel;
    AnimationsService.animations.forEach( animation => {
      if (animation.name.indexOf('Animate') > -1 ) {
        anim = animation;
        return;
      }
    });
    return anim;
  }

  static get getTransitionAnimation(): AnimationModel {
    let anim: AnimationModel;
    AnimationsService.animations.forEach( animation => {
      if (animation.name.indexOf('Transition') > -1 ) {
        anim = animation;
        return;
      }
    });
    return anim;
  }

  static loadAnimations() {
    // tslint:disable-next-line:curly
    if (AnimationsService.animations.length > 0 ) return;
    // tslint:disable-next-line:max-line-length
    AnimationsService.animations.push( new AnimationModel('animationTrigger', 'Trigger', 'Crea un trigger de animaci??n que mostrar?? una lista de entradas de estado y de transici??n que se evaluar??n cuando cambie la expresi??n vinculada al trigger. Los desencadenantes se registran dentro de los datos de anotaci??n del componente en la secci??n de animaciones. Se puede colocar un desencadenante de animaci??n en un elemento dentro de una plantilla haciendo referencia al nombre del desencadenante seguido del valor de expresi??n al que est?? vinculado el desencadenador (en forma de [@triggerName] = "expresi??n". Los enlaces de desencadenador de animaci??n estriguifican valores y luego hacen coincidir los valores anteriores y actuales con cualquier transici??n vinculada. Si se proporciona un valor booleano en el enlace desencadenante, ambos se representar??n como 1 o verdadero y 0 o falso para los valores booleanos verdadero y falso, respectivamente.', 'https://angular.io/api/animations/trigger'));
    AnimationsService.animations.push( new AnimationModel('animationState', 'State', 'Declara un estado de animaci??n dentro del desencadenante dado. Cuando un estado est?? activo dentro de un componente, sus estilos asociados persistir??n en el elemento al que est?? asociado el desencadenador (incluso cuando finalice la animaci??n). Para animar entre estados, eche un vistazo a la funci??n DSL de transici??n de animaci??n. Para registrar estados en un desencadenador de animaci??n, eche un vistazo a la funci??n desencadenante.', 'https://angular.io/api/animations/state'));
    // tslint:disable-next-line:max-line-length
    AnimationsService.animations.push( new AnimationModel('animationStyle', 'Style', 'Declara un objeto clave / valor que contiene propiedades / estilos CSS que luego se pueden usar para estados de animaci??n, dentro de una secuencia de animaci??n, o como datos de estilo para animaciones y fotogramas clave.', 'https://angular.io/api/animations/style'));
    AnimationsService.animations.push( new AnimationModel('animationAnimate', 'Animate', 'The animate function accepts two input parameters: timing and styles: timing is a string based value that can be a combination of a duration with optional delay and easing values. The format for the expression breaks down to duration delay easing (therefore a value such as 1s 100ms ease-out will be parse itself into duration=1000, delay=100, easing=ease-out. If a numeric value is provided then that will be used as the duration value in millisecond form. styles is the style input data which can either be a call to style or keyframes. If left empty then the styles from the destination state will be collected and used (this is useful when describing an animation step that will complete an animation by animating to the final state)', 'https://angular.io/api/animations/animate'));
    // tslint:disable-next-line:max-line-length
    AnimationsService.animations.push( new AnimationModel('animationTransition', 'Transition', 'Transici??n declara la secuencia de pasos de animaci??n que se ejecutar??n cuando se satisfaga el valor proporcionado stateChangeExpr. El stateChangeExpr consiste en un estado1 => state2 que consta de dos estados conocidos (use un asterisco (*) para referirse a un estado din??mico de inicio y / o finalizaci??n). Tambi??n se puede proporcionar una funci??n como el argumento stateChangeExpr para una transici??n y esta funci??n se ejecutar?? cada vez que ocurra un cambio de estado. Si el valor devuelto dentro de la funci??n es verdadero, se ejecutar?? la animaci??n asociada. Las transiciones de animaci??n se colocan dentro de un disparador de animaci??n. Para una transici??n a animar a un valor de estado y persistir sus estilos, se espera que se definan uno o m??s estados de animaci??n.', 'https://angular.io/api/animations/transition'));
  }
}
