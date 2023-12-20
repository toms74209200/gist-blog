FROM mcr.microsoft.com/vscode/devcontainers/base:0-bullseye

ARG TARGETPLATFORM

ENV DENO_INSTALL=/deno
RUN DENO_INSTALL_FILE=$( \
        case ${TARGETPLATFORM} in \
            "linux/amd64") echo "https://deno.land/x/install/install.sh" ;; \
            "linux/arm64") echo "https://gist.githubusercontent.com/LukeChannings/09d53f5c364391042186518c8598b85e/raw/ac8cd8c675b985edd4b3e16df63ffef14d1f0e24/deno_install.sh" ;; \
        esac \
    ) && \
    mkdir -p /deno \
    && curl -fsSL ${DENO_INSTALL_FILE} | sh \
    && chown -R vscode /deno

ENV PATH=${DENO_INSTALL}/bin:${PATH} \
    DENO_DIR=${DENO_INSTALL}/.cache/deno

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#    && apt-get -y install --no-install-recommends <your-package-list-here>
