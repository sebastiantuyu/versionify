//@ts-ignore
import versionify from ".";

describe("Should parse properly version string", () => {
  it("next patch but from package json", () => {
    expect(versionify.nextPatch()).toBe("1.2.4");
  });

  it("next patch", () => {
    expect(versionify.nextPatch("1.2.3")).toBe("1.2.4");
  });

  it("next minor", () => {
    expect(versionify.nextMinor("1.2.3")).toBe("1.3.3");
  });

  it("next major", () => {
    expect(versionify.nextMajor("1.2.3")).toBe("2.2.3");
  });

  it("previous patch", () => {
    expect(versionify.previousPatch("1.2.3")).toBe("1.2.2");
  });

  it("previous patch but not negative", () => {
    expect(versionify.previousPatch("1.2.0")).toBe("1.2.0");
  });

  it("previous minor", () => {
    expect(versionify.previousMinor("1.2.3")).toBe("1.1.3");
  });

  it("previous minor but not negative", () => {
    expect(versionify.previousPatch("1.0.0")).toBe("1.0.0");
  });

  it("previous major", () => {
    expect(versionify.previousMajor("1.2.3")).toBe("0.2.3");
  });

  it("previous major but not negative", () => {
    expect(versionify.previousPatch("0.2.0")).toBe("0.2.0");
  });

  it("should trigger error if version string is not properly formated", () => {
    expect(() => {
      versionify.nextPatch("000")
    }).toThrow("Version string is not properly formated");
  });
});
