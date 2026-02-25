export const SCORING_WEIGHTS = {
  RESUME: 0.20,
  SKILLS: 0.20,
  ASSESSMENT: 0.40,
  COMMUNICATION: 0.20
};

export const calculateReadinessScore = (data) => {
  const { resumeScore, skillScore, assessmentScore, communicationScore } = data;
  
  const finalScore = (
    (resumeScore * SCORING_WEIGHTS.RESUME) +
    (skillScore * SCORING_WEIGHTS.SKILLS) +
    (assessmentScore * SCORING_WEIGHTS.ASSESSMENT) +
    (communicationScore * SCORING_WEIGHTS.COMMUNICATION)
  );

  return Math.round(finalScore);
};

export const getRecommendations = (data) => {
  const recommendations = [];
  
  if (data.resumeScore < 70) {
    recommendations.push({
      type: 'RESUME',
      text: 'Your resume score is low. Consider using a standard template like Harvard or ATS-friendly layouts. Highlight your projects and internships clearly.',
      action: 'Resume Improvement Guide'
    });
  }
  
  if (data.skillScore < 60) {
    recommendations.push({
      type: 'SKILLS',
      text: 'You have fewer skills selected for your domain. Consider learning core technologies like React, Node.js, or cloud fundamentals.',
      action: 'Explore Skills'
    });
  }
  
  if (data.assessmentScore < 60) {
    recommendations.push({
      type: 'ASSESSMENT',
      text: 'Assessment performance can be improved. Focus on Data Structures, Algorithms, and Core CS fundamentals.',
      action: 'Practice Mock Tests'
    });
  }
  
  if (data.communicationScore < 70) {
    recommendations.push({
      type: 'COMMUNICATION',
      text: 'Communication is key for interviews. Practice mock interviews and work on your self-introduction.',
      action: 'Communication Tips'
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      type: 'GENERAL',
      text: 'You are well-prepared! Keep practicing and stay updated with industry trends.',
      action: 'Advanced Mock Interviews'
    });
  }
  
  return recommendations;
};
