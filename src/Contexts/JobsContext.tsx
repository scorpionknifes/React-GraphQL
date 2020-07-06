import React, { useState, useEffect, createContext } from 'react'
import { Props, JobsInput, Job, JobsContextType } from '../Common/Types'
import JobsQuery from '../GraphQL/JobsQuery';
import { useQuery } from '@apollo/react-hooks';

const JobsContext = createContext({} as JobsContextType);

const JobsProvider = ({ children }: Props) => {

    const [jobs, setJobs] = useState<Job[]|null>(null)
    const [search, setSearch] = useState("")
    const [slug, setSlug] = useState("")
    const [type, setType] = useState("")
    const input: JobsInput = { slug, type }
    const { loading, error, data } = useQuery(JobsQuery, {
        variables: { input }
    })

    useEffect(() => {
        if (error == null && data != null) {
            setJobs(data.jobs)
            console.log(data.jobs)
        }
    }, [data, error]);

    return (
        <JobsContext.Provider value={{
            search, setSearch,
            slug, setSlug,
            type, setType,
            jobs
        }}>
            {children}
        </JobsContext.Provider>
    );
};

export {JobsContext, JobsProvider}