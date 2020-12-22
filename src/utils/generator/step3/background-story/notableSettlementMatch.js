/*
  If the character's settlement type matches that of the chosen notable settlement type,
  this file will be used to determine the probably that the character is actually from
  that notable settlement.

  The probability increases parrallel to population density:
  
  There are many more villages than there are large cities. If the character is from a village,
  there is a smaller chance that they are from the notable village. However, if they are from
  a large city, it is much more likely that they are from the notable large city.


*/

export const notableSettlementMatchProbabilities = {
  'hamlet': 5,
  'village': 10,
  'small town': 15,
  'large township': 20,
  'small city': 30,
  'large city': 40,
};
