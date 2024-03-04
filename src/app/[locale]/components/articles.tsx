"use client"

import { useState } from 'react';

interface ArticleProps {
  title: string;
  content: string;
}

const Article: React.FC<ArticleProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <button
        className="text-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Réduire' : 'Lire la suite'}
      </button>
      {isOpen && <p className="mt-2">{content}</p>}
    </div>
  );
};

export default Article;
