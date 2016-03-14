// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/83a71a28177843c3a65587588c5fc37ef193a75f/isomorphic-fetch/isomorphic-fetch.d.ts
// Type definitions for isomorphic-fetch
// Project: https://github.com/matthew-andrews/isomorphic-fetch
// Definitions by: Todd Lucas <https://github.com/toddlucas>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Modified to
// - NOT expose the global fetch var
// - declare subinterfaces in module
// - export RequestInit and Response
declare module "isomorphic-fetch" {
    enum RequestContext {
        "audio", "beacon", "cspreport", "download", "embed", "eventsource",
        "favicon", "fetch", "font", "form", "frame", "hyperlink", "iframe",
        "image", "imageset", "import", "internal", "location", "manifest",
        "object", "ping", "plugin", "prefetch", "script", "serviceworker",
        "sharedworker", "subresource", "style", "track", "video", "worker",
        "xmlhttprequest", "xslt"
    }
    enum RequestMode { "same-origin", "no-cors", "cors" }
    enum RequestCredentials { "omit", "same-origin", "include" }
    enum RequestCache {
        "default", "no-store", "reload", "no-cache", "force-cache",
        "only-if-cached"
    }
    enum ResponseType { "basic", "cors", "default", "error", "opaque" }

    type HeaderInit = Headers | Array<string>;
    type BodyInit = Blob | FormData | string;
    type RequestInfo = Request | string;

    interface IHeaders {
        get(name: string): string;
        getAll(name: string): Array<string>;
        has(name: string): boolean;
    }

    class Headers implements IHeaders {
        append(name: string, value: string): void;
        delete(name: string): void;
        get(name: string): string;
        getAll(name: string): Array<string>;
        has(name: string): boolean;
        set(name: string, value: string): void;
    }

    interface IBody {
        bodyUsed: boolean;
        arrayBuffer(): Promise<ArrayBuffer>;
        blob(): Promise<Blob>;
        formData(): Promise<FormData>;
        json(): Promise<any>;
        json<T>(): Promise<T>;
        text(): Promise<string>;
    }

    class Body implements IBody {
        bodyUsed: boolean;
        arrayBuffer(): Promise<ArrayBuffer>;
        blob(): Promise<Blob>;
        formData(): Promise<FormData>;
        json(): Promise<any>;
        json<T>(): Promise<T>;
        text(): Promise<string>;
    }

    interface IRequest extends IBody {
        method: string;
        url: string;
        headers: Headers;
        context: string | RequestContext;
        referrer: string;
        mode: string | RequestMode;
        credentials: string | RequestCredentials;
        cache: string | RequestCache;
    }

    class Request extends Body implements IRequest {
        constructor(input: string | Request, init?: RequestInit);
        method: string;
        url: string;
        headers: Headers;
        context: string | RequestContext;
        referrer: string;
        mode: string | RequestMode;
        credentials: string | RequestCredentials;
        cache: string | RequestCache;
    }

    interface IFetchStatic {
        Promise: any;
        Headers: IHeaders
        Request: IRequest;
        Response: Response;
        (url: string | IRequest, init?: RequestInit): Promise<Response>;
    }

    export interface Response extends IBody {
        url: string;
        status: number;
        statusText: string;
        ok: boolean;
        headers: IHeaders;
        type: string | ResponseType;
        size: number;
        timeout: number;
        redirect(url: string, status: number): Response;
        error(): Response;
        clone(): Response;
    }

    export interface RequestInit {
        method?: string;
        headers?: HeaderInit | { [index: string]: string };
        body?: BodyInit;
        mode?: string | RequestMode;
        credentials?: string | RequestCredentials;
        cache?: string | RequestCache;
    }
    export default IFetchStatic;
}
