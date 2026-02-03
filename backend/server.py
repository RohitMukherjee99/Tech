from fastapi import FastAPI, Request, Form
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
from pathlib import Path
from datetime import datetime, timezone
import uuid

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', '')
db_name = os.environ.get('DB_NAME', 'osi_conference')
client = AsyncIOMotorClient(mongo_url) if mongo_url else None
db = client[db_name] if client else None

app = FastAPI(title="3RD OSI CONFERENCE KOLKATA 2026")

# Read HTML template
def get_template():
    template_path = ROOT_DIR / 'templates' / 'index.html'
    with open(template_path, 'r', encoding='utf-8') as f:
        return f.read()

# Routes
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return get_template().replace("{{CURRENT_PAGE}}", "home")

@app.get("/about", response_class=HTMLResponse)
async def about():
    return get_template().replace("{{CURRENT_PAGE}}", "about")

@app.get("/committee", response_class=HTMLResponse)
async def committee():
    return get_template().replace("{{CURRENT_PAGE}}", "committee")

@app.get("/program", response_class=HTMLResponse)
async def program():
    return get_template().replace("{{CURRENT_PAGE}}", "program")

@app.get("/speakers", response_class=HTMLResponse)
async def speakers():
    return get_template().replace("{{CURRENT_PAGE}}", "speakers")

@app.get("/registration", response_class=HTMLResponse)
async def registration():
    return get_template().replace("{{CURRENT_PAGE}}", "registration")

@app.get("/accommodation", response_class=HTMLResponse)
async def accommodation():
    return get_template().replace("{{CURRENT_PAGE}}", "accommodation")

@app.get("/sponsors", response_class=HTMLResponse)
async def sponsors():
    return get_template().replace("{{CURRENT_PAGE}}", "sponsors")

@app.get("/venue", response_class=HTMLResponse)
async def venue():
    return get_template().replace("{{CURRENT_PAGE}}", "venue")

@app.get("/downloads", response_class=HTMLResponse)
async def downloads():
    return get_template().replace("{{CURRENT_PAGE}}", "downloads")

@app.get("/contact", response_class=HTMLResponse)
async def contact():
    return get_template().replace("{{CURRENT_PAGE}}", "contact")

@app.post("/contact", response_class=HTMLResponse)
async def submit_contact(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(""),
    subject: str = Form(...),
    message: str = Form(...)
):
    if db:
        await db.contact_messages.insert_one({
            "id": str(uuid.uuid4()),
            "name": name,
            "email": email,
            "phone": phone,
            "subject": subject,
            "message": message,
            "created_at": datetime.now(timezone.utc).isoformat()
        })
    # Return template with success message
    template = get_template().replace("{{CURRENT_PAGE}}", "contact")
    return template.replace("<!--SUCCESS_MESSAGE-->", '<div class="success-message">Thank you! Your message has been sent successfully.</div>')

# API endpoints
@app.get("/api/health")
async def health():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
