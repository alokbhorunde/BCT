import React from 'react';
import { Circle, CheckCircle2 } from 'lucide-react';

const TopicCard = React.memo(function TopicCard({
  topic,
  topicKey,
  unit,
  isCompleted,
  onToggleComplete,
  onClick
}) {
  const handleCheckboxClick = (e) => {
    e.stopPropagation(); // Prevent opening the modal
    onToggleComplete(topicKey);
  };

  return (
    <div 
      className={`topic-card-wrapper ${unit.id}-card`}
      onClick={() => onClick(topic, unit)}
    >
      <div className="topic-card-inner">
        <div className="topic-card-front">
          <div className="topic-card-header">
            <span className="topic-card-title">{topic.name}</span>
            <button 
              className={`topic-card-checkbox ${isCompleted ? 'completed' : ''}`}
              onClick={handleCheckboxClick}
              title={isCompleted ? "Mark as incomplete" : "Mark as mastered"}
            >
              {isCompleted ? <CheckCircle2 size={18} /> : <Circle size={18} />}
            </button>
          </div>
          
          <div className="topic-card-footer">
            <span className="topic-card-marks">{topic.marks} Marks</span>
            <span className="topic-card-exams" title={topic.exams}>{topic.exams}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TopicCard;
