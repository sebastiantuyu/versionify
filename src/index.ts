const path = require("path");
const fs = require("fs");

const changeVersion = (
  version: string,
  versionModifier: number[] = [0, 0, 0]
) => {
  const [major, minor, patch] = version.split(".").map(Number);
  return `${major + versionModifier[0]}.${minor + versionModifier[1]}.${patch + versionModifier[2]}`;
};

const throwIfNotValid = (version: string) => {
  if(!versionify.isValid(version)) {
    throw new Error("Version string is not properly formated");
  }
};

const updatePackageJson = (version: string) => {
  try {
    let packageJsonPath = path.join(__dirname, "package.json");
    if(!fs.existsSync(packageJsonPath)) {
      packageJsonPath = path.join(__dirname, "/../package.json");
      if(!fs.existsSync(packageJsonPath)) {
        throw new Error("package.json not found");
      }
    }
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    packageJson.version = version;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  } catch (e) {
    console.error(e);
  }
}

const getActualVersion = () => {
  try {
    let packageJsonPath = path.join(__dirname, "package.json");
    if(!fs.existsSync(packageJsonPath)) {
      packageJsonPath = path.join(__dirname, "/../package.json");
      if(!fs.existsSync(packageJsonPath)) {
        throw new Error("package.json not found");
      }
    }
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    return packageJson.version;
  } catch (e) {
    console.error(e);
  }
}

const defaultHandler = (
  version: string,
  versionModifier: number[] = [0, 0, 0],
  updatePackageFile: boolean = false) => {
  let willBreak = false;
  if(version !== "") {
    throwIfNotValid(version);
    // handle if some number is negative
      if(versionModifier.some(v => v < 0)) {
        willBreak = (version.split(".").map(Number)
          .some((v, i) => (v + versionModifier[i]) < 0));
      }
      let newVersion = "0.0.0";
      if(willBreak) {
        newVersion = changeVersion(version);
      } else {
        newVersion = changeVersion(version, versionModifier);
      }
    if(updatePackageFile) updatePackageJson(newVersion);
    return newVersion;
  } else {
    const actualVersion = getActualVersion();
    const newVersion = changeVersion(actualVersion, versionModifier);
    updatePackageJson(newVersion);
    return newVersion;
  }
}

const versionify = {
  nextPatch: function (version: string = "", updatePackageFile: boolean = false) {
    return defaultHandler(version, [0, 0, 1], updatePackageFile);
  },
  nextMinor: function (version: string = "", updatePackageFile: boolean = false) {
    return defaultHandler(version, [0, 1, 0], updatePackageFile);
  },
  nextMajor: function (version: string = "", updatePackageFile: boolean = false) {
    return defaultHandler(version, [1, 0, 0], updatePackageFile);
  },
  previousPatch: function (version: string = "", updatePackageFile: boolean = false) {
    return defaultHandler(version, [0, 0, -1], updatePackageFile);
  },
  previousMinor: function (version: string = "", updatePackageFile: boolean = false) {
    return defaultHandler(version, [0, -1, 0], updatePackageFile);
  },
  previousMajor: function (version: string = "", updatePackageFile: boolean = false) {
    return defaultHandler(version, [-1, 0, 0], updatePackageFile);
  },
  isValid: function (version: string): boolean {
    return /\d{1,2}\.\d{1,2}\.\d{1,3}/g.test(version);
  },
};

module.exports = versionify;
