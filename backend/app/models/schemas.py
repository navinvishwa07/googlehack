from pydantic import BaseModel
from typing import List
from datetime import datetime


class Coordinates(BaseModel):
    lat: float
    lng: float


class Location(BaseModel):
    name: str
    lat: float
    lng: float


class ReRouteOption(BaseModel):
    id: str
    description: str
    eta_delta_hours: float
    cost_delta_inr: float
    risk_score: float
    via: str


class Shipment(BaseModel):
    id: str
    origin: Location
    destination: Location
    currentLocation: Coordinates
    status: str  # "in_transit" | "delayed" | "delivered"
    riskScore: float  # 0.0–1.0
    eta: datetime
    carrier: str
    highway: str
    rerouteOptions: List[ReRouteOption] = []


class Alert(BaseModel):
    id: str
    shipmentId: str
    message: str
    severity: str  # "low" | "medium" | "high"
    timestamp: datetime
