// Copyright 2013-2020, University of Colorado Boulder

/**
 * Scenery node that represents an atomic symbol, meaning that it shows the
 * symbol text, the proton count, atomic number, and charge.
 *
 * @author John Blanco
 */

import Vector2 from '../../../../dot/js/Vector2.js';
import inherit from '../../../../phet-core/js/inherit.js';
import PhetColorScheme from '../../../../scenery-phet/js/PhetColorScheme.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import Node from '../../../../scenery/js/nodes/Node.js';
import Rectangle from '../../../../scenery/js/nodes/Rectangle.js';
import Text from '../../../../scenery/js/nodes/Text.js';
import AtomIdentifier from '../../../../shred/js/AtomIdentifier.js';
import buildAnAtom from '../../buildAnAtom.js';

// constants
const SYMBOL_BOX_WIDTH = 245; // In screen coords, which are roughly pixels.
const SYMBOL_BOX_HEIGHT = 290; // In screen coords, which are roughly pixels.
const NUMBER_FONT = new PhetFont( 57 );
const NUMBER_INSET = 20; // In screen coords, which are roughly pixels.

/**
 * Constructor
 * @param {NumberAtom} numberAtom
 * @param {Tandem} tandem
 * @constructor
 */
function SymbolNode( from, numberAtom, tandem, options ) {

  Node.call( this, { tandem: tandem, pickable: false } );
  // Add the bounding box, which is also the root node for everything else
  // that comprises this node.
  const boundingBox = new Rectangle( 0, 0, SYMBOL_BOX_WIDTH, SYMBOL_BOX_HEIGHT, 0, 0, {
    stroke: 'black',
    lineWidth: 2,
    fill: 'white',
    tandem: tandem.createTandem( 'boundingBox' )
  } );
  this.addChild( boundingBox );

  // Add the symbol text.
  const symbolText = new Text( '', {
    font: new PhetFont( 120 ),
    fill: 'black',
    center: new Vector2( SYMBOL_BOX_WIDTH / 2, SYMBOL_BOX_HEIGHT / 2 ),
    tandem: tandem.createTandem( 'symbolText' )
  } );

  // Add the listener to update the symbol text.
  const textCenter = new Vector2( SYMBOL_BOX_WIDTH / 2, SYMBOL_BOX_HEIGHT / 2 );
  numberAtom.protonCountProperty.link( function( protonCount ) {
    const symbol = AtomIdentifier.getSymbol( protonCount );
    symbolText.text = protonCount > 0 ? symbol : '';
    symbolText.center = textCenter;
  } );
  boundingBox.addChild( symbolText );

  // Add the atomic number display.
  const atomicNumberDisplay = new Text( '0', {
    font: NUMBER_FONT,
    fill: PhetColorScheme.RED_COLORBLIND,
    tandem: tandem.createTandem( 'atomicNumberDisplay' )
  } );

  // Add the listener to update the proton count.
  numberAtom.protonCountProperty.link( function( protonCount ) {
    atomicNumberDisplay.text = protonCount;
    atomicNumberDisplay.left = NUMBER_INSET;
    atomicNumberDisplay.bottom = SYMBOL_BOX_HEIGHT - NUMBER_INSET;
  } );
  boundingBox.addChild( atomicNumberDisplay );

  // Add the mass number display.
  const massNumberDisplay = new Text( '0', {
    font: NUMBER_FONT,
    fill: 'black',
    tandem: tandem.createTandem( 'massNumberDisplay' )
  } );
  boundingBox.addChild( massNumberDisplay );

  // Add the listener to update the mass number.
  numberAtom.massNumberProperty.link( function( massNumber ) {
    massNumberDisplay.text = massNumber;
    massNumberDisplay.left = NUMBER_INSET;
    massNumberDisplay.top = NUMBER_INSET;
  } );

  // Add the isotope naming notation
  const isotopeText = new Text( '', {
    font: new PhetFont( 57 ),
    fill: 'black',
    center: new Vector2(220, SYMBOL_BOX_HEIGHT + 35 ),
    tandem: tandem.createTandem( 'isotopeText' )
  } );
  this.addChild( isotopeText );
  
  //Add the listener to update the isotope name
  numberAtom.protonCountProperty.link( function( protonCount ) {
    const isotope = AtomIdentifier.getName( protonCount );
    isotopeText.text = protonCount > 0 ? isotope : '';
    isotopeText.right = 210;
    isotopeText.top = SYMBOL_BOX_HEIGHT + 35;
  } );
  
  //add the isotope number notation aka mass number
  const isotopeNumText = new Text( '', {
    font: new PhetFont( 57 ),
    fill: 'black',
    center: new Vector2(270, SYMBOL_BOX_HEIGHT + 67.5 ),
    tandem: tandem.createTandem( 'isotopeText' )
  } );
  this.addChild( isotopeNumText );
  
  //add listener to update the isotope text mass number 
  numberAtom.massNumberProperty.link( function( massNumber) {
	isotopeNumText.text = massNumber > 0 ? ' - '+massNumber : '';
	if (massNumber < 10) {
		isotopeNumText.center = new Vector2(250, SYMBOL_BOX_HEIGHT + 67.5 );
	} else {
		isotopeNumText.center = new Vector2(265, SYMBOL_BOX_HEIGHT + 67.5 );
	}
  } );

  // Do the layout.
  boundingBox.top = 0;
  boundingBox.left = 20;
  isotopeText.left = 0;
  isotopeText.centerY = boundingBox.bottom + 5;

  this.mutate( options );
}

buildAnAtom.register( 'SymbolNode', SymbolNode );

// Inherit from Node.
inherit( Node, SymbolNode );
export default SymbolNode;