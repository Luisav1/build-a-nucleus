// Copyright 2013-2020, University of Colorado Boulder

/**
 * Main file for the Build an Atom simulation.
 */

import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import buildAnAtomStrings from './buildAnAtomStrings.js';
import BuildAnAtomScreen from './buildanatom/BuildAnAtomScreen.js';

const buildAnAtomTitleString = buildAnAtomStrings[ 'build-an-atom' ].title;

// root tandem
const tandem = Tandem.ROOT;

const simOptions = {
  credits: {
    leadDesign: 'Kelly Lancaster',
    softwareDevelopment: 'John Blanco, Aadish Gupta, Sam Reid',
    team: 'Jack Barbera, Suzanne Brahmia, Julia Chamberlain, Yuen-ying Carpenter, ' +
          'Kelly Lancaster, Patricia Loeblein, Emily B. Moore, Robert Parson, ' +
          'Ariel Paul, Kathy Perkins, Sharon Siman-Tov',
    qualityAssurance: 'Steele Dalton, Alex Dornan, Bryce Griebenow, Ethan Johnson, ' +
                      'Elise Morgan, Ben Roberts',
    thanks: 'Conversion of this simulation to HTML5 was funded by the Royal Society of Chemistry.'
  }
};

simLauncher.launch( function() {
  new Sim( buildAnAtomTitleString, [ new BuildAnAtomScreen( tandem.createTandem( 'atomScreen' ) ) ], simOptions ).start();
} );