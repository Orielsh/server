import {app} from "./app-simple";

// Local development server
const port = 3000;
app.listen(port, () => {
    console.log("Email server listening on", port);
});

export default app; 