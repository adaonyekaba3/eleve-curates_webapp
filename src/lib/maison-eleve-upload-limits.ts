/**
 * Vercel serverless functions cap request bodies at ~4.5MB. Multipart form
 * uploads must stay below that or the platform returns 413 (often HTML, not JSON).
 */
export const MAISON_MAX_IMAGE_FILES = 4;
/** Per-file cap: 4 × 800KB stays under the combined cap with form overhead. */
export const MAISON_MAX_IMAGE_BYTES = 800 * 1024;
/** Hard cap on combined image bytes (client + server). */
export const MAISON_MAX_TOTAL_IMAGE_BYTES = 3.2 * 1024 * 1024;
