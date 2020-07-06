import {ReactNode} from 'react'

export type JobsInput = {
    type: string,       // city, remote, country
    slug: string
}

export type Props = {
    children: ReactNode
}

export type Job = {
    applyUrl: string,
    cities: Names,
    commitment: {title: string},
    company: {
        name: string,
        logoUrl: (string | null),
    }
    countries: Names,
    description: string,
    slug: string,
    tags: Names,
    title: string,
}

type Names = [{
    name: string,
}]