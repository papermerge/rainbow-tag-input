import asyncio
from typing import List
from pydantic import BaseModel
from fastapi import FastAPI


app = FastAPI()


class Tag(BaseModel):
    name: str
    fg_color: str
    bg_color: str


USER_TAGS = [
    Tag(name='awo', fg_color='white', bg_color='orange'),
    Tag(name='kfz', fg_color='white', bg_color='blue'),
    Tag(name='lidl', fg_color='white', bg_color='pink'),
]


@app.get("/tags")
async def get_tags() -> List[Tag]:
    await asyncio.sleep(5)
    return USER_TAGS
