import type { ServerConfig } from "../../data/servers";

export function ServerSpecsPanel({ server }: { server: ServerConfig }) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-lg font-semibold">{server.label}</p>
        <p className="text-white/60 text-sm">{server.shortSpec}</p>
      </div>

      <div className="space-y-2">
        <div className="text-sm bg-white/5 p-2 rounded">
          {server.pills.npu}
        </div>
        <div className="text-sm bg-white/5 p-2 rounded">
          {server.pills.cpu}
        </div>
        <div className="text-sm bg-white/5 p-2 rounded">
          {server.pills.pcie}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 mt-4">
        {Object.entries(server.specs).map(([k, v]) => (
          <div
            key={k}
            className="p-3 rounded-lg bg-white/5 border border-white/10"
          >
            <p className="text-xs text-white/50 uppercase">{k}</p>
            <p className="text-sm">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}