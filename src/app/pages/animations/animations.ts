import { trigger, state, style, animate, transition, query } from '@angular/animations';

export const myAnimations = [
    trigger('myAnimation1', [
      state('inactive', style({
        backgroundColor: 'red',
        transform: 'scale(6)'
      })),
      state('active', style({
        backgroundColor: 'yellow',
        transform: 'scale(0.6)'
      })),
      transition('inactive => active', animate('1s ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('myAnimation2', [
        transition('* => *', [
            query(
              ':enter',
              [style({ opacity: 0 })],
              { optional: true }
            ),
            query(
              ':leave',
              [style({ opacity: 1 }), animate('1s', style({ opacity: 0 }))],
              { optional: true }
            ),
            query(
              ':enter',
              [style({ opacity: 0 }), animate('1s', style({ opacity: 1 }))],
              { optional: true }
            )
          ])
    ]),
    trigger('myAnimation3', [
        state('inactive', style({
          backgroundColor: 'red',
          transform: 'scale(6)'
        })),
        state('active', style({
          backgroundColor: 'yellow',
          transform: 'scale(0.6)'
        })),
        transition('inactive => active', animate('1s ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('myAnimation4', [
        state('inactive', style({
          backgroundColor: 'red',
          transform: 'scale(6)'
        })),
        state('active', style({
          backgroundColor: 'yellow',
          transform: 'scale(0.6)'
        })),
        transition('inactive => active', animate('1s ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('myAnimation5', [
        state('inactive', style({
          backgroundColor: 'red',
          transform: 'scale(6)'
        })),
        state('active', style({
          backgroundColor: 'yellow',
          transform: 'scale(0.6)'
        })),
        transition('inactive => active', animate('1s ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
    ]),
    trigger('animationWithParameter', [
      state('inactive', style({
        backgroundColor: 'transparent',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '{{animationColour}}', // use interpolation
        transform: 'scale(4)'
      }), {params: {animationColour: 'black'}}), // default parameters values required

      transition('inactive => active', animate('1s ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
  ])
];
