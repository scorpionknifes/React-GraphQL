import React, { useState, useEffect, createContext } from 'react'
import { Props, JobsInput, Job, JobsContextType, LocationsInput } from '../Common/Types'
import JobsQuery from '../GraphQL/JobsQuery'
import LocationQuery from '../GraphQL/SearchQuery'
import { useQuery } from '@apollo/react-hooks'

const JobsContext = createContext({} as JobsContextType);

const JobsProvider = ({ children }: Props) => {

    const [jobs, setJobs] = useState<Job[] | null>(null)

    const [searchQuery, setSearchQuery] = useState<LocationsInput | null>(null)
    const [slug, setSlug] = useState("")
    const [type, setType] = useState("")
    const [loading, setLoading] = useState(true)
    const input: JobsInput = { slug, type }
    const jobQuery = useQuery(JobsQuery, {
        variables: { input }
    })

    const locationQuery = useQuery(LocationQuery, {
        variables: { input: searchQuery }
    })

    useEffect(() => {
        const { loading, error, data } = jobQuery
        if (!error && !loading && data) {
            setJobs(data.jobs.reverse())
            console.log(data.jobs)
        }
    }, [jobQuery]);

    useEffect(() => {
        const { loading, error, data } = locationQuery
        if (!error && !loading && data) {
            const { locations } = data
            console.log(locations)
            if (locations.length === 0) {
                console.log("no results")
                setJobs(null)
                return
            }
            setSlug(locations[0].slug)
            setType(locations[0].type)
        }
    }, [locationQuery])

    useEffect(() => {
        setLoading(jobQuery.loading || locationQuery.loading)
    }, [jobQuery.loading, locationQuery.loading])

    const handleSearch = (search: string) => {
        setJobs([])
        setSearchQuery({ value: search })
    }

    return (
        <JobsContext.Provider value={{
            loading,
            slug, setSlug,
            type, setType,
            jobs, setJobs,
            handleSearch,
        }}>
            {children}
        </JobsContext.Provider>
    );
};

export { JobsContext, JobsProvider }