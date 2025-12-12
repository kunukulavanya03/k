import React from 'react';
import { ArrowLeft, Calendar, User, CheckCircle } from 'lucide-react';

interface DocumentViewerProps {
  onBack: () => void;
}

export function DocumentViewer({ onBack }: DocumentViewerProps) {
  const sections = [
    {
      id: 1,
      title: 'Executive Summary',
      content: 'This Product Requirements Document (PRD) defines the requirements for developing a Simple Python Calculator—a command-line application that performs basic arithmetic operations. The calculator will serve as a learning tool for Python developers and provide practical utility for quick calculations with a user-friendly interface, error handling, and extensible architecture.',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    },
    {
      id: 2,
      title: '1. Problem Statement',
      content: 'Developers and users frequently need quick calculation tools, but many existing calculators lack educational clarity or are overly complex for simple arithmetic operations.',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
    },
    {
      id: 3,
      title: '1.1 Current State',
      content: 'Users need a lightweight, accessible calculator for basic arithmetic. Developers need a project that demonstrates Python fundamentals (functions, conditionals, loops, error handling). Current solutions are either too complex or lack proper error handling.',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #6366F1 100%)',
    },
    {
      id: 4,
      title: '1.2 Problem Summary',
      content: 'There is a gap between overly simple calculators and feature-rich applications. A middle ground is needed that provides essential functionality with clear implementation.',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
    },
    {
      id: 5,
      title: '1.3 Hypothesis',
      content: 'A well-designed, simple Python calculator with clear code structure and comprehensive error handling will serve both as a practical utility and an educational reference.',
      gradient: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
    },
    {
      id: 6,
      title: '2. Product Overview',
      content: 'A command-line calculator application written in Python that enables users to perform basic arithmetic operations (addition, subtraction, multiplication, division) with clean user input handling, validation, and error management.',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
    },
  ];

  return (
    <div className="min-h-screen p-8">
      {/* Gradient Banner */}
      <div
        className="rounded-2xl p-12 mb-8 transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
          boxShadow: '0 10px 40px rgba(99, 102, 241, 0.3)',
        }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          style={{
            background: '#6366F1',
            color: '#FFFFFF',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#7C7FF5';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#6366F1';
          }}
        >
          <ArrowLeft size={20} />
          Back to Menu
        </button>
        <h1
          className="text-5xl mb-4"
          style={{
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          Product Requirements Document
        </h1>
        <p
          className="text-2xl"
          style={{
            color: '#FFFFFF',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
          }}
        >
          Simple Python Calculator
        </p>
      </div>

      {/* Document Metadata Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          className="rounded-xl p-6 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #EC4899 0%, #6366F1 100%)',
            boxShadow: '0 8px 24px rgba(236, 72, 153, 0.3)',
          }}
        >
          <Calendar size={32} style={{ color: '#FFFFFF', marginBottom: '12px' }} />
          <p className="text-sm mb-1" style={{ color: '#FFFFFF', opacity: 0.9 }}>
            Last Updated
          </p>
          <p className="text-xl" style={{ color: '#FFFFFF' }}>
            December 10, 2025
          </p>
        </div>

        <div
          className="rounded-xl p-6 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
            boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
          }}
        >
          <CheckCircle size={32} style={{ color: '#FFFFFF', marginBottom: '12px' }} />
          <p className="text-sm mb-1" style={{ color: '#FFFFFF', opacity: 0.9 }}>
            Status
          </p>
          <p className="text-xl" style={{ color: '#FFFFFF' }}>
            Active
          </p>
        </div>

        <div
          className="rounded-xl p-6 transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
            boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)',
          }}
        >
          <User size={32} style={{ color: '#FFFFFF', marginBottom: '12px' }} />
          <p className="text-sm mb-1" style={{ color: '#FFFFFF', opacity: 0.9 }}>
            Owner
          </p>
          <p className="text-xl" style={{ color: '#FFFFFF' }}>
            Engineering Team
          </p>
        </div>
      </div>

      {/* Section Heading */}
      <div
        className="rounded-xl p-4 mb-8"
        style={{
          background: '#6366F1',
          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
        }}
      >
        <h2 style={{ color: '#FFFFFF' }}>Document Sections</h2>
      </div>

      {/* Document Sections */}
      <div className="space-y-6 mb-12">
        {sections.map((section) => (
          <div
            key={section.id}
            className="rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: section.gradient,
              boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.3)';
            }}
          >
            <h3 className="text-2xl mb-4" style={{ color: '#FFFFFF', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
              {section.title}
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: '#FFFFFF', opacity: 0.95 }}>
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {/* Elevated Container - Key Features */}
      <div
        className="rounded-2xl p-8"
        style={{
          background: 'linear-gradient(135deg, #EC4899 0%, #6366F1 100%)',
          boxShadow: '0 10px 40px rgba(236, 72, 153, 0.3)',
        }}
      >
        <h3 className="text-2xl mb-6" style={{ color: '#FFFFFF', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)' }}>
          Key Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Basic Arithmetic Operations',
            'User-Friendly Interface',
            'Comprehensive Error Handling',
            'Extensible Architecture',
            'Educational Code Structure',
            'Command-Line Interface',
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <CheckCircle size={24} style={{ color: '#FFFFFF' }} />
              <span style={{ color: '#FFFFFF' }}>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
          boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
        }}
        onClick={onBack}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.4)';
        }}
      >
        <ArrowLeft size={28} style={{ color: '#FFFFFF' }} />
      </button>
    </div>
  );
}
