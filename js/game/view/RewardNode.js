// Copyright 2002-2013, University of Colorado Boulder

/**
 * This type defines an animated screen which is displayed as a sort of
 * 'reward' when the user gets a perfect score on a game level.  It animates
 * a set of chemical symbols falling from the sky.
 */
define( function( require ) {
  'use strict';

  // Imports
  var AtomIdentifier = require( 'BUILD_AN_ATOM/common/AtomIdentifier' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var FaceNode = require( 'SCENERY_PHET/FaceNode' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var NumberAtom = require( 'BUILD_AN_ATOM/common/model/NumberAtom' );
  var InteractiveSymbolNode = require( 'BUILD_AN_ATOM/game/view/InteractiveSymbolNode' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  // Constants
  var MIN_CHILD_NODE_WIDTH = 40;
  var MAX_CHILD_NODE_WIDTH = MIN_CHILD_NODE_WIDTH * 2;
  var MIN_CHILD_VELOCITY = 100; // In pixels per second.
  var MAX_CHILD_VELOCITY = 200; // In pixels per second.
  var NUM_SYMBOL_NODES_TO_CREATE = 8;
  var NUM_FACE_NODES_CREATED = 3;
  var NUM_TIMES_TO_REUSE_NODES = 3;

  /**
   * @param stepClock
   * @param options
   * @constructor
   */
  function RewardNode( stepClock, options ) {
//    Node.call( this, { renderer: 'svg', rendererOptions: { cssTransform: true }, pickable: false } );
    Node.call( this, { renderer: 'svg', pickable: false } );
    var thisNode = this;

    options = _.extend( { size: new Dimension2( 1000, 850 ), population: 50 }, options );

    thisNode.size = options.size;

    // Add an invisible background node that will serve as a means for positioning this node.
    //REVIEW: JO: for performance, this should be invisible, or just have no fill. a transparent fill might be getting 'painted' slowing things down
    thisNode.addChild( new Rectangle( 0, 0, thisNode.size.width, thisNode.size.height, 0, 0, { fill: 'rgba( 0, 0, 0, 0 )' } ) );

    // List of moving nodes.  The positions of these nodes are updated at each time step.
    thisNode.movingChildNodes = [];

    // Function for adding multiple instances of an image.
    function addImage( image ){
      var imageNode = new Image( image );
      _.times( NUM_TIMES_TO_REUSE_NODES, function(){
        var rootNode = new Node();
        rootNode.addChild( imageNode );
        rootNode.mutate( { centerX: Math.random() * ( thisNode.size.width - imageNode.width ),
          centerY: Math.random() * ( thisNode.size.height - imageNode.height ) } );
        rootNode.velocity = MIN_CHILD_VELOCITY + Math.random() * ( MAX_CHILD_VELOCITY - MIN_CHILD_VELOCITY );
        thisNode.movingChildNodes.push( rootNode );
        thisNode.addChild( rootNode );
      });
    }

    // Create the symbol and smiley face nodes that will be used multiple
    // times to create the cascade effect.
    thisNode.symbolNodes = [];
    _.times( NUM_SYMBOL_NODES_TO_CREATE, function() {
      var symbolNode = new InteractiveSymbolNode( thisNode._createRandomStableAtom() );
      symbolNode.scale( ( MIN_CHILD_NODE_WIDTH + Math.random() * ( MAX_CHILD_NODE_WIDTH - MIN_CHILD_NODE_WIDTH ) ) / symbolNode.width );
      symbolNode.toImage( addImage );
    } );
    thisNode.faceNodes = [];
    for ( var i = 0; i < NUM_FACE_NODES_CREATED; i++ ) {
      var faceNode = new FaceNode( MIN_CHILD_NODE_WIDTH + ( ( i + 1 ) / NUM_FACE_NODES_CREATED ) * ( MAX_CHILD_NODE_WIDTH - MIN_CHILD_NODE_WIDTH ) );
      faceNode.toImage( addImage );
    }

    // Hook up to the step clock.
    stepClock.addStepListener( function( dt ) {
      if ( thisNode.animationEnabled ) {
        for ( var i = 0; i < thisNode.movingChildNodes.length; i++ ) {
          var childNode = thisNode.movingChildNodes[i];
          childNode.translate( 0, childNode.velocity * dt / childNode.getScaleVector().y );
          if ( childNode.bottom >= thisNode.size.height ) {
            // Back to the top.
            childNode.top = 0;
            childNode.left = Math.random() * ( thisNode.size.width - childNode.width );
            childNode.velocity = MIN_CHILD_VELOCITY + Math.random() * ( MAX_CHILD_VELOCITY - MIN_CHILD_VELOCITY );
          }
        }
      }
    } );
  }

  return inherit( Node, RewardNode, {

    // Turns on/off the animation.
    animationEnabled: false,

    _addRandomNode: function() {
      var rootNode = new Node();
      var childNode;
      var proportion = Math.random();
      if ( Math.random() > 0.2 ) {
        // Add a symbol node.
        childNode = SYMBOL_NODES[ Math.floor( Math.random() * NUM_SYMBOL_NODES_TO_CREATE ) ];
      }
      else {
        // Add a smiley face.
        childNode = FACE_NODES[ Math.floor( Math.random() * NUM_FACE_NODES_CREATED ) ];
      }
      rootNode.addChild( childNode );
      rootNode.mutate( { centerX: Math.random() * ( this.size.width - childNode.width ),
        centerY: Math.random() * ( this.size.height - childNode.height ) } );
      rootNode.velocity = MIN_CHILD_VELOCITY + proportion * ( MAX_CHILD_VELOCITY - MIN_CHILD_VELOCITY );
      this.addChild( rootNode );
      this.movingChildNodes.push( rootNode );
    },

    _createRandomStableAtom: function() {
      var atomicNumber = 1 + Math.floor( Math.random() * 108 );
      return new NumberAtom(
        {
          protonCount: atomicNumber,
          neutronCount: AtomIdentifier.getNumNeutronsInMostCommonIsotope( atomicNumber ),
          electronCount: atomicNumber
        } );
    }
  } );
} );
