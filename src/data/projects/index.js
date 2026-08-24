import { webDeveloper } from "./WebDeveloper/webDeveloper.js";

export const allProjects = [...webDeveloper];

export const categories = ["Desarrollo Web"];

export function getFavoriteProjects() {
  return allProjects.filter((project) => project.favorite);
}
