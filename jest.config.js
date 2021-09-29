module.exports = {
    verbose: true,
    setupFiles: ["dotenv/config"],
    setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each"]
}