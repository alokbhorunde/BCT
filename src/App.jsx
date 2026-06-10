import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, Flame, Shuffle, BookOpen, RefreshCw, Sparkles, BookOpenCheck, Layers, Cpu, Shield, Coins } from 'lucide-react';
import { studyData } from './data/studyData';
import StatsHeader from './components/StatsHeader';
import TopicCard from './components/TopicCard';
import TopicModal from './components/TopicModal';

// Helper to determine the peak marks weight of a topic
const getMaxMark = (marksStr) => {
  const numbers = marksStr.match(/\d+/g)?.map(Number) || [];
  return numbers.length > 0 ? Math.max(...numbers) : 0;
};

// Generate a unique stable key for a topic
const getTopicKey = (unitId, topicName) => {
  return `${unitId}-${topicName.toLowerCase().replace(/\s+/g, '-')}`;
};

export default function App() {
  // --- STATE DECLARATIONS ---
  const [searchQuery, setSearchQuery] = useState('');
  const [markFilter, setMarkFilter] = useState('all');
  const [examFilter, setExamFilter] = useState('all');
  const [completedTopics, setCompletedTopics] = useState({});
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeUnit, setActiveUnit] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  // --- LOCAL STORAGE SYNC ---
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bct_mastered_topics');
      if (saved) {
        setCompletedTopics(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load completed topics from localStorage', e);
    }
  }, []);

  const toggleTopicCompletion = useCallback((key) => {
    setCompletedTopics(prev => {
      const updated = {
        ...prev,
        [key]: !prev[key]
      };
      try {
        localStorage.setItem('bct_mastered_topics', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save completed topics to localStorage', e);
      }
      return updated;
    });
  }, []);

  const handleTopicSelect = useCallback((topic, unit) => {
    setActiveTopic(topic);
    setActiveUnit(unit);
  }, []);

  const handleCloseModal = useCallback(() => {
    setActiveTopic(null);
    setActiveUnit(null);
  }, []);

  // --- STATIC/COMPUTED DROPDOWNS ---
  const examOptions = useMemo(() => {
    const examsSet = new Set();
    studyData.units.forEach(unit => {
      unit.topics.forEach(t => {
        t.exams.split(',').forEach(ex => {
          const trimmed = ex.trim();
          if (trimmed) examsSet.add(trimmed);
        });
      });
    });
    // Sort so sessions appear in a sensible order
    return Array.from(examsSet).sort((a, b) => b.localeCompare(a));
  }, []);

  // --- PROGRESS STATS (UNFILTERED) ---
  const allStats = useMemo(() => {
    let total = 0;
    let high = 0;
    let completed = 0;

    studyData.units.forEach(unit => {
      unit.topics.forEach(t => {
        total++;
        if (getMaxMark(t.marks) >= 7) {
          high++;
        }
        const key = getTopicKey(unit.id, t.name);
        if (completedTopics[key]) {
          completed++;
        }
      });
    });

    return { total, high, completed };
  }, [completedTopics]);

  // --- TAB COUNTS (FILTERED BY SEARCH & DROPDOWNS BUT NOT ACTIVE TAB) ---
  const tabCounts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    const counts = { all: 0, u3: 0, u4: 0, u5: 0 };

    studyData.units.forEach(unit => {
      const matchingTopics = unit.topics.filter(topic => {
        // 1. Search Query filter
        if (query) {
          const matchName = topic.name.toLowerCase().includes(query);
          const matchIdk = topic.idk.toLowerCase().includes(query);
          const matchAnswer = topic.answer.toLowerCase().includes(query);
          const matchPoints = topic.points.some(p => p.toLowerCase().includes(query));
          if (!matchName && !matchIdk && !matchAnswer && !matchPoints) return false;
        }

        // 2. Marks Weightage filter
        if (markFilter !== 'all') {
          const maxMark = getMaxMark(topic.marks);
          if (markFilter === 'high' && maxMark < 7) return false;
          if (markFilter === 'medium' && (maxMark < 5 || maxMark > 6)) return false;
          if (markFilter === 'low' && maxMark > 4) return false;
        }

        // 3. Exam Session filter
        if (examFilter !== 'all') {
          const matchesExam = topic.exams.split(',').map(e => e.trim()).includes(examFilter);
          if (!matchesExam) return false;
        }

        return true;
      });

      counts[unit.id] = matchingTopics.length;
      counts.all += matchingTopics.length;
    });

    return counts;
  }, [searchQuery, markFilter, examFilter]);

  // --- FILTERED DATA PIPELINE ---
  const filteredUnits = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return studyData.units
      .filter(unit => activeTab === 'all' || unit.id === activeTab)
      .map(unit => {
        const matchingTopics = unit.topics.filter(topic => {
          // 1. Search Query filter (matches name, idk question, answers or bullet points)
          if (query) {
            const matchName = topic.name.toLowerCase().includes(query);
            const matchIdk = topic.idk.toLowerCase().includes(query);
            const matchAnswer = topic.answer.toLowerCase().includes(query);
            const matchPoints = topic.points.some(p => p.toLowerCase().includes(query));
            if (!matchName && !matchIdk && !matchAnswer && !matchPoints) return false;
          }

          // 2. Marks Weightage filter
          if (markFilter !== 'all') {
            const maxMark = getMaxMark(topic.marks);
            if (markFilter === 'high' && maxMark < 7) return false;
            if (markFilter === 'medium' && (maxMark < 5 || maxMark > 6)) return false;
            if (markFilter === 'low' && maxMark > 4) return false;
          }

          // 3. Exam Session filter
          if (examFilter !== 'all') {
            const matchesExam = topic.exams.split(',').map(e => e.trim()).includes(examFilter);
            if (!matchesExam) return false;
          }

          return true;
        });

        return {
          ...unit,
          topics: matchingTopics
        };
      }).filter(unit => unit.topics.length > 0); // Only keep units with matching topics
  }, [searchQuery, markFilter, examFilter, activeTab]);

  const handleResetFilters = useCallback(() => {
    setSearchQuery('');
    setMarkFilter('all');
    setExamFilter('all');
    setActiveTab('all');
  }, []);

  return (
    <div className="app-container">
      {/* HEADER SECTION */}
      <header>
        <div className="brand-section">
          <div className="brand-title">
            <h1 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpenCheck size={36} style={{ color: 'var(--color-purple)' }} />
              BCT Study Guide
            </h1>
            <p>Master Blockchain Technology (Ethereum, Hyperledger, Consensus & Tokenization)</p>
          </div>
        </div>

        {/* CONTROLS BAR */}
        <div className="controls-bar">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={16} />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search topics, answers, keywords..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Marks Filter */}
          <select 
            className="filter-select"
            value={markFilter}
            onChange={(e) => setMarkFilter(e.target.value)}
          >
            <option value="all">All Marks</option>
            <option value="high">High Yield (7+ marks)</option>
            <option value="medium">Medium (5-6 marks)</option>
            <option value="low">Low (3-4 marks)</option>
          </select>

          {/* Exam Filter */}
          <select 
            className="filter-select"
            value={examFilter}
            onChange={(e) => setExamFilter(e.target.value)}
          >
            <option value="all">All Exams</option>
            {examOptions.map(exam => (
              <option key={exam} value={exam}>{exam}</option>
            ))}
          </select>
        </div>
      </header>

      {/* DASHBOARD STATS */}
      <StatsHeader 
        totalTopics={allStats.total} 
        completedCount={allStats.completed} 
        highWeightageCount={allStats.high} 
      />

      {/* UNIT TAB SELECTOR */}
      <div className="tabs-container">
        <div className="tabs-row">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            data-tab="all"
            onClick={() => setActiveTab('all')}
          >
            <Layers size={16} />
            <span>All Units</span>
            <span className="tab-badge">{tabCounts.all}</span>
          </button>
          
          <button 
            className={`tab-btn ${activeTab === 'u3' ? 'active' : ''}`}
            data-tab="u3"
            onClick={() => setActiveTab('u3')}
          >
            <Cpu size={16} />
            <span>Unit 3</span>
            <span className="tab-badge">{tabCounts.u3}</span>
          </button>

          <button 
            className={`tab-btn ${activeTab === 'u4' ? 'active' : ''}`}
            data-tab="u4"
            onClick={() => setActiveTab('u4')}
          >
            <Shield size={16} />
            <span>Unit 4</span>
            <span className="tab-badge">{tabCounts.u4}</span>
          </button>

          <button 
            className={`tab-btn ${activeTab === 'u5' ? 'active' : ''}`}
            data-tab="u5"
            onClick={() => setActiveTab('u5')}
          >
            <Coins size={16} />
            <span>Unit 5</span>
            <span className="tab-badge">{tabCounts.u5}</span>
          </button>
        </div>
      </div>

      {/* CORE UNITS CONTENT */}
      <main>
        {filteredUnits.length > 0 ? (
          filteredUnits.map(unit => (
            <section key={unit.id} className="unit-block">
              <div className="unit-title-bar">
                <span className={`unit-title-icon ${unit.color}-theme`}>
                  <BookOpen size={20} />
                </span>
                <h2>{unit.title}</h2>
                <span className="unit-topics-count">
                  {unit.topics.length} {unit.topics.length === 1 ? 'topic' : 'topics'}
                </span>
              </div>

              <div className="topics-grid">
                {unit.topics.map(topic => {
                  const key = getTopicKey(unit.id, topic.name);
                  return (
                    <TopicCard 
                      key={key}
                      topicKey={key}
                      topic={topic}
                      unit={unit}
                      isCompleted={!!completedTopics[key]}
                      onToggleComplete={toggleTopicCompletion}
                      onClick={handleTopicSelect}
                    />
                  );
                })}
              </div>
            </section>
          ))
        ) : (
          <div className="empty-state">
            <RefreshCw size={40} style={{ color: 'var(--text-muted)', marginBottom: '1rem', animation: 'spin 4s linear infinite' }} />
            <h3>No Study Topics Match Your Search</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              Try adjusting your text query or resetting the dropdown filters.
            </p>
            <button 
              onClick={handleResetFilters}
              style={{
                background: 'var(--color-purple-bg)',
                border: '1px solid var(--color-purple-border)',
                color: 'var(--color-purple)',
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--border-radius-sm)',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'var(--color-purple)';
                e.target.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'var(--color-purple-bg)';
                e.target.style.color = 'var(--color-purple)';
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>

      {/* DETAIL MODAL DETAIL OVERLAY */}
      {activeTopic && activeUnit && (
        <TopicModal 
          topic={activeTopic}
          unit={activeUnit}
          onClose={handleCloseModal}
          isCompleted={!!completedTopics[getTopicKey(activeUnit.id, activeTopic.name)]}
          onToggleComplete={() => toggleTopicCompletion(getTopicKey(activeUnit.id, activeTopic.name))}
        />
      )}

      {/* FOOTER */}
      <footer>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', marginBottom: '0.5rem' }}>
          <Sparkles size={14} style={{ color: 'var(--color-teal)' }} />
          <span>Interactive BCT Study Guide Dashboard</span>
        </div>
        <p>&copy; {new Date().getFullYear()} BCT Prep Portal. All study content preserved.</p>
      </footer>
    </div>
  );
}
