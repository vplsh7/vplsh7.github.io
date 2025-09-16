---
title: "Moose Reader 1.7.1"
date: "2025-08-30"
---

## Version 1.7.1 — *30 August 2025*

- **[Bugfix]** **Fixed Database Access in Installers**: Resolved a major issue where the installed versions of the app (Windows Installer) could not write to the database.  
- **[Bugfix]** **Fixed Network Certificate Errors**: Resolved an *"error certificate verify failed"* issue in packaged builds by bundling a trusted root certificate authority file (`cacert.pem`).  
