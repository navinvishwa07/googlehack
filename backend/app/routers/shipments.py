from fastapi import APIRouter
from app.models.schemas import Shipment
from typing import List
import json, os

router = APIRouter(prefix="/shipments", tags=["shipments"])

def _load_mock() -> list:
    path = os.path.join(os.path.dirname(__file__), "../data/mock_shipments.json")
    with open(path) as f:
        return json.load(f)

@router.get("/", response_model=List[Shipment])
def get_shipments():
    return _load_mock()

@router.get("/{shipment_id}", response_model=Shipment)
def get_shipment(shipment_id: str):
    return next(s for s in _load_mock() if s["id"] == shipment_id)
