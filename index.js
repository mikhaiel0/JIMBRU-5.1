const { makeWASocket, useSingleFileAuthState, Browsers, makeInMemoryStore } = require("@adiwajshing/baileys");
const pino = require("pino");
const events = require("./lib/event");
const config = require("./config");
const { bind } = require("./lib/store");
const { syncDatabase, checkConnection, installExternalPlugins, installInternalPlugins, handleMessage } = require("./utils");

async function run() {
    console.log("Starting Jimbru-v5.1...");

    await syncDatabase();
    
    const { state, saveState } = useSingleFileAuthState("./media/session.json", pino({ level: "silent" }));
    const conn = makeWASocket({
        logger: pino({ level: "silent" }),
        auth: state,
        printQRInTerminal: true,
        browser: Browsers.macOS("Desktop"),
        downloadHistory: false,
        syncFullHistory: false,
    });

    bind(conn.ev);
    
    checkConnection(conn);

    conn.ev.on("connection.update", async (s) => {
        if (s.connection === "open") {
            console.log("WhatsApp connection established.");
            console.log("Installing external plugins...");
            await installExternalPlugins(conn);
            console.log("External plugins installed.");

            console.log("Installing internal plugins...");
            installInternalPlugins();
            console.log("Internal plugins installed.");

            conn.ev.on("creds.update", saveState);
            conn.ev.on("group-participants.update", async (data) => {
                // Handle group participant updates
            });
            conn.ev.on("messages.upsert", handleMessage);
        }
    });
    
    process.on("uncaughtException", (err) => {
        console.error("Uncaught exception:", err);
    });
}

run();
