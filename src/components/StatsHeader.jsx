import React, { useMemo } from 'react';
import { BookOpen, CheckCircle, Award, Compass, Sparkles, TrendingUp } from 'lucide-react';

export default function StatsHeader({ totalTopics, completedCount, highWeightageCount }) {
  const percentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
  const remainingCount = totalTopics - completedCount;

  // Dynamic status details
  const { readiness, motivation, badgeColor } = useMemo(() => {
    if (percentage === 0) {
      return {
        readiness: 'Not Started',
        motivation: 'Your blockchain journey starts here. Complete your first topic to begin tracking progress!',
        badgeColor: 'var(--text-muted)'
      };
    } else if (percentage < 35) {
      return {
        readiness: 'Low Readiness',
        motivation: 'Great start! Complete one topic at a time to build your momentum.',
        badgeColor: 'var(--color-coral)'
      };
    } else if (percentage < 75) {
      return {
        readiness: 'Medium Readiness',
        motivation: 'Halfway there! Keep studying to master Blockchain Technology.',
        badgeColor: 'var(--color-info)'
      };
    } else if (percentage < 100) {
      return {
        readiness: 'High Readiness',
        motivation: 'Almost ready! Just a few more topics to go before you are exam-ready.',
        badgeColor: 'var(--color-teal)'
      };
    } else {
      return {
        readiness: 'Fully Prepared',
        motivation: 'Outstanding! You have mastered all topics. You are ready to ace the exam!',
        badgeColor: 'var(--color-success)'
      };
    }
  }, [percentage]);

  return (
    <>
      {/* Global Progress Bar Card (Now rendered FIRST for visual hierarchy) */}
      <div className="progress-card">
        <div className="progress-info">
          <span className="progress-title">
            <Compass size={16} className="pulse-icon" />
            Overall Preparation Progress
          </span>
          <span className="progress-badge">{percentage}%</span>
        </div>
        
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {/* Consolidated supporting progress detail items */}
        <div className="progress-details-grid">
          <div className="progress-detail-item">
            <span className="detail-lbl">Completed</span>
            <span className="detail-val text-success">{completedCount} topics</span>
          </div>
          <div className="progress-detail-item">
            <span className="detail-lbl">Remaining</span>
            <span className="detail-val text-warning">{remainingCount} topics</span>
          </div>
          <div className="progress-detail-item">
            <span className="detail-lbl">High Yield (7+ M)</span>
            <span className="detail-val" style={{ color: 'var(--color-purple)' }}>{highWeightageCount} topics</span>
          </div>
          <div className="progress-detail-item">
            <span className="detail-lbl">Est. Readiness</span>
            <span className="detail-val font-semibold" style={{ color: badgeColor }}>{readiness}</span>
          </div>
        </div>

        {/* Motivational Banner */}
        <div className="motivation-banner">
          <Sparkles size={14} className="sparkle-gold" />
          <span>{motivation}</span>
        </div>
      </div>
    </>
  );
}
