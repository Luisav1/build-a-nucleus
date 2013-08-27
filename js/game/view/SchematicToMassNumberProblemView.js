// Copyright 2002-2013, University of Colorado Boulder

/**
 * Visual representation of a problem where the user is presented with a
 * schematic representation of an atom (which looks much like the atoms
 * constructed on the 1st tab), and must determine that atom's mass number.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // Imports
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ModelViewTransform2 = require( 'PHETCOMMON/view/ModelViewTransform2' );
  var MultiLineText = require( 'SCENERY_PHET/MultiLineText' );
  var Node = require( 'SCENERY/nodes/Node' );
  var NonInteractiveSchematicAtomNode = require( 'game/view/NonInteractiveSchematicAtomNode' );
  var NumberAtom = require( 'common/model/NumberAtom' );
  var NumberEntryNode = require( 'game/view/NumberEntryNode' );
  var ProblemView = require( 'game/view/ProblemView' );
  var Property = require( 'AXON/Property' );

  /**
   * Main constructor function.
   *
   * @constructor
   */
  function SchematicToMassNumberProblemView( schematicToMassNumberProblem, layoutBounds ) {

    this.massNumberAnswer = new Property( 0 ); // Must be defined before call to super constructor.
    ProblemView.call( this, schematicToMassNumberProblem, layoutBounds ); // Call super constructor.
    var thisNode = this;

    // Create the model-view transform used by the schematic atom.
    var mvt = ModelViewTransform2.createSinglePointScaleInvertedYMapping(
      { x: 0, y: 0 },
      { x: layoutBounds.width * 0.275, y: layoutBounds.height * 0.45 },
      0.8 );

    // Add the schematic representation of the atom.
    this.addChild( new NonInteractiveSchematicAtomNode( schematicToMassNumberProblem.answerAtom, mvt ) );

    // Question TODO: i18n
    var questionPrompt = new MultiLineText( "What is the\nmass number?", { align: 'left', font: new PhetFont( 24 ) } );
    this.addChild( questionPrompt );

    // Node for entering the answer
    var numberEntryNode = new NumberEntryNode( thisNode.massNumberAnswer, false );
    thisNode.addChild( numberEntryNode );

    // Layout
    questionPrompt.centerX = layoutBounds.width * 0.65;
    questionPrompt.centerY = layoutBounds.height * 0.5;
    numberEntryNode.left = questionPrompt.right + 10;
    numberEntryNode.centerY = questionPrompt.centerY;
  }

  // Inherit from ProblemView.
  inherit( ProblemView, SchematicToMassNumberProblemView,
    {
      checkAnswer: function() {
        var userSubmittedAnswer = new NumberAtom(
          {
            protonCount: this.problem.answerAtom.protonCount,
            neutronCount: this.massNumberAnswer.value - this.problem.answerAtom.protonCount,
            electronCount: this.problem.answerAtom.electronCount
          } );
        this.problem.checkAnswer( userSubmittedAnswer );
      },

      clearAnswer: function() {
        this.massNumberAnswer.reset();
      },

      displayCorrectAnswer: function() {
        this.massNumberAnswer.value = this.problem.answerAtom.massNumber;
      }
    }
  );

  return SchematicToMassNumberProblemView;
} );