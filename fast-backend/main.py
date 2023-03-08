from typing import Union
from fastapi import Body, FastAPI
from settings import db
from routers import router_user
import stripe
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

if os.getenv("ENV_ORIGINS_CORS") != "[]":
    ab = ["dfhjbhfdjbf", "dfnkfnnf", "dfkfhuhhhh"]
    app.add_middleware(
        CORSMiddleware,
        allow_origins=os.getenv("ENV_ORIGINS_CORS"),
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


@app.get("/")
async def read_root():
    document = {"key": "value2s"}
    result = await db.test_collection.insert_one(document)
    print("result %s" % repr(result.inserted_id))
    return {"Hello": "World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
    # if (user := await db["users"].find_one()) is not None:
    #     return user


@app.get("/products")
async def read_root():
    result = stripe.Product.list(limit=3)
    print(result)
    return result


@app.post("/create-checkout-session")
def create_checkout_session(price: str = Body(embed=True)):
    try:
        checkout_session = stripe.checkout.Session.create(
            payment_method_types=["card"],
            line_items=[
                {
                    "price": price,
                    "quantity": 1,
                },
            ],
            mode="subscription",
            automatic_tax={
                "enabled": True,
            },
            success_url="http://localhost:3000/payment"
            + "?success=true&session_id={CHECKOUT_SESSION_ID}",
            cancel_url="http://localhost:3000/payment" + "?canceled=true",
        )
        print(checkout_session)
        return {
            "checkout_session_id": checkout_session["id"],
            "checkout_public_key": os.getenv("STRIPE_PUBLISHABLE_KEY"),
        }
    except Exception as e:
        print(e)
        return "Server error", 500


# Users
app.include_router(router_user)
