class Step {
  constructor(dx, dy) {
    this.dx = dx;
    this.dy = dy;
    this.tried = false;
  }
}

function allOptions() {
  return [new Step(1, 0), new Step(-1, 0), new Step(0, 1), new Step(0, -1)];
}

class Spot {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.x = i * spacing;
    this.y = j * spacing;
    this.options = allOptions();
    this.visited = false;
  }

  clear() {
    this.visited = false;
    this.options = allOptions();
  }

  nextSpot() {
    let validOptions = [];
    for (let option of this.options) {
      let newX = this.i + option.dx;
      let newY = this.j + option.dy;
      if (isValid(newX, newY) && !option.tried) {
        validOptions.push(option);
      }
    }

    if (validOptions.length > 0) {
      let step = random(validOptions);
      step.tried = true;
      return grid[this.i + step.dx][this.j + step.dy];
    }
    return undefined;
  }
}
