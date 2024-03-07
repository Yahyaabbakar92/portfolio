import { promises as fs } from 'fs'

export async function getProjects() {
    const file = await fs.readFile(
        process.cwd() + '/data/projects.json',
        'utf8'
    )
    const data = JSON.parse(file)

    return data
}
