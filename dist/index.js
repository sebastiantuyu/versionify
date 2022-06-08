"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versionify = {
    nextPatch: function (version) {
        if (!this.isValid(version)) {
            throw new Error("Version string is not properly formated");
        }
        const [major, minor, patch] = version.split(".").map(Number);
        return `${major}.${minor}.${patch + 1}`;
    },
    nextMinor: function (version) {
        if (!this.isValid(version)) {
            throw new TypeError("Version string is not properly formated");
        }
        const [major, minor, patch] = version.split(".").map(Number);
        return `${major}.${minor + 1}.${patch}`;
    },
    nextMajor: function (version) {
        if (!this.isValid(version)) {
            throw new TypeError("Version string is not properly formated");
        }
        const [major, minor, patch] = version.split(".").map(Number);
        return `${major + 1}.${minor}.${patch}`;
    },
    setVersion: function (version) { },
    getVersion: function (version) { },
    previousPatch: function (version) {
        if (!this.isValid(version)) {
            throw new TypeError("Version string is not properly formated");
        }
        const [major, minor, patch] = version.split(".").map(Number);
        if (patch === 0) {
            return `${major}.${minor}.${patch}`;
        }
        return `${major}.${minor}.${patch - 1}`;
    },
    previousMinor: function (version) {
        if (!this.isValid(version)) {
            throw new TypeError("Version string is not properly formated");
        }
        const [major, minor, patch] = version.split(".").map(Number);
        if (minor === 0) {
            return `${major}.${minor}.${patch}`;
        }
        return `${major}.${minor - 1}.${patch}`;
    },
    previousMajor: function (version) {
        if (!this.isValid(version)) {
            throw new TypeError("Version string is not properly formated");
        }
        const [major, minor, patch] = version.split(".").map(Number);
        if (major === 0) {
            return `${major}.${minor}.${patch}`;
        }
        return `${major - 1}.${minor}.${patch}`;
    },
    isValid: function (version) {
        return /\d{1,2}\.\d{1,2}\.\d{1,3}/g.test(version);
    },
};
exports.default = versionify;
