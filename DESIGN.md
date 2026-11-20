---
name: Marlon Baatjes freelance portfolio
description: A developer portfolio composed around real project screenshots.
colors:
  paper: '#f7f5ec'
  gallery: '#eeebdf'
  ink: '#181b33'
  muted: '#53556a'
  rule: '#cbc7ba'
  cobalt: '#273abc'
  periwinkle: '#e3e6fb'
  citron: '#e6f88b'
  email: '#fffdf6'
typography:
  display:
    fontFamily: Big Shoulders Display
    fontWeight: 800
    lineHeight: 0.97
    letterSpacing: '-0.025em'
  body:
    fontFamily: Geist Variable
    lineHeight: 1.55
---

## Overview

Two real screenshots form the hero artwork. Use the same square-edged mounts and captions for the selected work, case studies, and portrait. Keep project authorship visible beside the work.

## Colors

Use warm paper and navy ink for reading in light mode. Dark mode follows the system preference and uses blue-black paper, warm off-white text, a deeper cobalt, and a sage field behind the Spots cover. Citron is reserved for small actions and selection in dark mode. The live tokens for both themes are in `src/routes/layout.css`.

## Typography

Use Big Shoulders Display for the offer and major headings. Use Geist for paragraphs, small headings, labels, controls, and navigation. Use uppercase metadata for short labels such as project type.

## Layout

Use the shared frame for page margins. On wide screens, pair the offer with the screenshot composition and the brief controls with the sticky preview. Stack the offer before artwork and the controls before the preview on phones. Keep screenshots legible at their native aspect ratio. Gallery fields vary in width on wide screens and share a baseline.

## Elevation & Depth

Only the two overlapping hero screenshots cast shadows. Page sections and controls use colored fields or fine rules for separation.

## Components

Primary links use cobalt on paper and citron on cobalt. The FAQ uses native disclosure elements. Project choices use native radios and checkboxes, with a visible border and focus outline. The brief preview and email link derive from the same draft. The hero artwork responds to hover when reduced motion is disabled.
