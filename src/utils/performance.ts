export interface FrontendPerformanceSnapshot {
  url: string;
  userAgent: string;
  navigationType: string;
  domContentLoadedMs: number;
  loadCompleteMs: number;
  transferSizeKb: number;
  recordedAt: string;
}

const roundNumber = (value: number) => Math.round(value * 100) / 100;

export function getFrontendPerformanceSnapshot(): FrontendPerformanceSnapshot | null {
  if (typeof performance === "undefined") {
    return null;
  }

  const navigationEntry = performance.getEntriesByType("navigation")[0];

  if (!(navigationEntry instanceof PerformanceNavigationTiming)) {
    return null;
  }

  return {
    url: window.location.href,
    userAgent: window.navigator.userAgent,
    navigationType: navigationEntry.type,
    domContentLoadedMs: roundNumber(
      navigationEntry.domContentLoadedEventEnd - navigationEntry.startTime
    ),
    loadCompleteMs: roundNumber(navigationEntry.loadEventEnd - navigationEntry.startTime),
    transferSizeKb: roundNumber(navigationEntry.transferSize / 1024),
    recordedAt: new Date().toISOString(),
  };
}

export function logFrontendPerformanceSnapshot() {
  const snapshot = getFrontendPerformanceSnapshot();

  if (!snapshot) {
    return;
  }

  console.table(snapshot);
}