import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lang: 'en' | 'zh') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-toggle-container" ref={dropdownRef}>
      <button 
        className="language-toggle-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle language"
      >
        ⚙️
      </button>

      {isOpen && (
        <div className="language-dropdown-menu">
          <button 
            className={`language-option ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleSelect('en')}
          >
            English
          </button>
          <button 
            className={`language-option ${language === 'zh' ? 'active' : ''}`}
            onClick={() => handleSelect('zh')}
          >
            中文
          </button>
        </div>
      )}
    </div>
  );
}
