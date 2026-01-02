export async function getProjects() {
  const response = await fetch('http://localhost:8080/projects')
  return response.json()
}
