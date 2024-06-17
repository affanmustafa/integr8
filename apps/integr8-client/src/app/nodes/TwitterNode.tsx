import React, { memo, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Handle, Position } from 'reactflow';
import TwitterLogo from '../../assets/Twitter-Logo.png';
import { Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';

function TwitterNode({ data }) {
  const [currentTime, setCurrentTime] = useState(0);

  const handleChange = (event) => {
    setCurrentTime(event.target.value);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ height: 80, objectFit: 'contain' }}
        image={TwitterLogo}
        title="twitter logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Twitter
        </Typography>
        <Typography className="mb-10" variant="body2" color="text.secondary">
          Enter the bearer token, twitter ID, keyword and start date for
          searching
        </Typography>
        <div className="mt-4">
          <TextField
            id="outlined-basic"
            label="Bearer Token"
            variant="outlined"
            size="small"
            sx={{ width: '100%' }}
          />
        </div>
        <div className="mt-4">
          <TextField
            id="outlined-basic"
            label="Account ID"
            variant="outlined"
            size="small"
            sx={{ width: '100%' }}
          />
        </div>
        <div className="mt-4">
          <TextField
            id="outlined-basic"
            label="Keyword"
            variant="outlined"
            size="small"
            sx={{ width: '100%' }}
          />
        </div>
        <div className="mt-4">
          <InputLabel id="demo-simple-select-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Time"
            value={currentTime}
            onChange={handleChange}
            sx={{ width: '100%', height: '40px' }}
          >
            <MenuItem value={currentTime}>From Current Time</MenuItem>
          </Select>
        </div>
      </CardContent>
      <CardActions></CardActions>
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 rounded-full bg-black"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 rounded-full bg-black"
      />
    </Card>
  );
}

export default memo(TwitterNode);
