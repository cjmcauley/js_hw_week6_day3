const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return result = this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return result = this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journeys => transport === journeys.transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journeys => journeys.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((sum, journey) => {
    return sum + journey.distance;
  }, 0)
  return result
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  allTransport = this.journeys.map(journey => journey.transport);
  return uniqueTransport = [...new Set(allTransport)];
};


module.exports = Traveller;
