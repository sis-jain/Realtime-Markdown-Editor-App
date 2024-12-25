import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [htmlPreview, setHtmlPreview] = useState('');

  const handleInputChange = async (event) => {
    const inputMarkdown = event.target.value;
    setMarkdown(inputMarkdown);

    try {
      const response = await axios.post('http://localhost:3001/convert', { markdown: inputMarkdown });
      setHtmlPreview(response.data.html);
    } catch (error) {
      console.error('Error converting Markdown:', error);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <textarea
        style={{ width: '50%', height: '80vh' }}
        value={markdown}
        onChange={handleInputChange}
        placeholder="Type Markdown here..."
      />
      <div
        style={{ width: '50%', height: '80vh', overflowY: 'auto', border: '1px solid #ddd', padding: '10px' }}
        dangerouslySetInnerHTML={{ __html: htmlPreview }}
      />
    </div>
  );
};

export default App;