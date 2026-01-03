# gist-blog

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages---)](https://toms74209200.github.io/gist-blog/)

Blog that publishes contents of GitHub Gist.

## Usage

### Blog settings

Create blog settings file in GitHub Gist([sample](https://gist.github.com/toms74209200/de090a1f6adcb1d16519cb3cdf0711b7)).

```json
{
    "title": "blog title",
    "contents": [
        "gist id"
    ]
}
```

Set a environment variable `CONFIG_ID` to the gist id of the blog settings file.
Gist id is the last part of the URL.

```toml
CONFIG_ID=de090a1f6adcb1d16519cb3cdf0711b7
```

### Post blog

1. Create blog post in GitHub Gist. Post file type is markdown only.
1. Add gist id of the blog post to setting file.

```json
{
    "title": "blog title",
    "contents": [
        "gist id" // <- Here
    ]
}
```

### Deploy GitHub Pages

Set a Environment secrets `CONFIG_ID` that is gist id of the blog settings file(is the same of the local environment variable).

## Development

Using Visual Studio Code Dev Container for development.
You can run tests and launch server from Activity Bar.

## Environments

- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [remarkjs/react-markdown](https://github.com/remarkjs/react-markdown#readme)

## License

[MIT License](LICENSE)

## Author

[toms74209200](<https://github.com/toms74209200>)
