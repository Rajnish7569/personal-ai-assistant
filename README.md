# Personal AI Assistant 🤖🎙️

A voice-activated desktop AI assistant built with Python and Django. Just say the wake word and give a command — it handles the rest.

---

## Demo

> *"Hey Rajjo, play lo-fi music on YouTube"* → opens browser, searches YouTube, plays it.
> *"Open VS Code"* → launches the app instantly.

---

## Features

- 🎙️ **Wake-word detection** using Porcupine (always-on, low CPU usage)
- 🗣️ **Voice command recognition** via SpeechRecognition library
- 🔊 **Text-to-speech responses** using Pyttsx3
- 🌐 **YouTube & web automation** via Pywhatkit
- 🖥️ **Native desktop GUI** built with Eel + HTML/CSS/JavaScript
- 🗃️ **SQL command logging** — all interactions stored in SQLite for history tracking
- ⚙️ **Django backend** managing task execution and routing

---

## Tech Stack

| Layer | Technology |
|---|---|
| Wake Word | Porcupine |
| Speech Recognition | SpeechRecognition |
| Text-to-Speech | Pyttsx3 |
| Backend | Python, Django |
| Database | SQLite (SQL) |
| Desktop GUI | Eel, HTML, CSS, JavaScript |
| Automation | Pywhatkit, subprocess |

---

## Project Structure

```
personal-ai-assistant/
├── engine/          # Core logic: speech, TTS, task handlers
├── www/             # Frontend (HTML, CSS, JS) served via Eel
├── main.py          # Entry point — starts Django + Eel
├── run.py           # Utility runner
├── Rajjo.db         # SQLite database for command logs
└── .gitignore
```

---

## Setup & Run

### Prerequisites
- Python 3.8+
- Porcupine access key (free at [picovoice.ai](https://picovoice.ai))
- Microphone access

### Installation

```bash
git clone https://github.com/Rajnish7569/personal-ai-assistant.git
cd personal-ai-assistant
pip install -r requirements.txt
```

### Run

```bash
python main.py
```

The desktop GUI will launch. Say the wake word to activate.

---

## Supported Commands

| Command | Action |
|---|---|
| "Open [app name]" | Launches application |
| "Play [song/video] on YouTube" | Opens YouTube and plays |
| "Search [query]" | Web search |
| "Chat [message]" | AI chat response via HugChat |
| "What time is it" | Reads current time |

---

## Architecture

```
Voice Input → Porcupine (hotword) → SpeechRecognition (command)
    → Django Router → Task Handler
    → Pyttsx3 (voice reply) + Eel (UI update) + SQL (log)
```

---

## Limitations & Future Scope

- Currently Windows-focused (Eel + subprocess calls)
- Planned: Add more commands, improve NLP intent parsing, add user profiles

---

## Author

**Rajnish Kumar** — [github.com/Rajnish7569](https://github.com/Rajnish7569) | [LinkedIn](https://linkedin.com/in/rajnish7569)
