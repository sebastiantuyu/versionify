"use strict";
const changeVersion = (version, patchModifier = 0, minorModifier = 0, majorModifier = 0) => {
    const [major, minor, patch] = version.split(".").map(Number);
    return `${major + majorModifier}.${minor + minorModifier}.${patch + patchModifier}`;
};
const throwIfNotValid = (version) => {
    if (!versionify.isValid(version)) {
        throw new Error("Version string is not properly formated");
    }
};
const versionify = {
    nextPatch: function (version) {
        throwIfNotValid(version);
        return changeVersion(version, 1, 0, 0);
    },
    nextMinor: function (version) {
        throwIfNotValid(version);
        return changeVersion(version, 0, 1, 0);
    },
    nextMajor: function (version) {
        throwIfNotValid(version);
        return changeVersion(version, 0, 0, 1);
    },
    setVersion: function (version) { },
    getVersion: function (version) { },
    previousPatch: function (version) {
        throwIfNotValid(version);
        const [, , patch] = version.split(".").map(Number);
        if (patch === 0) {
            return version;
        }
        return changeVersion(version, -1, 0, 0);
    },
    previousMinor: function (version) {
        throwIfNotValid(version);
        const [, minor,] = version.split(".").map(Number);
        if (minor === 0) {
            return version;
        }
        return changeVersion(version, 0, -1, 0);
    },
    previousMajor: function (version) {
        throwIfNotValid(version);
        const [major, ,] = version.split(".").map(Number);
        if (major === 0) {
            return version;
        }
        return changeVersion(version, 0, 0, -1);
    },
    isValid: function (version) {
        return /\d{1,2}\.\d{1,2}\.\d{1,3}/g.test(version);
    },
};
module.exports = versionify;
