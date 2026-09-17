# Desktop icons

The shared editable source and export notes are in
[`packages/design-system/assets`](../../../packages/design-system/assets/README.md).

Mac packaging requires Xcode 26 or newer. Electron builder compiles `Bot.icon`
into `Assets.car` for Tahoe and generates `icon.icns` for older macOS versions.
`icon-macos.png` is the matching development export with Dock margins.

`icon.png` and `icon.ico` remain the Linux and Windows assets.
