/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';
const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'https://energyeducation.ca/simulations/build-a-nucleus/images/atom_icon_small.png';
export default image;