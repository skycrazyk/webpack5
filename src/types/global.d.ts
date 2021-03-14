declare module "*.txt" {
    const source: string;
    export default source;
}

declare module "*.svg" {
    const inline: string;
    export default inline;
}

declare module "*.jpg" {
    const resource: string;
    export default resource;
}

declare module "*.png" {
    const resource: string;
    export default resource;
}

declare module "*.css" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.scss" {
    const classes: { [key: string]: string };
    export default classes;
}
