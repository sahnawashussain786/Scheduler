const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock data generator
const generateMockData = (url) => {
  const id = Math.random().toString(36).substr(2, 9);
  return {
    id,
    url,
    type: url.includes('reel') ? 'Reel' : 'Post',
    thumbnail: `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=instagram%20${url.includes('reel') ? 'reel' : 'post'}%20preview&image_size=square`,
    likes: `${(Math.random() * 20 + 5).toFixed(1)}K`,
    comments: `${Math.floor(Math.random() * 2000 + 100)}`,
    shares: `${Math.floor(Math.random() * 500 + 50)}`,
    saves: `${(Math.random() * 10 + 2).toFixed(1)}K`,
    reach: `${(Math.random() * 100 + 20).toFixed(1)}K`,
    views: url.includes('reel') ? `${(Math.random() * 200 + 50).toFixed(1)}K` : null,
    engagementRate: `${(Math.random() * 5 + 2).toFixed(1)}%`,
    date: `${Math.floor(Math.random() * 30)} days ago`,
    tags: ['#instagram', '#trending', '#viral', '#content'],
    performance: {
      vsAverage: Math.random() > 0.5 ? 'above' : 'below',
      growth: `${(Math.random() * 20 - 5).toFixed(1)}%`
    }
  };
};

// Generate mock profile analytics
const getProfileAnalytics = () => {
  return {
    totalReach: '125,430',
    reachChange: '+12.5%',
    profileViews: '89,210',
    viewsChange: '+8.2%',
    postImpressions: '245,680',
    impressionsChange: '+15.3%',
    engagementRate: '4.2%',
    engagementChange: '+0.5%',
    followers: '45.2K',
    followersChange: '+3.2%',
    weeklyTrend: [65, 45, 78, 52, 85, 60, 90]
  };
};

// Get top posts
const getTopPosts = () => {
  return [
    {
      id: '1',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=instagram%20post%20photo%20of%20a%20beautiful%20sunset&image_size=square',
      likes: '12.5K',
      comments: '890',
      reach: '45.2K',
      date: '2 days ago'
    },
    {
      id: '2',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=instagram%20post%20photo%20of%20city%20architecture&image_size=square',
      likes: '9.8K',
      comments: '560',
      reach: '32.1K',
      date: '5 days ago'
    },
    {
      id: '3',
      image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=instagram%20post%20photo%20of%20nature%20landscape&image_size=square',
      likes: '15.2K',
      comments: '1.2K',
      reach: '58.3K',
      date: '1 week ago'
    }
  ];
};

// API endpoint to get analytics for a URL
app.post('/api/analyze', (req, res) => {
  const { url } = req.body;
  
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  // Validate Instagram URL format
  const isValidInstagramUrl = url.includes('instagram.com') && 
    (url.includes('/p/') || url.includes('/reel/') || url.includes('/tv/'));

  if (!isValidInstagramUrl) {
    return res.status(400).json({ error: 'Please enter a valid Instagram post or reel URL' });
  }

  const analytics = generateMockData(url);
  res.json(analytics);
});

// API endpoint to get profile overview
app.get('/api/profile', (req, res) => {
  const profileData = getProfileAnalytics();
  const topPosts = getTopPosts();
  res.json({ profile: profileData, topPosts });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
