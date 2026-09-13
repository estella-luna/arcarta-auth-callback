# ARCARTA authentication callback

Static, dependency-free callback bridge for ARCARTA LINE Login.

- Receives LINE's short-lived authorization response on GitHub Pages.
- Immediately returns only `code`, `state`, or documented error fields to `arcarta://auth/line`.
- Does not use cookies, analytics, storage, external scripts, or network requests.
- Contains no ARCARTA source code or credentials.

Published route: `https://sl-akr.github.io/arcarta-auth-callback/`
