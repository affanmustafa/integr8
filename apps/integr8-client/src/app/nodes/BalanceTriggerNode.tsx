import React, { memo, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Handle, Position } from 'reactflow';
import EthereumLogo from '../../assets/Ethereum.png';
import { NativeSelect, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

function BalanceTriggerNode() {
  const [provider, setProvider] = useState('Sepolia Alchemy');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProvider(event.target.value as string);
  };

  useEffect(() => {
    console.log(provider);
  }, [provider]);

  return (
    <Card sx={{ maxWidth: 345 }} className="parent-card">
      <CardMedia
        component="img"
        sx={{ height: 80, objectFit: 'contain' }}
        image={EthereumLogo}
        title="ethereum logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ethereum Balance Trigger
        </Typography>
        <Typography className="mb-10" variant="body2" color="text.secondary">
          Enter the network, RPC provider, Alchemy API key and wallet address.
        </Typography>
        <div className="mt-4">
          <TextField
            id="outlined-basic"
            label="Wallet Address"
            variant="outlined"
            size="small"
            sx={{ width: '100%' }}
          />
        </div>
        <div className="mt-4">
          <InputLabel variant="standard" htmlFor="network-provider">
            Network & Provider
          </InputLabel>
          <NativeSelect
            defaultValue="Sepolia Alchemy"
            inputProps={{
              name: 'provider',
              id: 'network-provider',
            }}
            disabled
            fullWidth
            onChange={(event) => handleChange(event)}
          >
            <option value="Sepolia Alchemy">Sepolia Alchemy</option>
            <option value="Mainnet Alchemy">Mainnet Alchemy</option>
          </NativeSelect>
        </div>
        <div className="mt-4">
          <TextField
            id="outlined-basic"
            label="Alchemy API Key"
            variant="outlined"
            size="small"
            sx={{ width: '100%' }}
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

export default memo(BalanceTriggerNode);
