import React, { useEffect } from 'react';
import { X, HelpCircle, Award, Calendar, CheckSquare, Square } from 'lucide-react';

export default function TopicModal({ topic, unit, onClose, isCompleted, onToggleComplete }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!topic) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  // Parses steps like "Step 1:" or "1. Ethereum" to apply highlighting
  const renderPointText = (point) => {
    const regex = /^(Step \d+:|\d+\.)\s*(.*)$/;
    const match = point.match(regex);
    if (match) {
      const prefix = match[1];
      const body = match[2];

      let highlightClass = 'highlight-purple';
      if (unit.id === 'u4') highlightClass = 'highlight-teal';
      if (unit.id === 'u5') highlightClass = 'highlight-coral';

      return (
        <p>
          <strong className={highlightClass}>{prefix}</strong> {body}
        </p>
      );
    }
    return <p>{point}</p>;
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className={`modal-content ${unit.id}-modal`}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{topic.name}</h2>
          <div className="modal-meta-row">
            <span className="modal-badge">{topic.marks} Marks</span>
            <span className="flex-align" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={12} />
              {topic.exams}
            </span>
            <button 
              onClick={onToggleComplete}
              style={{
                background: 'none',
                border: 'none',
                color: isCompleted ? 'var(--color-success)' : 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem',
                fontWeight: 500,
                marginLeft: 'auto'
              }}
            >
              {isCompleted ? <CheckSquare size={14} /> : <Square size={14} />}
              {isCompleted ? 'Mastered' : 'Mark as Mastered'}
            </button>
          </div>
        </div>

        {/* IDK Bad Block Section */}
        <div className="idk-section-badge">
          <HelpCircle size={18} style={{ flexShrink: 0 }} />
          <span>{topic.idk}</span>
        </div>

        <div className="modal-divider"></div>

        <div className="section-label">Answer Summary</div>
        <div className="answer-card">
          {topic.answer}
        </div>

        <div className="section-label">Key Points to Write</div>
        <div className="points-list">
          {topic.points.map((point, index) => (
            <div key={index} className="point-item">
              {renderPointText(point)}
            </div>
          ))}
        </div>

        <div className="modal-divider"></div>
        
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'right' }}>
          {unit.title}
        </div>
      </div>
    </div>
  );
}
