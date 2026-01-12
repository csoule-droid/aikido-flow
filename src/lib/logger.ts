/**
 * Safe logging utility that only logs in development mode.
 * In production, sensitive error details are not exposed to the browser console.
 */
export const logError = (context: string, error: unknown) => {
  if (import.meta.env.DEV) {
    console.error(`[${context}]`, error);
  }
  // In production, you could send sanitized errors to a server-side logging service
  // For now, we silently handle errors in production
};

export const logWarn = (context: string, message: string) => {
  if (import.meta.env.DEV) {
    console.warn(`[${context}]`, message);
  }
};

export const logInfo = (context: string, message: string) => {
  if (import.meta.env.DEV) {
    console.log(`[${context}]`, message);
  }
};
