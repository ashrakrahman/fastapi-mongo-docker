import os
import motor.motor_asyncio

# ----------------- Database variables (MongoDB) --------------------------s
client = motor.motor_asyncio.AsyncIOMotorClient(os.getenv("DB_URL"))
db = client.homeSiteDB

print("DB Client info ::", db)
