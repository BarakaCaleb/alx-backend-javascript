export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  // Optionally, you can add a getter to access the _maxStudentsSize property
  get maxStudentsSize() {
    return this._maxStudentsSize;
  }
}
