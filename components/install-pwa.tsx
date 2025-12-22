"use client";

import { useEffect, useState } from "react";
import { Download, X, Share, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const iOS = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(iOS);

    // Check if already installed (standalone mode)
    const standalone = window.matchMedia('(display-mode: standalone)').matches ||
                      (window.navigator as any).standalone === true;
    setIsStandalone(standalone);

    // For iOS devices
    if (iOS && !standalone) {
      // Check if user dismissed recently (within 7 days)
      const dismissedAt = localStorage.getItem('pwa-install-dismissed');
      const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;

      if (dismissedAt) {
        const timeSinceDismissed = Date.now() - parseInt(dismissedAt);
        if (timeSinceDismissed < sevenDaysInMs) {
          return;
        }
      }

      // Show iOS banner after 3 seconds
      setTimeout(() => {
        setShowInstallButton(true);
        setShowBanner(true);
      }, 3000);
      return;
    }

    // For non-iOS devices (Chrome, Edge, etc.)
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);

      // Check if user dismissed recently (within 7 days)
      const dismissedAt = localStorage.getItem('pwa-install-dismissed');
      const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;

      if (dismissedAt) {
        const timeSinceDismissed = Date.now() - parseInt(dismissedAt);
        if (timeSinceDismissed < sevenDaysInMs) {
          // Don't show banner if dismissed within last 7 days
          return;
        }
      }

      // Show banner after 3 seconds
      setTimeout(() => {
        setShowBanner(true);
      }, 3000);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowInstallButton(false);
      setShowBanner(false);
      // Clear the dismissed timestamp since user installed
      localStorage.removeItem('pwa-install-dismissed');
    }
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
    // Remember user dismissed the prompt
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  if (!showInstallButton) return null;

  // iOS Install Banner
  if (isIOS && !isStandalone) {
    return (
      <>
        {showBanner && (
          <div className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 animate-in slide-in-from-bottom-5">
            <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-lg border border-green-500/30 rounded-lg shadow-2xl p-4">
              <button
                onClick={handleCloseBanner}
                className="absolute top-2 right-2 text-green-400 hover:text-green-300 transition-colors"
                aria-label="Close banner"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-start gap-3 pr-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Download className="h-5 w-5 text-green-500" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-green-400 mb-1">
                    Install on iPhone
                  </h3>
                  <p className="text-xs text-green-300/80 mb-3">
                    Install this app on your iPhone: tap <Share className="inline h-3 w-3 mx-0.5" /> then <span className="font-semibold">"Add to Home Screen"</span>
                  </p>

                  <div className="flex gap-2">
                    <Button
                      onClick={handleCloseBanner}
                      size="sm"
                      variant="ghost"
                      className="text-green-400 hover:text-green-300 hover:bg-green-500/10 text-xs h-8"
                    >
                      Got it
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Regular Install Banner (Chrome, Edge, etc.)
  return (
    <>
      {showBanner && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in slide-in-from-bottom-5">
          <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-lg border border-green-500/30 rounded-lg shadow-2xl p-4">
            <button
              onClick={handleCloseBanner}
              className="absolute top-2 right-2 text-green-400 hover:text-green-300 transition-colors"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start gap-3 pr-6">
              <div className="flex-shrink-0 mt-1">
                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Download className="h-5 w-5 text-green-500" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold text-green-400 mb-1">
                  Install as App
                </h3>
                <p className="text-xs text-green-300/80 mb-3">
                  Get quick access to my website. Install it on your device for a better experience.
                </p>

                <div className="flex gap-2">
                  <Button
                    onClick={handleInstallClick}
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-black font-semibold text-xs h-8"
                  >
                    Install Now
                  </Button>
                  <Button
                    onClick={handleCloseBanner}
                    size="sm"
                    variant="ghost"
                    className="text-green-400 hover:text-green-300 hover:bg-green-500/10 text-xs h-8"
                  >
                    Maybe Later
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
