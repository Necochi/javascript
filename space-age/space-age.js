//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const earthTime = 60 * 60 * 24 * 365.25;
  let result;

  switch (planet) {
    case 'earth':
      result = Number((seconds / earthTime / 1).toFixed(2));
      break;

    case 'mercury':
      result = Number((seconds / earthTime / 0.2408467).toFixed(2));
      break;

    case 'venus':
      result = Number((seconds / earthTime / 0.61519726).toFixed(2));
      break;

    case 'mars':
      result = Number((seconds / earthTime / 1.8808158).toFixed(2));
      break;

    case 'jupiter':
      result = Number((seconds / earthTime / 11.862615).toFixed(2));
      break;

    case 'saturn':
      result = Number((seconds / earthTime / 29.447498).toFixed(2));
      break;

    case 'uranus':
      result = Number((seconds / earthTime / 84.016846).toFixed(2));
      break;

    case 'neptune':
      result = Number((seconds / earthTime / 164.79132).toFixed(2));
      break;

    default:
      break;
  }
  return result;
};
