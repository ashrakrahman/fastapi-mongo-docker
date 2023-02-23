import os
import motor.motor_asyncio
from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env.

# ----------------- Database variables (MongoDB) --------------------------s
client = motor.motor_asyncio.AsyncIOMotorClient(os.getenv("DB_URL"))

print(os.getenv("DB_URL"))
db = client.testDB1

print("DB Client info ::", db)
