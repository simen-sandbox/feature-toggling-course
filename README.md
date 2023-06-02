# Feature Toggle

This repository holds a few examples of how to implement feature toggles.

## The concept

Early in a project, where there are no feature toggles, you
can introduce a simple `isEnabled` function that returns `false`. The idea here is this enables creating the feature and
deploying it, even though it is not enabled – yet.

[see 0-starting-point.ts](./0-starting-point.ts)

```bash
deno run ./1-enabling-the-first-toggl.ts
```

Best part of this is that you can merge PRs, deploy it.

## Enabling the first toggle

When time comes and you need to test it in an environment,
or locally, a super simple implementation can be added.

[see 1-enabling-the-first-toggl.ts](./1-enabling-the-first-toggl.ts)

Making it possible to run it like this:

```bash
TOGGLES=v2 deno run ./1-enabling-the-first-toggl.ts
```

Or by adding the `TOGGLES` environment variable to the environment on the server.

## Advancing

As the project grows, you can add more toggles, and more
complexity to the `isEnabled` function.

[see 3-advancing.ts](./3-advancing.ts)

```bash
deno run ./3-advancing.ts
```
