# Customize repo pages

[//]: # (source: [skills.sh](https://skills.sh/docs/customize))

If you own a repository listed on skills.sh, add a `skills.sh.json` file to control how its repository page appears.

## What this is for

This feature is for owners and maintainers of repositories that have pages on skills.sh. A repository page lists every skill we have seen from a GitHub repo. If your repo has many skills, the default installs-sorted list can be hard to scan. Use `skills.sh.json` to group related skills into sections like React, Vercel, Design, Security, or Data.

This file only changes the display on skills.sh. It does not change how the `skills` CLI installs skills and it does not change the contents of any `SKILL.md` file.

## File location

Put the file at the root of your GitHub repository:

```
skills.sh.json
```

For example, a repo might look like this:

```
skills.sh.json
skills/react-best-practices/SKILL.md
skills/deploy-to-vercel/SKILL.md
skills/web-design-guidelines/SKILL.md
```

## Example

See a live example in the [vercel-labs/agent-skills repo](https://github.com/vercel-labs/agent-skills/blob/main/skills.sh.json).

```
{
  "$schema": "https://skills.sh/schemas/skills.sh.schema.json",
  "notGrouped": "bottom",
  "groupings": [
    {
      "title": "React",
      "description": "Skills for React and frontend engineering.",
      "skills": [
        "vercel-react-best-practices",
        "vercel-composition-patterns",
        "vercel-react-view-transitions"
      ]
    },
    {
      "title": "Vercel",
      "description": "Skills for deploying and optimizing on Vercel.",
      "skills": [
        "deploy-to-vercel",
        "vercel-cli-with-tokens",
        "vercel-optimize"
      ]
    }
  ]
}
```

## Top-level fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| $schema | string | No | JSON schema URL for editor autocomplete and validation. You can omit it if you do not use schema validation. |
| notGrouped | "top" | "bottom" | No | Where to place skills that are not listed in any group. Defaults to "bottom". |
| groupings | array | Yes | The sections to show on your repo page. Each grouping has a title and a list of skills. |

## Grouping fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| title | string | Yes | The section title shown on the repo page. Keep it short, usually one to three words. |
| description | string | No | A short sentence that explains what the group is for. This appears under the title. |
| skills | string[] | Yes | Skill names or slugs to include in this group. Use the skill slug from the skills.sh URL when possible. |

## How skill matching works

The safest value to put in `skills` is the skill slug from the skills.sh URL. For example, if the skill page is:

```
https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices
```

Use this value in your config:

```
vercel-react-best-practices
```

Matching is case-insensitive. Spaces and underscores are treated like hyphens. If a skill appears in more than one group, the first group wins. If a skill name is listed but does not exist in the repo, it is ignored.

## Ungrouped skills

You do not have to list every skill. Any skill that is not listed in a group is shown in an `Other skills` section.

Set `notGrouped` to `bottom` if you want your curated groups first. Set it to `top` if you want the ungrouped skills first.

## Limits and validation

* The file must be valid JSON.
* `groupings` must be an array with at least one valid group.
* Each group must have a non-empty title and at least one skill.
* Only the first 50 groups are used.
* Only the first 500 skills in each group are used.
* Invalid groups are skipped.
* If the file is missing or invalid, the repo page uses the default list.

## When changes appear

skills.sh picks up `skills.sh.json` after the repository is seen by the telemetry service. In practice, that usually means after someone installs from the repo with the `skills` CLI.

Repo pages are cached, so a valid change may not appear immediately. If the config is correct and the repo has been installed recently, the page should update after the cache refreshes.
