// Copyright 2013-2020, University of Colorado Boulder

/**
 * Visual representation of a challenge where the user is presented with a
 * schematic representation of an atom (which looks much like the atoms
 * constructed on the 1st tab), and must determine that atom's charge.
 *
 * @author John Blanco
 */

import NumberProperty from '../../../../axon/js/NumberProperty.js';
import Vector2 from '../../../../dot/js/Vector2.js';
import inherit from '../../../../phet-core/js/inherit.js';
import ModelViewTransform2 from '../../../../phetcommon/js/view/ModelViewTransform2.js';
import MultiLineText from '../../../../scenery-phet/js/MultiLineText.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import NumberAtom from '../../../../shred2/js/model/NumberAtom.js';
import ShredConstants from '../../../../shred2/js/ShredConstants.js';
import buildAnAtomStrings from '../../buildAnAtomStrings.js';
import buildAnAtom from '../../buildAnAtom.js';
import ChallengeView from './ChallengeView.js';
import NonInteractiveSchematicAtomNode from './NonInteractiveSchematicAtomNode.js';
import NumberEntryNode from './NumberEntryNode.js';

const whatIsTheTotalChargeString = buildAnAtomStrings.whatIsTheTotalCharge;

/**
 * @param {SchematicToChargeChallenge} schematicToChargeChallenge
 * @param {Bounds2} layoutBounds
 * @param {Tandem} tandem
 * @constructor
 */
function SchematicToChargeChallengeView( schematicToChargeChallenge, layoutBounds, tandem ) {

  // Must be defined before call to super constructor.
  this.chargeAnswerProperty = new NumberProperty( 0, {
    tandem: tandem.createTandem( 'chargeAnswerProperty' ),
    numberType: 'Integer'
  } );
  ChallengeView.call( this, schematicToChargeChallenge, layoutBounds, tandem );
  const self = this;

  // Create the model-view transform used by the schematic atom.
  const modelViewTransform = ModelViewTransform2.createSinglePointScaleInvertedYMapping(
    Vector2.ZERO,
    new Vector2( layoutBounds.width * 0.275, layoutBounds.height * 0.5 ),
    0.8 );

  // Add the schematic representation of the atom.
  const nonInteractiveSchematicNode = new NonInteractiveSchematicAtomNode( schematicToChargeChallenge.answerAtom,
    modelViewTransform,
    tandem.createTandem( 'noninteractiveSchematicAtomNode' ) );
  this.challengePresentationNode.addChild( nonInteractiveSchematicNode );

  // Question
  const questionPrompt = new MultiLineText( whatIsTheTotalChargeString, {
    align: 'left',
    font: new PhetFont( 24 ),
    maxWidth: 200,
    tandem: tandem.createTandem( 'questionPrompt' )
  } );
  this.interactiveAnswerNode.addChild( questionPrompt );

  // Node for entering the answer
  const chargeEntryNode = new NumberEntryNode(
    self.chargeAnswerProperty,
    tandem.createTandem( 'chargeEntryNode' ), {
      minValue: -99,
      maxValue: 99,
      prependPlusSign: true,
      getTextColor: ShredConstants.CHARGE_TEXT_COLOR
    } );
  self.interactiveAnswerNode.addChild( chargeEntryNode );

  // Layout
  questionPrompt.centerX = layoutBounds.width * 0.65;
  questionPrompt.centerY = layoutBounds.height * 0.5;
  chargeEntryNode.left = questionPrompt.right + 10;
  chargeEntryNode.centerY = questionPrompt.centerY;

  // @private called by dispose
  this.disposeSchematicToChargeChallengeView = function() {
    nonInteractiveSchematicNode.dispose();
    questionPrompt.dispose();
    chargeEntryNode.dispose();
    this.chargeAnswerProperty.dispose();
  };
}

buildAnAtom.register( 'SchematicToChargeChallengeView', SchematicToChargeChallengeView );

inherit( ChallengeView, SchematicToChargeChallengeView, {

  // @public
  checkAnswer: function() {
    const userSubmittedAnswer = new NumberAtom( {
      protonCount: this.challenge.answerAtom.protonCountProperty.get(),
      neutronCount: this.challenge.answerAtom.neutronCountProperty.get(),
      electronCount: this.challenge.answerAtom.protonCountProperty.get() - this.chargeAnswerProperty.value
    } );
    this.challenge.checkAnswer( userSubmittedAnswer );
  },

  // @public
  displayCorrectAnswer: function() {
    this.chargeAnswerProperty.value = this.challenge.answerAtom.chargeProperty.get();
  },

  dispose: function() {
    this.disposeSchematicToChargeChallengeView();
    ChallengeView.prototype.dispose.call( this );
  }
} );

export default SchematicToChargeChallengeView;