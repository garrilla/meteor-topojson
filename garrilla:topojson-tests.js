// Write your tests here!
if(Meteor.isClient) {
  /** calls the d3.version prototype, which returns the version string
   *  and tests if its the same as the version that is declared here
   *  TODO change version to string to call from
   *  this assures that d3 is available, and that it's prototypes
   *  return values - eveything else we have to assume running based
   *  d3's own test framework */
  Tinytest.add('garrilla:topojson version test', function (test) {
    test.equal(topojson.version, '1.6.18');
  });
}