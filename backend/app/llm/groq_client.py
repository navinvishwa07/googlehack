from groq import Groq
from app.config import GROQ_API_KEY

client = Groq(api_key=GROQ_API_KEY)

def generate_alert_message(shipment: dict) -> str:
    # TODO (Jeffrey): build prompt, call client.chat.completions.create
    pass
