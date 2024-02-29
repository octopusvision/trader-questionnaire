function calculateTraderType() {
    const form = document.getElementById('traderForm');
    let scores = {
      impulsive: 0,
      fearful: 0,
      overconfident: 0,
      indecisive: 0,
      revenge: 0,
      patternSeeking: 0,
      riskAverse: 0,
      riskTaking: 0,
      stressed: 0,
      impatient: 0,
      shortsighted: 0
    };
  
    // Scoring for each question
    scores.impulsive += parseInt(form['q1'].value); // Example for Q1
  
    // Fearful - Q2
    scores.fearful += parseInt(form['q2'].value);
  
    // Overconfident - Q3
    scores.overconfident += parseInt(form['q3'].value);
  
    // Indecisive - Q4
    scores.indecisive += parseInt(form['q4'].value);
  
    // Revenge - Q5
    scores.revenge += parseInt(form['q5'].value);
  
    // Pattern Seeking - Q6
    scores.patternSeeking += parseInt(form['q6'].value);
  
    // Risk-Averse/Risk-Taking - Q7 (Assuming 0 for risk-averse and 3 for risk-taking for simplicity)
    const q7Response = parseInt(form['q7'].value);
    if(q7Response === 0) {
      scores.riskAverse += 3;
    } else if(q7Response === 3) {
      scores.riskTaking += 3;
    }
  
    // Stressed - Q8
    scores.stressed += parseInt(form['q8'].value);
  
    // Impatient - Q9
    scores.impatient += parseInt(form['q9'].value);
  
    // Shortsighted - Q10
    scores.shortsighted += parseInt(form['q10'].value);
  
    // Determine the highest score and corresponding trader type(s)
    let highestScore = Math.max(...Object.values(scores));
    let traderTypes = Object.keys(scores).filter(key => scores[key] === highestScore);
  
    document.getElementById('result').innerHTML = 'Your trader type(s): ' + traderTypes.join(', ');
  }
  