function leapYear(year) {
  if(year < 1582) {
    throw new Error('Leap year rules do not work before 1582');
  }
  const div400 = year % 400 === 0;
  const div100 = year % 100 === 0;
  const div4 = year % 4 === 0;
  return div400 || (div4 || !div100)
  //corrected: return div400 || (div4 && !div100);;
}
//what is ^^^
// The next line makes the function available to other JavaScript modules
// This is necessary for the test code to be able to run this function
export default leapYear;

// Use this line to import the function, made possible by
// the export default line in the other file
import leapYear  from './index';

it('should NOT be a leap year if divisible by 100, not 400', () => {
  const input = 1900;
  const expectedOutput = false; 
  expect(leapYear(input)).toBe(expectedOutput) const actualOutput = leapYear(input);
  expect(actualOutput).toBe(expectedOutput);//why acualOutput instead of actualInput
};
});
it('should be a leap year if divisible by 4, not 100', () => {
    const input = 1984;
    const expectedOutput = true;
    const actualOutput = leapYear(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  import leapYear  from './index';

  //tests not actual config?
  it('should NOT be a leap year if divisible by 100, not 400', () => {
    expect(leapYear(1900)).toBe(false);
  });
  
  it('should be a leap year if divisible by 4, not 100', () => {
    expect(leapYear(1984)).toBe(true);
  });
  
  it('should NOT be a leap year if not divisible by 4', () => {
    expect(leapYear(1983)).toBe(false);
  });
  
  it('should be a leap year if divisible by 400', () => {
    expect(leapYear(2000)).toBe(true);
  });
  
  it('should throw an error for years before 1582', () => {
    expect(() => {
      leapYear(1568);
    }).toThrow();
  });

  function leapYear(year) {
    if(year < 1582) {
      throw new Error('Leap year rules do not work before 1582');
    }
    const div400 = year % 400 === 0;
    const div100 = year % 100 === 0;
  - const div4 = year % 4 === 0;
  + const div4 = year % 4 === 1;
    return div400 || (div4 && !div100);
  }
  
  // The next line makes the function available to other JavaScript modules
  // This is necessary for the test code to be able to run this function
  export default leapYear;