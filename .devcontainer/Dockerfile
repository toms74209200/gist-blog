FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:1-20

ENV BUN_INSTALL=/bun
RUN mkdir -p /bun \
    && curl -fsSL https://bun.sh/install | bash \
    && chown -R node /bun

ENV PATH=${BUN_INSTALL}/bin:${PATH} \
    BUN_DIR=${BUN_INSTALL}/.cache/bun

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#    && apt-get -y install --no-install-recommends <your-package-list-here>