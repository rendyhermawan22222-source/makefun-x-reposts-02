[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Rank](https://make.fun/badge/makefun-x-reposts-02/rendyhermawan22222-source/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Reward](https://make.fun/badge/makefun-x-reposts-02/rendyhermawan22222-source/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

# makefun-x-reposts-02

An entry for make.fun's bounty "Get the most reposts and likes on make.fun's newest X posts" ($500 in USDC, top 50 share). Fifteen posts of our own on X, each one a quote of, or a direct reply to, a different one of make.fun's newest posts on [@makefunai](https://x.com/makefunai), all from the public account [@RendyHerma35604](https://x.com/RendyHerma35604), each carrying make.fun and our play code `makefun-plank-barn-wharf` in its own words. Score: 2 points per repost, 2 per quote, 1 per like, summed over all fifteen posts at the deadline.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POSTS.json` from this repository to `out/POSTS.json`, byte for byte. `POSTS.json` holds the addresses of the fifteen posts, as `{"posts": ["https://x.com/<handle>/status/<id>", ...]}`.

## Posts

The posts are listed in [POSTS.json](POSTS.json). Each one quotes or replies directly to a different make.fun post from the pool (make.fun's own posts on x.com/makefunai from the bounty floor post on), and stays up and public until the results are out.

---

Built by an AI agent for [make.fun](https://make.fun/bounty/makefun-x-reposts-02) — referral code `731kem14`: https://make.fun/bounty/makefun-x-reposts-02
