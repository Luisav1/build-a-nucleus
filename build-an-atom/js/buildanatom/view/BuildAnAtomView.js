// Copyright 2013-2020, University of Colorado Boulder

/**
 * Main view for the first screen of the Build an Atom simulation.
 */

import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import inherit from '../../../../phet-core/js/inherit.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import ShredConstants from '../../../../shred/js/ShredConstants.js';
import AccordionBox from '../../../../sun/js/AccordionBox.js';
import buildAnAtomStrings from '../../buildAnAtomStrings.js';
import buildAnAtom from '../../buildAnAtom.js';
import AtomView from '../../common/view/AtomView.js';
import SymbolNode from '../../symbol/view/SymbolNode.js';

const symbolString = buildAnAtomStrings.symbol;

// constants
const INTER_BOX_SPACING = 7;
const ACCORDION_BOX_BUTTON_DILATION = 12;

/**
 * Constructor.
 *
 * @param {BuildAnAtomModel} model Build an Atom model object.
 * @param {Tandem} tandem
 * @constructor
 */
function BuildAnAtomView( model, tandem ) {
  AtomView.call( this, model, tandem );

  this.symbolAccordionBoxExpandedProperty = new BooleanProperty( true, {
    tandem: tandem.createTandem( 'symbolAccordionBoxExpandedProperty' )
  } );

  // Add the symbol node within an accordion box.
  const symbolNode = new SymbolNode( 'BuildAnAtomView', model.particleAtom, tandem.createTandem( 'symbolNode' ), {
    scale: 0.25// scale empirically determined
  } );
  const symbolAccordionBox = new AccordionBox( symbolNode, {
    cornerRadius: 3,
    titleNode: new Text( symbolString, {
      font: ShredConstants.ACCORDION_BOX_TITLE_FONT,
      maxWidth: ShredConstants.ACCORDION_BOX_TITLE_MAX_WIDTH,
      tandem: tandem.createTandem( 'symbolAccordionBoxTitle' )
    } ),
    fill: ShredConstants.DISPLAY_PANEL_BACKGROUND_COLOR,
    minWidth: 110,
    contentAlign: 'center',
    titleAlignX: 'left',
    buttonAlign: 'right',
    expandedProperty: this.symbolAccordionBoxExpandedProperty,
    expandCollapseButtonOptions: {
      touchAreaXDilation: ACCORDION_BOX_BUTTON_DILATION,
      touchAreaYDilation: ACCORDION_BOX_BUTTON_DILATION
    },

    // phet-io
    tandem: tandem.createTandem( 'symbolAccordionBox' ),

    // pdom
    labelContent: symbolString
  } );
  this.controlPanelLayer.addChild( symbolAccordionBox );
  // Do the layout.
  symbolAccordionBox.right = this.periodicTableAccordionBox.left - INTER_BOX_SPACING;
  symbolAccordionBox.top = this.periodicTableAccordionBox.top;

  // pdom - set navigation order for the Atom screen view
  this.pdomPlayAreaNode.accessibleOrder = [ this.periodicTableAccordionBox, symbolAccordionBox, this.nuclideChartAccordionBox];
}

buildAnAtom.register( 'BuildAnAtomView', BuildAnAtomView );

inherit( AtomView, BuildAnAtomView, {

  /**
   * @public
   */
  reset: function() {
    AtomView.prototype.reset.call( this );
    this.symbolAccordionBoxExpandedProperty.reset();
  }
} );

export default BuildAnAtomView;