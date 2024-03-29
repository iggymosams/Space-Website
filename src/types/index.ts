export interface APODData {
    title: string;
    date: string;
    url: string;
    copyright: string;
    explanation: string;
    media_type: string;
}

export interface LaunchData {
    fairings: Fairings | null;
    links: Links;
    static_fire_date_utc: null;
    static_fire_date_unix: null;
    net: boolean;
    window: null;
    rocket: Rocket;
    success: null;
    failures: any[];
    details: null;
    crew: string[];
    ships: any[];
    capsules: string[];
    payloads: string[];
    launchpad: Launchpad;
    flight_number: number;
    name: string;
    date_utc: Date;
    date_unix: number;
    date_local: Date;
    date_precision: DatePrecision;
    upcoming: boolean;
    cores: Core[];
    auto_update: boolean;
    tbd: boolean;
    launch_library_id: null | string;
    id: string;
}

export interface Core {
    core: null | string;
    flight: number | null;
    gridfins: boolean | null;
    legs: boolean | null;
    reused: boolean | null;
    landing_attempt: null;
    landing_success: null;
    landing_type: null;
    landpad: null;
}

export enum DatePrecision {
    Day = 'day',
    Hour = 'hour',
    Month = 'month',
}

export interface Fairings {
    reused: null;
    recovery_attempt: null;
    recovered: null;
    ships: any[];
}

export enum Launchpad {
    The5E9E4501F509094Ba4566F84 = '5e9e4501f509094ba4566f84',
    The5E9E4502F509092B78566F87 = '5e9e4502f509092b78566f87',
    The5E9E4502F509094188566F88 = '5e9e4502f509094188566f88',
}

export interface Links {
    patch: Patch;
    reddit: Reddit;
    flickr: Flickr;
    presskit: null;
    webcast: null;
    youtube_id: null;
    article: null;
    wikipedia: null;
}

export interface Flickr {
    small: any[];
    original: any[];
}

export interface Patch {
    small: null | string;
    large: null | string;
}

export interface Reddit {
    campaign: null | string;
    launch: null;
    media: null;
    recovery: null | string;
}

export enum Rocket {
    The5E9D0D95Eda69973A809D1Ec = '5e9d0d95eda69973a809d1ec',
    The5E9D0D95Eda69974Db09D1Ed = '5e9d0d95eda69974db09d1ed',
}

export interface Launch {
    img: string;
    title: string;
    provider: string;
    pad: string;
    date: Date;
}

export interface LaunchPadType {
    images: Images;
    name: string;
    full_name: string;
    locality: string;
    region: string;
    latitude: number;
    longitude: number;
    launch_attempts: number;
    launch_successes: number;
    rockets: string[];
    timezone: string;
    launches: string[];
    status: string;
    details: string;
    id: string;
}

export interface Images {
    large: string[];
}
