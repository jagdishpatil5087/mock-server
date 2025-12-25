const express = require('express');
const cors = require('cors');
const app = express();

// 1. Enable CORS so your Next.js frontend can fetch from here
app.use(cors());

// 2. Define the Port (Use 4000 to avoid conflict with Next.js 3000)
const PORT = 4000;

// 3. Create the API Endpoint
app.get('/mmi-meter/long-term/', (req, res) => {
    // This is the data your frontend was looking for
    const data = {
        "value": 90,
        "band": "EXTREME GREED",
        "asOf": "2025-12-22T10:45:00.045Z",
        "horizon": "LONG_TERM",
        "source": "EOD_DAILY",
        "segments": [
          {
            "from": 0,
            "to": 25,
            "band": "EXTREME_FEAR"
          },
          {
            "from": 25,
            "to": 50,
            "band": "FEAR"
          },
          {
            "from": 50,
            "to": 75,
            "band": "GREED"
          },
          {
            "from": 75,
            "to": 100,
            "band": "EXTREME_GREED"
          }
        ]
      }

    console.log('Frontend requested MMI data!'); // Log when hit
    res.json(data);
});

app.get('/mmi-meter/short-term/', (req, res) => {
  // This is the data your frontend was looking for
  const data = {
      "value": 70,
      "band": "GREED",
      "asOf": "2025-12-22T10:45:00.045Z",
      "horizon": "LONG_TERM",
      "source": "EOD_DAILY",
      "segments": [
        {
          "from": 0,
          "to": 25,
          "band": "EXTREME_FEAR"
        },
        {
          "from": 25,
          "to": 50,
          "band": "FEAR"
        },
        {
          "from": 50,
          "to": 75,
          "band": "GREED"
        },
        {
          "from": 75,
          "to": 100,
          "band": "EXTREME_GREED"
        }
      ]
    }

  console.log('Frontend requested MMI data!'); // Log when hit
  res.json(data);
});

// 4. Start the Server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});