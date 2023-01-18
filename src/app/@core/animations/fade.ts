
import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';


export let fadeInAnimation = animation([
    style({ opacity: 0, background: 'lightgreen' }),
    animate('{{duration}} {{easing}}')

], {
    params: {
        duration: '2s',
        easing: 'ease-out',
    }
});

export let fade = trigger('fade', [
    transition(':enter', useAnimation(fadeInAnimation)),
    transition(':leave', [
        animate('1s', style({ opacity: 0 }))
    ]),
])

// create reusable animation

export let bounceOutLeftAnimation = animation(
    animate('0.5s ease-in',
        keyframes([
            style({
                offset: .2,
                opacity: 1,
                transform: 'translate3d(20px, 0, 0), scaleX(0.9)',
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'translate3d(-2000px, 0, 0) scaleX(2)',
            }),

        ]),),
)

export let slide = trigger('slide',
    [
        transition(':enter', [
            style({ transform: 'translate(-10px, 0)' }),
            animate(500)]),
        // animate('timingenimation-duraton delay-animationstartafterthistime easing-afunctionThatDeterminesThatSpeedOfAnAnimationOverTime')\
        // easing-linear: same speed
        // Ease-in: start slow end fast //move  out
        // Ease-out: start fast  end  slow //move in
        // Ease-in-out: start slow  end  slow
        // cubic-bezier(0,0,0,0)
        // transition(':leave', [animate('0.5s 0.5s ease-in', style({ transform: 'translate(-100%, 0)' }))]),
        transition(':leave', useAnimation(bounceOutLeftAnimation))
    ]

)



export let fade1 = trigger('fade', [
    state('void', style({
        opacity: 0,
        backgroundColor: 'yellow',
        transform: 'translate(-50%, 0)'
    }),),

    transition(':enter,:leave', [animate('1s')]),

    // transition('void => *,*=>void', [animate('2s')]),
    // transition('void <=> *', [animate('2s')]),
    // transition('void => *', [animate('2s')]),
    // transition('*=>void', [animate('1s')]),
])