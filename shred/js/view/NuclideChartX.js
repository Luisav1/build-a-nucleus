// Copyright 2015-2020, University of Colorado Boulder

/**
 * Scenery node that defines a single cell in a periodic table.
 * @author John Blanco
 * @author Aadish Gupta
 */

import inherit from '../../../phet-core/js/inherit.js';
import merge from '../../../phet-core/js/merge.js';
import Rectangle from '../../../scenery/js/nodes/Rectangle.js';
import Tandem from '../../../tandem/js/Tandem.js';
import shred from '../shred.js';
import Shape from '../../../kite/js/Shape.js';
import Path from '../../../scenery/js/nodes/Path.js';

/**
 * @param {number} atomicNumber - Atomic number of atom represented by this cell.
 * @param {NumberAtom} numberAtom - Atom that is set if this cell is selected by the user.
 * @param {Color} cellColor - Color to be used for selected enabled and disabled cell
 * @param {Object} [options]
 * @constructor
 */
function NuclideChartX( proton, neutron, color, options ) {
  options = merge( {
	tandem: Tandem.REQUIRED
    //phetioEventType: EventType.USER
  }, options );

  this.options = options;
  this.protonNumber = proton;
  this.neutronNumber = neutron;
  this.type = 'xLabel';
  
  Rectangle.call( this, 0, 0, 0, 0, 0, 0, {
	stroke: 'black',
	lineWidth: 0,
	fill: 'black',
	cursor: null,
	tandem: options.tandem,
	phetioType: options.phetioType
  } ); // Call super constructor.
  
  const xLabel = new Shape();
  xLabel.moveTo((25 * neutron), (11 - proton) * 25);
  xLabel.lineTo((25 * neutron) + 25, (10 - proton) * 25);
  xLabel.moveTo((25 * neutron), (10 - proton) * 25);
  xLabel.lineTo((25 * neutron) + 25, (11 - proton) * 25);
  this.xLabelObject = new Path( xLabel, {
      stroke: color,
      lineWidth: 6,
      pickable: false,
      tandem: options.tandem.createTandem( 'xLabel' ),
      phetioType: options.phetioType
    } );
  this.addChild( this.xLabelObject );

  // @private called by dispose
  this.disposeNuclideChartX= function() {
	this.xLabelObject.dispose();
  };
}

shred.register( 'NuclideChartX', NuclideChartX );

inherit( Rectangle, NuclideChartX, {

  dispose: function() {
    this.disposeNuclideChartX();
  }
} );

export default NuclideChartX;