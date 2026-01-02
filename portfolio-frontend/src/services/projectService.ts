const API_URL = import.meta.env.VITE_API_URL;

export async function fetchProjects() {
  const response = await fetch(`${API_URL}/api/projects`);
  return response.json();
}
