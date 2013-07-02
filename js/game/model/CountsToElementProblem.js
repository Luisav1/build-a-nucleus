// Copyright 2002-2013, University of Colorado Boulder

/**
 * Problem where the user is presented with a set of counts for protons,
 * neutrons, and electrons, and must find the represented element on a
 * periodic table.
 *
 * @author John Blanco
 */
define( function( require ) {
  "use strict";

  // Imports
  var BAAGameProblem = require( 'game/model/BAAGameProblem' );
  var CountsToElementProblemView = require( 'game/view/CountsToElementProblemView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );

  /**
   * Main constructor function.
   *
   * @constructor
   */
  function CountsToElementProblem( buildAnAtomGameModel, answerAtom ) {
    BAAGameProblem.call( this, buildAnAtomGameModel, answerAtom );
    this.isNeutral = new Property( true );
  }

  // Inherit from base class and define the methods for this object.
  inherit( BAAGameProblem, CountsToElementProblem, {
    // Create the view needed to visual represent this problem.
    createView: function( layoutBounds ) {
      return new CountsToElementProblemView( this.model, this, layoutBounds );
    }
  } );

  return CountsToElementProblem;
} );
