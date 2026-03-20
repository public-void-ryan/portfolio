import { describe, it, expect } from "vitest";
import { name, title, links, skills, experience, education, certs } from "./resume";

describe("resume data", () => {
  it("has name and title", () => {
    expect(name).toBeTruthy();
    expect(title).toBeTruthy();
  });

  describe("links", () => {
    it("has GitHub and LinkedIn", () => {
      const labels = links.map((l) => l.label);
      expect(labels).toContain("GitHub");
      expect(labels).toContain("LinkedIn");
    });

    it("every link has href and icon", () => {
      for (const link of links) {
        expect(link.href).toMatch(/^https?:\/\//);
        expect(link.icon).toBeTruthy();
      }
    });
  });

  describe("skills", () => {
    it("has expected categories", () => {
      expect(skills).toHaveProperty("Languages");
      expect(skills).toHaveProperty("Protocols & APIs");
      expect(skills).toHaveProperty("Tools");
      expect(skills).toHaveProperty("Linux");
    });

    it("every category is a non-empty array of strings", () => {
      for (const [, tags] of Object.entries(skills)) {
        expect(Array.isArray(tags)).toBe(true);
        expect(tags.length).toBeGreaterThan(0);
        for (const tag of tags) {
          expect(typeof tag).toBe("string");
        }
      }
    });
  });

  describe("experience", () => {
    it("has at least one employer", () => {
      expect(experience.length).toBeGreaterThan(0);
    });

    it("every employer has company, location, and roles", () => {
      for (const co of experience) {
        expect(co.company).toBeTruthy();
        expect(co.location).toBeTruthy();
        expect(co.roles.length).toBeGreaterThan(0);
      }
    });

    it("every role has title, period, and bullets", () => {
      for (const co of experience) {
        for (const role of co.roles) {
          expect(role.title).toBeTruthy();
          expect(role.period).toBeTruthy();
          expect(role.bullets.length).toBeGreaterThan(0);
        }
      }
    });
  });

  describe("education", () => {
    it("has at least one degree", () => {
      expect(education.length).toBeGreaterThan(0);
    });

    it("every entry has degree, school, and date", () => {
      for (const e of education) {
        expect(e.degree).toBeTruthy();
        expect(e.school).toBeTruthy();
        expect(e.date).toBeTruthy();
      }
    });
  });

  describe("certs", () => {
    it("every cert has name and date", () => {
      for (const cert of certs) {
        expect(cert.name).toBeTruthy();
        expect(cert.date).toBeTruthy();
      }
    });
  });
});
