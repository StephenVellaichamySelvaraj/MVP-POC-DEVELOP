
import React, { useEffect, useMemo, useState } from "react";

// Single Page App to list and preview assets from Contentstack using the
// Content Delivery API (/v3/assets) and render images via the Image Delivery API
// with on-the-fly transformations (width/quality).
//
// How to use:
// 1) Enter your Stack API Key, Delivery Token, and Environment.
// 2) Pick the correct Region (base URLs differ per region).
// 3) Click "Fetch assets" to list published assets in that environment.
// 4) Use the controls to filter and tweak image transformation params.
//
// Notes:
// - Delivery Tokens are environment-specific; ensure assets are published in the selected environment.
// - The Image API requires appending ?environment=<env>; this ensures CDN routing.
//
// Styling: Tailwind CSS utility classes for a clean, minimal UI.

const REGIONS = {
  "AWS North America": {
    cdaBase: "https://cdn.contentstack.io",
    imageBase: "https://images.contentstack.io",
  },
  "AWS Europe": {
    cdaBase: "https://eu-cdn.contentstack.com",
    imageBase: "https://eu-images.contentstack.com",
  },
  "AWS Australia": {
    cdaBase: "https://au-cdn.contentstack.com",
    imageBase: "https://au-images.contentstack.com",
  },
  "Azure North America": {
    cdaBase: "https://azure-na-cdn.contentstack.com",
    imageBase: "https://azure-na-images.contentstack.com",
  },
  "Azure Europe": {
    cdaBase: "https://azure-eu-cda.contentstack.com",
    imageBase: "https://azure-eu-images.contentstack.com",
  },
  "GCP North America": {
    cdaBase: "https://gcp-na-cdn.contentstack.com",
    imageBase: "https://gcp-na-images.contentstack.com",
  },
  "GCP Europe": {
    cdaBase: "https://gcp-eu-cdn.contentstack.com",
    imageBase: "https://gcp-eu-images.contentstack.com",
  },
};

export default function ContentstackAssetsSPA() {
  const [apiKey, setApiKey] = useState("blt4da7391be39cd77d");
  const [deliveryToken, setDeliveryToken] = useState("cs1ee0891f93162b3cbd24f32e");
  const [environment, setEnvironment] = useState("main");
  const [regionName, setRegionName] = useState("AWS Europe");

  const [limit, setLimit] = useState(50);
  const [search, setSearch] = useState("");
  const [onlyImages, setOnlyImages] = useState(true);

  const [imgWidth, setImgWidth] = useState(400);
  const [imgQuality, setImgQuality] = useState(80);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [assets, setAssets] = useState([]);

  const region = REGIONS[regionName];

  const fetchAssets = async () => {
    setLoading(true);
    setError("");
    try {
      const url = `${region.cdaBase}/v3/assets?environment=${encodeURIComponent(
        environment
      )}&include_dimension=true&relative_urls=false&include_count=true&limit=${limit}`;

      const res = await fetch(url, {
        headers: {
          "api_key": apiKey.trim(),
          "access_token": deliveryToken.trim(),
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }

      const data = await res.json();
      const items = Array.isArray(data?.assets) ? data.assets : [];
      setAssets(items);
    } catch (e) {
      setError(e.message || String(e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // auto-load if creds exist
    if (apiKey && deliveryToken && environment) {
      fetchAssets();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    return assets
      .filter((a) => (onlyImages ? (a.content_type || "").startsWith("image/") : true))
      .filter((a) => {
        if (!search) return true;
        const hay = `${a.filename || ""} ${a.title || ""} ${a.description || ""}`.toLowerCase();
        return hay.includes(search.toLowerCase());
      });
  }, [assets, onlyImages, search]);

  const buildImageUrl = (asset) => {
    // Use asset.url from CDA and append Image Delivery query params
    // Must include environment; add width & quality for transformation
    const base = asset.url || ""; // already includes correct domain
    const params = new URLSearchParams({ environment, width: String(imgWidth), quality: String(imgQuality) });
    return `${base}?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-20 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Contentstack Assets Explorer</h1>
          <button
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50"
            onClick={fetchAssets}
            disabled={loading || !apiKey || !deliveryToken || !environment}
            title="Fetch assets"
          >
            {loading ? "Loading..." : "Fetch assets"}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-white rounded-2xl shadow">
            <h2 className="text-lg font-medium mb-3">Credentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label className="text-sm mb-1">Stack API Key</label>
                <input className="border rounded-xl p-2" value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="blt..." />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1">Delivery Token</label>
                <input className="border rounded-xl p-2" value={deliveryToken} onChange={(e) => setDeliveryToken(e.target.value)} placeholder="cs..." />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1">Environment</label>
                <input className="border rounded-xl p-2" value={environment} onChange={(e) => setEnvironment(e.target.value)} placeholder="production" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1">Region</label>
                <select className="border rounded-xl p-2" value={regionName} onChange={(e) => setRegionName(e.target.value)}>
                  {Object.keys(REGIONS).map((key) => (
                    <option key={key} value={key}>{key}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white rounded-2xl shadow">
            <h2 className="text-lg font-medium mb-3">Display & Filters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <input id="onlyImages" type="checkbox" className="accent-indigo-600" checked={onlyImages} onChange={(e) => setOnlyImages(e.target.checked)} />
                <label htmlFor="onlyImages" className="text-sm">Only images</label>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm">Limit</label>
                <input type="number" min={1} max={200} className="border rounded-xl p-2 w-24" value={limit} onChange={(e) => setLimit(Number(e.target.value))} />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm">Search</label>
                <input className="border rounded-xl p-2 w-full" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="filename, title, description..." />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm">Image width</label>
                <input type="number" min={50} max={2000} className="border rounded-xl p-2 w-24" value={imgWidth} onChange={(e) => setImgWidth(Number(e.target.value))} />
                <label className="text-sm">Quality</label>
                <input type="number" min={1} max={100} className="border rounded-xl p-2 w-20" value={imgQuality} onChange={(e) => setImgQuality(Number(e.target.value))} />
              </div>
            </div>
          </div>
        </section>

        {error && (
          <div className="p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-800">
            <div className="font-medium">Error</div>
            <div className="text-sm break-words">{error}</div>
          </div>
        )}

        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-medium">Assets ({filtered.length})</h2>
            <span className="text-sm text-gray-500">Region: {regionName}</span>
          </div>

          {loading ? (
            <div className="text-center py-12 text-gray-500">Fetching assets...</div>
          ) : (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((asset) => (
                <article key={asset.uid} className="bg-white rounded-2xl shadow overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                    {(asset.content_type || "").startsWith("image/") ? (
                      <img
                        src={buildImageUrl(asset)}
                        alt={asset.title || asset.filename}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-gray-500 text-sm p-4 text-center">{asset.content_type || "file"}</div>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="font-medium truncate" title={asset.filename}>{asset.filename}</div>
                    <div className="text-xs text-gray-500 truncate">{asset.title || "Untitled"}</div>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-gray-600">
                      <div>Type: {asset.content_type}</div>
                      {asset?.dimension?.width && asset?.dimension?.height ? (
                        <div>Size: {asset.dimension.width}×{asset.dimension.height}</div>
                      ) : (
                        <div>Size: —</div>
                      )}
                      <div className="col-span-2 truncate">UID: {asset.uid}</div>
                    </div>
                    <a
                      href={`${asset.url}?environment=${environment}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-3 text-indigo-600 hover:text-indigo-800 text-sm"
                    >
                      Open original
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
        Built with Contentstack CDA & Image Delivery APIs. Adjust width/quality to see transformed previews.
      </footer>
    </div>
  );
}
