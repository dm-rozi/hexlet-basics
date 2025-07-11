[![github action status](https://github.com/hexlet-basics/hexlet-basics/workflows/build/badge.svg?event=push)](https://github.com/hexlet-basics/hexlet-basics/actions)

# hexlet-basics

## Setup

### Requirements

- docker
- ruby >= 3.0.0
- make
- node
- caddy
- biome (in editor, for linting)

### Run

```bash
# /etc/hosts 127.0.0.1 code-basics.test
# make setup-macos or make setup-ubuntu
make services-start
make setup
make dev # run server
# open code-basics.test

make test # run tests

# load language
# make language-load L=php

make sync # sync locales, types, fixtures
```

To manage loaded languages and set other settings, you need to sign in (login: `full@test.io`, password: `password`)

### Dev Tools

- <https://chromewebstore.google.com/detail/inertiajs-devtools/golilfffgehhabacoaoilfgjelagablo?hl=en>

### Production

Kube access

```bash
# make k8s-macos-setup or make k8s-ubuntu-setup
export TWC_TOKEN=<your token>
```

### Deploy

- Create new tag via command:

  ```bash
  make next-tag
  ```

- Wait notification about ready tag in Slack channel `#sideprojects-code-auto` or wait [Github Actions](https://github.com/hexlet-basics/hexlet-basics/actions/workflows/release.yml)
- Change version in [k8s/hb-app-chart/values.yaml](/k8s/hb-app-chart/values.yaml) and then:

  ```bash
  make -C k8s helm-upgrade-app
  ```

## TODO

1. switch to yandex postbox (smtp)
1. theme switcher
1. <https://github.com/DavidWells/analytics>
1. auth: vk id, yandex id, google id (except ru)
1. switch from ansible vault to helm secrets
1. upload course image in admin interface (and remove devicon)
1. configus => dotenv
1. Check if yandex.market is used
1. primary keys: integer = bigint
1. add rss to blog

---

<!-- [![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io/?utm_source=github&utm_medium=referral&utm_campaign=hexlet&utm_content=hexlet-basics)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io/?utm_source=github&utm_medium=referral&utm_campaign=hexlet&utm_content=hexlet-basics).

See most active contributors on [hexlet-friends](https://friends.hexlet.io/). -->

## License

This project is licensed under the GNU General Public License v3.0.
See the [LICENSE](./LICENSE) file for details.
