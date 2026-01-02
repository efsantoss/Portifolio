export async function fetchProjects() {
  const response = await fetch("http://localhost:8080/api/projects");
  return response.json();
}
