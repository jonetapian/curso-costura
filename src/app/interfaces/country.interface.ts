export interface Country {
  flags: Flags;
  name: Name;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: Record<string, {
    official: string;
    common: string;
  }>;
}
