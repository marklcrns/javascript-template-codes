
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// adjust canvas to window height and width
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
canvas.width = screenWidth;
canvas.height = screenHeight;

function canvasGrid(gridLines) {
  // Grid lines
  const canvasMaxWidth = screenWidth;
  const canvasMaxHeight = screenHeight;
  const canvasMinWidth = 1;
  const canvasMinHeight = 1;
  const canvasLowerBound = canvasMaxHeight - canvasMinHeight;
  const canvasUpperBound = canvasMinHeight;
  const canvasLeftBound = canvasMinWidth;
  const canvasRightBound = canvasMaxWidth - canvasMinWidth;
  const canvasXRange = canvasMaxWidth - canvasMinWidth + 1;
  const canvasYRange = canvasMaxHeight - canvasMinHeight + 1;
  const canvasXCenter = canvasMaxWidth / 2;
  const canvasYCenter = canvasMaxHeight / 2;
  const gridSpacing = canvasXRange / gridLines;

  // ====================CENTER GRIDS==================== //
  c.beginPath();
  c.moveTo(canvasXCenter, canvasLowerBound);
  c.lineTo(canvasXCenter, canvasUpperBound);
  c.moveTo(canvasLeftBound, canvasYCenter);
  c.lineTo(canvasRightBound, canvasYCenter);
  c.strokeStyle = '#ff0';
  c.stroke();
  c.closePath();

  // //====================VERTICAL GRID==================== //
  c.beginPath();
  for (let i = 0; i < gridLines; i += 1) {
    // From left to right, draw vertical grid in upward stroke
    const startXPosition = canvasLeftBound + gridSpacing + gridSpacing * i;
    const startYPosition = canvasLowerBound;
    const endXPosition = canvasLeftBound + gridSpacing + gridSpacing * i;
    const endYPosition = canvasUpperBound;
    c.moveTo(startXPosition, startYPosition);
    c.lineTo(endXPosition, endYPosition);
  }

  // ====================HORIZONTAL GRID==================== //
  // Center horizontal grid
  const hGridLines = canvasYRange / gridSpacing;
  const hGridLinesRange = hGridLines * gridSpacing;
  // horizontal padding for centering
  const offset = (canvasYRange - hGridLinesRange) / 2;

  for (let i = 0; i <= hGridLines; i += 1) {
    const startXPosition = canvasLeftBound;
    const startYPosition = canvasUpperBound + offset + gridSpacing * i;
    const endXPosition = canvasRightBound;
    const endYPosition = canvasUpperBound + offset + gridSpacing * i;
    c.moveTo(startXPosition, startYPosition);
    c.lineTo(endXPosition, endYPosition);
  }

  c.strokeStyle = '#000000';
  c.stroke();
  c.closePath();
}

canvasGrid(50);
