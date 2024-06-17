const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, 'telegram')}
        draggable
      >
        Telegram Node
      </div>
      <div
        className="dndnode"
        onDragStart={(event) => onDragStart(event, 'notion')}
        draggable
      >
        Notion Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, 'ethbalancetransfer')}
        draggable
      >
        Ethereum Transfer Node
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, 'twitter')}
        draggable
      >
        Twitter
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, 'ethbalancetrigger')}
        draggable
      >
        Ethereum Balance
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, 'discord')}
        draggable
      >
        Discord
      </div>
    </aside>
  );
};

export default Sidebar;
