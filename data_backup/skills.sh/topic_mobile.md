--- source: https://skills.sh/topic/mobile ---

[skills](/)/[topics](/topic)/Mobile

# Mobile skills

Mobile skills give your agent working knowledge of Expo, React Native, and native platform conventions so it builds for real devices rather than treating mobile as a smaller version of the web.

## What your agent can do with mobile skills installed

* Build React Native components using Expo's native UI primitives rather than web-ported alternatives
* Implement performant list rendering, animations, and gesture handling correctly on iOS and Android
* Set up NativeWind and Tailwind-compatible styling in an Expo project with proper native fallbacks
* Fetch data using patterns suited to native apps: offline-first, background sync, and push notification triggers
* Upgrade Expo SDK versions without breaking native module compatibility
* Design mobile interfaces with platform-appropriate conventions rather than copying web UI patterns

## Skills in this category

Skill

What it does

[### vercel-react-native-skills

vercel-labs/agent-skills

React Native best practices: performance, navigation, native modules, and platform APIs](/vercel-labs/agent-skills/vercel-react-native-skills)[### sleek-design-mobile-apps

sleekdotdesign/agent-skills

Mobile-first design patterns for iOS and Android: gestures, safe areas, and native feel](/sleekdotdesign/agent-skills/sleek-design-mobile-apps)[### building-native-ui

expo/skills

Expo native UI components: lists, modals, tabs, bottom sheets, and haptics](/expo/skills/building-native-ui)[### native-data-fetching

expo/skills

Data fetching for native apps: offline caching, background refresh, and sync patterns](/expo/skills/native-data-fetching)[### expo-tailwind-setup

expo/skills

NativeWind and Tailwind setup in Expo with correct native class handling](/expo/skills/expo-tailwind-setup)[### upgrading-expo

expo/skills

Expo SDK upgrade guide covering breaking changes, native module compatibility, and migration steps](/expo/skills/upgrading-expo)

## Works with your agent

Mobile skills are compatible with Claude Code, Cursor, GitHub Copilot, Windsurf, Cline, Codex, Gemini CLI, and all agents that support the [skills CLI](https://github.com/vercel-labs/skills).

## Frequently asked questions

Do these skills work for bare React Native or only Expo managed workflow?+

Primarily Expo, but the React Native patterns in vercel-react-native-skills apply to bare workflow too. The Expo-specific skills (building-native-ui, expo-tailwind-setup, upgrading-expo) assume an Expo project structure.

My agent generates web-style layouts that break on mobile. Will these skills fix that?+

Yes. sleek-design-mobile-apps and building-native-ui both cover native platform conventions specifically: safe areas, gesture navigation, bottom sheet patterns, and platform-specific spacing. These are distinct from web layout conventions and replace them when either skill is loaded.

Is there a skill for React Native animations with Reanimated?+

vercel-react-native-skills includes Reanimated and Gesture Handler patterns. For more UI-focused animation work, pairing it with sleek-design-mobile-apps gives broader coverage.

Can I use expo-tailwind-setup if I haven't set up NativeWind yet?+

Yes. The skill walks through the NativeWind setup from scratch, including the configuration changes needed for Tailwind classes to work correctly in a native context.

## Related topics

[React](/topic/react)[Design & UI](/topic/design)