import fetch from 'node-fetch';

export const summarizeText = async (text) => {
  const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputs: text }),
  });

  const data = await response.json();

  if (response.ok) {
    return data[0].summary_text;
  } else {
    console.error('Error:', data);
    throw new Error('Failed to summarize text');
  }
};
