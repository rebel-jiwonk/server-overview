export function Header() {
  return (
    <header className="py-6 border-b border-white/10">
      <div className="max-w-[92rem] mx-auto">
        <h1 className="text-2xl font-semibold tracking-tight">
          Rebellions Server Overview
        </h1>
        <p className="text-sm text-white/60 max-w-xl">
          Interactive view of server chassis, NPUs, CPU platform and generation.
        </p>
      </div>
    </header>
  );
}