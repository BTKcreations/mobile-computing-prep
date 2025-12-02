import { useState, useEffect } from 'react'

export function useGitHubCommits(repoOwner, repoName) {
    const [commits, setCommits] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCommits = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits?per_page=15`)
                if (!response.ok) {
                    throw new Error('Failed to fetch commits')
                }
                const data = await response.json()
                setCommits(data)
                setLoading(false)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        fetchCommits()
    }, [repoOwner, repoName])

    return { commits, loading, error }
}
