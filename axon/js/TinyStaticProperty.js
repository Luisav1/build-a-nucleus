// Copyright 2020, University of Colorado Boulder

/**
 * An observable stub which satisfies some of the Property interface, which can store a (static/constant) value
 * and also notify listeners when that value has mutated. The actual value reference does not change, however it can
 * itself be mutated.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import TinyProperty from './TinyProperty.js';
import axon from './axon.js';

class TinyStaticProperty extends TinyProperty {
  /**
   * Don't set the value of a TinyStaticProperty!
   * @public
   * @override
   *
   * @param {*} value
   */
  set( value ) {
    throw new Error( 'Cannot set a TinyStaticProperty value' );
  }
}

axon.register( 'TinyStaticProperty', TinyStaticProperty );
export default TinyStaticProperty;