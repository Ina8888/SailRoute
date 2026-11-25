from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="SailRoute Routing Engine")

#Main python server that handles routing requests from the next.js interface
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "ok", "message": "SailRoute Routing Engine is ready."}

@app.post("/api/route/calculate")
def calculate_route():
    #Call the routing algorythm
    return {"status": "pending", "isochrones": []}