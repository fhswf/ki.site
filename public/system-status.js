const statusLabels = {
    operational: "verfügbar",
    degraded: "Status unklar",
    outage: "gestört",
    unknown: "Status unbekannt",
};

const getLatestResult = (endpoint) =>
    Array.isArray(endpoint.results) && endpoint.results.length > 0
        ? endpoint.results[endpoint.results.length - 1]
        : null;

const getEndpointState = (endpoint) => {
    const latest = endpoint ? getLatestResult(endpoint) : null;

    if (!latest) {
        return "unknown";
    }

    if (latest.success === true) {
        return "operational";
    }

    return "outage";
};

const hasRecentOutage = (endpoint) => {
    const twoHoursAgo = Date.now() - 2 * 60 * 60 * 1000;

    if (!Array.isArray(endpoint.results)) {
        return false;
    }

    return endpoint.results.some((result) => {
        const timestamp = new Date(result.timestamp).getTime();

        return (
            Number.isFinite(timestamp) &&
            timestamp >= twoHoursAgo &&
            result.success !== true
        );
    });
};

const getGroupState = (endpoints) => {
    const endpointStates = endpoints.map(getEndpointState);

    if (endpointStates.length === 0 || endpointStates.includes("unknown")) {
        return "degraded";
    }

    if (endpointStates.some((state) => state === "outage")) {
        return "outage";
    }

    if (endpoints.some(hasRecentOutage)) {
        return "degraded";
    }

    return "operational";
};

const setServiceStatus = (service, state) => {
    service.dataset.status = state;

    const label = statusLabels[state] ?? statusLabels.unknown;
    const serviceName =
        service.querySelector("span:not(.system-status__dot)")?.textContent ??
        "Service";
    const statusText = service.querySelector(".sr-only");

    if (statusText) {
        statusText.textContent = `${serviceName}: ${label}`;
    }

    service.title = `${serviceName}: ${label}`;
};

const loadSystemStatus = async () => {
    const services = document.querySelectorAll("[data-status-group]");

    try {
        const response = await fetch(
            "https://status.fh-swf.cloud/api/v1/endpoints/statuses",
            {
                cache: "no-store",
                headers: {
                    accept: "application/json",
                },
            },
        );

        if (!response.ok) {
            throw new Error(`Gatus returned ${response.status}`);
        }

        const endpoints = await response.json();

        services.forEach((service) => {
            const groupEndpoints = endpoints.filter(
                (endpoint) => endpoint.group === service.dataset.statusGroup,
            );

            setServiceStatus(service, getGroupState(groupEndpoints));
        });
    } catch {
        services.forEach((service) => setServiceStatus(service, "degraded"));
    }
};

loadSystemStatus();
