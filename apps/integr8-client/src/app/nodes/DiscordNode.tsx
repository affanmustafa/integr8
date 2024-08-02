import React, { memo } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Handle, Position } from 'reactflow';
import DiscordLogo from '../../assets/Discord.png';
import { TextField } from '@mui/material';

function DiscordNode({ data }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        sx={{ height: 80, objectFit: 'contain' }}
        image={DiscordLogo}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Discord
        </Typography>
        <Typography className="mb-10" variant="body2" color="text.secondary">
          Enter the webhook URL of your Discord integration and the message to
          be sent
        </Typography>
        <div className="mt-4">
          <TextField
            id="outlined-basic"
            label="Webhook URL"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="mt-4">
          <TextField
            id="outlined-basic"
            label="Message content"
            variant="outlined"
            size="small"
          />
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

export default memo(DiscordNode);
