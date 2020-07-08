import { ReactNode } from 'react'

export type JobsInput = {
    type: string,       // city, remote, country
    slug: string
}

export type LocationsInput = {
    value: string
}

export type Props = {
    children: ReactNode
}

export type Job = {
    applyUrl: string,
    cities: Names[],
    commitment: { title: string },
    company: {
        name: string,
        logoUrl: (string | null),
    }
    countries: Names[],
    description: string,
    slug: string,
    tags: Names[],
    title: string,
}

export type JobsContextType = {
    loading: boolean,
    slug: string, setSlug: (a: string) => void,
    type: string, setType: (a: string) => void,
    jobs: Job[] | null, setJobs: (a: Job[] | null) => void,
    handleSearch: (a: string) => void,
}

type Names = {
    name: string,
}