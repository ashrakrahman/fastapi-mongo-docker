from typing import Union

from fastapi import FastAPI
from settings import db
from routers import router_user

app = FastAPI()


@app.get("/")
async def read_root():
    document = {'key': 'value2s'}
    result = await db.test_collection.insert_one(document)
    print('result %s' % repr(result.inserted_id))
    return {"Hello": "World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
    # if (user := await db["users"].find_one()) is not None:
    #     return user


# Users
app.include_router(router_user)
