---
title: "I made a React Snippets extension for Zed"
description: "Ported VSCode 'ES7+ React/Redux/React-Native snippets' extension's snippets into Zed"
pubDate: "Nov 21 2025"
---

I was trying out the Zed editor, the new kid on the block. The experience was mostly fine, but I couldn’t find any React snippet extensions that suited my needs.

In VSCode, I had been using [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets), and I really missed having it in Zed.

Since I couldn’t find a similar extension, I decided to make one myself.


I came across the [repo for the VSCode extension](https://github.com/r5n-labs/vscode-react-javascript-snippets), and wrote a quick script to convert them into Zed’s format. The documentation for building extensions was great, but I couldn’t find much about snippet-type extensions, so I studied a few existing ones and built mine based on that.

You can check it out here: [https://github.com/shonebinu/zed-react-snippets](https://github.com/shonebinu/zed-react-snippets)

I've also made a [PR](https://github.com/zed-industries/extensions/pull/3945) to get it listed in Zed's extensions search. Let's see...
