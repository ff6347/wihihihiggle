layer = thisComp.layer('whihihiggle_ctrl'); // <-- THE CONTROL LAYER
/* ------------------------------- */
/* -----THE SLIDER CONTROLS------- */
freq = layer.effect('freq')('ADBE Slider Control-0001');
amp = layer.effect('amp')('ADBE Slider Control-0001');
seed = layer.effect('seed')('ADBE Slider Control-0001');
octaves = layer.effect('octaves')('ADBE Slider Control-0001');
amp_mult = layer.effect('amp_mult')('ADBE Slider Control-0001');
t = layer.effect('t')('ADBE Slider Control-0001');
framesPerSecond = layer.effect('framesPerSecond')('ADBE Slider Control-0001');
loopTime = layer.effect('loopTime')('ADBE Slider Control-0001');
/* ------------------------------- */
seedRandom(seed);
 posterizeTime(framesPerSecond);
wiggle(freq,amp,octaves,amp_mult,t)
 temporalWiggle(freq, amp, octaves, amp_mult, t);
/* ------------------------------- */
// Thanx to Dan Ebberst
// Expressionieer's Designer Guide
// Looping wiggle()
// http://www.motionscript.com/design-guide/looping-wiggle.html
 tLooped = t % loopTime;
 wiggle1 = wiggle(freq, amp, octaves, amp_mult, tLooped);
 wiggle2 = wiggle(freq, amp, octaves, amp_mult, tLooped - loopTime);
 linear(tLooped, 0,  loopTime, wiggle1, wiggle2)
/* ------------------------------- */
// created with whihihiggle script by fabiantheblind
// checkout --> http://fabiantheblind.info
