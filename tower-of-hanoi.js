class TowerOfHanoi {
  constructor(numberOfTowers, numberOfDisks) {
    this.towers = [];

    for (let i = 0; i < numberOfTowers; i++) {
      this.towers.push(new Tower());
    }

    for (let i = numberOfDisks; i > 0; i--) {
      this.towers[0].disks.unshift(new Disk(i));
    }
  }

  move(fromTower, toTower) {
    if (!(fromTower in this.towers)) {
      throw new Error('Invalid Movement: Origin tower is out of bounds');
    }
    if (!this.towers[fromTower].hasDisks()) {
      throw new Error('Invalid Movement: Origin tower is empty');
    }
    if (this.towers[toTower].hasDisks() && this.towers[toTower].disks[0].size < this.towers[fromTower].disks[0].size) {
      throw new Error('Invalid Movement: A disk cannot be in the top of a smaller disk');
    }

    let disk = this.towers[fromTower].disks.shift();
    this.towers[toTower].disks.unshift(disk);
  }

  autoMove() {
    if (this.towers[0].disks.length == 4) {
      this.move(0, 1);
    } else if (this.towers[0].disks.length == 3) {
      this.move(0, 2);
    } else if (this.towers[2].disks.length == 1) {
      this.move(1, 2);
    }
  }

  toArray() {
    let towers = [];

    this.towers.forEach(tower => {
      towers.push(tower.toArray());
    });

    return towers;
  }
}

class Tower {
  constructor() {
    this.disks = [];
  }

  hasDisks() {
    return this.disks.length > 0;
  }

  toArray() {
    let disks = [];

    this.disks.forEach(disk => {
      disks.push(disk.size);
    });

    return disks;
  }
}

class Disk {
  constructor(size) {
    this.size = size;
  }
}

module.exports = TowerOfHanoi;
