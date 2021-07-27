const scores = {
  18.5: 'Subnormal',
  24.9: 'Normal',
  29.9: 'Overweight',
  34.9: 'Obesity I',
  39.9: 'Obesity II',
  40: 'Obesity III',
};

function calculateImc(weight, height) {
  const result = weight / Math.pow(height, 2);

  for (const maxScore of Object.keys(scores).sort()) {
    if (maxScore >= result) {
      return scores[Number(maxScore)];
    }
  }

  return 'Obesity III';
}

module.exports = calculateImc;
