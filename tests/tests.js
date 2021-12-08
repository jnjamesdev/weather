
const resultEl = document.getElementById('testResults');

function testCalcMilesPHFromMeteresPerSecond() {
  const testName = 'Miles per hour from meteres per second';
  const expected = 2.24;
  const response = calcMilesPHFromMeteresPerSecond(1);
  if (expected == response) {
    resultEl.innerText = testName + ' passed';
  } else {
    resultEl.innerText = testName + ' failed';

  }
}

testCalcMilesPHFromMeteresPerSecond();