// Copyright 2002-2013, University of Colorado Boulder

/**
 * Type that portrays the current mass number in the view.  It consists of
 * a graphical representation of a scale with a numerical display on it.
 */
define( function( require ) {
  'use strict';

  // Imports
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Image = require( 'SCENERY/nodes/Image' );
  var imageLoader = require( 'imageLoader' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Text = require( 'SCENERY/nodes/Text' );
  var Vector2 = require( 'DOT/Vector2' );

  // Constants
  var WIDTH = 122; // In screen coords, which are roughly pixels.
  var READOUT_SIZE = new Dimension2( WIDTH * 0.25, WIDTH * 0.165 ); // In screen coords, which are roughly pixels.

  function MassNumberDisplay( numberAtom ) {

    Node.call( this ); // Call super constructor.

    // Add the background image, i.e. the scale.
    var scaleImage = new Image( imageLoader.getImage( 'scale.png' ) );
    scaleImage.scale( WIDTH / scaleImage.width ); // Scale to the targeted width.
    this.addChild( scaleImage );

    // Add the numerical readout window.
    var readoutBackground = new Rectangle( 0, 0, READOUT_SIZE.width, READOUT_SIZE.height, 4, 4,
      {
        fill: 'white',
        stroke: 'black',
        lineWidth: 1,
        // Position is based on the background image, and may need tweaking if the image is changed.
        bottom: scaleImage.bottom - 6,
        centerX: scaleImage.centerX
      } );
    this.addChild( readoutBackground );

    // Add the listeners that will update the numerical display when the charge changes.
    numberAtom.massNumberProperty.link( function( massNumber ) {
      readoutBackground.removeAllChildren();
      var numericalText = new Text( massNumber,
        {
          font: new PhetFont( 24, 'bold' )
        } );
      numericalText.scale( Math.min( READOUT_SIZE.height * 0.9 / numericalText.height,
        READOUT_SIZE.width * 0.9 / numericalText.width ) );
      numericalText.center = new Vector2( READOUT_SIZE.width / 2, READOUT_SIZE.height / 2 );
      readoutBackground.addChild( numericalText );
    } );
  }

  // Inherit from Node.
  inherit( Node, MassNumberDisplay );

  return MassNumberDisplay;
} );
