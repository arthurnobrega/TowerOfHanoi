class TowerOfHanoi {
  constructor(numberOfTowers, numberOfDisks) {
    this.towers = [];

    for (let i = 0; i < numberOfTowers; i++) {
      this.towers.push(new Tower());
    }

    for (let i = numberOfDisks; i > 0; i--) {
      this.towers[0].disks.unshift(new Disk(i - 1));
    }
  }

  move(fromTower, toTower) {
    if (!(fromTower in this.towers)) {
      return 'invalid';
    }
    if (!(fromTower in this.towers)) {
      return 'invalid';
    }
    if (!this.towers[fromTower].hasDisks()) {
      return 'invalid';
    }
    if (this.towers[toTower].hasDisks() && this.towers[toTower].disks[0].size > this.towers[fromTower].disks[0].size) {
      return 'invalid';
    }

    let disk = this.towers[fromTower].disks.pop();
    this.towers[toTower].disks.unshift(disk);

    return 'valid';
  }

  disksPerTower() {
    let disks = [];

    this.towers.forEach(tower => {
      disks.push(tower.disks.length);
    });

    return disks;
  }
}

class Tower {
  constructor() {
    this.disks = [];
  }

  hasDisks() {
    return this.disks.length > 0;
  }
}

class Disk {
  constructor(size) {
    this.size = size;
  }
}

module.exports = TowerOfHanoi;
