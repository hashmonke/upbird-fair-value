import React, { useState, useEffect } from 'react';

const CalculatorPage = () => {
  const [followerCount, setFollowerCount] = useState('');
  const [avgLikes, setAvgLikes] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the Expertise Fair Price Cap
    const expertiseFairPriceCap = Math.round(followerCount * (avgLikes / 2500) + followerCount * 0.01);

    // Calculate the Influence Fair Price Cap
    const influenceFairPriceCap = Math.round(followerCount * (avgLikes / 4000) + followerCount * 0.006);

    // Set the result
    setResult({
      expertiseFairPriceCap,
      influenceFairPriceCap,
    });
  };

  useEffect(() => {
    if (result) {
      const rangePercentage = (result.expertiseFairPriceCap / result.influenceFairPriceCap) * 100;
      const end = Math.round(rangePercentage);
      const indicatorEnd = end > 0 ? end : 1;
      setResult((prevState) => ({ ...prevState, indicatorEnd }));
    }
  }, [result]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="followerCount">Follower count</label>
        <input
          type="number"
          id="followerCount"
          value={followerCount}
          onChange={(e) => setFollowerCount(Number(e.target.value))}
          required
        />
        
        <label htmlFor="avgLikes">Average likes per tweet</label>
        <input
          type="number"
          id="avgLikes"
          value={avgLikes}
          onChange={(e) => setAvgLikes(Number(e.target.value))}
          required
        />
        
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default CalculatorPage;
