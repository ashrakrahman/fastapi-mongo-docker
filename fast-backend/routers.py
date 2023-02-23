from fastapi import APIRouter


router_user = APIRouter(
    prefix="/user",
    tags=["Users"]
)


@router_user.get("/me", response_description="Get userself")
async def get_user_info():
    return {"Hello": "User"}
