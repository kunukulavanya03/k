import React from 'react';
import { FileText, CheckSquare, Code, Settings } from 'lucide-react';

interface MenuProps {
  onNavigate: () => void;
}

export function Menu({ onNavigate }: MenuProps) {
  const menuCards = [
    {
      id: 1,
      title: 'Document Viewer',
      description: 'View Product Requirements Document',
      icon: FileText,
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    },
    {
      id: 2,
      title: 'Test Cases',
      description: 'Review testing scenarios',
      icon: CheckSquare,
      gradient: 'linear-gradient(135deg, #EC4899 0%, #6366F1 100%)',
    },
    {
      id: 3,
      title: 'Code Review',
      description: 'Analyze implementation',
      icon: Code,
      gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
    },
    {
      id: 4,
      title: 'Configuration',
      description: 'Manage settings',
      icon: Settings,
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
    },
  ];

  return (
    <div className="min-h-screen p-8">
      {/* Gradient Banner */}
      <div
        className="rounded-2xl p-12 mb-12 transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
          boxShadow: '0 10px 40px rgba(99, 102, 241, 0.3)',
        }}
      >
        <h1
          className="text-5xl mb-4"
          style={{
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          Testing Application
        </h1>
        <p
          className="text-xl"
          style={{
            color: '#FFFFFF',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
          }}
        >
          Document Version: 1.0 - Python Calculator PRD
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {['All', 'Active', 'Testing', 'Documentation'].map((filter) => (
          <button
            key={filter}
            className="px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: '#EC4899',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F472B6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#EC4899';
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Section Heading */}
      <div
        className="rounded-xl p-4 mb-8"
        style={{
          background: '#6366F1',
          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
        }}
      >
        <h2 style={{ color: '#FFFFFF' }}>Main Menu</h2>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {menuCards.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              onClick={onNavigate}
              className="text-left rounded-2xl p-8 transition-all duration-300 hover:scale-105"
              style={{
                background: card.gradient,
                boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.3)';
              }}
            >
              <Icon size={48} style={{ color: '#FFFFFF', marginBottom: '16px' }} />
              <h3 className="text-2xl mb-3" style={{ color: '#FFFFFF' }}>
                {card.title}
              </h3>
              <p style={{ color: '#FFFFFF', opacity: 0.95 }}>
                {card.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Elevated Container */}
      <div
        className="rounded-2xl p-8 mb-8"
        style={{
          background: 'linear-gradient(135deg, #EC4899 0%, #6366F1 100%)',
          boxShadow: '0 10px 40px rgba(236, 72, 153, 0.3)',
        }}
      >
        <h3 className="text-2xl mb-4" style={{ color: '#FFFFFF' }}>
          Quick Stats
        </h3>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-4xl mb-2" style={{ color: '#FFFFFF' }}>
              1.0
            </p>
            <p style={{ color: '#FFFFFF', opacity: 0.9 }}>Version</p>
          </div>
          <div>
            <p className="text-4xl mb-2" style={{ color: '#FFFFFF' }}>
              Active
            </p>
            <p style={{ color: '#FFFFFF', opacity: 0.9 }}>Status</p>
          </div>
          <div>
            <p className="text-4xl mb-2" style={{ color: '#FFFFFF' }}>
              Dec 10
            </p>
            <p style={{ color: '#FFFFFF', opacity: 0.9 }}>Updated</p>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
          boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
        }}
        onClick={onNavigate}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.4)';
        }}
      >
        <FileText size={28} style={{ color: '#FFFFFF' }} />
      </button>
    </div>
  );
}
