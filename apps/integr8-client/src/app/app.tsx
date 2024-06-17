import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  ReactFlowProvider,
  Node,
  Connection,
  Edge,
} from 'reactflow';

import Sidebar from './components/sidebar';
import TwitterNode from './nodes/TwitterNode';

import 'reactflow/dist/style.css';
import { useCallback, useRef, useState } from 'react';
import DiscordNode from './nodes/DiscordNode';
import BalanceTriggerNode from './nodes/BalanceTriggerNode';
import BalanceTransferNode from './nodes/BalanceTransferNode';
import NotionNode from './nodes/NotionNode';
import TelegramNode from './nodes/TelegramNode';

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeTypes = {
  twitter: TwitterNode,
  ethbalancetrigger: BalanceTriggerNode,
  discord: DiscordNode,
  ethbalancetransfer: BalanceTransferNode,
  notion: NotionNode,
  telegram: TelegramNode,
};

function App() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((edges) => addEdge(params, edges)),
    [setEdges]
  );

  const onDragOver = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { dropEffect: string };
    }) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    },
    []
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      console.log('type: ', type);

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      let newDropNode: Node;
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      if (type === 'twitter') {
        newDropNode = {
          id: getId(),
          type: 'twitter',
          position,
          data: { label: `Twitter Node` },
        };
      } else if (type === 'discord') {
        newDropNode = {
          id: getId(),
          type: 'discord',
          position,
          data: { label: `Discord Node` },
        };
      } else if (type === 'ethbalancetrigger') {
        newDropNode = {
          id: getId(),
          type: 'ethbalancetrigger',
          position,
          data: { label: `Ethereum Balance Trigger Node` },
        };
      } else if (type === 'ethbalancetransfer') {
        newDropNode = {
          id: getId(),
          type: 'ethbalancetransfer',
          position,
          data: { label: `Ethereum Balance Transfer Node` },
        };
      } else if (type === 'notion') {
        newDropNode = {
          id: getId(),
          type: 'notion',
          position,
          data: { label: `Notion Node` },
        };
      } else if (type === 'telegram') {
        newDropNode = {
          id: getId(),
          type: 'telegram',
          position,
          data: { label: `Telegram Node` },
        };
      } else {
        // For other nodes, create a new node with the same type as the dropped element
        newDropNode = {
          id: getId(),
          type,
          position,
          data: { label: `${type} node` },
        };
      }

      setNodes((nodes) => nodes.concat(newDropNode));
    },
    [reactFlowInstance, setNodes]
  );

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}></div>
        <Sidebar />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <Background variant="dots" />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
