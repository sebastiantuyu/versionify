const versionify = {
  nextPatch: function (version: string) {
    if(!this.isValid(version)) {
      throw new Error("Version string is not properly formated");
    }

    const [major, minor, patch] = version.split(".").map(Number);
    return `${major}.${minor}.${patch + 1}`;
  },
  nextMinor: function (version: string) {
    if(!this.isValid(version)) {
      throw new TypeError("Version string is not properly formated");
    }

    const [major, minor, patch] = version.split(".").map(Number);
    return `${major}.${minor + 1}.${patch}`;
  },
  nextMajor: function (version: string) {
    if(!this.isValid(version)) {
      throw new TypeError("Version string is not properly formated");
    }

    const [major, minor, patch] = version.split(".").map(Number);
    return `${major + 1}.${minor}.${patch}`;
  },
  setVersion: function (version: string) {},
  getVersion: function (version: string) {},
  previousPatch: function (version: string) {
    if(!this.isValid(version)) {
      throw new TypeError("Version string is not properly formated");
    }

    const [major, minor, patch] = version.split(".").map(Number);
    if(patch === 0) {
      return `${major}.${minor}.${patch}`;
    }
    return `${major}.${minor}.${patch - 1}`;
  },
  previousMinor: function (version: string) {
    if(!this.isValid(version)) {
      throw new TypeError("Version string is not properly formated");
    }

    const [major, minor, patch] = version.split(".").map(Number);
    if(minor === 0) {
      return `${major}.${minor}.${patch}`;
    }
    return `${major}.${minor - 1}.${patch}`;
  },
  previousMajor: function (version: string) {
    if(!this.isValid(version)) {
      throw new TypeError("Version string is not properly formated");
    }

    const [major, minor, patch] = version.split(".").map(Number);
    if(major === 0) {
      return `${major}.${minor}.${patch}`;
    }
    return `${major - 1}.${minor}.${patch}`;
  },
  isValid: function (version: string): boolean {
    return /\d{1,2}\.\d{1,2}\.\d{1,3}/g.test(version);
  },
};

module.exports = versionify;
