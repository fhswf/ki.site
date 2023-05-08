import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export default function ClusterStatus() {
    const [data, setData] = useState<any>();

    let updateData = () => {
        //curl -v -H "Authorization: Bearer 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" -H "Accept: application/vnd.github+json"  'https://api.github.com/repos/fhswf/kicluster-deployments/actions/runs?event=schedule'
        fetch('https://api.github.com/repos/fhswf/kicluster-deployments/actions/runs?event=schedule', {
            headers: {
                "Authorization": "Bearer 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",
                "Accept": "application/vnd.github+json"
            }
        })
            .then(response => response.json())
            .then(data => setData(data.workflow_runs.filter((run: any) => run.status === "completed")[0]));
    }
    //updateData();

    useEffect(() => {
        const interval = setInterval(updateData, 10000);
        return () => clearInterval(interval);
    }, [data]);

    let state = data?.conclusion || "unknown";

    return (
        <>
            <a href={data?.html_url} target="_empty">
                Cluster Status:
            </a>
            &nbsp;<span className={["cluster_state", state].join(" ")}><div className={["cluster_state", state].join(" ")} /></span>
        </>
    );
}