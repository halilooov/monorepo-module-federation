export type BuildMode = "development" | "production";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
  public: string;
}

export interface BuildOptions {
  mode: BuildMode;
  port: number;
  paths: BuildPaths;
  platform: BuildPlatform;
  analyzer?: boolean;
}
