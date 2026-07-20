# AGENTS.md

## Cursor Cloud specific instructions

This repo is a **Jekyll static site** (Beautiful Jekyll theme, "Yule Labs"). It is a single
service: the Jekyll dev server builds and serves the marketing site/blog plus two client-side
learning apps (`/learn-grammar-pt/` and `/games/`). There is no backend, database, or API.

### Ruby version (important)
- The pinned gem stack (`jekyll 3.9.0`, `liquid 4.0.3`, `pathutil 0.16.2`) is **only compatible
  with Ruby <= 3.1**. It is installed via `rbenv` and pinned to **Ruby 3.1.7** (see `rbenv global`).
  - Ruby 3.2+ breaks the build: `liquid` calls `String#tainted?`, which was removed in Ruby 3.2.
  - Ubuntu's system Ruby is 3.2, so always use the rbenv Ruby (already on `PATH` via `~/.bashrc`).
- `rbenv` is initialized in `~/.bashrc`. Non-login/non-interactive shells may not pick it up; if
  `ruby --version` shows 3.2, run `export PATH="$HOME/.rbenv/bin:$PATH" && eval "$(rbenv init - bash)"`.

### Running the site (dev)
- Serve: `bundle exec jekyll serve --host 0.0.0.0 --port 4000 --no-watch` (→ http://localhost:4000).
- Build only: `bundle exec jekyll build` (output in `_site/`).
- **Do NOT use watch/livereload** (i.e. plain `jekyll serve` without `--no-watch`). Watch mode
  crashes with `no implicit conversion of Hash into Integer` (`pathutil 0.16.2` is incompatible
  with Ruby 3.x keyword-arg handling). Use `--no-watch` and re-run the build/serve after edits.

### Lint / test
- There is no lint or automated test suite in this repo. The effective check is a clean
  `bundle exec jekyll build` (no Liquid/build errors).

### Gemfile.lock platform
- `bundle install` adds the `x86_64-linux` platform to `Gemfile.lock` (the committed lock was
  generated on macOS). This is expected on Linux.
