export function checkCollision(position, radius, obstacles) {
  return obstacles.some((obstacle) => {
    return (
      position.x + radius > obstacle.minX &&
      position.x - radius < obstacle.maxX &&
      position.z + radius > obstacle.minZ &&
      position.z - radius < obstacle.maxZ
    );
  });
}
