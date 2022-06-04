const cp = require('child_process')

const { utools } = window

window.exports = {
    'darkMode': {
        mode: "none",
        args: {
            enter: () => {
                utools.hideMainWindow()
                const appleScript = `osascript -e 'tell app "System Events" to tell appearance preferences to set dark mode to not dark mode'`
                cp.exec(appleScript, (error, stdout, stderr) => {
                        if (error) {
                            return utools.showNotification(stderr)
                        }
                        utools.outPlugin()
                    }
                )
            }
        }
    }
}
