import React from 'react';
import { BookOpen, CheckCircle, Award, Percent } from 'lucide-react';

export default function StatsHeader({ totalTopics, completedCount, highWeightageCount }) {
  const percentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  return (
    <div className="stats-board">
      {/* Total Topics */}
      <div className="stat-card">
        <div className="stat-icon-wrapper purple">
          <BookOpen size={20} />
        </div>
        <div className="stat-info">
          <span className="stat-val">{totalTopics}</span>
          <span className="stat-lbl">Total Topics</span>
        </div>
      </div>

      {/* Completed / Mastered */}
      <div className="stat-card">
        <div className="stat-icon-wrapper success">
          <CheckCircle size={20} />
        </div>
        <div className="stat-info">
          <span className="stat-val">{completedCount} / {totalTopics}</span>
          <span className="stat-lbl">Topics Mastered</span>
        </div>
      </div>

      {/* High Weightage */}
      <div className="stat-card">
        <div className="stat-icon-wrapper coral">
          <Award size={20} />
        </div>
        <div className="stat-info">
          <span className="stat-val">{highWeightageCount}</span>
          <span className="stat-lbl">High Weightage (7+ Marks)</span>
        </div>
      </div>

      {/* Global Progress Bar Card */}
      <div className="progress-card">
        <div className="progress-info">
          <span>Overall Preparation Progress</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: percentage > 50 ? 'var(--color-teal)' : 'var(--text-secondary)' }}>
            <Percent size={14} />
            {percentage}%
          </span>
        </div>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
