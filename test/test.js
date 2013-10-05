"use strict"

var glm = require("gl-matrix")
var det2 = require("../det2.js")

require("tape")(function(t) {

	t.same(det2([[1, 0], [0, 1]]), [1])
  
  for(var i=0; i<100; ++i) {
    var r = [ [ (10*Math.random())|0, (10*Math.random())|0 ], [ (10*Math.random())|0, (10*Math.random())|0 ] ]
    t.same(det2(r), [glm.mat2.determinant(r[0].concat(r[1]))])
  }
	
	t.end()
})