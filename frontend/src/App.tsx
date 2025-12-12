import React, { useState } from 'react';
import { Menu } from './components/Menu';
import { DocumentViewer } from './components/DocumentViewer';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'menu' | 'document'>('menu');

  return (
    <div className="min-h-screen" style={{ background: '#FFFFFF' }}>
      {currentScreen === 'menu' && (
        <Menu onNavigate={() => setCurrentScreen('document')} />
      )}
      {currentScreen === 'document' && (
        <DocumentViewer onBack={() => setCurrentScreen('menu')} />
      )}
    </div>
  );
}
