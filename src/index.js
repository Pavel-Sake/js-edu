/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family',
  knowsProgramming = true,
  config = {family: 4}
) {
  const hoursForCourse = 800;
  const hoursForBasicCourse = 500;

  if (knowsProgramming) {
    const weeks = Math.ceil(hoursForCourse / config[focus]);
    return weeks
  }
  const weeks = Math.ceil((hoursForCourse + hoursForBasicCourse) / config[focus]);
  return weeks
};
  