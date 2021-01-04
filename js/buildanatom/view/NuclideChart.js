// Copyright 2013-2020, University of Colorado Boulder

/**
 * The partial Nuclide Chart
 */

import inherit from '../../../../phet-core/js/inherit.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import NuclideChartNode from '../../../../shred/js/view/NuclideChartNode.js';
import buildAnAtom from '../../buildAnAtom.js';

/**
 * @param {NumberAtom} numberAtom
 * @param {Tandem} tandem
 * @param {Object} [options]
 * @constructor
 */
function NuclideChart( numberAtom, tandem, options ) {

  options.tandem = tandem;
  Node.call( this );

  // Create and add the Nuclide Chart.
  const nuclideChart = new NuclideChartNode( numberAtom, {
    interactiveMax: 0,
    disabledCellColor: 'white',
    tandem: tandem.createTandem( 'nuclideChart' )
  } );
  this.addChild( nuclideChart );

  // Do the layout.  
  nuclideChart.top = 0;
  nuclideChart.left = 0;

  this.mutate( options );
}

buildAnAtom.register( 'NuclideChart', NuclideChart );

// Inherit from Node.
inherit( Node, NuclideChart );
export default NuclideChart;