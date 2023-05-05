import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

export default function ClusterStatus() {
    const [data, setData] = useState({ workflow_runs: [{ conclusion: "unknown" }] });

    //curl -v -H "Authorization: Bearer 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" -H "Accept: application/vnd.github+json"  'https://api.github.com/repos/fhswf/kicluster-deployments/actions/runs?event=schedule'
    fetch('https://api.github.com/repos/fhswf/kicluster-deployments/actions/runs?event=schedule', {
        headers: {
            "Authorization": "Bearer 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",
            "Accept": "application/vnd.github+json"
        }
    })
        .then(response => response.json())
        .then(data => setData(data));

    let state = data?.workflow_runs[0]?.conclusion || "unknown";

    return (
        <a href={data?.workflow_runs[0]?.html_url} className={["cluster_state", state].join(" ")} target="_empty">
            Cluster Status
        </a>
    );
}