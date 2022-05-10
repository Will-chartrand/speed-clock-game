export const setHand = function(handName, hand) {
    // Set the clock image to the specified clock image
  document.querySelector(hand).setAttribute('src', handName); // Set the clock name to string argument given
}