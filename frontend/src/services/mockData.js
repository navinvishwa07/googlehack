export const mockShipments = [
  {
    id: "SHP-001",
    origin: { name: "Mumbai", lat: 19.076, lng: 72.877 },
    destination: { name: "Delhi", lat: 28.613, lng: 77.209 },
    currentLocation: { lat: 23.18, lng: 75.78 },
    status: "in_transit",
    riskScore: 0.82,
    eta: "2026-04-17T10:00:00Z",
    carrier: "Bluedart",
    highway: "NH-44",
    rerouteOptions: []
  },
  {
    id: "SHP-002",
    origin: { name: "Chennai", lat: 13.082, lng: 80.27 },
    destination: { name: "Hyderabad", lat: 17.385, lng: 78.486 },
    currentLocation: { lat: 14.67, lng: 79.99 },
    status: "delayed",
    riskScore: 0.55,
    eta: "2026-04-16T18:00:00Z",
    carrier: "DTDC",
    highway: "NH-65",
    rerouteOptions: []
  },
  {
    id: "SHP-003",
    origin: { name: "Kolkata", lat: 22.572, lng: 88.363 },
    destination: { name: "Patna", lat: 25.594, lng: 85.137 },
    currentLocation: { lat: 24.1, lng: 87.2 },
    status: "in_transit",
    riskScore: 0.21,
    eta: "2026-04-15T08:00:00Z",
    carrier: "FedEx",
    highway: "NH-12",
    rerouteOptions: []
  }
]
