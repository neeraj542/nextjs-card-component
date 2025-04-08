let userConfig = undefined;
try {
  // Try to import ESM first
  userConfig = await import('./v0-user-next.config.mjs');
} catch (e) {
  try {
    // Fallback to CJS import
    userConfig = await import("./v0-user-next.config");
  } catch (innerError) {
    // Ignore error if no user config is found
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Allow unoptimized images in static export
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  output: 'export', // Static export option for GitHub Pages deployment
  basePath: '/nextjs-card-component', // Set base path to your repository name for GitHub Pages
  trailingSlash: true, // Optional: Add trailing slashes to all URLs (useful for static hosting)
};

if (userConfig) {
  // ESM imports will have a "default" property, so fallback to it
  const config = userConfig.default || userConfig;

  // Merge custom user config with default config
  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

export default nextConfig;
